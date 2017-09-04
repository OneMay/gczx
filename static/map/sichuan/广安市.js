(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('广安市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"511603","properties":{"name":"前锋区","cp":[106.886143,30.495804],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@BCDABABAB@@A@A@CB@@CBGDCDGBCBA@AAC@CACAA@@@A@@@A@C@A@AB@@ABB@@B@BB@BBBD@BBDBBFBDBDDBBDFBB@D@B@B@BAD@@ADABGDIHAD@DADBB@BB@BBB@B@D@B@F@F@F@FADBF@D@D@DBBBJFHDNDFBD@FBHB@@D@BBBBDBDHFLBFDH@@@@@BDHBDBBF@B@J@D@DAL@N@LAH@B@BBB@BB@BBD@D@F@BAFAFCH@@CJEHCD@B@DADBDBDBD@@BBBDB@BDB@DBDDJDHDB@BBBBBBBBBDDBD@B@BBB@D@B@FAHCDABABABC@E@CAEACCE@ACEACAC@A@@@ABABABADAF@JCJCB@BADCBADIBCBADEBCBAD@D@D@F@DBDBBB@B@B@BADAF@D@FBNBFBDFBDBB@DBJADAFAF@B@BBD@BBBB@DDNBPDHBFFLBDDDBDFDDBDDBBBB@B@BAB@DAB@BBDDDDFDDFBFB@@NFBBDBF@D@D@HBJBFB@@B@@AB@@@BAB@@A@@@AB@@BB@B@@@@@B@B@B@B@@@@B@@@@BB@@B@@AB@B@B@@@B@@A@@B@@@B@@@@@B@@@AA@@@@@A@@@@BEBADAFA@@@A@AAA@ADAB@DBBA@@BB@@@BB@@BB@BAB@@@@B@@@BBBB@@B@B@@@@B@B@B@@DB@B@BBBBDABADCBAD@B@DBB@@ABABCBABAB@B@DBB@D@B@B@@@@A@@B@@@@@@@B@@@B@DA@@B@@@@@B@@@@@BB@@@@@@@@BBB@@@BB@BB@@@B@@@@@B@@BB@@@B@H@@@@@@@B@@@@@@@B@@@@@B@@@@BB@DB@BB@B@@B@@@@B@@@@@B@@@DBB@@@B@@@@@@@B@@@@@@@B@@@@A@@BA@@@@B@@@@@@@BA@@@@B@@@@@B@@@@@@@@@B@@@@@@@@@B@@@@@@@B@@@@@B@@A@@B@@@@@B@@@@@@BB@B@FB@@@ACMAIACCCAAAEAKAACE@ABA@E@GGWAEAM@CACA@CAAA@A@A@C@M@E@GAAAC@CAC@AAEEACCIAKAMBIDCBC@CA@ABGAA@ACAICCAACAEFOAE@E@@@CBCBCHEBC@@@A@C@AAA@ADAA@@AA@KMCGAGACAIAACGEG@@IKQUOMEE@@AEAAAAAACAE@E@C@CBABC@@AA@AACCCC@AACAAAA@AGEICEACAA@@@AB@D@DADABCDEDKHGDGBE@EDA@CB@B@B@D@@@BABC@CAC@A@A@EBEDADIDEBABA@A@C@A@C@A@@@@B@@AB@L@D@B@DABA@ABADGBABE@A@AAA@A@C@A@A@@@A@IACAA@A@@@ABA@AAA@AAAAA@A@@B@@AB@@@@A@@@@A@A@@@@@AB@@@@A@@A@@@@@A@@@A@@B@@@BA@@D@@A@@@@@A@@@A@@@@@@@@@@BB@B@@BBB@@A@@BA@A@A@@@AAAAAA@@@A@@@A@@@@@@A@E@A@@@A@@@@ABAA@AA@AAA@A@AB@@@@A@@AA@@@@A@A@A@AAA@@AB@@AB@@@@@@A@@AAAAA@AA@@A@C@A@E@E@CAEBGBG@E@A@@@C@@@A@A@C@ABAAA@A@@AQPGHABCDEB@@A@CBC@EAAACCCE@ACC@A@A@E@CAC@AAAAAC@A@CAC@ABABA@CBCDADCD"],"encodeOffsets":[[109244,31187]]}},{"type":"Feature","id":"511681","properties":{"name":"华蓥市","cp":[106.7831,30.390188],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@B@B@@A@@BCBC@A@@@@@@ACAAAC@A@ADABABBD@BBD@BABABA@A@@AA@A@AAA@AA@@ECAAA@C@@@AB@BBB@@HBB@@@@B@@@B@@@BAF@BABA@ABC@I@A@A@CB@B@B@@FFJN@B@@@BA@C@A@C@MEAAAAC@AB@BBFBB@@BBD@@@@BB@AB@DAD@@ABA@A@@@AA@C@@A@A@@@ABABADCF@@BB@@BBB@@@B@AB@@A@@BA@@@@@@B@BBB@@B@B@BBBDBB@@BBD@@@@B@@@@@@A@@BA@@@@@@BA@@@@A@@A@AA@@A@@BAB@@A@A@@@@BB@BB@@@BBBA@@@AB@@ABB@@B@@@B@@ABA@@A@A@AA@@@A@A@@@A@@B@@@B@BBB@@AB@@CAA@A@A@AAA@@@A@@BB@@BA@@BAA@@@AA@@@AB@@AB@B@@BB@@@@@@B@@BB@@@@@@B@@@@@@@@@BB@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@A@BB@@@@@@A@@@@@B@@B@@@@@@@@@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@@B@@@B@@@@@@@B@B@@@BB@@@@@@@@@BB@@B@BB@@@@BB@B@B@@@BBB@B@@B@@@BBB@@BB@@B@BBB@B@D@F@D@B@@B@B@BEHADABADAFAJA@@BJ@B@BABCDAD@BBJ@B@B@BABC@ABAB@@@@@BBD@DAB@DAB@B@D@@BB@DDBDBDBBBBDBB@D@B@D@D@F@DDBBBB@BABAB@BA@CAC@A@ABA@AB@@@BBDBFBB@@BBD@FBB@D@D@D@BAD@D@BBD@BBBD@BBBBBBB@BBBAD@B@D@BBB@B@BBBB@HBD@B@@@BB@@BD@D@H@B@FAF@BADABCD@@ABA@CBABGBABC@ABA@@BAB@BBFBFAB@@EBKDA@A@@@AA@@@ACBADCDA@ABCAA@@@AA@A@@A@A@@@ABCB@B@B@@A@A@AA@@A@ABA@@@ABA@A@@@A@@@@@@B@BCDDBDF@FBDBF@F@J@BBD@DEDKNAB@B@@BBBBBBHBD@B@BAFEDEBC@C@A@AACBABABA@@D@D@B@B@D@@@HBFFBB@B@@@B@BAB@B@B@B@B@B@BBBBDBDDDBBFBFDD@DAD@FAF@F@DBFB@BDFBDB@FH@B@B@B@B@BABA@A@ABCBIBEBGDEDCDAD@@@@ABBB@@DDBBFBFBD@FBFBB@@@NFBBBBB@BD@@@F@@ABADAB@BB@@BB@B@BBBAD@B@B@@@D@@@B@F@H@HAFADBF@F@B@D@B@@@BBB@BBBB@@@B@@@@A@@BA@@BB@BBB@B@B@@@@@BB@@@B@@A@@B@BBB@BBBB@AB@B@@B@@@B@F@B@@@@@@@@B@@@B@@BBBBBB@@B@B@B@@AB@@@AA@AA@A@@A@@@@@@@@B@@@B@@@@@B@@@@CB@@A@@@AB@@@B@@@@@B@@@@B@@A@@B@@@@@B@B@@B@@@@@BA@@@AB@B@BBBBB@BBB@BA@@B@B@DBJBB@@@B@B@D@B@B@BBB@F@BAHABCBAB@BA@C@A@C@KBA@@@A@@B@D@B@D@B@B@BAFAJCBCFCFAB@B@D@DBD@BA@A@@@C@A@ADAB@FCF@HAHCLGFCDCBABC@C@CBA@@B@DBFBJDGK@@@@GISUCCMSIOCEACEKGMEIAAAACCMGIEC@AAEAECCCCE@AAC@AAECECACCAEAIACAGCCACAACAA@CCCEAAAAEECAC@ECCAA@E@GAC@AAACAC@CAAACAACAACAC@CBK@EAEACAECC@A@A@C@ABKBEAE@EACAC@C@ABC@A@@BCAE@CAC@KCEAACACAAACEAAACACECEACAIAAAA@AAACCIEI@AEGCCEOACAACAAAA@GAC@AAACAA@G@@ACEC@CAI@GAAAA@@G@A@CAACACAE@E@G@@@@@A@AA@A@A@C@A@A@C@C@A@A@A@ABA@@B@B@BBB@B@@@BA@A@AAC@C@CAC@A@CAAB@@A@A@@@@B@B@@@BBB@D@B@DBB@DAD@D@D@@BFBD@DADCD@DBBFF@@B@@B"],"encodeOffsets":[[109238,30882]]}},{"type":"Feature","id":"511602","properties":{"name":"广安区","cp":[106.641662,30.473913],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@E@A@CB@@AB@@@B@B@@@B@B@BAB@B@@ABA@@@ABAA@@A@AC@AAA@@AA@@A@A@@@@B@@@D@B@BAB@BCHINCD@B@D@DBBBD@BA@@BEBCDCBABCDCBC@CBCBA@@@AB@@AFABCB@DAB@@@BBBBBBB@B@BBDDBBBDB@B@BBF@B@BADABABCB@B@B@B@@BBDBBBBB@D@BABCDGDA@AB@BBBDDBBBDDBBB@DB@B@BBB@FDB@@B@B@B@F@B@BB@@BB@F@D@B@D@DBBBDD@@@B@BBB@@BBBB@@@BADAB@DABCDA@@BCD@B@@@B@B@@A@AB@BA@AAEBA@EBCH@@CDCDA@ABA@CA@@A@A@GJBBJDFBBB@B@@@D@HAFBDBDDDDBDBB@BDBDABAHAD@D@BBD@B@BA@AB@BA@A@ABAB@DA@CB@BAD@B@D@BBBFDFDPJ@@@B@BA@@BBFDBDDDDBB@B@B@BB@BBBADBD@B@FBHBB@DB@B@@@DABADAB@B@B@BCD@BBD@BBD@BC@ADC@@B@F@B@D@BADADAB@B@BBBBDFBFBB@BB@BAD@BABA@ABA@AB@BA@A@@@AAA@C@A@AD@HDH@@BBD@B@D@B@DBB@DBBBDBBD@B@B@H@BBB@BBDBB@B@DAB@B@BBD@BAB@@C@ABA@AB@BCFADABADAD@BBHBBBDBF@B@B@@@@@B@BBB@B@BAFAD@B@B@@@@FHBB@B@@@B@@@@A@@B@@@B@BB@@@B@@@@B@@BD@@@B@@@@ABAHIRBD@BBBBBJB@@B@@@D@BBD@BBB@H@D@DBPFLDBB@B@D@B@DBDBD@DBFBDBBBDBD@B@BADCBABABABADABABABAD@D@B@@@B@D@B@BBBBF@BBD@D@B@B@BCBAD@BBBB@B@F@DADADEDC@@HBHDB@@BDDFDDDD@DBJCF@FAB@B@BDB@BBB@DDB@BB@@@B@@@BAB@BA@BB@B@@B@B@D@DABA@@B@@@B@@@@@B@@@@@@AB@@@@@@A@@B@BE@@BA@@@@@A@@@@B@@@@AB@@A@@B@@@@@@@B@@@@@@@B@@@@@@@B@@@DB@@@BB@@@@@@@B@@@@@B@@@@@B@FA@@@@@@@@B@@@B@@@@@B@@@@@@@B@@B@@B@HFB@@BB@@@@@B@@@@@@@B@@@@@B@B@D@BAJ@B@@@BA@@@@B@@@@@@@BA@@B@@@@@@@B@@@@@B@@@@@B@B@B@@@B@@@@@@@B@@@@@@@@AB@@@@@@A@@BA@A@@@@@A@@@@@@@A@@@@@@A@@A@@@@@@A@@A@@@@@A@@@@@@@A@@@@@@@A@@@@@@@ADEDEBA@@BCBC@AB@@A@@@@@@B@@A@@@@B@@@@@@@B@@@@@@@@BB@@@@B@@@@B@@@@@@@@BB@@@B@@@@@@@B@@B@@@@B@@@@@@A@@B@@@@@@@B@@@@@B@B@@@@@B@@@@@B@@@BAB@@@@@B@@@@@@@B@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@@A@@A@@CCAA@@@A@@@@@@@@@A@@@@@@@A@@@@@ADC@A@@@@@@@@@A@@@@B@@@@AB@@@@@B@@@B@@@@@@@B@@@@@@@@AB@@@@A@@@@@@@@BA@@@@@@B@@@@@B@@BF@B@B@@@@@B@@@@@B@@@@@@@B@@@@@@AB@DCBA@@B@@A@@B@@@@@B@@@@@BAB@@@B@@@@@B@@@@A@@@@B@@@@A@@@@BC@@@@BA@@@@@@@@@@B@@A@@B@@BB@@@@@@@B@@@@AB@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@B@@B@@B@@@@@@@@@B@@@@@B@@@DAD@DCBABCBA@A@AAC@A@A@AACAABAB@BBD@DBF@@@@@B@@@@A@@B@@A@@@@@@B@@@@@B@@@@@B@@A@@B@@@@@B@BA@@@@@@BA@@@@@@B@@@B@@@B@HAB@@@B@@@@@@@B@@@@A@@@@@@@@@@@A@@A@@@@@@@A@@A@@A@@@@@@@A@@A@A@A@@BAB@@ABABC@ABABAB@B@BA@@BA@AB@DC@@B@BAB@@AB@@@@@B@@@B@B@@@@@BB@@B@@@B@@@@@B@@@@ABABABAB@@ABBDA@@B@@AB@@@@@@@@BB@@@@@@@B@@@@@@@@@@@BBB@@B@BB@@@B@@@B@@@B@@@@@@B@@@@B@@@@A@@B@@BB@@@@B@A@A@A@@@@B@BA@@@@@@@@BB@@@@B@@@@@B@@AB@B@@@@@@@B@@B@@BAB@B@@ADA@A@@@A@@@AAA@@A@A@@A@A@@BAB@BA@@@A@@AA@@AAA@@ABA@ABA@@BA@@@AB@@BB@B@B@@@@AB@@@@@@@BB@@@@AB@@@@B@B@@AB@@A@AA@@@@@B@D@@B@@B@@B@@@B@@@@BB@@@@@@@@@@BB@@@@@AB@@@@@@@@@BA@@DCBABA@@@@B@@A@@@@@@B@@@@@B@@@@@@@@@@@@@@AA@@@@@@A@@@@@@@@@@@@@@@@B@B@@@@@@@B@@@@AB@@@@@BA@@@@B@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@AB@@A@@@@@@@@@B@@@@@@@@@@B@@@BA@@@@B@@@@@B@@@@@B@@@@@B@@@@@@@@@B@@@@A@@@@@@@@@A@@@@@@@@@@@AB@@B@@@@B@@@B@@@@@B@@@@B@@@@B@@@@B@@BB@@@@@@@@BB@@@@@@B@BBB@@@@@@@B@@@@@@@@@@@@@AA@@@A@@@@@@@@@@BA@@@@@@B@B@@@@@B@@@@@@@B@@@@@B@@@B@@@@@@@B@B@@@@@B@@@@B@@B@@@@@@@BB@@@@B@@B@@@@B@@@@@B@@@@@@AB@@@@@@@@@B@@A@@@@B@@@B@@@@@B@@@@@@@@@@@@A@@A@@@@AACAACECE@A@@@@AA@@@@@@@@AA@@ECCC@@AA@@@@@@A@@A@@A@GCA@@A@@A@@@@@@@A@@@@@A@@@@@A@@@@@@@A@@@@@A@@@@BA@EDED@@AB@@@@@@@@A@@B@@@@@BA@CHAB@@@@@BA@@@@@@@@BA@@@ABABA@@@@B@@A@@@@@@@A@@@@@A@@@A@A@@@A@@@@@@@A@@@@@A@@A@@EACCA@@@@@@A@@A@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@@@ADG@@@A@@@@B@@A@@@@BA@@@@HGFEBG@CBABOBEB@@A@@BA@@@@@@@@B@@AB@@@BA@@@@@@B@@@@A@@B@@@B@FAF@FA@@B@@@@@@AB@@@@@@@@@@A@@@@BA@@@@@A@@EAIAGAC@C@E@CAAAME@@EAEACCCECCAC@ABA@CBA@A@AAAAACCCAECACCCACEKAECGAOCM@CAAAAC@AAA@E@EBCBIBCAA@CAEAACAEAM@E@CBEBC@A@A@AAACACAE@C@C@C@ABADCFABADCJABCDABA@IDIDE@CBABABAB@B@@@BBDBDDF@BDFBDBF@D@FADABABCBGDEBA@C@A@AAA@C@CAACAAAAAAAAA@GCICCCCAA@ACA@ACAA@@ACACACBC@C@ADCFGDI@@DGBEBE@A@E@CAC@AAAA@AAA@G@KBM@K@CBC@I@A@E@AAACCG@A@@@@CGAEEKCGCAAAAAC@@@GAEAC@EAMCGCIEAACAC@C@E@CAEBE@E@E@A@C@A@A@AAA@@AAABC@CBCJGHCBABC@@BC@A@A@A@CAACEAACCCAEAAAAC@AACAAA@@A@AA@BA@@BAB@D@B@@@B@@@B@DBDBD@BBB@DAHADCHCDA@@DAB@B@@@BABABADC@ADCBCDCDAB@BABAD@DBB@D@BBBB@BBD@D@F@B@BDD@BDFDDBBFBD@DAB@@@FADCBAHGROA@@ABABCBA@@@E@@ACA@AAAAME@@A@EAEAC@EAEAAACC@@AABA@@@@BCDCFCHCFAJADABAB@B@BA@A@A@A@A@AEGA@ACCE@AEACAE@E@EBC@CBC@ECEAAACCACACAA@A@A@A@A@A@ABA@A@A@@@AAAEEGA@@C@A@A@C@C@@@ABABABBD@B@B@DADCFEFABA@C@GAAAAAAA@@@ABALMFC@CAC@A@I@EAEAC@ECECAA@IBEBEFCDEHCHCHCHEDG@ICGECCAAACACAC@A@C@A@E@@AA@@EBEBEBABC@ABCBABA@A@A@EBKDC@"],"encodeOffsets":[[109149,31097]]}},{"type":"Feature","id":"511621","properties":{"name":"岳池县","cp":[106.440114,30.537863],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@DBBAB@DCBCDA@B@@BB@@B@B@LCFA@@BAAEAE@ABA@AB@BAD@BAHABADAB@BA@@DCBABC@ABE@E@A@G@CAC@@AA@@A@C@GAA@AA@A@AAA@A@C@ABCAA@AAAAAAA@AACAAC@AAC@C@ABC@C@C@A@EAC@AA@@AAAEAC@A@@BAB@BAB@D@DBB@@ABABA@AAAAACCE@C@C@A@C@A@CAAAAAACACCCA@@AC@A@A@CBA@CBC@AA@@@@A@AB@BADABA@A@I@AAC@CBADABA@I@@AABA@EA@@@@A@A@@B@B@BB@@@BB@@@B@B@BA@@BA@A@@@CA@@A@@@A@@B@B@B@@BD@B@B@B@BA@A@ABA@@B@@@B@@@@A@@BB@@@@@A@@@@@@@AB@@@@@@A@@B@@@@@@@@@@@@@@@@A@@@A@@@@@@@@@@@@@@B@@@@@@@@@B@@@@A@@@@@A@@@@@@@@@B@@B@@@@@@@@@@@@A@@@@@A@@@@B@@@@@B@@@@@@A@@@@@A@@@A@@@A@@@A@A@C@@@@@@@A@@A@@A@@@@@@@@@AB@@@@@@A@@@A@@AA@@@AB@@A@A@A@@@A@@@A@@BA@@@@@AB@@@@@B@@AB@@@@@B@@@@BB@@@@@@@@@@A@@@@@@@AB@@@B@@@BA@@B@@AB@@@@C@KBG@EDWREBEAICCEAAACAI@KA@@@@@@BC@ABA@@@@@A@@BA@@@@BA@@@@@@@A@@@AA@@A@A@@@C@A@@@C@@A@@AB@@@@@@@@@B@@@B@B@@A@@@@@@@A@@@AA@@A@@@AA@@@@A@@@@@@A@@@@@A@@BA@@@A@@@A@@B@@@@A@@@@@@A@@@@@ABA@A@@@@@@@@@A@@@@@AA@@@@@@A@@@A@@@A@@@@@AA@@@@@@AA@@@@@@@@@@A@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@A@@@@@@@@A@@@@@A@@@@@@@A@@BA@@@AA@@@@@@A@@@@B@@A@@@A@@@A@@@@@AA@@@@AA@@@@@@@@A@AD@BBB@B@@@BABABA@EDC@CAECCBA@CDCF@B@@ABAB@@@@@@@@A@@B@@@@AB@@@B@@@@@@AAA@@EACAAAAA@C@C@IDABC@A@A@@ACGA@A@A@C@ABABBBBHB@@@B@@@F@@@BB@@B@@B@@@@@@A@@@A@A@AB@@@@A@@@@@@B@@@@@@A@A@A@A@@@C@C@CB@@A@AA@@A@AB@@@@@B@B@@AB@@CF@@ABABABCDCDADABABADABAB@B@B@B@BBBBB@@B@B@DBB@B@DDBBBDBBDB@BBBBBBB@BF@DBBD@BBB@BBB@B@@@BA@@BA@@D@D@D@BBBBB@BA@@DA@@B@BAB@BB@@@BBB@@BADCDCDABCD@DAB@FBD@F@BCD@B@B@B@D@@@BAB@BBD@BBB@BBB@B@DADA@CDCBE@@BCBABA@A@C@E@A@CBEDABCBCFADCDAFAD@H@H@B@B@BABE@E@C@A@E@@B@BB@BDDD@B@BCBC@CBCBCBCDC@EBE@C@E@C@ABC@C@CBIBC@E@E@C@AAC@CAE@C@CBCBE@ABE@E@EACAAAAAC@C@A@A@A@A@CAEACAGEC@GEGCEECCAACCC@CBA@E@CACAAAAC@E@A@AAAAAA@A@@@ADCFADCBABADAB@BA@@BA@ABEBC@A@A@E@CAEAAECA@@G@ECCAAAC@CACAE@A@CBA@CBE@EBE@E@C@A@@AC@AAAAA@CAABA@ABABAD@BCFGFCD@@IFEFEDABABEB@@A@CBAAC@AAA@A@AB@@@BAD@D@B@D@@BDAF@J@D@BCDCFAB@DEDAFABCBAD@BADBB@BBBBB@@HDHDHBD@B@BBD@DBFDDBBB@BDD@BBFAB@FADADEDADCBGBA@EDE@E@G@EAEAMEKC@D@@@@@B@@@B@@@B@@@B@BB@@B@B@@@BA@@B@@@@@B@@BB@@B@@@@@B@@@@@BBB@@@BB@B@@B@@BB@@BBB@B@D@D@@@@B@@B@@@@@BA@@B@@BB@@B@@@BB@@BB@@@@BBB@@BB@@@B@BB@B@BAB@B@@BDDDBFDBDBBDD@@@@@@@B@@@BBBB@DBDBF@F@@BD@DBDDDDDDBD@D@D@BADCDABCB@DABAB@B@BB@@D@BBDDBBBBBDBB@B@B@B@FBB@D@DCBC@CBC@ABE@AB@B@D@D@D@D@D@FAB@DABADA@@@@@@BAB@B@@A@@B@@@@@B@@A@@@A@@@A@@BA@@B@@@B@@@BA@@@A@@@A@@B@@@BBB@@BBBBA@@@@@A@@@A@@A@@A@@BB@@BBBDBB@BA@@BABABAB@D@B@BD@@DBBBBBBBDDFDNFDBDDBBBDBBBFDBHDJ@DBD@@DCFCD@D@D@BB@H@D@DAD@BBBDAF@B@BD@B@DA@ABCBK@@B@HB@BAB@B@B@DBB@B@@@BAB@@B@@B@@A@AB@@ADBD@FBBB@@BA@IBABABA@AAAABI@AA@A@@@CDAFA@A@ACAAA@A@ADCF@D@D@DCHADGD@B@BD@D@FAJGBA@@BBBBDBDABABBDDB@F@BABA@AD@D@@B@N@BB@D@BABG@@@A@A@@@A@A@A@A@@B@@@FBBB@@BABMBAB@B@@B@J@@B@BDBB@BB@AB@B@@@B@B@@B@BABCDEBABA@AAA@AAE@ABADAF@DBBBDB@@BB@ABABABCFAF@FAB@@ABADIDGDGDCDAB@@ADAF@DABBB@@BBD@@BBDAB@D@B@BDB@@B@B@BEH@BB@B@D@BBB@@BB@B@@AB@@A@@BA@BB@@B@DAB@@@@ABC@@BA@A@AA@@A@@B@@FD@B@@A@A@IGA@@B@BDDFDDBF@B@DADABAB@FBB@D@D@B@@BB@@BADBB@BD@JFBBB@@B@D@@BBB@@@F@F@BAB@@ABABANGBA@AAAA@AAAA@AEC@A@CBABABADEBADADCD@@AHADBB@BBDABA@AAC@ABCNKBADBB@BD@@FPBBBBDDDB@@BBD@FAN@BABCB@D@DBB@@D@B@DBB@D@BADABAD@@ADBDBD@BBBBBBBBDDD@@BBBDFBHBDBB@BB@DDL@D@@BH@BBB@@DFBD@D@B@D@BBBDBFDD@@@BBF@HB@@BBDBLLDJDH@@DBFDDBDFBDBB@B@BB@@@B@BBDADAD@DAB@F@D@B@FA@@BA@@@A@AA@EGDG@A@C@A@C@C@A@C@ABA@A@@B@B@DAD@@A@A@A@A@A@A@@@A@@@ABE@ABAFABAFADA@@BCDCBIBA@@B@B@DBBBBAD@DBDBBB@F@B@BB@@B@@B@B@@ABAB@BA@@D@DAB@BAB@BBDAB@@BBB@BBBBBD@BBBBFAB@B@F@DABAD@FAD@FAB@@@B@BA@@@@@A@@AC@@@A@@A@@@A@@A@A@@@AB@@@@@@A@@@AAAEG@@@@@A@ABCBE@A@AAA@A@A@@@@@A@AAEACAAAG@ABCBCBABCDE@ABAB@BAD@@@BA@AAC@A@ABA@C@AAAAC@AAA@A@G@A@AACCAAACAA@CAA@C@A@C@AA@@CG@GBCB@D@B@BB@@B@B@@ABAB@BAB@BA@ABC@AAAA@EAEAACAA@A@ABABCBC@A@C@A@E@AD@BCD@@AAC@AAC@ADC@A@A@ABABCBA@C@@@ACAA@GAEAA@C@CAABAAA@@A@A@AAACCCCCAAE@AB@@A@A@@OIECECAA@A@C@ABC@ADAB@@CBABAB@B@@ABAB@@A@AAC@A@CBCBGBAACACA@CACACCACACBE@G@C@@@AAAEAICAAHIB@B@@@DBB@BAB@DCDC@@DGFAB@FABBB@@ABAB@@@@A@A@@@ADC@AB@DCBA@CBABC@A@@AAAA@@AA@A@A@@CCAACAC@A@C@E@A@@AA@@A@A@E@A@A@AA@ECA@AAA@A@@CAACAACAACCAA@ABAB@HCDCBA@A@CAAAACAAA@@@A@A@ADABABABC@A@AAE@A@ACAAACAAC@A@AAAAAAA@A@@BA@CDABABE@@BA@@B@DADAD@DADCBADADCFA@AB@@AACAA@C@C@ADCJMDG@ABA@A@A@C@@@A@@B@B@@@BB@@BB@BBDB@@@BBBA@@B@BA@@@ABA@A@A@A@@@A@A@@BA@@DAB@F@D@LCFAB@B@B@BADABAD@BAFAFAFA@@BB@@@F@B@D@BBDBDBDBBDDHFJDH@FCDGDGDGFGDCFEFAJAB@DC@A@A@@@@B@@@B@B@BA@@B@BAB@@@BBB@B@@@@A@ADABA@@B@B@@@@BBB@@B@"],"encodeOffsets":[[109244,31077]]}},{"type":"Feature","id":"511622","properties":{"name":"武胜县","cp":[106.295764,30.348772],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@BA@A@@FA@@DADABE@AAAAA@A@A@A@C@A@@@AA@CAAA@@BCB@DCBA@@@CA@CAEBCB@F@B@B@@@@BD@@@B@BCBABA@@@A@CAAB@B@B@@BA@@@AB@@@@BBB@B@@@B@@AAAB@@BBB@@@@@@BB@@B@@@@@@BB@@@@@@B@@B@@B@@B@@@B@B@@ABBB@B"],["@@AB@@@@A@@B@@A@A@@@AA@@AA@@A@@B@@C@CA@C@@BABCBABA@A@AA@CAACAABABC@A@ACCCAAB@@@JAD@B@@A@C@C@C@ABAB@B@B@BBB@@BBB@B@DBBB@@@B@@ABB@@@B@@@@D@BBBAB@BABAFCFCD@@CDABA@AACACCCAAACACCCAA@EAEBEBCBAD@D@DCD@@A@E@AAADC@@@ABAB@@B@@BDDBB@@BB@BBDBBBDB@@B@@@B@@AB@@@@@B@@DBABA@EAEACBE@CBA@E@C@@@A@@BBB@@BD@BB@@@@B@B@@@@A@@@A@A@@@A@@@@B@@@B@D@B@B@B@@@B@BA@I@CBAB@DDBFDFDBBBB@D@BA@@@@B@@@@@BBB@@B@@B@B@BAB@B@@@B@@B@@@@B@@@@@BA@@@A@@AAAA@@@@@A@A@@@@B@B@@@DB@@BB@BBB@BB@@@@@B@@C@AB@@A@A@A@@B@@@@DDB@@B@@@@@B@@A@A@@@@@A@@@@@A@@@@@A@A@@@@B@@A@BB@@@B@@D@@@B@@@@@BB@B@@@B@BAB@BAB@@@@@@BBBB@@@@@@@BA@A@@@A@@AA@@@AAA@@@AA@@@@@B@@@@@B@@A@@@@B@@@@@BB@@BBD@BBDBB@@@B@@@@A@@@AA@A@@A@@@A@@@AD@@A@A@@@@@AA@AA@@A@@A@@B@@@@BBBB@@@@@BAB@@@@A@C@@@A@@B@@B@@@DB@@@@@@@B@@A@EDAB@@A@A@@AA@@@@ACC@@AA@@A@@@@@AB@@BB@B@@@BAB@@A@AB@@A@@@AA@@AA@A@@A@@B@@A@AB@@A@@@A@@@AB@@AB@@@@@@A@@A@@@A@A@@@@@A@@A@A@A@@BA@@@@@@@BBBBB@@@@@@BA@@B@@A@BB@B@@@@AB@@@B@B@B@BA@@@@@A@@@A@A@@@A@@@A@@@CB@@A@@@A@@AB@@AB@@A@@@A@@@A@AA@@A@@B@BABAB@BCBA@ABAB@BA@@@AB@@CAEACA@@@A@A@A@A@A@@@AB@@@BDB@B@@A@C@A@A@@B@@@BBD@@@B@B@BABA@@B@AA@@@@@A@@BA@A@@@A@@@@BA@@B@@A@A@A@@@A@@@@A@@@@@A@@B@BA@@@@@AA@@BA@A@A@A@@@AA@@@A@@B@@AA@A@@A@@A@@B@@@@@@@BA@@B@BAB@@@@@@@@@@@@@@@@A@@A@@@@@@@@@@@@@@@@AB@@@@@B@@A@@@ABA@@@@@@B@@@B@@B@@@B@@@@A@@@@B@@@B@@@@B@@B@@B@@AB@@A@@@A@A@A@@@@@AB@@@B@@@B@@@@A@@A@@A@@@CB@B@AA@@A@@A@@@@@AB@@A@A@@@AA@BA@@@AB@B@@B@@@B@B@@@@B@B@DBDBD@B@B@BCH@B@B@D@BABA@@@EAG@AAA@@AAE@AAC@AA@@@@A@@@@A@@@AAAA@@AB@@@@@@@BAB@@@@A@@@@B@@A@@@A@@@@B@@BB@@@@@BB@@@@@BB@@@@@@AB@@@@A@@@@@AA@@@@AA@B@@A@@@A@A@@@@@A@@A@@@@BA@@@AA@@@@@A@A@A@@B@@@@@@@@@BB@@@@B@@@@@B@@A@@BA@@B@@A@@B@@@@AA@@@B@@@@AB@@@@@BA@@A@@ABCDCDCBA@CAAAA@AD@D@B@DAB@@AB@@A@A@EBABAB@D@BAF@DA@@B@B@DABA@C@C@AAAA@@CAC@C@C@CBEBCBEBA@@@ABA@A@@@A@@@A@@B@D@BADBB@BBB@BA@@BA@E@C@A@CB@B@B@@DBFBFBBB@B@BABA@@@IAGAEAA@AD@@ABAB@D@@B@DBB@D@D@BB@BABABAD@BBB@D@DABC@AACACDAB@@AB@B@@AD@@@@@F@@@B@B@@@D@D@@ABEBCBCBC@CC@ABC@A@AA@A@A@C@ADCFCDADCB@@CBCDCDAB@DAF@FBDDFBDDBD@FAFAF@D@@@B@DBDDBDBFBHBHAFADABAD@@BBDBBDDDBDBDBBBBB@D@D@FADAB@DAB@@@B@B@DDBBBBBB@BD@@@D@BABABA@A@A@A@AB@B@B@DBB@D@B@D@BADABAB@BAB@A@@B@@B@BB@@BBBB@@@B@@@B@@AB@B@@@@BBB@@BA@@B@B@@BB@@BBB@@@B@@@@@@@@@@BA@@B@@AD@@BD@@@BA@@@CB@@AB@B@@BB@@B@BB@@@B@@@@AB@@BBB@B@@@B@@@@B@BAB@@@@BB@@@BB@@@@BB@B@BB@BB@B@@@B@BABABADA@@@@@AB@@AA@@AAAA@A@@@ABA@@@AA@@@A@A@AB@B@B@BBBBB@BB@@B@DAB@@@B@B@@@B@B@@@@A@A@A@CAA@@AA@A@@@AB@@AB@D@D@D@B@BAB@B@@@@BB@@@B@@A@A@AAA@A@ABABA@@BAD@D@B@B@@BBBA@@B@@@B@@@@B@B@BAB@BB@@BBBB@@B@@@B@B@BA@ABABAB@BB@@BDBD@B@FBBBBDBB@BAD@DADABAB@D@B@BB@@B@DBDBBB@@BB@DBDBD@D@DBD@B@F@@AD@DA@BF@DB@@BB@BB@@DBDBLDNFFBFBH@F@F@FCB@HADABCFCBCBC@EBAAE@ACC@AAACAECCAC@AAA@C@GAGCGC@@AAAA@AAABC@ABCDABABEFC@CBADEDC@A@C@IBEAC@@@C@A@CBC@A@@BAB@B@BBD@BBDAB@@@FABABAFCFEJE@@DCHEDE@ABCBABAB@BADBB@BBBBD@@BB@D@F@F@FAF@DAB@DAB@F@DBDBD@BBDBFDH@@@DBBFFBDBF@B@B@D@FABAB@@AB@@ABABCBADABCDEBC@@B@B@BBBB@B@B@FBDBBDBDBF@B@DAD@DDBBDDFFHDHFD@HFDBFBDBB@B@B@B@D@D@BBBBDBFBF@F@BAF@DADAD@F@DBD@BBD@F@F@D@JADAD@D@BAD@F@D@F@FAD@DCDADADAD@DA@A@ACCACA@@A@AF@B@D@F@F@BA@A@A@A@G@GBCBEDCBCDEDABAFCDAB@F@D@B@B@BADA@AF@DADCB@BC@C@AAA@AAA@AAC@ABA@A@@@C@A@A@ADC@A@EAC@EBA@CDCBADCDCBC@AA@AA@@A@@ABA@A@AB@@CB@@AAAAA@A@C@C@CB@@AB@@A@@@AAA@AAA@AACCAE@@AAAAAAA@ACAAAACAACCA@A@CAA@A@@@AAAA@A@A@A@ABABABCBABABCDCDCBABABA@@DE@@BA@@@A@A@@@@BAB@AAAAAAAC@@B@@ABAB@BABAB@@AB@@ABABA@C@CAAAAA@ABABCBABADC@C@AACA@AAABA@ADCBADEBCBC@CAAE@CBC@GBCAC@@@@@@@@BA@@@A@A@AA@AA@AA@@@@AA@@@@A@@@A@ABA@A@@@A@@@@@BA@ABA@@B@BAB@@ABABA@@D@BBB@B@B@@ABAAA@C@A@@DCB@B@F@B@B@@A@A@C@CAA@CA@E@E@I@@@CA@ABAACAA@CAA@@@AC@C@EACAA@@@ABA@@BADADABABABA@ABABABABCBA@C@C@AAA@BC@CD@BABADEBA@A@@A@@@AAA@ABAB@B@B@BA@@@A@ACA@A@CBCBA@C@ABA@AAAACAC@AA@ABA@@@A@@@@A@A@CAA@@@ABA@@@@BA@AA@@CBA@@@AB@@CBA@AB@ACCAAAA@C@AA@@@@AC@CB@@ABA@@@CA@A@A@A@ABA@ACE@A@A@AA@A@A@CBA@A@CDA@ABA@C@CAA@ABAB@BAB@BC@@@@BA@ABA@@@AB@@AB@@A@A@A@@BCACBC@@AA@BCBAAA@@@ABAB@BA@@BADE@A@@CAEAIEGA@AA@@EBC@CFIBC@@@AAAC@@A@@@AA@A@@B@@A@@BA@@AA@C@C@@A@A@G@@AACAC@@@A@@B@D@F@HBB@DAD@@A@@@@BCBA@CAA@A@ABB@@DA@ABC@A@C@C@@A@@@CB@@AAABA@@@A@A@@@AA@@@@AA@@B@@@B@@@@@@@BA@@@@@@@@B@@@@A@@B@@@@@AA@@@@AA@@@@@@@@@@A@@@@BABA@@@@B@@A@@@@@@@@@AA@@A@@@@A@AA@@BABB@@@A@@@AAA@A@@A@@B@@AB@@@A@A"]],"encodeOffsets":[[[108814,30937]],[[108807,30922]]]}},{"type":"Feature","id":"511623","properties":{"name":"邻水县","cp":[106.93038,30.334768],"childNum":15},"geometry":{"type":"MultiPolygon","coordinates":[["@@@B@@@BB@@@@@B@@@@A@@@A@@@@@@@A@@A@@@@@@@@AA@@@@@@@AB@@B@@@@@@B@@"],["@@BADCBA@@B@B@@@@@@@@AAAC@A@@@A@ADED@BBDB@@@B@@A"],["@@@@B@@ABA@@@@@@@@A@@@@@@AB@@@@@@A@@@@@@@A@@@AB@@A@@@@A@@@A@BA@@@@@AAB@@A@@@A@@@@@@B@@A@@@@BA@@@A@@B@@A@@@@BBB@@@@@BA@@@@@@@@A@@@@AA@@A@@@@BA@@@@@@@A@BB@@B@@B@@@@BB@@@@B@@A@@@@B@@@@@B@@@B@@@@@B@BB@@"],["@@C@@D@@@@DC"],["@@GCDF@BDC"],["@@C@DH@@@G"],["@@D@DADEUG@@JP"],["@@LO]D@@@@@@@@RL"],["@@BAA@@@A@BB"],["@@@A@@CD@@@@B@ABDC"],["@@@@@@@@@@@@@@A@@@@@@@B@@@@@@B@@@@A@@@@AA@@@BFB@B@FDAM@@A@@@@@@@@BA@@@@AAD"],["@@B@@@@@@@@@@BA@@@A@@@@@A@@@@@CDBA@@@@@@B@@@@@@BA@@@@@@B@@@@@@HRDGBC@CBC@@BCDADAFAF@BBRRDFADADCHAHCJ@BAH@BBBHDHBFDBBB@F@FCJGJEA@ACA@CCAAAAAA@AAA@AAAAAAAAAAAACCAAAACACACAAAC@A@AAC@AAC@CAA@AAA@ACBIDEB@@ABA@@@ABABGBIB"],["@@@A@@@A@@A@@@@@A@@@A@@@A@@BA@@@A@@@A@@@@B@@@@G@ABA@@B@@A@@BA@@B@@@@@BDD@@@BAB@@@BA@@@A@@@A@@B@@A@@@@A@@AA@@A@@A@@@@A@@A@@@@@@@@@@@@@@@B@@@@@@@@@@@B@@A@@@@B@@@@@@A@@@@@@@@@@@BBB@@@@BB@BBBB@@B@@@@@@AB@@@B@@@@@@@B@D@@@@A@@@@@@BA@@@@@@B@@B@AB@@A@@BA@@@@@A@@A@@@@A@@@@BABAB@DA@@@@BA@@BA@@@@@@BABA@@@@"],["@@@@@@@@@A@@@@A@@@@@@@@@@@A@@@@@BB@@@@@@@@@@@@B@@@@@@@"],["@@@@AB@@DH@@@@@BA@ABE@CBCBCDADAB@@@BE@ABABAB@B@@AB@BA@EBA@@@@A@@@@@@@AAA@@@A@A@@@@@AA@@@@A@@@ABA@@A@@@AA@@C@CCAA@@@@@A@@@A@@@@B@@A@@@@@@@A@@A@@@A@@@@@A@@AAAA@BAA@A@A@A@@@A@A@@@AA@@A@@@A@AB@@ABA@AB@A@@AA@A@@AA@@A@@@A@@@@BA@@@@@A@AA@@AB@@@BA@@@A@A@@@A@A@@@A@@@@@@A@AA@@A@A@A@AAA@@AAA@A@A@AAA@AAA@AAAACA@AA@@@ABCBABA@A@C@CCECC@C@@BADBJABABA@@AC@ACCCACA@A@C@CBCBEBEDIDKBG@@@@BAB@DA@ABCBAB@B@BBBAB@DADAD@DDLBFAB@DCBKJIHKDEDCBABABAB@@AB@B@@BD@B@B@D@DBD@B@DAD@D@DAB@B@D@@BD@BBD@B@B@B@B@B@D@B@B@@BBBB@B@@BB@B@@@@@@@B@B@@@@@H@FBFBDBDDBB@H@@@BBBB@HBJ@DFDBD@@@HBBBDBBD@HBB@BBDBBBBDFPDDFH@BFJDJBDBBB@BBJBDBFBFDBDBDBBDFBBDBDBBBDF@LBD@DBFAD@@@BAD@B@DBDBD@FBFAFAL@B@D@B@BDDBFBDBF@FAL@DBDBDDBBBBDBB@DBDBDBBD@HBF@B@DBFDD@DBFFBBBBDFDDB@DBBBBDDDBHBDBJBFDDDBDFBF@BBD@BDFDDFDFBBBD@JFNHDDBBBBFJHNFLBDDFJPNTDDTVHJ@@@@HLHF@BBBBBBD@BDDDDBBB@@BD@BADAD@F@F@DBBBBBBBBF@@FFPNRVJL@@FHDHBBBJBDBHDHLNB@@BB@@@DBBBB@BBB@@BB@@B@BB@@@BBB@BAB@@AB@B@B@B@B@BB@@BB@@@@@B@BBB@B@@BB@B@@@BBBBB@BBBB@@BBBBBBBD@H@DBDBBBB@F@FCLEDABABAAA@@@BA@@@@@@@AA@@@@@@@A@@@@B@@@@@B@@@B@@@@@@B@@@@B@BABAD@B@BAB@B@B@B@D@BBD@B@D@B@B@BBB@@@BBB@B@DBB@B@B@BAD@DAF@BCDGBA@AAACE@@@A@@@ADA@@@@BCBC@A@@@@B@FADB@@B@@AA@CCAAAAAAAA@ABAD@H@DB@@DAD@B@D@B@DBB@JF@@B@B@@@BAAI@@@AB@BAB@FBBBDDB@@@BABABA@A@CAAA@BA@ABADAB@@AAA@A@@FCDAF@F@@@D@B@B@B@B@B@B@B@@B@B@@AB@@ENMPA@ABC@CBCBCDCDEF@BA@CBOBCB@@ABA@@BCBCB@@@BA@A@AB@BAB@B@@@@BB@BBBDBBBBBBDAF@BBBB@BBB@@BBAB@D@@BBB@B@@B@B@B@@@@ADKBCDADADA@@@@B@@@B@D@BBB@@B@@@B@B@B@@@@AB@@A@A@A@@@A@@@@B@@@B@B@B@@BB@@B@@@B@B@@ABAB@B@@@FAHAF@@@D@B@B@BAB@BAJIHGDAFAFAJ@FADCFCDBDBBD@DBFDBDBBB@@D@BB@@BB@BB@@@@B@BAD@DA@@BBF@BABAB@BEFAB@@BBB@B@B@B@BAB@@@DBB@B@@@@ABGDCDA@@FABA@@DCBCBA@E@C@ACC@@@CB@FADABABABA@CBC@ACECCGCGAC@A@GCCCCCEGGKAACCCAAAAC@AA@AAGECAE@GAAA@CDEDCHCLEDAJB@@DA@@B@@A@A@A@CAAAA@A@A@C@@HGFEBABAD@F@F@H@FBJHHBF@FAFABABA@A@KAA@AA@CAIACA@@ACBEAAAAO@@AAA@ABCRCD@@ABA@C@C@CACAAA@C@CAAAAAAC@ABABAHAB@@CBAAA@AB@BAJ@B@DABA@@@ABAD@B@B@@B@@ADAB@@FBBBDBD@JBD@@@@B@@CDCB@BED@@@B@@@BB@DAD@B@@BBBB@@@@ABGBAB@BADAB@BA@@@A@AAAC@AAAA@A@@@@BA@@@AA@GAA@@@@B@B@DAB@@CBAAA@@A@AAGA@@@CACB@@AAB@BCBA@A@AEAC@CD@@@B@@ADA@@B@@AB@@@@@@A@@@AB@@@@@@@@@A@@BA@@@@@@@A@@@@@@@@AB@@@@@A@@@AB@@@@@@@@@B@@@BABA@@@@AAB@@@@@B@@@@@@@@@DC@C@CAI@@@@ACBA@@B@D@B@B@@A@@@AACAAA@A@CBAAGIACBC@AFAF@DAD@DB@BBB@BDBAE@@@@@@AB@A@@@@@@@@BA@@@@B@@@@@@@B@@@@@@@@BBC@@A@@@@@@@B@@@BA@@@@@@@@B@@@@@@B@@@@BNB@F@IO@@@@AA@@@@@@A@B@@@@@B@@@@@@@@BVHQK@@@@A@@@@@A@@@@@@A@@B@@@@@@@B@@@@B^CGQ@@A@@@@@@A@@@@@@DCA@A@@@@@A@@@AB@@AA@@A@@@A@@A@@B@@@B@@AB@@@B@B@@@B@@@BA@B@@DBJAHABABA@@B@BA@@FAJCDAAA@A@A@AA@@AA@AAAAAA@A@A@@ACAA@AACAAACACAAAE@AAA@AAC@EAAAE@A@CACAC@CAAACAC@AACAAACAAACACACAAAAACAA@AA@@AAACEAA@AAC@@AA@@A@CCCCAA@AACAA@AACAAA@@AAAAA@AAAAAAC@@AA@AAAAAAAA@AAAACCCAAA@AAAAAAAACCA@@@@@A@@AAAAA@AAAAA@AAA@@AA@@A@AAA@AA@@AAA@@CA@AA@@AA@AACAAAAAAAAA@AAAAC@@AA@@ACAAAAAAAACCAACCCACCCAAAAAAAA@A@AAAACACCAACA@AAACACCACAAA@@A@@@@GEECACAKAECCGCMEEACBEBC@EAAE@EBCFA@A@A@@@A@A@@@AA@AA@AA@AAAAAA@@CCACBC@A@AAAC@CB@BAD@BCBA@U@C@AAIQCC@A@CB@DABA@AAAAAA@@CBADCNI@A@AGGEECC@C@A@AAAECGCIAGCA@AACBA@ABAB@@AL@BABABEBC@C@GKAC@CDEFGBA@CAAC@GAI@IBEBEBADABERADABCBG@E@ABA@ABABABAD@@ABAD@BAB@BCLADEFAD@BABADABABADA@CB@@CD@@B@@@@@@B@@@@A@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@CCD@@@@B@@@@@A@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@AB@@@CE@H@@@@@BB@@@@@A@@@@@@BA@@A@@@@@@@@@@B@@@@A@@CGEAEACCEGCCAACC@AAAAAAAAAGAAA@AB@B@HAB@@A@@@C@A@G@AAAA@A@A@@@@AACCE@GAA@ACCCAA@AB@D@DA@A@C@IEEAICKAGACA@CAKAAA@E@CDGHC@CBE@C@A@CAC@ABA@@DABC@GCCAM@AACAEAC@CAA@@B"]],"encodeOffsets":[[[109813,31080]],[[109840,31078]],[[109803,31152]],[[109550,30808]],[[109548,30808]],[[109544,30806]],[[109820,31077]],[[109826,31073]],[[109608,31249]],[[109803,31100]],[[109812,31072]],[[109831,31052]],[[109853,31102]],[[109625,30762]],[[109426,30750]]]}}],"UTF8Encoding":true});}));