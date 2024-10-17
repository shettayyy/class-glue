/**
 * Combines object keys into a space-separated string based on truthy values.
 *
 * @description
 * This function efficiently generates a string of class names from an object.
 * It iterates through the object's keys, including those with truthy values
 * in the resulting string. The function is optimized for performance,
 * avoiding unnecessary space concatenation for the first class name.
 *
 * @example
 * classY({ foo: true, bar: false, baz: true }); // 'foo baz'
 * classY({ a: 1, b: 0, c: null, d: undefined, e: 'yes' }); // 'a e'
 *
 */
export default function classY(obj: {
  [key: string]: boolean | undefined | null;
}) {
  let k: string;
  let cls = '';
  let first = true; // Flag to skip the initial space concatenation

  for (k in obj) {
    if (obj[k]) {
      if (first) {
        cls = k; // Directly assign the first class name
        first = false;
      } else {
        cls += ' ' + k; // Concatenate with a space for subsequent keys
      }
    }
  }

  return cls;
}
