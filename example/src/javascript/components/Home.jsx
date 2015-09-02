import React from 'react';
import { BaseComponent, EmployeeList, EmployeeForm, Action } from 'core';
import { FloatingActionButton, FontIcon } from 'material-ui';

class Home extends BaseComponent {

  constructor(props) {
    super(props);
    this._bind('handleEmployeeSelect', 'handleAddNew', 'handleSaveForm', 'handleEmployeeDelete');
  }

  handleEmployeeSelect(data) {
    this.scrollTop();
    this.refs.employeeForm.setEmployee(data);
  }

  handleEmployeeDelete() {
    this.refs.employeeList.refresh();
    Action.Notification.success('Contact successfully deleted!', 'Notification', {
      closeButton: true
      ,timeOut: 3000 // How long the toast will display without user interaction
      ,extendedTimeOut: 3000 // How long the toast will display after a user hovers over it
    });
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
          onDelete={this.handleEmployeeDelete}
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
      </div>
    );
  }
}

export default Home;