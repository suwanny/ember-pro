import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import { getOwner } from '@ember/application';

export default Controller.extend({
  init() {
    this._super(...arguments);
    // debugger;
    let dataPromise = getOwner(this).lookup('data:location');
    if (!dataPromise) return;
    dataPromise.then((v) => {
      // debugger;
      // console.log('property set');
      this.set('loc', v);
    })
  },
  currentUser: service()
});