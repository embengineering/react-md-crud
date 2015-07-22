import React from 'react';
import BaseComponent from './BaseComponent.jsx';
import Layout from './Layout.jsx';

class Main extends BaseComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return <Layout />;
  }
}

export default Main;