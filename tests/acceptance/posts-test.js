import { test } from 'qunit';
import moduleForAcceptance from 'commently/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | posts');

test('visiting /posts', function(assert) {
  visit('/posts');

  andThen(function() {
    debugger;
    assert.equal(currentURL(), '/posts');
  });
});
