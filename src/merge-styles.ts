import type { ClassValue } from './types';

type StyleObj = { [key: string]: unknown };

/**
 * Combines multiple class values into a single style object.
 *
 * @description
 * This function is used to dynamically generate style objects for UI components.
 * It accepts various types of inputs:
 * - Strings: Used as keys to lookup styles in the provided styles object
 * - Numbers: Converted to strings and used as keys to lookup styles
 * - Objects: Keys are used to lookup styles if the corresponding value is truthy
 * - Arrays: Recursively flattened and processed
 * - Falsy values (false, null, undefined, 0, ""): Ignored
 *
 * @param {StyleObj} styles - The styles object containing the style definitions
 * @param {...ClassValue} args - The class values to be combined
 * @returns {StyleObj} A merged style object
 *
 * @example
 * const styles = {
 *   title: { fontSize: 20, fontWeight: 'bold' },
 *   active: { color: 'blue' },
 *   padding: { padding: 10 },
 * };
 *
 * classX(styles, 'title', { active: true }, ['padding']);
 * // Returns: { fontSize: 20, fontWeight: 'bold', color: 'blue', padding: 10 }
 */
function classX(styles: StyleObj, ...args: ClassValue[]): StyleObj {
  const result: StyleObj = {};

  function merge(arg: ClassValue) {
    if (arg === null || arg === undefined) return;

    if (typeof arg === 'string' || typeof arg === 'number') {
      Object.assign(result, styles[arg as string] || {});
    } else if (Array.isArray(arg)) {
      arg.forEach(merge);
    } else if (typeof arg === 'object') {
      for (const key of Object.keys(arg)) {
        if (arg[key] && key in styles) {
          Object.assign(result, styles[key]);
        }
      }
    }
  }

  args.forEach(merge);
  return result;
}

/**
 * Creates a function that combines styles from a specific styles object with additional class values.
 *
 * @description
 * This function creates a utility that merges styles based on provided class names and conditions.
 * It's similar to the `classnames` library, but works with style objects instead of strings.
 *
 * @param {StyleObj} styles - The object containing the style definitions
 * @returns {(...args: ClassValue[]) => StyleObj} A function that merges styles
 *
 * @example
 * import createClassX from './classX';
 *
 * const styles = {
 *   container: { flex: 1 },
 *   active: { backgroundColor: 'blue' },
 *   padding: { padding: 10 },
 *   margin: { margin: 5 },
 * };
 *
 * const cx = createClassX(styles);
 *
 * function MyComponent({ isActive }) {
 *   return (
 *     <View style={cx('container', { active: isActive }, ['padding', { margin: true }])}>
 *       <Text>Hello, World!</Text>
 *     </View>
 *   );
 * }
 *
 * @note
 * The returned function handles null and undefined values gracefully, ignoring them in the final output.
 */
export default function createClassX(styles: StyleObj) {
  return (...args: ClassValue[]): StyleObj => {
    return classX(styles, ...args);
  };
}
