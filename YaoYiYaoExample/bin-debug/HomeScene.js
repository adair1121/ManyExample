var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 主页场景
 * @author chenkai
 * @since 2017/4/20
 */
var HomeScene = (function (_super) {
    __extends(HomeScene, _super);
    function HomeScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "HomeSceneSkin";
        return _this;
    }
    HomeScene.prototype.childrenCreated = function () {
        this.shakeTool = new ShakeTool();
        this.shakeTool.addEventListener(egret.Event.CHANGE, this.onChange, this);
        this.shakeTool.start();
    };
    HomeScene.prototype.onChange = function (e) {
        var data = e.data;
        //显示测试数据
        this.label0.text = "x:" + data.x;
        this.label1.text = "y:" + data.y;
        this.label2.text = "z:" + data.z;
        this.label3.text = "shakeCount:" + data.shakeCount;
        //用户大概晃动了手机2-3次
        if (data.shakeCount > 6) {
        }
    };
    return HomeScene;
}(eui.Component));
__reflect(HomeScene.prototype, "HomeScene");
