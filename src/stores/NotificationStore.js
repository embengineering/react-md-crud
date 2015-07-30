import AppDispatcher from './../dispatcher/AppDispatcher';
import NotificationConstants from './../constants/NotificationConstants';
import { EventEmitter } from 'events';
import assign from 'object-assign';

const NOTIFY_EVENT = 'notify';

const NotificationStore = assign({}, EventEmitter.prototype, {

  // @param {function} callback
  addNotificationListener(callback) {
    this.on(NOTIFY_EVENT, callback);
  }

  // @param {function} callback
  ,removeNotificationListener(callback) {
    this.removeListener(NOTIFY_EVENT, callback);
  }

  // @param {action} object
  ,emitNotification(action) {
    this.emit(NOTIFY_EVENT, action);
  }
});

// Register callback to handle all updates
AppDispatcher.register((action) => {

  switch(action.actionType) {
    case NotificationConstants.NOTIFICATION_SUCCESS:
      NotificationStore.emitNotification(action);
      break;
    case NotificationConstants.NOTIFICATION_ERROR:
      NotificationStore.emitNotification(action);
      break;
    case NotificationConstants.NOTIFICATION_WARNING:
      NotificationStore.emitNotification(action);
      break;
    case NotificationConstants.NOTIFICATION_INFO:
      NotificationStore.emitNotification(action);
      break;
    default:
      // no op
      break;
  }
});

export default NotificationStore;