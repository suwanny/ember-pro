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
      alert(comment.get('body'));
    }
  }
});