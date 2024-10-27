# class-glue 💫

[![npm version](https://img.shields.io/npm/v/class-glue.svg?style=flat)](https://www.npmjs.com/package/class-glue) [![npm downloads](https://img.shields.io/npm/d18m/class-glue.svg?style=flat)](https://www.npmjs.com/package/class-glue) [![bundle size](https://img.shields.io/bundlephobia/minzip/class-glue?label=bundle%20size)](https://bundlephobia.com/package/class-glue) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![GitHub stars](https://img.shields.io/github/stars/shettayyy/class-glue.svg?style=social)](https://github.com/shettayyy/class-glue) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com) [![Sponsor](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/shettayyy) [![Release](https://github.com/shettayyy/class-glue/actions/workflows/release.yml/badge.svg)](https://github.com/shettayyy/class-glue/actions/workflows/release.yml) [![Build](https://github.com/shettayyy/class-glue/actions/workflows/pr-checks.yml/badge.svg)](https://github.com/shettayyy/class-glue/actions/workflows/pr-checks.yml)

> A lightweight (< 450B) yet powerful utility for dynamic class name generation in JavaScript applications. Perfect for React, React Native, Vue.js, and any JavaScript project where you need flexible class name handling with type safety. Heavily inspired by [clsx](https://github.com/lukeed/clsx), but with added features for TypeScript, CSS Modules, and React Native styles.

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
