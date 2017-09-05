import Ember from 'ember';

const { Controller, inject, computed } = Ember;

export default Controller.extend({
  init() {
    this._super(...arguments);
    let prop = Ember.getOwner(this).lookup('data:location');
    // this.loc = 
    this.set('loc', prop);
  },
  currentUser: inject.service()
});