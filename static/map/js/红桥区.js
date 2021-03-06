(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('红桥区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "120106",
            "properties": { "name": "红桥区", "cp": [117.163301, 39.175066], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@JELBBGAIDIACEC@ARMTSKAc@@G[AABYDDDCFMECBIJC@CPHZ@LHNFFNHBCDAZBB@DEJE"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [119980, 40125]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));