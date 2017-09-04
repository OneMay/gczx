(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('嘉模堂区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"820006","properties":{"name":"嘉模堂区","cp":[113.558705,22.15376],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@JB@@@@@@`HvPNWRqYL[L@BA@@@@BA@@@@@@@@AC@@AA@@@@@BA@@@@@@@@A@@@AAA@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@AB@@@@A@@@@B@@@@@@@@AB@@@@CA@@@@@@@A@@@A@@A@@@@@AA@@@@A@@@@@@@@@A@@@@@A@@@@@@@CBA@@@@@@@C@E@G@@BILEL"],"encodeOffsets":[[116265,22694]]}}],"UTF8Encoding":true});}));