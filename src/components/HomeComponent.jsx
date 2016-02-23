import React from 'react';
import BaseComponent from './BaseComponent.jsx';
import EmployeeList from './EmployeeList.jsx';
import EmployeeForm from './EmployeeForm.jsx';
import { FloatingActionButton, FontIcon } from 'material-ui';

class HomeComponent extends BaseComponent {

  constructor(props) {
    super(props);
    this._bind('handleEmployeeSelect', 'handleAddNew', 'handleSaveForm', 'handleCancelForm', 'handleEmployeeDelete');
    this.state = {
      showForm: false
    };
  }

  handleEmployeeSelect(data) {
    this.setState({ showForm: true });
    this.scrollTop();
    this.refs.employeeForm.setEmployee(data);
  }

  handleEmployeeDelete() {
    this.refs.employeeList.refresh();
    this.props.onEmployeeDelete();
  }

  handleAddNew() {
    this.setState({ showForm: true });
    this.scrollTop();
    this.refs.employeeForm.resetForm();
  }

  handleSaveForm() {
    this.setState({ showForm: false });
    this.refs.employeeList.refresh();
    this.scrollTop();
    this.props.onEmployeeSaved();
  }

  handleCancelForm() {
    this.setState({ showForm: false });
    this.scrollTop();
  }

  scrollTop() {
    document.body.scrollTop = 0;
  }

  render() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <EmployeeForm
          ref="employeeForm"
          style={{ margin: 20, order: 1, flex: '1 100%', maxWidth: 1024 }}
          show={this.state.showForm}
          onSave={this.handleSaveForm}
          onCancel={this.handleCancelForm}
          />
        <EmployeeList
          ref="employeeList"
          style={{ margin: 20, order: 2, flex: '1 100%', maxWidth: 1024 }}
          onSelect={this.handleEmployeeSelect}
          onDelete={this.handleEmployeeDelete}
          />
        <FloatingActionButton
          onClick={this.handleAddNew}
          style={{ position: 'fixed', top: 30, right: 30, zIndex: 9999 }}>
          <FontIcon className="fa fa-plus" />
        </FloatingActionButton>
      </div>
    );
  }
}

export default HomeComponent;
