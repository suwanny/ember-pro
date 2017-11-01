/* eslint-env node */
'use strict';
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
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

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  app.import('vendor/math-shim.js');
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return new CommentAppender(app.toTree());
};
