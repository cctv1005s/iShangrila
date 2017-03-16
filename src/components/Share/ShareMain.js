import React from 'react';
import Footer from '../Footer.js'
import Paper from 'material-ui/Paper';
import Share from './Share.js'
import $ from 'jquery';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from '../AppBar';

import CircularProgress from 'material-ui/CircularProgress';

//引用菜单
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import Stars from 'material-ui/svg-icons/action/stars';
import Settings from 'material-ui/svg-icons/action/settings';

import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

class App extends React.Component{
    constructor(e){
        super(e);
        this.state = {
          share:[]
        };
    }

    componentDidMount(){
        var _self = this;

        $.get('/share',function(body){
          _self.setState({
            share:body,
            open:false
          });
        });
    }

    render(){
        return (
          <MuiThemeProvider>
            <div>
              <Drawer
                docked={false}
                width={250}
                open={this.state.open}
                onRequestChange={(open) => this.setState({open})}
              >
                <div className=""></div>
                <MenuItem primaryText="我的收藏" leftIcon={<Stars />} />
                <MenuItem primaryText="关于" leftIcon={<Settings />} onClick={()=>window.location.href = "/#/about"}/>
              </Drawer>
              <AppBar 
              　className="AppBar"
              　title="我的香格里拉"
                handleClick={()=>this.setState({open:true})}
              />
              {
                this.state.share.length == 0?(<div className="progress"><CircularProgress /></div>):(<div></div>)
              }
              {
                this.state.share.map(function(ele,i){
                  return (<Share key={i} share={ele}/>);
                })
              }

              <Footer />
            </div>
          </MuiThemeProvider>
        )
    };
}

export default App;