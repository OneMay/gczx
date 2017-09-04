(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('丰都县', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500230",
            "properties": { "name": "丰都县", "cp": [107.73248, 29.866424], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@FCB@ACBCJILBDALOLI@CCIECGMFEHCAELK@AAAHUEGECQWA@GFEHKCCBQS@CTMfgT]BE@IBEDAFAPBFE@GCEA@KDIEHGFIDANBHCJADGHCDGHEBG@E[[JGTIVS\\DB@BHJBHHF@JDLBZCVGDEAUDCF@TLPDF@NSCIBCFCDDPC@IFC@AEAECAGCC@CVYRIHBFANMECAEECCGECCBECGKCGOSCBQLCAEE@IDKDCFBDAEMGKI[NEFG@EK[KEGAE@EACEBMECOECE@GDIHIFCFAJ@PFDANDDAFoGICCEAIBEA@ADE@CEEAGIEOC_Jc@EGGAWDOFILKFADBFABCAGEKAWPEB[@KCIBGCE@WHKLGEGBIAWBEAMIEIGECIIEKIEHADDX@JGXQ\\BHCFUA_NEBGAE@yNYAGAGGIECGB]DC@EAOCQGQBGAAKQCM@GDCAE@CDEHE@ECUCCKCAA@EDICCC@CBELCDA@GECBIDGRUEABHNaLSJABHHDAACHCFBBFGFG@CFERMBGJC@IEIKUOEAWRGDMT@FADIDEJEDFDZjFPFJ@BABE@eHOJGBWEEH@PCDEBSR[BEJKFEF@FFXALHHDJBVAFIFELGBADHBFHFBFLFCFBEBEPAbBHBF@^AFICQOGCI@IDKHAL@BBF@^CDMBCDFFLFDTRHBBADFLVRaFILMJHRELBLEHAFCDE@AACFEBMHMRBFBDHB@BBHENI@IEICCDE@ADEBABABBFKHDFAFIDG@CFCAAAKLAFEDCCIMASUGA@GHADBHBB@DEFCBAAMGA@@D@DEDMRML@BH@FFL@AHFHJFBD@P`dHLdlDDNFDBBLAFKHGDADADPLLHbNBJATBDJDNJHAJCBJAJF@BDKHMBCD@BHD@FADAFAVKL@DN@DDRLNBRFHFFF@DOVJAHBHL@HBDH@JGFAJDFFHHBPFLLF@FAJBDRDDDFPAFBJBBHBHGLAJG@ACEASICCCFKAEHENBHFPPT@DBDDFBDABCAAGGBC@AHBBADCBIAAGACBCHGA@GJE^DBBCFBHAB@DBBHDHADKFGF@FBDFHXBBTFL@FAJE@CCGBMCCIAEECOBGHEBGFCXABACABAD@FEPAFGLBF@FEFBDGDA@CFAXKXENKBAGMUOEKSMCIGQ@CDGHEZED@TVD@FCNA@EFBHAHIBIRGLFJNTTDBROBGBGHEBA@EVW\\eXCRKRIRAXKNDHH"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [110591, 30776]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));