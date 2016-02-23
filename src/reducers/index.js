import { combineReducers } from 'redux';
import notification from '../reducers/notificationReducer';

const rootReducer = combineReducers({
  notification
});

export default rootReducer;
