import Ember from 'ember';

const { Controller, inject, getOwner } = Ember;

export default Controller.extend({
  init() {
    this._super(...arguments);
    debugger;
    getOwner(this).lookup('data:location').then((v) => {
      // debugger;
      console.log('property set');
      this.set('loc', v);
    })
  },
  currentUser: inject.service()
});