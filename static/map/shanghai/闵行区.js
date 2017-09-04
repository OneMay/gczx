(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('闵行区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "310112",
            "properties": { "name": "闵行区", "cp": [121.375972, 31.111658], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@@EBAD@@A@E_GCB@A@AG@BGCABGEAHQPFRiFKNQ^DFSEMFAFBHFBCFDDACCFGA@@AG@@AC@@AD@BAD@@AB@BED@B@F@B@FBBNDFLCDBCBFB@DFG@CBBABDB@CDBAFCB@DABD@B@DB@BD@@B@BB@B@@FJ@DKLFB@DMDBBABBCFDB@@HB@BBABBDCBGNBDAB@@BPDBAF@@AB@@AB@@CDB@BF@DGB@@CD@FDADF@BADDDCBBDCAAC@BCFEAAB@FECABC@ADBBEB@@EGCABAB@@CAA@CAIABAAA@@ECDGD@BCBBD@BBHBFALABAFBD@@CGA@BC@BCEAA@A@@AEA@@AAA@G@DCG@CCBAAA@ADBDAEAC@ACE@BCC@BG@ACBBAEAAA@B@CECDEAEBAB@BDB@DBD@BBD@FDBGBBFCAABCBDBCEC@UBACA@AAA@ABB@CCCE@AA@ADCD@@BF@@FB@@BDB@CDB@ED@DFB@ABB@HDAADCBE@CCACC@CACIABA@@@BD@@AD@DICABCECFA@AMEO@@CC@ABA@@ABA@GCACBADCDA@@BAAAB@BICADE@@BEAABC@GHC@E@@FD@@BA@CFC@@BC@AASEKG@ACAIZBFGDYCIAKGKAU@OCGAKIMIMCOEeCWOBQHI@C@CBB\\HBPTBHJHABECM@ADBB@J@F@D@B@FBDAD@NBBBN@T@DBBADFCFDDGTDJFAFNB@DB@EFFBADD@@DFDDCDBADERCDAB@DELGAADMCEPHB@AB@@BHF@@GNQV@DEJCDC@ADD@@BCFABADA@@FCB@DCD@DABA@EJEF@BEJCLGJABCHAB@BABCFCB@BED@BA@@BABADGFAAA@@CAAKGCAKAUTC@CDDBADIHDFCF@@CDBDCHDBAHGDBDCDABCAABAFKACBDDABBF@@@BHBBDDBC@BDFFFBBDD@@AH@HB@EFC@ABC@FFCFBB@LCFBBAEGFEDABGJMJCL@XGNFH@PDBB@FHDBAAA@@D@D@@CB@DGA@BCCA@@CABACAJA@@C@AKEA@EBBB@ACC@B_CABEMENSFA@AB@@DRFD@@CHDBFFAH@dLTBjA"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [124327, 31940]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));