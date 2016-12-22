

var http = require('http'),        // Http服务器API
	setting = require("./setting"),
	rout = require("./rout");

var server = new http.Server(),    // 创建新的HTTP服务器
	port = setting.serverPort;


server.listen(port);            // 监听端口8000
// 使用on方法注册时间处理
server.on('request', function(request, response) { // 当有request请求的时候触发处理函数
	//解析并路由
	rout(request,response);
});



console.log("server start on "+port+" port");