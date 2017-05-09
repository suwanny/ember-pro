import Ember from 'ember';

const { Object: EObj } = Ember;

const CommentDraft = EObj.extend({

});

CommentDraft.reopenClass({
  initialState(post) {
    return {
      postId: post.id,
      body: ''
    };
  }
});

export default CommentDraft;

// What's passed to the post-comment component

// function deleteThenComment() {}

// typical action
// let a = function(comment) {
//   return deleteTheComment(comment);
// };

// let b = function(comment) { // defined in post-full
//   return function() {
//     deleteThenComment(comment);
//   };
// };

// console.log(a, b);