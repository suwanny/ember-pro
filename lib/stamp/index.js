/* eslint-env node */
'use strict';
const Filter = require('broccoli-filter');

function CommentAppender(inputNode) {
  Filter.call(this, inputNode);
}

CommentAppender.prototype = Object.create(Filter.prototype);

CommentAppender.prototype.processString = function (existingString, name) {
  let d = new Date();
  return `/**
 * ${name}
 *
 * (c) ${d.getFullYear()} 🦄🦄🦄🔫🌈🍺🍺 All Rights Reserved
 * generated at: ${d.toISOString()}
 */
${existingString}
`;
};

CommentAppender.prototype.extensions = ['css', 'js'];

module.exports = {
  name: 'stamp',

  isDevelopingAddon() {
    return true;
  },
  postprocessTree: function(type, tree) {
    if (type === 'all') {
      return new CommentAppender(tree, {});
    } return tree;
  }
};
