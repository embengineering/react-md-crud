'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dispatcherAppDispatcher = require('./../dispatcher/AppDispatcher');

var _dispatcherAppDispatcher2 = _interopRequireDefault(_dispatcherAppDispatcher);

var _constantsNotificationConstants = require('./../constants/NotificationConstants');

var _constantsNotificationConstants2 = _interopRequireDefault(_constantsNotificationConstants);

exports['default'] = {

  success: function success(message, title, options) {
    _dispatcherAppDispatcher2['default'].dispatch({
      actionType: _constantsNotificationConstants2['default'].NOTIFICATION_SUCCESS,
      message: message || '',
      title: title || 'Notification',
      options: options || {}
    });
  },

  error: function error(message, title, options) {
    _dispatcherAppDispatcher2['default'].dispatch({
      actionType: _constantsNotificationConstants2['default'].NOTIFICATION_ERROR,
      message: message || '',
      title: title || 'Notification',
      options: options || {}
    });
  },

  warning: function warning(message, title, options) {
    _dispatcherAppDispatcher2['default'].dispatch({
      actionType: _constantsNotificationConstants2['default'].NOTIFICATION_WARNING,
      message: message || '',
      title: title || 'Notification',
      options: options || {}
    });
  },

  info: function info(message, title, options) {
    _dispatcherAppDispatcher2['default'].dispatch({
      actionType: _constantsNotificationConstants2['default'].NOTIFICATION_INFO,
      message: message || '',
      title: title || 'Notification',
      options: options || {}
    });
  }
};
module.exports = exports['default'];