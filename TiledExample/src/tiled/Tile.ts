/**
 * 单张瓦片地图
 * @author chenkai
 * @since 2017/6/5
 */
class Tile {
	/**原始Json数据 */
	public json;

	/**地图宽 10 含10个瓦片 */
	public mapWidth:number;      
	/**地图高  */
	public mapHeight:number;      
	/**地图名 */
	public mapName:string;
	/**地图数据 */
	public data = [];

	/**瓦片高 70 瓦片高70像素 */
	public tileHeight:number;    
	/**瓦片宽*/ 
	public tileWidth:number;       

	/**图片名scene.png */
	public image:string; 
	/**图片宽 */
	public imageWidth:number;    
	/**图片高 */ 
	public imageHeight:number; 
	/**边距 */   
	public margin:number;
	/**间距 */
	public spacing:number;
	
	


	public constructor() {

	}

	/**
	 * 读取Tiled软件导出的json数据
	 */
	public readData(json){
		this.json = json;

		this.mapWidth = json.width;
		this.mapHeight = json.height;
		this.mapName = json.tilesets.name;

		this.tileHeight = json.tilesets.tileheight;
		this.tileWidth = json.tilesets.tilewidth;

		this.image = json.tilesets.image;
		this.imageWidth = json.tilesets.imageheight;
		this.imageHeight = json.tilesets.imagewidth;
		this.margin = json.tilesets.margin;
		this.spacing = json.tilesets.spacing;
	}
}