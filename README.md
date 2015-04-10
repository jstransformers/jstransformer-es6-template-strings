# jstransformer-es6-template-strings

[JSTransformer](http://github.com/jstransformers/jstransformer) support for [es6-template-strings](http://github.com/medikoo/es6-template-strings).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-es6-template-strings/master.svg)](https://travis-ci.org/jstransformers/jstransformer-es6-template-strings)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-es6-template-strings/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-es6-template-strings?branch=master)
[![NPM version](https://img.shields.io/npm/v/jstransformer-es6-template-strings.svg)](https://www.npmjs.org/package/jstransformer-es6-template-strings)

## Installation

    npm install jstransformer-es6-template-strings

## API

```js
var transform = require('jstransformer')(require('jstransformer-es6-template-strings'));

var template = 'Hello, $(name)!';
var locals = {
  name: 'World'
};

transform.render(template, {}, locals).body
//=> 'Hello, World!'
```

## License

MIT
