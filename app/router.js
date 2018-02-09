import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const MyRouter = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

MyRouter.map(function() {
  this.route('posts', function() {
    this.route('show', { path: ':id' });
  });

  this.route('auth', function() {
    this.route('login');
    this.route('register');
  });
  this.mount('blog', { path: 'eng-blog'});
  this.mount('blog', { path: 'marketing-blog'});
  this.mount('blog', { path: 'security-blog'});
});

export default MyRouter;
