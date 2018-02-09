import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import { default as math, PI } from 'math';

console.log(math.sqrt(4)); // 2
console.log(PI) // 3.145926...


const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
  engines: {
    blog: {
      dependencies: {
        services: [
          {'user': 'current-user'}
        ],
        externalRoutes: {
          home: 'posts.index'
        }
      }
    }
  }
});

loadInitializers(App, config.modulePrefix);

export default App;
