import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import AppBar from './AppBar';

import Paper from 'material-ui/Paper';

/**
 * 用于展现About界面
 */
class About extends React.Component{

  render(){
    var share = this.props.share;
    var self = this;
    return (
    <MuiThemeProvider >
      <div>
        <AppBar 
        　className="AppBar"
        　title="我的香格里拉"
          type="back"
        />
        <Paper zDepth = {1} style={{margin:"20px",minHeight:"300px","padding":"10px","textAlign":"center","overflow":"hidden"}}>
        《我的香格里拉》
        <br/>
        项目地址：
        <br/>
        <a href="https://github.com/cctv1005s/iShangrila">https://github.com/cctv1005s/iShangrila</a>
        </Paper>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default About;