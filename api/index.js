var express = require('express');
var router = express.Router();
var request = require('request');
var EventProxy = require('eventproxy');
var cheerio = require('cheerio');

router.get('/',function(req,res,next){
	res.render('index');
});


var share_url = 'http://www.mafengwo.cn/search/s.php?q=%E9%A6%99%E6%A0%BC%E9%87%8C%E6%8B%89&t=article_gonglve';
router.get('/share',function(req,res,next){
	get_share(function(){
		res.send("test");
	});
});

var get_share = function(cb){
	request(share_url,function(err,req,body){
		console.log(body);
		var $ = cheerio.load(body);
	});
}

module.exports = router;