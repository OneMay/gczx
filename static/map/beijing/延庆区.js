(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('延庆区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "110119",
            "properties": { "name": "延庆区", "cp": [115.985006, 40.465325], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@F@FCHBFADBFEBCDCLCHGJDDI@KA@@GFADCPCCCAECABSACACACE@@ACABEFICEEAACBEDCACCAG@GGGACKEG@AACBCFEF@BAFBHCF@BAHHBCNABAD@AEDEFA@CCCRC@EF@@AH@BC@@BHH@JEBGJC@ABC@CF@BCD@HED@BATA@ICGECEBCBEBCCC@A@IAODGC@CAC@CAA@CCABCACC@AEBCA@FECCB@BA@CIEBICAGIAECAEFDEICAEEGG@CE@CCIKCACCGEAQA@EGIAGGCCCECGKKKFGDAH@FCB@BCDADBFAJBJFL@BEBABELEBEFADENI@KC@CCEAGIO@QCGBADC@ABKASBEDODAA@ABCCC@CGA@BC@BBO@OGM@IDC@CDA@CBGCCBE@IC@CIABAEAAAB@CCCBADCABBE@CD@DFAAHA@@BFBIACBC@CB@BC@@DDBCDDABBEHBDCDKDGAEDK@UEABEBKCKDEAIBKIC@CGG@IKMBIAAA@EDA@CBEJIDELCEEAAACAC@CCACD@EGCBECABCCC@CCCDABCCCBC@EFC@EDE@A@CCEEACD@CE@FAACFIACECBCB@AC@CEECAHABA@AB@ACBE@CBCAABAAAMIWNCAG@CAC@EFICBACA@EGEAB@FGDCCI@IECFADCDIBIAEBA@CAACCCBAAAK@CCI@EACBAAACG@AAGCEFEAABEACEE@CACBC@CEE@MCAEDAACCIJCFCDEAABCEA@ECAIAABBFDBCNABC@C@CCAABADCEACEBCFBHAGECEBCAGDC@CDE@AGEE@@AEAEBEAGBINAB@FGHC@@FIBMCMDKAEJEDC@AB@B@@G@GCEAI@CCACCCBAIEBCD@BEACA@ACCAEACBI@CGMAE@AFADEH@JC@AFCBEHABEAGBAAC@CGE@AECAEBCDA@E@EEA@AAEAGEGACADABKAEFCF@DAB@DCD@FIGAA@C@EEC@@CA@BC@CFIE@@IDABCEE@CCAEBAEA@AAC@CECBCFC@CJBBID@FGD@DCFBBADGA@FABBB@FGHAFA@@BDDBB@DBDMDAHEBADEBEA@BGH@BHDBDCDCBAFAFFFGLAHAB@DMDCDaCCDKA@BC@@DIA@DC@@BGC@@EBICCD@BD@@DCCE@ABF@@BG@@@H@GBH@@DE@@BF@@BG@HB@HA@@E@JI@@DMA@AC@CBA@@DEAAHE@AHC@@BB@FBAFO@EJCBGF@ACFA@@AC@CDEA@@BBC@@BBB@BFB@@ADBBADFACFB@CFBBD@FC@BA@ADDFD@@BABGCE@EF@HDHDBFF@HADDHHF@FGDGAKJGBgAAAAEMRJPADFBBHJPJJD@@FEFBDDBHAJDBBBDHJJBDHPJLFJ@HELBLCF@LDDHAJDF@FBDDPDHVFJBFDFCLADBH@HBDBBFJADBLADBFAHFDHDDBDJFHHDBBDDDDAR@RGNBHCNAHCDBJ@HCH@HC@CCENB@ADIDMHIBIFABBL@DBFABD@D@BRABHDDD@FJHF@BCBBBFBHHB@DDBCDDBC@ECEDCHFBBBARDLHPBJFL@HBBBBLDDTJFFTFB@BEF@^BFBBBCFONALABDDLDDDJBBDFFFJB@ABFFD@LADANCTAFB@FFLBLFH@FDH@JCDBDHFDJ@DFF@DJDADLJBHLDPL@DAD@FH@DDFCJFDD@JFHVLADEBBF@F@B@DJH@JAFJDDFHBDFLCDCF@@CDABCF@BEDCFA@KBCFE@ED@DCHFD@FAHBHIJELAHGDB@FCF@FAFJLHDD@DBL@HBFAL@BAJBNELBFDNCFBR@FBBDH@HDDDJAHDDAHDNEDQL@FCNBLAFDH@REHFHBHF"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [119261, 41752]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));