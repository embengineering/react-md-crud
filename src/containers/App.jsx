import React from 'react';
import {connect} from 'react-redux';

import BaseComponent from '../components/BaseComponent.jsx';
import Home from '../components/Home.jsx';
import Toastr from '../components/Toastr.jsx';

import {AppBar} from 'material-ui';

class App extends BaseComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AppBar title="REACT-MD-CRUD" />
        <Home />
        <Toastr />
      </div>
    );
  }
}

export default connect()(App);
