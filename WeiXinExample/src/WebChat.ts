/**
 * 网页授权
 * @author chenkai
 * @date 2017/3/2 
 * 
 * 微信网页授权测试
 * 1. 由于拿到code后访问不了https://api.weixin.qq.com/sns/oauth2/access_token
 *    https啊... - -
 */
class WebChat {
    /*
     * 网页授权页面回调地址 http://120.24.188.118/Example/weixin/index.php
     https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4a14bf95e973b059&redirect_uri=http://120.24.188.118/Example/weixin/index.php&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect
     */ 
	public constructor() {
    	  //获取code
        var code = egret.getOption('code');
        var state = egret.getOption('state');
    	  egret.log("code:", code);
    	  egret.log("state:", state);
    	  
    	  
    	  window["getToken"](code);
    	  
    	  
    	  //用code换取access_token
//          var url: string = "https://api.weixin.qq.com/sns/oauth2/access_token";
//          url += "?appid=wx4a14bf95e973b059";
//          url += "&secret=af99ce68694f39e2712e7cf7c22fe224";
//          //url += "&code=" + egret.getOption('code');
//          url += "&code=" + "021OSiPy0Fv7Ah13zkPy0S3FPy0OSiPu";
//          url += "&grant_type=authorization_code";
//          egret.log("request url:", url);
//          Http.getInstance().initServerUrl(url);
//          Http.getInstance().send(null,this.getAccessToken, this);
	}
	
	//code换取access_token
    private getAccessToken(response){
        egret.log("get data : ", response);
	}
	
}
