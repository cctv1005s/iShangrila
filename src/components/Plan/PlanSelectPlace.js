import React from 'react';
import util from 'util';
import $ from 'jquery';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import CircularProgress from 'material-ui/CircularProgress';

import RaisedButton from 'material-ui/RaisedButton';

//用于给用户选择旅游景点的地方
var styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    overflowY: 'auto',
  },
};

//加载动画
var progress = (<div className="progress"><CircularProgress /></div>);

class PlanSelectPlace extends React.Component{
    constructor(e){
        super(e);
        this.state={
          placeData:[],
          starPlace:[]
        };
    }
    
    componentDidMount(){
        //获取景点数据
        var self = this;
        $.get('/place?q=0',function(data){
            var data = JSON.parse(data);
            self.setState({
              placeData:data.results
            });
        });
    }

    /**
     * 用于处理选择的景点的点击
     * 
     * @param key {string} 景点的名称
    */
    handleStar(name){
      this.state.starPlace.push(name);
      this.setState({});
    }
    
    /**
     * 查看某一个元素是否被选中
     * 
     * @param name {string} 景点的名称
    */
    isStar(name){
      var p = this.state.starPlace;
      for(var i in p){
        if(p[i] == name)
          return true;
      }
      return false;
    }

    render(){
        var self = this; 
        return (
            <div style={styles.root}>
                {
                  this.state.placeData.length == 0?progress:(<div></div>)
                }
                <GridList
                cellHeight={180}
                style={styles.gridList}
                >
                {this.state.placeData.map((tile) => (
                    <GridTile
                    key={tile.img}
                    title={tile.name}
                    onClick={function(e){
                      self.handleStar(tile.name);
                    }} 
                    actionIcon={
                      <IconButton>
                      <StarBorder color={ this.isStar(tile.name)?"rgb(0, 188, 212)":"white"} />
                      </IconButton>
                    }
                    >
                    <img src={tile.img_url} />
                    </GridTile>
                ))}
                </GridList>

                <RaisedButton
                backgroundColor="#a4c639"
                label="下一步"
                className="select-table-next"
                onClick={this.props.nextStep}
                />
                
            </div>
        );
    };
}

export default PlanSelectPlace;