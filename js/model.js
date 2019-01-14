const recommendData = 'game/recommendData';
const MGGFAPI = 'http://10.10.170.8:894/api/v1/';
let Model = {};


Model.getDataFromMGGF = function (request, data = {},cb) {
    Model.request(request,data,(response)=>{
        // console.log(response);
        cb(response);
        return response;
    });
};
Model.request = function (api,param,cb) {
    let request = new XMLHttpRequest();
    request.open('POST', MGGFAPI+api+'?'+Model.urlEncode(param), true);
    request.responseType = 'json';
    request.onload = function () {
        if(request.response.code===0){
            cb(request.response)
        }else{
            console.warn("request error: "+request.response);
        }
    };
    request.send();
};

Model.urlEncode = function (param, key, encode) {
    if (param == null) return '';
    let paramStr = '';
    let t = typeof (param);
    if (t === 'string' || t === 'number' || t === 'boolean') {
        paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
    } else {
        for (let i in param) {
            let k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
            paramStr += Model.urlEncode(param[i], k, encode);
        }
    }
    return paramStr;
};