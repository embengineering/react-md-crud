import 'file?name=[name].[ext]!./index.html';
import 'babel-polyfill';
import 'fastclick';
import 'font-awesome-sass-loader';
import './scss/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './stores/configureStore';
import Util from './utils';
import App from './containers/App.jsx';

//Needed for React Developer Tools
window.React = React;

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// set data service url
Util.dataService.setUrl('https://emb0624-employees.firebaseio.com');

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
);
