import { Promise } from 'rsvp';

export function initialize(app) {
  // application.inject('route', 'foo', 'service:foo');
  const { geolocation } = navigator;
  
  let locPromise = new Promise((resolve) => {
    geolocation.getCurrentPosition(pos => {
      let { coords: { latitude: lat, longitude: lng } } = pos;
      resolve({ lat, lng });
      // do_something(latitude, longitude);
    });
  })
  app.register('data:location', locPromise, { instantiate: false});
  
}

export default {
  initialize
};
