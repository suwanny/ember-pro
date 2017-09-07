import Ember from 'ember';

const { Service, inject } = Ember;

export default Service.extend({
  store: inject.service(),
  loadUserInfo() {
    let p = 
      this.get('store').peekRecord('user', 'current')
      || this.get('store').findRecord('user', 'current');
    p.then(user => {
      this.set('user', user);
    })
    return p;
  }
});