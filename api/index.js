var express = require('express');
var router = express.Router();
var request = require('request');
var EventProxy = require('eventproxy');
var cheerio = require('cheerio');
var tools = require('./tools.js');

router.get('/',function(req,res,next){
	res.render(process.env.NODE_ENV == 'production'?'pro_index.ejs':'dev_index.ejs');
});

router.get('/share',function(req,res,next){
	tools.get_share(function(err,data){
		res.send(data);
	});
});


module.exports = router;
