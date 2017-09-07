import DS from 'ember-data';

const { Model, attr, belongsTo } = DS;

export default Model.extend({
  user: belongsTo('user'),
  post: belongsTo('post'),
  body: attr('string'),
  title: attr('string'),
  createdAt: attr('string'),
  updatedAt: attr('string')
});