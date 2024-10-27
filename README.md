# class-glue 💫

[![npm version](https://img.shields.io/npm/v/class-glue.svg?style=flat)](https://www.npmjs.com/package/class-glue) [![npm downloads](https://img.shields.io/npm/d18m/class-glue.svg?style=flat)](https://www.npmjs.com/package/class-glue) [![bundle size](https://img.shields.io/bundlephobia/minzip/class-glue?label=bundle%20size)](https://bundlephobia.com/package/class-glue) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com) [![Release](https://github.com/shettayyy/class-glue/actions/workflows/release.yml/badge.svg)](https://github.com/shettayyy/class-glue/actions/workflows/release.yml) [![Build](https://github.com/shettayyy/class-glue/actions/workflows/pr-checks.yml/badge.svg)](https://github.com/shettayyy/class-glue/actions/workflows/pr-checks.yml) [![Sponsor](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/shettayyy)

> A lightweight (< 450B) yet powerful utility for dynamic class name generation in JavaScript applications. Perfect for React, React Native, Vue.js, and any JavaScript project where you need flexible class name handling with type safety.

## Introduction

class-glue solves the common challenge of managing dynamic class names in modern web applications. Whether you're toggling classes based on state, merging CSS modules, or handling complex conditional styling, class-glue provides an elegant and performant solution.

### Why class-glue?

- 🪶 **Lightweight**: Entire core is just 425B (minified + gzipped), with modular utilities each under 540B
- 🔍 **Type-Safe**: Built with TypeScript for robust type checking and excellent IDE support
- 🌐 **Framework Agnostic**: Works seamlessly with React, React Native/Expo, Vue, Angular, or vanilla JavaScript
- 🧩 **Modular Design**: Import only what you need - each utility can be used standalone
- 🎯 **Zero Dependencies**: No external dependencies means no bloat in your project
- 🌳 **Tree-Shakeable**: Modern bundlers can eliminate unused code for optimal bundle size
- ⚡ **Performance Focused**: Optimized internals with minimal runtime overhead

### Core Features

#### 🎯 Multiple API Styles

- **Main API** (`class-glue`): Full-featured class name generation
- **String Only** (`join-strings`): Optimized for simple string concatenation
- **Object Keys** (`keys-to-strings`): Efficient object-based class generation
- **CSS Modules** (`merge-module-strings`): First-class CSS Modules support
- **Style Objects** (`merge-styles`): React Native and style object handling

#### 💡 Smart Type System

- Full TypeScript support with detailed type definitions
- Intelligent type inference for better development experience
- Strict type checking to catch errors early

#### 🛠 Developer Experience

- Comprehensive source maps for easy debugging
- Detailed error messages in development
- Extensive documentation with real-world examples

#### 🔋 Production Ready

- Thoroughly tested with 100% coverage
- Used in production by numerous projects
- Active maintenance and community support

### Quick Examples

#### Basic Usage

```typescript
import classGlue from 'class-glue';

classGlue('btn', { active: true }, ['primary']);
// => 'btn active primary'
```

#### String-Only Operations

```typescript
import classGlueString from 'class-glue/join-strings';

classGlueString('card', isActive && 'card-active');
// => 'card card-active' (if isActive is true)
```

#### Object-Based Operations

```typescript
import keysToStrings from 'class-glue/keys-to-strings';

keysToStrings({
  btn: true,
  'btn-active': isActive
});
// => 'btn btn-active' (if isActive is true)
```

#### CSS Modules Support

```typescript
import createModuleGlue from 'class-glue/merge-module-strings';
import styles from './Button.module.css';

const moduleGlue = createModuleGlue(styles);
moduleGlue('button', { active: isActive });
// => 'Button_button_x7d Button_active_d4f'
```

#### React Native Style Handling

```typescript
import createStyleGlue from 'class-glue/merge-styles';

const styleGlue = createStyleGlue({
  base: { padding: 10 },
  active: { backgroundColor: 'blue' }
});
styleGlue('base', { active: isActive });
// => { padding: 10, backgroundColor: 'blue' }
```

## Installation

### Package Managers

#### NPM

```bash copy
npm install class-glue
```

#### Yarn

```bash copy
yarn add class-glue
```

#### PNPM

```bash copy
pnpm add class-glue
```

#### Bun

```bash copy
bun add class-glue
```

### CDN Usage

```html
<!-- Global: window.classG -->
<script src="https://unpkg.com/class-glue"></script>

<!-- Individual utilities -->
<script src="https://unpkg.com/class-glue/dist/umd/join-strings.min.js"></script>        <!-- window.classGJoinStrings -->
<script src="https://unpkg.com/class-glue/dist/umd/keys-to-strings.min.js"></script>     <!-- window.classGKeysToStrings -->
<script src="https://unpkg.com/class-glue/dist/umd/merge-module-strings.min.js"></script> <!-- window.classGMergeModuleStrings -->
<script src="https://unpkg.com/class-glue/dist/umd/merge-styles.min.js"></script>        <!-- window.classGMergeStyles -->
```

> When using via CDN, the utilities are available as:
>
> - `window.classG` (main)
> - `window.classGJoinStrings`
> - `window.classGKeysToStrings`
> - `window.classGMergeModuleStrings`
> - `window.classGMergeStyles`

### Import Formats

class-glue ships with multiple build formats:

| Format | Entry Point | Usage |
| --- | --- | --- |
| CommonJS | `dist/index.js` | Node.js, Webpack, etc. |
| ES Module | `dist/esm/index.js` | Modern bundlers |
| UMD | `dist/umd/index.min.js` | Direct browser usage |

Each utility is available in all formats above. Import the one that best suits your needs:

```typescript copy
// ES Modules (Recommended)
import classGlue from 'class-glue';

// CommonJS
const classGlue = require('class-glue');

// Individual utilities
import joinStrings from 'class-glue/join-strings';
import keysToStrings from 'class-glue/keys-to-strings';
import createModuleGlue from 'class-glue/merge-module-strings';
import createStyleGlue from 'class-glue/merge-styles';
```

## Usage Examples

### Basic Usage Example

```typescript copy
import classGlue from 'class-glue';

// Simple strings
classGlue('btn', 'primary');  // => 'btn primary'

// Conditionals
classGlue('btn', {
  'btn-primary': true,
  'btn-disabled': false
});  // => 'btn btn-primary'

// Arrays
classGlue('btn', ['primary', 'disabled']);  // => 'btn primary disabled'

// Ignored values
classGlue('btn', undefined, null, false);  // => 'btn'

// Mixed values (strings, objects, arrays, etc.)
classGlue('btn', 'primary', { active: true }, ['disabled']);  // => 'btn primary active disabled'
```

### React Integration

```tsx copy
import classGlue from 'class-glue';

function Button({ isActive, isDisabled, size, children }) {
  return (
    <button
      className={classGlue(
        'btn',
        {
          'btn-active': isActive,
          'btn-disabled': isDisabled,
        },
        size && `btn-${size}`
      )}
    >
      {children}
    </button>
  );
}
```

### CSS Modules

```tsx copy
import createModuleGlue from 'class-glue/merge-module-strings';
import styles from './Card.module.css';

const clgl = createModuleGlue(styles);

function Card({ isHighlighted }) {
  return (
    <div className={clgl('card', { cardHighlighted: isHighlighted })}>
      {/* Resolves to actual CSS Module classes like "Card_card_x7d Card_cardHighlighted_f3j" */}
    </div>
  );
}
```

### Style Objects (React Native)

```tsx copy
import createStyleGlue from 'class-glue/merge-styles';

const styles = {
  container: { padding: 16, borderRadius: 8 },
  active: { backgroundColor: 'blue' },
  disabled: { opacity: 0.5 }
};

const clgl = createStyleGlue(styles);

function Card({ isActive, isDisabled }) {
  return (
    <View style={clgl('container', {
      active: isActive,
      disabled: isDisabled
    })}>
      {/* Merges styles based on conditions */}
    </View>
  );
}
```

### Conditional Classes

```typescript copy
import keysToStrings from 'class-glue/keys-to-strings';

// Object syntax for multiple conditions
keysToStrings({
  base: true,                    // always included
  active: isActive,              // included if isActive is true
  disabled: isDisabled,          // included if isDisabled is true
  [`size-${size}`]: size,       // included if size is truthy
  [styles.custom]: hasCustom     // CSS Module class names work too
});
```

### TypeScript Usage

```typescript copy
import classGlue from 'class-glue';
import type { ClassValue } from 'class-glue';

// All utilities are fully typed
function Button<T extends string>({ className, variant }: {
  className?: ClassValue;
  variant?: T;
}) {
  return (
    <button
      className={classGlue(
        'btn',
        className,           // safely accepts ClassValue type
        variant && `btn-${variant}`
      )}
    />
  );
}
```

## API Reference

### class-glue (Main)

```typescript copy
import classGlue from 'class-glue';

classGlue(...args: ClassValue[]): string;

type ClassValue =
  | string
  | number
  | boolean
  | undefined
  | null
  | { [key: string]: boolean | undefined | null }
  | ClassValue[];

// Full featured class name generation
classGlue(
  'string',           // plain strings
  { active: true },   // object keys with boolean values
  ['array', 'of', 'classes'],  // arrays
  undefined,          // ignored
  null,              // ignored
  false              // ignored
);
```

### join-strings

```typescript copy
import joinStrings from 'class-glue/join-strings';

joinStrings(...args: Array<string | undefined | null | boolean>): string;

// Optimized for string-only operations
joinStrings(
  'button',
  isActive && 'active',    // conditional strings
  undefined,               // ignored
  null,                    // ignored
  isPrimary && 'primary'
);
```

### keys-to-strings

```typescript copy
import keysToStrings from 'class-glue/keys-to-strings';

keysToStrings(obj: { [key: string]: boolean | undefined | null }): string;

// Efficient object-based class generation
keysToStrings({
  btn: true,              // always included
  'btn-primary': isPrimary,  // included if isPrimary is true
  'btn-active': isActive,    // included if isActive is true
  'btn-disabled': false      // never included
});
```

### merge-module-strings

```typescript copy
import createModuleGlue from 'class-glue/merge-module-strings';
import type { ClassValue } from 'class-glue';

createModuleGlue(styleModule: { [key: string]: string }): 
  (...args: ClassValue[]) => string;

// CSS Modules integration
import styles from './Button.module.css';
const clgl = createModuleGlue(styles);

clgl(
  'button',           // looks up 'button' in styles object
  { active: true },   // looks up 'active' in styles object
  styles.custom      // used as-is
);
```

### merge-styles

```typescript copy
import createStyleGlue from 'class-glue/merge-styles';
import type { ClassValue } from 'class-glue';

createStyleGlue(styles: { [key: string]: any }): 
  (...args: ClassValue[]) => { [key: string]: any };

// Style object merging (React Native)
const styles = {
  base: { padding: 16 },
  active: { backgroundColor: 'blue' }
};
const clgl = createStyleGlue(styles);

clgl(
  'base',             // includes base styles
  { active: true },   // merges active styles
  customStyles       // merges custom styles
);
```

Each utility is designed for specific use cases:

- `class-glue`: Full-featured, handles all types
- `join-strings`: Optimized for string-only operations
- `keys-to-strings`: Efficient object-based class generation
- `merge-module-strings`: CSS Modules integration
- `merge-styles`: Style object merging (React Native)

## Contributing

Contributions are always welcome! Please read the [contribution guidelines](CONTRIBUTING.md) before getting started.

## Reporting Issues

If you encounter any issues while using class-glue, please open an issue on the [GitHub repository](https://github.com/shettayyy/class-glue/issues/new/choose). Make sure to include a clear description, steps to reproduce the issue, and any relevant code snippets or error messages.

## Author

<table>
  <tr>
    <td>
      <a href="https://github.com/shettayyy" target="_blank">
        <img width="160" height="160" src="https://github.com/shettayyy.png?size=160" style="border-radius: 50%;" alt="Rahul Shetty" />
      </a>
    </td>
    <td>
      <div><strong>Rahul Shetty</strong></div>
      <div><sub>Lead Engineer & Open Source Enthusiast</sub></div>
      <br/>
      <div>
        <a href="https://github.com/shettayyy" target="_blank">GitHub</a> ・
        <a href="https://twitter.com/shettayyy" target="_blank">Twitter</a> ・
        <a href="https://linkedin.com/in/shettayyy" target="_blank">LinkedIn</a>
      </div>
    </td>
  </tr>
</table>

## Support

If you find class-glue useful, please consider:

- Starring the [repository](https://github.com/shettayyy/class-glue) ⭐
- [Supporting the project](https://github.com/sponsors/shettayyy) 💖
- [Contributing](CONTRIBUTING.md) to the project 🤝
- Sharing your feedback and ideas 💭
- Referring to the project in your blog posts or articles 📝
- Sharing the project with your friends and colleagues 👫

Thank you for your support! 🙏

## Acknowledgements

class-glue is inspired by [clsx](https://github.com/lukeed/clsx), but with added features for TypeScript, CSS Modules, and React Native styles.

## License

[MIT](LICENSE) © [Rahul Shetty](https://github.com/shettayyy)

---

<div align="center">
  <sub>Built with ❤️ by Rahul Shetty and <a href="https://github.com/shettayyy/class-glue/graphs/contributors">contributors</a></sub>
</div>
