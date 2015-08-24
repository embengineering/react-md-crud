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
    const textFieldCommon = { minWidth: 200, marginLeft: 20 };

    return (
      <Card {...this.props} >
        <CardTitle title={this.state.cardTitle} />
        <div style={{ 
          display: 'flex'
          ,flexFlow: 'row wrap'
          ,justifyContent: 'flex-start' 
          ,alignContent: 'center'
          ,alignItems: 'center'
          ,height: 'auto'
        }}>
          <TextField
            style={textFieldCommon}
            hintText="First Name"
            floatingLabelText="First Name" />
          <TextField
            style={textFieldCommon}
            hintText="Last Name"
            floatingLabelText="Last Name" />
          <TextField
            style={textFieldCommon}
            hintText="Second Last Name"
            floatingLabelText="Second Last Name" />            
          <TextField
            style={textFieldCommon}
            hintText="Job Title"
            floatingLabelText="Job Title" />
          <TextField
            style={textFieldCommon}
            hintText="Location"
            floatingLabelText="Location" />
          <TextField
            style={textFieldCommon}
            type="email"
            hintText="Email"
            floatingLabelText="Email" />
          <TextField
            style={textFieldCommon}
            type="tel"
            hintText="Phone"
            floatingLabelText="Phone" />
        </div>
        <div style={{ margin: '30px 20px' }}>
          <FlatButton  label="Save" primary={true} />
          <FlatButton  label="Cancel" secondary={true} />
        </div>
      </Card>
    );
  }
}

export default EmpoyeeForm;