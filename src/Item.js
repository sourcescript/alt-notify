import config from './config';
import NotifyActions from './NotifyActions';
const ID = Symbol('id');
const DURATION = Symbol('duration');
const INIT = Symbol('init');
const TIMEOUT = Symbol('_timeout');

class Item {
  constructor(data) {
    data || (data = {});
  
    this[ID] = data.id
    this.type = data.type;
    this[DURATION] = data.duration || config.duration();

    this[TIMEOUT] = setTimeout(this.remove.bind(this), this.duration);
  }

  /**
   * Cancels the timeout, and calls the removeHandler
   * @see {constructor} (for the removeHandler)
   */
  remove() {
    if ( this[TIMEOUT] ) {
      clearTimeout(this[TIMEOUT]);
    }

    NotifyActions.remove(this[ID]);
  }
}

export default Item;
