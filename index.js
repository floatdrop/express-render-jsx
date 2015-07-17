'use strict';

var fs = require('fs');
var babel = require('babel');
var React = require('react');

var templateCache = {};
var contentCache = {};
var Module = module.constructor;

function requireFromString(code, filename) {
	var m = new Module();
	m.paths = module.paths;
	m._compile(code, filename);
	return m.exports;
}

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
