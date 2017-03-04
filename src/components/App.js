'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import ShareMain from './Share/ShareMain.js';
import ShareMore from './Share/ShareMore.js';
import PlanMain from './Plan/PlanMain.js';
import PlanMore from './Plan/PlanMore.js'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

//最终渲染
ReactDom.render((
    <Router history={hashHistory}>
        <Route path='/' component={ShareMain}></Route>
        <Route path='/share' component={ShareMain}></Route>
        <Route path='/share/:key' component={ShareMore}></Route>
        <Route path='/plan' component={PlanMain}></Route>
        <Route path='/plan/planMore' component={PlanMore}></Route>
    </Router>
), document.getElementById('app'));
