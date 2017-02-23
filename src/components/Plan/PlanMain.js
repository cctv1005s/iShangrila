import React from 'react';
import Footer from '../Footer.js'
import Paper from 'material-ui/Paper';
import $ from 'jquery';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from '../AppBar';

import RaisedButton from 'material-ui/RaisedButton';

class PlanMain extends React.Component{
    constructor(e){
        super(e);
        this.state = {
          share:[]
        };
    }

    componentDidMount(){
        $("#map-bg").css('height',window.innerHeight - 64);
        var map = new BMap.Map("map-bg");          // 创建地图实例  
        var point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
        map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
    }

    render(){
        return (
          <MuiThemeProvider>
            <div className="plan">
              <AppBar 
              　className="AppBar"
              　title="我的香格里拉"
              />
              <div className="plan-main">
                <div id="map-bg"></div>
                <RaisedButton
                  href="https://github.com/callemall/material-ui"
                  target="_blank"
                  label="定制个人旅行计划"
                  secondary={true}
                />
              </div>
              <Footer />
            </div>
          </MuiThemeProvider>
        )
    };
}

export default PlanMain;