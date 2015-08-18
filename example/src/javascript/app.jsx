'use strict';
import React from 'react';
import { run, Route, HashLocation, DefaultRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';

 //Needed for React Developer Tools
window.React = React;

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

var routes = (
  <Route handler={Layout}>
    <DefaultRoute handler={Home}/>
    <Route handler={Home} name="employees" />
  </Route>
);

run(routes, HashLocation, (Root) => {
  React.render(<Root/>, document.body);
});