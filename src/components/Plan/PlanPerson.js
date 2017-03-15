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

class PlanPerson extends React.Component{
    constructor(e){
        super(e);
        this.state={
            value:1
        };
    }

    handleChange(event, index, value){
        this.setState({value});
    }

    render(){
        return (
        	<Paper className="plan-select-table">
                生成计划中
        	</Paper>
        );
    };
}

export default PlanPerson;