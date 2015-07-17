import React from 'react';
import BaseComponent from './BaseComponent.jsx';
import {AppBar,Styles} from 'material-ui/lib';

let ThemeManager = new Styles.ThemeManager();

class Main extends BaseComponent {

	componentWillMount() {
		ThemeManager.setPalette({
      accent1Color: Styles.Colors.deepOrange500
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