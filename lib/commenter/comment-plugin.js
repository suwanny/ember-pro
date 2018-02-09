const Filter = require('broccoli-filter');

///
function CommentPlugin(inputNode) {
  Filter.call(this, inputNode);
}

CommentPlugin.prototype = Object.create(Filter.prototype);

CommentPlugin.prototype.processString = function(existingString, filePath) {
  return `/**
* ${filePath}
*
* (c) 2016 🦄🦄🦄🔫🌈🍺🍺 All Rights Reserved
* generated at: ${(new Date()).toISOString()}
*/
${existingString}`;
};

CommentPlugin.prototype.extensions = ['js', 'css'];

module.exports = CommentPlugin;