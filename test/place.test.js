/**
 * 百度地图api的测试
 */
var expect = require('chai').
expect;
var place_tools = require('../api/place_tools.js');
var config = require('../config');

describe('百度地图api的测试',function(){
    it('获取香格里拉的景点',function(done){
        var info = {
            p:0,
            ak:config['baiduMapKey']
        };
        place_tools.getPlace(info,function(err,body){
            if(err)
                throw Error(err);
            expect(body).to.be.a('string');
            done();
        });
    });
});