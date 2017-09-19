import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

const { Component } = Ember;

export default Component.extend({
  isEditing: false,
  isCancellable: false,
  classNames: ['post-comment'],

  updateComment: task(function*() {
    let currentComment = this.get('model');
    this.set('isCancellable', true);
    yield timeout(3000);
    this.set('isCancellable', false);
    yield currentComment.save();
    this.set('isEditing', false);
  }),
  actions: {
    cancelUpdate() {
      this.get('updateComment').cancelAll();
      this.get('model').rollbackAttributes();
      this.set('isEditing', false);
    }
  }
});