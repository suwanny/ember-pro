import Component from '@ember/component';
import { task, timeout } from 'ember-concurrency';

export default Component.extend({
  classNames: ['post-comment'],
  updateComment: task(function*(){
    yield timeout(5000);
    
    if (yield this.get('model').save()) {
      this.set('isEditing', false);
    }
  }),

  actions: {
    cancelEdit() {
      let isIdle = this.get('updateComment.isIdle');
      if (isIdle) {
        this.get('model').rollbackAttributes();
        this.set('isEditing', false);
      } else {
        this.get('updateComment').cancelAll();
        this.get('model').rollbackAttributes();
        this.set('isEditing', false); 
      }
    }
  }
});