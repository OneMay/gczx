(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('江津区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500116",
            "properties": { "name": "江津区", "cp": [106.253156, 29.283387], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@BAJABCAC[OAC@ADCEGDCL@BCAEBAF@@AACEEOC@GFK@MNS@IDAFCXQFCFCFB@EHCBBBABCACB@@GFIH@BAIIFABCAAACLCLB@AECHABAECDA@CFE@CBACKFMHEBCD@FEDEDG@CG@ECCKECEASDECFMAKDC@CAGBIEICC@EBCAE@CEAGCBGCIBMHGFIJI@EFGJEVB@CGEEBA@CCBE@EAAK@GDAFCFEVELGDCAIBIFIJC@MS@EHIRODIFGBEBEZQJKBKACCAAAOHEIG@EEG@MBGFCNQFEACBABBLMFIJC@KCULEASDMJIDIAMMGADADIDABCGADGCAEAFGEEIFIIJG@CGKABC@GCADE@ADEHGJGDCBMMAAA@GLBLAJKH\\R@HK@LNBR@HAFIFBF@FADMFEFKVBT@FHH@FEDS@KFGFAHCFLTRDFFIHOHEF@JBPAJCF@LBFAFEJGF@JCFOL@FADKDEFE@CBC\\@XAHEDAJBHKJQBCTCHAREH@FDFJCHDOJAHDDLBLHDJBJDHONEL@HADOBEDIAAJSVAFBFABUDKJEPABE@CACFEBCACBCFaR@AAGGEKGM@EAEIGAI@MFOCKBMEOCM@KDKF@BDLAHA@@GC@SHEHCBOAGGAGKGG@MJCLBHDD@DABE@@BBBFBDABEB@B@BD@BCBCFEBEDDLNF@FCLEDMBICKGGBGDQVMTIFKBGDE@EAGCCEDCJ@LCBEAEIAIGCBCHCDE@KECCEOQMMMKAEGUAGGAICCMCACBELO@GCEGAGDIJKDKBCDAFDN@LEHIDIBeKGAQHGLUPIRAJFLPJdNJJBLATBhBFFJNHJBP@DBDD@LJLJJNFVHL@FF@DAPDVEDG@C@@JEDAF@H@DHFJ@@DEHBFRJPFBDAFFJDDJBDJLJFJHFBDADEB@DFBHAFBDHAHAHDTBDJDAFDJJHHFDJHDFNH@HFCHFBH@B@ZzPDLPDBAPHF@DCHFJCFDJBJAN@NHLCJBJHPPCNAJBF@NEROJK@ECGDCTMFCJJHBFAFUDCHEHDAFDFJ@JF@DJAEHBBH@DBFGDDHAJRP@NFJFhhTNNRJDJLPlRbJ\\DNBXDPNRLZDBFADAJBLCDGJC@GBCD@BHDBFEFDB@FIHDDGBOHBNBD@DCBIIECEBIBABHBBN@BA@_FA@AMEEKGACDCBCEE@CC@CDCAAIBOCAD@HCDGBE@CEAKBKAE@AKGAC@CFCBGCCUE@CAA@CCC@IEEDEFCRCBIBAJCDDDBHEAC@GCEAADKECECFSECCGLMNWFKFIHATA^JZJTRNHJDXBXFHFHJBJMb@JBHJHBTBFDD`FpVHEB@TDJDHLDBPCHFF@DABAGEHKECA[BC@KDEAMHEHUF@FAGODGFETEHGH@@EEO@CNA@GBEDAAKHADCGS@EBECEBAF@BC@ADIJ@TEBAAEDEFAJBBACYGQ@EJKLKFIBKFEF@@CGGIAECAIBGVYJCL@JMCOBEJCBCEYAGNW@CEG@EDCHUDEGGHoLWJCL@DAB@ECEEUGI@CDAJKRCBACGBMMCBCGCAAACI@@ABGAC@@FC@@DBBHFGFAFJJ@BKPABADe@ADBHADIJCNGHKBGDCJIJ@DFBBBWNCAAE@CDGISFUFO@IAEMKCICCFGCCAGCEKFUBIDGLGH@JGJBBJ@ZBFD@BUDEFEBIDC@@CDQGBAFGBKFKBICUOEEFEMKIDMBGA@AFEJEBA@GEGJIBK@MDCJGFM@ECOGQFEJGBCK_PaAIBODSAQHK@UBADANBFCPAVMAMHCDE@KDMDEDABAFG"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [109017, 29523]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));