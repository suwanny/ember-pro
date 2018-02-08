import { debounce } from '@ember/runloop';
import Controller from '@ember/controller';

class PostsController extends Controller {
  search: string;
  refreshRoute(this: PostsController) {
    this.send('refreshRoute');
  }
}

PostsController.prototype.actions = {
  searchChanged(evt: Event) {
    let target: HTMLInputElement = evt.target as any;
    this.set('search', target.value);
    debounce(this, 'refreshRoute', 250);
  }
}

export default PostsController;
