(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('无锡市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"320213","properties":{"name":"梁溪区","cp":[120.303108,31.566155],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@@@A@AA@@A@@@CA@@A@@@C@A@C@AAA@ABC@ADA@CBC@C@@@CB@BA@A@@BABA@A@@@AB@BA@AB@@A@ADBBAFAB@BA@A@BB@BDDBB@@B@B@@@CB@B@@BBAB@@AB@B@@CBBB@@@B@@@@B@@B@@BDABA@@AA@@@@B@@@@@BB@@BGBBB@@@BB@@BB@B@@BB@BDBDCB@BA@@B@@@@AB@@B@BBD@@@B@BBB@@@B@@A@@BD@@@@JGDCDCFCDAB@CDBBDA@@BBEBDF@@@F@@@@@B@@@@BBBBBB@@@BD@@@@CD@DAB@J@@@B@@C@A@@F@B@D@D@DAD@@@BB@@FA@@B@@BBB@@B@@@B@@AAA@@@@@A@@BA@@@@@@@@BA@@@A@@@B@@D@@@@B@@F@ACB@@@BABA@@BB@@B@BA@AB@@I@AB@HB@@@@@@B@BABB@@F@DAB@B@@AD@@@@@@AD@FB@@B@B@D@@@D@B@F@BB@@B@B@@@BAB@@A@ABAB@@A@@BEBA@AB@@A@AGBABC@I@@@A@A@A@BA@@@@@AAA@@BABA@@BA@ABA@@DA@@@AA@@@@AA@ACB@@@B@BA@@BA@@@@@@@@AA@@ABACF@@CA@A@@@A@DE@@BA@A@@AA@@A@@@@A@@B@@CCB@@A@@@AAA@CAA@@@C@@@@AA@@@A@@@@B@@@@@BA@@@@@BBA@ABA@AAB@@A@@@@AAB@B@@AE@@AB@FAA@@@AADACCABA@EB@B@@B@B@AAD@@F@@@B@@@@E@@DA@@@A@A@@@@CBB@AB@@AA@@@A@@@A@ADEHDB@@@BCB@@AA@A@@BC@@A@@@@@AA@@@@A@@BB@A@BBC@@@BAACD@@AA@@AAB@@A@@A@@B@@AD@BD@@B@@AB@@@@C@@@@@A@AH@BA@@A@@BC@@AA@@@@@@AD@@CB@@AA@@C@AA@@ABB@A@BBAA@@@A@@@@@@AA@@AFBBE@@@EBGDCAA@@JGHG@AHGNKBCMDE@@ACAA@@AAAAAAC@@@AAC@A@@ABAA@@A@AAA@AA@@@AAA@A@@@@@@A@@BA@CA@@A@@@A@C@@@I@A@E@A@A@@B@B@@F@@F@@@BDB@@@@BB@@BBA@@@@BA@@@C@CA@BAB@@@@@@BB@@@@BA@@BB@@DBB@@@AB@@CA@AC@@@@@@@A@AA@AA@ABA@A@C@AD@@A@ADA@@BADFB@BC@A@AB@@@BA@A@@A@@A@@@@AAAAF@D@BC@@B@@@@@@DBAD@@AHAH@B@B@@DBDHBFCDCDEFABADAD@B@B@FBD"],"encodeOffsets":[[123168,32336]]}},{"type":"Feature","id":"320211","properties":{"name":"滨湖区","cp":[120.283811,31.527276],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@CB@BCBA@ADGBE@CDBD@FCD@DAD@DBD@FBDB@ABBDDBBBBFBBCBC@@BBDA@A@AD@BBB@DBBBDBBB@CD@BDBD@FFBBCD@DDDDBB@HFDBFFABCDCHBL@DA@DBHFBCBCB@VJPH@@ENAD@@@@B@ADBD@HBBBDFHDHBBFFFFFFBBDBBBBBBB@B@BKLA@@A@A@EAAE@@B@B@@@@@@@@@BB@@@@BA@@B@@@B@@@B@BB@@B@BB@A@@@AB@A@@ABA@@@@@@@@@BDAB@@A@@@@@AA@AAB@@@@AC@@@@@@@ACAECA@B@AB@@@A@@AB@A@@AB@@AA@B@@@@@@A@@@CA@B@@BB@B@@AB@@ABB@B@@@@B@@B@DC@BBA@B@@ABCB@B@@B@@BA@BBA@@B@@A@@B@@@@BDA@B@AB@BBABBABAB@B@B@@@B@BA@@F@@BB@@B@@B@@ABB@@B@@@@@@@@AB@@A@BBA@AA@@@@AB@@@@@@@@@A@@A@A@@@C@A@@BBB@@@BDA@@@@@DB@@AB@BB@A@BC@BBA@@BA@@B@@@@GBKBCB@@CAA@@@A@AB@@@BBBA@@BA@@@@B@@CA@@@@@@E@JDLBFBFBHDNFDBFBLFCFD@B@B@@@D@DB@FB@@BD@@BB@B@F@HDFDHBHBJDJFFBFDDBFD@QBOBI@A@ABCDG@ABCDEDEDC@AB@HDDBF@BHBBBD@BDDA@DDD@@CB@@@BBBC@@BA@AB@B@@@@BDDDDBBBBHFBBF@B@DBD@BDD@B@BBBD@BAB@BABAD@@A@@BADADA@@BDB@@H@BBD@B@JBBB@AHBB@@A@C@@B@BBD@F@B@B@@ABABEAABCB@@@BAB@@ABA@@B@B@BA@AB@B@@ADA@@D@D@DAB@BCD@BAB@BBD@B@D@@@B@@@DB@@B@@@BBB@@@B@AC@E@A@ABCBCBAFEDCDCAECGCA@@@A@ABGBG@@BCCA@@@@@@@AD@@A@CBEBB@B@@B@@@@BB@B@@A@@BAB@D@@AEABC@AB@BCB@@@BCD@B@B@BAB@@BBBB@@@@@@@D@@BDB@@BA@@A@CA@@AA@@AB@@@@AA@@@@@@BA@ADBD@@@B@@A@@B@AA@@AA@@@@CA@A@@@EE@@@@A@AB@B@F@B@J@@@D@B@@@B@@@DBB@@AB@@@@@@@@BBB@B@@BBB@BBB@@@BBBA@@@BBD@B@@BDBBBB@BB@DB@BF@NCFCFEJGDCBADCBABAFEJIKGLIDEFHFEBAECECIAMCGN@CIABI@@@ABK@EB@BAZB@H@D@D@DF@H@BE@A@AAIF@HAD@HC@A@@@@@@AE@@BA@AC@@@A@@AB@@@AC@A@@FCB@BAB@B@@@@ADABADA@AB@A@@AA@DA@ABAB@@@@AB@@A@A@ADC@A@AkOG[M¯y{eėÇµ_"],"encodeOffsets":[[122962,32120]]}},{"type":"Feature","id":"320205","properties":{"name":"锡山区","cp":[120.357858,31.589715],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AAACAAA@A@CAE@C@E@AAC@A@A@@C@@A@@@@@EHDBBB@B@DA@CB@@@DA@@@@B@@B@@@BB@@@BAB@@CFB@@@B@B@@DE@BDBA@@BB@@@@@@@@AB@@ABA@@@A@BDB@@B@@B@@B@@CB@@AB@BAB@@ABAB@@BB@B@@@@ABB@B@B@@@J@D@BAHA@B@BA@@BABAF@@@BA@AB@B@BA@AB@@A@A@@@AAE@A@C@@@C@A@A@@@EAC@@B@@@@C@@BA@A@CBE@@@AAABA@@@@@@@GAA@@B@JBB@D@BBL@@@LF@@BB@@BB@B@B@BBB@A@B@@@DA@@DDBBDB@@B@@CB@BA@@@@@AB@@@B@D@BAB@BBB@D@F@B@CF@@BF@B@@@@BB@@CD@@AB@@@@A@@BB@@B@DBBBB@@D@HAB@FBB@DDBBFA@@B@BAD@@ADBAB@B@@DBABBB@BF@@@@B@@@@DB@@@@@BB@@@BD@@BB@B@BF@@@B@@BBA@DBDD@B@@B@@@BB@BBB@B@@@@DABABE@A@ABEBC@AB@FAJ@JFBD@D@DFDFD@B@@@B@B@DA@@B@@A@@B@@AB@@B@@BB@@AB@B@BBDD@@A@@@@AAB@@A@@@A@@@AB@B@B@BBB@@@BB@@B@@@@B@@@@DBADB@B@@@B@BA@@BB@B@@B@@@@AFA@BB@@AD@@ACAB@AAB@AAB@@AB@DDBBABABB@@DFADCBBB@BBBBDBDAB@@ABA@BB@BB@@B@@@@ABBB@B@@@BABBBA@@B@D@BBFD@B@FB@BABB@A@@DBABB@@B@@F@@@@BB@@BBB@AB@@@B@BA@@B@@AB@@@DAD@@@BA@@B@@AD@@B@@TBB@DFDA@@DC@@B@AABA@@A@AAA@BAB@B@B@B@@@BBB@AFD@DB@@B@@@B@BCBDB@@@B@@@CBBDB@@@AB@BB@@BA@CB@BB@BBB@@BA@ABA@@BBDBA@@BABABABBB@BBAB@@BBA@@BDBBB@@ABDFDDB@BCHEDADC@BBBB@BABC@A@@DBBA@@B@B@B@@@@AAABABAB@DAB@BBB@BBBBB@B@@BBABBD@BBD@B@@@@@A@@@@A@AB@BBB@BBBABA@AB@@AB@@@@@BB@@@BB@@AFCDDBAD@HDB@B@J@@@@@B@@@@A@@@@A@@@@A@A@@B@@@A@@A@@B@@A@A@@B@@@@A@@@@B@B@AA@C@A@@@@@@@@A@@B@@@@@A@A@@@@@AB@@@@@@@@@@B@@B@D@BDB@B@B@@A@@@BB@B@@@BCA@@A@@@@@A@@B@B@BBB@FABA@@@@@AB@@A@@@@@A@@@@@AC@A@@@@AC@@@@A@B@@@@@@AA@@AC@@ACAA@@AB@@CCAB@AB@@AA@@@B@@@AC@@A@@@A@@@AC@@AAG@EB@@@@@AB@@A@@@C@@A@@@ABAB@@@@@A@@@@@@@@@@@AB@@@@@@@@@@@G@CAA@@@B@@AAAA@A@@@@A@@@AA@A@@A@AAAAA@@@@A@@@@@@A@@@@B@@A@A@@BBDA@@A@@AB@@@@@AABA@AB@@A@@@@D@@@AAA@A@@@@@@ABAA@@A@@@AD@@AA@@B@@@AB@@@AA@ABA@A@A@C@A@@@@EB@@A@A@@@ACAB@AAB@AAB@AAB@AAB@A@@@@@@AB@A@@A@BA@@@AA@BCB@BAB@@ABB@A@BB@@@D@@BA@@BB@@BB@@@@@BBB@AA@AB@B@B@@@@@@ABB@@@@@@@@BABBDC@@B@@BBAB@@BJG@BB@@AFABDF@@@BB@@BAB@@@@@BGHE@A@@A@@A@@@@C@@@BA@@@@AA@@A@AB@A@AAA@@@@B@@@@AAAAB@@AA@@DEHCAC@@@@@A@@@@A@@@@@@AAB@@@@@@@@A@ABAC@@AA@@@@@AD@@@DAFEDA@@@@@A@@@@BA@AA@@@@@@@@A@@DA@@@A@@AA@@AAA@EC@@C@A@@@CBC@CBA@A@A@C@C@@@ABCBA@@@AA@@B@AA@A@@@A@@@@B@@@AA@A@@@@A@@@@AA@B@@@A@@@AAADC@AA@@@@@A@@@@CA@@@@@AB@B@@AB@BCA@@@AAAB@@@@CAC@@@GAABCFAA@@ABC@C@@@@@@@EB@A@BA@@A@@@@AB@@AA@AB@@A@CAI@@B@@@@C@@B@@@@EBAAAB@@A@A@A@AB@BC@@@CA@@AAG@@HCB@D@BBJBBC@@@@B@@@@@PDDBAB@B@@BB@@ABAFB@@BB@@@B@J@H@D@H@BEBAHEDCDA@CBIBEBE@A@E@@@EBG@IJA@@AA@AAA@AAC@C@@BA@@FC@@CGCB@@@ABA@@BA@@BA@@@@ACDAAC@@BAAC@@A@AAAC@@CBA@@E@@C@A@A@@D@@AF@BAB@B@B@D@@@D@B@BIECCA@AAAAECECIGCAA@A@AASEA@CC@AAAAC@AA@ACAC@@A@@A@@AA@@@@A@C@@A@@B@@@@@@A@@@AB@@B@A@AD@@@@AACAA@@A@@A@@A@A@@A@@@AB@@@B@B@@@A@AAABE@K@CFCJCD@@GD@D@BABAB@@@@@@@@@@@@A@BAAAA@ACCB@@DF@@B@@FA@@D@@@A@@@BA@@DA@@DA@@A@@@BB@D@DA@B@@@@DBEDDDAB@B@@BBBDHFBBA@@@@@@B@BAA@@@@@@@@A@@B@@@@@@@@A@A@@@A@AB@@@CA@@@C@@BC@@BA@ABCBEDABA@CFCBBB@@BFA@CBABDD@B@D@@@BA@@B@@@BEBABABE@CB@@EBGAC@@AA@AACB@@BB@FABGA@BA@ABC@@@@@@@@FE@GB@D@@C@@AG@@AEAADADC@@AC@@BABC@@B@BCFCBAD@@AAG@@A@@@@ID@@A@A@A@CBCBA@CDA@A@C@A@ABABCB@@AC@AI@A@@@@@ABCAI@A@AAAAAACAA@BEA@@ABADCAA@@AAAAA@@@@BCBAB@@CBAD@BA@A@EBCB@@C@@@IACAC@@@"],"encodeOffsets":[[123259,32332]]}},{"type":"Feature","id":"320206","properties":{"name":"惠山区","cp":[120.298433,31.680335],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@DEKEEACAMEGCEAEAKAICA@GAA@EBGFEDCDAD@BBBBDBDBD@BABADCDA@@@BDDDDA@@BDDA@@@BBB@B@@ABA@BF@@@BB@BB@@@ADBFDDB@@BBBD@B@@AFB@@BB@@@B@@DC@@FDDFDLFB@B@@B@@BB@@RLBC@@DB@@@F@@FB@ABB@@BB@@B@@@@@@BB@AB@@@BBBCBHH@@FCB@B@BB@@B@B@B@B@@@@F@@@BC@@B@@@BFA@@B@@@A@BBA@BB@@B@B@@F@BD@@@B@@B@@@@@@@H@@@@A@@BB@@@AB@@@BBHD@@@B@@A@@BB@@@A@@BBB@@DB@@@BDB@BFB@@BE@@AB@@@A@@@@AE@@BC@BFA@@BA@@@@@@BC@@BD@@@A@@@B@@@@@A@@@@B@@@@@B@B@D@B@@@B@@AD@B@@BBBD@BA@@@@@@@@@@@@@@@@B@@@@@@AB@@BA@BB@@@@@@@A@@@@@@BAB@@B@@@B@@@@@B@@B@@@@DAAAD@@@@A@@DA@@@@BB@A@BVK@A@BFF@BB@A@@@@BB@@@@@B@@BB@@A@@B@@BB@@B@@@@B@@B@@@@C@@BA@@@A@CB@DA@@@@BC@@@A@@BBA@BA@@@BB@B@@@@AB@@@@@BBDB@B@@DB@@D@@BBABD@@ABBABD@@@@@@@B@@@@@BAA@@AB@@BBBD@@@BBAFEA@D@@D@@D@B@B@@BB@@@B@@@@B@@@@@@@B@@BB@BB@@@D@@DBABABABAB@B@FCBA@BD@@@BDA@DAB@D@FA@@AA@@DB@@@@DA@@DB@@@@@@B@@@@@BB@AB@@@@@B@D@B@D@@BB@@A@@BA@@FB@@DFB@@@B@@@@@@BBB@B@B@@@@B@@DB@@@@@ABB@A@@@A@@B@@@@@@@B@@@@C@@B@B@@@@B@@B@B@@@B@@@@@B@@@BA@@@@B@@@@@B@@@@@BBBAEA@AB@@AB@BB@@@AB@@@@@B@DA@@@ABE@@@AB@BBB@B@@@B@@@@@B@@@@BHBB@B@B@HBD@@@@@@CBC@A@C@CBE@A@A@A@A@E@A@C@C@ADCDADAB@D@D@BAD@F@D@B@BBDBDBB@BBD@F@BBDAF@JAD@D@DADAB@BCBABC@@B@B@@@B@@BD@BBDBB@B@D@BBB@JB@ABCBA@CBC@@@ABE@ABI@EBC@A@@D@F@D@BABA@@HAN@LBRBH@@@D@VCB@AEF@FA@@B@JEB@@@F@@AD@@CA@@A@@@AFAAABA@@@A@@B@B@@A@D@B@@D@@B@BBDN@D@@@FBFDHFB@BA@IBI@EBAD@FABAB@F@BABA@C@@A@A@AAA@@A@@@AA@C@AC@CAB@AA@@@E@@A@AAA@@AC@@A@@A@@@@CA@@@@@A@@E@@AAABACA@@@ABACA@BC@ABA@@@EBAACCA@EAA@GBC@@@AAAA@C@AA@@AB@@@@@BA@@DC@@AA@@@@@AAE@@DEA@E@C@A@AAA@ABC@A@@@A@@B@@@@ABA@@DA@@@CAAACC@@CB@@A@B@A@AAA@A@A@@AA@@AE@@K@@AK@A@CAAA@@BABA@@@AA@@ABAB@@A@BDE@@@@A@@C@@@@A@@@B@@AB@@@@@@@@AB@@@B@@@@BB@BA@@@A@@@AA@AA@@@EB@@AA@@C@CBC@C@A@E@@@@B@DA@@@I@A@CBC@@D@@C@@A@@AAAAAA@@@@@A@@@@@E@@CEFAAA@@CBAADCA@CBEDCDCDIH@@@@AC@@@BA@@@A@AAA@@@C@AAA@@@BA@@@@@AB@@ADAACACA@@AA@A@@AA@@A@@AAHA@AA@@A@@@@@A@@B@@BB@BAAC@@@AA@@@@@@A@@AADA@@@ABA@@BAAA@@@ADA@@A@A@@@AACC@AAAE@C@AAA@@@@D@BA@GA@BAAIAA@C@AAG@@@CA@AB@BCBC@AB@@@BCBA@ABA@AACAAA@C@ACC@CAA@E@AAGEAAAACCCC@A@@A@A@@BAB@@ADAA@@A@@DC@CCB@CC@AACAAAGE@CAGCA@@BCDCFCFAD@BCHAD@B@BAJAP@RECCAECEAIEICGAGAECGCE@A@A@@AC@@AA@@ECAC@@@A@A@C@"],"encodeOffsets":[[122994,32330]]}},{"type":"Feature","id":"320214","properties":{"name":"新吴区","cp":[120.352782,31.550966],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@ADMLGH@BGHIH@@BBCDAH@F@@AFEA@BB@@B@@@@B@@@B@AB@A@BAA@BB@@B@DB@@BA@@DC@@B@@@@B@@BD@@AB@@@ABG@@B@B@@@@@D@@A@@BA@@@ACC@@BA@@@@BB@@@BA@BB@@BC@BDAB@@D@AAB@A@@AB@@@@@BB@@@@B@@@AD@@@BBB@@DA@A@@CAFGBCB@@@B@@@B@@BA@@BAA@D@@B@B@@@B@@CF@@@@@@A@@@EC@BBA@A@@@@AFAB@BADDCBBB@@B@EBA@@BF@@BA@A@BB@@@@@BA@BBB@BAB@AA@@@@B@@A@@@@@A@@B@@@B@@B@@D@@@B@DBB@BB@@B@@@DA@@DAB@@C@AAACAFG@@@@B@@@@DB@B@D@BBF@D@F@DBB@B@BBBDBB@@D@DBJB@@D@@@DAFAB@B@@ABCDA@@BADA@A@@B@BBBB@@BBCDAB@BB@AFB@DBBBBBBBB@J@DBBA@@@@B@J@@BBD@@DABABAB@D@B@B@DCB@DADAB@B@B@@@JC@@@@@BH@BB@@BCDADE@A@AD@BA@AD@@BD@BCBCFB@BH@@BD@@@@CHAF@@E@@@@@@D@BAB@@AHBBA@EAA@@DABBB@@BD@HBFA@@DAF@BABAFA@A@@@AB@@A@@@C@ACCBADAB@AE@@AADADEB@BAFCDABAB@@AD@@AD@@@B@@D@@BAB@@@B@B@@@@@@@@@@AB@@@@@@@@@BB@A@A@@@@B@AAGEACAA@@@ABACCFCCA@@@@@ACBC@A@@A@@@BB@@CB@@CB@@A@@@B@@@CB@@EA@@@CE@@DABDB@BBABB@@@@@@@@@@@@@BABA@A@CHC@@DCDIDEL@F@BABBB@@A@@@@BA@@D@@@BAB@BAAC@@@@@@@A@AB@@@BEBA@AA@C@@@@BA@AAECCCAAAAC@EAA@@A@@A@C@AAC@ABA@CBA@C@A@AAECC@AA@@@@@@BA@@@@AABA@@@AA@@@BA@CA@@@AAAB@@@AA@@@@@A@@BAA@@A@C@@@ABAAA@@BAB@A@@CA@BA@AAAAEG@@A@@A@@@A@@BAAA@@@@ABA@@@BAA@@@A@@B@@A@@AA@GB@AA@@@@AA@@B@@@B@@B@@BG@@@@@@BAA@@@@@AA@ICA@[AK@SDMBG@A@A@JKC@CB@BA@@@@@@@AB@@A@@BA@@A@@@BA@@AC@@@A@AB@B@BA@@@A@G@YM@B@BCD@B@B@BA@@B@@A@AB@BCBB@@BB@A@@BCBABCB@B@@A@A@ABA@ED@@@BBD@@A@@BB@@@D@@BAB@@BF@@@@@@@BGDC@GBE@BJ@B@BAFG@E@@C@C@C@GYAABA@@FAL@B@@AJJB@DHMNDJBFDFDABEFEGCFKJLHIJEFABABCDABCDIHEFED"],"encodeOffsets":[[123236,32284]]}},{"type":"Feature","id":"320281","properties":{"name":"江阴市","cp":[120.286129,31.921345],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@EA@@C@M@AC@A@AC@@@@A@C@BA@A@@@@B@@ABBBEB@B@@@BB@@DC@@BE@@@A@IFA@@@EBE@BFA@UDC@@@G@QAKAM@GB@@ABABC@E@C@@@@BAD@FAJ@BAF@B@@AD@DABAD@BIAA@AAC@A@A@CAAAC@@AA@@@A@A@@@ADABADA@CBCBC@C@IBE@CBAAE@C@AAA@CACAAAA@C@E@C@ABC@C@A@CBCBCD@B@D@D@B@F@B@B@B@BAF@D@D@BAD@DB@B@@@@ABBB@@@@@ABBBABBB@@@@A@@@@@ADEA@B@BA@@@B@B@@@B@@@@@@BB@@@AD@@A@@@@BA@@A@@EA@DCB@BA@AB@@@@@@@@@B@@@@B@@@@B@B@@@@@@B@@BB@B@@BA@AB@B@BB@@B@@A@@@A@A@@@A@@@@@E@A@@D@@@@DB@B@@E@@BADAB@@@DAFAB@@ABAFABABA@@BA@@BABABABAB@@CBB@@B@BB@@@@@B@@ADD@@B@@BEFABBB@@B@@CBBB@AB@@@@C@BB@@@@BAB@@@@@B@BBBB@@BBA@ABA@ABA@@@AAA@@@C@@BC@@B@@@@@@@B@@@@@B@BDFAB@@A@@@AB@@BBA@ABA@@A@@@@@@@@ABCACJ@B@B@B@@B@@A@@BB@@@@DB@@BBBA@BBD@@@@ABBBB@@@B@@BB@@@@@@@A@@@@B@@B@BB@@@@@@BDBBBBBB@@BD@BDB@@B@@@BB@@@B@@@@@BA@@@@B@@@@B@@@@@@@BBA@@@@@@D@@@@B@@@@BBB@B@B@@@BA@@@@@AB@@A@@@@@@@@BB@@@A@@@@@@@CDA@@@@@AB@@@BA@@@@A@BA@@@@B@@A@@A@@@@@@@BAAAB@@@@A@@@@AA@@@A@@@A@@@@@A@@@@BC@@@CAA@BAA@A@@@A@@@ABAA@@A@AB@@A@@@@@A@@@@BABGA@@AABC@@@A@A@@B@@A@@@@AB@@A@A@AA@B@@@@AA@@A@@@@@@@BA@@AA@A@@BA@@@@CA@@@@@AA@A@@BA@A@EA@BCA@@@AAB@@A@ABA@C@C@AB@@A@CB@@@AC@EAACA@AC@@E@E@E@A@A@G@C@@AA@A@@@@@E@ABC@A@@AA@@@AAA@@@A@AA@@AB@@@@A@@@AA@AAA@@AA@@@@BAAA@@AAAB@@ACA@CAAAA@@AA@@@EA@@CACAA@@A@@ACA@CAGABA@AADCA@@B@@A@A@@A@CAEECAACCEABB@@D@@A@@AA@@BAAAA@@@@@ACBABCBAA@@@@AA@@@@A@@@A@BBA@@@@B@@AB@B@@A@@AAB@@@@@B@@BA@B@@@@@B@B@@@B@BGBA@A@@A@@@A@AC@@@@C@A@AAA@B@AA@@@@@@@A@@AB@AA@@A@@@CBABC@A@A@@AA@ADAD@@AACC@BA@EDBD@D@B@BBB@AB@@B@@@B@@@B@@@BA@@@A@@B@@@@EABF@BAHEB@@@B@BA@@@@@@BE@@@C@@@@@BBABCA@@@B@@@B@@@@A@@FB@@AB@B@D@@B@@@@@@@@@@@@@@B@@@@B@@@@@@@@@B@@B@@@@@@@B@@@@@B@DB@@B@B@@@@A@C@@B@AB@BHDA@@@@B@BADB@@@B@@@@@@@BB@@BA@@@@BB@@@@@@B@@@@@B@@@@B@@A@B@@BA@AA@D@@@@@@B@@@@B@@@@B@@@@BB@@@BB@@A@BBB@@@@@@B@@CDA@@@@@@DBBB@@@@@B@@@@@B@@B@@@B@@@@B@@B@@@B@@B@AB@@@@@@@B@@@@@@@@ABAB@@AAA@@@@@AA@@@@AB@@@B@@@@@B@@A@@B@@A@A@B@@B@@@@B@@BA@@@A@@@@@@@A@@@@@@@@@@@@@C@@@@@@@B@@@@B@@@@A@@@@@@B@@A@BBA@@B@@@@@B@@@@@@@A@@@B@@A@@@A@@@B@@@A@@@ABAB@@B@@@BB@@@@B@B@@@BB@@@@@B@@@@@B@@A@@@@@@B@@B@@BB@@@A@@B@@@@B@@@@@@B@@@AA@@B@@@@B@@@@B@@@@@@@B@@A@@@@@A@@B@@@@B@@@@@@BA@B@@BA@@@@@B@@BBB@@@@@@D@@@B@@B@B@@@@@BB@B@@BB@B@D@B@FBBB@@BBB@BB@@@B@@@B@@@B@@CB@@@@ABA@@BAB@BAAAB@B@@@BA@ABA@A@@B@@@@AB@@@BAB@DAB@BA@@@BB@BBB@@@@@B@@AB@@@@@BBB@@AB@@@B@F@BDD@B@BFHBDLTB@HCFCHAJAHAB@NAD@@@N@ZARAJAHAH@HCJCB@bO@@TGHC@@B@LARC^jDHD@HCBAFAJ@@AHADTTARAD@BJFA@CACJABLHALCIYG@EQ@CDIF@B@pFL@LBCHBJCBA@A@EAA@@D@BBFMB@@AA@@@AAC@A@A@@BC@ADGB@@EWA@JCN@BHXTEAA@@PCAAJAFA@CB@DBF@VYHDB@ZLHBLFNHHDPHDDFBB@VFLDRJRJJHPJDDBWAOBMAC@@BEBE@@@@@A@@B@@A@A@A@A@@@@@AA@BA@@@A@@@A@@@@BA@@@@@A@@@CA@@A@@A@BA@C@A@@B@B@D@@@BB@@B@@@BB@CBB@AA@BA@BBA@@B@@AB@@@@@@F@B@@@@@A@ED@DAB@@A@ABA@@B@@A@@BA@A@A@A@@AA@A@@AA@@AA@@A@@@@@@@A@@A@@@@@@@@A@@@@A@@A@@A@@A@@AA@@@@@@@@@@@@@@@A@@AB@@@A@@@A@@ABAAA@@@@@@A@@C@@@AB@@AA@@@B@@AB@@@BABB@@@@@BB@@@BA@@@C@@DAB@@@@B@A@BBA@@@@@@B@@@BA@@@ABA@@@@B@B@@@@B@@BBB@@@@@@B@@@@@@@AB@B@@A@@@@@A@@F@@@@@B@@BBB@@BAFAB@BAFATG@@@AB@@@BA@@@@@@B@@@@@@A@@@@@@B@AAB@@A@@@B@@@AB@@@@B@@@@A@@@B@B@@@@@@@@@@@@BB@@@B@@BDAJAJCD@@A@A@E@@D@@@BD@@BA@@BC@@BB@@@@@@@@@@@AB@@@@@@@B@@@@@@B@@BD@B@@FAH@@@@@B@B@@@@@B@BA@BB@B@@@@A@@@AB@@A@@B@@@AA@A@@@@BBBAA@@@D@@@AA@@@@@AB@A@@@@@AAB@@@@@@@@@@A@B@A@@@@@@@@@A@@@@A@@A@@@@B@AA@@@@@@A@@AB@@@@A@@@@@@B@D@@@@A@@@@@BB@@C@@BB@A@@@@B@@A@@@@@BD@@@@@@@@BB@@B@@B@BAB@CDB@BC@@@@BA@@B@BBA@BB@AB@B@@@@@@@@@@@@A@@@@BA@BA@@@BB@AD@@A@@@B@@@@D@@CB@@@B@@@B@@B@@@@@A@@@@@A@@@@@@@@@@@@B@@@@@@@A@@A@@B@@@@@A@@@@@A@@@@AB@@@@A@@@@@AB@@@@@@A@@BA@@@AB@@@@A@@BC@A@@BC@@@@@ABA@A@@B@BAAA@@@@@A@@@@@@BB@@@ABB@AB@BC@@@ABA@AAA@C@ABAAA@AA@@@@@B@@A@@@@@@@A@@D@@@@@@B@@@B@@BB@AB@@B@@@A@@BBBA@@AB@@@@@BB@@@@@@@@@@@@BB@@@B@@@@@B@@A@@@@B@@@@AB@@@BAB@@@@@@@BA@@B@BA@A@@@@AA@@@@@AAA@@@@B@@@@B@@@@@AB@A@@A@@@@@@@@@A@@@@@@@@@BA@@A@@B@@@B@@A@@A@@@@@B@@@@AB@@@@@A@@B@@@B@@@A@@BBBAA@BA@@@@@ABBDB@@BAB@@B@@@@B@B@@@BA@@BB@@@@B@@AA@@A@@BA@@@@@@@AB@B@@@A@@A@@B@@@@@@@@@@@B@@AAA@@@@A@@@A@@A@@A@@@@@@A@@@@@AA@@AB@@@@@BB@@BA@@@@A@@@@AB@@A@@@@@@BA@@@@@@@@B@@A@@@@AC@A@@@@A@@@@@@A@AC@@@B@@@@@@@@A@@@@@@@@@@A@@AA@@@@B@@@@A@@@@@@A@@A@@@@AC@@@@@@AC@@A@@A@@AB@@A@@@@@@BC@@@A@A@ADC@@AA@A@@D@@ABABAD@B@@ABA@@@AB@@@B@@ABA@A@A@@FAD@@@@@F@@@BD@BB@B@B@BD@@D@B@D@DBDBBA@@@@ACB@@@@@AGBB@@B@@@BB@A@BBA@A@@BA@@FDBBB@FFFBBA@@B@@@BAFCBADEBAF@@CB@@@BE@ABA@A@ABA@@@AB@@A@@@A@ABE@@AC@@A@@AAA@@C@@@@A@@@@@@@AB@@@B@BA@B@B@@BABAB@@@B@B@@BB@BA@@B@@@B@@AA@BA@CA@@@@AB@@@@@@A@@@AA@@@@AF@@C@A@@@AB@@@@@B@@@AA@A@ABA@A@@CC@@@@@A@@@@@B@@@A@@A@@B@@CAB@@A@@C@@@AAB@@@@@B@@A@@A@@A@@A@@@A@@@@AAA@@A@A@@@@@CBA@@@@@@@@@@A@@AA@@C@@@@@@@@A@@@AB@@@AA@@@@@@B@@@A@@@@A@@BA@@@@@@A@@A@@@@AA@@B@@@@@A@@@EAA@@@@@B@@AB@@@AAB@I@A@A@GCC@ABCCED@BA@@A@@AA@@@@A@@BA@@BABABAAA@AAA@@B@B@@B@@@@@A@C@AAC@AAAB@AA@A@AAAAA@AAA@CBA@ABABBB@B@@A@A@A@@@ABCA@@@BADABA@AA@ACDCBGFADA@CCCEBA@@AACA@AB@AA@@BAAAA@AAABABAB@@ABAC@AB@BAB@@AA@AAA@@ADAB@@AA@@ABA@@A@ACDA@@A@@@A@ACADA@@@A@@@CAC@BEA@AA@@A@A@A@A@ABB@BBB@@@ABBBA@@@CD@@CBCEA@SA@@@AC@@BA@@@AB@@C@CB@@A@@BA@@@ABA@@@A@@BAA@AA@@A@@E@@@@AA@BACA@@@BAAABA@@E@AECAAC@A@@@ABAAAB@@A@A@AA@B@@A@@@AAA@@AAB@BA@CBCAAAAAA@AACDEB@CA@BABAAACCA@@BA@BBA@BBA@DB@BC@@BA@@AEB@B@@A@@@@AAA@@ABA@@@A@A@BCCA@@@@@A@@A@@@AA@@A@AAA@A@A@@B@@@B@@@BA@BB@@@@@BC@AC@A@ABA@@AA@@@AA@@BA@@@@BA@@@CBA@A@@@A@C@CECEC@C@EAABA@GEEC"],"encodeOffsets":[[123258,32451]]}},{"type":"Feature","id":"320282","properties":{"name":"宜兴市","cp":[119.823308,31.340637],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AAEI@EHCDC@EKIGAKEGAC@C@IPEBGCEBCF@B@B@BFHBDAD@BCDG@@BCDCBEB@BA@E@EA@@MG@AG@EACACACBKCA@C@CDABAB@@C@@@ICA@QCKBCAEC@@EQEICA@@CAE@CBKHEBGBEDCD@DCF@@@@ABK@QEAA@C@EEACCAAKACAEEGEA@CGAG@G@AA@@AME@@MA@@A@@@@@A@@@@@@@A@@@@@@@A@@@@@A@@@@@@@A@@@@@@@A@@@@@A@@@CAGKMWEEOBI@KAIBEHCV@JCBKLGJEBEDGDCBEBGHIJCB@@AB@@@@A@@@@@@BADAB@@@B@@B@@AB@@AB@B@@@@BBB@B@DBB@@BBBB@@@@BBB@@@@B@@B@@BBDB@@@BB@@@@@B@@@@B@@@@A@AB@@@@@B@A@@@@A@ADB@@AB@@@@@B@@@@BB@@@@BB@@@@@B@@@@@@A@@@B@@@@B@@@@AB@@@@@B@@@@@@BA@AB@@@B@@@@@BCB@@BB@@B@B@@@@@B@@@B@@A@@B@@@B@B@@BB@BAB@@@@B@@B@BB@@B@B@@@B@@AB@@@@@BB@@@AB@B@@@@@@A@@A@B@@@@@@D@@B@@C@BB@@@@@@@@A@@@@BB@@@BB@@@@@@A@@@A@@@A@@@@@BB@@@B@@B@@BA@@AA@@@BBB@AB@BB@@@@B@@@B@@@@@BAB@@@@@B@B@BA@@BB@@@BA@@@@ABA@BB@@@B@@AAAB@@@B@@@A@@B@@B@@@@B@@A@BAB@@@@@BBBB@@@@@@B@@@@@@@@A@@@ABBB@@A@@@@@@B@@A@@@@@@BA@@@@BA@@@@@A@@@A@@A@@@B@@@@@@A@@@@@AA@@@@AA@@@@@@A@@@@@@@@@@B@@@@@B@@@@A@@AA@A@A@@@@@@A@@@B@@A@@@A@@@@@@BA@A@@@@B@@@@@@@@A@@@@B@@B@@@BB@ABB@@@A@@B@@@B@@@@BB@@@@@@@@@@@@@@B@B@@AB@B@@A@@@@@B@@@@B@@@@@@@BAAA@@@@@A@@@AB@AAB@@A@@B@@@B@@@@@B@@BB@@@@AAA@@@@@@@A@@@@@@@@@AB@A@@@@A@AA@B@@BBA@@@@@@@AB@@@@@@@BB@@@@@@@AB@@@@AA@@A@@B@@@BA@A@@@@@B@@@B@BA@@@@B@B@@B@@@@A@A@@B@@A@B@A@@@AB@B@@B@@@BB@@BB@B@ABB@@@@@@@B@@@@@@@B@@@@@B@@@A@@@BA@@A@@@@@@@@AB@B@@@@B@@BB@BBBC@@@B@@ADB@@BB@@BBB@@@B@B@@@@B@@@@@AB@@@B@@@B@B@@ABBBA@BB@@AB@BAB@@@@@@B@B@BB@@DB@@@@B@@@@B@B@@@B@@BB@@A@@@B@@B@@A@BB@@A@@@A@@@@@@@@B@@AB@A@@@A@@A@A@@@@B@BA@@B@@@DB@@B@@@@@@@BA@@@@B@@BB@BBBA@A@@@A@@@@@B@@@@B@@B@@@B@@@B@ABB@@B@@@@@A@@@@@ABBB@AB@@AB@@@B@BAB@@AB@@@@A@@A@@@B@@@BA@A@@A@@@@@B@@B@@B@@B@@@@@@@@@@BAA@@@@@@A@A@B@@B@@@@@@@B@@@@@@A@BBA@@A@@A@@@@@@AA@@@A@@B@BB@@B@AB@ADAA@@@@A@@@@B@@A@@@A@@@@@@B@B@B@@A@@DBB@@@@B@@@@@@B@A@B@@@@@@@@ABB@@D@@IB@B@@BB@@@B@B@@@@@BBB@@BD@@D@@@BBA@@BBBC@BB@@@@B@B@@B@@BD@@FB@@DA@DB@@BDA@BB@@@@@@@@B@B@@@@@B@@@@@@A@@@A@@@A@@@A@@@@B@DAD@BAFABAD@B@B@B@BBB@DAF@B@@@BAD@BBD@B@@AB@B@BB@B@@B@BBB@@@BBDBD@DBBB@BBBB@B@@@@@B@@B@@@BB@BA@BD@@B@@@@@@BB@@@@AB@@@@@@B@@@@B@@@@B@@@@A@@@BBA@BBBH@@@BAB@BBB@@@@@BB@@B@@@@@@@B@@A@@@A@@@@BA@@D@@EB@@A@BF@BA@@B@BB@B@@@BB@@B@B@BBB@@@@B@@@BD@@@@@DB@@@A@@@A@@@@BBB@@@B@D@@@@@@A@@B@@@@BBD@BD@@@@BA@@BA@@BAB@B@B@BB@@@BH@B@B@@AD@BBFPAJ@DAF@DAD@D@B@AB@@FB@@B@B@DB@@@B@BB@B@BDB@@BBD@@A@@DAB@@@B@@@BBBBB@B@B@DBB@BA@@BAB@@E@BB@B@@@BD@@@B@@BBB@B@D@@@B@@C@@@AAC@CBAA@B@AA@B@AA@@@@@B@@@@@@@@@@@@@@@B@@@@@@E@@CA@@ACB@@E@C@AAABADA@@@@B@D@@A@@B@@A@A@DF@@B@@@@BD@H@BFE@@@@@A@BF@B@BD@@@B@@@@@@A@@@DBD@@A@A@CB@C@@@AC@@FB@B@@@@BBD@@G@@D@@BBCF@@AB@B@@B@A@@D@@BB@@@B@@@@@@@@B@@@@BB@ADA@@B@@ABA@@@@BD@@@B@HDBAD@BAF@@@BA@@DABDBB@DBD@B@D@BBBBD@DDHDFBDBD@B@B@BBDBBB@BBFFB@@B@@@@BDBFBDBABBCBBB@BDD@BBABBABDD@B@@B@@@@@BBB@BBB@FBB@FBB@H@F@B@@B@B@@@@@B@B@@@B@BA@@BB@@@B@@BB@@B@@@@B@@B@@A@@@@@@@@@B@@A@@@@@@B@B@@@@BB@@AB@AB@@BA@BAB@@B@B@@B@@@@@BB@@BB@B@DD@@@B@AB@@@@BB@@B@@A@@@@@@B@@@@@@@BB@@B@@AB@AA@BB@@@@A@AB@@B@@B@@@@@AB@@BBB@@@@@@ABAB@B@@BB@B@@@BA@@BB@@@@@@B@@A@@BB@BB@@A@AB@@@B@B@@B@B@@@@@@BAA@@A@@@@@A@@@@B@@@@@BA@@A@BA@BD@@@@@@@@@B@@@@@B@@BB@@@@B@B@@@B@@@@DD@F@BBB@@@B@FB@@DDB@DBDBB@B@@@H@@@DAD@DAB@BA@@@A@@@AB@@@B@@@@@BA@@B@@@AA@@@A@@B@@@BBD@B@@@@@B@B@BC@@B@@@@A@@@@BA@@@@BA@@A@BA@@A@@@@@A@@@@@@@B@AA@@@@@A@@BA@@@A@@B@@@B@@BBA@BBA@@@A@AB@@C@C@@B@@@@A@AB@@@@A@A@AB@@AB@@@@@@AD@@@@@@AB@AA@@@@AC@A@@@@B@@@B@@@@A@@BA@@@ADB@@@ABB@@BBBABA@@@A@@AC@@@@D@@A@AA@@@A@@A@@B@@A@@BA@@@@A@@@@CB@BAB@@A@A@@@@@A@A@@B@@@BA@@BA@ABAB@@@B@D@B@DB@@@@BBBBBBBBDB@@@@@A@A@AB@@@@BB@A@BB@BA@HBB@B@B@@@AA@A@@@AB@@@BC@@BB@BBBJ@B@BAB@DA@@@@BAPAFAFABAB@JAJA\\GNED@DALCHCFDBB@@DAFEDCLIFCBAB@F@LABCAAB@D@FABA@CD@BAB@F@F@B@D@@@@@@@FBB@HDB@FABBB@@A@@DBHB@B@BAF@@@@A@@B@@@B@B@@@@@@AB@BADAB@@@@@@A@A@A@A@A@A@C@@@@@ABA@@@@@A@A@ABA@A@@@@@@@@@A@FDDD@@BD@@DDB@BA@@FD@@A@CDB@@@BB@@BAB@B@B@BB@@DA@AB@@AB@BDB@@B@@@@B@BB@@B@BAB@B@DA@@DA@@AAAA@@@A@@@@B@B@D@B@B@D@D@B@B@DBB@B@@BB@B@D@B@D@B@B@B@@@B@@@B@@@B@B@@BB@B@B@@@B@@@@@B@@@BBD@BBB@D@BFAB@@F@@D@@FCB@@@@@@@DB@ADB@A@A@@@@AA@@A@B@DC@AA@@A@@BA@@B@ACB@@@DB@@@@@@BAB@A@@AB@BEB@@@B@@@@@@@B@@@@@@A@@@AD@BBB@@@B@@BB@@@@@@B@@HADA@A@CB@@B@@@AD@@@BB@@DAB@@@@@@A@@@A@@@@@@@@@@A@@@@A@@@A@@@@D@@@@@BA@@@@A@BA@@B@@@@@B@@AB@@@BA@BBCFKA@@C@@@AD@@AA@A@BA@@@@@@@@@@AAA@@@@@@AC@@@@AA@@B@@@A@@@AD@@@B@AA@AB@BB@BB@AAB@@@@@@@@@@@@A@@BB@@@@A@BB@BBAB@B@@A@@@@BE@EB@@@@BD@@B@@DA@A@AB@BCBAFEB@@@HD@@@BAFB@FA@@D@@@@AB@@A@@@@@@@@DAB@@DBA@@@BBA@BB@D@DBBABB@@BB@A@@@@@AB@AAB@B@@@BCB@AAA@@AB@@A@@@@@@B@@@B@D@@A@@@@@@@@@@BB@@B@B@@@@@B@B@@@B@@AB@B@@@@B@@D@D@@@DABA@@@A@A@@@@FABAB@B@@@BCB@DC@@AA@AA@A@A@@A@AAAAAFABADEB@@A@AA@AGAGAGAK@C@A@A@CDQ@A@A@C@AA@GUEKIQA@ACAAKQAEA[@I@G@IDU@ABGBEBAFELEPCTE^ILCTEHAD@DBD@DB¶KM@@IKGGEGSKOGICICYCcA]CmAgCCAMAK@@AMIIIEEQQQQGGEECAA@@B@@@@A@@@@@CA@@A@C@Q@I@GEICIAAACAIA@@EDQLA@A@C@E@ABCBA@AACACAG@EBC@IJGAC@ABCBA@@@"],"encodeOffsets":[[122704,31923]]}}],"UTF8Encoding":true});}));