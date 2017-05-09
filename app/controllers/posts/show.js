import Ember from 'ember';
import stateFor from 'ember-state-services/state-for';

const { Controller, inject } = Ember;

export default Controller.extend({
  currentUser: inject.service(),
  actions: {
    saveComment(post, commentBody) {
      this.get('currentUser').loadUserInfo().then((user) => {
        return this.store.createRecord('comment', {
          post,
          user,
          body: commentBody
        }).save().then(() => {
          stateFor('comment-draft') // all drafts
            .get(this.get('model'))  // the right draft
            .set('body', ''); // empty it out
        });
      }).catch((e) => {
        console.error('Problem saving comment', e);
      });
    }
  }
});
