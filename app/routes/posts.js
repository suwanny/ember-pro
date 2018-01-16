import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  queryParams: {
    filter: { replace: true },
    as: 's'
  },
  model(params) {
    if (!params || !params.filter) {
      return this.store.findAll('post');
    } else {
      return this.store.query('post', { search: params.filter });
    }
  },
  actions: {
    reloadRoute() {
      this.refresh();
    }
  }
});