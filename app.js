"use strict";
//加载所需要的模块
var http = require('http');
var processRequest = require('./server');

var httpServer = http.createServer((req, res) => {
    processRequest(req, res);
});
var port = 8888;

//指定一个监听的接口
httpServer.listen(port, function() {
    console.log(`app is running at port:${port}`);
});