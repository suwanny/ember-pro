/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const Filter = require('broccoli-filter');

/// BROCCOLI PLUGIN ///
function CommentPlugin(inputNode) {
  Filter.call(this, inputNode);
}
CommentPlugin.prototype = Object.create(Filter.prototype);
CommentPlugin.prototype.processString = function(existingString, filePath) {
  return `/**
 * ${filePath}
 *
 * (c) 2018 🦄🦄🦄🔫🌈🍺🍺 All Rights Reserved
 * generated at: ${new Date()}
 */
${existingString}`;
};

CommentPlugin.prototype.extensions = ["css", "js"];

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    'esw-cache-fallback': {
      // RegExp patterns specifying which URLs to cache.
      patterns: [
        '/assets/(.+)',
        '/posts/(.+)',
        'http://images.contentful.com/(.+)',
        'https://commently-api-stage.herokuapp.com/api/(.+)'
      ],
      // changing this version number will bust the cache
      version: '1'
    },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('vendor/math-shim.js');

  return new CommentPlugin(app.toTree());
};
