import * as NotificationActions from '../constants/notificationConstants';

const initialState = {
  message: ''
  ,title: ''
};

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case NotificationActions.RECEIVE_MESSAGE:
      return Object.assign({}, state, action.payload);

    default:
        return state;
  }
}
