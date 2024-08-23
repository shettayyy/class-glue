export function runBenchmark(
  fn: (...args: unknown[]) => string,
  iterations: number,
) {
  const start = performance.now();
  for (let i = 0; i < iterations; i++) {
    fn('foo', 'bar', 42, null, undefined, 'baz', 100, '', 'qux');
  }
  return performance.now() - start;
}
