var stripComments = require('strip-json-comments');
var fs = require('fs');
var eslintrc = fs.readFileSync('.eslintrc', {encoding: 'utf-8'});
module.exports = JSON.parse(stripComments(eslintrc));
