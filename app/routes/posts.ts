import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  actions: {
    refreshRoute() {
      this.refresh();
    }
  },
  model({ search }) {
    if (!search) {
      return this.store.findAll('post');
    } else {
      return this.store.query('post', { search });
    }
  }
});