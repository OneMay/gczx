(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('武清区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "120114",
            "properties": { "name": "武清区", "cp": [117.057959, 39.376925], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@DKEC^QZS^QwVMAAB@CCI@@CB@H@JCBCFEDBCFF@D@H@FALIXMBIECM@ADE@OABEPA@CBCD@HEDIGEC@AC@KJ@DCH@@DFADEDAFBFALGBMFABKGAAA@CAALEJOFAFIFEB@JKDEJBDCCAEAFI@IDIDINECABGBQBCFC@AOKIHED@EKG@JDFOH@EIEDEFOC@BCEACAACAEI@AAHUXC@GD@AMDED@BEF@BBHAKADID@BGCIBEIIGCAFOAGAEF@BHBALQ@CFCNMDKAEDCFBBC@@CIAACBGG@CFEAKBGLMBIFKEBCG@ADKBeKBEAAI@AHEA@GE@CADKAABGG@CBEA@EGC@CM@AFGAAHME@AA@@CJBBKIEALGA@KDCCEEEMCBCSAOFCHOACDEASBsIBCPM[K@ADEMCBEJB@E]EABM@IVYEDHiG@ABMC@HOE@BILFDQCBAKWA@OEB@GAAC@@CQBABKBAMQOEBSEBEB@BMDEACEAFIGAACDCCAAGAMBEAAI@CF@AaACO@EBGHB@@GC@CRICE@CBAAAKBBD@B[EBIHAL@AGM@@AOAJ[IA@CAAHWM@AHJ@G^G@AF@DA@@FEBBFcJqAEDECFFABBRCHBFEDDNAHA@@`@@CHG@AT`D@AH@@PBBCJDBFABGB@@BBAB@BIFBBDJ@@FE@DHKD@JA@@FGCCDE@AZFDM\\JBCZCRKA@FGA@JHB@FBBXFBCFB@BB@CRJ@DJ@HCTF@ADB@AHEAIFKACH@CA@CLA@FBAFB@@DH@CFE@ADIEKA@FAABIB@BCG@@CC@BAOMCJGG[C@BABG\\AAAD@FL@@DJBADHB@BA@ABOCCDC@@BC@ADB@ADA@AFL@@A\\D@FFBBEB@CLB@ELB@@BAB@DBB@DEA@DD@AFCACDBHJDALF@AFFBBCPB@DB@ABBBBBD@@DDBFB@DHBCHDBLEJNMF@DKCIFCFQCBAA@@AEBAA@@EA@DOICDGD@BB@ALDA@BYLKA@BBGGA@AMHEABCC@GNLE@NC@@DAAAFEAAJKBBBF@CB@BF@AFH@@BN@ADZF@DD@@DF@DCFBEBF@@JB@EDCPA@@FI@@BF@@DDCCTH@C@TD@BB@G^FAGPECBGG@@BSAEDALG@AJA@AHC@ABC@@FEAAHB@@DB@BDF@AHHFA@DBABD@D@CBBBCBXH@DB@AFH@EHCACFCBCFA@CFDACL@BB@AFB@BCDBBA@BBBBCFBADE@B@@BCBBBD@ABE@ABAA@BLD@BHDBEGA@AD@CABEL@CJHBEHDBEJBBPDFCBEJDDBH@@FADHBMNIHFDEFFD@AJFADBBBAF@D@AHDBRDBD@RCBBJV@@BD@BDPBFEBBCDTHL@DAHBBCDBABTDCJJBGJNBAND@ADFBHE@DED@H@@@FH@X@BCBBBCB@DFZ@DMA@CFA@GMCADGAGBCNMAAIA@KXGCODOJMD@LJJC@C@KC@BCFAFDRDBAD@CD^F@DF@BFFA@FJB@DbEPEbElMTIZGAAFA@CJ@BE@@@FHA@EJA@CHBADBGPA@BG@AFBBVGHFL@BBABD@"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [119960, 40574]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));