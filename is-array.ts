import * as Benchmark from 'benchmark'

import {formatBenchmark, assertEvery} from './_index'
import data from './data/arrays'

// alternatives

function toStringCall(arg) {
  return Object.prototype.toString.call(arg) === '[object Array]'
}

function toStringApply(arg) {
  return Object.prototype.toString.apply(arg) === '[object Array]'
}

function constructorEqual(arg) {
  return arg.constructor == Array
}

function constructorStrictEqual(arg) {
  return arg.constructor === Array
}

function instanceOf(arg) {
  return arg instanceof Array
}

function nativeIsArray(arg) {
  return Array.isArray(arg)
}

const alternatives = [
  toStringCall,
  toStringApply,
  constructorEqual,
  constructorStrictEqual,
  instanceOf,
  nativeIsArray,
]

// benchmark

const suite = new Benchmark.Suite()
.on('cycle', event => {
  const benchmark = event.target as Benchmark
  console.log(formatBenchmark(benchmark, suite))
})
.on('complete', event => {
  const fastest_name = suite.filter('fastest').map('name' as any)
  console.log(`Fastest is: ${fastest_name.join(', ')}`)
})
alternatives.forEach(f => {
  suite.add(f.name, () => {
    assertEvery(data, f)
  })
})
suite.run()
