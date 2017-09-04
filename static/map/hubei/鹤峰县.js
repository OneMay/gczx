(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('鹤峰县', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "422828",
            "properties": { "name": "鹤峰县", "cp": [110.033662, 29.890171], "childNum": 1 },
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@@AAA@A@C@@@A@A@@EA@@AA@@A@A@@A@@AA@@A@EACACAA@AAA@CACAAAA@CAEA@AA@A@AACAAACAA@AAAAA@AAA@A@@@A@@@ABA@A@C@CBA@ABA@CBCDA@@BABCF@B@@@B@@@DBB@BBB@B@BABABABABABCDCBAB@BAB@B@@@B@B@@@B@@C@CBIAKAOCIEKAIBC@A@CB@@EDEDCF@DAH@H@D@PCP@@CFEFGHEFEBKFIHGDGJIHIHA@GDMHGBEDEFCBEDKBSHGBCBG@GBE@GAI@IAG@G@A@CBE@EHCFEFGFADEFGF@@EDGFEDGDABCBKFIDK@MAKAMAIAG@MCQACAMCMCICQCICKCMAMBIAGDG@GBE@GCGAGAE@EDGDQBI@I@A@ADA@@@@@@@@BB@@@@@@@@@@@@BA@@B@@@BA@@@@@@@A@@@AAAA@@AA@@AA@@A@@@@AA@@@@BA@@@@@@@A@@@A@@@@@AB@@@@A@@A@@A@AA@@A@@AAA@@@@AAC@CAMEMEI@ABCFEDCBEAECECE@EBC@ABCBCDEBEDEBMCE@K@MCI@KAG@K@K@OCIAIAIAMCCFIFGLKJ@HDFFJFLDJDJALANALEPGHINCHCHCHAJBHBHDHDF@FBF@DAL@D@DBFDDLD@BHBJFHDHDJHJHRNLJFFFHDHDF@BBH@D@H@H@BBDNHNHDBDFBFEBCDKFCBFFHBN@TBJBHHHDFDDFBBBBBBBDABABADA@@@EDABEAQQIEUEKBCBFDVLLLLJ@P@DAFBLDHJFPHHLDJHHFFHBHBHDHFJDLHJDNDFALGJEDAFDFFFFBFBHDHCJENEFDFNDTHTDDABAJBDDDFHBDDJHDDJBNBNAHBTFLFFDRHPJPJJDJDHBJFHBJFPH@@JDJFD@D@B@FBB@F@B@B@BBB@B@DBB@BBBBB@BBBBDDFBB@B@B@D@@@FBD@BBFBBDB@@DBB@@@BBBFBB@B@@B@@BB@@@BBBDB@@HDB@@F@DBDBBBB@BBB@BBBBBBBDBDD@@BB@BBB@@BBBDBB@BBB@D@BAD@BF@B@D@B@DABAD@D@PDFBDBD@B@@@DBB@B@D@@BB@DDDBD@HBH@DBB@D@H@FAB@DCBCDEDGBCDABAD@DAF@FAD@FB@@BAH@BALG@AHA@@B@DADGDGBCACAAEAEAC@MAIC@@ECAA@AAAAIBEDCDCJCNCXIBM@I@GBCDEDAPELAJEREFCFADCFEBEEGEGGCECMIKIEEACLCVILADGBGAGEEUMIEGKBK@IBABC@ABAAEEGEEAG@I@G@OGIGECE@ACG@EBGHKFM@G@@CGEGEGEG@@BGBAFEPG`KHAH@DADBBBDBFFNNLDTDLCLCR@N@RDVAB@JBHDFFBD@@@@BFFHFNHLLNJJLJLJB@BBBBB@NDBBDBBBBBBDFBFBB@HFDEDCDCHCFCLEJCFCDAH@JBH@H@JAFAFADC@@@ABCDCDADCBC@AAAACEEAAEAIAEAEACACCEEAAECGCGECACCAC@C@C@EACAACACC@AAC@E@EBG@G@E@GCCAACCCCEC@C@A@@BAD@D@D@@@F@BADADABCBADAB@B@@@DBBBDBF@DADCDAFCDCBA@@BC@C@E@CACACACAA@CDCBCDCB@@@BCDCBCBCBA@E@ABEBG@EBCBABAD@D@D@F@H@J@HAD@@CBABCBEBCB@DADBB@FDB@DBD@DBFBB@BA@A@@@ABAB@BB@@B@B@B@B@@A@A@ABAB@DADADADCDCBEDCDGBEBEDEBCBC@I@CDCBCDGDCBABCDEBEBCBC@A@AAC@CCCCEACCECACC@@C@C@C@CACCCCEECC@@OEIEKEIGAAKEECGEEEIIGGECICMEEAEAGEGECAGEMCECA@C@GAG@ABE@CDABIDKHCBGBEDGBOFCD@@ABABCBA@A@CCCA@CAA@CACAACCCECA@ACAAE@AAEBGAC@G@CAEBA@E@CAA@AAAA@AAA@A@CAA@C@AA@@A@A@A@A@A@A@A@A@@@A@C@C@A@C@A@A@A@A@A@A@AA@@"],
                "encodeOffsets": [
                    [113065, 30373]
                ]
            }
        }],
        "UTF8Encoding": true
    });
}));