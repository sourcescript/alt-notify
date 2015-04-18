import config from './config';
var TIMEOUT_PROPERTY = '_timeout';

class Item {
  constructor(data) {
    data || (data = {});
    
    this.id = data.id
    this.type = data.type;
    this.duration = data.duration || config.duration();
    this.removeHandler = data.removeHandler;
    this.init(); // Call autotimah
  }

  /**
   * Starts the timer to autokill itself
   * @see {remove}
   */
  init() {
    this[TIMEOUT_PROPERTY] = setTimeout(this.remove.bind(this), this.duration);
  }

  /**
   * Cancels the timeout, and calls the removeHandler
   * @see {constructor} (for the removeHandler)
   */
  remove() {
    if ( this[TIMEOUT_PROPERTY] ) {
      clearTimeout(this[TIMEOUT_PROPERTY]);
      console.log(this[TIMEOUT_PROPERTY]);
    }

    this.removeHandler();
  }
}

export default Item;
