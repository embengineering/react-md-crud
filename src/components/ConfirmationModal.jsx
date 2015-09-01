import React from 'react';
import BaseComponent from './BaseComponent';
import { Dialog, FlatButton } from 'material-ui';

class ConfirmationModal extends BaseComponent {

  constructor(props) {
    super(props);
    this._bind('handleClose', 'handleSubmit');
  }

  componentWillReceiveProps(newProps) {
  	if(newProps.show) {
  		this.refs.confirmationModal.show();
  	}
  }

  handleClose() {
    this.refs.confirmationModal.dismiss();
  }

  handleSubmit(event) {
    this.handleClose();
    this.props.onSubmit(event);
  }

  getStandardActions() {
  	return [
		  <FlatButton
		    label={this.props.cancelBtnText}
		    secondary={true}
		    onTouchTap={this.handleClose} />,
		  <FlatButton
		    label={this.props.submitBtnText}
		    primary={true}
		    onTouchTap={this.handleSubmit} />
		];
  }

  render () {
    return (
      <Dialog
      	ref="confirmationModal"
			  title={this.props.title}
			  actions={this.getStandardActions()}
			  actionFocus="submit">
			  {this.props.message}
			</Dialog>
    );
  }
}

ConfirmationModal.propTypes = {
  title: React.PropTypes.string
  ,message: React.PropTypes.string
  ,cancelBtnText: React.PropTypes.string
  ,submitBtnText: React.PropTypes.string
  ,show: React.PropTypes.bool.isRequired
  ,onSubmit: React.PropTypes.func.isRequired
};

ConfirmationModal.defaultProps = {
  title: 'Confirmation'
  ,message: 'Are you sure do you want to continue?'
  ,cancelBtnText: 'Cancel'
  ,submitBtnText: 'Continue'
};

export default ConfirmationModal;
