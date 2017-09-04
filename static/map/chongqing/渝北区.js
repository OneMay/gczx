(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('渝北区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500112",
            "properties": { "name": "渝北区", "cp": [106.512851, 29.601451], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@@@EK@MCKDWCWDCDCVIZSBEAECODK@E@AJEBGTAVILCD@HLFBDC@M@AH@JHD@D@HENJLDBDBJ@@D@F@DCDBDADBBFJEDBL@BFFBAD@BLH@FBBBHH@BAFGHCDEDCHCF@DCCGFGCCIEAC@EBCDAL@FACW@GBGAOHKDALDAHDDLABAAEDAB@BB@LFBLEBCAGDCFAH@HGLA@DB@HBDDB@B@BADAJBFCAK@CDAJ@F@B@@GFMBALABFB@XEF[D@LBNIEGO[QWECSkKEAGDOCSOGCE@IBEJCDCAGACBADKACAM@ADA@CIQRMAEHCBACCG@CKLBD@BIFCBABOHDDHDA@CFA@EFGYcEOKIEGCIEcIUOOaIIEEEKWEIEIE@ECC@@JABOAGGIICEAACHIDCDIFCDMBSFCAKEC@GJFPCDEBM@ECACE@CBGJIBE@ECGI@ADCBAGIMGOAAA@EAAKBAFGIOFDH@JEDBHCDGQCBEHC@@CGY@EAABCIACKIHMFAABOGOECGBACC@G@CDECAGIDCFMDCABCG@IDGFGFI@CEAACFBBADGC@AMFCCA@KBMAABBD@BG@BCGAAB@DCBMCCGC@ABBBCBIDCACCCAG@CCBEGUKBCKEEC@ACEG@CBMAGAGMGI@BECAUH@DABC@CCCBE@KGACE@@ABA@AACED@BC@CEKGMH@@@FC@AAFICAMN@D@BGDELB@DCBFCNH@FDENGAAFBBGHCADCCA[BC@ACCADLAFCBKDGF@LBHJJNHDDFFFNAJWTEH@NDRJLNHXFH@D@LIHIVIFBDDFLETBHJJXHHFFH@JAHILGFGH@HLJBDDA@IBAHDJHLADCB@DB@DF@DB@DHBBFFEB@BBBDFDLEDCJCDBHCBBCHDFJHP@DBEPSTBBJABFCDF@DAJNF@@DABQBKPCB@EDG@CICMAADF@DTBHFHJAHB@FALDDBDXFH@HCD@@BADCJBDBBFBF@DABCFABBJPFCDBFFF`JHHDAJ@BFADB@HCH@FDBBBD@FGBDEL@FBFBBD@LCFD@HAJEDG@CBBNJBJH@HCDJDH@BD@DA@YEA@ADFLCX@LNnEL@XBNHDILAFFP@FEJKH@DH^HN@FAFEFcVOPJ@FBTXFJFTDT^D@AAGDC\\@"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [109265, 30841]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));