(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('通州区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "110112",
            "properties": { "name": "通州区", "cp": [116.658603, 39.902486], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@DDH@DJ@JJB@BLB@GH@@AD@@GJB@AD@BAH@ABFBFGD@ABNDJDDBBGHEHFBABCF@BGD@@CB@@BJBDAFBBAJ@@ADA@GDBCNDB@AHBBCHBNHFLBADDNEBGF@AFJCBFF@@AHA@FD@@BF@@DL@@AF@@CBB@GF@@CD@DGX@NCCEBCJK@KAIOUAKEGIGAMBCJGdKDCBWAO@QAQFQ@UDGPKNEF@@NH@@HHBBQF@BEP@FAJOHIFBJIFCL@BGB@DKRC@ELCD@@BJA@FJ@DANKBEDAJEJADBBB@DCHEFAHBFLB@BDBNGNQDEBMDSAKDCRKFCBCO@DIA@@AB@BCZCDCBGCBGADMGA@BE@GFI@YAIIJMOGDCCA@AEBCJCCICBGEADELB@E@@@CD@@EB@@AB@DCCAFEGA@ED@@CH@@IIBSEBAEA@AKAM@@CC@AECCDCD@BCA@BCAKB@BGCAFAB@HICADCKCDEB@ABDBBATD@AD@JMIADISCBACAADGACBK@SGDCAAEFOAACC@@AU@AIDA@QACQCCABGC@E@ABAABCIE@BECFEECJGNMGABC@EG@CAICAFGDKA@AGCQABCYABCBCA@DIEB@KB@@AI@@AAA@AI@C@@FEFALGB@DCBEDEFIFQFAAEBAA@CE@@AE@@DI@@DC@AFE@CD@DGFDDA@@HD@AHUBC@@CGHAHEJ@PDRANI@IB@BABM@AAGACBG@GAAAC@@DC@@FDDBFEFGA@FI@@EG@EDBNI@ALF@AFJ@@JIBE@MPANKA@DEFM@@CIAAEA@@DC@@CGA@CGAAGCCWA@DQAA@ACKA@JwBUGIDDDKDFFJCDFBNKD@RBBJCBBB@@FEAGB@BIBHJQB@JDPGHDFDCFIZAAJE@@DRBAFEAB@MAIRNFIJ@B@BCBDBCBJDCDHBCDADF@@DHB@BAPCFCBAHBBFB@DG@AFF@BDKF@BD@BAF@FCBBBHDDFCT@TAD@@DF@@EHCBETBGGPA@FNA@ABB@LF@AFBLLLE@AHT@\\VC@BBEHADC@ABJR@HJ@ARY@@JCDH@FBFLCBADD@@BC@ABDBAHD@@JE@DBAFB@ABTCKRBDHABLADH@@DEJDJLANGCNA`CRBFAB@DKAAF@BLBBFH@@FAHKLIEMHFHMHGB]BOH"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [119394, 40978]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));