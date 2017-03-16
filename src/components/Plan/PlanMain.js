import React from 'react';
import Footer from '../Footer.js'
import Paper from 'material-ui/Paper';
import $ from 'jquery';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from '../AppBar';

import RaisedButton from 'material-ui/RaisedButton';
import MapIcon from 'material-ui/svg-icons/maps/map.js';


//引用菜单
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import Stars from 'material-ui/svg-icons/action/stars';
import Settings from 'material-ui/svg-icons/action/settings';

import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';


class PlanMain extends React.Component{
    constructor(e){
        super(e);
        this.state = {
          share:[],
          open:false
        };
    }

    componentDidMount(){
        $("#map-bg").css('height',window.innerHeight - 64);
        var map = new BMap.Map("map-bg");          // 创建地图实例  
        var point = new BMap.Point(99.710949,27.832574);  // 创建点坐标  
        map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
    }

    render(){
        return (
          <MuiThemeProvider>
            <div className="plan">
              <Drawer
                docked={false}
                width={250}
                open={this.state.open}
                onRequestChange={(open) => this.setState({open})}
              >
                <div className=""></div>
                <MenuItem primaryText="我的收藏" leftIcon={<Stars />} onClick={()=>alert("尚未完成")}/>
                <MenuItem primaryText="关于" leftIcon={<Settings />} onClick={()=>window.location.href = "/#/about"}/>
              </Drawer>

              <AppBar 
              　className="AppBar"
              　title="我的香格里拉"
                handleClick={()=>this.setState({open:true})}
              />
        
              <div className="plan-main">
                <div id="map-bg"></div>
                <RaisedButton
                  className="plan-make"
                  href="/#/plan/planMore"
                  label="定制个人旅行计划"
                  secondary={true}
                  icon={<MapIcon></MapIcon>}
                />
              </div>
              <Footer />
            </div>
          </MuiThemeProvider>
        )
    };
}

export default PlanMain;






