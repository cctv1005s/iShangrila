import React from 'react';
import util from 'util';
import $ from 'jquery';

//用于给用户选择旅游景点的地方
class PlanSelectPlace extends React.Component{
    constructor(e){
        super(e);
    }
    
    componentDidMount(){
        //抓取景点数据
        $.get('/place?q=0',function(data){
            var data = JSON.parse(data);
        });
    }

    render(){
        return (
            <div>
                
            </div>
        );
    };
}

export default PlanSelectPlace;