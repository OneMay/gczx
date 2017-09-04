(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('深水埗区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"810006","properties":{"name":"深水埗区","cp":[114.163242,22.333854],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BC@A@@@@@@@@@A@@@@@A@@BIBA@AB@@A@A@A@A@AAA@ACC@@@@@@A@E@C@@@A@@@C@C@@@@@AAA@A@@@A@A@@@@A@@@@@@@@@@@@A@@@@@@@CD@@@@@@@@CCAA@@@@A@AAC@BQg@A@@@@BAD@BADAB@@@@@@@B@@BBLFPH@B@@@B@@A@KDA@ABABAB@B@B@B@@BB@@B@@@@@@@B@@@B@@@BBB@@@BB@@B@FA@@D@@@@@@@B@@@@@@@@@@@BAB@@@@@@@BB@@@D@@@@@BB@BBHBD@D@J@D@DBB@D@D@B@B@B@"],"encodeOffsets":[[116919,22881]]}}],"UTF8Encoding":true});}));