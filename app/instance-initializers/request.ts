import Ember from 'ember';

export function initialize(appInstance) {
  // get the fastboot service
  let fbService = appInstance.lookup('service:fastboot');

  // get the shoebox, and retrieve a store "request-data"
  let shoebox = fbService.get('shoebox');
  let rdStore = shoebox.retrieve('request-data');
  let ua;
  // if we're on the server rendering path
  if (fbService.get('isFastBoot')) {
    if (!rdStore) {
      // create the store if it's currently undefined
      rdStore = {};
      shoebox.put('request-data', rdStore);
    }
    // grab the data of interest off the fastboot service
    ua = fbService.get('request.headers.headers.user-agent')[0];
    // put it in the store
    rdStore.userAgent = ua;
  } else { // client-rendering path
    ua = Ember.get(rdStore || {}, 'userAgent') || 'NO DATA';
  }
  console.log('ua=', ua);
  // I want ua to equal something here
    // >>>> we'll have our value by this line of code
  // put it in the container
  appInstance.register('data:request', { ua }, {
    instantiate: false
  });
}

export default {
  initialize
};
