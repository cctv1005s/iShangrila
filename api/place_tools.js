var request = require('request');
var EventProxy = require('eventproxy');
var util = require('util');

const api_url = 'http://api.map.baidu.com/place/v2/search?query=%s&region=%s&page_num=%s&city_limit=true&output=json&ak=%s';
/**
 * 用于获得请求的地址
 * 
 * @param info {Object} 请求的信息，包括查询语，地点，页数，秘钥
 */
var format_api = function(info){
    //查询语句，城市，页数，秘钥
    return util.format(api_url,encodeURI('景点'),encodeURI('香格里拉'),info.p,info.ak);
}


/**
 * 抓取香格里拉有关的旅游景点
 */
exports.getPlace = function(info,cb){
    request(format_api(info),function(err,req,body){
        if(err)
            return cb(err);
        cb(null,body);
    });
};
