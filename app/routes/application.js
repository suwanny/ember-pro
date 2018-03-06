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


    // let headers = this.get("fastboot.request.headers");
    // let shoebox = this.get("fastboot.shoebox");
    // let shoeboxStore = shoebox.retrieve("my-store");

    // if (this.get('fastboot.isFastBoot')) {
    //   if (!shoeboxStore) {
    //     // Lazily create the store
    //     shoeboxStore = {};
    //     shoebox.put('my-store', shoeboxStore);
    //   }

    //   //  Put the data in the store
    //   let xRequestHeader = headers.get("X-Request");
    //   shoeboxStore['data:request'] = xRequestHeader;
    // }
  },
});
