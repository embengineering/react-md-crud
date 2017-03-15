import React from 'react';
import BaseComponent from './BaseComponent.jsx';
import _ from 'lodash';
import api from '../utils/dataService';
import { Card, CardTitle, List, ListItem, Avatar, FontIcon, IconMenu, IconButton } from 'material-ui';

let MenuItem = require('material-ui/lib/menus/menu-item');
let MenuDivider = require('material-ui/lib/menus/menu-divider');

class EmployeeList extends BaseComponent {

  constructor(props) {
    super(props);
    this._bind('getExternalData', 'renderList', 'renderRightMenu', 'handleDelete');
    this.state = {
    	employees: {}
    };
  }

  componentDidMount() {
    this.getExternalData();
  }

  refresh() {
    this.getExternalData();
  }

  getExternalData() {
    const url= '/employees.json';
  	api.get(url)
      .then((response) => {
        const totalCount = response.headers.get('X-Total-Count');
        response.json().then((data) => {
          this.setState({
            employees: data || {}
          });
        });
      });
  }

  handleDelete(data) {
    const url= `/employees/${data.id - 1}.json`;
    api.delete(url)
      .then((response) => {
        response.json().then(() => {
          this.props.onDelete(response);
        });
      });
  }

  renderRightIconButton() {
  	return (
			<IconButton iconClassName="fa fa-ellipsis-v" tooltip="Actions"/>
		);
  }

  renderRightMenu(result) {
    return (
      <IconMenu iconButtonElement={this.renderRightIconButton()}>
        <MenuItem
        	primaryText="Edit"
        	onClick={this.props.onSelect.bind(this, result)}
        	/>
        <MenuItem
        	primaryText="Delete"
      		onClick={this.handleDelete.bind(this, result)}
        	/>
      </IconMenu>
    );
  }

  renderSecondaryText(result) {
    return (
      <p>
        <span>{result.jobTitle}</span><br/>
        {result.email}
      </p>
    );
  }

  renderLeftAvatar() {
    return (
      <Avatar icon={<FontIcon className="fa fa-user" />} />
    );
  }

  renderList() {
    const employees = this.state.employees || {};
    return (
      Object.keys(employees).map(key => {
        const employee = employees[key];
        if(!employee) { return ''; }
        return (
          <ListItem
            key={employee.id}
            primaryText={employee.firstName + ' ' + employee.lastName}
            leftAvatar={this.renderLeftAvatar()}
            secondaryText={this.renderSecondaryText(employee)}
            rightIconButton={this.renderRightMenu(employee)}
          />
        );
      })
    );
  }

  render() {
    return (
      <Card {...this.props}>
        <CardTitle title="Employees" />
        <List>
          {this.renderList()}
        </List>
      </Card>
    );
  }
}

EmployeeList.propTypes = {
  employees: React.PropTypes.object
  ,onDelete: React.PropTypes.func
  ,onSelect: React.PropTypes.func
};

EmployeeList.defaultProps = {
  employees: {}
  ,onSelect: () => {}
  ,onDelete: () => {}
};

export default EmployeeList;
