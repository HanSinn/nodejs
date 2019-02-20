var url = require("url");

var urlStr = "https://search.naver.com/search.naver?sm=top_hty&fbm=0&ie=utf8&query=%EC%9D%B4%EC%98%81%ED%98%B8";

var curUrl = url.parse(urlStr);
console.dir(curUrl);

console.log("query : " + curUrl.query);

var curStr = url.format(curUrl);

console.log("url : " + curStr);

var queryString = require("querystring");
var params = queryString.parse(curUrl.query);

console.log("params : " + params.query);
