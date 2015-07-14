'use strict';
import React from 'react';
import styles from './styles/app';

class Test extends React.Component {
  render() {
    return (
      <div style={styles.wrapper}>
        <h1 style={styles.wrapperHeader}>Hello, world!!</h1>
        <p>This is a simple Hello World application built on ReactJS (ES6) with Gulp</p>
      </div>
    );
  }
}

React.render(<Test/>, document.body);
