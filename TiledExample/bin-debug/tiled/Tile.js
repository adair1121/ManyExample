var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 单张瓦片地图
 * @author chenkai
 * @since 2017/6/5
 */
var Tile = (function () {
    function Tile() {
    }
    /**
     * 读取Tiled软件导出的json数据
     */
    Tile.prototype.readData = function (json) {
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
    };
    return Tile;
}());
__reflect(Tile.prototype, "Tile");
