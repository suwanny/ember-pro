import Ember from 'ember';
import { default as math, PI } from 'math';

const { Controller, inject } = Ember;
function foo() { }

export default Controller.extend({
  currentUser: inject.service(),
  mathLib: {
    four: math.sqrt(16),
    PI
  },
  init() {
    this._super(...arguments);
    let owner = Ember.getOwner(this);
    let geo = owner.lookup('data:location');
    let req = owner.lookup('data:request');
    this.set('geo', geo);
    this.set('req', req);


  }
});