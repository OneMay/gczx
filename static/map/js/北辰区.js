(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('北辰区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "120113",
            "properties": { "name": "北辰区", "cp": [117.13482, 39.225555], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@PQFFJICABACCDAKGJGLHRMVMMERKHH`WBFFCRFJHHIBOK_MC@QLCDIBAMA@COCGCDEkFa@]DMAA@AFsNQHOGBERDAABEFBFcMGeG[IQGGCmgABAAKLEAEF[MILECKA@BA@CABAWCCCIFEFYACBADICIIGM@KMDgDO@UCWIDECABKM@AJEB_KS@MEAH@DARG@BMGA@GBEF@@C[GEHFBCLEAGTG@MCAFgGA@@DGAALIFE@@CB@@ACKIDIGQJ@DHD@@GAAH@FDPbB@BDEJ@BBAFBNBHDBCDBDHBEJFBBDCFANA@AFTFFARPBNLABARA@DD@BB@HFA@PXBBLDACRKEAJF@GPD@AN@BjHCGZFJUN@BA^F@FIAAFNDCF@B\\LONADtJTAFBDCPBDGPETBADNDFFDFCD@LHBBKJFALIA@DB@@BNFBGHBBEN@@DHD@FFBDAH@AHBBCLDBF@@HFBBGJ@BBAFfLLABCH@ADLFJENAHKLAFBDEH@AHBDJB@DB@B@AADEFCLBNCDMDER@BKGA@ADEZDBELH"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [120140, 40274]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));