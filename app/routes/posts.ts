import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  queryParams: {
    search: {
      replace: true,
      refreshModel: true,
      as: 's'
    }
  },
  actions: {
    refreshPostsRoute() {
      // this.refresh();
    }
  },
  model({ search }) {
    if (search) {
      return this.store.query('post', { search });
    } else {
      return this.store.findAll('post');
    }
  }
});