import React from 'react';
import AppBar from 'material-ui/AppBar';
class App extends React.Component{
    render(){
        return (
            <div>
              <AppBar 
              　className={this.props.className}
              　title={this.props.title}
              />
              <div className="AppBar-block"></div>
            </div>
        )
    };
}

export default App;