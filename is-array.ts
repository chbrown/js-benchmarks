import * as Benchmark from 'benchmark'
import {formatBenchmark, assertEvery} from './_index'

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

// data

const data = [
  [
    {
      _id: '4b9b5a2e-bab9-11e8-90d3-2be7d86c0c13',
      shiny: false,
      quantity: 401,
      price: '$226.72',
    },
    {
      _id: '4b9b5d08-bab9-11e8-90d4-37a76ba2129b',
      shiny: true,
      quantity: 663,
      price: '$21.75',
    },
    {
      _id: '4b9b5d80-bab9-11e8-90d5-f3172d83bccb',
      shiny: false,
      quantity: 261,
      price: '$322.72',
    },
    {
      _id: '4b9b5e16-bab9-11e8-90d6-4ff1989bffa2',
      shiny: true,
      quantity: 308,
      price: '$312.55',
    },
  ],
  [],
  [
     1,  2,  3,  4,  5,  6,  7,  8,  9,  10,
    11, 12, 13, 14, 15, 16, 17, 18, 19,  20,
    21, 22, 23, 24, 25, 26, 27, 28, 29,  30,
    31, 32, 33, 34, 35, 36, 37, 38, 39,  40,
    41, 42, 43, 44, 45, 46, 47, 48, 49,  50,
    51, 52, 53, 54, 55, 56, 57, 58, 59,  60,
    61, 62, 63, 64, 65, 66, 67, 68, 69,  70,
    71, 72, 73, 74, 75, 76, 77, 78, 79,  80,
    81, 82, 83, 84, 85, 86, 87, 88, 89,  90,
    91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
  ],
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
