(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('抚松县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"220621","properties":{"name":"抚松县","cp":[127.449763,42.221207],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@FCFABABABABA\\SkMSGDIXSp[HEAAACNCB@@A@@@AACAGBAACB@@ABAB@B@@AAAAA@A@A@CAA@AAA@ABCB@BA@@BAHAAC@A@A@A@@@A@ABAB@DC@ABA@C@C@CAEA@@AA@@BA@AB@BA@CBA@A@C@C@A@AAAAA@G@A@AB@@AA@A@AA@AAA@@A@@@A@A@@BADA@@BE@A@ABA@CB@BAB@BABA@ABABABA@A@@@A@AB@@A@@@AA@@AACCC@@@@BA@ABAFEB@BCDEDE@@@CDCFC@@AA@@@@CA@@AA@@AAAAC@CACAC@AAAA@@AC@A@A@@@EBC@CAA@AACAAAAA@CAAACAAA@@CCCCAA@AAA@@@AAAAC@AAAA@@AA@A@A@A@EBA@@@ABA@A@A@A@AACBC@A@ABA@AAAAAAAAEAAAA@CAC@A@@ACAC@C@AAA@EA@@C@EAC@CACAA@AAACA@@AAC@BC@A@A@CAA@CAEAA@@AA@@A@A@@AAAA@ACC@AAACECCEECAEACAE@CA@@@@@@@@BABABABAFC@@BA@@AA@CACA@AAA@@AA@AA@AAC@AAA@AAAAAAAAA@A@AAA@@AAAA@@A@A@A@AAA@ACAA@A@AA@A@A@A@A@A@C@@@E@GBABA@A@A@@AAAAAEC@AA@@AA@AEAECCAACC@@AA@@A@ABA@ABAB@B@@A@@@C@ABEBCD@@A@AAA@C@A@CB@BAD@@ABA@C@E@C@I@A@E@A@A@@@@AACACACA@AA@C@A@AA@@@@@A@AACAAACACCEEAA@AA@AAA@CAECECABA@ABEDABABEFCBCDAB@BAB@@@DBB@BBDB@@BADAD@B@@A@A@E@C@C@AA@@C@A@CBE@ABA@A@AAA@A@A@A@C@A@CBCBCBGBGDEBCBCBA@ABADCDCD@BA@@@AACAC@A@@AE@C@ABC@CBCBA@A@C@A@A@CBGBEDEBIDGDEBABA@ABC@I@E@CBE@CBGBEBCBABABCDCFEFCHCBCDEDA@EBCBC@C@CAC@C@A@CBCBADA@A@A@A@AACAAAECEAAAA@A@A@A@ABA@A@A@ABA@@BAB@@CBA@ABABABAD@B@B@BA@A@C@CBA@A@CBGBCBEDCBA@@B@@BBB@BB@@BBBB@DBB@BAB@BA@@B@@A@@B@@@@@B@@@@@@@@@BA@@@@@@B@@@@B@A@@@@@AB@@@@@@BB@B@@@@@B@@@@@@@@@B@@@@@DBB@B@@@BA@@@AB@@A@A@A@A@@@AA@@A@@@@@@@@B@@@@@@BB@@@@B@@@@BB@@@BBB@@BB@B@@@@@@@B@D@B@@@B@@BA@@@AB@BAB@@AB@@A@ABA@AB@@@@A@@@@@AA@@@@@@@@@@@@@@AB@@@@A@@@@@@@BB@@BB@@@@@@@B@@@@@@ABA@@BA@@@A@@@A@@@@@@AA@@@@@@@AA@@@@@A@@A@@A@@A@A@@BA@@@@@@B@@@B@@@@@B@@@@@B@@@@@B@@@@@B@@@@@BA@@@A@A@@@A@A@A@@@A@AB@@A@@@BB@@@@B@@@B@B@BBB@@BB@@BA@@B@@E@A@@B@@@@@BA@@BC@C@E@C@C@E@AACBA@C@A@A@EAA@A@AA@@A@A@C@ABA@C@C@EBA@ABC@A@A@@@@@@@A@@@@@A@@@A@@@@@A@@@A@@@@@@@A@@@@@@@@@A@@@@B@@@@A@@@A@@@@BA@@@@@A@@B@@A@@@@@@@A@@@@@@@@@@@A@@@@@@A@@A@@@@@@@A@@@@@@@@@A@@@@@@@@@A@@@@BA@@@@@@@A@@B@@@@A@@@@@@@@@@@A@@@@@A@@@A@@@@A@@@@A@@@A@@@A@@@@@A@@@AA@@@@@@A@@@@BA@@@A@@@@@@@@@@@A@@@@@A@@@@@@B@BCDABCDABABCBEDEBEBEBCBCBGBEBCBAB@BBB@BBDBD@B@@@BC@ABCBAB@B@B@B@B@@@@BBBBBBB@@BB@@BA@@BBB@D@@BBB@B@B@BB@@@@BB@B@BBBB@BB@BBB@B@B@BBB@B@B@BABAB@BC@AB@@ABAB@@CDADAB@BAB@D@B@BAF@B@B@@@BB@DBDBBB@@ABB@@BBD@BAB@D@DAD@D@B@B@@BB@@B@@BBBBD@@@BAB@@AD@B@@@DBB@BB@BBBB@B@@@B@BAFABAB@BABA@A@AB@B@@@DAB@@@BAB@@AB@@@@@B@B@@@B@@AD@DAD@BAB@BA@@DABAB@BABABABABAB@BAB@BABCBAB@BEBABADA@A@C@CBC@C@A@C@C@C@EBC@GAE@EB@@E@C@E@C@A@A@C@A@CBC@EBE@C@IBCBE@EBIBC@C@CBCBC@C@C@EAC@EBC@C@E@CBC@A@C@CBEBC@E@GBCBGBCBCBCBCBA@ABA@@ACAE@A@E@A@CBAB@@@BAB@B@D@B@BA@@@C@E@E@GBG@C@C@ABC@A@C@C@A@A@@@A@@BA@A@C@A@ABC@A@A@@@@@A@A@AAA@C@G@I@@A@D@@@D@@@B@@@@ABGFCDABA@ABABCB@@A@@@@@A@@AAAAA@A@A@A@@@@@@ABA@AAC@A@CBA@ABA@@@A@A@A@A@C@A@@@A@@@A@@@AA@@AA@AAACE@AA@@AAAACAA@@AA@@AACAAAC@CAAAA@AAA@A@@@ABAB@@@B@D@BBBBD@@DBDBDBDB@@ABAB@@@B@B@HAD@@@B@@BB@B@B@B@B@@@@ABCB@B@@@DBDA@@B@@AD@BAB@B@@@B@BB@@B@@AB@@@B@@@BBB@B@@@B@@@BA@@B@@ABB@@B@DBB@@BB@@@B@B@B@B@BA@@BA@@B@@@B@@@B@@BB@@BB@@@@BBBB@@@@@BB@@@@@@B@@@B@B@@@B@@@B@@@@@B@@@@@@A@@@A@@@@@@@@A@@@@@@@A@@@@AA@@@@A@@@@@A@@@A@@@@@@@A@@B@A@BAAA@A@C@AAC@A@A@ABCBC@AB@@A@A@@@@@AAA@@@CAEAA@A@A@EAA@C@A@G@A@A@A@A@C@C@@@@BA@@@@@@BA@AB@@A@@B@@AB@BAB@@A@AA@@A@@@A@AB@DABAD@@BB@BA@@@@@AAA@A@A@C@C@A@G@ABA@C@A@A@A@@BA@AB@@ABA@ABA@@@ABA@@@BB@BBB@@@@AB@BBB@@BBBB@BBBBB@@BBB@BB@BBBB@DBB@D@BAB@B@B@@@@@@BA@AB@B@B@B@@@D@BB@@B@@@B@@BB@B@@B@B@B@B@@BB@BB@BB@BBB@B@BB@@@B@@BB@@@@B@B@B@BAB@B@@@B@B@D@BBD@B@DB@@DB@@B@BAB@B@BBF@DBB@DBBBFBF@F@BB@AB@DABAB@F@D@BBB@B@@@BBD@DBD@BBB@@BB@@@B@@@B@D@B@@@B@@A@ABABA@@D@B@B@B@BA@@B@@@B@B@D@B@D@B@BBB@BBBBB@B@B@B@B@B@D@B@@@@@BB@BBB@@@@@B@@BB@B@B@BB@BBB@B@DBB@@@@@BB@B@B@DBB@BBBBB@@B@@B@B@@@DBB@BBD@B@BBB@B@@@BAB@@AB@BCBA@@BABA@CDABA@AB@B@B@@@B@@@BB@BB@@D@B@BBB@B@B@BBB@B@B@B@BB@@B@@BB@B@@@D@BBB@@@B@DBFBDBB@DBBBB@BBB@@BFDDD@@DBB@BB@BB@@@@B@@@@AB@@A@@B@@A@@@A@A@A@@BA@@@@B@@@B@BB@@B@@@B@@B@@@@BB@@BB@BB@BBB@@BB@BBB@@B@BB@B@@BB@@@B@@@@@B@@A@@BA@@@AAA@@@AAA@A@A@A@A@@@A@@@A@@BAB@B@@@BA@@BB@@B@@B@@B@@B@B@B@B@DAB@D@B@BAB@B@B@@@BBB@@@B@@B@@B@@B@@AD@B@B@@AB@@@BA@ABA@ABCBA@CBA@@@ABA@@BA@@BA@@BABABABAD@@@@@@@B@@BB@BBB@BBBBB@BBB@BB@BDB@DBBBBBDBBBB@@B@BB@@B@B@B@BA@@B@BAB@@CD@BABABABABABAB@B@@@BCAABCDAB@BB@@@@@B@BBA@@@@BA@@B@@@@@B@@A@@B@@@B@@@BA@@B@@A@CB@@CBCB@BC@@BA@CB@BCBABCB@@@@@BABABABABA@A@ABA@@@A@A@@@AAAAA@AAAA@@@A@CA@@A@@BA@A@ABA@A@@BA@@AA@AA@AAAAA@A@AAA@A@A@A@A@A@A@@@A@AAA@AAEAAAA@@@AAA@@AAAA@@AA@@AA@AAAACAA@AAAAAAA@A@A@A@A@ABCB@@AB@@ABADA@ABA@ABA@A@A@CAA@CAGCEAE@AA@@A@@BA@AB@BABCBABAB@@AD@@@BA@A@CBC@A@A@AAC@AAA@@AA@@A@@@A@@@A@ADCBCBADCBADA@A@ABAAA@AAACACAC@CAE@CAEBA@A@@BCBABEBABABA@C@AAAACAACEGAAGCCAA@C@I@G@C@CBA@@B@DBB@BBBDD@DBB@BA@@BC@A@C@CBIBE@CBGDABABA@CBG@GBGBE@CBAD@B@FBBBDDBBBBB@D@B@@@BAB@BA@ABA@@BA@A@AAA@A@A@CBA@ABA@@B@@@B@B@@BBBBBBB@BBDBB@@BB@BBBB@@BB@B@@AB@@@BABABC@ABA@C@A@C@CAA@A@A@A@C@A@@@AB@B@@BBBBBB@@BDDDFD@BBDBDDDBD@D@B@DBB@B@DBB@BBB@BB@BB@@BBB@B@B@DB@@BBB@@BBBBBBBBBBBB@BB@BB@@B@BBB@B@B@BA@@@AB@@C@ABABA@@BAB@BAD@@@B@BBB@BBBBBBBBB@@BB@@BBBBBBDBBBBB@@@BA@ABADABABA@@B@B@B@@@B@BAB@@A@@BC@ABCBABC@ABAB@@A@@B@B@BAB@B@B@@@B@@A@CBEBA@CBA@AB@B@@A@@B@@BB@@BB@@BBB@DB@@B@B@BBBBBBBBBBBB@@B@@BD@B@D@@@DB@@@@BB@@@B@B@B@B@@BBBD@@BB@DB@@BBBBBBBBB@@@BB@B@B@B@@@B@@@B@@B@@@@@@@B@@@@@BA@ABABAD@BAD@@AB@B@B@@BB@@BBBBD@BBDBBBBBBBBBBB@@@B@B@B@@@BAB@@@B@@@B@BBBB@D@B@B@D@B@B@B@B@@BBB@@@B@@ABA@@B@@@B@B@D@D@DBF@D@D@B@D@B@D@D@B@D@B@BBD@DBB@DBF@B@DBB@B@@BBBBBBDBFBDBB@DBD@B@DBD@BBD@BBBBBBBB@BBB@@@BABC@A@A@C@CBA@C@@@CB@@@BAB@@BB@@BBB@B@B@BB@@B@@B@B@@AB@@BB@@BBB@B@D@B@B@D@D@D@B@B@BB@@BBBBBBBB@BBB@DBB@BBBDDBBBBBB@BDD@BDBBBBBBBDBD@B@BBD@D@F@D@D@B@BADAFADABABABA@ABABABAB@B@B@B@B@BBBBBBF@DBF@B@FBF@D@F@D@D@B@@BB@DBBBDDDBBB@@@AB@BA@A@A@@@A@A@AAAAAAAC@CCCAACAAACACAAAEAC@C@A@A@ABA@@BAB@BAB@B@B@BBD@DBD@BBB@DBB@D@BAB@D@BABADADADAB@BAB@B@BBB@B@BBB@BBBBBBBBB@DBB@D@BBB@@@B@BBDBB@BBB@@BBBDBBBD@D@D@B@D@BBB@BB@@BD@B@D@B@B@BAB@@@B@B@BBBBBBBB@DBB@BBB@B@D@F@D@DAD@BBD@D@DBD@BBBBB@BBDDDBB@BBB@B@B@B@@ABA@@@C@@@E@A@ABC@ABABABCBA@ABCDEBCDABCDA@CB@@A@A@ABA@ABAB@FAH@B@DAB@@@BABA@@@ABA@AAA@AAA@AAC@A@A@A@ABAB@BAB@D@D@D@F@FAF@BAFADADABADADAD@B@D@D@BBBAB@B@BABABAB@F@F@B@BA@@@AAA@@AC@@BAB@B@B@D@FBDBD@DBD@FBD@B@DBD@D@FAB@DABABABABAD@BAF@BABADABADAD@BAB@BBBBDBBBBBB@B@BBB@@@@BBD@BAF@DABBD@B@BB@@BB@@@@BBBAB@@@BA@ABADABA@@BABAB@@@B@B@B@@BBBBB@B@@BB@B@B@BAD@F@F@FBB@F@DBFBB@FBB@BBB@@B@B@@@BAB@BB@BBBB@@@B@BA@@BA@ABA@A@A@CAA@AAA@A@@BA@A@@B@B@B@B@D@HAF@B@DBDBDBBD@BBD@D@FAB@B@B@B@B@BB@B@@BBBDB@@B@@B@@@BA@@BC@AB@BA@@B@DBHDDBFBPDB@BBDBD@B@HAB@BBJFHFFJDFBB@@B@B@D@BAD@DBBBFJBFBD@BBBDBD@DAF@DAB@BBB@B@DDFFBBDDDH@H@H@@@DBDDFFDFFHFDBJHDDBBHDHBF@F@B@D@JABBB@B@DDFDDH@DBFABABABE@GBCBAD@BBBBDFBHBBBBD@B@B@@AFA@CD@DDBBBDBDFBDBBBBB@B@B@BAB@DA@AB@@CDAB@B@D@BBBDBDFHBBDBBBD@BBF@D@DBBBDBBD@DB@BBB@DAH@F@D@B@FBBBBDBB@DABABADABAB@D@B@B@BBBBBB@DADABBHDHFBBBBBB@DA@ABC@C@CAA@AACAA@C@A@ABABBB@BBDDDDJBD@BBDBBDBBBF@H@F@F@H@FADCHADADAD@B@@@DAF@H@L@F@F@F@J@HAD@B@HAD@F@D@FAHGDA@C@E@C@ADADABCHCD@FAH@D@FCLCBA@@BA@A@AACCCAAAA@AAA@A@A@ABA@GBCAC@A@A@ABADA@AB@D@BBB@B@D@B@FADAB@BABCBABABAD@B@D@D@DBB@B@BABA@A@AACCAAA@E@A@ABCB@BCDAB@B@BA@@@A@AAA@@AAA@A@AAA@CBA@CBABCDA@ABA@C@ECA@AAA@A@A@@@@A@@@A@CBABABA@ABAB@B@@AB@D@BAB@BABAB@BABABC@ABA@A@AFGDCDG@AB@AA@@@ABABADCB@BAB@@@BAB@B@B@B@DBB@B@DBB@@@D@BADA@@BAB@BABA@ABCBA@C@@AAA@C@A@CBEDEDA@A@C@AA@AAA@A@C@C@EBABADADAB@DAFAFADAD@D@B@B@B@DBB@DBBBD@BBD@B@D@DAD@DABADABA@ABAHCFCDAD@F@F@B@BAD@BABA@@BA@@D@FAD@DAB@DABC@AA@@A@AA@@C@@@A@A@A@@@@@AB@@@AA@@@@A@@@A@C@A@A@A@AAA@@@A@@A@@@@A@@@@A@@@A@C@@BA@AB@@@@@@A@@AA@@@@BA@AB@@@B@@@BAB@@A@@@@@A@@AA@@@A@A@A@@AA@A@@@A@AB@@@BAB@BBB@D@D@D@B@B@BB@@@@B@B@@@@A@@@A@@AAAA@@AA@@A@@@@AA@@C@AA@@A@@@@@A@@@AB@@@B@@@B@@@B@@@B@BB@@B@D@@@B@@@B@@@@@B@@@D@B@@A@@@A@@@AA@@@AA@A@A@A@@@@@AB@BA@@@@B@BB@@@@@@@@BB@@B@@BB@@@B@@@BA@@@AB@@A@@B@DABAB@@A@@A@A@A@A@A@EA@A@A@@BADCBAB@BAB@@ABCBAA@@ACAA@@A@@@@@AB@B@@@B@@ABA@AB@DAD@HAD@DA@@BABABAD@@ABA@@BABA@A@AAAAAACAA@@@ABA@AB@D@@BDBBBD@@BB@DADABAB@@A@@@A@@A@CA@AA@@AA@AA@@@@BA@A@A@A@AAA@C@AAAAE@A@A@AB@DAB@BBB@B@B@@@BA@AAA@AAACAAA@@AGB@@AD@BAB@D@B@@@D@B@B@@A@A@AAA@A@C@A@O@@@CA@@CB@@A@C@A@A@ABA@@@@@A@ACCAC@@@AFCDE@A@C@ADADEDC@@BA@@@@@A@@AAAAAACGAEACCCEE@@CCCCGCEGCCAA@AACAEAE@CAC@A@ABABCBCAC@AA@@AA@AAACACAC@CAA@AA@AA@@@@@@@@A@@@C@E@C@AAEACA@@@@AA@@@ACAEECAEAICEAKEEAGAACCA@A@AAAAECG@AACCKAACA@AAAECAAA@A@C@E@O@A@GBA@A@A@A@CAEAA@C@C@E@A@G@A@@@@AAGAABEBC@ABC@E@ACACAA@AA@@A@@@@@AA@A@@AAEECC@E@@ACAC@@@A@@@@IAC@E@IAA@A@E@C@A@MAE@A@A@E@A@CDCBA@A@A@@@A@AA@A@AAAA@@@A@AB@@C@CAAACAC@AAC@AAABA@C@A@A@A@A@@A@@BA@@AA@AAACCCCACACACAC@A@CBCDI@AAA@AB@B@DALIDCFEHEDAB@B@B@LBFB@BD@F@DBH@D@@ABADEHIB@@@BBJD@ADA@CBC@AB@B@BADABA@@@AB@@AAA@@@@BABCBA@ABC@AAA@A@C@CBABABEDC@A@@D@@AB@@@BA@@B@@@@@@@B@@@@@B@@@@@B@B@@@B@B@B@B@BA@@B@@@B@@@@@BB@@B@@BB@B@@@BBB@@BB@@@@@@@B@@@@@B@@AA@@A@@B@@@@A@@@A@@@@@A@@B@@A@@@A@@@AB@@@@A@@@@@A@@@@@@@A@@@@@@@@@A@@@@@@@@BA@@@@@@@A@@@A@@@A@@@A@@@@@@@AAC@CAA@A@@DCBA@@@A@A@A@@AC@@@ADC@CBC@A@AB@FE@@BC@A@ABCDABCBCDAB@BADAB@DADADADAFABABABADCBCBABABAB@D@H@D@@@@@B@@A@A@@BA@A@@BAB@DABAB@@A@@@A@@@AAACCAA@@@C@C@@@C@A@AAACEAA@A@A@@BA@ADCD@FEDAFCHE@ADABAD@HCBAB@@CBCBCBCBC@AB@BAB@@ABA@AB@BABCBCDGBAFEDA@@FGFEDEFGDGDEBCBE@@@C@A@@@A@@BC@AB@BC@ABCBABABABC@CBA@E@ABCDCBCAA@A@A@A@CBCDEBCDC"],"encodeOffsets":[[131115,43037]]}}],"UTF8Encoding":true});}));