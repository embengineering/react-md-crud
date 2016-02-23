import React from 'react';
import {AppBar} from 'material-ui';

import HomeContainer from '../containers/HomeContainer.jsx';
import NotificationContainer from '../containers/NotificationContainer.jsx';

const App = () => (
  <div>
    <AppBar title="REACT-MD-CRUD" />
    <HomeContainer />
    <NotificationContainer />
  </div>
);

export default App;
