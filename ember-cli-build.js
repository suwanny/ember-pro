/* eslint-env node */
'use strict';
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

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
  return app.toTree();
};
