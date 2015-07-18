'use strict';

var fs = require('fs');
var babel = require('babel');
var React = require('react');
var requireFromString = require('require-from-string');

var templateCache = {};
var contentCache = {};

module.exports = function (filePath, options, callback) {
	try {
		if (!templateCache[filePath]) {
			var content = contentCache[filePath] = contentCache[filePath] || fs.readFileSync(filePath);
			var transpiled = babel.transform(content, {filename: filePath});
			templateCache[filePath] = requireFromString(transpiled.code, filePath);
		}

		return callback(null, React.renderToStaticMarkup(
			React.createElement(templateCache[filePath], options)
		));
	} catch (e) {
		callback(e);
	}
};
