import React from 'react';
import { BaseComponent } from 'core';
import { EmployeeList, EmployeeForm } from 'core';

class Home extends BaseComponent {

  constructor(props) {
    super(props);
    this._bind('handleEmployeeSelect');
  }

  handleEmployeeSelect(event) {
    this.refs.employeeForm.resetForm();
  }

  render() {
    return (
      <div style={{ display: 'flex', flexFlow: 'row' }}>
        <EmployeeList 
          style={{ flex: 1, order: 1, margin: 20 }} 
          onSelect={this.handleEmployeeSelect}
          />
        <EmployeeForm
          ref="employeeForm"
          style={{ flex: 2, order: 2, margin: 20 }} 
          />
      </div>
    );
  }
}

export default Home;