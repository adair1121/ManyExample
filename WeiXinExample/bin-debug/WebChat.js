var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 网页授权
 * @author chenkai
 * @date 2017/3/2
 *
 */
var WebChat = (function () {
    /*
     * 网页授权页面回调地址 http://120.24.188.118/Example/weixin/index.php
     https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4a14bf95e973b059&redirect_uri=http://120.24.188.118/Example/weixin/index.php&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect
     */
    function WebChat() {
        //获取code
        egret.log("code:", egret.getOption('code'));
        egret.log("state:", egret.getOption('state'));
        //用code换取access_token
        return;
        var url = "https://api.weixin.qq.com/sns/oauth2/access_token";
        url += "?appid=wx4a14bf95e973b059";
        url += "&secret=af99ce68694f39e2712e7cf7c22fe224";
        url += "&code=" + egret.getOption('code');
        url += "&grant_type=authorization_code";
        Http.getInstance().initServerUrl(url);
        Http.getInstance().send(null, this.getAccessToken, this);
    }
    //code换取access_token
    WebChat.prototype.getAccessToken = function (e) {
        var request = e.currentTarget;
        egret.log("get data : ", request.response);
    };
    return WebChat;
}());
__reflect(WebChat.prototype, "WebChat");
