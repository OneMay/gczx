(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('东城区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "110101",
            "properties": { "name": "东城区", "cp": [116.418757, 39.917544], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@DB@DP@NCHB@XD@AED@BKB@@CD@@AV@@EJ@@EAB@KB@AA@AP@CDJ@@CD@@EACB@FBD@BAACCCAG@QI@CB@A@@@BE@B_BWLBN@@CE@@AB@@KH@@AD@@AC@@CIB@AC@DWCKi@MAE@@CD@@@@EB@@AA@@CC@BGC@@AG@CBM@@AI@@HC@@BC@@DE@@DKCIBFB@HfBAvCB@PG@BHA@@BB@ATJ@@BF@AJC@AXCB@bMA@H"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [119181, 40920]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));