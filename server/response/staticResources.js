/**
 * Created by beens on 16/11/28.
 * 返回输出静态资源
 */


var pageNotFond = require("./404.js"),
    fs = require("fs");


// 对于确实很大的文件,使用流API fs.createReadStream()更好
// 目前用的readFile
module.exports = function(htmlFileUrl,type,response){
    fs.readFile(htmlFileUrl, function(err, content){
        if(err) {
            pageNotFond(response);
        } else {
            response.writeHead(200, {
                'Content-Type' : type,
                'Access-Control-Allow-Origin': '*'   //可跨域访问
            });
            response.write(content);
            response.end();
        }
    });
};