import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

const { Component } = Ember;

export default Component.extend({
  classNames: ['post-comment'],
  isEditing: false,
  isCancellable: false,
  message: '',
  
  updateComment: task(function* asyncUpdateComment(comment) {
    this.set('isCancellable', true);
    yield timeout(1000);
    this.set('isCancellable', false);
    try {
      yield comment.save();
      this.set('isEditing', false);
    } catch(e) {
      this.set('message', 'OOPS! Save failed');
    }
  }),

  cancelUpdate: task(function*() {
    this.get('updateComment').cancelAll();
    this.get('model').rollbackAttributes();
    this.set('isEditing', false);
  })
});