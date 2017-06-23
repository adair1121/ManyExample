var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 鼠标拖拽物体移动
 * @author chenkai
 * @since  2017/6/23
 */
var Example3 = (function (_super) {
    __extends(Example3, _super);
    function Example3() {
        var _this = _super.call(this) || this;
        //创建世界
        _this.world = new p2.World();
        _this.world.gravity = [0, 10];
        _this.world.sleepMode = p2.World.BODY_SLEEPING;
        //测试模块
        _this.debugDraw = new p2DebugDraw(_this.world);
        //创建矩形
        var rect = _this.debugDraw.createRect(200, 100);
        rect.position = [300, 0];
        _this.addChild(rect.displays[0]);
        //创建地板
        var plane = _this.debugDraw.createPlane();
        _this.addChild(plane.displays[0]);
        //监听
        _this.addEventListener(egret.Event.ENTER_FRAME, _this.onEnterFrame, _this);
        return _this;
    }
    Example3.prototype.onEnterFrame = function () {
        this.world.step(60 / 1000);
        this.debugDraw.drawDebug();
    };
    return Example3;
}(egret.Sprite));
__reflect(Example3.prototype, "Example3");
//# sourceMappingURL=Example3.js.map