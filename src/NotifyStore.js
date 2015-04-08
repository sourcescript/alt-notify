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

  onClear(type) {
    this.stack = this.stack.filter(function(message, i) {
      return message.type !== type;
    });
  }
}

export default alt.createStore(NotifyStore);
