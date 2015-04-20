import alt from './alt';
import Item from './Item';
import NotifyActions from './NotifyActions';
import { ITEM_ID } from './symbols';

// ID
var _counter = 0;

class NotifyStore {
  constructor() {
    this.stack = [];
    this.bindActions(NotifyActions);
  }

  /**
   * Adds a new item to the stack
   */
  onAdd(prop) {
    var { type, duration } = data;
    var id = _counter++;

    this.stack.push(new Item({
      id: id,
      duration: duration,
      type: type,
      data: data.data
    }));
  }

  /**
   * Removes an item from the stack with the provided id.
   */
  onRemove(id) {
    const index = this.stack
      .map(item => item[ITEM_ID])
        .indexOf(id);

    // If the message does not in the stack anymore,
    // We'll just let it be. This only happens when
    // a `clear` occurs. Not that there's any other reason.
    if ( index == -1 ) {
      return false;
    }

    this.stack.splice(index, 1);
  }

  /**
   * Clears either the whole stack, or items having the given type
   */
  onClear(type) {
    this.stack = type == undefined
      ? []
      : this.stack.filter(item => item.type !== type);
  }
}

export default alt.createStore(NotifyStore);
