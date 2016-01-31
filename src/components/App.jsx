'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Util from '../utils';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Layout from './Layout.jsx';

 //Needed for React Developer Tools
window.React = React;

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// set data service url
Util.dataService.setUrl('https://emb0624-employees.firebaseio.com');

ReactDOM.render(<Layout />, document.getElementById('container'));
