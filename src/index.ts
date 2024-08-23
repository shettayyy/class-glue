type ClassObject = { [key: string]: boolean | undefined | null };
type ClassArray = ClassValue[];
type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | ClassObject
  | ClassArray;

/**
 * Combines multiple class values into a single string.
 *
 * @description
 * This function is used to dynamically generate class names. It accepts various types of inputs:
 * - Strings: Used as-is
 * - Numbers: Converted to strings
 * - Objects: Keys are used as class names if the corresponding value is truthy
 * - Arrays: Recursively flattened and processed
 * - Falsy values (false, null, undefined, 0, ""): Ignored
 *
 * @example
 * import cx from 'class-x';
 *
 * cx('foo', 'bar'); // 'foo bar'
 * cx('foo', { bar: true, baz: false }); // 'foo bar'
 * cx('foo', ['bar', { baz: true }]); // 'foo bar baz'
 *
 * @note
 * For optimal performance, pass only plain objects or objects created with Object.create(null)
 * when using object syntax. The function does not check for inherited properties.
 *
 * @param {...ClassValue} args - Any number of class values to be combined.
 * @returns {string} A string of combined class names.
 */
export default function cx(...args: ClassValue[]): string {
  let result = '';
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg) {
      if (typeof arg === 'string' || typeof arg === 'number') {
        result += result ? ` ${arg}` : `${arg}`;
      } else if (Array.isArray(arg)) {
        const inner = cx.apply(null, arg);

        if (inner) {
          result += result ? ` ${inner}` : inner;
        }
      } else if (typeof arg === 'object') {
        for (const key in arg) {
          if (arg[key]) {
            result += result ? ` ${key}` : key;
          }
        }
      }
    }
  }
  return result;
}
