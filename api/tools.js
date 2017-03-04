var request = require('request');
var cheerio = require('cheerio');
var EventProxy = require('eventproxy');
var md5 = require('md5');

var share_url = 'http://www.mafengwo.cn/search/s.php?q=%E9%A6%99%E6%A0%BC%E9%87%8C%E6%8B%89&t=article_gonglve';

exports.get_share = function(cb){
    //去搜索页抓取分享的数据    
    var ep = new EventProxy();

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
            var $a = $(ele).find('.flt1 a');
            var _href = $a.attr('href');
            var _img_src = $img.attr('src');
            var $title = $(ele).find('.ct-text h3');
            var _title = $title.text();
            var $p = $(ele).find('.seg-desc');
            var _p = $p.text();
            var _info = {
                key:md5(_title.trim()),
                href:_href,
                img:_img_src,
                title:_title.trim(),
                p:_p.trim()
            };
            _share_o.push(_info);
        });
        ep.emit('shares',_share_o);
    });

    ep.all('shares',function(share){
        var ep_each = new EventProxy();
        
        share.map(function(ele,i){
            get_share_detail(ele,function(err,data){
                ep_each.emit('each',data);
            });
        });

        ep_each.after('each',share.length,function(shares){
            cb(null,shares);
        });
    });
}

var get_share_detail = function(ele,cb){
    var href = ele.href;
    request(href,function(err,req,body){
        var $ = cheerio.load(body);
        var _blog = "";
        $(".f-block").map(function(i,ele){

            if($(ele).find('.product-box').length > 0)
                return ;
            _blog += $(ele).html();
        });
        ele.blog = _blog;
        cb(null,ele);
    });
}

