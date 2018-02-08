import Component from '@ember/component';
import { task, timeout } from 'ember-concurrency';

export default Component.extend({
  isEditing: false,
  classNames: ['post-comment'],
  canAbort: true,
  saveComment: task(function*() {
    yield timeout(3000);
    this.set('canAbort', false);
    yield this.get('model').save();
    debugger;
    this.set('canAbort', true);
    this.set('isEditing', false);
  }),
  actions: {
    cancelEdit() {
      this.get('saveComment').cancelAll();
      this.get('model').rollbackAttributes();
      this.set('isEditing', false);
    }
  }
});