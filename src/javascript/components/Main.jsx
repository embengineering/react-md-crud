import React from 'react';
import BaseComponent from './BaseComponent.jsx';
import {
  AppBar
  ,Styles
  ,LeftNav
  ,MenuItem
  ,Card
  ,CardHeader
  ,CardTitle
  ,CardActions
  ,CardMedia
  ,Avatar
  ,FlatButton
  ,CardText
} from 'material-ui';

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
          title="REACT-CRUD"
          onLeftIconButtonTouchTap={this.handleNavLeftIconClick} />
        <LeftNav
          ref="leftNav"
          docked={false}
          menuItems={this.getMenuItems()} />
         <Card>
          <CardMedia overlay={<CardTitle title="Title" subtitle="Subtitle"/>}>
            <img src="http://lorempixel.com/g/1024/200/abstract/"/>
          </CardMedia>
          <CardActions>
            <FlatButton label="Action1"/>
            <FlatButton label="Action2"/>
          </CardActions>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
        </Card>
      </div>
    );
  }
}

Layout.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default Layout;