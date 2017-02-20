var express = require('express');
var router = express.Router();
var request = require('request');
var EventProxy = require('eventproxy');

router.get('/',function(req,res,next){
	res.render('index');
});

router.get('/share',function(req,res,next){

});

module.exports = router;