'use strict';

var engine = require('es6-templates');

exports.name = 'es6-templates';
exports.inputFormats = ['es6-templates', 'es6-template'];
exports.outputFormat = 'html';

exports.compile = function (str, options) {
	// Compile the template string using `es6-templates`.
  var compiled = engine.compile('`' + str + '`', options);

  // Build the render function, which takes the locals.
  return function(locals) {
    locals = locals || {};

  	// Retrieve all of the local keys as an arguments array for a new function.
  	var args = Object.keys(locals);

  	// Append the compiled code to the template string function argument array.
  	args.push('return ' + compiled.code);

  	// Build an array of all the values for the function call.
  	var values = [];
  	for (var key in locals) {
	    values.push(locals[key]);
		}

		// Construct the new template string function, call it with the locals.
		return Function.construct(args).apply(locals, values);
  };
};

/**
 * Function Construct
 *
 * http://www.2ality.com/2011/08/spreading.html
 *
 * TODO: Find a cleaner way to accomplish this.
 */
if (!Function.prototype.construct) {
  Function.prototype.construct = function(argArray) {
    if (! Array.isArray(argArray)) {
      throw new TypeError("Argument must be an array");
    }
    var constr = this;
    var nullaryFunc = Function.prototype.bind.apply(
      constr,
      [null].concat(argArray)
    );
    return new nullaryFunc();
  };
}
