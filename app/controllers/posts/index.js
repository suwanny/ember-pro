import Controller from '@ember/controller';
import { getOwner } from '@ember/application';

export default Controller.extend({
  init() {
    this._super(...arguments);

    const container = getOwner(this);

    let loc = {};
    let request = {};
    if (typeof FastBoot === 'undefined') {
      loc = container.lookup("data:location");
      request = container.lookup("data:request");
    }

    console.log('request', request);

    this.set('loc', loc);
    this.set("req", request);
  }
});
