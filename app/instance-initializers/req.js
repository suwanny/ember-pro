function getUserAgent(fbService) {
  let shoebox = fbService.get('shoebox');
  // get the appropriate shoebox store from the fbService 
  let reqStore = shoebox.retrieve('req-data');

  if (typeof FastBoot !== 'undefined') {
    // if we are rendering in fastboot
    // Create the store if it doesn't yet exist
    if (!reqStore) {
      reqStore = {};
      shoebox.put('req-data', reqStore);
    }
    // Get the header User-Agent off of the fastboot service
    let ua = fbService.get('request.headers').get('user-agent');
    // PUT IT IN THE SHOEBOX STORE
    reqStore.ua = ua;
    // return it
    return ua;
  } else {
    // else (client-rendering mode)
    if (reqStore) {
      // GET THE DATA OUT of the shoebox store IF it exists, falling back to empty string otherwise
      // return it
      return reqStore.ua || ''
    } else return '';
  }
}

export function initialize(appInstance) {
  // Get the fastboot service directly from the container
    // appInstance.lookup('service:fastboot')
  let fbService = appInstance.lookup('service:fastboot');
  // declare a variable requestData
  // set requestData = getUserAgent(fbService)
  let userAgent = getUserAgent(fbService);
  console.log('ua=', userAgent);
  // put requestData into the container, under appropriate key
  appInstance.register('data:request', { ua: userAgent }, { instantiate: false });
}

export default {
  initialize
};
