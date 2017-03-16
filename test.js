var request = require('request');
var fs = require('fs');

request('http://s.tuniu.com/search_complex/around-tj-0-%E9%A6%99%E6%A0%BC%E9%87%8C%E6%8B%89/',function(err,req,body){
    fs.writeFileSync("test.html",body);
});