import {connect} from 'react-redux';
import {displayNotification} from '../actions/notificationActions';
import HomeComponent from '../components/HomeComponent.jsx';

const mapStateToProps = (state) => {
  return {
    showForm: state.showForm
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEmployeeDelete: () => {
      dispatch(displayNotification('Notification', 'Contact successfully deleted!'));
    }
    ,onEmployeeSaved: () => {
      dispatch(displayNotification('Notification', 'Employee successfully saved!'));
    }
  }
}

const ConnectedHomeComponent = connect(
  mapStateToProps
  ,mapDispatchToProps
)(HomeComponent);

export default ConnectedHomeComponent;
