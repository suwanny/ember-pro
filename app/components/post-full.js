import Ember from 'ember';
import stateFor from 'ember-state-services/state-for';

const { Component } = Ember;

export default Component.extend({
  info: stateFor('post-info', 'model'),
  classNames: ['post-full']
});