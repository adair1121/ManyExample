var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 瓦片地图ID
 * @author chenkai
 * @since 2017/6/5
 *
 * Tiled导出的scene.json文件id就是scene
 */
var TileID = (function () {
    function TileID() {
    }
    return TileID;
}());
/**场景 */
TileID.scene = "scene";
__reflect(TileID.prototype, "TileID");
