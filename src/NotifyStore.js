import alt from './alt';
import * as config from './config';
import NotifyActions from './NotifyActions';

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
  onAdd(data) {
    // We'll set it to variable for shorthand accessbility,
    // omit their original propety name,
    // and then prefix them with `_`.
    // { type: .. } => { _type: .. }
    var { type, duration } = data;
    // Note that we'll prefix properties with `_`
    // to mark it as an important variable.
    this.stack.push(Object.assign({}, {
      _id: _counter++,
      _duration: duration || config.duration(),
      _type: type
    }, data));
  }

  /**
   * Removes an item from the stack with the provided id.
   */
  onRemove(id) {
    const index = this.stack
      .map(item => item._id)
        .indexOf(id);

    // If the message does not exist aynore
    if ( index == -1 ) {
      console.warn(`The item with id ${id} to be
        removed does not exist in the stack.`);

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
      : this.stack.filter(item => item._type !== type);
  }
}

export default alt.createStore(NotifyStore);
