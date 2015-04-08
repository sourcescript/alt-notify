import alt from './alt';

class NotifyActions {
  add(data) {
    this.dispatch(data);
  }

  remove(index) {
    this.dispatch(index);
  }

  clear(type) {
    this.dispatch(type);
  }
}

export default alt.createActions(NotifyActions);
