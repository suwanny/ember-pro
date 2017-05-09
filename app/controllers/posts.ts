import Ember from 'ember';

const { Controller, run: { debounce } } = Ember;

export default Controller.extend({
  queryParams: ['search'],
  search: '',
  _updateData() {
    this.send('refreshRoute');
  },
  actions: {
    _updateSearch(searchVal : string) {
      this.set('search', searchVal);
      debounce(this, '_updateData', 300 /*ms*/);
    }
  }
});
