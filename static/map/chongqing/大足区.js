(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('大足区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500111",
            "properties": { "name": "大足区", "cp": [105.715319, 29.700498], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@DBHNLJABCBIIE@G@EF@DFDFFBD@HFDBD@FAFABACC@AFBDDNNL@DELCDG@IF@DD@@BADSTCA@CIAMKOCAE@ECCGBBFABK@WLE@@DJDCBAJA@C@CCBGCBABEFAH@BBD@BCDDJ@DKHDHFLB@FEDBBDADBDABECSCECCFAJCFCDACACDGE@@CDCAKDCJABGCAIDA@DIECAEEJI@BJBFABEDE@EFADBN@DCDIFMBMEKAABDHDFADEFCBEAACI@BPBBHABBJ^@BGLADDFDBNF@DEF@DBHJ@@BEDBD@BGHGBDFAFABEBAFFD@DC@MCEFGBEAM@GAEAEKIG@CBAACECEAE@CDCLBDBJADEDEBAEI@BFABGEA@@BC@@EGAA@AFEHGTINBdHTCDKDDJQF@HGLEDAFDJDF@DCDMHENBJ@FABC@EBENBJHLFFJFNBDCFKFE\\GNCBCDGJIHBNB@FKHELNJF@DJRJ@BCBKDBNLJJMHGPEBBBHADADCF@DDDCBFDRDANDLIHAF@DDH^^AFE@EFF\\BH@JBDCHBBFBBDBBBCNENCJHBDADEFDDDADBCH@FFBBFFFDFFA@A@CHCJAVEFHPBHFFABCDAHHH@BFADBBPHHADAL@DKHEFAFDD@BCHCFB@DDBFFHD@BAF@HHDF@JDD@BCHC@WAEC@ABIEGOBAD@JIBIDA@CACE@GGIEEKKOCIDCD@JC@DJ@BDTJJBHHDCD@BB\\MD@PRDABB@FDH@FFEBEAEDCB@BCHA@GF@NG@EDCDB@DJC@ECMBKDAF@RHBABEDCCIBCNEjAPBTAHFDHHJCDBFVBBBBHHLKJJJ@HADDDFAFBFIHEIIDIRBFDFAHBHCBEJBHGHCBAFCFHJALFRCF@HFFDF@FAF@DEFBBA@AFAACD@DC@IFCCWFABACG@ALCL@DBBHFEFBDDLCBAEGDCBEEKVOKKKOKWOSKSAGKYAAC@OLGDA@EOSeecC@C@CAKQCKBAEAW]AAEACGGCIIG@GICAEASSGOKEGGAE@CHIACECGAI@KFE@GEECOEKIQ[AIGQ@GEKCUCI@CIGBKCG@GCGCSECBA@CCICCG@IKGAGKC@EMKC@MFKK_ECC@CEIAAECDEEABCBBBE@@FEABFE@BBIFCDKB"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [108267, 30091]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));