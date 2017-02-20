var request = require('request');
var cheerio = require('cheerio');
var EventProxy = require('eventproxy');

var share_url = 'http://www.mafengwo.cn/search/s.php?q=%E9%A6%99%E6%A0%BC%E9%87%8C%E6%8B%89&t=article_gonglve';

exports.get_share = function(cb){
    //去搜索页抓取分享的数据    
    request(share_url,function(err,req,body){
        if(err)
            return cb(err);  
        try{
            var $ = cheerio.load(body);            
        }catch(e){
            cb(e);
        }
        var $li = $('.att-list > ul > li');
        
        //分享的数据
        var _share_o = [];
        $li.map(function(i,ele){
        	var $img = $(ele).find('.flt1 img');
        	var $a = $(ele).find('flt1 a');
        	var _href = $a.attr('href');
        	var _img_src = $img.attr('src');
        	var $title = $(ele).find('.ct-text h3');
        	var _title = $title.text();
        	var $p = $(ele).find('.seg-desc');
        	var _p = $p.text();
        	var _info = {
        		href:_href,
        		img:_img_src,
        		title:_title.trim(),
        		p:_p.trim()
        	};
        	_share_o.push(_info);
        });
        cb(null,_share_o);
    });
}


