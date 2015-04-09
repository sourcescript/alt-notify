import alt from './alt';
import NotifyActions from './NotifyActions';

class NotifyStore {
  constructor() {
    this.stack = [];
    this.bindActions(NotifyActions);
  }

  onAdd(data) {
    this.stack.push(data);
  }

  onRemove(index) {
    this.stack = this.stack.filter(function(message, i) {
      return index !== i;
    });
  }

  /**
   * Clears either the whole stack, or
   * items having the given type
   */
  onClear(type) {
    this.stack = type == undefined
      ? []
      : this.stack.filter(message => message.type !== type);
  }
}

export default alt.createStore(NotifyStore);
