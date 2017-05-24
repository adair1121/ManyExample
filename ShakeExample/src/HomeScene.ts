/**
 * 主页场景
 * @author chenkai
 * @since 2017/5/24
 */
class HomeScene extends eui.Component{
	public constructor() {
		super();
		this.skinName = "HomeSceneSkin";
	}

	public childrenCreated(){
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
	}

	private onTouchTap(){
		ShakeTool.getInstance().shakeObj(this,1,20,20);
	}
}