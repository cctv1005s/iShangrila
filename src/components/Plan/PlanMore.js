import React from 'react';
import Footer from '../Footer.js'
import Paper from 'material-ui/Paper';
import $ from 'jquery';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from '../AppBar';

//
import SelectTable from './PlanSelectTable.js';


import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

class PlanMore extends React.Component{
    constructor(e){
        super(e);
    }

    componentDidMount(){
      
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
                <Stepper activeStep={stepIndex}>
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

            </div>
          </MuiThemeProvider>
        )
    };
}

export default PlanMore;