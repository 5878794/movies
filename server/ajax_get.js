/**
 * Created by beens on 16/12/19.
 */

var req = require("request");

module.exports = function(url,success,error){
    req.get({
        url:url,
        encoding:null,
        json:true,
        gzip: true,
        headers: {
            'Content-Type': 'text/html; charset=UTF-8',
            'User-Agent':'request'
        }
    },function(err,_response,body){
        if(!err  && _response.statusCode == 200){
            success(body);
        }else{
            error("error");
        }
    });
};
