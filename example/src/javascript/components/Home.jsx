import React from 'react';
import { BaseComponent, EmployeeList, EmployeeForm, Action, ConfirmationModal, Utils } from 'core';
import { FloatingActionButton, FontIcon } from 'material-ui';

class Home extends BaseComponent {

  constructor(props) {
    super(props);
    this._bind('handleEmployeeSelect', 'handleAddNew', 'handleSaveForm', 'handleDelete');
  }

  handleEmployeeSelect(data) {
    this.scrollTop();
    this.refs.employeeForm.setEmployee(data);
  }

  handleAddNew() {
    this.scrollTop();
    this.refs.employeeForm.resetForm();
  }

  handleSaveForm() {
    this.refs.employeeList.refresh();
    Action.Notification.success('Employee successfully saved!', 'Notification', {
      closeButton: true
      ,timeOut: 3000 // How long the toast will display without user interaction
      ,extendedTimeOut: 3000 // How long the toast will display after a user hovers over it
    });
  }

  handleDelete() {
    this.refs.deleteConfirmation.show();
  }

  deleteContact(data) {
    const url= `/contacts/${data.id}`;
    Utils.dataService.delete(url)
      .then((response) => {
        response.json().then(() => {
          Action.Notification.success('Contact successfully deleted!', 'Notification', {
            closeButton: true
            ,timeOut: 3000 // How long the toast will display without user interaction
            ,extendedTimeOut: 3000 // How long the toast will display after a user hovers over it
          });
          this.refs.employeeList.refresh();
        });
      });
  }

  scrollTop() {
    document.body.scrollTop = 0;
  }

  render() {
    return (
      <div style={{ display: 'flex', flexFlow: 'row' }}>
        <EmployeeList
          ref="employeeList" 
          style={{ flex: 1, order: 1, margin: 20 }} 
          onSelect={this.handleEmployeeSelect}
          onDelete={this.handleDelete}
          />
        <EmployeeForm
          ref="employeeForm"
          style={{ flex: 2, order: 2, margin: 20 }} 
          onSave={this.handleSaveForm}
          />
        <FloatingActionButton 
          onClick={this.handleAddNew}
          style={{ position: 'fixed', top: 30, right: 30, zIndex: 2 }}>
          <FontIcon className="fa fa-plus" />
        </FloatingActionButton>
        <ConfirmationModal 
          ref="deleteConfirmation"
          onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default Home;