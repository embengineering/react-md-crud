import React from 'react';
import BaseComponent from './BaseComponent';
import api from '../utils/dataService';
import { Card, CardTitle, TextField, FlatButton  } from 'material-ui';

class EmpoyeeForm extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      cardTitle: 'New Employee'
    	,model: {
        id:1
        ,firstName: null
        ,lastName: null
        ,secondLastName: null
        ,jobTitle: null
        ,location: null
        ,email: null
        ,phoneNumber: null
        ,userName: null
      }
    };
  }

  componentDidMount() {
    //this.getExternalData();
  }

  getExternalData(employeeId) {
  	api.get('/employees/' + employeeId)
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
      <Card style={{ margin: 20 }}>
        <CardTitle title={this.state.cardTitle} />
        <div style={{ padding: 24 }}>
          <TextField
            hintText="First Name"
            floatingLabelText="First Name" /><br />
          <TextField
            hintText="Last Name"
            floatingLabelText="Last Name" /><br />
          <TextField
            hintText="Second Last Name"
            floatingLabelText="Second Last Name" /><br />
          <TextField
            hintText="Job Title"
            floatingLabelText="Job Title" /><br />
          <TextField
            hintText="Location"
            floatingLabelText="Location" /><br />
          <TextField
            type="email"
            hintText="Email"
            floatingLabelText="Email" /><br />
          <TextField
            type="tel"
            hintText="Phone"
            floatingLabelText="Phone" /><br />          
        </div>
        <div style={{ padding: 10, textAlign: 'right' }}>
          <FlatButton  label="Cancel" secondary={true} />
          <FlatButton  label="Save" primary={true} />
        </div>
      </Card>
    );
  }
}

export default EmpoyeeForm;