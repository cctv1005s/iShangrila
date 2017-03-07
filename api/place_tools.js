var request = require('request');
var EventProxy = require('eventproxy');
var util = require('util');
var cheerio = require('cheerio');

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
 * 通过关键词获取图片
 * 
 * @param q {string} 关键词
 * @param cb {function} 回调函数
 */
var getImgByQ = function(q,cb){
    if(!q)
        return cb('关键词不存在');
    //必应搜图网址
    var bing_url = 'http://cn.bing.com/images/search?q=%s';
    var search_url = util.format(bing_url,q);
    request(search_url,function(err,req,body){
        //抓取第一张图片
        var $ = cheerio.load(body);
        
    });
}

/**
 * 根据body获取所有的景点的图片，并转换为字符串返回
 * @param body {string} 传来的信息 
 */
var getAllImg = function(body,cb){
    try{
        var data = JSON.parse(body);
        var ep = new EventProxy();
        data.forEach(function(ele){
            var q = ele.name;
            getImgByQ(q,function(err,img_url){
                ele.img_url = img_url;
                ep.emit('img',img_url);
            });
        });
        //抓取每一个项的图片
        ep.after('img',data.length,function(items){
            body.result = items;
            cb(null,JSON.stringify(body));
        });
    }catch(e){
        cb(e);
    }
}

/**
 * 抓取香格里拉有关的旅游景点
 */
exports.getPlace = function(info,cb){
    request(format_api(info),function(err,req,body){
        if(err)
            return cb(err);
        //抓取图片
        getAllImg(body,function(err,body){
            if(err)
               return cb(err);
            cb(null,body);
        });
    });
};



