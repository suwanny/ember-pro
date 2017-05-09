import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

const { Component } = Ember;

export default Component.extend({
  isEditing: false,
  isCancellable: true,
  classNames: ['post-comment'],
  commitChanges: task(function*() {
    yield timeout(5000);
    this.set('isCancellable', false);
    yield timeout(1000);
    yield this.get('model').save();
    this.set('isCancellable', true);
    this.set('isEditing', false);
  }),
  cancelSave: task(function* () {
    this.get('commitChanges').cancelAll();
    this.get('model').rollbackAttributes();
    this.set('isCancellable', true);
    this.set('isEditing', false);
  })
});