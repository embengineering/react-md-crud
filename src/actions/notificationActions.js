import * as NotificationActions from '../constants/notificationConstants';

export function displayNotification(title, message) {
  return {
    type: NotificationActions.RECEIVE_MESSAGE
    ,payload: Object.assign({}, {
      title: title
      ,message: message
    })
  }
}
