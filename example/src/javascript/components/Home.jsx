import React from 'react';
import { BaseComponent } from 'core';
import { EmployeeList, EmployeeForm } from 'core';

class Home extends BaseComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div style={{ float: 'left', marginBottom: 32 }}>
          <EmployeeList />
        </div>
        <div style={{ float: 'left', marginBottom: 32 }}>
          <EmployeeForm  />
        </div>
      </div>
    );
  }
}

export default Home;