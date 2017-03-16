var express = require('express');
var router = express.Router();
var request = require('request');
var EventProxy = require('eventproxy');
var cheerio = require('cheerio');
var tools = require('./tools.js');
var config = require('../config');

//百度地图相关工具
var place_tools = require('./place_tools.js');

router.get('/',function(req,res,next){
    res.render('index');
});

var share_data = [];
router.get('/share',function(req,res,next){
    if(share_data.length != 0)
        return res.send(share_data);

    tools.get_share(function(err,data){
        share_data = data;
        res.send(data);
    });
});

router.get('/share/:key',function(req,res,next){
    var key = req.params.key;
    if(!key)
        return res.send({});
    for(var i in share_data){
        if(share_data[i].key == key){
            return res.send(share_data[i]);
        }
    }
    return res.send({});
});

//获取香格里拉的景点
router.get('/place',function(req,res,next){
    var key = config['baiduMapKey'];
    var info = req.query;
    info.ak = key;
    place_tools.getPlace(info,function(err,body){
        res.send(body);
    });
});

var plan_tools = require('./plan_tools.js');

router.post('/plan',function(req,res,next){
    //获取景点名称参数
    var keys = req.body.keys;
    plan_tools
    .get()
    .then(function(data){
        var _d = [];
        //转换成json数据
        for(var i = 0;i < data.length ;i++){
            for(var j in keys){
                if(data[i].overviewScenery.indexOf(keys[j])){
                    _d.push(data[i]);
                    break;
                }
            }
        }
        res.send(_d);
    })
    .catch(function(err){
        next(err);
    });
});

module.exports = router;
