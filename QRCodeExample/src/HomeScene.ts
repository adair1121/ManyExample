/**
 * 主页场景
 * @author chenkai
 * @since 2017/4/17
 */
class HomeScene extends eui.Component{
	private euiCode:eui.Image;  //exml二维码图片
	private htmlCode:QRCode;    //html二维码图片

	public constructor() {
		super();
		this.skinName = "HomeSceneSkin";
	}

	public childrenCreated(){
		//this.htmlCode = new QRCode("resource/assets/test.png");
		this.htmlCode = new QRCode("resource/assets/code.jpg");
		this.htmlCode.setPosition(this.euiCode.x, this.euiCode.y, this.euiCode.width, this.euiCode.height);
		this.htmlCode.showHtmlCode();
	}
}