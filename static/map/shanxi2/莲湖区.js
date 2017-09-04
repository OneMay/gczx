(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('莲湖区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"610104","properties":{"name":"莲湖区","cp":[108.943895,34.265239],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@A@AA@@@A@@@@@A@@@@@@@A@@@@AABA@A@@BA@A@@B@@@@@BB@@B@@@@BBCBA@CGC@AA@@E@AA@@A@@@C@@DE@@D@@@B@@@@B@DB@@BB@B@DB@@B@D@BA@@B@@A@@A@C@C@A@AE@@@E@A@@N@@@@E@A@A@@@G@G@A@I@A@M@A@@@@F@@@B@B@BBA@@BA@B@DC@@D@BF@@BC@@DA@@B@@@@B@BAH@@B@BA@@D@@@@B@@B@@@FE@@BA@@@@B@D@B@@@BA@@@@BB@@BAB@@@B@@AB@@@@@H@BB@@BD@CB@@@B@BD@B@B@F@D@B@F@@AD@@@B@B@@AH@b@BDR@T@H@D@B@D@D@@B@@@@@@@@@@B@B@@@@@@@@AB@@B@@B@@A@BBA@@B@@BB@@A@@@BB@@@@@@@B@@@@@@AD@@BB@@A@@@BB@@@@@@@@@@BB@@C@@F@F@@@F@F@B@@@B@B@@@F@@A@CG@@E@@@@BAAA@@AA@C@@@@@@@A@A@@@AB@@@B@@@B@@@AA@@E@@A@@@@@@@@@A@@@A@@@@@A@@@C@@@A@A@@@C@A@A@A@A@@AA@A@CB@@AA@@@C@A@A@A@A@@@A@A@E@BC@C@@@GA@@@@AE@A@C@E@E@A@@CE@@@@@I@C@@A@@@AC@A@@A@AA@BE@CA@"],"encodeOffsets":[[111524,35062]]}}],"UTF8Encoding":true});}));