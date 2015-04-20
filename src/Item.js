import config from './config';
import NotifyActions from './NotifyActions';
import {
  ITEM_ID,
  ITEM_DURATION,
  ITEM_TIMEOUT
} from './symbols';

class Item {
  /**
   * @param {Object} prop Properties (not to be mistaken with a Component `props`)
   */
  constructor(prop) {
    prop || (prop = {});

    this[ITEM_ID] = prop.id
    this.type = prop.type;
    this[ITEM_DURATION] = prop.duration || config.duration();
    this.data = prop.data;

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
