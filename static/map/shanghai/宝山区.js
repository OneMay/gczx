(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('宝山区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "310113",
            "properties": { "name": "宝山区", "cp": [121.489934, 31.398896], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@@JE@@BOAECMCAFS@ABC@ACA@FME@@C@@@GA@@EI@BIMA@CCA@CBAH@AMDI@OBACEEB@ABACCGB@FIB@FI@BHC@AAEDA@JRIABBCB@B@ABBCB@BIBDFMBAAGA@AC@BAACIB@@C@@AA@@BE@AAKD@BIBBBHRC@ICCCCDGABEA@@AC@@BI@@BAA@GCBAAA@ABBBCDAAEJFDB@P\\J@@FB@@DGA@FD@@DAAADCF@@ABBBCDDB@DF@CLCAEFEB@DG@@HD@DB@BB@@FHD@BADA@CFCFABDB@BED@BCDEFFBABB@ADG@GNCBFHAFA@@DCAIB@DB@@FBBEF^JBAH@AFD@A@@DA@@BFDABD@@JB@@BA@AD@DB@@FCJ@FA@C@ABAAABENDB@BCDCFG@ADDBEDDDABA@ADB@ADF@BD@BEACD@BCBJF@BABA@BBCFE@ABCLABBBAFEB@A@BCDEBADD@CBBBBAADBBD@B@BBADFADDDA@ED@ACB@FF@DFBBCB@@AC@@GF@B@AFD@@DB@@AD@@BD@\\PfK^I|]BAEGBE\\Q`W|i\\UdSXUBD@DFAEG\\UQQQY@QJONIVIEGEBCGYLW_HEBCCC@YUBAFKAUD"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [124384, 32068]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));