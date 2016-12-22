/**
 * Created by beens on 16/12/19.
 */



module.exports = function(text,response){
    response.writeHead(200,{
        'Content-Type' : "application/json; charset=UTF-8",
        'Access-Control-Allow-Origin': '*'   //可跨域访问
    });
    response.end(text);
};