(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('广安区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"511602","properties":{"name":"广安区","cp":[106.641662,30.473913],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@E@A@CB@@AB@@@B@B@@@B@B@BAB@B@@ABA@@@ABAA@@A@AC@AAA@@AA@@A@A@@@@B@@@D@B@BAB@BCHINCD@B@D@DBBBD@BA@@BEBCDCBABCDCBC@CBCBA@@@AB@@AFABCB@DAB@@@BBBBBBB@B@BBDDBBBDB@B@BBF@B@BADABABCB@B@B@B@@BBDBBBBB@D@BABCDGDA@AB@BBBDDBBBDDBBB@DB@B@BBB@FDB@@B@B@B@F@B@BB@@BB@F@D@B@D@DBBBDD@@@B@BBB@@BBBB@@@BADAB@DABCDA@@BCD@B@@@B@B@@A@AB@BA@AAEBA@EBCH@@CDCDA@ABA@CA@@A@A@GJBBJDFBBB@B@@@D@HAFBDBDDDDBDBB@BDBDABAHAD@D@BBD@B@BA@AB@BA@A@ABAB@DA@CB@BAD@B@D@BBBFDFDPJ@@@B@BA@@BBFDBDDDDBB@B@B@BB@BBBADBD@B@FBHBB@DB@B@@@DABADAB@B@B@BCD@BBD@BBD@BC@ADC@@B@F@B@D@BADADAB@B@BBBBDFBFBB@BB@BAD@BABA@ABA@AB@BA@A@@@AAA@C@A@AD@HDH@@BBD@B@D@B@DBB@DBBBDBBD@B@B@H@BBB@BBDBB@B@DAB@B@BBD@BAB@@C@ABA@AB@BCFADABADAD@BBHBBBDBF@B@B@@@@@B@BBB@B@BAFAD@B@B@@@@FHBB@B@@@B@@@@A@@B@@@B@BB@@@B@@@@B@@BD@@@B@@@@ABAHIRBD@BBBBBJB@@B@@@D@BBD@BBB@H@D@DBPFLDBB@B@D@B@DBDBD@DBFBDBBBDBD@B@BADCBABABABADABABABAD@D@B@@@B@D@B@BBBBF@BBD@D@B@B@BCBAD@BBBB@B@F@DADADEDC@@HBHDB@@BDDFDDDD@DBJCF@FAB@B@BDB@BBB@DDB@BB@@@B@@@BAB@BA@BB@B@@B@B@D@DABA@@B@@@B@@@@@B@@@@@@AB@@@@@@A@@B@BE@@BA@@@@@A@@@@B@@@@AB@@A@@B@@@@@@@B@@@@@@@B@@@@@@@B@@@DB@@@BB@@@@@@@B@@@@@B@@@@@B@FA@@@@@@@@B@@@B@@@@@B@@@@@@@B@@B@@B@HFB@@BB@@@@@B@@@@@@@B@@@@@B@B@D@BAJ@B@@@BA@@@@B@@@@@@@BA@@B@@@@@@@B@@@@@B@@@@@B@B@B@@@B@@@@@@@B@@@@@@@@AB@@@@@@A@@BA@A@@@@@A@@@@@@@A@@@@@@A@@A@@@@@@A@@A@@@@@A@@@@@@@A@@@@@@@A@@@@@@@ADEDEBA@@BCBC@AB@@A@@@@@@B@@A@@@@B@@@@@@@B@@@@@@@@BB@@@@B@@@@B@@@@@@@@BB@@@B@@@@@@@B@@B@@@@B@@@@@@A@@B@@@@@@@B@@@@@B@B@@@@@B@@@@@B@@@BAB@@@@@B@@@@@@@B@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@@A@@A@@CCAA@@@A@@@@@@@@@A@@@@@@@A@@@@@ADC@A@@@@@@@@@A@@@@B@@@@AB@@@@@B@@@B@@@@@@@B@@@@@@@@AB@@@@A@@@@@@@@BA@@@@@@B@@@@@B@@BF@B@B@@@@@B@@@@@B@@@@@@@B@@@@@@AB@DCBA@@B@@A@@B@@@@@B@@@@@BAB@@@B@@@@@B@@@@A@@@@B@@@@A@@@@BC@@@@BA@@@@@@@@@@B@@A@@B@@BB@@@@@@@B@@@@AB@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@B@@B@@B@@@@@@@@@B@@@@@B@@@DAD@DCBABCBA@A@AAC@A@A@AACAABAB@BBD@DBF@@@@@B@@@@A@@B@@A@@@@@@B@@@@@B@@@@@B@@A@@B@@@@@B@BA@@@@@@BA@@@@@@B@@@B@@@B@HAB@@@B@@@@@@@B@@@@A@@@@@@@@@@@A@@A@@@@@@@A@@A@@A@@@@@@@A@@A@A@A@@BAB@@ABABC@ABABAB@B@BA@@BA@AB@DC@@B@BAB@@AB@@@@@B@@@B@B@@@@@BB@@B@@@B@@@@@B@@@@ABABABAB@@ABBDA@@B@@AB@@@@@@@@BB@@@@@@@B@@@@@@@@@@@BBB@@B@BB@@@B@@@B@@@B@@@@@@B@@@@B@@@@A@@B@@BB@@@@B@A@A@A@@@@B@BA@@@@@@@@BB@@@@B@@@@@B@@AB@B@@@@@@@B@@B@@BAB@B@@ADA@A@@@A@@@AAA@@A@A@@A@A@@BAB@BA@@@A@@AA@@AAA@@ABA@ABA@@BA@@@AB@@BB@B@B@@@@AB@@@@@@@BB@@@@AB@@@@B@B@@AB@@A@AA@@@@@B@D@@B@@B@@B@@@B@@@@BB@@@@@@@@@@BB@@@@@AB@@@@@@@@@BA@@DCBABA@@@@B@@A@@@@@@B@@@@@B@@@@@@@@@@@@@@AA@@@@@@A@@@@@@@@@@@@@@@@B@B@@@@@@@B@@@@AB@@@@@BA@@@@B@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@AB@@A@@@@@@@@@B@@@@@@@@@@B@@@BA@@@@B@@@@@B@@@@@B@@@@@B@@@@@@@@@B@@@@A@@@@@@@@@A@@@@@@@@@@@AB@@B@@@@B@@@B@@@@@B@@@@B@@@@B@@@@B@@BB@@@@@@@@BB@@@@@@B@BBB@@@@@@@B@@@@@@@@@@@@@AA@@@A@@@@@@@@@@BA@@@@@@B@B@@@@@B@@@@@@@B@@@@@B@@@B@@@@@@@B@B@@@@@B@@@@B@@B@@@@@@@BB@@@@B@@B@@@@B@@@@@B@@@@@@AB@@@@@@@@@B@@A@@@@B@@@B@@@@@B@@@@@@@@@@@@A@@A@@@@AACAACECE@A@@@@AA@@@@@@@@AA@@ECCC@@AA@@@@@@A@@A@@A@GCA@@A@@A@@@@@@@A@@@@@A@@@@@A@@@@@@@A@@@@@A@@@@BA@EDED@@AB@@@@@@@@A@@B@@@@@BA@CHAB@@@@@BA@@@@@@@@BA@@@ABABA@@@@B@@A@@@@@@@A@@@@@A@@@A@A@@@A@@@@@@@A@@@@@A@@A@@EACCA@@@@@@A@@A@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@@@ADG@@@A@@@@B@@A@@@@BA@@@@HGFEBG@CBABOBEB@@A@@BA@@@@@@@@B@@AB@@@BA@@@@@@B@@@@A@@B@@@B@FAF@FA@@B@@@@@@AB@@@@@@@@@@A@@@@BA@@@@@A@@EAIAGAC@C@E@CAAAME@@EAEACCCECCAC@ABA@CBA@A@AAAAACCCAECACCCACEKAECGAOCM@CAAAAC@AAA@E@EBCBIBCAA@CAEAACAEAM@E@CBEBC@A@A@AAACACAE@C@C@C@ABADCFABADCJABCDABA@IDIDE@CBABABAB@B@@@BBDBDDF@BDFBDBF@D@FADABABCBGDEBA@C@A@AAA@C@CAACAAAAAAAAA@GCICCCCAA@ACA@ACAA@@ACACACBC@C@ADCFGDI@@DGBEBE@A@E@CAC@AAAA@AAA@G@KBM@K@CBC@I@A@E@AAACCG@A@@@@CGAEEKCGCAAAAAC@@@GAEAC@EAMCGCIEAACAC@C@E@CAEBE@E@E@A@C@A@A@AAA@@AAABC@CBCJGHCBABC@@BC@A@A@A@CAACEAACCCAEAAAAC@AACAAA@@A@AA@BA@@BAB@D@B@@@B@@@B@DBDBD@BBB@DAHADCHCDA@@DAB@B@@@BABABADC@ADCBCDCDAB@BABAD@DBB@D@BBBB@BBD@D@F@B@BDD@BDFDDBBFBD@DAB@@@FADCBAHGROA@@ABABCBA@@@E@@ACA@AAAAME@@A@EAEAC@EAEAAACC@@AABA@@@@BCDCFCHCFAJADABAB@B@BA@A@A@A@A@AEGA@ACCE@AEACAE@E@EBC@CBC@ECEAAACCACACAA@A@A@A@A@A@ABA@A@A@@@AAAEEGA@@C@A@A@C@C@@@ABABABBD@B@B@DADCFEFABA@C@GAAAAAAA@@@ABALMFC@CAC@A@I@EAEAC@ECECAA@IBEBEFCDEHCHCHCHEDG@ICGECCAAACACAC@A@C@A@E@@AA@@EBEBEBABC@ABCBABA@A@A@EBKDC@"],"encodeOffsets":[[109149,31097]]}}],"UTF8Encoding":true});}));