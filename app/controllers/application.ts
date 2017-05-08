import Ember from 'ember';

const { Controller, inject,
  computed, getOwner } = Ember;

export default Controller.extend({
  currentUser: inject.service(),
  loc: computed(function () {
    return getOwner(this).lookup('data:location');
  })
});