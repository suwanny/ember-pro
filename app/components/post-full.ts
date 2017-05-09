import Ember from 'ember';
import stateFor from 'ember-state-services/state-for';
import Comment from '../models/comment';

const { Component } = Ember;

export default Component.extend({
  classNames: ['post-full'],
  tempState: stateFor('temp', 'model'),
  commentDraft: stateFor('comment-draft', 'model'),
  actions: {
    foo() {
      let wm = stateFor('comment-draft');
      console.log('The weakmap is', wm);
    },
    deleteTheComment(comment) {
      comment.destroyRecord();
    },
    _saveComment() {
      if (this.get('save-comment')) {
        this.get('save-comment')(this.get('model'), this.get('commentDraft.body'));
      }
    }
  }
});