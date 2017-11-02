function getUserAgent(fbService) { 
  // get the appropriate shoebox store from the fbService 
  // if we are rendering in fastboot
    // Create the store if it doesn't yet exist
    // Get the header User-Agent off of the fastboot service
    // PUT IT IN THE SHOEBOX STORE
    // return it
  // else (client-rendering mode)
    // GET THE DATA OUT of the shoebox store IF it exists, falling back to empty string otherwise
    // return it
}

export function initialize(/* appInstance */) {
  // declare a variable requestData
    // Get the fastboot service directly from the container
    // appInstance.lookup('service:fastboot')
  // set requestData = getUserAgent(fbService)
  // put requestData into the container, under appropriate key
}

export default {
  initialize
};
