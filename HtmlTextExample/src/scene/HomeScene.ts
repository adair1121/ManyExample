/**
 * 主页场景
 */
class HomeScene extends eui.Component{

	public euiLabel:eui.Label; 


	public constructor() {
		super();
		this.skinName = "HomeSceneSkin";
	}

	public childrenCreated(){
		var htmlText:HTMLText = new HTMLText();
		htmlText.setValue("123456789");
		htmlText.setPosition(this.euiLabel.x, this.euiLabel.y, this.euiLabel.width, this.euiLabel.height);
	}

}