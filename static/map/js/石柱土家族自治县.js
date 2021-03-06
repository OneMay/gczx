(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('石柱土家族自治县', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500240",
            "properties": { "name": "石柱土家族自治县", "cp": [108.112448, 29.99853], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@C@AEGC@ECAAGDEAIDAF@BACOBEDIACEAGECGAEDERMPYAAKCAA@SFEAEKE]AGCDK@M@CDADBTMPELOBEFAhDFDJDJO@AHG@E\\ODIJEDEFABGFE@ALED@FALDRK@CFEC@ACFEECBCJ@BCFC@EBC@GDEDAH@HE@EAC@CNITAHOL@RBB@BEGQIOIAEI@CFEKaQCUTKJ@BAMYKcQmU]EI@UECCAADCBCAMQEMBEBAJDHHF@JG@EKE@A@AHADCEe@iBAH@JCHIAQCEECACCWKQQcCOAOReAGECFQCGEECAACDE@EBI@IEICFGJBDCHQBEACCIQWAUEKBG@EDCJgRK@EC@KACE@AEGEEB@ACAACCAAEEB@CA@AACBGDIJIC@CJI@AUOSIACFIECAICE@EACDAHA`ADAHBCI@GIACICGBGGIISKUCBECEKAKBEFABA@KCGF@@IBKBMHOBGAAOJMJM@UKUGE@WXOBILAFCDGKAAIDO@GFM@AD@FGBWJIHCHCAGGCAOBGBGG@GGKFGDIAECEGC@AFGCKGFA@CCCGECCCAMHEBGCCCA@ICCGAEI@ECAO@QMK@EAEMDGOEI@EBEDGJCJBJBDPFFDANDFFBF@HBLFL\\@FEHMFJ\\HLFNCBEACDCL@JFFDBRKDAPTDHHLFDDAFDDHFDBFDD@BKLEBGAQJUZ@DDDBHFDFB@BED@JODCCEDADDJMTE@OCSKE@CDBVCFUHYDKAICE@GGIAAGA@[CWVWLCD\\^@DAHGFCHGDCHIBGDMACBEJGHJFLCB@DF@HEFOAEBCBAF@JAFS^ehQLADJPHFDALDFGHEB@RXFDFHGVBB@BKLBFGDEFHNFDDJ@DKJKPCBKAIJADBDA@EDLHFAF^JBJFT\\FADGGWBCDCHAVBD@JFV\\dtPXBJCL]jEDKAGBCDDDJBFDDZBDN@LDFHHLXZFLLCNID@HFHNABKAC@CBADDFNP@BEDE@IIKEG@GFABBHFJMHCBKXDJFCFEFCHBRHF@HG@SDCD@HNCNANDFJ@HFHFBF@NIBOJAFBB@DHJ^NAHPLAF@DHDNPADSNOFeAOGG@EFCDEBGJMHI@OAAJBDLLPFNDdAJ@HBFFFHHVPRHPRJ^VLFH@dIJ@LDRVTKDCBGBAXAHADEHSFKDDX`DBH@XKH@BDFNPNHNJFBH@H`bBTHTLNN\\JNnJFNCJBDDFJJJFADCBC@OAEKCEECEBGBEHCJBD@BKAGBGFBHHRHB@CGEGEM@GBADG"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [111027, 31221]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));