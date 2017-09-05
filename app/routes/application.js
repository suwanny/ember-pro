import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { default as math, PI } from 'math';

math.sqrt(4); // 2
console.log(PI); // 3.145926...
const { Route, inject } = Ember;

export default Route.extend(ApplicationRouteMixin, {
  session: inject.service(),
  currentUser: inject.service(),
  actions: {
    logout() {
      this.get('session').invalidate();
    }
  },
  beforeModel() {
    this._super(...arguments);
    if (this.get('session.isAuthenticated')) {
      return this.get('currentUser').loadUserInfo();
    }
  }
});