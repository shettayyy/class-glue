/**
 * Combines multiple string class names into a single string.
 *
 * @description
 * This function is used to dynamically concatenate class names. It accepts only string inputs:
 * - Strings: Used as-is
 * - Empty strings, null, or undefined: Ignored
 *
 * @example
 * import classX from 'class-x/string';
 *
 * classX('foo', 'bar'); // 'foo bar'
 * classX('foo', '', 'baz'); // 'foo baz'
 * classX('foo', undefined, 'bar', null, 'baz'); // 'foo bar baz'
 *
 * @note
 * This is a lightweight version optimized for string-only inputs. For more complex
 * class name combinations involving objects or arrays, use the full `class-x`
 * package.
 */
export default function classX(
  ...args: Array<string | undefined | null | boolean>
) {
  let result = '';
  let first = true;
  const len = args.length;
  for (let i = 0; i < len; i++) {
    const arg = args[i];
    if (arg && typeof arg === 'string') {
      if (first) {
        result = arg;
        first = false; // Mark that the first string is processed
      } else {
        result += ' ' + arg;
      }
    }
  }
  return result;
}
