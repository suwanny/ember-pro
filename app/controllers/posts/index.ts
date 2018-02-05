import { getOwner } from '@ember/application';
import Controller from '@ember/controller';

export default class extends Controller {
  constructor() {
    super();
    getOwner(this).lookup('data:location').then(loc => {
      this.set('lat', loc.lat);
      this.set('lng', loc.lng);
    })
  }
}
