/**
 * Created by beens on 16/12/19.
 */

var url = require('url'),
    youku = require("./api/youku"),
    tudou = require("./api/tudou"),
    iqiyi = require("./api/iqiyi"),
    sohu = require("./api/sohu"),
    qq = require("./api/qq");


var go = function(apiName,request,response){
    switch(apiName){
        case "youku":
            youku(request,response);
            break;

        case "sohu":
            sohu(request,response);
            break;

        case "qq":
            qq(request,response);
            break;

        case "tudou":
            tudou(request,response);
            break;

        case "iqiyi":
            iqiyi(request,response);
            break;

        default:
            response.writeHead(200,{
                'Content-Type' : "application/json; charset=UTF-8",
                'Access-Control-Allow-Origin': '*'   //可跨域访问
            });
            response.end("404");
            break;
    }



};



module.exports = function(request,response){
    var src = url.parse(request.url),   //当前请求的地址，不含前缀
        method = request.method,
        pathName = src.pathname,
        dirName = pathName.match(/^\/[a-zA-Z0-9_-]*\//) || [];
    dirName = dirName[0] || "";
    dirName = dirName.substr(1, dirName.length-2);

    //-----------------------------------------
    //api接口   只支持一层的名字解析
    if(dirName.toLowerCase() == "api"){
        //获取接口名
        var apiName = pathName.substr(5);
        //接口存在调用接口
        go(apiName,request,response);

    }




};



