import React from 'react';
import $ from 'jquery';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from '../AppBar';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';

import RaisedButton from 'material-ui/RaisedButton';

class PlanSelectTable extends React.Component{
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
                <TextField
                hintText="请输入年龄"
                floatingLabelText="年龄"
                type="number"
                className="table-input"
                />

                <SelectField
                floatingLabelText="性别"
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
                className="table-input"
                >
                <MenuItem value={1} primaryText="男生" />
                <MenuItem value={2} primaryText="女生" />
                </SelectField>

                <TextField
                hintText="请输入旅游资金"
                floatingLabelText="旅游资金"
                type="number"
                className="table-input"
                /> 
                
                <RaisedButton
                backgroundColor="#a4c639"
                label="下一步"
                className="select-table-next"
                />
        	</Paper>
        );
    };
}

export default PlanSelectTable;