import * as Benchmark from 'benchmark'

import {formatBenchmark, assertEvery} from './_index'
import data from './data/deep'

const hasOwnProperty = Object.prototype.hasOwnProperty

// setup

function stringifyAndParse<T extends any>(source: T): T {
  return JSON.parse(JSON.stringify(source))
}

function keyByKey<T extends any>(source: T): T {
  if (source == null || typeof source != 'object') {
    return source
  }
  // `new source.constructor()` is faster than `(source.constructor === Array) ? [] : {}`
  const target: any = new source.constructor()
  for (const key in source) {
    target[key] = keyByKey(source[key])
  }
  return target
}

function arrayVsObject<T extends any>(source: T): T {
  // loose-equality checking for null is faster than strict checking for each of null/undefined/true/false
  // checking null first, then calling typeof, is faster than vice-versa
  if (source == null || typeof source != 'object') {
    // short-circuiting is faster than a single return
    return source
  }
  // x.constructor == Array is the fastest way to check if x is an Array
  if (source.constructor == Array) {
    // construction via imperative for-loop is faster than source.map(arrayVsObject)
    const length = source.length
    // setting the Array length during construction is faster than just `[]` or `new Array()`
    const arrayTarget: any = new Array(length)
    for (let i = 0; i < length; i++) {
      arrayTarget[i] = arrayVsObject(source[i])
    }
    return arrayTarget
  }
  // Object
  const objectTarget: any = {}
  // declaring the variable (with const) inside the loop is faster
  for (const key in source) {
    // hasOwnProperty costs a bit of performance, but it's semantically necessary
    // using a global helper is MUCH faster than calling source.hasOwnProperty(key)
    if (hasOwnProperty.call(source, key)) {
      objectTarget[key] = arrayVsObject(source[key])
    }
  }
  return objectTarget
}

const alternatives = [
  stringifyAndParse,
  keyByKey,
  arrayVsObject,
]

// run benchmark

const suite = new Benchmark.Suite()
.on('cycle', event => {
  const benchmark = event.target as Benchmark
  console.log(formatBenchmark(benchmark, suite))
})
.on('complete', event => {
  const fastest_name = suite.filter('fastest').map('name' as any)
  console.log(`\nFastest: ${fastest_name.join(', ')}`)
})
alternatives.forEach(f => {
  suite.add(f.name, () => f(data))
})
suite.run()
