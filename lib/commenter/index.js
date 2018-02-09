/* eslint-env node */
const CommentPlugin = require('./comment-plugin');

'use strict';

module.exports = {
  name: 'commenter',

  isDevelopingAddon() {
    return true;
  },

  postprocessTree(type, tree) {
    if (type !== 'all') return tree;
    console.log('type=', type);
    return new CommentPlugin(tree);
  }
};
