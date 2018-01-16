import Controller from '@ember/controller';
import { debounce } from '@ember/runloop'

export default Controller.extend({
  filter: '',
  fireSearchUpdate() {
    console.log('change!', this.get('filter'));
    this.send('reloadRoute');
  },
  actions: {
    searchChanged(evt) {
      this.set('filter', evt.target.value);
      debounce(this, 'fireSearchUpdate', 300);
    }
  }
});
