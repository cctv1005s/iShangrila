import React from 'react';

//用于处理底部的选择框的
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import FavoritesIcon from 'material-ui/svg-icons/action/favorite';
import MessageIcon from 'material-ui/svg-icons/communication/message';
const recentsIcon = <MessageIcon />;
const favoritesIcon = <FavoritesIcon />;
const nearbyIcon = <IconLocationOn />;

var menu = ['bbs','share','plan'];

class Footer extends React.Component {
  constructor(e){
    super(e);
    this.state = {
        selectedIndex: 0,
    };
  }

  select(index){
  	this.setState({selectedIndex: index});
  	window.location.href = '#/'+menu[index];
  }

  render() {
    return (
      <Paper zDepth={1} className="Footer">
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="社区"
            icon={recentsIcon}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            label="攻略"
            icon={favoritesIcon}
            onTouchTap={() => this.select(1)}
          />
          <BottomNavigationItem
            label="定制"
            icon={nearbyIcon}
            onTouchTap={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    )
  }
}

export default Footer;