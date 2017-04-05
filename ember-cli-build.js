/* eslint-env node */
'use strict';
const Filter = require('broccoli-filter');
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  function MyFilter(inputNode) {
    Filter.call(this, inputNode);
  }

  MyFilter.prototype = Object.create(Filter.prototype);

  MyFilter.prototype.processString = function(existingString) {
    let prepend = `/**
 * vendor.js
 *
 * (c) 2017 🦄🦄🦄🔫🌈🍺🍺 All Rights Reserved
 * generated at: ${new Date().toISOString()}
 */
`;
    return prepend + existingString;
  };

  MyFilter.prototype.extensions = ['js'];
  MyFilter.prototype.targetExtension = 'js';

  return new MyFilter(app.toTree());
};
