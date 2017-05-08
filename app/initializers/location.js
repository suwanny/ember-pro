// @ts-check

export function initialize(app) {
  let { geolocation } = navigator;
  app.deferReadiness();
  geolocation.getCurrentPosition((pos) => {
    let {
      coords: { latitude, longitude }
    } = pos;
    app.register(
      'data:location',
      { latitude, longitude },
      { instantiate: false }
    );
    app.advanceReadiness();
  });
  // application.inject('route', 'store', 'service:store');
}

export default {
  name: 'location',
  initialize
};
