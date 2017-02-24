import React from 'react';
import Footer from '../Footer.js'
import Paper from 'material-ui/Paper';
import $ from 'jquery';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from '../AppBar';

class PlanMore extends React.Component{
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
            <div className="plan">
              <AppBar 
              　className="AppBar"
              　title="我的香格里拉"
              />
              <div className="plan-more">

              </div>
            </div>
          </MuiThemeProvider>
        )
    };
}

export default PlanMore;