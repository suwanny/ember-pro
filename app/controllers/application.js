import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import { getOwner } from '@ember/application';

export default Controller.extend({
  init() {
    this._super(...arguments);
    // debugger;
    getOwner(this).lookup('data:location').then((v) => {
      // debugger;
      // console.log('property set');
      this.set('loc', v);
    })
  },
  currentUser: service()
});