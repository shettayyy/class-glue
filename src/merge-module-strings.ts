import classX from './index';
import type { ClassValue } from './types';

type StyleModule = { [key: string]: string };

/**
 * Creates a function that combines class names from a specific CSS module with additional class values.
 *
 * @param styleModule - The imported CSS module object
 * @returns A function that merges class names
 *
 * @example
 * import styles from './styles.module.css';
 * import createClassX from 'class-x/merge-module-strings';
 *
 * const cx = createClassX(styles);
 * cx('title', { titleActive: true }); // Returns: "styles.title styles.titleActive"
 */
export default function createClassX(styleModule: StyleModule) {
  const processArg = (arg: ClassValue): ClassValue => {
    if (typeof arg === 'string') {
      return styleModule[arg] || arg;
    }
    if (typeof arg === 'object' && arg !== null) {
      if (Array.isArray(arg)) {
        return arg.map(processArg);
      }
      const processed: { [key: string]: boolean | undefined | null } = {};
      for (const key in arg) {
        const processedKey = styleModule[key] || key;
        processed[processedKey] = arg[key];
      }
      return processed;
    }
    return arg;
  };

  return (...args: ClassValue[]): string => {
    const processedArgs = args.map(processArg);
    return classX(...processedArgs);
  };
}
