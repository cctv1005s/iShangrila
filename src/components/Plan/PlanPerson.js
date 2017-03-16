/**
 * 生成个人的计划
 */
import React from 'react';
import $ from 'jquery';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from '../AppBar';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';

import RaisedButton from 'material-ui/RaisedButton';


import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class PlanPerson extends React.Component{
    constructor(e){
        super(e);
        this.state={
            value:1,
            plan:[]
        };
    }

    componentDidMount(){
        var placeData = this.props.stepData[1];
        var self = this;
        $.ajax({
            type:'post',
            url:'/plan',
            contentType: "application/json; charset=utf-8",   //内容类型
            data:JSON.stringify({"keys":placeData}),
            success:function(data){
                self.setState({
                    plan:data
                });
            }
        });
    }

    handleChange(event, index, value){
        this.setState({value});
    }

    render(){
        return (
        	<Paper className="plan-select-table">
                {
                    this.state.plan.map(function(ele,i){
                        return(
                    <Card className="plan-item">
                        <CardMedia
                         overlay={
                            <CardTitle 
                            subtitle={ele.overview}
                            style={{lineHeight:"100%",fontSize:"15px"}}
                            />
                            }
                        >
                        <img src={ele.thumb} />
                        </CardMedia>
                        <CardText>
                        {ele.title}
                        </CardText>
                        <CardActions>
                        <FlatButton 
                            label="更多"
                            href={ele.href}
                        />
                        </CardActions>
                    </Card>
                        );
                    })
                }
        	</Paper>
        );
    };
}

export default PlanPerson;