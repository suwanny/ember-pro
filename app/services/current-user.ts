import Ember from 'ember';

const { Service, inject } = Ember;

export default Service.extend({
  store: inject.service(),
  loadUserInfo() {
    let user = (this.get('store').peekRecord('user', 'current')
    || this.get('store').findRecord('user', 'current'));
    this.set('current', user);
    return user;
  }
});