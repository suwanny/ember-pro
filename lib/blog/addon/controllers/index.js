import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  user: inject(),
  init() {
    this._super(...arguments);
    this.set('articles', [
      {title: 'First'},
      {title: 'Second'},
      {title: 'Third'},
      {title: 'Fourth'},
      {title: 'Fifth'}
    ])
  }
})