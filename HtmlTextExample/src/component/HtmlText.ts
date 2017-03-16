/**
 * 显示在egret中的文本  
 * 其实就是<p>标签显示在canvas之上，用于长按复制文本中的内容。比如优惠码等。
 * @author gamedaybyday
 * @since  2017/3/15
 */
class HTMLText {
    /**p标签 */
    private p: HTMLParagraphElement;

    public constructor() {
        //在egret的div下创建<p>
        var gameDiv = document.getElementById("gameDiv");
        this.p = document.createElement("p");
        gameDiv.appendChild(this.p);

        //设置<p>属性
        this.p.style.border = "0px";
        this.p.style.backgroundColor = "transparent";
        this.p.style.position = "absolute";
        this.p.style.fontSize = "40px";
        this.p.style.display = "none";
        this.p.style.color = "#ffffff";
        this.p.style.textAlign = "center";
    }

    /**设置文本内容*/
    public setValue(value: string): void {
        this.p.style.display = "inline";
        this.p.innerHTML = value;
    }

    /**
     * 根据canvas中组件的位置和高宽，来设置<p>位置和高宽
     * @param xPos x坐标
     * @param yPos y坐标
     * @param width 宽度
     * @param height 高度
     */
    public setPosition(xPos:number, yPos:number, width:number, height:number) {
        //计算stage和浏览器的比例
        var wScale = document.body.clientWidth / App.StageUtils.stageWidth;
        var hScale = document.body.clientHeight / App.StageUtils.stageHeight;
        //根据比例设置<p>的位置和高宽
        this.p.style.left = xPos* wScale + "px";
        this.p.style.top = yPos * hScale   +  "px"; 
        this.p.style.width = width * wScale + "px";
        this.p.style.height = height * hScale + "px";
        this.p.style.display = "inline";
    }

    /**显示 */
    public show(){
        this.p && (this.p.style.display = "inline");
    }

    /**隐藏*/
    public hide() {
        this.p && (this.p.style.display = "none");
    }

}