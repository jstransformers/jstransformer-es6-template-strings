'use strict'

const compile = require('es6-template-strings/compile')
const resolveToString = require('es6-template-strings/resolve-to-string')

exports.name = 'es6-template-strings'
exports.inputFormats = ['es6-template-strings', 'es6-template-string']
exports.outputFormat = 'html'

exports.compile = function (str) {
  const compiled = compile(str)

  return function (locals) {
    return resolveToString(compiled, locals)
  }
}
