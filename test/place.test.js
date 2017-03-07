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
            
            body = JSON.parse(body);
            expect(body).to.be.a('object');
            
            var results = body.results;
            expect(results).to.be.a('array');
            
            results.forEach(function(ele){
                expect(ele).to.include.keys('img_url');
            });
            done();
        });
    });
});