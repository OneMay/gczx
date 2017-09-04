(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('白云区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"520113","properties":{"name":"白云区","cp":[106.623007,26.678561],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@A@@@A@@B@@@@AAA@@@@A@@@AB@@ABA@@AA@@A@@@@@ABA@@@@BA@@B@@A@@BAAA@@@AA@CB@@A@ACAA@A@AAA@A@@@A@@A@A@@@@A@A@@@@A@@@C@@@@@@AA@A@@@BA@@A@A@@A@@@A@@AB@@@BA@@B@@@B@@@@A@@B@@@B@B@@A@@@@@@B@@A@@@A@@@@@AB@@@@@@A@BBA@@@@B@@@@@@A@@BA@@@@BAB@B@@A@@@A@A@A@A@@@A@AB@@@@B@@B@@@@@B@@A@@@@@@@A@A@@@@A@@@@A@AB@B@@@BA@@B@B@@BA@@@@@B@@@@@@B@@@@@@B@@@@AB@@@@@B@B@@@@A@@@@@AB@AA@A@@@A@@B@@@@@B@@@@@@A@@@@@@@A@@@@@@@AB@A@@A@@@@@@BB@A@@@B@@@@B@@B@@@@@@@B@@@@@@BB@AB@B@A@@C@@BAAAB@@@AA@@@@@@@@@@@A@@AA@@@A@@@@@B@@@@AB@@B@A@@AA@@@@AA@@@@AB@B@@E@@@BB@@@@AB@@@@A@@B@@@B@@@BA@@AA@@@@@@@@@@@@B@@BB@@@@@@@@AA@@BB@@A@@@A@@A@@AA@@@@@@@@A@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@ABAA@@@@AA@@AB@@@@A@@A@@C@G@A@AA@@@B@B]@@@AG@@@A@@@@AA@@@BA@@@@A@@A@@@@@@@A@@B@@C@@@@B@@B@@@@B@B@@@@A@@@A@@@A@A@@A@@@@@@@B@@@@@@A@A@@@@@A@@@@A@@@@@@A@@@@@A@@B@@A@@@@B@@@@@@AA@A@@@B@@@B@@@@@@@AA@@@@BBB@@A@@@@B@@@A@@AB@@AB@@A@@@@@@@A@A@@D@B@B@@@B@B@@@@A@@B@@B@@@@B@B@@@B@@A@@B@@@@@D@B@BBBBDCBCB@BADAB@@B@@B@@A@@@@@@B@B@@@@@@@@@B@@@@A@@@@B@@@A@@@@@A@B@@@B@@@BA@@@@@@@A@@@A@AB@@@BA@@@@B@@A@@@@@@B@@A@@B@@@@B@@BBB@@@@BBBD@B@@BB@@DB@@BA@@@B@@@@@@@@@@@@@@B@@B@@B@@@@A@@@AB@BB@BB@@@BBB@@B@@@@AB@@@@@@A@A@@BA@@@@@@B@@BB@@B@@B@@@@@@A@AB@@A@@@BB@@@B@@@@BB@BDDBDB@BB@@@BB@BBB@@B@@@@@@AB@@@B@@@@A@@@@@AB@@AB@B@@AB@@@BB@@@@B@B@BA@@B@@A@@@@AA@A@A@A@@@A@@@A@@BA@A@A@@@A@@A@@A@AACBA@@A@@@CA@@@A@@@@BB@@B@@A@@@@A@A@A@@@@@B@@@@AB@@@@@A@@@A@@@B@@AA@@A@AB@@@AAB@@@@B@@@@@A@@B@AA@@@A@A@A@@@@@@AA@@A@@@@@@@BA@@@@@@@A@@@BA@AA@@@@ACBA@AB@@B@@B@@A@@@ABA@@A@BAAA@@@@@@@@@AAAB@@AB@@@@ABBBABB@@B@@BBBBBB@@A@@@@@@B@@@B@@@@BBA@@@@B@@@@@BA@@@ABA@@@A@@@@A@A@@A@@AA@A@@@@@AAA@@B@BAB@B@B@@A@BB@BBB@B@@B@B@DB@@B@@ABC@@B@B@D@@@B@B@B@D@B@@@B@BB@@@@@B@B@@@AB@@B@@@@@B@@BBB@B@@@@@@@@@B@B@@BB@BAB@B@@@@@BB@@@@@@B@@BB@@@@AB@@@@@@@A@AA@@@B@@A@@@@A@@B@@AB@@@@A@@A@@A@B@A@@@A@@@@@@@@BB@B@B@@@@DB@A@@@@B@@@@@@A@@BB@@@A@@@@B@@@@@@@AC@A@A@C@@B@@A@@@BB@@@B@@@BA@@@@@B@@@@@@B@@@B@B@B@B@@@B@B@B@@@@B@@@@BB@@@B@@BB@BA@@BB@ABB@@@@@BB@@@@@@@@BBB@@@B@@A@@B@@AB@BA@BB@@@@BB@@@@B@@@B@@@@BB@@B@@AB@@@B@B@@@@BB@B@@@@BB@@BA@@@@B@@BB@@B@@@@@B@B@@@@@@B@@D@@@BDB@@B@@@@@D@@DB@@@@BA@@@@@@@@@B@@@B@@@BB@@BB@@@@@B@B@@@@B@B@@@B@@@@BBB@@BB@B@@@BAB@@BB@@@@@B@@@B@DC@A@@@A@@@ABB@B@@@B@B@@@@@@BB@@BD@@BA@@B@@@@A@@@@@A@@B@@@@@BB@@B@A@B@@@@@@@@AB@@@@A@@B@@D@@@@@@@@@@BBB@@@@@B@BB@@@B@@@@A@@@@B@@B@BB@B@@@@@@@@AA@@@@AB@B@@A@@@@B@@AB@@@@@@B@@@BB@@@@@BB@@@B@DAD@@@B@@@B@BA@@BA@@@AB@@@@@B@@AB@@@@C@@@A@A@@B@@@@@@A@@@@B@@@@@BB@@B@@@BA@@B@@@B@B@@@@@B@BB@@B@B@@@B@@@@@B@@@@@D@D@BBB@B@BB@BB@BA@@@@B@BBB@@@@BB@@B@@BB@@B@@@D@@@B@B@@@BBB@@@@@B@@AA@@A@@D@B@B@@@BA@@@@BB@@@@@@BB@@A@@B@@@@@@B@@@@B@@@@BB@@AB@B@@@@@@B@@A@@@@B@DB@@@@@@@AA@@@@@@@AAAA@@@@@A@A@@B@@@B@@@@@B@@@@@@@B@@@@B@@@AB@@@@BB@B@B@@@BB@@@@@@@@@@ABB@A@BB@@@@@@@B@@@@@B@@B@@BB@@@@B@B@@@@@B@B@@@B@@@@B@@@@@@@B@BB@@@AB@@@@@@@@@@@B@@@@@@@@B@@@@B@@@@@@@@@@@@@@B@@@@BB@@@@@AB@A@@@B@@@B@@@BB@A@@@@@@@@@@@@@ABBBB@@@BB@@@B@@@@@B@BBB@@@@@A@@A@@B@@@B@@@B@@@D@DB@@@@@B@@B@@@@@BAB@@@@@@A@@@BBBB@@@B@@@@B@@BAA@BA@@@@@@@BB@@@B@B@B@@A@@HF@@B@B@BBB@@DBB@BB@@@BBB@@AB@B@@@B@@@BA@@B@DBD@BBDDB@@B@@BB@@@@@@BB@@BBA@@B@@B@@@@@@@BB@@B@@A@@@@A@@@@@@A@@@AB@B@@A@@BBBABBD@@B@@B@B@B@B@@@@BB@@@@@BA@@BAB@@A@@@@BADAB@BABA@AB@@AB@@A@@@@@A@A@@@@@@@@B@@A@@@@B@BA@@BAF@B@@A@@@@@AB@A@@@@A@@BA@@BBB@@A@@@BB@B@@AB@@@BA@@D@BBDBB@@BB@B@@@B@@BB@@@@ABABA@@BAB@@@BA@AAA@@@@A@@@@@BA@@@@@A@@@@A@BABA@@@@@@AA@@@BAA@@@A@@@@A@@@A@@@A@@B@@A@@A@@@@@@@A@@@A@@B@@@@@@AA@@@AA@@@@@@A@@AA@@@A@A@@AC@@@@B@@A@A@@@@@@@@AA@@@@@@@@@@B@@AAAA@@AB@AA@@C@A@@@@AA@@@A@@@AB@@AA@CA@@@A@@@@@A@@@@A@@@@@@BAAA@@@@AA@B@@@AA@@@A@@@@@A@@@ABA@@A@@AA@@@@@A@BA@A@@BA@A@@AA@A@@@@@@@@BA@AA@@@@@@@A@@@@@@@AAAB@A@A@@B@@AA@@A@@@@@@BA@@@@@@@CAA@@A@@@@@A@@A@@@@@A@AAA@@AA@@@@@AB@@@AAAAC@C@C@A@CBE@A@A@@@A@AAAAAAAC@@@@@@A@@@A@@@AACBAA@@@@A@@@CBA@A@BBAB@@@@A@A@@@A@@@@A@A@A@@AAA@@AA@CA@@@A@@A@AAA@@@A@@A@@@A@@AB@@A@@A@@@AA@@@AAA@@@@@@A@@@@@AAB@A@ABAB@@@@@@@B@@@BA@@AA@@@A@@@@@AB@@@@@@B@@B@@@@A@@@@@AC@@A@@@@@@B@@AB@@BB@@B@@@@@A@@@@@A@@@@@@@@BADA@@A@@@ABA@@@@@ACAAA@@A@A@@B@@BBBB@@@@@@@@A@@A@@@@@B@DA@A@@@@A@@@@A@@@@@@BA@@B@@@B@@AB@@@@B@@B@@@B@B@BA@@A@@A@AACAA@A@@@A@@@@B@@@@AA@BA@A@AB@@A@@@@@@@A@AAA@@@@B@@@BA@@@@@AA@@A@@A@@@@@B@@AAAAC@A@@@@@@DC@@A@@@@C@C@@@A@@@@@@D@@@D@@@B@AAAA@A@@B@@@A@@@A@@AAA@@@D@@@@ABA@@@@@A@C@AA@AA@C@CB@@C@@BAB@BAB@B@@A@@@AAA@E@@@AA@@@A@@A@@@@@B@@@@AA@AAA@C@A@@@AA@@BAB@B@@A@@CA@A@A@@@AB@@@@AA@A@A@GBABABABA@A@A@AA@@@A@@@@ABA@@@A@A@A@@BA@@@AA@@@AACAA@AAA@A@AAC@ABA@@@A@@@A@@@@AB@BAA@@@@@C@AA@@A"],"encodeOffsets":[[109264,27297]]}}],"UTF8Encoding":true});}));