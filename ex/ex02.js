var http = require("http");
var fs = require("fs");

var server = http.createServer();

var options = {
    host : "http://www.w3.org/2000/svg",
    path : "/"
};

var req = http.get(options.host, function(res) {
    var resData = "";
    res.on("data", function(chunk){
        resData += chunk;
    });
    res.on("end", function(){
        console.log(resData);
    });
});
req.on("error", function(err) {
    console.log("에러발생 : " + err.message);
})