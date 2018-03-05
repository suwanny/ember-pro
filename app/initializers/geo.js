export function initialize(app) {
  // app.inject('route', 'foo', 'service:foo');
  const { geolocation } = navigator;

  app.deferReadiness();
  geolocation.getCurrentPosition((pos) => {
    const {
      coords: { latitude: lat, longitude: lng }
    } = pos;

    app.register("data:location", { lat, lng }, { instantiate: false });
    app.advanceReadiness();
  });
}

export default {
  initialize
};
