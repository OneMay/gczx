(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('黔江区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500114",
            "properties": { "name": "黔江区", "cp": [108.782577, 29.527548], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@F@DAJABCAE@C@CDAPBNGPFHABAAEGCHIJADE@GEE@ADED@BABIAGGCQBAABCFCLCJBNMDGAQA]BGFGAGGI@W@AHBFEDGBECIAKGKLSLGBC@ECGGGCEDGH@RHJFLDH@HG@EOMCEDEPELAHELANKDG@KLGHC@AH@@FD@BKBABB@HDHGJ@BFBH@HCFEDGJ@D@DD@DABK@EFADHTAHGHMFMEKTFB@DJDT@N@JAJADE@EGQ@CFENADGBOGKAMMHKI@GDKHCNBLBLHF@BKFCFAH@DBAFCH@JBHHJHNDR@FNCBA@CCEIG@AAGDEHAFDJDFHD@DADSDCBKFGD@JDDDJFNCFC@CBAHADCDICMYcIEAABCZMFED@FLJAFDHTHKHI@AOMACLMH@DABCBCCAMGEI]SKOEKBENKBCBICKDI@UCGKGCEBAAAKACACKCUFEHK@CC@DS@AHAFKLCZBVIX@LCJENY@GJISWBKCCDAAGEGAEBSGIACDWAAE@CMKQDMBAEGGKGGAQGOBCVADEBIBCZMNEL@JCH@BG@AG@CAAKEEAGGICGGEGMICCKDISMaIEC[{UcKOMaIGBGCKFAI_AAGAQDABBDADECAB@DBH@BYHO@A@EJEDMBEACAACQCE@CBCBCCAABQCEGCiBACDM@GCAGBEAFEFABACEECKBGAECCEEAKDeVCFCNCFEDKBIEGAQFE@CA@EJOBCACKAAAHQBIAECAEAGJWJOESKKBF\\CDECEDELAJBJDF@BCBMAGEACHC@GEKEECEQLEF@FFFLFDDCFCJE@ACA@IHADE@AB@HBDABG@ECA@CJCHEFGDCDFDBLHBFFJXMTUZCFAJIZ@FBJFHDBLBHFFDDFBFELHRHH@DIT@FBFLLDHHFDHUbAFIFIBG@EJE@IHAH@FBNJRHHHXAHKRCFED@FBD@FGFBHFFDDBlDBVFPBFDP\\NVBFAFGFCNGHAF@FBFFF@DCHGFcRAAK@WDGAIDUDaPCAGECBADADBLEDAJDJJHDFFPBFJFLDH@^IBBAFFDNBBB@HBLGHCLKFCDBNATCDEBYT@LENEBGGABCDBHCFKDIBGACDFdLR@FBF@DBDH@DHBFAFCBBHFDVBHFFBFJ@F@B@DBB@FADCBUFMLPHBJAFEJCBGFABPFBFDBLMDFJFN@FBBB@DJBHDDFAHEHIFQDKDEHDNPVDLVbV\\FBJADFVNFHBHERBDRBBF@HDFPHFF@DNEHDRBDDBA"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [111231, 30584]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));