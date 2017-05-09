// @ts-check

export function initialize(/* app*/) {
  // if (typeof FastBoot === 'undefined') {
  //   let { geolocation } = navigator;
  //   app.deferReadiness();
  //   geolocation.getCurrentPosition((pos) => {
  //     let {
  //       coords: { latitude, longitude }
  //     } = pos;
  //     app.register(
  //       'data:location',
  //       { latitude, longitude },
  //       { instantiate: false }
  //     );
  //     app.advanceReadiness();
  //   });
  // } else {
  //   app.register(
  //     'data:location',
  //     { latitude: -1, longitude: -1 },
  //     { instantiate: false }
  //   );
  // }
  // application.inject('route', 'store', 'service:store');
}

export default {
  name: 'location',
  initialize
};
