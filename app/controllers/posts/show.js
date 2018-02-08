import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveComment(post, postInfo) {
      this.store.createRecord('comment', {
        post,
        user: this.store.peekRecord('user', 1),
        body: postInfo.comment
      }).save().then(() => {
        postInfo.set('comment', '');
      });
    }
  }
});
