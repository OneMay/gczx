(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('青冈县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"231223","properties":{"name":"青冈县","cp":[126.099195,46.70391],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@A@@B@@@BB@B@@B@@@B@@A@@BA@B@@@B@@@@B@B@@A@A@@@AB@BB@A@@@A@@A@@ABA@AAA@ABA@@@AA@A@A@@@A@@@@@@A@A@ADA@@@@@AA@@@@AB@B@B@B@@A@A@@AAA@A@@@@@AA@@@@AB@@@@@A@@B@DA@@@@BA@@@@A@@@@@A@A@@A@@A@@B@@@@AA@@@A@@B@BA@@@@@A@@@A@@A@@@A@@@A@BABABAB@@@BBBA@@@A@@@@@@B@@@@@B@@@BA@AA@A@A@A@@BA@@@@A@@BA@@B@B@@@B@@ABB@@@@BB@A@@@AA@A@AAA@@@@A@@B@B@B@@@@A@@BA@@B@B@B@@@B@@@B@@@AA@@@A@@AA@@@@BA@@@@@AA@B@@@@AA@A@A@@AA@BA@A@AB@@@@BB@B@B@@@@@@AAAA@@A@@B@B@@@B@@@B@BAB@@AA@@@BA@BB@BB@@B@@@@A@@@A@@BAB@B@BBB@@@@AB@@@B@@@@BB@@@BA@@B@@@B@A@@B@@B@@@@@BA@@@@BB@@@@B@BBB@@@B@@B@@B@@@BA@@B@B@@@@B@@@@ABA@@@@B@@@@@@D@@@@@AB@@B@@@B@BA@@BA@@BAB@@B@@BB@@B@@@@@@@@A@@@A@@DADAB@@A@@AAA@@ABA@@B@@@@A@@A@@AB@B@B@B@B@B@@@@A@@@AA@@A@@AA@A@E@ABA@ABAB@@B@A@@@@AAA@@AB@B@B@@@@A@@BAB@@AB@B@@@B@@@BA@A@C@AA@A@@BA@AB@@A@@A@@@@BAB@@AA@@AB@@@BB@@BB@@B@@A@@@@AA@@BA@@BAD@B@@A@@@AA@AA@@@@D@B@B@B@D@DBBAB@BC@A@@AA@A@@@ABABAB@FB@A@@@A@CCCCEAGCCCEEIACEC@A@@A@A@@A@@@@@@@@@@@@@@@@A@@@A@@@A@A@@A@@@BA@@@A@@@@A@@A@AA@@A@A@@@@@@@A@@@@@AA@@A@@@@@A@AAA@@@A@@@@@AA@@A@AAA@@AA@AA@@A@@@@@@A@@A@@@AA@@A@A@@@A@@@A@A@A@A@@@@AA@@@AA@@A@ABA@A@A@CAA@@@A@@@@@@A@@@@BABAB@@@@C@@AA@@@@A@@@@@A@C@A@A@@@@AA@@@@@@@A@@@@BA@A@@AA@@@A@@@@@A@@@A@@@A@@@@@AAA@@@@@A@@@@@A@@@@@A@@@A@@@A@@@A@@@A@A@AA@@A@A@@@A@A@@BC@@@A@AA@@@@A@@@@@AA@@A@@AA@@@A@AA@@A@@@A@@@A@@@@@A@@@@@A@A@@AA@A@A@A@@@A@@@A@C@@@A@@@AAA@A@ABA@A@@@@@A@@@@@A@A@@@A@A@A@A@A@A@@@A@EB@@A@E@A@C@A@A@A@A@A@@@A@@@A@A@C@A@A@A@A@A@A@A@A@@@A@@@A@A@A@A@A@@@A@@AA@E@A@C@E@@@@@E@A@A@C@C@A@@@A@A@A@C@A@CAA@@@A@E@@@A@AA@@A@A@A@@@AAA@A@A@AA@@A@C@@AA@@@A@@AA@A@A@@@CA@@C@@@@@C@@@AA@@@@A@@@E@C@AAC@C@C@A@ADCDABCBABABEDEDCDABIFEDABAB@@@@A@@B@@@@AB@@@BA@@B@@@@AB@@ADAB@@@BA@@@CBABA@@BCBABAB@BABA@CBABABABAB@BA@ABABABABA@ABAB@@ABABABCB@BA@@@AB@@ABABA@@BABA@@@@BA@AB@BABAB@@@@AB@@ABA@@BA@@BCBABCB@@A@@@CBA@ABABC@A@C@EBC@EBA@@@A@@@@@A@A@@@ABA@C@CBA@A@A@A@EBA@AB@@@@A@@@@@ABA@ABCBA@ABABA@ABA@@@A@@BC@ABCBABCBABEBABAB@@CBA@ABA@ABC@@BA@CBABA@AB@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@D@BABAH@B@BA@@BA@@@@BAFA@@@ABA@@B@@@BEFGJA@GHCDA@IFCBEDBBBBDBDDBBDDDBBDDBBB@@CL@@@@ABE@CB@@@@@@CACC@@@@CACCCAAACCA@AACA@@CCA@CDCBEDCBCDC@ABAB@BABCFAB@@ABHB@@A@EDID@BGAC@A@IHA@ABEDABABIHMJEDCDCDCBCBEDCBEFA@EDCDGDIDCBKFIBABGDA@@@CBA@EBA@A@CBGBKFGDA@ABC@A@C@@@ABABCBA@IFIDABCBCBEBEDEDABEDADCBCFABKLABABABEFAB@B@@@@@@@B@@@@ABA@@B@@A@@BA@@@@@@BA@@@@@@BA@@@@BA@@@@B@@A@@@@BA@@@@@AB@@@BA@@@ABA@@@ABA@@B@@A@@B@@@@@@A@@@@@AB@BCBA@@BA@@BABABABABA@AB@@AB@@CBAB@@ABABA@ABAB@@@@A@@DA@AB@B@@@@AB@A@@@@A@ADABEFABEFABCBABCBCBGBABGDCBEBEBGDCBGDGDEBEDGDCBC@CDEBGDCBEBEBEDA@CBA@EDEBGBGDC@ABCBCDCB@@@@@@@@A@@@ABA@A@A@@BA@A@@@ABC@@@A@ABA@@@A@AB@@A@@@ABC@@BC@ABCBABABA@ABA@A@CDEDGFCBCDEDIFCBABABCBCBKFGFEBCDEBCDGDGDEDEDEBABA@@BA@CBaTGAICAB@@CDCBABKFIFADEBKJA@CBGFEDEDCBMJWPBD@HDDOJGFIFKHCDABA@EDED@@@@@@@@@@@@@BAB@@@B@BAB@B@@@B@BAB@B@@@BAD@BAB@D@DAB@DAB@B@DABA@A@A@EBE@GBIBG@E@ABA@[DBH@@@@@@A@@@@@@@@@@B@@B@@F@L@BMHIFGFKHGD@B@@B@@@@@D@D@D@N@F@D@D@F@B@B@@@B@B@D@B@D@N@F@D@B@B@F@N@B@@@B@B@B@B@B@B@D@B@F@L@L@D@H@H@F@D@D@F@T@B@D@H@F@L@B@F@B@B@H@H@D@B@D@H@P@d@`@B@@@@@B@D@B@D@F@H@H@H@N@L@J@R@H@J@LBF@J@J@HBF@J@J@J@HBP@PBR@TBR@LBP@H@RBP@LBJ@L@J@HBB@F@H@L@FB@@L@PBB@@@H@F@F@B@B@@@CJ@B@BF@D@D@NBN@L@D@B@B@D@F@D@F@FBFBF@H@B@@@@@BCBC@AB@BAB@B@D@H@@@DBB@D@D@D@D@D@DBF@D@B@F@D@FBB@B@D@D@D@B@F@LBPBN@NBL@NBL@H@N@HBJ@L@J@H@L@J@@@H@D@F@@BB@@@B@@@@@B@@@@@@@B@B@B@B@D@BBB@D@B@BB@@B@@@@@@@DBFBBBCJAF@@B@@@@@B@B@B@B@@@B@B@B@@AB@@@B@@@D@@@B@B@@@D@BAB@B@B@@@@@BB@@@@@B@B@B@@@B@@@B@BA@@@@B@@@B@BA@@B@@@B@@@@@BA@@B@@AB@B@@AB@@AB@@@BABABAB@@@B@BABABABB@D@D@B@B@D@D@@@B@B@HBD@@@B@D@B@B@@@@@B@D@DBB@D@D@D@B@@@B@@@B@D@B@BBD@B@B@@@B@B@D@@@@@B@@@D@@B@@B@D@B@B@D@B@D@BBB@B@B@B@@@B@B@B@B@B@BB@@B@@@B@B@B@B@BB@@B@B@@@B@B@@BB@B@B@B@@@B@B@@BD@B@BBB@@@D@B@@B@@DA@@@BB@@@D@@BD@B@B@B@B@BB@@@@B@@@@@@@@@@@@@B@@@@@B@@@@@B@@@@A@@B@@@@@BB@BB@@@@@B@@@@@@@@B@@@@@@@@@@@B@@B@B@@BB@@@@@B@@@@@@AB@@@@@B@@@@B@@B@@@@@@@@@@@BA@@@@B@F@BBD@D@B@F@F@D@B@B@B@@BB@@@B@@@B@@@B@B@B@@@@@B@B@B@B@@@B@@@B@BBB@B@@@B@DB@@@@B@@@@@BBB@@@B@@@@B@@@@@@@@@@B@@AB@@@@A@@@@@@@AB@@@BA@@B@@@@@B@@@@@@@@@@@@B@@@@@B@@@@@@@BB@@@@@BB@@B@D@B@D@D@F@BB@@BA@@@@@@@@B@@@B@B@D@B@FBD@B@D@B@B@D@B@@@@@@@@@@B@@@@B@@@@@@@BBB@B@@@BBB@B@@@B@@@B@B@B@BAD@@@@@@BB@@@@@B@B@D@D@@@@@B@@@@@@@F@B@B@@@@@@B@@@@@@@@B@B@F@B@DAD@B@B@B@@@B@@@@@@@@B@@@B@@@@B@@@B@B@@@@BB@@@@@B@@@D@@@B@@@@@B@@@@B@@@@BB@@B@@@B@B@B@@AB@@@B@B@DBD@B@F@FB@@DARBPBHBB@F@F@B@@AB@B@BB@@BA@@@@@A@A@@ABC@@@@A@@@@AAAB@AA@@B@@A@@@A@@A@@@AD@@AB@@A@A@@@@D@BAB@@@A@@@@AB@DB@@B@@@B@@@AAC@@A@@B@@@BAA@@@A@@@@@BA@@@@AA@@@@AB@@@A@@@AB@@@A@@A@@@@B@@@@CBAB@A@@AA@A@C@@@@@A@@BA@A@@@C@AAA@@@@A@@DA@@@@AAA@@AB@D@BABA@@BEAA@@AAA@@A@AAA@@@AA@EAA@@B@@A@@@@B@AA@BAA@@A@@A@@@@@A@@B@@A@@@@@@A@AAB@@@@@B@@A@A@@A@@@@@C@@CA@@B@@AB@B@D@@@@@B@@A@@A@@@@AB@@@BBB@@@B@@@@@@AC@@@A@@A@@B@@@@@@AAAA@@B@@@@BBA@@@A@@A@A@@A@A@AAA@AA@@@@@A@@@@AAA@@@@ABAB@@@A@@@C@@@@AB@B@@@@@@@CC@@ABABC@@@@@@A@ACAA@@@@@@AA@@@@@@@A@@@A@@@@@@@@@A@@B@@@@@@A@@A@@@@BA@@@@@@@A@@@A@@@A@@@@@@@A@@@@A@AB@@A@@@AA@@A@@@@@@A@@B@@@B@@@BA@@B@@@B@@@@@@@BA@@@@@A@@@@@@B@@@B@@@B@@@@A@@@@@A@@A@@@@@@@A@@@@A@@@@@@BA@@@@@@B@BB@A@@B@B@@@@@A@@ABA@@B@@@@@B@B@@@@@@A@@@A@BA@@@A@@A@@AA@@D@@@BA@@A@@@A@@A@BA@A@@@@@A@@A@@@@A@AA@@@@A@@@AB@@@@@A@@A@@A@@@@@A@@@@@@A@@@@@@@A@@@@@@@@@A@@@@@@@@@AA@@@@A@@A@@B@@@B@@A@@@@@@@A@@@@B@@@@@BB@@B@@@@@B@@@B@@@@@B@@A@@B@@@@@B@@A@@@@@@B@@BB@@@@@@A@@@A@@@A@@@@@A@@A@@@A@BA@@@AB@BA@CA@@A@@@@@@B@BB@@BB@A@@@@@A@@CA@@A@AA@@B@@@@AA@@@@@D@@@@A@@@ABA@@@@A@AA@BA@A@@@@@BA@@@A@@@@A@A@@@@AB@B@B@@@@AA@@@B@F@@@@@@B@@@@B@@@@@@A@AA@AA@@B@B@@@B@@@@A@@@@A@A@@@A@AA@A@@DA@@@A@@@@A@AB@A@@B@DAB@B@B@@@BA@@BB@AB@B@@A@A@@B@@B@@@B@@@@B@B@@@@@BAB@BB@@@@BBB@@@BA@@@@AAAA@A@@A@C@@@@@@AB@B@B@@@@@@@@AB@@AAA@A@@CAA@A@C@A@@B@@A@@@@A@@BA@@@@@@@A@@B@@@B@@A@@@@@@@@@@AA@@@@A@@A@@A@@@C@@@@@A@@@@BA@@@@@@@A@@@@@@@@A@@@A@@A@@A@@@@A@@@@@AB@@@B@@@@A@@@@@A@@@@@@@@@@@@@@AB@@@@@@A@@@@@@@@A@@@AA@@A@A@@@@@A@@B@A@@@@A@@@@@@@@@AB@@@@@@@A@@@@A@@@@@@@@B@@A@@@@@@@@@AA@@@@@AA@@@@AA@@@@@A@@@A@@BA@@@@@A@@@@@@AA@@@@@@A@@@@@AB@@@@@@A@@@A@@@@@A@@B@@@@@BAB@@@@A@@A@@A@@@@AAEC@@@@A@@@@@@B@@A@@@@@@@A@@@@@A@@@@A@@AA@@@@AB@@@@A@@@@@@@@A@@@@@AB@@AB@@AB@@AB@@@@A@@@@@@A@@@A@A@@@@@@@A@@@@@@AABA@A@@AA@@A@@@A@@AAA@@@@@A@@@@@@A@@A@@@A@@@@@@AD@DADABA@@B@@@AB@@@@B@BB@@B@@@@@@@@@@@B@@B@@@@@@@@@@@@@@@@@@@A@@@@@@@A@@@@@@@@@@@@B@@@@@@BB@@@@B@@@@@@@@@B@@B@@@B@@@@@@A@@B@@@@@@AB@@@@@@@@@@@A@@@@A@@@@@@@@A@@A@@@B@@A@@@@@@@A@@@@@@@@@@@BA@@@@@@@@@@@@@@@@@@@@AA@@@@A@@@@@@@@@@A@@@@@@@@@A@@@@@@@@@@@A@@@@@@A@@@@@@B@@A@@@@@A@@@@@@@@@@B@@@@@@@@@BA@@@@A@@A@@@@@@@@A@@B@@@@@@A@@@@A@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@A@@A@@@@@@@@A@@A@@@@A@@@@@A@@@@@@@@@@@@@@@A@@AB@@@@@@A@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@A@@A@@@@@@@@@@@@@@AB@@@@@B@@@A@@A@@@@A@@@A@AB@@ABAA@@A@AAA@A@@@A@AB@@A@@@@A@@@@BABA@@BA@@A@@@A@@BA@A@@@@@@A@A@@A@@AAA@@@A@@C@@@A@@@@B@@A@A@A@AAAAA@A@@@AA@@B@BABA@A@A@@CAA@@A@@B@DA@@@AA@@@ABA@@@@A@@@A@@@A@A@@@@BAB@@@@@BB@@B@B@BA@A@AAA@AB@@AB@B@@@A@AA@@@A@AA@AA@@AA@@A@@@A@@A@@@A@@A@AB@AA@@@@AA@@A@@AA@@A@@A@@AAAAC@@A@AA@A@AA@@@CCCAC@AA@@A@A@A@@@A@@@@@A@@@AA@@A@@@@AA@@@@@@@@@@@B@@@@@@@@@@@BB@@@@@AB@@@@@@A@@@@@@@@B@@@@@@@@A@@@@A@@@@@@A@@@@@@@A@@@@@@@A@A@@@@A@@@@A@@A@@@@B@@@@@B@@@@B@@@@@A@@@@@@@@@@AA@@@@@@@@@@@@@A@@@@@@@@A@@@@@A@@@@@@@A@@@AA@@@A@@@@@A@@@@B@@A@@@@@@B@@A@@@@BA@@@@B@B@@AB@@@@@@@@@@@AA@@@@@@@@@@B@@@@@AA@@@@@@@@@@@AA@@B@@@@@@@@@@@A@@@@@@B@@@B@@@@@B@@A@@A@@@@@A@@@@@@@A@@@@@@@@@@@@@@@@@BA@@@@B@@@@@@@B@@@@B@@@@@@B@@@@@@A@@B@@@@@AA@@A@@@@A@@B@@AB@@AA@CE@AA@A@A@A@@A@@@AD@@AB@@A@A@@A@A@AB@@A@@@@A@@B@BAB@D@@@B@@A@@@AAA@A@@ABA@@BA@@A@@@AB@B@@@DAB@BBBAB@@@@AA@@@CB@@A@@A@@A@@@A@@@A@@A@A@ABAA@@@A@@A@@@ABA@AB@B@BA@@@AA@@@@AB@@@AA@@A@A@@@@A@@B@DAB@BAB@@@D@@@BA@A@@@A@A@@B@B@@@@A@@A@A@@A@@@@BAB@B@@@BA@@A@A@A@A@A@@AB@@A@@@@@@@@CA@@@@@@@A@@B@B@B@@@@@@AA@A@@@@@@@@AB@BB@@B@BBB@@@@@@AA@A@@A@@@@@AB@B@@@@@B@@BB@@@BA@@@AA@@A@A@@@@@@B@@@@@B@B@@@@@@AA@@A@@@@B@B@B@@@@@BA@@@AD@B@@@@A@@@AAA@A@@@AB@@@A@@AA@@@@@BA@@@AA@@@@A@@@@@A@@@@@AA@A@AA@@@AB@D@B@B@@@@@@@CAA@A@@@BA@@DA@A@@A@@@A@@@A@@@@A@@@@@A@@@A@@DBB@BA@@@A@@A@@@@@A@A@@@@AA@@@AB@@@@A@@@A@B@@A@@@A@@@AB@@@B@BB@@@@@B@@@@B@@A@@B@BA@@@@@@A@@AA@@@A@@@@@@@@@@@@A@@@@@@@@A@@@@@@@A@@@BA@@B@@AB@B@BBBA@@@@@@@AA@@@@@B@BA@@B@B@@A@@BA@@@AA@@@AB@@A@@@@@@@@@@@@ABAB@@A@@B@@@A@@@A@@@A@@@@@@@BAB@B@@AB@@@@@A@@@A@@@@A@@@@B@@@B@@@B@@@BA@@A@@@@@A@@@A@@@@@@AB@@@@AA@@A@@@@@A@@@@B@@B@@B@@A@@@@@@AA@@@@@@DCB@@@B@@B@@A@@B@@@@@@@@B@@@B@@A@AA@@A@@@@B@@BB@@BB@@@@A@@@@@A@@@@@@B@@A@@@@@@@AA@B@@@@@BB@@@BB@@@B@@@@AA@@A@@@@B@@A@@B@@A@@B@B@@@@@@@@@@@AA@@A@B@@@B@B@@BB@BB@@@@B@@@@A@A@@@AA@@@@A@@@@@@B@@@B@B@@@@@@@B@A@@A@@@@@@@@@@@@A@AA@B@@@@A@@@@@A@@A@@@@@@B@B@@A@@@@B@@@@@@@@AA@@@@A@@@AA@@@B@@@@@@AB@@@@@BB@@BA@@B@@@@@B@@B@@B@@@@@@@@@@@@A@@@@B@@@B@@@@@@@@AA@@@@@@@@@@@B@B@BB@@@@@@B@AA@@@@A@@AB@@@B@@@@@B@@@@@@@B@@@@B@@@@@BB@@@@@B@@@B@@@DA@@@ABA@@AA@@@@BAD@@@@AB@@AA@AB@@A@BA@A@@A@@@@@@AB@@A@@C@AAEAA@A@BA@@@A@@@@@@A@@@@B@@A@@AB@@A@@B@@@@@@@BA@@@@@@A@@@@AB@@@@@@@A@CAAB@@@A@@@@B@@@@@@A@@@@@@@@@A@@@@A@@A@@@@B@@A@@@@B@@@@@B@@A@A@@@@B@@@@@@@@@AA@@A@@@A@@@@@@@@@BA@@@@@A@A@@AA@AA@@A@@B@@@B@@@@@AA@@@@BA@@B@@@B@@BB@BA@@@@B@@@@@@@A@@A@@@@@@B@@@B@@@@@@@@@@AA@@@@@B@@@@@B@@BB@@@@B@@@@@A@@@@@A@@@@B@@@@@@A@@AAA@@@@@@@B@@A@@B@@@@A@@@@@@AA@B@@@@@@A@@@@A@@@@@A@@@@A@@@@@@@@@@AA@@@@@@@@A@@@@B@@@@@B@@@@B@@B@@@@@@A@@@@AAA@@@@@@A@@B@@@@@@@@A@@BA@@BAB@B@B@@@@@@A@@C@@AA@@@@AB@@A@@@@@A@@B@@@@@@@@@AA@@@@B@BA@@@@B@BB@@@A@@A@@AA@A@@@@@@@B@@AB@A@@A@@@A@@B@BB@@B@@@B@@@@@@@@A@@@@@@@@AA@@@@@@@A@@@@BA@@@@@AB@@@B@@@B@B@@@B@@@A@@@@@AAA@@@@@@@@A@@B@@A@@@@B@@@@@@@@@BB@@@@@@@@@AB@@@@@B@BB@@B@@@@A@@@@@@A@@@A@@@AA@@@@@@@A@@@@B@@@B@@@@A@@@@@@@@A@@@@@@@@@@@@AB@@@@@B@@@@@@B@@@B@@@@B@@@B@@@@A@@@@@@@@A@@@@@@A@@@@@@@@@AA@@@BA@@@@@@B@@@@@@@@@@@B@@@@@@@B@@@B@@@B@@@@@@@@A@@@@@@@@B@@@B@@@@@@@@@@BA@@@B@@@@@@@B@@@@@@@@@B@@@@@@@@@@A@@@@@@@@BB@B@@B@@@@B@@@@BA@@@@BA@@@@@@B@@@@@@@@@BB@@@@@@@@@A@@@@B@@@@@@@BB@@@@@@@A@@B@@@@@@@B@@@@@@@@@@A@AAAA@A@@A@@BAB@@A@@@@@AA@A@A@@@A@@@@@@A@@@@@A@@B@@A@@@@@@@AA@@@@@@@@@AB@@@@@@C@@BA@@@@@AA@@B@@A@@@@@A@@@@AA@@@@@@@@@AB@@@B@@@@A@@AA@@@@@AB@@@@@BA@@@@@@@A@A@@@AA@@@@@BA@@@@@@@@@AB@@@@@@AB@@@@@@@@AA@@@@B@@AB@@@@@@A@@A@@@A@@@@@@@@@@AB@@@@@A@@@@@@@A@@A@@@@@@A@@@@@AA@@@@@@@B@@@B@B@BA@@@@@@@@@@A@@@A@@@A@A@@@A@@A@@@@B@@AA@@@A@@@@@@@@@@@@@@@@BAA@@@@@@@A@@@AA@@@@@@B@@A@@A@@@@@@@@@ABB@A@@B@@A@@@@B@@@@A@@@@@@@@@A@@A@@@@A@@@@@@A@@@@@BA@@@@B@@@B@@@@@@A@@@@@@@A@@@@@@@@@@A@@@@@@@@@@A@@@@@@A@@@@@@@A@@@@B@@@@AA@@@@@@@@BA@@@@B@BAB@BA@C@ABCB@@@B@B@BA@@@A@@@AA@@AB@@@@AAABCAAB@@A@A@@BAB@@@BBB@D@B@@AAA@@@@BA@@@@C@@@@A@@@AA@AB@A@@@@B@BAB@@@@@AA@@@ABBB@B@B@@A@@"],"encodeOffsets":[[129320,47756]]}}],"UTF8Encoding":true});}));