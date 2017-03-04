var express = require('express');
var router = express.Router();
var request = require('request');
var EventProxy = require('eventproxy');
var cheerio = require('cheerio');
var tools = require('./tools.js');

router.get('/',function(req,res,next){
    res.render(process.env.NODE_ENV == 'production'?'pro_index.ejs':'dev_index.ejs');
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


module.exports = router;
