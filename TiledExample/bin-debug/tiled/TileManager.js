var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 瓦片地图管理
 * @author chenkai
 * @since 2017/6/5
 */
var TileManager = (function () {
    function TileManager() {
        this.tileList = {}; //瓦片地图列表
    }
    /**
     * 创建瓦片地图
     * @tileID 瓦片地图名
     */
    TileManager.prototype.createTile = function (tileID) {
        //获取json文件
        var json = RES.getRes(tileID + "_json");
        if (json == null) {
            console.error("TiledManager >> json文件不存在");
            return;
        }
        //创建单张瓦片地图
        var tile = new Tile();
        tile.readData(json);
        //保存单张瓦片地图
        this.tileList[tileID] = tile;
    };
    /**
     * 读取瓦片地图
     * @tileID 瓦片地图名
     */
    TileManager.prototype.getTile = function (tileID) {
        var tile = this.tileList[tileID];
        if (tile == null) {
            console.error("TiledManager >> " + tileID + "不存在");
            return null;
        }
        return tile;
    };
    TileManager.getInstance = function () {
        if (this.instance == null) {
            this.instance = new TileManager();
        }
        return this.instance;
    };
    return TileManager;
}());
__reflect(TileManager.prototype, "TileManager");
