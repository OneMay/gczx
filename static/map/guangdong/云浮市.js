(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('云浮市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"445321","properties":{"name":"新兴县","cp":[112.225334,22.69569],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@BABC@CAAC@A@AA@@CAABC@@A@C@AACD@B@FA@C@E@CCC@EAACAA@AABEBEBE@C@AA@CBABCDCBEBAAC@AD@D@DCD@D@D@@CBEDCB@@ADA@C@@B@@@DBBAD@D@BBF@BABCBA@A@@BABCB@D@@ABA@E@CBCB@DCBAB@BA@@BA@AACAAAAAACAA@AACCBAB@@EAIB@@EBABABC@C@A@AAABAB@BABC@E@CBA@EBE@C@C@IBEBEDA@A@ABADADAD@B@B@B@B@@AD@B@B@@AB@@AAABC@@DAB@B@DABABABA@ADA@@@@@@D@DCBABCCA@CAA@A@@@CBABABCBA@@D@B@DA@A@A@A@ABADABED@BAB@BC@ABCBA@ABA@E@EBCDA@C@A@A@A@A@@@@DBB@DAB@BBB@DBB@@@DA@AACBC@@B@D@BBD@@EBC@A@A@@A@CA@CBABABA@@@@@ABAB@BA@@@A@@B@@@B@B@BA@C@A@ADABADABAB@BBBBDBB@BBD@@ABCBA@AD@B@BAD@@@BA@@BA@ABA@@B@BBB@BABAB@@@D@BABCBABABAD@BBDABAB@B@BAB@DBBBB@BBD@BBBBBBB@F@BBB@B@@D@B@B@B@DAB@BBDBFBFDDD@B@DBBBBBBBBBB@D@F@B@BAD@B@BBB@@@@ABC@CBEBCBA@AAABABABB@@DADCB@B@BABABA@ABA@@@@D@B@@AB@B@BA@AB@D@@ABA@C@@DABAHCBAB@B@D@B@BBDBDBBBBBB@BBDDB@BBBBB@BBDBBHBD@DBD@BBDBB@B@DCD@BBDBB@@DBD@@BBB@@@D@@ABADCBAB@BBBDBBB@DAD@@BBDB@DAD@BABAAA@C@A@C@E@@B@@ABBD@B@D@@@B@BB@DBBDDBB@BBBD@DAFA@@@B@DBB@@B@@@DBBB@DBB@BBDA@BBABABA@A@A@AB@@BDBF@HAB@BDBDBF@D@DBADAB@BBDDB@DBBBBDBDBDBFBBD@DCBC@CB@DBBBDCDCB@D@@BBBBB@BBB@BB@B@@@BBB@B@B@@@B@D@B@D@B@B@BAB@B@@BB@B@@B@@@B@BBB@B@B@B@@BB@@BBB@@BB@@@BBBBB@BBB@@BB@BB@@@BB@@B@DAAE@CBE@EDADB@DBBBBBFADAFCB@DBFFH@@BB@BBB@DBB@BBB@DBB@DDDBBH@@@B@J@DBFFBBBB@@@BBD@B@B@BBB@BBBD@DBDBD@D@F@D@BAD@DBHCDAF@B@B@D@D@BBB@BBBB@B@BBB@B@BBBBBDD@@@BB@@@BBBBBBBB@BBB@BBBB@BB@@B@@@BAB@BABAB@@@B@BAB@@@BBB@B@B@@@BB@BBBBBB@AD@D@BBBBBB@D@B@BBBB@D@B@@B@BAD@@AB@BBBBDBB@B@B@B@BB@@B@BB@@B@@B@@BB@@@@B@@@@@@B@@@B@@A@@@AB@B@B@DAB@BBB@BBBB@B@@A@A@AD@B@@@@A@ABAB@B@@B@@@B@@@@@BB@B@@BBB@@BB@B@BB@@@B@@@@@@BB@@BB@D@@A@CB@B@BB@@@@B@@BBB@BB@BA@@B@@@BB@@BB@A@@BABBB@B@BA@@B@B@@AB@DADAD@BABCBA@A@A@A@@AA@A@A@@DADBB@@BB@BAB@@@B@@AB@B@DABBB@B@B@@@BBBB@@@@@B@@@B@B@@BBB@B@@@BA@@@A@A@ABAB@B@B@B@B@B@FABB@BBB@BB@@@B@BA@@B@B@BDB@DBD@BBDBB@BBBBB@BA@ABA@A@@ACAA@A@AB@BADBB@B@DBD@DA@A@ABA@@@AB@BAB@BAB@BA@CBABABA@ABAB@B@@@BA@@@AA@BA@A@@BA@@A@@@AA@A@@AA@A@@A@A@A@A@@@A@A@AA@B@@A@C@A@@AAC@AAAACA@C@@AAA@A@A@C@@B@B@DABAB@B@D@BBD@@ABAB@B@DBB@BBB@BBBCD@B@BAB@B@DBB@B@@ABAB@BBCD@BBBB@DBBABCDADBB@B@@@B@BBB@B@DBB@BBD@@B@@BBB@B@DB@B@BBBBAB@@@BA@@B@BABA@@B@DA@ABABA@AAAAAA@AA@ABAB@BA@A@A@CB@@CDCBABADA@CAC@CBEBABCAA@C@CDECCACBGBGBGDE@C@CDA@C@A@C@AAABA@@@AF@B@BABA@CBABCB@AC@AB@D@@AACBABA@AAA@AAAA@A@A@CAAA@A@C@AAE@A@ADE@AAABE@@B@D@B@BAAA@EBABABABE@AD@B@BBDABAD@B@B@B@D@B@@DBDBBDDDBDBDD@B@D@DBB@BDD@BBBDD@DDB@B@B@BDBBB@@@B@BAB@@@BBBD@@B@BB@B@BAF@B@BBDBB@BBB@B@BBB@@@@ABAD@BAACBADAD@F@DADC@CB@DA@A@AAA@@B@D@B@BABCBABC@AB@D@@@BC@CA@BGC@@A@CA@@CBCDABABABAD@BADABA@CACA@@@@ABA@A@BB@B@@A@AB@@A@AB@@@@BB@BA@@BC@CBA@A@A@@BABAA@CE@C@AA@AA@@AA@A@@@ABAB@@ABAB@@@@ABAD@@@BABA@@@@@@@A@@@@BA@AA@@@CB@@@A@@@AB@B@BADABC@A@@@AB@BAB@@AAA@@@@BA@A@A@A@@BA@A@@@AA@@A@@@CB@@AB@@A@AAAA@@@A@@C@@AAE@@@E@AA@@A@AAA@AAACA@@@A@A@@@A@A@AAC@AAAA@@CAABAAA@C@AABA@@@AA@@AACABA@ABAB@@ABA@@@AAC@AAAA@AACAA@@C@ABAAC@A@ABA@AA@AC@@B@DAB@D@@@BABCB@DCDAB@B@BABA@E@CBCDA@C@C@AB@@@BBD@B@@AB@B@B@@ABAB@BABABD@@B@BA@CBA@@B@B@@@B@B@B@@FBBB@@@@@@B@@B@@ABAB@B@B@B@BB@BB@B@DBDBB@DADABC@ABCD@DADADCBC@CB@BBB@BDAB@BBBBBDABC@CB@DABAAAAACCACBCBABAAAACAACAAACBAFC@C@C@A@A@@C@AAAACCAAECCAAAAACC@CAEDABADAD@@@BA@AAAAAAA@ABCBA@AA@A@@@E@A@@BC@A@@@@A@@AA@ABA@@@AA@AA@A@A@A@AA@AA@@@AB@BA@A@A@A@A@AA@@AACAAAAA@@CA@AAA@AB@@A@A@AA@@C@@@ABA@AAAA@A@@BA@@BA@@AAAA@AAAA@@AB@@A@@@A@AAABA@@B@B@@A@AB@AAA@@A@@AA@@A@@@@AB@@ABAAA@AAA@@AA@AAAAAAE@ABCC@@@A@@ABA@@BA@AB@BA@AB@@AD@@AA@A@A@@AA@@AA@AA@@A@A@AA@BA@@@AB@@BBB@@B@@BBB@BA@BCBC@@D@D@BABCA@ACBA@ABEBE@EBABC@CBE@ABA@@ABA@@@@B@@@AA@@AA@A@CDAB@B@D@@AB@F@DBBADABABABABA@ABA@@B@B@B@A@AA@@AAC@@CA@@BABC@CBABAAA@A@A@@@@@BBA@A@A@@@ABC@C@C@ACAA@A@@CACDEBABCBCDABABA@BDDDFDDH@HGDCBG@CBIBG@C@CCAEBACA@C@CAAAABCD@B@BA@AA@CEACAA@CDABAAAA@A@A@@A@AB@@CBE@ABAB@BCAABE@EACAC@A@AAC@ACA@AACA@CAA@CAA@C@ABC@AB@ACAAAAAC@C@ABC@@@CCAAECECAAEAA@A@ABA@A@CA@AAA@A@ABCBE@A@C@AAEAAB@DCBCBA@ACGACAACGAEAA@C@AAAAC@C@@C@@@AA@CAA@AAE@@AAA@@ABAACA@AAA@@AAA@EAAAA@AAA@@EC@A@C@E@A@ABAB@BABCBCBEBABA@A@EBC@AA@CAC@CAC@CBEBCAC@EACCAACCEAEACAC@CBCDABE@C@ADABAA"],"encodeOffsets":[[114890,22943]]}},{"type":"Feature","id":"445322","properties":{"name":"郁南县","cp":[111.535285,23.23456],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@@A@A@@@@A@@A@@@A@A@AA@@@BA@A@A@AA@@AABBB@@AB@@AB@B@@A@@@A@@@BBA@A@@BA@@@AA@B@B@@A@@@AB@@A@@@@@AA@BA@@@@B@BCBA@@B@BABA@@BA@@@A@@A@B@@@B@@B@B@B@@@@BABBBB@@@B@D@DB@@BA@@@@@BAD@BA@@B@BB@@D@@A@A@A@@@AB@@@@A@@@AA@@@A@@AA@AAC@AAAA@@@@AABCDABABADABA@EBCBABCBA@ABAA@@@ABA@@BABABADABA@A@A@@ACA@AACA@@@@@BA@@B@BAB@BA@AB@@A@AA@@@A@@@A@A@A@@BC@@@A@A@@AAA@AA@AAAACCACAA@C@@BABABADCBA@A@A@@AAAACA@@A@AA@@@@A@@AAA@@AAAA@A@A@@A@@@AA@AB@@ABA@A@AB@BBB@@@D@@C@ABAB@BEDAAABABADA@C@ABBBBBBBDBB@D@BDBBBBABCBEBAD@BAD@BADABAB@DC@AB@BBBA@@BCBAB@@@B@BAB@@@DADCBCBE@CBCBEAE@CACBEACACAAEAAA@A@@@ABCDA@ABCBA@A@@@@AAACAC@AB@BBF@D@D@@CBA@@DBB@B@BBDABADAB@BBB@B@BBBBD@B@@@BB@@@BB@@ABAD@@AF@@ABC@ABC@AB@@AB@B@B@D@BBB@D@B@D@BBB@DADABABC@ABAB@DA@CBABA@CBABABA@@BAB@@@B@@@BAB@BA@AB@BA@ABABCFAD@D@BBBBB@F@B@B@B@BA@CBEDCDCBC@CACDADB@D@D@BB@BADAD@DCDA@A@ABCBA@@C@@C@ADA@AA@ACAA@A@A@A@CAE@CBC@C@CBA@A@AA@AAAAA@A@A@AAAA@A@CBABC@CBA@A@ABAAAAAA@A@@E@C@C@A@@BA@A@AAACCCCAC@A@EACAE@CAA@@@A@A@@BAB@BAB@BC@@BABC@A@AB@DAB@BBBDBD@@BABAB@B@F@B@@@B@BA@@BABAB@B@B@BAB@@A@@@@B@@B@@BB@@@B@B@D@B@BAB@BAB@DBBB@B@@@B@DB@D@B@BBB@DDBBD@B@BBBBDBD@D@BB@@@BB@@BDF@BFBBD@DEDA@EBAB@BA@AB@D@@ILDBBBBBFBBHN@F@@BBFDAH@FFE@FNHFJJHABBHF@DCDBNEFEDADDDAJFBBJDBBHABMEBEGC@@A@A@AHGCEBE@GAC@EAABA@IBGHGFGHGFCBCHAL@PBP@@AFBFB@B@@HB@ADCBAB@@FA@BBBDBABABAC@B@DD@D@@@AABC@@BF@BA@A@A@AA@BADA@@@@B@BBF@FAJSBADVF@@LJH@H@BBLHDD@@CLIHCE@@A@IB@L@@@N@L@PBPBDBFDD@DCDKBEDA@@HDDINCDCFEDCDAF@D@@B@D@@HDDBF@DBH@PCBA@@BOJEECAC@BD@@C@@CAAA@ANFND@@@DHABA@@@C@@HH@DDHNNFFBHFDJ@FADCB@D@FBBDBB@D@CDAFHDBC@ABCJBF@BBF@DEJCDAFCBCH@JB@BHCFC@CDCDDFEDAHEBCFABA@CAAAA@CC@@@@CD@DAFCD@D@D@FADE@ABC@CCAFGBBB@DCDCDCBBCFDBFBDDBCAABCJFJFJDB@FADFD@DAFABDBBB@BC@AF@HFD@BAF@@D@DB@B@BDAFDB@@@DBBCFBJHDHF@HDB@FABCC@BCHABB@BBH@DBBAPSHMLQBCHGBAFGHG@ABADABCDA@ABABABA@ABAB@@A@CB@@A@ABC@ABC@E@@@A@IAAACCGGGMEECKAE@@@EAIACCCCACEG@AAC@ABEHGBADAHCHCJE@@FC@@@@BAD@DADABADADAFCDADAB@DAD@BAB@FADAF@BAB@B@B@D@B@F@D@H@D@D@J@HBF@F@HAJCD@FCDEBABCFIDIFIBCDAFEBALAbCB@HBDBDBD@D@FAFAJCJEFAH@HBB@F@J@HAFAFCJCJCBADAFCBAHANCJCB@F@JAF@F@FAH@H@NAZ@Z@@BT@B@D@DBB@B@BBRFJFFDN@F@LEPMFADADADADAD@DA@ACEA@AC@CBABAAKAKBAB@@CBGBAAE@CAA@C@@EAAAAAEEEAACFCBABELOBEDIFCHG@IFK@C@AEAGCCACBE@BCAEBAAIAECACACCEBEACBK@@AA@E@CBEHGDGDCBCCGEEIDE@AACFEDCB@AAACBCDC@AEACA@A@@@ABA@AB@@ABA@@BA@@@A@ABAAA@@BCDBDAACCAC@C@A@AABABA@ABC@A@ABC@A@@AA@ABC@ABC@A@@A@A@CA@AC@AAA@AACA@CA@CAAAAAEAAAECCAC@CABABADBBC@CA@BADCAAA@ABABAAA@@ADCAA@AAA@AAA@@AA@@@AAC@ABABA@A@ADABBD@B@BADA@@BCBADAB@@@BA@@B@B@@@B@@@BA@@BA@@@A@@@AAA@A@@AABA@ABABA@@B@D@@A@AB@BBB@BBD@BDB@BDBBB@BABCBABC@C@AB@@BB@B@B@B@@A@@B@@AB@@@@@@@@@BA@@B@@@FBB@@@D@DCBAB@@AB@@ADB@A@A@AB@BA@AB@@@BCBAB@B@BABABBB@B@@CAACAA@ACAA@CAC@A@E@CCCCACA@B@DAB@DBBA@ABABAF@B@BBB@B@D@BCBC@AD@BCF@@C@C@CAA@CACCAAAA@AAA@AACC@AA@AAA@C@E@@AAAA@@BC@EACAEACAAABAACA@EA@AAC@AAAAC@A@@A@C@AAABA@C@ACAABC@A@ADADG@@@@AABABCBA@EAC@CAA@C@CAA@AAA@C@@C@AACAA@@CA@@A@AA@B@BABEA@BC@ABA@A@A@CAABADA@A@CBABABAB@@@B@BABA@AAABCFAA@A@AAA@AB@@A@A@@@AA@@AA@@@A@A@A@A@A@@@AAA@@A@@AA@C@A@A@AAA@@@AA@@AA@@@@AA@@@@EA@A@CB@@ACBC@ABA@A@AAAACCCAA@CDABABA@A@CA@AA@AACA@A@C@A@ABA@GDA@@@@C@AABA@@@AAC@AAC@AAAA@@AAA@AAA@A@A@@BA@CBA@AB@@AA@@@@AB@@@BAB@@@@A@ABAB@B@BB@@B@BA@ABA@A@A@@AA@AAA@AAA@A@@ABABA@@A@A@A@A@A@A@AB@BAB@@A@AA@@A@A@@A@A@CA@A@A@@@CBAB@@A@A@@B@B@B@B@B@BB@BBDABAF@B@@AB@BB@B@B@@B@B@@BABBB@BABA@A@CACB@BADA@AB@@BB@BAB@BA@C@A@A@A@AAC@A@AAA@A@@BB@@@@BBB@BA@ABCA@@A@CB@B@BAB@AABA@ABAACA@@@AAA@AA@@AB@@AD@D@BA@@AAAA@AAA@A@@@@AB@@@@A@@AB@AA@CC@@@ACA@@A@A@AAA@@@AAA@@BA@A@@@A@@AAA@@AB@B@@A@@AA@@AAA@@A@@B@@@AA@@A@@AB@A@AA@@A@@@@B@BA@ABA@@AA@@BA@A@AA"],"encodeOffsets":[[114327,23348]]}},{"type":"Feature","id":"445303","properties":{"name":"云安区","cp":[112.003208,23.071019],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@GAAAAC@AAAAA@ACAAC@AAAAAAAACACC@ABCB@BABCDA@@BAACCCCACCA@A@@C@AAA@CAAA@@@@C@AAAA@@@AAAAACA@CAAAAAA@A@A@CAA@AAAAAAACACAAABA@AAAA@CA@@@A@A@AAAA@A@ABA@A@EAAAAC@A@A@AAAAACAAAAAA@A@@A@AAA@A@ABA@AA@AA@A@A@A@AAAABABABAAAACBABCD@BADA@AAAAA@C@A@A@EBADABABA@@CBE@AA@@AA@@AC@CBCBABA@A@@@CB@@ADB@AB@BADCBABA@C@@AC@AAA@C@A@@BA@ADBB@B@BC@C@AABA@@@@A@C@C@CB@BAB@BABDB@B@B@DABCAAAA@ABA@E@@BC@ABAB@B@BBB@BBBFBD@BB@DDB@BD@DA@ABAD@B@D@B@BBAD@BBBDBD@B@@ABABABAF@BABAB@DA@BBBBB@DBBAD@B@B@DADC@@BA@ABAD@BA@A@@BB@BBB@@BA@A@BBB@B@@B@B@B@BBB@@D@@@D@F@B@B@BBD@BABB@@ABAB@D@BB@@D@@BBBBBBAB@B@B@BAB@@@B@BBB@@@@@BAF@B@BADBBA@ABA@A@AAE@AACBCDABABABBFBBABA@A@A@@BAB@B@DC@@B@BA@A@A@A@@DABAB@DBB@FB@B@BB@BBBD@B@HFFBB@DBDBDBDBDBD@BABBBBCB@B@BBBDABA@ADAB@@BAB@DAB@B@@BBD@BBA@A@A@@B@BABBBBB@@@ABABCB@BBABABBBBADBB@BAD@@DB@F@BABAB@@BADCBCBCACACBABBB@D@BD@@B@@@B@BABCBCB@AC@CAC@AAC@AB@D@D@BBB@BB@@DAB@D@BC@C@C@ABA@CAC@CB@BA@A@C@ABAB@@BBB@ABA@A@CAAA@ABAAAA@@D@BA@A@AAAB@@ABC@CB@DCBABA@CB@DB@B@BDB@BFDDDDBB@BCDAB@DBD@BBB@DA@AB@BCDCDCAAACAEACACCABCB@BC@CAAACA@BADA@@AC@EAC@@@@A@CAAAAAC@CBAB@@AACAAA@C@@BA@@BABA@A@@CAAAAEDA@A@AB@BABCBABEB@DAB@DADADAB@BB@FDDBDBD@BBBA@@@A@@B@DBBBAD@@CBCBADDBDDDBDDDDDBFDDB@BABE@C@A@C@CA@@A@AAECGCIEA@AAAAA@A@AACAABABBBAB@B@B@B@@AD@D@BA@ABA@@B@@AB@BA@ABAACAAA@AB@BCAAA@@C@@@AAA@AAA@AA@@C@ABE@C@@C@ABCDAFADAF@D@B@DABADCBCABA@C@A@@A@A@@A@AC@C@E@AA@@A@CBADAB@@C@@B@FBD@B@@BBBBD@BBD@BB@@B@BA@B@D@@B@HCB@BAB@D@B@B@BD@BBBB@@D@BABABCB@DBBDDBDBB@B@BAB@BADBD@@DAB@B@@F@@B@@B@@B@@BB@@B@@BB@B@B@B@DBB@@@BB@BB@@B@B@B@B@B@@@B@@BB@@B@@@B@BA@@BBB@B@BBBDEBABBB@BA@A@A@@BABABADAB@B@BCBADBB@B@B@BAD@@AFBBA@A@ABBB@@@DB@@BBBD@B@DD@B@BBB@DBD@B@DBD@FBB@DABABA@B@@H@BCBCB@D@BADB@B@DABBB@B@D@BB@D@BBBBD@BBB@@FDBBBBABBBDBFBD@FAD@@BBBB@@@F@DBB@BBBD@BD@BBB@BBBBBDDDBB@DBD@D@@@DE@ABCD@DA@A@C@AAA@A@ABEBABAB@AA@CBA@C@ADBDBDD@D@F@BBD@DBBBDB@DBBB@DA@A@AAABABA@A@ABAD@@A@@BABA@@B@B@BCA@BA@@BA@ABCDC@@@A@EA@@A@@@AB@@@@@@@@A@@BA@@@@BA@A@A@A@@AA@@B@DADABADABA@AAACA@ACC@AAA@AAA@@B@BC@A@@@ABAB@BABBB@@@BBB@B@@@B@@AB@@AB@@A@@@A@A@@@AB@@A@CBABAD@@CBABA@C@AACB@B@BABAB@BBD@B@@BB@@BB@BBB@BBBCD@BB@BBBABAB@BBCDABB@@DADCAABABDBD@DBFDBBFBBBBBDBB@@DDBBBB@BBD@@BDBB@B@@@@BAD@BAD@BBB@@@BAD@B@BAD@BABABBBB@D@D@DBBDCBCAAD@@BBAB@B@B@@AB@@AB@BA@@BAB@B@@@BDBFB@BCDADBDBBA@CDEFBD@BCFFJHFDDDAHCHCFGDAF@B@@BL@DAFBFADDDBDBBFBJABBFADF@DADBHDFB@B@DEL@JGHEDCJAFKPAFABEDBDFBFFBBBBFB@@@DBB@DBFABAH@DA@ABBLBLABAB@DBDB@DF@B@@D@TAV@XDTDNBTDHAHAJCDADCDEBC@C@CBEBE@EBEBMDIHEBADABADAD@DAFAD@J@RCF@F@F@BAB@BA@@DEJGLALBTDJBF@JBHBF@FBHBJFHDDDFDDDF@B@D@NGNGLBNDD@N@HERCDCFAFADAFAL@LAH@F@NBLJFDPNHHHHDDBDDDDDHHFFFDFDNDTBD@@@B@@@BB@@TBLDJFHFHLB@BGJ@BC@@B@D@BADADADCD@H@D@@@B@BAB@@@@I@@BCDAFEHEDABABA@@B@@A@A@A@AA@AC@A@EDCCECACC@@AA@@AC@ACABA@AEACCEAEDE@@DEACG@GCIAE@A@CEIAAECAEA@AEAECB@AAACAIEABGEA@AA@@AAA@A@GFABADC@C@A@AAAE@C@CCCBECC@AAA@GAACA@C@@AA@BA@A@@ACBCA@@@@A@CDCBA@AAABCCABEACB@ABAACECAEA@EACBAAECAAA@CC@ACABCCE@ADBB@DA@AAAACCBACAAAAAACBAAC@@AD@@CDA@@BA@@BAAAA@A@@BCCA@CBCBCAABC@AA@B@BA@ABADA@C@@CAABC@@@EDABE@@C@@CAA@C@CCCA@A@@DA@CDAA@EEDEACBBGAADCC@ACA@ABAAA@AF@D@B@DABBBBD@D@BAD@BBHB@BBABBDCBB@D@ABC@@@A@CBA@CCC@ABADA@ADBBC@AAABA@C@CDAAABCAABA@A@ADABAAA@A@A@C@CBCAA@ADABAB@BCBAD@B@B@B@BA@C@@BE@AD@BA@ADCBA@AB@ABA@ABBB@ACAAAD@@ECAAC@AEABABC@AAABABBBEB@D@DC@CDCAA@CAG@A@ABA@C@@DAAAAEAADA@CBACAC@@A@BB@DAAAACAA@AC@@AD@B@D@B@BAD@EACA@AB@DBFDDCAEA@CCCABEDBDAB@BEDA@ACACAAA@AB@C@A@C@EAAAACEAG@@@ACBA@EAAAA@CAAA@@@C@@BAAAC@BCAA@AAAE@CAAACAA@CAE@C@C@AB@BC@CAAAC@CACCACCAEA@ABE@CDCBCDA@CBC@@AA@A@CAABIAE@C@@CCACACA@CC@E@ADEBADEDAD@DCBC@CAA@C@EB@@CA@C@CAAAAE@@AEBCAE@A@EBEAAAAAAAAA@CAAAACAECACCAAC@AAAACCAABEBA@CFADBDBDABC@CDCFAF@D@DAFDDAD@DAHBHDFDFDFBBBBBDBDBD@D@DDBBBDB@B@BADBBBBBDBB@DAB@BABE@IDC@CBABA@@AACACAAAACAC@@@C@@AACBCBCBC@@BAC@ALC@AACAA@CBAAAC@@BBBBBA@CABDCBAABCC@@AAC@ADE@AC@C@@CBABE@ABAAC@@AC@A@A@ABAAAG@A@AACBAABA@CBE@ABAF@B@B@AA@ABAFECA@AACA@C@A@@CAE@AC@AAC@@AA@BECA@CA@ABA@CBCABEBADA@CB@@AEAA@BCDABCD@DBBA@@@A@ABAB@AABACCBAAABC@A@A@C@AAC@CAA@ACAAC@A@A@G@EBCD@BAAAA@AEBCB@@AAABCBC@EAAAAAAAABGA@AACA@CCCEABAIE@ACGFIFEBAH@DABBB@HFFABGB@FDF@B@AEDEDG@G@AECCCEA@GCAC@@GCKGI@EEI@@A@AA@@AC@CA@CAAAC@CDA@A@CAAAC@CAC@"],"encodeOffsets":[[114670,23190]]}},{"type":"Feature","id":"445302","properties":{"name":"云城区","cp":[112.043945,22.92815],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@ABAB@DCD@JAFABA@CBA@CAAAAACAABA@A@ACAACCC@C@CACAAAAAEAECECGCGACBC@CBECCBC@E@EBCD@DADCBCACAEB@DABAFBBDDBBBBD@BBDDDBBFBDBBDBB@BBBBBBBBAF@F@BBFADBF@@BFBBDBD@B@@DA@@F@DBB@DADCDC@CBCFABCF@B@FDDB@BDBDDD@@@DBFAJBB@D@BBB@@AD@DCBADCD@DAF@BFBDBBDDDDBD@BBDBD@@ABAD@D@F@DBB@DBBBDBF@BB@BBBADD@BBAB@@@D@@BBDBB@BBFBB@DA@B@@BHDFBBBB@F@D@B@DBAB@BBBDBDB@FC@ABAACFCBADD@DFBDBCCAE@CBAB@BD@FBC@A@A@C@ABC@@BDB@DBBBBB@CAAB@@@BDBDDAB@BCFBBBBB@CD@B@BAB@H@DBB@DBDCD@@C@CFAAABABABBD@BABABFD@BBFD@@BCBBBDA@AA@BAB@BBAB@DABCB@@ABCF@@AD@B@@A@A@A@ABCDA@ABABABCB@DBDAD@B@B@B@BBBABCB@B@BADBBABBDCD@B@BABBD@AABCB@BCBAD@DDB@DAB@@@D@BAC@A@DAACBAAAA@AG@ABC@A@CACAABA@C@A@CBEB@BBBAB@BDD@CDBBAHDAFBFC@FBBDCB@@CB@B@DD@D@DBB@DD@@@AFCB@F@@ADBB@DD@B@BCBAB@@A@ABBD@BADBDADAB@DD@AB@B@BBAB@@AB@@CB@DC@@BD@BBDABBBBBBBDDABDBB@BCBA@CA@BDFADDB@BDDB@BBFDBBDAFBB@BFFDBDAB@BDAFBBADDBABBB@DADCB@@@@@DBDA@BB@B@@ABB@@@DDBBB@HBB@BDDAFDD@D@DBFBBB@D@D@BCBAHEB@B@BB@@BBB@HFBAJFDBBB@BDA@C@EB@DEAGD@@GACBAB@ACAAAAACBC@A@ABCHABCBADAB@@BD@@CAAACACAA@@@CAC@AC@AEAC@C@ABC@@AAA@@A@AC@A@@AAC@CBA@A@A@@AAE@A@AA@AB@BB@@@A@AECC@AA@A@ABAB@BAB@B@B@@CD@BC@C@CCAB@BAD@BABA@ABA@@CAAA@A@A@CACA@C@CFABA@A@@C@@AA@@CBA@A@AAAA@AA@AB@BA@AB@BBB@@A@A@@@A@@@@BA@@@@@AB@@AA@@AB@@AB@@A@@@A@A@@@A@AA@A@@AA@@@A@@@A@@B@@ABBBA@BB@@@BA@@@A@@B@@A@AA@@ABA@@BB@A@@@@BAAA@@BA@C@A@@@@A@@@A@@G@ECA@A@@AA@AB@B@BA@@AA@A@CBA@AAAAA@A@AAAA@@A@ABAB@B@BABAB@FA@BB@BBDBBB@BD@BBBBBBF@B@DABA@AD@B@DBBBB@BBBADBBBB@B@D@B@B@@A@ABABAB@BBB@B@BA@C@A@A@C@A@A@C@CAA@CAA@ACAAAAAA@AC@A@E@A@A@@BABA@A@AA@A@AAAAAE@A@A@ABABA@C@C@CD@B@BCB@BA@ABCDCBAAA@A@@BAB@D@BA@CAA@@@ABA@AA@AA@A@ABABC@G@CA@AAA@AAAAA@CAAAC@CAA@ACA@A@@@ABA@@@A@@AAA@AAAEBA@A@A@A@A@A@AB@B@B@B@@AB@@A@A@AA@@@A@A@@@A@@@@AAAA@@A@A@A@AACBA@A@@BA@@@A@ABA@@AA@CACB@@@B@BBB@@@B@B@BABADABC@CBCBA@@BA@A@@@ABA@A@AAAB@@@BAA@@AA@@A@@@ABA@@AAA@AA@@@@@AAA@A@@D@BC@A@@AA@@A@@@@A@@@A@@A@AAA@@AA@AA@A@@A@@@@@A@@@AA@A@AB@B@B@@A@C@@B@B@BA@A@AA@AAA@ABA@C@A@ABA@@B@@@@A@@@A@@@@A@@@@@AA@@@AA@@@AAA@@@AAA@A@A@A@CAAAAAA@@BC@ABA@@@@A@CAAAAA@C@A@AAAA@A@CBCA@AAAA@AAA@@A@A@A@AA@@A@ABA@@@A@ABABA@AB@@A@@@AAA@AA@AAA@AAAAAAAAA@@A@@A@@CCAAAA@A@AAA@A@AAAAAA@AAC@C@A@A@E@CBGDCAC@ABC@E@C@C@CACAC@AA@AAA@A@A@AAC@A@@AAAAEECAI@A@@@G@AACC@CAA@CAA@AAA@CAA@AAA@@EGAE@CDABEBCAEAAAA@CCACB@FAF@DBFCBA@@@AA@@A@@AAA@@AA@AAAAA@A@@AA@@AA@AA@@AA@A@A@A@AAA@@@A@@@@AAA@@@ABA@A@A@A@C@A@C@A@@@A@AAA@A@@@AAAA@AAA@AAAA@@@CDADCACAA@CDAD@DA@CACEACACACAAAAA@CCAAC@ABABCCAC@E@CACA@ABA@GAEAC@@BAB@B@B@BABAAAB@AC@AAA@CAACA@@A@@@AA@C@A@@EBCBC@AA@AAACCAA@CAAA@@@C@A@C@AA@BA@@@@F@D@B@DBBABABC@CBA@AC@AC@CBA@AAACAAA@ABCDAB@BC@FJ@FHJDL@HD@DB@HFBDDFD@B@HCHCFBFA@E@ECA@AHEBGEA@AACBG@ABEFEJDH@BJFABFBDD@DDBBBB@AHBBBBBBBB@FADADBB@BA@ADBFB@BBABC@AD@F@H@B@BBDDB@BBB@DBD@B@D@B@BADBBABDDABBBA@AB@B@B@@ABCAC@ADCBADB@FB@BA@@DCBABAFDBDAB@BAB@@DDBAFB@@BD@BBD@@BBF@DB@D@B@BD@BDBEFAB@BBBA@A@E@AB@BAF@DABBBDABBB@H@BBAB@B@B@BBD@@BDAB@BAFAB@DD@D@@BCF@BBD@BD@ADBBDAACDBB@AAAA@AD@BBAB@DBBBD@BKD@BBD@AD@DADADABB@@@D@@BDBDBBDBDBBB"],"encodeOffsets":[[114729,23420]]}},{"type":"Feature","id":"445381","properties":{"name":"罗定市","cp":[111.569892,22.768285],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@ACBA@A@AAA@CDA@A@CBA@CBAD@B@@@BCAA@AAAA@AA@@@C@ACACE@CACACC@C@E@ADA@A@CACAG@E@C@CBAAAC@AAAAGA@ACA@@AA@@ABA@AAAC@A@A@@BA@A@@AAAA@ABA@A@C@@A@@AAABA@C@AB@DA@CB@BAD@DBBBBB@@D@DBB@B@FBBBBADA@CAA@A@CBABA@@B@BA@@BABBB@@ABAB@B@B@BBD@@@DABAB@D@@BDADA@@BABD@@BADA@A@ABADABBF@@DBBBBBBD@BBBBB@@@DBD@DBF@FBBBBAB@D@BBBAD@@@@CBEBA@A@@@A@@BA@@BC@@@AAAA@@AAA@@BA@A@A@A@A@AA@@AAABA@@@A@AACAAAA@AAABA@ADA@@ACBAB@BCB@BA@GAGAEC@@CAA@@AACA@C@AACBAB@@AAAA@@A@AB@BABAB@DA@@BABAD@BABA@A@AB@B@BABA@A@AAA@@CECAAAAA@A@C@C@A@AB@@AA@@CA@CAAAC@@C@A@CBA@ABAA@@AACCA@AAC@A@CAA@A@@@C@A@A@AAAA@C@CACAAAAAAADAB@DA@A@AAA@AA@A@AAA@CCAAAABABA@@B@BADA@@B@DADBD@DBBBD@BBBBBBD@B@D@BDBB@BBBB@BDB@@B@BB@BBDBD@DBB@BB@@BBB@D@DBD@BBB@DBB@DDBB@DAD@B@D@D@B@BBB@BBB@B@BA@@DBD@B@D@D@D@BBBBB@BB@B@B@B@B@B@@CBC@CBABEBCDCBEDA@@BCBCBCB@BADABB@@BB@@BB@@@AB@B@@@D@BAB@@CBABA@A@A@A@ADA@@BA@A@A@AB@@@B@BA@A@E@CB@BA@A@CBC@C@C@C@@BC@CAA@CAA@C@CACAA@A@C@AAAAAAAC@AC@A@A@AB@@ABCAAA@AC@A@A@EBA@ABC@A@C@A@@@C@CBA@A@A@@B@B@D@BAB@@ADABA@ABE@C@ABAB@D@B@B@BCBA@@BA@@BAB@@@BAA@BCDCBA@A@@A@A@@AAA@AB@@AAAAA@A@A@A@AA@AA@CBA@C@C@CBA@A@CBCFABADCDCDCFABA@E@A@ABABEDA@C@CBA@C@@B@@@D@BBB@D@DA@@DAD@BCB@@CBADA@@@AB@@@BBBAD@DCBAB@DAH@BABAB@@@B@B@BABAB@B@@@BB@FFDDBBBBB@@D@B@@@B@D@BAD@BBB@@@BABCBA@ABABAB@BC@ADABABA@@B@BA@ABBB@@@D@@ABA@@@CAAB@BA@C@A@C@A@ABA@C@@ACAACAC@CBA@AA@@@A@E@AAA@A@C@A@E@C@@B@BABABCBABAB@D@DA@@B@BBB@BABABCBABABC@ABABADA@ABCB@@C@CBA@A@@BCB@B@BAD@BA@A@A@@B@@BB@BB@@BB@@BD@BAB@F@F@@@BAB@B@BB@BB@BAB@D@D@B@BAB@D@B@B@@BB@B@@BB@@BD@B@B@BB@@@@@B@B@D@BBDDBB@BABADA@@DB@B@@BB@BBB@BB@BA@ABCB@D@BBD@B@@@ABADB@BBB@BA@@BA@AB@@@B@@@@@B@B@BA@@@@B@D@B@BA@A@AB@BAB@B@@B@B@BBB@BBB@AB@BA@A@ABABADAB@B@B@BB@@@@@@@@BABB@@BBBB@DBBB@@A@A@A@@BAB@@B@B@BB@FB@A@CRBBAD@B@BBB@B@B@BABA@CBAD@D@@@BB@BB@B@BABA@@DBB@D@B@BDB@BBBAAA@AB@@BD@DBD@BB@BBD@@@D@B@B@B@BBBBBBAB@DA@BB@DB@@BA@A@@D@B@B@D@B@@@BDDBDBDBDDDBDD@B@B@B@B@B@BB@BBBBB@B@@@@B@@ABB@@@B@BB@@@BABAB@B@BBD@BFD@B@B@BB@DBD@DBBBFB@@DBD@@BBB@B@B@@@BBD@BB@B@B@B@BAB@DADC@ADAB@BBB@@B@BBF@F@DB@BBBBB@B@DBFDD@B@@AB@D@@@BBBB@BBB@B@D@@@BADABA@A@@@@B@BBBB@BBBB@B@@@BBFBB@@@B@@A@A@C@@BABBB@@@BD@BADBB@B@DBB@@BBBBB@@@BBBB@B@@B@BBBBB@B@BABA@@BABB@D@B@BADBBBDB@BAB@BBB@BBBB@B@DAD@BBBBB@@BBB@B@BBBDB@B@BBBAB@BAB@B@@@BB@@@B@B@B@BABBDBFBB@B@B@DD@D@BBB@BBB@@B@DABBDBBBADBBB@BB@B@@@BABDBDBBBFBBD@BBDAD@D@D@F@D@@BDB@B@@BAB@BBBD@@B@@BB@BB@BBDBB@@D@DBD@DBBBBB@BB@D@D@D@@ABAB@BBB@BB@B@@@B@DBF@DBFBB@D@DBDDBDBBB@B@@AB@D@D@F@@@@BBBBBBBBAB@B@DAD@BADAB@B@BB@B@B@BBBBB@BBBB@B@DAD@D@DAF@DBB@B@B@B@DB@BBBB@BCD@@@@DB@DABAB@B@DC@CBCBC@AAAC@C@A@BCDCDBD@DADCFCDAB@@A@A@A@A@EAAAA@A@CBCDEBABAB@@ABAB@@ABA@A@@@A@@BA@AB@BABADAB@BADAB@@CBABAD@BABABC@CAA@A@C@A@CAA@A@C@A@ABA@@BAD@BAD@BA@@BE@@BCBA@@AA@@A@@A@@@AACAA@A@AAA@ABABCBAAC@A@AAA@CB@DA@@@C@CAE@ABAD@DBBB@B@@B@B@DABAB@DCBA@@B@B@BBBFDBDBFBDADBF@FBDADAF@DADABC@C@@BA@A@A@@BADA@AB@AA@ABAD@@CBABABC@ABC@ABCFADABAAAAAACC@A@CAAAAAAABAD@B@BCBABABBFC@ABABAD@@@@C@@AA@ABAB@B@BA@@BAB@@B@@@BB@B@B@BB@BB@BB@@@B@@B@@B@BB@BDBB@BB@B@B@DABCBABA@AD@B@DBDBBDBB@BBBB@BB@@@B@B@@AD@@@B@B@B@@@B@@BBB@@@BAB@@ABA@A@AB@@A@@@@DBBBB@BD@@@B@BABCBABABAB@@AB@B@@BBBAB@DABADAFAB@BABCBABADCBA@B@@B@BB@BBD@BBB@@@B@@BB@@B@@@@@BA@@B@B@B@@@@CA@@A@AB@@ABC@A@@@@AB@@CAC@A@@@A@AABA@A@@A@A@A@@@@A@@@A@BB@@@B@@AB@BA@A@AB@DA@A@A@@B@@ABB@@@@B@@@BA@@B@@@@A@ABB@@B@@AB@B@AA@@B@@@B@@@@ABA@@BA@@AABA@BB@@B@B@BAB@@B@@B@B@B@@@BB@@@@@@B@B@@BBB@B@@AB@@BB@BAB@@A@A@@B@@@BBB@A@@BB@@@BB@@A@@@@BB@BB@@BB@@@BA@A@@BB@BB@@@B@@@BAB@@BB@B@@BB@B@B@BB@BD@@D@@DBBA@@BB@@@@@BA@@@@@BBB@BBBBB@@ABC@C@@BA@@BB@@BBB@B@@DBBBBAB@BA@BBA@A@ADAB@@@DBBAB@@AAA@A@@A@@AB@B@BBB@D@BBB@B@B@D@B@@ABA@AAA@@BAB@BC@ADADBB@B@BA@AAABA@AA@A@@@@A@AAAA@@BA@E@ABCBAAA@@A@A@A@A@A@AB@B@@@BADA@@B@B@B@@D@B@BB@B@@@BBB@@@BA@ABAB@B@B@B@B@B@@@ABAB@BB@B@BBB@BBB@@BB@B@B@BAB@@A@AA@@A@ABABAB@@@@@BA@A@@BA@@@@BB@@BAB@DAB@@AB@B@B@BBB@BB@AAC@E@AD@@@BABCDAB@@@BBF@D@D@@B@BB@B@@@@B@DABDBDABCBA@C@A@CBEBCBEDCBAD@@@@DAF@B@DB@@BBB@BBB@B@@@DB@BBADA@@BBBDBBBBAB@@ABA@@@AB@BAB@@A@CBC@@@A@A@ABAAABABADBBBB@B@BBBBB@JFHDFDBBB@@@DBD@B@D@F@BA@ACAECCACCCCCACCCABCDADA@@BCAACAA@@@@B@@ABAAC@CACAECA@@ABABCBC@CBA@CFABADABA@ABAB@B@FCBBBB@DB@B@BA@AB@@AD@B@BBBD@BA@AB@DBDBBBB@D@B@@D@FBD@@BB@BC@ADBBBDBD@@ADABADDDBFBDBBBDBDCDC@ABAB@@CAA@AAC@CBADC@AAACCCCAEA@ACA@A@@CDAB@BADA@CDAD@BA@@BABBB@B@@A@CB@BBAB@BBBDBB@B@BAA@AA@@BABAD@B@B@@ADAD@DBB@BAD@D@D@@A@CBA@CA@@AAA@A@C@CBAD@BBD@DBD@@BDADABA@A@A@@@AC@@A@CAABADADBDBDADABC@AA@ABABE@A@@CC@ABA@CAABAABABAAAA@ADAB@B@@AAAABA@A@AB@B@B@AAC@AA@@@ABA@CBA@AA@CB@BABCBAA@A@ADAAAAAABC@CACACACACAA@EAGEA@C@AA@AAAA@A@@EAA@CCAA@A@@B@D@D@DBD@BCBC@C@AA@AAE@CACAAA@AACBABA@A@CA@@@AAAAAAA@BAABA@@BAAAA@@AAA@A@A@@B@B@@A@A@AA@AAAC@@CCA@@CAAA@A@@@AAAA@A@@B@@@@AA@AA@AAA@AAAB@@A@@@A@AAA@A@@BABAD@@A@A@ABCBADA@A@CCC@@ACCACAEAE@AA@AACAAAAAAAAAAA@@AAA@A@AAAA@C@@A@AAA@AAAC@@@A@CGAEAE@C@@A@A@AAAACAA@A@AAA@AAAAA@AA@AA@A@A@@AAA@ABA@CAAA@AA@@AAAA@@A@AB@@EAECEAA@@AA@C@@@AA@@CAAAA@CA@AACCAAACEBCA@AAAA@EAA@AAAACAAAC@CBCCACAAACABABA@C@CAC@C@CB@@EAA@A@CBAAAAAAAACCE@@AE@AAA@A@C@AA@ABA@AC@CAAGCACAAACCA@CCC@CECAACAAAE@EBEAC@ADA@@B@B@BBB@DABAB@B@BBB@D@@ABA@AB@@ABAB@BABAB@@C@AAA@A@AAA@C@A@C@ABA@@AAAC@AAC@A@A@AAA@A@@DAB@@AAA@C@A@AB@BCAABC@ABABABAB@BBB@@@@CDC@ABC@@A@A@AAA@CAACC@A@ABAAAAAA@@B@@AB@BAB@DAB@DA@ABB@@BFBB@@DBD@D@DBF@B@@C@A@@@C@A@BBBBB@@B@BABA@@B@B@BBB@@@BA@@B@B@@@BB@B@ABCBABA@AAAAAAA@@B@B@BBB@B@BBB@B@B@BAD@BABA@ABABCBC@C@CAA@ABABA@A@EAAACACAC@C@@ACACAAACAA@EACAAA@@BAAA@ACAAACAACAAAACA@A@A@@@@B@@ABC@AA@A@A@AAGAC@AAA@AAC@AAAA@AB@@@@C@AAC@A@A@A@A@A@C@ABA@@@ABAAACACAAA@A@AAAAAA@AA@AA@@@@C@AA@A@AA@AACA@AAAAAACAA@ABC@C@@BCB@@@B@BABAB@BC@ABA@ABABA@@BADA@A@ABABABC@A@A@@@ABABA@AB@@A@CB@BABABCDC@A@CACAAA@EAAC@@AAA@CA@A@A@A@@AAAAAAAA@@CBAAABABADBBA@@@CB@BA@@BA@AAAA@AA@C"],"encodeOffsets":[[114150,23016]]}}],"UTF8Encoding":true});}));