import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  queryParams: {
    search: {
      replace: true,
      as: 's'
    }
  },
  actions: {
    refreshRoute() {
      this.refresh();
    }
  },
  model({ search }) {
    if (!search) {
      return this.store.findAll('post');
    } else {
      debugger;
      return this.store.query('post', { search });
    }
  }
});


