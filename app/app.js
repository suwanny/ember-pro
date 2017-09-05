import Ember from 'ember';
import Resolver from './resolver';
/* globals define: true*/
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const { Application } = Ember;

define('math', [], function() {
  return {
    default: Math,
    PI: Math.PI
  };
});

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
