export function initialize(app) {
  // let fbService = app.lookup('service:fastboot');
  // let shoebox = fbService.get('shoebox');
  // let store = shoebox.retrieve('req-data');
  // let ua = '';
  // if (fbService.get('isFastBoot')) {
  //   // Server-Rendering
  //   if (!store) {
  //     store = {};
  //     shoebox.put('req-data', store);
  //   }
  //   let headers = fbService.get('request.headers');
  //   ua = headers.get('User-Agent');
  //   store.ua = ua;
  // } else {
  //   // Client-Rendering
  //   if (store) {
  //     ua = store.ua;
  //   } // else go with ua as ''
  // }
  // app.register('data:request', { ua }, { instantiate: false });
  // // appInstance.inject('route', 'foo', 'service:foo');
}

export default {
  initialize
};
