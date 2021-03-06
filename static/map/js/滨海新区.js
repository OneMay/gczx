(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('滨海新区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "120116",
            "properties": { "name": "滨海新区", "cp": [117.654173, 39.032846], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@@LCFBLCBDJC@CEIFHTCBJRF@FXPC@@lAAVLZU@@HADBH@Xa@ANe@[BL|J\\FBpQLFLBBB@LFLFBPD@RDLpMpGBPNREHE@@dVF@BJB@BD@@DFDLBDGHGDA^c\\@@cFD@@jEBJZFLhrePFBEJGAENE@IVC@@RBLV@DPT@zJLHPFVDNECC@SACjQJBJCACIDMQhQD@tCD]LBHDBH@GLHNB@DQHBAFDHE@@DEBDFFAD@@BF@BBAB@BNFBEHCXDT@JGAGVEBEDCDB@BF@@DRC@BZ@PAP@BCFAJ@@B@BTC@DB@JEAAB@FB@ACAB@@CC@BCHOF@BADAAADCHBH@HECEB@BCHBDBBCFDBAACBAD@BBPGJF@@ABDB@BD@ABBDDAFCBC@CB@CCAKNECG@EF@@EzQBiAC@Ey@BUI@±]GaQaý¥Y_YeK]EaDqPmHcD{DKQBMMaKEUC_BOASY_YAYDXSIaa¹JgCeOQ[@RUbK¶MPGJMA¯CUSQÓgOKMWEa³OqIGFG@EBEACIGCFK]EE@@DFD@B@BG@BHCFC@@EEAIHEACBC@BFCBQCaDFKACEBECADE@SSKMIKHQKHEJ@[UGCoO@d[CFSMIAIE@AH[A@DOA@AQKOEEBARGNI@G@BSgE@AOACJSKMVC@IXF@hJAFmKCHB@PVVFAHHB@JC@CH@BABD@ABMFC@@BSB@BAAAHG@JL@BBBWABHHB@N@BMBMAEEESMA@EA@@CCE@FC@AEQ@@GCAA@AJC@BEK@AAABSGA@@FEA@BCBC@@EC@@DK@LHBD@HCDBFCBABB@F@@FB@@DFJ@HB@BLADK@HBDBCBG@@DH@@F@DCJIB@JK@AJFBCLBHH@DCBJFF@PATBHB@ABDTbB@DaCAAE@@CAACAOF@HADE@@BICAFBHEBhTBPDBJCFCªvEFeVTROJVT`OFH®_\\OF@DBJHKDBDABADCB¶n`|yHVPTvbDM^JDERNLDB@TMJGHAHBCTAD@HDBARLZDBFPCDIAGBUVOFGB"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [120348, 39943]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));