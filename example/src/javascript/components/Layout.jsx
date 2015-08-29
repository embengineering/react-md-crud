import React from 'react';
import { BaseComponent } from 'core';
import { RouteHandler } from 'react-router';
import { AppBar, Styles, LeftNav, MenuItem } from 'material-ui';

const ThemeManager = new Styles.ThemeManager();

class Layout extends BaseComponent {

  constructor(props) {
    super(props);
    this._bind('handleNavLeftIconClick', 'getMenuItems');
  }

  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Styles.Colors.deepOrange500
    });
  }

  handleNavLeftIconClick() {
    this.refs.leftNav.toggle();
  }

  getMenuItems() {
    return [
      { route: 'get-started', text: 'Get Started' },
      { route: 'customization', text: 'Customization' },
      { route: 'components', text: 'Components' },
      { type: MenuItem.Types.SUBHEADER, text: 'Resources' }
    ];
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    return (
      <div>
        <AppBar
          title="REACT-MD-CRUD"
          onLeftIconButtonTouchTap={this.handleNavLeftIconClick} />
        <LeftNav
          ref="leftNav"
          docked={false}
          menuItems={this.getMenuItems()} />
        <RouteHandler />        
      </div>
    );
  }
}

Layout.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default Layout;