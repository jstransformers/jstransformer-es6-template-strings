# jstransformer-es6-template-strings

[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-es6-template-strings.svg)](https://greenkeeper.io/)

[es6-template-strings](https://github.com/medikoo/es6-template-strings) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-es6-template-strings/master.svg)](https://travis-ci.org/jstransformers/jstransformer-es6-template-strings)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-es6-template-strings/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-es6-template-strings)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-es6-template-strings/master.svg)](http://david-dm.org/jstransformers/jstransformer-es6-template-strings)
[![NPM version](https://img.shields.io/npm/v/jstransformer-es6-template-strings.svg)](https://www.npmjs.org/package/jstransformer-es6-template-strings)

## Installation

    npm install jstransformer-es6-template-strings

## API

```js
var transform = require('jstransformer')(require('jstransformer-es6-template-strings'));
var template = 'Hello, ${name}!';

transform.render(template, { name: 'World!' } ).body;
//=> 'Hello, World!'
```

## License

MIT
