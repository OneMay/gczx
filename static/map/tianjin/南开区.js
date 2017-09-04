(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('南开区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "120104",
            "properties": { "name": "南开区", "cp": [117.164143, 39.120474], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@C@@DCBQ@AcAmBOFaDEHEgKID]ZQTINCJEdkhHDRNCB@FD@BAFDFHB@JIDANFDECCZCBA\\B@Hd@LB@CAU"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [120007, 40074]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));