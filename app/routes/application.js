import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { Route, inject, getOwner } = Ember;

export default Route.extend(ApplicationRouteMixin, {
  // fastboot: inject.service(),
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
  },
  setupController(controller) {
    this._super(...arguments);

    let reqObj = getOwner(this).lookup("data:request");
    controller.set("req", reqObj);



  },
});
