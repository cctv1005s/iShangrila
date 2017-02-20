'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Router, Route, hashHistory } from 'react-router';
import Footer from './Footer.js'
import Paper from 'material-ui/Paper';

class App extends React.Component{
    constructor(e){
        super(e);
        this.state={
            selectedIndex:0
        };
    }

    select(index){this.setState({selectedIndex: index});}

    render(){
        return (
              <MuiThemeProvider>
                <div>
                <AppBar 
                　className="AppBar"
                　title="我的香格里拉"
                />
                
                <CardExampleWithAvatar />
                <CardExampleWithAvatar />

                <Footer />
                </div>
              </MuiThemeProvider>
        )
    };
}

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardExampleWithAvatar = () => (
  <Card className="share-item">
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="http://n1-q.mafengwo.net/s9/M00/AC/D5/wKgBs1ds_PCAAx-mAAFkFJ3HkMM95.jpeg?imageMogr2%2Fthumbnail%2F%2190x90r%2Fgravity%2FCenter%2Fcrop%2F%2190x90%2Fquality%2F90"
    />

    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img src="http://b1-q.mafengwo.net/s9/M00/77/EA/wKgBs1dspAuAdc-WAB2TF48PD-Q38.jpeg?imageView2%2F2%2Fw%2F1000%2Fh%2F300%2Fq%2F100" />
    </CardMedia>

    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      每个人心中都有一个丽江，安静而孤独。在丽江，遇人，遇城，遇心。有些人，从这里开始流浪，也有人，在这里找到故乡。除了文...
    </CardText>
    
    <CardActions>
      <FlatButton label="更多" />
      <FlatButton label="收藏" />
    </CardActions>

  </Card>
);

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

//最终渲染
ReactDom.render((
    <Router history={hashHistory}>
        <Route path='/' component={App}></Route>
        <Route path='/share' component={App}></Route>
    </Router>
), document.getElementById('app'));
