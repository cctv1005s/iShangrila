import React from 'react';
import AppBar from 'material-ui/AppBar';
import LeftArrow from 'material-ui/svg-icons/navigation/arrow-back.js';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu.js';


class App extends React.Component{
    constructor(e){
      super(e);
      this.state = {};
      this.state.IconsMap = new Map([
        ['back',(<IconButton><LeftArrow onClick={this.handleClick.bind(this)} /></IconButton>)],
        ['menu',(<IconButton><Menu onClick={this.handleClick.bind(this)} /></IconButton>)]
      ]);

      this.state.IconsFn = {
        'back':function(e){
          history.go(-1);
        }
      }
    }
    render(){
        return (
            <div>
              <AppBar 
              　className={this.props.className}
              　title={this.props.title}
                iconElementLeft={this.state.IconsMap.get(this.props.type||'menu')}
              />
              <div className="AppBar-block"></div>
            </div>
        )
    };

    handleClick(e){
        //执行点击函数
        if(this.props.type)
          return this.state.IconsFn[this.props.type](e);
        
        if(this.props.handleClick)
          this.props.handleClick();
    }
}

export default App;