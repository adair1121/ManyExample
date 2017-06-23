﻿
class p2DebugDraw{
    public world:p2.World;

    public constructor(world:p2.World){
        this.world = world;
    }

    /**创建方形 */
    public createRect(width:number, height:number){
        var sp:egret.Sprite = new egret.Sprite();
        sp.graphics.beginFill(0x990000,0.5);
        sp.graphics.lineStyle(1, 0xff0000,1);
        sp.graphics.drawRect(0,0,width, height);
        sp.anchorOffsetX = sp.width/2;
        sp.anchorOffsetY = sp.height/2;

        var rect:p2.Box = new p2.Box({width:width, height:height});
		var body = new p2.Body({mass:1});
		body.addShape(rect);
		this.world.addBody(body);
        body.displays = [sp];

        return body;
    }

    /**创建圆形 */
    public createCircle(radius:number){
        var sp:egret.Sprite = new egret.Sprite();
        sp.graphics.beginFill(0x990000,0.5);
        sp.graphics.lineStyle(1, 0xff0000,1);
        sp.graphics.drawCircle(0,0, radius);
        sp.graphics.moveTo(sp.x, sp.y);
        sp.graphics.lineTo(sp.x + 10, sp.y);

        var circle:p2.Circle = new p2.Circle({radius:100});
		var body = new p2.Body({mass:1});
		body.addShape(circle);
		this.world.addBody(body);
        body.displays = [sp];

        return body;
    }

    /**创建地形 */
    public createPlane(){
        var sp:egret.Sprite = new egret.Sprite();
        sp.graphics.beginFill(0x990000,0.5);
        sp.graphics.drawRect(0,0,4000, 10);
        sp.graphics.endFill();
        sp.anchorOffsetX = sp.width/2;
        sp.anchorOffsetY = sp.height/2;

        var plane:p2.Plane = new p2.Plane();
        var body = new p2.Body({position:[0, GameConst.stage.stageHeight]});
		body.addShape(plane);
        body.displays = [sp];
        body.angle = Math.PI;
        this.world.addBody(body);

        return body;
    }



    /**刷新物理世界 */
    public drawDebug(){
        this.world.step(60/1000);

        var len: number = this.world.bodies.length;
        for(var i: number = 0;i < len;i++) {
            var body: p2.Body = this.world.bodies[i];
            if(body.displays) {
                var display: egret.DisplayObject = body.displays[0];
                display.x = body.position[0];
                display.y = body.position[1];
                display.rotation = body.angle * 180 / Math.PI;
            }
        }
    }
   
}

