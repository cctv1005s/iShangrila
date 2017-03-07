import React from 'react';
import Footer from '../Footer.js'
import Paper from 'material-ui/Paper';
import Share from './Share.js'
import $ from 'jquery';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from '../AppBar';

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

export default App;