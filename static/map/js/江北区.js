(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('江北区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500105",
            "properties": { "name": "江北区", "cp": [106.532844, 29.575352], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@iIKIIEIQmCCG@IDOPSLI@MEE@OBIFCJ@HCFCBoLYAE@GGMaEEMEoMOIGIGEOCG@KDCDUjGJABGAEEOCGDIHGLAJANCFCDCBIDG@QAWKECIKEMAKBWDIJECCGEKEG@I@KHGBYAGGEIEEIEI@MBMDODUCK@MNchQFEDAFBDNPFRDBBDF@ZADBCDDBHGAABEHBFMECG@DMAEEDBCDIHA@A@CNMDBEJBBD@@E@@NGLHDFD@@AFCBD@BAB@BF@BDNHHADDD@BA@CNCFCD@BBAFN@JHBHBHAN@DFHBDD@FFDLLAHVAFDDH@DBDDDBJCDAAABAD@DHNDDA@CBAHBADH@@AACBANBLAB@DDNE@BHDBCAADEBBDFJ@HEHEJCH@ADDBNCDEJCBHFDDCH@D@BDHAFDHPAPBBNEHGFLJBADBB@FHZ@DD@FGDAFPBBDEAEFC@ICCBCDAJCHJBELABB@FBBPBNHHJABCD@BHJHDNAHIHAJHN@FADCEOHID@LFDBTENADCJEDCJCDGBBDFJJHHPBBAAGDCHFF@"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [109460, 30369]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));