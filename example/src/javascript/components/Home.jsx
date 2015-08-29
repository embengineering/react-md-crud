import React from 'react';
import { BaseComponent, EmployeeList, EmployeeForm } from 'core';
import { FloatingActionButton, FontIcon } from 'material-ui';

class Home extends BaseComponent {

  constructor(props) {
    super(props);
    this._bind('handleEmployeeSelect', 'handleAddNew', 'handleSaveForm');
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