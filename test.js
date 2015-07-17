/* global it */

'use strict';

var assert = require('assert');
var path = require('path');
var expressRenderJsx = require('./');

function fixture(name) {
	return path.join(__dirname, 'fixtures', name + '.jsx');
}

it('should transpile jsx', function (done) {
	expressRenderJsx(fixture('simple'), {}, function (err, content) {
		assert.ifError(err);
		assert.equal(content, '<h1>Hello world!</h1>');
		done();
	});
});
