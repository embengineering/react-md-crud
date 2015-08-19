import React from 'react';
import { BaseComponent } from 'core';
import { EmployeeList, EmployeeForm } from 'core';

class Home extends BaseComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 'flex-grow' }}>
          <EmployeeList />
        </div>
        <div style={{ flex: 'flex-grow' }}>
          <EmployeeForm  />
        </div>
      </div>
    );
  }
}

export default Home;