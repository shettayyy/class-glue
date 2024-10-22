export type ClassObject = { [key: string]: boolean | undefined | null };
export type ClassArray = ClassValue[];
export type ClassValue =
  | string
  | number
  | boolean
  | undefined
  | null
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
 * import classGlue from 'class-glue';
 *
 * classGlue('foo', 'bar'); // 'foo bar'
 * classGlue('foo', { bar: true, baz: false }); // 'foo bar'
 * classGlue('foo', ['bar', { baz: true }]); // 'foo bar baz'
 *
 * @note
 * For optimal performance, pass only plain objects or objects created with Object.create(null)
 * when using object syntax. The function does not check for inherited properties.
 *
 */
export default function classGlue(...args: ClassValue[]): string {
  let result = '';
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg) {
      if (typeof arg === 'string' || typeof arg === 'number') {
        result += result ? ` ${arg}` : `${arg}`;
      } else if (Array.isArray(arg)) {
        const inner = classGlue.apply(null, arg);

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
