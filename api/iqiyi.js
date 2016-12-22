

var _res = require("./../response"),
    ajax = require("./../ajax_get"),
    cheerio = require("cheerio");


var data = {
    movie:[],
    tv:[]
};


var getMovie = function(request,response){
    ajax(
        "http://www.iqiyi.com/dianying/",
        function(body){
            var $ = cheerio.load(body);
            var text = $("#block-AT").find(".focus_img_list").find("li");
            var _data = [];

            text.each(function(){
                var img_src = $(this).css("background-image");
                img_src = img_src.substr(4,img_src.length-5);

                _data.push({
                    title:$(this).find("a").data("indexfocus-currenttitleelem"),
                    img:img_src,
                    url:$(this).find("a").attr("href")
                })
            });

            data.movie = _data;
            getTV(request,response);
        },
        function(err){
            data.movie = err;
            getTV(request,response);
        }
    );
};

var getTV = function(request,response){
    ajax(
        "http://www.iqiyi.com/dianshiju/",
        function(body){
            // buffer转字符串  默认utf-8转
            // body = body.toString();


            var $ = cheerio.load(body);
            var _data = [],
                list = $("#block-AT").find(".focus_img_list").find("li");

            // console.log($("#block-C").length)
            // console.log($("#block-C").find(".focusOne_mainList"))
            // console.log(list.length);
            // console.log(title.length)

            list.each(function(i){
                var img_src = $(this).css("background-image");
                img_src = img_src.substr(4,img_src.length-5);

                _data.push({
                    title:$(this).find("a").data("indexfocus-currenttitleelem"),
                    img:img_src,
                    url:$(this).find("a").attr("href")
                })
            });

            data.tv = _data;
            end(request,response);

        },
        function(err){
            data.tv = err;
            end(request,response);
        }
    );
};



var end = function(request,response){
    var text = JSON.stringify(data);
    _res(text,response);
};



module.exports = function(request,response){
    getMovie(request,response);


};