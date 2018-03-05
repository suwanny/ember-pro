import Controller from '@ember/controller';
import { getOwner } from '@ember/application';

export default Controller.extend({
  init() {
    this._super(...arguments);

    const container = getOwner(this);

    let loc = {};
    if (typeof FastBoot === 'undefined') {
      loc = container.lookup("data:location");
    }

    this.set('loc', loc);
  }
});
