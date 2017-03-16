var request = require('request-promise');
var cheerio = require('cheerio');
var Promise = require('bluebird');


/**
 * 获取途牛旅游网的自助游计划
 * 
 */
var get = function(){
    return new Promise(function(resolve,reject){
        var option = {
            uri:'http://s.tuniu.com/search_complex/around-tj-0-%E9%A6%99%E6%A0%BC%E9%87%8C%E6%8B%89/',
            transform:function(body){
                return cheerio.load(body);
            }
        };

        request(option)
        .then(function($){
            var $ele = $('.theinfo');
            var _t = [];
            for(var i in $ele){
                var ele = $ele[i];
                _t.push({

                });
            }
            return $ele.map(function(i,ele){
                return {
                    title:$(ele).find('.title').text(),
                    overview:$(ele).find('.overview').text(),
                    overviewScenery:$(ele).find('.overview-scenery').text(),
                    href:$(ele).find('a').attr('href'),
                    thumb:$(ele).find('.img img').attr('data-src')
                }
            });
        })
        .then(function(data){
            resolve(data);
        })
        .catch(function(err){
            reject(err);
        });
    })
}

var Plan = {
    get:get
};

exports = module.exports = Plan;