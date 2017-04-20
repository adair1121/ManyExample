/**
 * 主页场景
 * @author chenkai
 * @since 2017/4/20
 */
class HomeScene extends eui.Component{
	private shakeTool:ShakeTool;
	private label0:eui.Label;
	private label1:eui.Label;
	private label2:eui.Label;
	private label3:eui.Label;

	public constructor() {
		super();
		this.skinName = "HomeSceneSkin";
	}

	public childrenCreated(){
		this.shakeTool = new ShakeTool();
		this.shakeTool.addEventListener(egret.Event.CHANGE, this.onChange,this);
		this.shakeTool.start();	
	}

	private onChange(e:egret.Event){
		var data = e.data;

		//显示测试数据
		this.label0.text = "x:" + data.x;
		this.label1.text = "y:" + data.y;
		this.label2.text = "z:" + data.z;
		this.label3.text = "shakeCount:" + data.shakeCount;

		//用户大概晃动了手机2-3次
		if(data.shakeCount > 6){
			//egret.log("摇一摇完成");
			//this.shakeTool.stop();
		}
	}
}