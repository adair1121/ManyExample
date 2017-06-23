/**
 * 鼠标拖拽物体移动
 * @author chenkai
 * @since  2017/6/23
 */
class Example3 extends egret.Sprite{
	private world:p2.World;
	private debugDraw: p2DebugDraw;


	public constructor() {
		super();

		//创建世界
		this.world = new p2.World();
		this.world.gravity = [0,10];
		this.world.sleepMode = p2.World.BODY_SLEEPING;

		//测试模块
		this.debugDraw = new p2DebugDraw(this.world);

		//创建矩形
		var rect = this.debugDraw.createRect(200,100);
		rect.position = [300,0];
		this.addChild(rect.displays[0]);

		//创建地板
		var plane = this.debugDraw.createPlane();
		this.addChild(plane.displays[0]);

		//监听
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	private onEnterFrame(){
		this.world.step(60/1000);
		this.debugDraw.drawDebug();
	}

	
}