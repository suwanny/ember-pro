import Ember from 'ember';
// import stateFor from 'ember-state-services/state-for';

const { Controller, inject } = Ember;

export default Controller.extend({
  currentUser: inject.service(),
  // postInfo: stateFor('post-info', 'model'),
  actions: {
    persistComment(post, postInfo) {
      debugger;
      this.store.createRecord('comment', {
        user: this.get('currentUser.user'),
        title: 'You shouldn\'t need this',
        body: postInfo.get('draftComment'),
        post
      })
        .save()
        .then(() => {
          return postInfo.set('draftComment', '');
        })
        .catch((e) => {
          console.error('problem saving comment', e);
        });
    }
  }
});
