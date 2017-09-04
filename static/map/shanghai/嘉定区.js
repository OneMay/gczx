(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('嘉定区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "310114",
            "properties": { "name": "嘉定区", "cp": [121.250333, 31.383524], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@A@A@@AC@BCME@@AABCDAHBBE@@BED@@CAABAFAACJCBFPC@BJCDCDDNAAEI@C@@EAAFEHA@CR@BDB@FA@@DAKYCBACGHCCCE@@CEB@A@CAADGA@CCAADGB@DB@ADC@@ECBBDC@BGG@CCIC@EAAOCG@OEUHK@IDINAHCBEFFHABEAKDA@EAED@EAD@BED@FGAG@@BC@@AC@@DA@@CCBEA@DGAKFOB@CG@@BAA@CGCBAEA@CA@@DEA@FCFB@ABAAABAC@AAACFGEBCABCCABCCABCAB@@CC@ADGDEEC@EDCA@BA@BDA@ACEFECABC@@BB@BDC@AJIJCAADC@CGEB@@AB@BDF@JDD@DHBABD@B@@BCHE@@BC@@DCA@DC@@DDBADA@EDFBIPCFIIBCMAE@AJ@B@FAB@DAJDB@DDB@FD@@BCBBBB@@DABAB@DCBBBAHBB@FMCKB@HF@EHIACBE@BFCBBLAH@DD@@CD@D@BFNBCDGBAFTHBEBB@DB@@AJD@ANFABBBD@ABD@@ANDBDCD@BABA@ABLDCFDBF@ABC@ABDB@BFDADJDDCCDBDCDAAABBB@BC@ABA@ABC@@HA@C@@DJ@@DFB@BD@HB@AD@ABBDFA@HA@@CA@BDABOBMFAFB@ADBDAB\\LDAHBBADBHAPFJFAFBFFD@BJHRD@FHFNHDACCLADBH@DDFABHCB@BHJF@AJ@@FAFDB@AEFE@CBIHB@AC@@AA@DEHD@BD@ADB@BDB@AKD@@DBA@@@AD@DBBDBBDBD@@FDDBA@CDAHDBBHDADB@FA@BD@DCD@BFFCJD@DA@FBBDFADC@A@BFABEAABADKBAF@DEAAB@BA@AIEDA@ADCFB@AACE@BCA@BCB@BACCFCCABCH@DEDC@ACAFMBABBBAD@B@@EDI@EA@@CBCB@@AA@@IC@BAEC@AB@@CB@C@BEG@AB]IFEAA@EA@@CJADB@CB@BEEGDAHMH@BCA@BAEAFEDC@AFC@ACABALQGC@ECCE@@GH@@CFAFEDBDKE@@CCADCAABA@@DEBCBB@CC@@EHB@CA@@EI@GMEMICFIBBBABAAA"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [124249, 32046]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));