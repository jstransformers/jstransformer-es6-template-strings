'use strict';

var assert = require('assert');
var fs = require('fs');
var join = require('path').join;
var test = require('testit');

var transform = require('../');

var input = fs.readFileSync(join(__dirname, 'input.txt')).toString();
var locals = JSON.parse(fs.readFileSync(join(__dirname, 'locals.json')).toString());
var expected = fs.readFileSync(join(__dirname, 'expected.txt')).toString();
var output;

function assertEqual(output, expected) {
  console.log('   Output:\t'   + JSON.stringify(output));
  console.log('   Expected:\t' + JSON.stringify(expected));
  assert.equal(output, expected);
}

test('es6-template-strings', function () {
  output = transform.compile(input)(locals);
  assertEqual(output, expected);
});
