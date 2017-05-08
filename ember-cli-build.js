/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

const Filter = require('broccoli-filter');

function CommentFilter(inputNode) {
  Filter.call(this, inputNode);
  // this.extensions = operateOn;
  // this.targetExtension = transformTo;
}

CommentFilter.prototype = Object.create(Filter.prototype);

CommentFilter.prototype.processString = function(existingString) {
  return `/** (c) 2017 Mike ${(new Date()).toISOString()} */\n ${existingString}  `;
};

CommentFilter.prototype.extensions = ['js', 'ts', 'css'];
// CommentFilter.prototype.targetExtension = 'js';


module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'esw-cache-fallback': {
      // RegExp patterns specifying which URLs to cache.
      patterns: [
        'https://commently-api-stage.herokuapp.com/(.+)'
      ],

      // changing this version number will bust the cache
      version: '1'
    },
    'esw-index': {
      // Where the location of your index file is at, defaults to `index.html`

      // changing this version number will bust the cache
      version: '1'
    }
  });

  app.import('vendor/math-shim.js');

  return new CommentFilter(app.toTree());
};
