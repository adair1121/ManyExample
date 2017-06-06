var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 地图管理类
 * @author chenkai
 * @since 2017/6/5
 */
var MapManager = (function () {
    function MapManager() {
    }
    /**
     * 创建地图
     * @tileId 瓦片地图
     * @doc    地图容器
     */
    MapManager.prototype.createMap = function (tileId, doc) {
        //TODO 
    };
    MapManager.getInstance = function () {
        if (this.instance == null) {
            this.instance = new MapManager();
        }
        return this.instance;
    };
    return MapManager;
}());
__reflect(MapManager.prototype, "MapManager");
