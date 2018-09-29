# PostCSS Border Align [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[PostCSS Border Align] lets you do this in CSS.

```pcss
.example {}

/* becomes */

.example {}
```

## Usage

Add [PostCSS Border Align] to your project:

```bash
npm install postcss-border-align --save-dev
```

Use [PostCSS Border Align] to process your CSS:

```js
const postcssBorderAlign = require('postcss-border-align');

postcssBorderAlign.process(YOUR_CSS /*, processOptions, pluginOptions */);
```

Or use it as a [PostCSS] plugin:

```js
const postcss = require('postcss');
const postcssBorderAlign = require('postcss-border-align');

postcss([
  postcssBorderAlign(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);
```

[PostCSS Border Align] runs in all Node environments, with special instructions for:

| [Node](INSTALL.md#node) | [PostCSS CLI](INSTALL.md#postcss-cli) | [Webpack](INSTALL.md#webpack) | [Create React App](INSTALL.md#create-react-app) | [Gulp](INSTALL.md#gulp) | [Grunt](INSTALL.md#grunt) |
| --- | --- | --- | --- | --- | --- |

[cli-img]: https://img.shields.io/travis/mindthetic/postcss-border-align.svg
[cli-url]: https://travis-ci.org/mindthetic/postcss-border-align
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[npm-img]: https://img.shields.io/npm/v/postcss-border-align.svg
[npm-url]: https://www.npmjs.com/package/postcss-border-align

[PostCSS]: https://github.com/postcss/postcss
[PostCSS Border Align]: https://github.com/mindthetic/postcss-border-align
