import Ember from 'ember';

const { Controller, inject, computed } = Ember;

export default Controller.extend({
  init() {
    this._super(...arguments);
    let loc = Ember.getOwner(this).lookup('data:location');
    let req = Ember.getOwner(this).lookup('data:request');
    // this.loc = 
    this.set('loc', loc);
    this.set('req', req);
  },
  currentUser: inject.service()
});