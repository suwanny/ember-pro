function attemptLocationRetrieval(app) {
  if (typeof FastBoot === 'undefined') {
    app.deferReadiness();
    const { geolocation } = navigator;
    geolocation.getCurrentPosition((pos) => {
      let { coords: { latitude: lat, longitude: lng } } = pos;
      app.register('data:location', { lat, lng }, {
        instantiate: false
      });
      app.advanceReadiness();
    });
  }
}

export function initialize(app) {
  console.log('running geo initializer');
  attemptLocationRetrieval(app);
}

export default {
  name: 'geo',
  initialize
};
