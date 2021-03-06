(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('云阳县', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500235",
            "properties": { "name": "云阳县", "cp": [108.697698, 30.930529], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@@QBAF@@CAGEIAOBIHIAIAEKI@IIEEUKMDCJ@FE@ENARGJEHGJ_CEBGBCJIFKHGDEBEBQHIBgACC@OBK@CCEOEEE@GD[LCKDaNQD]CKBEHCb@HCJGTEL@BA@ECKBMGMEC@CFK@MGa@CDCL@TEP@PGJ@ZDTPPDHDHCRDL@FCJ@DCDGFQFC`AFHDBFBHON@FCHSFEH@BC@CAEOUGOMMECCGCMOKIWBCLEDQ@SA_AKCEE@QJEDAJIDoH]DIAACAC@SFGLGBCBGBMCCIHE@KEEE@EFIF_@A[DADGAAAJU@CECcGmCKAEBAB@NADEB[EKCIGCK@KIE@AJC@ACGEACICC@ANI@EGEBAFCBCI@@CCCAEBE@IFABCCG@AFEBACIDEAGLG@EBCHEAGEG@C@AIE@GEAAAAKHICEECCBCEKAIEC@SGBG@GFAFBHABGKIECECAIBCHCDKAEKIAABCHCDIACMUAEBCLKOMAKGCI@IJCASOCACDEHEBKCIESQMMMMqYSOCDMLMFqhHHCFJ@BDAFFFDABHLB@FPDCHBBHB@FFFARBBBLABABAZELGFE@CFAACAA@AL@FA@IAAABACCCBCCGAABCAA@EA@CKBAEG@ACC@OCC@AAAAABCAGBIZABEBeI]IGACBCDDHALZVCFDHEBaAMAEB@DHN@BCBEJLJBHCFCBG@GCC@IJCHALCLAJCDERBDLHBDMHEVDLAHKLABY@BDCDC@AGUEEAABEJBD@FCHQREDDLADMHEFIBCRGNADKFBJGVCFCBACYCGGDCACOIC@ABEXDLAXFHCD@DJJILGF@LADKHE@AAY]OKMCWEU@E@CBCFCNITDH@FIHCFCLAJCBMLAHGJ@FPDDF@BAH@DBDLF@DABEBIA[IKDI@EECE@CFI@ECCMCIBGFECWEM@CAEGGBCD@VCHBHDF@FCFEDKAIHA@E@EEMAW@BHFH\\NJBRAJ@`NH@HDDJHVAJDJGL@BVH@BAHBDJDHDLBTH@BCFDDHBH@RFVA@DCDCF@DBFBBF@\\IFAD@ADILINAFDFRDHFFXADADFPHFD@JDPHLHFJRHBDENCFMDKBCBBBADGCCF@BVLDTCNFFD\\H\\DFFBHFZZBJBDD@PCNPJBBF@RKHADBBdJFBBF@LCDKPUVEHALFPJDXBFBLAJB\\@bFBDBFIR@JJFFLFABDDBABCB[DCHDJJHVHN@\\EF@DBBDBDIN@DJBFD@PDJLHTJDJBJRATETIH@RKL@DABE@EMQMIAC@CFETIRCJE@CJKLE@ACCQC@ADGCODEPAFABAAIFCT@PCTAJG\\CDCDBJDBD@DEZBHBFBHCFMFDB@LHJFBNFF@DEPAFBDHTCRJJMPCFBF@NDH@D@@CFEHDLFDBVKHA\\CLCH@TKPA\\C"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [111669, 32120]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));