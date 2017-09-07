/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const Filter = require('broccoli-filter');

function MyFilter(inputNode, ext) {
  Filter.call(this, inputNode);
  this.extensions = [ext];
  this.targetExtension = ext;
}

MyFilter.prototype = Object.create(Filter.prototype);

MyFilter.prototype.processString = function(existingString, relativePath) {
  let contents = `
/**
 * ${relativePath}
 *
 * (c) 2017 🦄🦄🦄🔫🌈🍺🍺 All Rights Reserved
 * generated at: ${(new Date).toISOString()}
 */
${existingString}
`;
  return contents;
};

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'esw-cache-fallback': {
      // RegExp patterns specifying which URLs to cache.
      patterns: [
        'https://commently-api-stage.herokuapp.com/api/(.+)'
      ],

      // changing this version number will bust the cache
      version: '1'
    }
    // Add options here
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

  return new MyFilter(new MyFilter(app.toTree(), 'js'), 'css');
};
