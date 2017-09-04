(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('汕头市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"440507","properties":{"name":"龙湖区","cp":[116.716446,23.372254],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@B@BBBBBFBHDFFCDCFCHEFCB@BADAHCBAJA@@DAHCB@@ATG@@\\IHCLCLELEHEFCBA@ADEBE@ADQ@ABWFUJGNA^AO]SOcSIMIMS[GMBQKLQPCDCHGDEBGBG@CDEFIFMBSAE@I@@\\@DD@@B@HC@@@@@@@@@@D@B@D@@@@@F@D@@@@AB@DAB@B@@@DAB@D@@@BA@ADEFFBBCDB@ADBGHFB@DD@BBHC@AB@DHDJCFAAAACECF@@ADADABABAD@@A@@BB@ADAAAAECCAC@CBAB@D@BBB@B@D@DAB@B@@@@@@AD@@AFA@@B@BBB@@@DBBBF@BBF@J@@@@@DADABADAB@B@DBBBB@B@@DJBBB@F@DBBBB@"],"encodeOffsets":[[119513,24023]]}},{"type":"Feature","id":"440511","properties":{"name":"金平区","cp":[116.70345,23.365556],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@[qLKBOBKACAIAA@OGKGGC@@AAGCIFmX]IEIDWBCA@EBM@ODM@C@ADBDB@FHABCFDHFHFNCZCRADCBKJ@@@D@PDFDJFHDF@BCBAB@DB@B@B@LCB@DHA@@@EBIBABBD@DBDBABABABFABC@@@BDBDFBDA@@BB@@B@DBBB@F@DAD@B@D@DA@@H@B@BABCBABAACAEF@F@D@@AFBD@@@@BF@BDFB@B@HC@@@G@CBABCDABAB@DEDCDAB@BADABABABEDCFADA@CDAFBDAB@DCBABAB@BBB@D@BCB@BA@@D@FCBFBB@BBAD@DAD@BAB@B@DDBDB@BB@@BAF@DCD@DADBD@@BBDBBB@B@DB@@@B@@AB@@BB@BB@@@BABADDFDBC@@@ABCBEBA@@BABDDBD@B@DBDBBBHDBB@@@@@IAE@AAEAA@C@@AA@A@AB@BE@@BC@@@@@@@ABA@C@C@AAA@A@CBADAD@DBFDBBBBBCA@@AB@@@BCBABABCBC@@DEDFBBBBDECICGA@@BGDAAC@@CEAHGCA@BCAADEAFEBCB@@A@@@CBA@C@@@ABA@CBA@@@@@C@E@@@@@C@A@C@@@@@@@@D@@G@AC@@C"],"encodeOffsets":[[119518,23911]]}},{"type":"Feature","id":"440512","properties":{"name":"濠江区","cp":[116.726973,23.286079],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@@BB@@@@@@A@@@@@A@@A@@@@@@@AB@@B@@@@@"],["@@CBSBOCC@SGAAUSkbCB@BEDCBEDA@IFCBCB@B@B@BAB@@ABA@@B@@ABAB@@@BB@B@B@@BA@ABAB@B@BA@A@@B@@@@@@BB@B@@CBABA@@@A@CBA@AAAB@@@BC@A@@BAA@@A@AB@B@@AB@@A@A@@@@B@@@BA@AB@BAD@BAF@@ABA@@@A@@@ADAD@@B@B@@@AB@@A@A@@@@BA@ADA@AB@@AB@@ABAB@@AB@BA@ABABAB@B@B@@D@B@@BB@@BBB@BB@B@BB@@@B@B@@B@@B@AB@B@@A@ABBBB@@BBBD@BBB@B@BAB@@AB@@AD@@@D@@A@@@ABB@@B@@B@@@@B@@@BB@@B@BA@AB@D@HABC@C@C@CCC@CD@BAznWJEHDBB@@HDLHPHB@JBDBLBPALArKJ@F@TBNAJEFEDCH@HAFAHCDGDCROLK@AF_HMBG@@@G@O@CBKFSFEDAFALBJAFAHCDEBE@IAGGQGSOMQCSB]H[N[H"]],"encodeOffsets":[[[119609,23809]],[[119549,23772]]]}},{"type":"Feature","id":"440513","properties":{"name":"潮阳区","cp":[116.601509,23.265356],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@GPFV@BBBBFDNDJBNAB@FGHEDKHQFI@E@@@E@G@O@CAAKAGEEGAEBCDCBADE@CCECCBGHGC@@@@GG@@@@@A@@@@@@@@AA@@IKOIGEEAG@GA@@C@C@ABA@@@@BCB@@ABC@A@C@A@A@G@A@A@EB@@CDEDCDAD@F@@DFBDBDHJ@D@D@BCBEBC@E@A@CBC@EDADABAF@D@H@BBBBDDDDDBF@BADABCB@BAB@BBDBB@BBB@D@BCB@BCD@BADABAB@BCBE@CBA@CBA@A@@A@ABA@A@A@AACCAAA@@A@ABA@@BA@AA@AA@AAA@E@ABA@CD@@CBC@A@A@CC@A@@EGCAC@CDAFAFA@A@A@C@C@A@AB@@@@@B@B@BAB@B@@A@ABEAC@C@A@A@AA@@AAA@@@A@A@ABA@CBC@CB@@ABBB@BABA@A@AAABA@A@E@ABA@A@CAA@A@ABAB@BA@C@C@ABA@A@CDEBC@CBAB@@IBC@@@E@@JBFBH@BBBAHEF@@CDABEDCBAF@B@DBBBB@@BBD@D@DBDBD@H@F@B@F@D@DAF@@BBB@B@B@D@BBDB@BDDB@B@DCDAFAB@BAB@B@@@B@@A@@B@B@@@@@@BB@B@B@@@B@@@B@@@@@D@D@@@@BFCH@DBH@@BB@D@@ADCBAD@FAHADBHBDBAB@B@DABAB@BB@@@BABAB@B@DA@C@ABA@AC@@CA@BCBCBAB@BAD@B@@CBCD@@A@C@A@@@AFBFC@AAGA@AC@AFCFAB@B@D@FAHAD@D@F@BBDDDDCHCHAFAF@DBBB@@@BB@B@BAB@B@B@BB@BB@B@BB@@BBD@BAFCDABB@BEDC@ABABAB@B@@@BBD@D@F@@BB@@@BDD@HBB@DBBB@BBF@@@BBDBBNBFBBBDDBDB@BBDAB@B@BB@D@BABABBBB@BABABBBD@B@F@F@DBDAB@B@D@D@F@D@DDBF@@DHDD@@BBDBD@@@DA@C@E@@@@@C@KAG@C@G@@@ABE@CBGBCBEDEDCDAD@BADBFBJFFFDH@@@@FH@@BBHHDBFB@@@@DDB@@@BB@@B@@@BBB@FDDBB@FBHBB@HBF@D@DAFABCDADE@@@C@C@C@E@A@@AC@AAACG@ACCAC@@CEACA@EEEEA@ACCA@AEECE@@@ACE@@@C@ABC@@BC@@DAFAF@F@B@N@NBP@PBD@DBBAJ@FADALCB@HELGJG@@JKHKBM@@DIJYBANQLIDABCDQDYEMEGCGDEBAEGA@ACBCD@N@PCN@FAB@ADCXFJ^JBy@ADCD@DDD@D@D@BA@G@CBAB@@A@AA@@A@@@A@@A@@@@AA@BA@@B@@@@C@@BC@@BA@@BA@A@AAA@AACAA@@AAAA@B@BA@A@@B@AA@@@@A@A@@AAA@A@@AAA@AA@@AA@C@@@@A@ABABABAB@@ABA@@BABA@@BA@@BAB@BCB@@A@@B@B@@@BA@@A@A@@@BCBC@@B@@@B@BA@@BE@ABC@ABAB@@A@@@A@@B@B@@@BA@@@ABAB@@@BB@AB@D@@A@@BABBB@DAB@@@B@BADA@@@AAA@@@@@@@AB@B@@A@ABABAB@@AA@A@A@@A@@BABA@@@AB@BA@@BA@A@A@ADADAJEB@FCDAFC@ADAlaCCQSagOMEGMEMC]C"],"encodeOffsets":[[119437,23707]]}},{"type":"Feature","id":"440515","properties":{"name":"澄海区","cp":[116.755992,23.466709],"childNum":3},"geometry":{"type":"MultiPolygon","coordinates":[["@@A@@B@@@@A@@B@@B@B@@@B@B@@@B@B@@AAAC@A@"],["@@B@@BB@@B@@BB@@B@B@@A@AA@AAAAA@C@@@@B@@@@B@"],["@@CEAEAGO[]BMBIHEVAX@BCR@BAFCF@BABEDGFKFKFKDGD[J@@SH@BA@GDCB@@IBABGDCBABA@EDGFEDCDEDADAHAHAJAF@HCD@BCDAH@BAJ@B@DAH@BCD@RBF@L@F@B@BBFFBBF@FBBFBBBD@D@BDCR@BA@ADEB@BABCDKDCB@BBDBBDFFDB@FBBBB@@H@DAFAF@DHDB@XBF@@DBBBAD@DABA@A@ABA@ABAAA@AD@@ADAF@BABCBAB@@C@@@C@ABA@@@@@@B@BA@A@CB@@A@CFA@@B@DABBBB@@@BABB@@@BAB@B@@BBB@@BD@@B@BDB@BB@BB@BAB@BAB@@B@@@BB@@@@A@@BA@@B@@ABADAF@@@@@@BBB@@@@AB@@@D@BB@@@@BB@BB@@DBDBB@B@@B@B@D@@C@AB@D@D@BDD@@@BBB@D@B@B@@@B@BBB@BH@BAB@@A@AB@@@B@B@BA@@B@B@BBBBB@B@BB@BBB@@DBB@BA@@@AD@BABBB@@@@BBBBB@@@@B@@A@@B@@AB@@@B@@@@@@@@BBB@BB@@@@@@BBB@B@B@DBB@B@@@@A@AAA@ABA@@@@B@@@BAB@@A@AB@@A@@@@B@@@@B@BB@@@BAB@@@@BBBBB@@@B@@B@@ABABA@BA@@@AA@A@ADA@@BBB@B@@@BBB@BBBB@BBB@DBBDD@F@FA@ADEBAD@B@B@BAB@BADAD@DBD@FCBAFA@C@AAAB@@E@A@E@ADCDADAB@D@BA@A@A@@D@B@BBBBHDDBB@D@BCDBDFFAD@HCB@@A@AACBGDCDEFCDABA@@@A@C@CAG@AAG@C@E@EDCBCJMDQ@SAG@aOEUSMSGOEmAKCU@G@ECEECEE@@@AAA@@@AAY@M@IAE@A@@@@@A@@@@@A@CA@ACAACAAAGBEAEAAACC"]],"encodeOffsets":[[[119679,23977]],[[119681,24011]],[[119658,23966]]]}},{"type":"Feature","id":"440514","properties":{"name":"潮南区","cp":[116.439178,23.23865],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AEAACBA@C@@ACCCCGAAAC@KEACAAGCCAACAA@ACAC@C@AA@@AA@@A@@AC@C@A@CACDBB@@@BCBA@A@C@A@CBABFB@@@B@@BB@@BAB@BA@@BBB@B@@B@@@@A@A@A@@@A@@@@B@@A@A@A@@@A@@@@B@BBB@@@@ABABABABABA@A@AAA@A@ABA@A@A@@B@@B@@@BB@@A@A@A@ABAA@CA@@@E@A@A@@@@B@@A@@@AAA@@@ABAB@B@BBBBBB@@B@@@@ABABAFA@@B@DAD@B@@@D@BABAD@BABA@@BBD@B@@A@CBABCD@@AB@@@B@@@@@BA@CBA@A@@@AB@@@BB@@@BD@B@@A@@@CBA@C@ECA@A@@BAB@@ABA@C@ABAAC@A@A@A@A@A@@AAAAA@A@CA@E@@BEB@@A@E@ABAB@B@@BBA@@BAB@BA@BB@B@@@BB@@@@@@AB@@@BB@B@@AD@@@@AAA@@@A@A@A@@B@@BB@B@@EDA@@AA@AACBABCB@@CBC@GD@@EBADAA@@AA@@AAAB@B@B@B@@@BA@AAC@AAABAD@B@BBDA@CBABAD@DABEFAB@BA@BFDFBDBBBDB@DBDB@@@BAB@BA@ABBFBD@B@B@B@BABAB@D@D@F@@ADB@B@B@@ADBB@B@D@@@BA@@B@@@@DBD@@@DBB@BABAAAA@A@@@A@AAA@@A@A@B@BB@B@BABAAA@CAA@EBBBBD@BB@B@@B@BA@ABAB@B@DBBDBDBDBFDDABBDDDF@B@BAB@BC@@@AA@CA@A@A@ADAB@@@F@D@@@D@DADBBBDBFDFFDB@DAD@H@@@DAD@BBDFD@@BLJ@@FBBF@DAH@BBFDFDD@@BJ@DAB@B@@DFDDBDB@BB@B@B@B@@ADCHBDDBBBDBDBB@BBB@@@BD@D@B@@AB@BGF@@BBDBBBHBFDDBD@DABABABA@@F@@@D@JA@@BADAD@FADCB@B@BAD@D@B@@ABABAB@B@DBB@B@BAF@B@B@BABBB@B@BA@AAABA@@DAD@DAB@BAB@B@@@B@BB@@BBB@B@D@D@FBBAB@@@@ABA@A@A@A@@@@BAB@D@D@B@B@B@BEBEDCD@DBFH@@@BDDB@B@D@DA@@DCB@BAF@B@BBB@@BBBB@@AB@BAB@@@BBDBBD@B@B@BAB@B@BB@B@DAB@DAF@DA@ABABABC@ADC@ADA@A@CAA@AAAAC@ABA@ADABABC@AAECCCCACAA@A@G@CBEBABCFCD@DAB@F@D@FADA@A@C@CGIACACCE@@@EBCDCFCDC@@FAB@B@H@B@B@D@B@D@BA@@DA@A@@B@BAD@D@@@HBH@FBHFPJJL@@BB@@@@@@@@@B@@@@HH@@@@HDHGDAFDDDF@BCDADCFAHBFFBHBLDBP@H@F@@@F@J@RELGFCHG@EBAAMCICMAEAA@AEUOiIUOSYIMAE@C@ABEQGEAA@AAAAA@@@CBA@@@@@AAAAA@A@C@EAAA@@AAC@AAABABA@AAAAA@A@@@ADA@AB@B@D@BEBA@@@@@@A@@@A@A@@@@@@A@AB@BA@AAAA@@CBAAA@@BADA@A@CB@@C@AAABAB@@A@@@@@@A@@@@A@@@@@A@@@A@@@@@@@A@@@A@ABC@A@@@A@C@AA@@CCCCC@C@C@@@AG@ACAOCA@C@CBEBA@A@ACFCBC@A@ACAICEC@AACBEACCCAA@AC@AAAA"],"encodeOffsets":[[119224,23621]]}},{"type":"Feature","id":"440523","properties":{"name":"南澳县","cp":[117.023374,23.421724],"childNum":18},"geometry":{"type":"MultiPolygon","coordinates":[["@@B@@@@@@@@@B@@@@@@A@@@@A@@@@@AB"],["@@@@@@@@@B@@@BB@@A@@@@@AA@"],["@@@B@@B@@@@@B@@@@@@A@@A@@@A@@@@@@@@@"],["@@B@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@@@@@@@A@@A@@@@@@@@A@@B@@@@@B"],["@@@B@@@B@@@@@@@@B@@@@@@A@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@"],["@@@B@@BB@@@BBA@@@@@@B@@@@A@@@@@@@@A@@@@@@@@@AA@@@@A@@@"],["@@@@@A@@@A@@@@A@@@@@@@@@A@@@@@@@@@@B@@A@@@@B@@@@@BB@@@@@@@@@@@@@B@@AB@"],["@@A@@B@B@@@B@@BB@@B@@A@@@@@A@@B@@A@@@@A@AA"],["@@BBB@@@B@@@@@BAA@@@@A@@@@@AA@@@@@A@@@@A@@@AA@@B@@@@@@BBA@@@@B@@@@@B@@"],["@@@B@@B@@@BC@@BAAA@@@AA@@BA@@B@B@B"],["@@A@@@@B@@B@@@@@B@@@B@@@@@@@B@@@@@@A@@@A@@AA@@@@@@A@@@@B@@@A@@A@A@@@@@@@@@@@@@@B@@B@@@@@@@@@@B"],["@@@B@@@B@@B@@@@BB@@@B@B@@@@@@@@AB@@@@@@@A@@@@@@@@AB@@A@@@@@@@@@AA@@@@@A@C@@@A@@B@@@@"],["@@A@@B@B@@@BD@@@B@@A@@@@B@B@@@@A@@@@@A@@@@@A@@@@@@@A@@@@@@@@@AA@AB@@A@@@AB@@@B@@"],["@@A@A@@@@BAB@@@B@B@@@@BB@@@BB@B@@@@@@BB@@B@@BB@@B@B@@@@AB@@ACA@@@@AA@A@@@@BA@@AA@@@A@@AAA@"],["@@ABCB@B@BBBBB@@@BB@@@@@BAB@B@BA@A@@@ABA@AA@@@A@@AAA@@@A@@@AA@@@@B@BA@@B"],["@@AA@@A@@A@@@AAC@@AA@@@@A@@@@AA@@AA@@@@B@@@@@B@@A@@@@B@@B@@B@@AB@@BB@BBBB@@BB@@B@@B@@BB@@@B@BA@A@A"],["@@BB@BB@B@@@B@@@B@@@@AB@@@@C@@@C@A@@@@A@@A@@AAA@@@@@AA@@A@@@@B@B@@A@@B@B@@@B@@@B@B"],["@@@B@BABA@GBEBEBEBI@A@A@C@CAAAC@A@C@CAGAIECAA@AA@@ABE@A@@@A@ABEBA@IBC@IDC@AB@@ABBBBH@B@@ABA@CBC@AA@@C@A@C@C@A@G@MBE@EBGAC@C@C@A@C@A@EAA@A@A@C@A@CBA@A@E@G@CBABABAB@@A@A@AAA@CBA@C@CBC@ABCBA@AF@H@BDD@FAD@FBFJFHBH@F@DDLJJHJDFBB@B@B@B@FAB@DADAF@F@D@DCDIBABABCHGFEDAFCF@DBBBBBFFDDBBD@FBBHDJDDFBFD@HFHFDHFNFP@FAB@FCFGBE@EBA@AD@DAB@BAB@B@B@FBPHBDDDDJBF@B@@BBDBB@@B@@@@B@B@B@D@B@BABB@@BB@D@BBB@@@@B@@AB@@@BB@@BAB@BADGBC@AAA@AB@BA@CACAAA@A@AAAC@AAA@ABGDCDA@@B@DBB@@@BBFDDBDAB@@@BA@CBEAC@C@AD@B@DAFADCBA@A@AA@A@CBAAAAAC@AA@A@ABGHA@@@A@EEACAC@A@AB@DABC@C@A@@@EAAA@A@@A@@@AB@BAD@DADCBEBGAGAEAGEEA@AAA@@@A@AA@@DA@AAAABCBC@A@A@@A@AAAACA@A@A@@@A@ABABAB@D@B@B@BABC@ABC@A@CACCEEEAA@AB@BBBBB@@ABA@ABAB@BBB"]],"encodeOffsets":[[[120127,23839]],[[119959,23930]],[[120133,23844]],[[119934,23877]],[[119921,24047]],[[119945,23914]],[[119912,23877]],[[120062,23775]],[[120128,23843]],[[119894,23893]],[[119922,23949]],[[119820,24026]],[[119958,23983]],[[120103,23812]],[[119726,24019]],[[119919,24041]],[[120118,23836]],[[119912,23964]]]}}],"UTF8Encoding":true});}));