(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('蓟州区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "120119",
            "properties": { "name": "蓟州区", "cp": [117.407449, 40.045342], "childNum": 0 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    //["@@AHC@@FCA@DHB@JS@@DA@@H]BCTKfG@BHK@@FEAADJD@RJhNNI@@FQBBDCBQA@BBLMIBNFJADHHEBuK@IA@AKU@UDDHKI@HAGAAC]@CDCA@MSAHPGBOEMEIA@EC@@DA@MBAASB@BCB@TE@@BBBBDAHCBDFABFNGBBFKBBFC@BDB@FPC@BPCPMACEoBE@AAC@@DcB_D@ECB@A@BA@B@@DC@@CA@@IE@AAG@BDK@EBABQA@JE@@HC@ABA@@BB@ADOA@DIAACA@NxQB@FIBHXHABFKBFLIDLPDTF@DNC@CAGB@FA@BJDXmBA[@@D@@NL@BHB@H\\BTD@HRB@JF@FL@FHDNDABJDCDTD@DTA@@LF@BB@XGBADE@@B@B@DJXJ@XEDFHAFHCBBDBDJBBHTCAIGBAAGBEA@EC@BCB@@BBAC@@AB@@CD@@DB@@DJ@DDF@DAF@@CLABBF@@AB@BBJ@@IBBDBB@ACJBJDR@@HD@@GfBAFXBCLH@GTPFjKAGSGDGXLHGFDBDVABCBB@B\\KLGJNDADHDAEI\\GCGPA@CF@AIhCbGTCnSIKNC@EE@CYlCBJJJ`W~W\\M^WV]^_°VIEG_PUSPISQfUFE©uEDIDCAAOgSFAAGBEJD@AF@BC@GPEDBBB@DF@BBbD@CaACSBAA@AGBS@OEEAICDG@AGDKEABIL@@IJADI@C@EG@@CH@DACAGAL@@OA@@GEI@CA@@EE@A@BADAAEDC@GACOKB@BMEB@ESEAABECAWBAECBBCC@CIBCS@@IWD"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    // [
                    //     [119909, 39513]
                    // ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));