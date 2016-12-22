/**
 * Created by beens on 16/11/28.
 * 返回最终json报文
 */



var responseJsonFormat = require("./apiJsonFormat");

module.exports = function(type,msg,response){
    var json = (type == "success") ?
            responseJsonFormat.success(msg) :
            responseJsonFormat.error(msg);


    response.writeHead(200, {
        'Content-type':'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*'   //可跨域访问
    });

    response.write(JSON.stringify(json));
    response.end();
};