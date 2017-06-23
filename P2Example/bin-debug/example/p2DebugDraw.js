var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var p2DebugDraw = (function () {
    function p2DebugDraw(world) {
        this.world = world;
    }
    /**创建方形 */
    p2DebugDraw.prototype.createRect = function (width, height) {
        var sp = new egret.Sprite();
        sp.graphics.beginFill(0x990000, 0.5);
        sp.graphics.lineStyle(1, 0xff0000, 1);
        sp.graphics.drawRect(0, 0, width, height);
        sp.anchorOffsetX = sp.width / 2;
        sp.anchorOffsetY = sp.height / 2;
        var rect = new p2.Box({ width: width, height: height });
        var body = new p2.Body({ mass: 1 });
        body.addShape(rect);
        this.world.addBody(body);
        body.displays = [sp];
        return body;
    };
    /**创建圆形 */
    p2DebugDraw.prototype.createCircle = function (radius) {
        var sp = new egret.Sprite();
        sp.graphics.beginFill(0x990000, 0.5);
        sp.graphics.lineStyle(1, 0xff0000, 1);
        sp.graphics.drawCircle(0, 0, radius);
        sp.graphics.moveTo(sp.x, sp.y);
        sp.graphics.lineTo(sp.x + 10, sp.y);
        var circle = new p2.Circle({ radius: 100 });
        var body = new p2.Body({ mass: 1 });
        body.addShape(circle);
        this.world.addBody(body);
        body.displays = [sp];
        return body;
    };
    /**创建地形 */
    p2DebugDraw.prototype.createPlane = function () {
        var sp = new egret.Sprite();
        sp.graphics.beginFill(0x990000, 0.5);
        sp.graphics.drawRect(0, 0, 4000, 10);
        sp.graphics.endFill();
        sp.anchorOffsetX = sp.width / 2;
        sp.anchorOffsetY = sp.height / 2;
        var plane = new p2.Plane();
        var body = new p2.Body({ position: [0, GameConst.stage.stageHeight] });
        body.addShape(plane);
        body.displays = [sp];
        body.angle = Math.PI;
        this.world.addBody(body);
        return body;
    };
    /**刷新物理世界 */
    p2DebugDraw.prototype.drawDebug = function () {
        this.world.step(60 / 1000);
        var len = this.world.bodies.length;
        for (var i = 0; i < len; i++) {
            var body = this.world.bodies[i];
            if (body.displays) {
                var display = body.displays[0];
                display.x = body.position[0];
                display.y = body.position[1];
                display.rotation = body.angle * 180 / Math.PI;
            }
        }
    };
    return p2DebugDraw;
}());
__reflect(p2DebugDraw.prototype, "p2DebugDraw");
//# sourceMappingURL=p2DebugDraw.js.map