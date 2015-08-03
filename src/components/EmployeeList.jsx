import React from 'react';
import BaseComponent from './BaseComponent';
import _ from 'lodash';
import api from '../utils/dataService';
import { Card, List, ListItem, Avatar, FontIcon, IconMenu, MenuItem, IconButton } from 'material-ui';

class EmployeeList extends BaseComponent {

  constructor(props) {
    super(props);
    this._bind('getExternalData');
    this.state = {
    	results: []
    };
  }

  componentDidMount() {
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

  render() {
    return (
      <Card style={{maxWidth: 300, margin: 20}}>
        <List subheader="Employees">
          {this.state.results.map(function(result) {
            return <ListItem 
              leftAvatar={<Avatar icon={<FontIcon className="fa fa-user" />} />}
              key={result.id} 
              primaryText={result.firstName + ' ' + result.lastName} 
              secondaryText={
                <p>
                  <span>{result.jobTitle}</span><br/>
                  {result.email}
                </p>
              }
              rigthIconButton={
                <IconMenu iconButtonElement={<IconButton iconClassName="fa fa-ellipsis-v" tooltip="Actions"/>}>
                  <MenuItem primaryText="Edit" />
                  <MenuItem primaryText="Delete" />
                </IconMenu>
              }
              />;
          })}
      </List>
      </Card>
    );
  }
}

export default EmployeeList;