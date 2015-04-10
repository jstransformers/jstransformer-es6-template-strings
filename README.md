# jstransformer-es6-templates

JSTransformer support for [es6-templates](https://github.com/esnext/es6-templates).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-es6-templates/master.svg)](https://travis-ci.org/jstransformers/jstransformer-es6-templates)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-es6-templates/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-es6-templates?branch=master)
[![NPM version](https://img.shields.io/npm/v/jstransformer-es6-templates.svg)](https://www.npmjs.org/package/jstransformer-es6-templates)

## Installation

    npm install jstransformer-es6-templates

## API

```js
var transform = require('jstransformer')(require('jstransformer-es6-templates'));

var template = 'Hello, $(name)!';
var locals = {
  name: "World"
};

transform.render(template, {}, locals).body
//=> 'Hello, World!'
```

## License

MIT
