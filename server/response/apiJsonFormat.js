/**
 * Created by beens on 16/11/28.
 * json报文返回的格式
 */




module.exports = {
    success:function(json){
        return {
            state:1,
            msg:"success",
            data:json
        }
    },
    error:function(text){
        return {
            state:0,
            msg:text
        }
    }
};