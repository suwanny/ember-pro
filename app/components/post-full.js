import Component from '@ember/component';
import stateFor from 'ember-state-services/state-for';

export default Component.extend({
  info: stateFor('post-info', 'model'),
  classNames: ['post-full'],

  actions: {
    deleteComment(comment) {
      comment.destroyRecord();
    }
  }
});


