/**
 * 瓦片地图管理
 * @author chenkai
 * @since 2017/6/5
 */
class TileManager {
	public tileList = {};   //瓦片地图列表

	public constructor() {

	}	

	/**
	 * 创建瓦片地图
	 * @tileID 瓦片地图名
	 */
	public createTile(tileID:string){
		//获取json文件
		var json = RES.getRes(tileID + "_json");
		if(json == null){
			console.error("TiledManager >> json文件不存在");
			return;
		}
		//创建单张瓦片地图
		var tile:Tile = new Tile();
		tile.readData(json);
		//保存单张瓦片地图
		this.tileList[tileID] = tile;
	}

	/**
	 * 读取瓦片地图
	 * @tileID 瓦片地图名
	 */
	public getTile(tileID:string){
		var tile:Tile = this.tileList[tileID];
		if(tile == null){
			console.error("TiledManager >> " + tileID +  "不存在");
			return null;
		}
		return tile;
	}


	private static instance:TileManager;
	public static getInstance():TileManager{
		if(this.instance == null){
			this.instance = new TileManager();
		}
		return this.instance;
	}
}