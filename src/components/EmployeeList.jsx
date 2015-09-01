import React from 'react';
import BaseComponent from './BaseComponent';
import _ from 'lodash';
import api from '../utils/dataService';
import { Card, CardTitle, List, ListItem, Avatar, FontIcon, IconMenu, IconButton } from 'material-ui';

let MenuItem = require('material-ui/lib/menus/menu-item');
let MenuDivider = require('material-ui/lib/menus/menu-divider');

class EmployeeList extends BaseComponent {

  constructor(props) {
    super(props);
    this._bind('getExternalData', 'renderList', 'renderRightMenu');
    this.state = {
    	results: []
    };
  }

  componentDidMount() {
    this.getExternalData();
  }

  refresh() {
    this.getExternalData();
  }

  getExternalData() {
  	api.get('/employees')
      .then((response) => {
        const totalCount = response.headers.get('X-Total-Count');
        response.json().then((data) => {
          this.setState({
            results: data
          });
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
      		onClick={this.props.onDelete.bind(this.result)}
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
    return (
      this.state.results.map((result) => {
        return (
          <ListItem 
            key={result.id} 
            primaryText={result.firstName + ' ' + result.lastName} 
            leftAvatar={this.renderLeftAvatar()}
            secondaryText={this.renderSecondaryText(result)}
            rightIconButton={this.renderRightMenu(result)}
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
  onSelect: React.PropTypes.func
  ,onDelete: React.PropTypes.func
};

EmployeeList.defaultProps = {
  onSelect: () => {}
  ,onDelete: () => {}
};

export default EmployeeList;