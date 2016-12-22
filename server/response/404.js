/**
 * Created by beens on 16/11/28.
 * 404页面处理
 */

var setting = require("../setting"),
    fs = require("fs");


module.exports = function(response){
    fs.readFile(setting.url404, function(err, content){
        if(err) {
            response.writeHead(404, {
                'Content-Type':'text/plain; charset="UTF-8"' ,
                'Access-Control-Allow-Origin': '*'   //可跨域访问
            });
            response.write("404");
            response.end();
        } else {
            response.writeHead(200, {
                'Content-Type' : 'text/html; charset=UTF-8' ,
                'Access-Control-Allow-Origin': '*'   //可跨域访问
            });
            response.write(content);
            response.end();
        }
    });



};