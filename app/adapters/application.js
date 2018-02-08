/* eslint-disable no-case-declarations */
import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '../config/environment';

const { JSONAPIAdapter } = DS;
const { host, namespace } = config.DS;

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:oauth2',
  host,
  namespace,

  urlForDeleteRecord(id,   modelName, snapshot){
    switch (modelName) {
      case 'comment':
        let postSnapshot = snapshot.belongsTo('post');
        let postId = postSnapshot.id;
        return `${this.urlForFindRecord(postId, 'post', postSnapshot)}/comments/${id}`;
      default:
        return this._super(...arguments);
    }
  },

  urlForUpdateRecord(id,   modelName, snapshot){
    switch (modelName) {
      case 'comment':
        let postSnapshot = snapshot.belongsTo('post');
        let postId = postSnapshot.id;
        return `${this.urlForFindRecord(postId, 'post', postSnapshot)}/comments/${id}`;
      default:
        return this._super(...arguments);
    }
  },

  urlForCreateRecord(    modelName, snapshot){
    switch (modelName) {
      case 'comment':
        let postSnapshot = snapshot.belongsTo('post');
        let postId = postSnapshot.id;
        return `${this.urlForFindRecord(postId, 'post', postSnapshot)}/comments`;
      default:
        return this._super(...arguments);
    }
  } 
});