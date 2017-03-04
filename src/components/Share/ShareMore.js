import React from 'react';
import Footer from '../Footer.js'
import Paper from 'material-ui/Paper';
import Share from './Share.js'
import $ from 'jquery';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from '../AppBar.js';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowDown from 'material-ui/svg-icons/file/cloud-download.js';

import CircularProgress from 'material-ui/CircularProgress';
import domtoimage from 'dom-to-image';

//加载底部提示
import Snackbar from 'material-ui/Snackbar';

class ShareMore extends React.Component{
    constructor(e){
        super(e);
        this.state = {
          share:[],
          ready:false,
          dataUrl:"",
          open:false
        };
    }

    componentDidMount(){
        var _self = this;
        var key = this.props.params.key;
        $.get('/share/'+key,function(body){
          console.log(body);
          _self.setState({
            share:body
          });
          _self.getImage();
        });
    }

    getImage(){
      var self = this;
      var node = document.getElementById('share-more-paper');
      domtoimage
      .toPng(node)
      .then(function (dataUrl){
          //图片准备ok
          self.setState({
            ready:true,
            imageUrl:dataUrl,
            open:true
          })
      })
      .catch(function (error) {
          console.error('oops, something went wrong!', error);
      });
    }

    handleRequestClose(){
      this.setState({
        open:false
      });
    }

    render(){
        var self = this;
        var DownloadBtn = (
          <FloatingActionButton 
            className="downloadBtn" 
            href={this.state.imageUrl}
            download="plan.png"
            target="_blank"
          >
            <ArrowDown />
          </FloatingActionButton>
        );
        return (
          <MuiThemeProvider>
            <div className="shareMore">
              <AppBar 
              　className="AppBar"
              　title="我的香格里拉"
              />
              <div 
                className="share-more-paper" 
                id="share-more-paper" 
                dangerouslySetInnerHTML={{__html:this.state.share.blog}}
              >
              </div>
              {this.state.share.length == 0?(<div className="progress"><CircularProgress /></div>):(<div></div>)}
              {this.state.ready?DownloadBtn:(<div></div>)}
              
              <Snackbar
                open={this.state.open}
                message="点击右下角按钮可以保存攻略"
                autoHideDuration={1000}
                onRequestClose={function(){self.handleRequestClose()}}
              />
            </div>
          </MuiThemeProvider>
        )
    };
}

export default ShareMore;