import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import { default as math, PI } from 'math';

const { Application, Logger } = Ember;

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

Logger.log(math.sqrt(4)); // 2
Logger.log(PI); // 3.145926...

loadInitializers(App, config.modulePrefix);

export default App;
