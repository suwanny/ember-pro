
export function initialize(app) {
  if (typeof FastBoot === 'undefined') {
    app.deferReadiness(); // wait
    navigator.geolocation.getCurrentPosition((pos) => { // begin attempt to get location
      let { coords: { latitude, longitude } } = pos;
      let locData = { lat: latitude, lng: longitude };
      app.register('data:location', locData, { // put it in the container
        instantiate: false
      });
      app.advanceReadiness(); // Don't wait anymore    
    });
  }
  // application.inject('controller', 'loc', 'data:location');
}

export default {
  initialize
};
