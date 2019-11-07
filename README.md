# PostCSS Border Align [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

Allows you to create borders which do not affect the layout of the document.

```pcss
.example {
  border: inside 2px solid red;
}
```

Outputs:

```css
.example {
  box-shadow: inset 0 0 0 2px red;
}
```

Currently the plugin only works with solid borders, and will accept `inside` or `outside`.

## Setup

```bash
npm install postcss-border-align --save-dev
```

[cli-img]: https://img.shields.io/travis/limitlessloop/postcss-border-align.svg
[cli-url]: https://travis-ci.org/limitlessloop/postcss-border-align
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[npm-img]: https://img.shields.io/npm/v/postcss-border-align.svg
[npm-url]: https://www.npmjs.com/package/postcss-border-align

[PostCSS]: https://github.com/postcss/postcss
[PostCSS Border Align]: https://github.com/mindthetic/postcss-border-align
