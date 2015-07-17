'use strict';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './components/Main.jsx';

 //Needed for React Developer Tools
window.React = React;

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Render the main app react component into the document body.
React.render(<Main/>, document.body);