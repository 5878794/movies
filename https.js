var https = require('https'),
    fs = require('fs'),
    rout = require("./rout");

var options = {
    pfx:fs.readFileSync('ca/server.pfx'),
    passphrase:'xufeng'
};

https.createServer(options,function(req,res){
    rout(req,res);


    // res.writeHead(200,{
    //     'Content-Type' : "application/json; charset=UTF-8",
    //     'Access-Control-Allow-Origin': '*'   //可跨域访问
    // });
    // res.end('hello world\n');
}).listen(4443,'127.0.0.1');