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
    var selectedIndex = this.getIndex()||1;
    this.state = {
        selectedIndex: selectedIndex
    };
  }

  getIndex(){
    var hash = window.location.hash;
    var index = 1;
    if(hash.indexOf('bbs') >= 0){
      index = 0;
    }else if(hash.indexOf('share')>=0){
      index = 1;
    }else if(hash.indexOf('plan')>=0){
      index = 2;
    }
    return index;
  }

  select(index){
  	window.location.href = '#/'+menu[index];
    this.setState({selectedIndex: index});
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