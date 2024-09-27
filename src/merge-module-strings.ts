import classX, { type ClassValue } from './index';

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
  return (...args: ClassValue[]): string => {
    const processedArgs = args.map(arg => {
      if (typeof arg === 'string') {
        return styleModule[arg] || arg;
      }
      if (typeof arg === 'object' && !Array.isArray(arg)) {
        const processedObj: { [key: string]: boolean | undefined | null } = {};
        for (const key in arg) {
          const processedKey = styleModule[key] || key;
          processedObj[processedKey] = arg[key];
        }
        return processedObj;
      }
      return arg;
    });

    return classX(...processedArgs);
  };
}
