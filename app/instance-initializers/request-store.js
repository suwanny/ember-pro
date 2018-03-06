export function initialize(appInstance) {
  // appInstance.inject('route', 'foo', 'service:foo');

  let fastbootService = appInstance.lookup("service:fastboot");
  // Get the shoebox, and the shoebox store we want
  if (!fastbootService) {
    return;
  }


  let shoebox = fastbootService.get("shoebox");
  let store = shoebox.retrieve("request-info");
  let ua = null;

  // if (fastbootService.get("isFastBoot")) {
  if (typeof FastBoot === 'undefined') {
    if (store) {
      ua = store.userAgent;
    }
  } else {
    let headers = fastbootService.get("request.headers");
    let xRequestHeader = headers.get("user-agent");

    if (!store) {
      // Lazily create the store
      store = {};
      shoebox.put("request-info", store);
    }

    //  Put the data in the store
    ua = xRequestHeader;
    store.userAgent = ua;
  }
  appInstance.register("data:request", Object.freeze({ userAgent: ua }), { instantiate: false });
}

export default {
  initialize
};
