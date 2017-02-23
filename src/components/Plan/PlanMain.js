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
    }

    render(){
        return (
          <MuiThemeProvider>
            <div>
              <AppBar 
              　className="AppBar"
              　title="我的香格里拉"
              />
                 <RaisedButton
                  href="https://github.com/callemall/material-ui"
                  target="_blank"
                  label="定制个人旅行计划"
                  secondary={true}
                />
              <Footer />
            </div>
          </MuiThemeProvider>
        )
    };
}

export default PlanMain;