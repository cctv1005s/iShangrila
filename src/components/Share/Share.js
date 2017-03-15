import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

/**
 * 取消了收藏功能和用户头像
 */

/**
 * 用于展现share的每一个小部分的组件
 */
class Share extends React.Component{
  readMore(){
    window.location.href = '/#/share/'+this.props.share.key;
  }

  render(){
    var share = this.props.share;
    var self = this;
    return (
      <Card className="share-item">
        <CardMedia
          overlay={
            <CardTitle 
              title={share.title}
            />}
        >
          <img src={share.img} />
        </CardMedia>
        <CardText>
          {share.p}
        </CardText>
        
        <CardActions>
          <FlatButton label="更多" onClick={function(){ self.readMore(); }}/>
        </CardActions>
      </Card>
    );
  }
}

export default Share;