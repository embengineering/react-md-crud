import AppDispatcher from './../dispatcher/AppDispatcher';
import NotificationConstants from './../constants/NotificationConstants';

export default {

  success(message, title, options) {
    AppDispatcher.dispatch({
      actionType: NotificationConstants.NOTIFICATION_SUCCESS
      ,message: message || ''
      ,title: title || 'Notification'
      ,options: options || {}
    });
  }

  ,error(message, title, options) {
    AppDispatcher.dispatch({
      actionType: NotificationConstants.NOTIFICATION_ERROR
      ,message: message || ''
      ,title: title || 'Notification'
      ,options: options || {}
    });
  }

  ,warning(message, title, options) {
    AppDispatcher.dispatch({
      actionType: NotificationConstants.NOTIFICATION_WARNING
      ,message: message || ''
      ,title: title || 'Notification'
      ,options: options || {}
    });
  }

  ,info(message, title, options) {
    AppDispatcher.dispatch({
      actionType: NotificationConstants.NOTIFICATION_INFO
      ,message: message || ''
      ,title: title || 'Notification'
      ,options: options || {}
    });
  }
};