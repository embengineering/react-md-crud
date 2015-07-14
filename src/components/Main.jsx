import React from 'react';
import BaseComponent from './BaseComponent.jsx';
import Mui from 'material-ui';

let AppBar = Mui.AppBar;
let Dialog = Mui.Dialog
let ThemeManager = new Mui.Styles.ThemeManager();
let Colors = Mui.Styles.Colors;

class Main extends BaseComponent {

	componentWillMount() {
		ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
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
				  title="Demo"
				  iconClassNameRight="muidocs-icon-navigation-expand-more" />
      </div>
    );
  }
}

Main.childContextTypes = {
	muiTheme: React.PropTypes.object
};

module.exports = Main;