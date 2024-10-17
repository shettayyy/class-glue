# class-glue 💫

> class-glue is a lightweight utility library for dynamically generating class names in JavaScript applications. It provides a simple and intuitive way to conditionally apply class names based on variables or conditions, making it easier to manage styles and classNames in React, React Native, and other JavaScript projects. With class-glue, you can efficiently construct classNames without repetitive ternary expressions or complex logic, improving code readability and maintainability.

## Features ✨

- 💡 Supports dynamic class name generation based on conditions.
- 🔄 Compatible with React, React Native, Vue.js, Angular, and other JavaScript frameworks.
- 🛠 Lightweight and easy to use, with no external dependencies.
- 🔍 TypeScript support for type safety and IntelliSense.
- 🧩 Modular and extensible design, allowing customization and integration with existing projects.
- 🚀 Optimized performance for minimal impact on application speed and efficiency.
- 📚 Comprehensive documentation with usage examples and API reference.
- 🛡️ Robust testing suite with unit tests and integration tests for reliable codebase.
- 🌐 Cross-platform compatibility, ensuring consistent behavior across different environments.

## Usage

class-glue provides a main function and multiple utility functions, each available in different formats:

- CommonJS: `dist/[utility].js`
- ES Module: `dist/esm/[utility].js`
- UMD: `dist/umd/[utility].js` (minified version: `dist/umd/[utility].min.js`)

Where [utility] can be:

- index (main export)
- join-strings
- keys-to-strings
- merge-module-strings
- merge-styles

For direct browser usage via CDN:

```html
<!-- Main library -->
<script src="https://unpkg.com/class-glue"></script>

<!-- Individual utilities -->
<script src="https://unpkg.com/class-glue/dist/umd/join-strings.min.js"></script>
<script src="https://unpkg.com/class-glue/dist/umd/keys-to-strings.min.js"></script>
<script src="https://unpkg.com/class-glue/dist/umd/merge-module-strings.min.js"></script>
<script src="https://unpkg.com/class-glue/dist/umd/merge-styles.min.js"></script>
```

When using UMD builds in a browser, the main function and utilities are available under the following names:

- `classG` (main export)
- `classGJoinStrings`
- `classGKeysToStrings`
- `classGMergeModuleStrings`
- `classGMergeStyles`

Example:

```javascript
const classNames = classG('foo', { bar: true, baz: false });
console.log(classNames); // "foo bar"

const joinedClasses = classGJoinStrings('foo', 'bar', 'baz');
console.log(joinedClasses); // "foo bar baz"
```

## Tree-Shaking

class-glue is designed to be fully tree-shakeable. When using a modern bundler like webpack, Rollup, or Parcel with ES modules, only the functions you actually use will be included in your final bundle. This means you can safely import from 'class-glue' without worrying about bringing in unnecessary code:

```javascript
import { joinStrings, keysToStrings } from 'class-glue';

// Only the joinStrings and keysToStrings functions will be included in your bundle
```

For even more granular control, you can import specific functions directly:

```javascript
import joinStrings from 'class-glue/join-strings';
import keysToStrings from 'class-glue/keys-to-strings';

// This ensures only the specific functions are imported
```

[![Sponsor](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/shettayyy)
