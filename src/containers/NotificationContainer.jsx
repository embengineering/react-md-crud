import {connect} from 'react-redux';
import NotificationComponent from '../components/NotificationComponent.jsx';

const mapStateToProps = (state) => {
  return {
    title: state.notification.title
    ,message: state.notification.message
  };
}

const ConnectedNotificationContainer = connect(
  mapStateToProps
)(NotificationComponent);

export default ConnectedNotificationContainer;
