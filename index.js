'use strict';

var compile = require('es6-template-strings/compile');
var resolveToString = require('es6-template-strings/resolve-to-string');

exports.name = 'es6-template-strings';
exports.inputFormats = ['es6-template-strings', 'es6-template-string'];
exports.outputFormat = 'html';

exports.compile = function (str, options) {
  // Compile the template string using `es6-templates`.
  var compiled = compile(str);

  // Build the render function, which takes the locals.
  return function(locals) {
    return resolveToString(compiled, locals);
  };
};
