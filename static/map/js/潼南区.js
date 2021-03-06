(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('潼南区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500152",
            "properties": { "name": "潼南区", "cp": [105.841818, 30.189554], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@BGPUDKAKMGAA@EBCDABAEKACBENIUQCIGBGDBKBEHSDAP@BAGKBEVCPFDCPEHK@ECGIEUESQCG@MEG\\CBEHIJB@SHGLELM@CAAGACCMOKGEGIEC@GBIFIFAFABA@ECAC@CDEDGPKDEHE@EAEMAGG@EFKFGPG@CJ@DADGIOBCJKACCAEIKCEEBCHI@AKIEI@IJM@CIQIB@FEF@JABIFGBIABIKG@KAAE@UDCJLFBDCFKFCDAP@@KFGBAA@ACBED@BKACCCBEGBCEACGEEDC@AHABCCKOC@CBCNI@CEG@IE@EDACCACFC@ADE@@@CECBACEBEA@IEQBAJG@AGIIUBGBAD@RDPAHETGFGHAPC@CCCKSAOJCAG@GH@JFD@FABC@IN@FCEMDCFBFIDIIICCIB@ADEJCNWJEDEGOAMGCG@IEMUFADGGGECKAG@GDAJ@HBDCDGBG@@BDBABG@WLGBCGE@ADDNCBABIMK@EHCDA@MCCBE@OSBKCCE@MHG@AQI]@EU[AG@ICEA@IBSIEGCE@COIDECIBCACEBEGCAEGC@[NAAC@CDGGIASIACI@@CIDC@CDDJLPFLJFHHF@BD@DCBAJIJC@ABHPJFBAB@DD@ZGDADF@DDABEDADBDBDAFBJADDDGHDBD@BBDDKFGAQ@ABC@ABCFEDADBDF@DDALE@BDUVBDHFDADBFB@HDBFD@DCBBDADHHADJBHJDBCTABCLCBABBRHFBF@HF@@DAA@BBFJ@BD@BDADFDADBAAB@D@@DBDADCFJ@BB@HDDEDBDOJFFBFADIAQMG@CDAJAHGJC@MKKAA@GFAJA@GGIDGE@JGTA@EBEDBRELEBCAKGGAIFEJEBKCEBAF@TCNJJ@FGBIAGDBBEDC@ECE@IHKBCBIAG@MLINEDAHBBCDAAMB@DGDBDDBPBBBDFTFDHDPADE@EFGAEDC@EEEDI@EGEACEICAIACA@QF@BFF@FABAECACBECIDBFABDBANDFJLHPB@@CH@TJJAJEBIDAJAFBFDJLJDPIJALFHJD@H@NCF@RDDHBJAPDHDDF@NCD@BDDDCFMPA@ICKAKDMLAFGHKD@JFDCDBJCHOB@FTLBB@NBHFDH@FG\\BB@JIJ@DADEF@DBDBBCDQBCDAHBN@LDB@FBNDFCDBDAD@BADDFCACBAF@DB@CHFAFCJ@BDDD@JIDAF@@DEDCFJNBDADG@EBGCC@EDAH@BECE@ADBBDDAB@BCN@BFB@BADGBCB@BFDHAF@BJABGFCHFNHBFAFADC@CHAHHJCF@AFEHGN@FHDXDJFDJGP@JBDLFVXCHOH@DLFE@@BDDBHADDBFJL@NAFDLLHPAHCDABBDFDBBLC`RDBLCLM@CDCACBIFABCRI@AEAACEM@EFCHEH@FDAH@DVNAFBBHGPDCEECAC@@L@@AACCC@GDGDCDAFBDFHDBDCDQDBHJBDGFABD@JDBFANBBCBEB@BJDBDICIE@GCAEHKDBDFJBNJB@LIBKTENE@AECBEBAF@ZDXJDAB@AG@CPB"],
                    ["@@HMCECBCJDH"],
                    ["@@CCB@DBBABGEBG@GBBJNA"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [108522, 31103]
                    ],
                    [
                        [108091, 30921]
                    ],
                    [
                        [108115, 30853]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));