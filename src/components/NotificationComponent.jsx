import React, {Component} from 'react';
import {ToastContainer, ToastMessage} from 'react-toastr';

const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class NotificationComponent extends Component {

  constructor(props) {
    super(props);
    this.addAlert = this.addAlert.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.message != nextProps.message && nextProps.message != '') {
      this.addAlert(nextProps.title, nextProps.message);
    }
  }

  addAlert(title, message) {
    this.refs.container.success(
      message
      ,title
      ,{
        timeOut: 3000
        ,extendedTimeOut: 1000
      }
    );
  }

  render () {
    return (
      <ToastContainer
          className="toast-container toast-bottom-right"
          ref="container"
          toastMessageFactory={ToastMessageFactory}
      />
    );
  }
}

export default NotificationComponent;
