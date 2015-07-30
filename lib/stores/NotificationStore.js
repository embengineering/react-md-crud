'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dispatcherAppDispatcher = require('./../dispatcher/AppDispatcher');

var _dispatcherAppDispatcher2 = _interopRequireDefault(_dispatcherAppDispatcher);

var _constantsNotificationConstants = require('./../constants/NotificationConstants');

var _constantsNotificationConstants2 = _interopRequireDefault(_constantsNotificationConstants);

var _events = require('events');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var NOTIFY_EVENT = 'notify';

var NotificationStore = (0, _objectAssign2['default'])({}, _events.EventEmitter.prototype, {

  // @param {function} callback
  addNotificationListener: function addNotificationListener(callback) {
    this.on(NOTIFY_EVENT, callback);
  },

  // @param {function} callback
  removeNotificationListener: function removeNotificationListener(callback) {
    this.removeListener(NOTIFY_EVENT, callback);
  },

  // @param {action} object
  emitNotification: function emitNotification(action) {
    this.emit(NOTIFY_EVENT, action);
  }
});

// Register callback to handle all updates
_dispatcherAppDispatcher2['default'].register(function (action) {

  switch (action.actionType) {
    case _constantsNotificationConstants2['default'].NOTIFICATION_SUCCESS:
      NotificationStore.emitNotification(action);
      break;
    case _constantsNotificationConstants2['default'].NOTIFICATION_ERROR:
      NotificationStore.emitNotification(action);
      break;
    case _constantsNotificationConstants2['default'].NOTIFICATION_WARNING:
      NotificationStore.emitNotification(action);
      break;
    case _constantsNotificationConstants2['default'].NOTIFICATION_INFO:
      NotificationStore.emitNotification(action);
      break;
    default:
      // no op
      break;
  }
});

exports['default'] = NotificationStore;
module.exports = exports['default'];