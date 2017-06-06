/**
 * 地图管理类
 * @author chenkai
 * @since 2017/6/5
 */
class MapManager {
	public constructor() {
		
	}

	/**
	 * 创建地图
	 * @tileId 瓦片地图
	 * @doc    地图容器
	 */
	public createMap(tileId:string, doc:egret.DisplayObjectContainer){
		//TODO 
	}




	private static instance:MapManager;
	public static getInstance():MapManager{
		if(this.instance == null){
			this.instance = new MapManager();
		}
		return this.instance;
	}
}