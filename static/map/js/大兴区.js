(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('大兴区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "110115",
            "properties": { "name": "大兴区", "cp": [116.338033, 39.728908], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@BAH@@CEAAABGDADEBO@AGA@CE@BCDCGADCICDACADA@A@AJIMEJQNBA@FBBEQA@CF@BIYBEJCDCEHGCO@IRAGIJA@AHAFB@EA@AAIDAA@QLCAMCEIDEELCCCJCVHxA@ILBBDB@RB@CXBDDBHHB@DHB@DD@@CB@BFJB@DN@FE@CLBBMNOF@JA@II@BEE@BKJ@AMFCH@@FJ@@EHBFEAECC@ED@@CD@BBHBH@DAHBBBN@BA@AJAJ@BMCQ@QFGBGHG@DD@VABGC@@GB@CCHE@CEA@CK@ACICCDEA@FIADMB@BEC@@@HEF@HCBEB@@BDAB@@CFA@@E@HA@AD@BEAFDE@F@@BICAAFA@BEAB@AEABAA@CBEA@AGA@@K@EBADA@CHC@ENIG@DG@@ACAAFA@@AA@@BSD@DI@E@AAGAA@BCEAAA@BG@@HA@BGEAAFE@AF@AGA@DE@@IMA@BIB@BE@@JG@@NG@AJGB@JK@@CE@BEGAB@CA@BC@AFBCADECADKDF@K@@GUB@AE@@GD@@CB@@ABAGADEC@BEA@BAIA@AIA@AGABAIA@AG@A@AFD@@DAFCABAEABA@@BEA@@GABIB@BIB@DE@@CEA@CEABEC@BGB@@EAACA@GL@DIOABCE@BEOABEC@@EC@@GA@BIIAEBIA@AC@@BG@@FOA@BQ@@BC@DID@BAAA@CB@DCBGEADEAA@BG@@@A@@AE@AA@CG@@GIA@DK@@CY@GABED@BECABEF@@EBEUEAFOAANDB@BA@@JC@ADS@@BM@DBABG@BE@UFA@AD@ACD@@CJ@BEHBJSG@CACOCB@CCABAA@BETDJHFME@@BCA@A@AD@BEB@@BJBABD@ADB@@BB@@BF@BAH@@GD@CBF@DE@KA@BIJOFB@CCEC@CA@GKA@AE@@AI@EESHUDIDQAGDGBGC]BK@@BI@@FAAUBAEIBADE@IBOHEFAFGDAD@FKHAHKH@DCFE@SDMBABBBC@AGE@GJM@OHEBAJCFCDOJADDFED@DFB@DDFABCABHC@BDBHCN@BADDBEFFDBDABE@CLK@DF@DOEA@CDIVHLBNGFBFADADEN@LBLADBNG^DJ@HLVCLJJADGD@BT\\DL@FDHCBABHHBDFDJHDHADFHADBDCD@FEJBDFBBFHDBJAHDJCRBFADBDCH@VJB@FF@DCBED@TJ\\DDGJDDCICBEFBB@AAHSA@DED@BCCADCDADCH@@DNXH@@PBH@FH@DFXBBJL@AATABIT@DKE@DG@KF@@BP@BKLA@BLBB_NBA^AHA@@DrB@DB@@JL@@ADB@RI@@DB@@DA@@BCDE@@CA@ADCFICA@BLD@@ABA@BFAF@AHB@@BAB@DGDBJJEB@@FH@@DJ@@AN@@EH@BDHECAAEBCRDBA@BRKBELBJIVFBHH@@DF@@DBCD@@EDBBAHB@BF@ABC@NF@DD@AHF@BFVABEL@@CF@"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [119332, 40781]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));