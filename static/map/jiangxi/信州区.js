(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('信州区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"361102","properties":{"name":"信州区","cp":[117.966268,28.431006],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AA@@BA@AB@@A@@A@@@@@@ABBB@@ABBB@@A@@@@@AAB@AA@@@@BA@B@@A@@@@A@@@@AA@@AA@@@@A@@@@@A@@B@B@A@@@@@@@A@@@@@@A@@AA@@B@@@@@BA@@A@AB@@@A@@@A@@@@@@@@@BA@@@@@@@@A@@BAA@@@@@BA@@@@@@@A@@A@@@@@BA@@@@@@@A@ABAAAAA@@A@@@@A@@@@@A@@A@@@A@@@B@@B@@AB@@@@AA@@A@@@@@@A@@@@@@@AB@A@@A@@@@A@@A@@A@B@AB@@@@A@@@B@@@@@@B@@@@A@@@@@@@@B@BA@@@@BC@@A@@@@@@BA@A@@A@@@A@A@@@@@A@@B@@AA@A@@@@A@@B@@@A@@A@BB@@AB@@@B@@@@@BA@A@@@@@@BB@@@@B@@@D@@@@A@@@A@C@@@@@A@@@BA@@@@@@AB@@A@@A@@@@B@B@@@A@@A@@@@@@A@@@@@@@@A@AA@@@@B@@@@@B@@@@@@A@@@@@@A@@A@@A@@@BA@@BA@@@A@@@@@@@A@@A@@@@@B@@@@@@A@@AA@@@BB@@@@A@@@A@@@@A@A@A@@@AC@@@A@@@@BA@@@A@AA@@@@B@@@@@B@@@@@@@@@AAA@@@@@@A@@@@B@@BB@@@@@AA@@@@AA@@@@@@A@@@A@@A@@ABA@AB@@AA@@@B@@A@@@@@@@@@@A@@@@@@A@@BAAA@@@@A@AA@@A@@ABA@@A@@@BA@@@@@A@A@@B@@@@@AB@@@@B@@@AB@@@@@B@@@AB@@@@@B@AB@@A@@B@@@B@@@BB@@@B@@@B@B@@BB@@@@@B@@@B@@@@@@@@B@@B@@@@BB@@@@B@@B@B@B@@@BA@@B@@ABB@BAB@@@@B@@@@AB@@@@B@@@@@@@@@C@@B@@@@@@B@B@@@@@@@@B@@A@@@@B@@AB@@@@@@@@DA@@@@B@@@A@@B@@ABAB@@@B@@@@@A@@DA@@B@@B@@@@A@@@@@AB@@@@B@BA@@@@@B@@@B@@A@@B@@A@@@@@B@@@@@@B@@@@B@@B@BBB@@@B@@B@@@@B@@@@@@BBD@BBB@@BB@@@@@BB@@A@@B@@@@@@@B@@@@@@BBBBA@@B@B@BAB@@@@@@@@A@BB@BA@@@@B@B@B@B@@A@A@@@@@A@@@@BAB@@@@C@BB@@@B@@AB@@A@@@@@@BAB@@@BDB@@@BABADA@@@A@@@ABAF@BAB@@@BAB@B@@@B@@@BB@@@@@BB@@@@BB@BB@B@B@@@@B@@@@@@@@AB@@B@@BB@@A@@BBB@@@@B@@@@A@@AA@AB@@A@A@@@A@@AA@@A@@@B@@@@AB@@AB@@@B@@@@B@@@@@@BFDFBFDD@CD@DBBFBFB@B@@@@@B@@@@@@B@@@B@B@@@@B@@AD@@ABAAAB@@@@@@B@B@@@@B@@@@@B@@@@@B@@@@@@@ABA@@B@@BAB@@B@@@@@@A@@@@@A@@B@@B@@@@@BABA@@@@@B@@@@B@@BAB@@@@@@B@BA@A@@@A@@@@@@B@@@@@B@@@@BA@@@@B@@@B@BA@@@@B@@B@B@@@@@@@@B@@@@B@@@@@@@@@@@B@@@@ABA@@@@@B@B@@@@B@@@@@B@B@BBB@@B@BB@@B@D@B@@@@BDD@B@@B@B@@@@@B@B@B@D@@AB@B@@@@@@C@@A@@AA@@@@@@@@A@@@A@AABA@AA@@B@@@@A@@@AB@@B@@@A@@@A@@@@B@B@@@@AB@@AA@@@@@A@@@@@@BA@@@@@@@A@@@@@@@B@@A@@@@A@@@B@@@BA@@@@@@B@@@B@@A@@A@@@AA@@@@@AB@@@@@DE@AB@@AAAB@@A@A@AA@@@H@D@F@@H@@@@BFBDBBA@@@@B@@@B@@@@@B@@@@@@@B@@@@B@@@@B@@@@BB@@@B@@@B@@B@@@@@BB@@@@@B@@@B@@@@@B@@@B@@@BBB@@BB@@B@@B@@@@@ABA@@B@D@BBA@@@@BB@@@B@@@AB@B@B@BA@BB@B@@@@@@@@@@B@@@@@@B@@AB@@BB@B@@B@@@@ABBB@AB@@@BB@@BB@B@BA@@@@BB@@@B@@@B@@B@@BBA@@@@@@@@@@@@B@@@B@B@@@@@@@@A@@A@A@@@B@@@B@@BB@B@@@@BB@@@B@B@@@@@B@@B@@@@B@@A@A@@@AB@@@@ABA@@@@@B@B@@@@A@@@@B@@@B@D@@D@@@AD@B@B@@B@@BB@@BBD@@BBB@B@@@B@@@@B@@B@B@@B@@@@@@B@BB@@B@@A@@B@@@@@BBA@@@@B@@@@@@B@@@B@@@BA@@@@AB@BA@@B@@B@B@@@@@BB@@A@@@DB@@@BB@@B@@DB@@@@BB@@@@@A@ABA@DBA@@@@@A@AA@@AA@@@B@BAB@@@@BB@BB@@@@AB@@@B@@B@B@@@@A@@B@B@@@@@@B@@@@@@@@@@B@@@@@AB@@@B@@BB@@DA@@BB@@B@@@B@@BA@A@@BB@@@@@B@@@B@@BAB@@@@B@@B@@@B@@@@@@B@@@@B@@@B@@@B@@@@@@@B@B@@B@B@@@B@BB@@AB@@B@@B@@ABA@@@@B@@@@A@@@@@@D@@@@BB@BA@@@AAC@@@@@A@@AAA@@A@@@@B@@A@@A@B@@BB@@BB@@B@@B@@@@A@A@@B@@@@@@@@B@@@@@A@@BAB@@@@AA@@@A@@@@A@@@@A@A@@A@@A@@A@@@A@AB@A@@@A@A@@@AA@@@@@@B@@A@@BAA@AA@@B@@BB@@@@AB@@@@@BB@@BBB@@@@B@@@@B@B@@@@B@@@@B@@@@C@AAAB@@BB@BA@@BAB@@@@BB@@@B@B@@@B@@@@@B@@AA@@@@@B@@BB@@A@A@@@@A@@A@AA@@A@@@@@@@BB@@@BB@@@@B@@C@A@@@A@@@B@@B@B@B@BB@@B@@@@@@@B@@@B@BA@@BA@@@AA@@@@@AB@B@@B@@@@@A@A@@@@@@A@@AA@A@@BB@@@@BA@@@A@@@@B@@A@@@@@A@@B@@@@FB@@@AB@@@@@@F@B@@@BBB@@@B@@A@ABE@@@@BAB@@A@B@@@ABA@B@@@@@@B@@@@@B@@AB@@A@@BAB@@B@@@@B@@@DC@@BBB@@B@@B@@@@ABAB@@@D@BAB@BAB@@ABBBAB@@@@@B@B@D@BB@@B@@@B@@DB@@@@@B@@@@B@@BB@@@B@@@@@B@@@@A@@@@@BB@@@@@BBBA@@BABA@AB@@@@@BA@@@@BB@@@@B@@@@@@A@@@@@@@@@A@@A@@@@A@@@A@@@@@A@@B@B@@@@BB@@@@@@BD@@@@@@A@@@A@@@A@@@A@@@A@@@@@A@@@A@@@@BC@@@@ABA@@@@@BC@@B@@@AAB@@A@@@AB@@@@BB@@@@@AA@@@A@@A@@@@@@@@@@@BA@@@@@@@BB@@@@@@@@@@B@@@@@B@AB@@A@@@BB@@@@@@AB@@@@@@@@A@@@@AB@@@@@@@@@@A@@AA@@@BA@@@@@BB@@@@@@@@AA@@@@@@@@@@@@@A@@A@@B@B@@B@@@@@@B@BB@@@@@B@@@B@B@@@B@@B@@AB@@@@@B@@@@@B@B@@B@@B@@A@@B@@@DF@@@A@@@@B@@BBF@@@@@@@@@@@@DB@AA@@@@@A@@AB@@@A@@AAC@@BB@@@@@@@BBB@@B@@B@@@B@@@@A@@@@BA@@B@@@B@@@B@B@BA@@@A@BD@@B@B@B@B@@@@BB@@A@@B@@@@A@@B@@@@A@A@@BB@@BAA@@@@@@@BA@@@@@B@@@@@@@B@@A@@@B@@B@@@B@B@B@@@BA@B@B@@A@A@C@@@@B@@A@@@@@A@@@@@@B@@@@@@ABABA@@@@BAA@@@@A@@BA@@@@@@@@B@@@@@@@B@@@@@B@AA@@@@BB@@B@@AA@@@B@@A@@A@@A@@AB@@@A@A@@B@@A@@A@@AA@@B@@@@@A@@A@@AB@@@BA@@A@@@@@@AB@@@@@BA@@A@@@@@DA@@B@@@B@AA@@BA@@@@AA@@@@AB@@AA@AB@@@@@AAB@@@AA@@BC@@@@@@BB@@BB@@B@@@@@B@@@@A@@A@@@@@@A@@@@@A@BA@@@@@A@@@@A@@B@BA@@BB@@B@@@@@DBBABB@@@BB@B@@B@@@@@BB@@@B@BB@@@B@@@@D@@@@@B@@@@@B@@@@@B@@BB@B@@@@@@A@@A@@@@@@@@@@@@@@@@C@@B@@@@@@D@@@@@@@@@@B@@@B@@@@@@B@@B@@@@A@@@@A@@A@@@@@@BBB@@AB@@BA@@B@@@AAB@@@@@@B@@@@@B@@B@@@BB@@AB@@A@@@@DB@B@@B@@A@@@B@@B@@BB@@@BBB@@@@@AA@@@A@@@@BB@B@@@@@B@@@@@B@@@BB@@@@@B@@@B@@AB@@@BB@@@@B@@@AB@@@@@@@B@@B@@B@BA@@@BB@@B@@@@@@@BB@@B@@@@BBBB@B@@@@A@A@@BB@@@@BDA@@@@@@@@@BB@@@B@@@@BBB@@BB@@BD@@BBA@@@@@@B@@@@@@@BB@@@@B@@@@@B@BB@@@B@@A@@@@@@@@B@@B@@A@@@@@@BB@@@A@@A@BA@@@BB@@B@B@@A@@BAB@@@B@@B@@@@@@@@@@@@@@BA@@@@@B@@B@@@@@B@BB@@@@B@@AB@@@BA@BB@@@A@@BA@@@@B@@@B@@B@@B@@@B@@@@@BB@@@@AB@@AB@@B@@B@@B@@A@@BB@A@@@@BB@@A@@@@@@BB@@@@B@@@@BA@@@B@@A@@@@B@@@@@@B@ABB@@@@B@@@@@@@A@@@A@@B@@@B@@A@@@@@@@@@@@@@@BA@@@A@@@@@@@@@@@AB@@@@DB@@@@A@@@@@@@AB@@@@@AA@@A@@@@@BAAA@@A@@A@@@A@@@A@@BA@@A@AA@@B@@@B@@@@B@BA@B@@@@B@@@B@@@@@@@A@@B@@@A@@A@@@A@@B@A@@@BA@A@@AA@@@@@@A@@@@A@@B@@A@@@@@A@@@@A@@A@@B@@BB@@B@@@A@@@@A@@AA@@@@@@A@A@@@A@@AA@@@BA@@@@A@@@A@@@@@A@@@@@@A@A@AA@@@A@@@@@AA@B@@@@@@A@@@@@@A@@A@@@@@@B@A@@A@@@AB@@@@A@@@A@@@@B@@B@AB@@@B@@ABAB@@@@@B@@@@@@@@A@A@@@@@A@@@A@@@@B@@DB@@@@@@A@@@@@A@@@AA@AA@@B@@@FB@A@@A@ACACA@@B@@@@@BAABAABAAAAA@AA@@A@A@A@A@@AA@@@@@@@BA@@@@@@A@A@@@DAAA@B@A@A@@EAC@@@CBA@ABA@A@A@A@CA@@CACCCA@AA@ACAAACAAAGAAAC@@@A@@@A@A@@B@BB@@B@@BB@@B@@B@@@BB@@@AB@@A@@DBBA@@@B@@B@@@@@B@@@@@@@AA@@B@@ABBBA@@@B@@B@B@@@@AB@@@@@B@@AB@@@@@@@@A@@@A@A@@B@@@@@@BBB@BBB@@@@B@B@B@@@@@@A@@@@BA@B@AB@@BB@@@A@@B@@@BB@@@@BBB@@BB@@A@@@BD@@@B@@B@@@B@@@BA@@A@BAA@@@@@@@@@B@B@@@@@@A@@@@@@@AB@AA@@@@@@BA@@@AAA@@@A@@@@@A@@@@@AB@@@@@@@AA@@@@@A@A@@AA@@B@BB@@@@AA@@@@@A@@B@@@B@B@@AA@@@BA@AB@@@B@@A@AB@B@@A@@@@@AAA@@BA@AA@A@@@@AA@B@@@@@@@@@@A@@B@@@@@@@@@@A@@B@@@@A@@@A@@B@@@A@@@A@@@@@@@BA@@@@@A@@A@@B@@@@AA@@@@A@@@@@@@@@@BA@@@@@A@@@@A@@@@@@AAA@@A@@@@B@@@@@@A@@@@@@@A@@@@@A@@@@@@@@@@@@@@AA@@B@@@@@@@@A@@@@A@AA@@A@@A@@AAA@@@@@@AA@B@@@@A@@@AAA@@BAB@@@@@@B@@B@@B@@@B@@@@@@@@BB@@@@@A@@@@@@@AB@@@@@@@@@@A@@@A@@@@@A@@@@@A@@@A@@B@@@@@@@@@@@@@BA@A@@B@@@@@@@@@@A@@AA@@@@B@@@@@B@@@BB@@@@@@@A@A@@BAB@@@B@@@B@@A@@@@A@A@@@@BA@AA@@A@B@@@B@@@AA@@@@B@@@@@B@@@B@@A@@@@@@@@B@@@@@B@@@B@@@@@A@@@@A@@B@@@@@@@B@@BBAB@@@B@B@BAB@@@@@@@BA@AB@B@@@@AB@@AA@@ABA@@@A@@A@AA@@@A@@AA@A@@@@AA@@A@AA@@AC@@@@A@@@AA@@AA@@AA@@@AAAA@@A@@B@@A@@@@@CB@@A@A@@A@@ABA@A@A@@BA@@@@@A@@@@A@AAC@CC@@C@@@A@@@A@@@A@@@@A@@BA@@A@@@A@@@A@@@@@@A@@@CA@@A@@@BAB@@@@@@@BAA@@@@@ABAA@@@@@@@@@@@@AB@@@@A@@@A@@@A@A@@@@B@@@@@BA@@@@A@@@@A@@@@B@@@@B@@B@B@@@@@@AB@@@@@BA@@AAA@@A@@@@AA@@@@@@@A@@@@AA@@@@BA@AB@@AB@@@@BB@@@@@@B@@@@B@@@@@@@@@B@@B@@@@@@B@@@@@@@@@@AAA@@B@@@B@@B@@@BB@@B@@B@@A@@@@@A@@@A@@CAAAA@@A@@@@BAB@@@@@CCAAA@AAA@A@A@AA@@@@@@@C@@A@@@@@@A@@AAC@CA@@@@@@A@@@C@AAA@C@AAA@@@A@A@@@@A@AA@@@AAAA@@A@AAA@@A@@AB@@AAA@@AA@AA@AAAAA@@@AA@@@@@AA@A@@@A@@AAA@AAA@@@A@@@@AA@@@@@A@A@ABA@@B@@A@C@B@@BA@@@A@@@AD@@@@@@A@@A@@@A@@@A@@@@A@@@ABAA@@@@@@A@@@@@@@B@BA@@@AB@B@AA@@@@@@A@@@@@CB@B@BA@A@@BA@C@AAA@A@A@@AA@@@A@A@A@@@C@@@A@@A@@@@ABA@A@@BAA@@AB@@A@A@@@@@AA@AA@@@@@A@@@@@AB@@@BB@@@A@@B@AC@@@@@AA@@A@@@AA@@A@A@@@A@@@@A@@@AA@A@@@A@BAB@@BB@@@B@@@@@@@@@B@@@B@AA@@@A@@@A@@@AA@@@@@B@@@AA@@A@@@@A@@@ABA@@@@@A@A@@@A@@A@@@@AB@@AAAA@@A@@@AB@@@@@@@@@@A@@@@@A@@@@@@B@@AAA@@@A@@@@@@AA@@@@@AB@@@@@@@@@@B@@@@@ABA@@@@@A@@@@A@A@B@@@@AA@@A@@@A@@AA@@AB@@A@@@@@@A@A@@@@@A@@@@A@@A@@@@A@@@B@@AA@@@@@ADA@@@BA@A@@@BA@@@@A@@@@@AB@@@@@@@@@B@AA@@AB@@A@AB@@A@@@@A@@B@@@@@A@@AA@AA@@@@@@@@@@A@@@@@AB@AC@@@@@@@BAB@@@BA@@@@@@@@@@ABA@@@@@@A@@@@@@@B@@A@@@A@@@A@@A@@@@@@A@@@@@@@A@@@@AB@A@@@AAA@A@CB@@@B@BDBBB@B@HAFQBA@A@CB@@A@ADA@AD@B@B@D@@AD@@@@@DAB@@AB@DABA@@@A@A@AAA@@@@AA@C@A@@BA@@@AB@@AA@AABCA@@@@B@@@BAB@@@@@B@@@@@B@@@@@@B@AB@@ABB@@@A@@@@ACAC@@@@AB@@@BABA@AAAA@@@@@AAA@@@B@@@@@A@@@AA@@@ABAB@@@AA@@A@@@A@@@@@A@@A@@@@BAA@@A@@BA@AA@@@@@@@@@@A@@@A@@@@A"],"encodeOffsets":[[120814,29084]]}}],"UTF8Encoding":true});}));