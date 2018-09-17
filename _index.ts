import * as Benchmark from 'benchmark'

function formatNumber(value: number,
                      max?: number,
                      fractionDigits?: number): string {
  const value_string = (fractionDigits !== undefined) ? value.toFixed(fractionDigits) : value.toString(10)
  const [whole, fraction] = value_string.split('.')
  const formatted_string = whole.replace(/(?=(?:\d{3})+$)(?!\b)/g, ',') + (fraction ? `.${fraction}` : '')
  if (max !== undefined) {
    const max_value_length = Math.ceil(Math.log10(max) * 4 / 3) + (fractionDigits ? fractionDigits + 1 : 0)
    return formatted_string.padStart(max_value_length)
  }
  return formatted_string
}

function maxLength(collections: {length: number}[]): number {
  return Math.max.apply(null, collections.map(item => item.length))
}

function benchmarkName(benchmark: Benchmark): string {
  return (benchmark['name'] as string) || `<Test #${benchmark['id']}>`
}

export function formatBenchmark(benchmark: Benchmark,
                                suite?: Benchmark.Suite) {
  // Benchmark:
  //   count     - The number of times a test was executed.
  //   cycles    - The number of cycles performed while benchmarking.
  //   error     - The error object if the test failed.
  //   hz        - The number of executions per second.
  const {count, cycles, error, hz, stats, times} = benchmark
  // Stats:
  //   deviation - The sample standard deviation.
  //   mean      - The sample arithmetic mean (secs).
  //   moe       - The margin of error.
  //   rme       - The relative margin of error (expressed as a percentage of the mean).
  //   sample    - he array of sampled periods.
  //   sem       - The standard error of the mean.
  //   variance  - The sample variance.
  const {deviation, mean, moe, rme, sample, sem, variance} = stats
  // Times:
  //   cycle     - The time taken to complete the last cycle (secs).
  //   elapsed   - The time taken to complete the benchmark (secs).
  //   period    - The time taken to execute the test once (secs).
  //   timeStamp - A timestamp of when the benchmark started (ms).
  const {cycle, elapsed, period, timeStamp} = times
  // const size = stats.sample.length

  const max_name_length = suite ? maxLength(suite.map(benchmarkName)) : 0
  const results = [benchmarkName(benchmark).padEnd(max_name_length)]

  if (error) {
    results.push(`: ${Benchmark.join(error)}`)
  }
  else {
    results.push(`⨉ ${formatNumber(hz, 1e8, hz < 100 ? 2 : 0)} ops/sec`,
                 `±${stats.rme.toFixed(2).padStart(5)}%`,
                 `(${sample.length} runs sampled)`)
  }
  return results.join(' ')
}

export function assertEvery<T>(values: T[], f: (value: T) => boolean) {
  const success = values.every(f)
  if (!success) {
    throw new Error('f(value) should return true for every value in values')
  }
}
