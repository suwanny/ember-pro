/* eslint-env node */
'use strict';
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
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

/// 

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    'esw-cache-fallback': {
      patterns: [
        'https://commently-api-stage.herokuapp.com/api/(.+)'
      ]
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  app.import('vendor/math-shim.js');
  return new CommentPlugin(app.toTree());
};
