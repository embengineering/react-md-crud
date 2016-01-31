import React from 'react';
import BaseComponent from './BaseComponent.jsx';
import Home from './Home.jsx';
import Toastr from './Toastr.jsx';
import { AppBar, Styles, LeftNav } from 'material-ui';

class Layout extends BaseComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AppBar
          title="REACT-MD-CRUD" />
        <LeftNav
          ref="leftNav"
          docked={false} />
        <Home />
        <Toastr />
      </div>
    );
  }
}

export default Layout;
