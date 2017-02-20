'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Router, Route, hashHistory } from 'react-router';
import Footer from './Footer.js'
import Paper from 'material-ui/Paper';

import Share from './Share/Share.js'
import $ from 'jquery';

import CircularProgress from 'material-ui/CircularProgress';

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
            share:body
          });
        });
    }

    render(){
        return (
          <MuiThemeProvider>
            <div>
              <AppBar 
              　className="AppBar"
              　title="我的香格里拉"
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

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

//最终渲染
ReactDom.render((
    <Router history={hashHistory}>
        <Route path='/' component={App}></Route>
        <Route path='/share' component={App}></Route>
    </Router>
), document.getElementById('app'));
