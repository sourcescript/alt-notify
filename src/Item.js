import config from './config';
import NotifyActions from './NotifyActions';
import {
  ITEM_ID,
  ITEM_DURATION,
  ITEM_TIMEOUT
} from './symbols';

class Item {
  constructor(data) {
    data || (data = {});

    this[ITEM_ID] = data.id
    this.type = data.type;
    this[ITEM_DURATION] = data.duration || config.duration();
    this.data = data.data;

    this[ITEM_TIMEOUT] = setTimeout(this.remove.bind(this), this[ITEM_DURATION]);
  }

  /**
   * Cancels the timeout, and calls the removeHandler
   * @see {constructor} (for the removeHandler)
   */
  remove() {
    if ( this[ITEM_TIMEOUT] ) {
      clearTimeout(this[ITEM_TIMEOUT]);
    }

    NotifyActions.remove(this[ITEM_ID]);
  }
}

export default Item;
