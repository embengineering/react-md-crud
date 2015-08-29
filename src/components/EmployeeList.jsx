import React from 'react';
import BaseComponent from './BaseComponent';
import _ from 'lodash';
import api from '../utils/dataService';
import { Card, CardTitle, List, ListItem, Avatar, FontIcon, IconMenu, MenuItem, IconButton } from 'material-ui';

class EmployeeList extends BaseComponent {

  constructor(props) {
    super(props);
    this._bind('getExternalData', 'renderList');
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
      <IconMenu iconButtonElement={<IconButton iconClassName="fa fa-ellipsis-v" tooltip="Actions"/>}>
        <MenuItem index={0} primaryText="Edit" />
        <MenuItem index={1} primaryText="Delete" />
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
            onClick={this.props.onSelect.bind(this, result)}
            leftAvatar={this.renderLeftAvatar()}
            secondaryText={this.renderSecondaryText(result)}
            rigthIconButton={this.renderRightIconButton()}
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
};

EmployeeList.defaultProps = {
  onSelect: () => {}
};

export default EmployeeList;