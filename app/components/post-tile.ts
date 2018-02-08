import Component from '@ember/component';
import stateFor from 'ember-state-services/state-for';

export default Component.extend({
  classNames: ['post-tile'],
  postInfo: stateFor('post-info', 'model')
});