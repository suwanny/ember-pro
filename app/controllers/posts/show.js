import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveComment(postInfo) {
      
      let comment = this.store.createRecord('comment', {
        post: this.get('model'),
        user: this.store.peekRecord('user', 1),
        body: postInfo.get('commentBody')
      });

      comment.save().then(() => {
        postInfo.set('commentBody', null);
      });

    }
  }
})