import Controller from '@ember/controller';
import { getOwner } from '@ember/application';

export default Controller.extend({
  init() {
    this._super(...arguments);

    const container = getOwner(this);
    const loc = container.lookup("data:location");

    // console.log('loc from posts controller .. ', loc);
    this.set('loc', loc);
  }
});
