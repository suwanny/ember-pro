import Ember from 'ember';

export default Ember.Controller.extend({
  triggerPageRefresh() {
    this.send('refreshPage');
  },
  actions: {
    filterUpdated(newSearch) {
      this.set('search', newSearch);
      Ember.run.debounce(this, 'triggerPageRefresh', 200);
    }
  }
});
