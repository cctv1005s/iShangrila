import React from 'react';
import Footer from '../Footer.js'
import Paper from 'material-ui/Paper';
import $ from 'jquery';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from '../AppBar';

//年龄，性别，资金选择框
import SelectTable from './PlanSelectTable.js';
//选择旅游出行的景点
import SelectPlace from './PlanSelectPlace.js';


import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

class PlanMore extends React.Component{
    constructor(e){
        super(e);
        this.state = {
          stepIndex:0
        };
    }

    handleNext(){
      //刷新一下进度
      this.setState({
        stepIndex:++this.state.stepIndex
      });
    }

    renderSelect(fn){
      //通过一个数组来绑定上面的显示与下面的表单之间的关系
      var key = 0;
      var Dash = [
        (<SelectTable nextStep={fn} />),
        (<SelectPlace nextStep={fn} />)
      ];

      //
      return Dash[this.state.stepIndex];
    }

    render(){
        var stepIndex = 0;
        return (
          <MuiThemeProvider>
            <div className="plan">
              <AppBar 
              　className="AppBar"
              　title="我的香格里拉"
                type="back"
              />
              
              <div className="plan-more">
                <Stepper activeStep={this.state.stepIndex}>
                  <Step>
                    <StepLabel>填入信息</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel>选择地点</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel>完成</StepLabel>
                  </Step>
                </Stepper>
              </div>
              
              {this.renderSelect(this.handleNext.bind(this))}
              
            </div>
          </MuiThemeProvider>
        )
    };
}

export default PlanMore;