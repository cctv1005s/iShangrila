import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Share extends React.Component{
  readMore(){
    window.location.href = '/#/share/'+this.props.share.key;
  }

  render(){
    var share = this.props.share;
    var self = this;
    return (
      <Card className="share-item">
        <CardHeader
          title="xx用户"
          subtitle="xx职业"
          avatar="http://n1-q.mafengwo.net/s9/M00/AC/D5/wKgBs1ds_PCAAx-mAAFkFJ3HkMM95.jpeg?imageMogr2%2Fthumbnail%2F%2190x90r%2Fgravity%2FCenter%2Fcrop%2F%2190x90%2Fquality%2F90"
        />

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
          <FlatButton label="收藏" />
        </CardActions>
      </Card>
    );
  }
}

export default Share;