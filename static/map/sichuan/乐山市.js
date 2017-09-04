(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('乐山市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"511112","properties":{"name":"五通桥区","cp":[103.818014,29.406945],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@@C@@@ABC@CBC@A@AAG@AACAACABC@AB@@A@@@AA@IBC@@ACAA@A@ADCFADADADABCDEBCDCFAFAJCNADADABABEBABIBIBC@A@AA@@BABAFC@@BA@C@@@AA@E@E@A@@@A@C@A@@AAAAAAE@AAAA@A@G@CBAAE@CFABKFCBC@CA@@CAA@K@EAAAAA@C@EBS@EA@@@ABADGHCLABA@C@EAC@ABGHCDCDC@@@A@AA@@AAA@@BA@@@C@CAC@A@@A@AB@@AB@@A@@AC@A@AA@AAACEDMHABA@CDAB@D@BBBBBB@@BBBA@ADA@ABC@ABCDCBCDADA@CBA@A@@@AAA@A@@AA@@@@@AA@@A@@A@@A@@@@@AAA@@@@@@@A@@@C@CA@AEGCCCA@@A@@BCDADCDEFILADAF@JDHDHAFEHEJCH@D@H@F@J@F@DBH@B@@ABAF@@@DEH@F@FBJBNBN@F@FBBBDDBDBFFANADDBF@BB@BADCBCACAA@ABADBBDBB@DBDBDDL@F@L@F@DBF@BBFBJBFBFDBDBJBH@H@FDDDFBFDDRBJBBBBBBFDBF@BB@@B@@@B@@A@@B@FCB@BCFI@@BABAF@FCFCHCDAB@B@D@LBF@DBPFPJFDDDBFDBB@B@BA@@BABABBBBBB@@BBF@HAF@D@DBJRDBD@F@DADCBCBADAHBHBHJB@B@BCBEBA@A@C@CBA@ABA@ABCBABABABCBA@ADCBABA@CBEB@B@B@B@B@B@@@@C@A@ADBB@B@@@@@AAAAE@E@@@IDE@A@A@AA@A@A@C@A@A@C@ABABAD@@ADEB@D@HBFBB@BA@AAC@C@ABCDEB@B@DB@B@@BBBABGBEDAB@BBBBD@D@FBDBF@BAFABBBBBFB@BBH@D@B@AC@A@A@ABAFCBC@@@EBABC@@@AAC@A@@@@AA@A@AAA@@A@@@A@@AA@AABA@CBA@A@A@@KCBABA@AAADGAE@AB@B@B@@ABA@AB@DAD@BABAB@DA@@BA@@@EAAAAA@AAACECAAACA@ABA@@BCD@BA@A@ACC@CAA@@@A@@B@@@BAB@@EBAA@@A@A@A@@@A@@@DE@AA@ABA@CD@@AAKC@@@GAAACAA@C@A@@A@A@A@@@A@BABAD@D@@AFABC@ADCBA@A@A@C@A@AB@HBF@BBB@BB@BB@BA@A@C@AA@CAA@C@AA@A@@@A@A@CAAACCECA@@GCAA@@@AACDCB@@@@A@@@@@A@C@A@@AGBG@A@@@A@@@AB@BH@BBBD@D@FCBC@A@A@ECAECACAA@ABABAB@@AAAAAA@G@C@CAAAGAA@A@C@@BCFABA@A@ECAAGAAA"],"encodeOffsets":[[106378,30021]]}},{"type":"Feature","id":"511113","properties":{"name":"金口河区","cp":[103.07862,29.244345],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@GEMEECGGEGGIEIEGEGEIIM@CGQCEEAOEGAGCEJMPGJEJORKJILGLCPANBNDNDJ@DFNHLBPAPDNFNHFflDBHH@@BF@HGHATAJKLBHFDJ@RIVC|BFBDBCF@HBFDFBBDHDNBF@FCBGBIDABABCBMAEAE@CDILEJADADCFEHKJCF@DBBFD@BAHCPAHBFDDDFDDBDFLDDFDBDDD@FAFAHAHADEDEDCBEBEFCDCFCF@@@FADAD@@BDFDDFDDBFDDDBHDJFJHHJDFDHHHHHFB@BD@H@HAJCNEHBH@DDF@FADCDCFEHAHEDEFCFAHCF@FCF@FDDDFBD@FBHBDBDAF@FBBB@D@DFDF@F@H@HCBADAFEDCFCFAFANCP@RDLF@EBEHQBIBK@KCG@CEGCIAICGAEBIBMBMBKBIBCBGFQBAFIFCPKFCBA@C@IBCDADADADABABCBEHALBDCDG@A@AACAC@ABCDCFEBE@AAAIACA@A@K@CACEEECCEAC@GACCEAEA@AAA@A@CHCDIFC@EBEBADCFEFGL@DABABABEDKDGFCBC@C@ABABADA@ABA@C@ABCB@BEDCDCBCB@BCAC@GAEAEABK@I@KAMBAACBC@CBG@CAE@G@CC@EAE@ACAC@IAIAAC@AIGIEGIIOMUQIECAECGEEAEEKCICGIIIAECGCKAKAG@GEG"],"encodeOffsets":[[105509,29830]]}},{"type":"Feature","id":"511111","properties":{"name":"沙湾区","cp":[103.549991,29.413091],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@UAWBUBE@GDQHQPSNIJCFCDADCDCHADCDCFADAF@DBF@F@DCDCFKHGFCDCDA@A@C@ACCGCECAG@G@IBEBE@CBCDAD@DAJ@DADCDCDABCDCDAFABAFCHCDAFAFADEHEJCJEFE@@@EACCAKCMEGGGGEICE@G@@F@BCHCFAF@F@B@D@BADCBAB@BDBFF@B@B@BADAD@BCF@DBDA@CB@H@DEN@H@FDDBBDBLDBB@BBD@FCBABCB@DBFDBD@H@FDFDHDBBB@BCDCDAF@JBBD@B@F@FBFDFBFDFLJDBD@HFBFBF@F@HBDDBBDDFB@@@BDBD@DCJ@D@BB@@@B@DGBGBEAGAABADCH@DBHFHJDHFLJNFBFFNHDDXND@BDDDDDBBFFFBDDDDBBDT@DBDB@BBB@BDCJ@BBDFDH@JDDBDBDD@@JLDFBBBBD@BEDEDEDADABCDCFCB@BA@@@G@@BA@@B@B@F@@@D@B@BC@@@A@@GIAC@CBEDADAD@DAF@DBFDVFF@B@H@FANMB@NGBCBCBEAACCCACAA@CAAABCBAB@DBDBDABC@AAAE@CABCBMEECACAACAA@E@EAMAMAI@E@EFG@C@@BEBA@@@AAG@C@E@I@E@G@CDGFIFGBECGCG@IBEBCJKFEDCBCDC@AB@@@DBDDFH@BDBD@@@B@@@@@@@B@BB@@@@B@@@@BB@@@BB@@@@B@@BB@B@BB@@B@B@DAB@BCDCDADCBAD@BAB@BCB@AA@AA@AAAA@A@CBADCB@BANGFCAAACEECCAAACCEA@A@@@ABBDAB@BA@A@C@A@ABC@AACA@ACEAC@AAAA@C@KAC@ICAA@@@A@ADCJGDA@@BA@A@ABCAEA@@ACAE@A@AACA@@@CDEBADADAF@FAD@BABCBADI@CBA@@AC@AA@AAA@AAACC@E@GBC@@@CCCCEAAA@ABC@A@@AACAE@M@AACAAA@A@@BABCBA@A@AAEBA@C@AAAAAAAE@GDINCBE@EECE@E@CDCLEFADC@IBCAE@CCCECIAICKBI@"],"encodeOffsets":[[106129,29888]]}},{"type":"Feature","id":"511123","properties":{"name":"犍为县","cp":[103.949326,29.20817],"childNum":3},"geometry":{"type":"MultiPolygon","coordinates":[["@@@@@C@@@A@@@C@@@A@@@A@C@A@@@AA@@A@@A@@@A@A@EAA@I@CAA@A@@@@@C@C@ABA@ABAAAB@AC@BBBB@@@BBDDBD@B@BBD@BBBBD@@B@B@@B@@@D@DB@@@@BBB@@@B@@@B@BB@@@@@BB@BAB@@A"],["@@@BB@B@BBBB@B@ABAAEC@@B@@@@A@@@@@A@"],["@@AAAAAAAAACAA@AA@CAC@E@EBEBCBI@A@CBCBKE@@ABEDCBADEFAB@DBBBB@DBD@B@B@BDDDBFDD@BBBBBB@BEDCHADABE@ABAB@HAB@F@B@B@@@BC@ABCBCBC@CBABCAAA@A@AAAAA@@E@@@C@CBA@C@ABC@AAE@A@ECGAEAA@CAA@C@C@C@EBABA@EFA@ABABADABADCJ@DERCJCFEBMDEDAF@DADAB@@AB@@A@A@@@E@A@C@A@C@A@A@A@@BA@A@A@A@E@E@A@@@A@CBEBED@@A@@BA@A@CBABA@@BB@@BBB@@B@@@BB@@@@DBBF@B@DBDBBA@BBAB@BC@C@AB@B@@BBHDBBDBBDBBBD@BCJ@DA@ABA@CBC@ADCBABCBADAB@@CBEFABAD@DBDBD@BBDFBDBBBDDBDDD@DBDAB@D@DAB@DBDBBBBHFDDFDBBB@BDBB@D@D@D@BABCDA@EBABABABA@ABCB@@@@A@C@A@EAMBC@C@A@AAA@AAAC@AAAAAAAAAKCA@CAC@C@ABA@@@AB@DCJABADABC@EBE@CBCBABCF@D@@DBBBB@F@DB@BB@BFAD@B@BAB@@CBIHCD@B@B@@BBJDD@LBD@B@BB@BBDDF@BDBBBD@BAB@D@B@B@@ABAACBA@@B@B@DFBDBBDDFFBDBBBDBBB@@B@BBD@@@BA@@BA@@B@BB@D@DBD@@@B@@AB@BB@@BBB@@@D@DCDCHGBAD@FBD@B@BADKHGBCBA@@B@@FAT@F@DBBBBFBL@B@DB@@DBD@DALEBADEF@BBDAH@B@B@BB@BBFBBBB@BB@D@B@@@B@F@F@B@@B@@@DAB@@EDABAB@@BBB@D@JAJABAFABABABCBCDMBIBEDEDCFADCBABCBCBCDEBCB@B@DB@BD@JAB@@B@@@BA@@BADDBBBBD@BBH@B@BAD@DAD@B@@@D@@BBHBBBFDB@B@BADE@AD@B@B@HBBBDBD@H@B@BBBB@BA@ABAB@BBBBDFDDB@F@B@BADEDC@C@AA@AAGA@@B@@@B@@@BAHBH@@@B@D@B@@@@@B@@A@CDBD@B@@BBHD@@DBDFBDBB@D@B@B@@@BBBD@B@DBB@@B@D@BABA@@AAAA@AAE@GAA@@B@B@D@B@BABCD@BADEB@BC@C@ABABB@@@B@B@B@@@@B@DBBBDBB@H@@LDBB@@DCB@BAB@@BCF@@B@@@B@B@B@@@BBFA@@BA@A@@@AB@@@B@DBD@BDB@B@@ADC@AB@BAB@BDBBFDBDBBB@BBBB@F@@AB@@CBA@ABABC@CBA@@BAB@BA@A@A@@BBFCHBB@BABABLD@@@B@BAB@DABBBB@@BB@@@B@@@BB@B@BBB@@@@@BBDBB@BB@@@BA@A@A@@@AB@B@DBB@B@BB@BBBBB@@B@@@@@D@B@BAD@B@@@B@@BFDBF@B@@@@ABA@AB@BBBBBH@BBF@B@B@@A@ABAB@B@B@B@@@BA@@AAC@@A@@BAB@B@DAB@D@@BBB@BB@BB@@DBDA@@BADCD@FIB@@AB@B@@@BC@@@AAEBCAA@@AAB@BE@AB@B@F@BBBABAB@B@@B@J@BD@BD@BBABA@@B@@BAB@BA@ABA@ABABAB@@BBB@B@BBD@D@@@BA@@@A@@AAC@BABAB@DBBBBD@D@B@BB@F@D@@ABBBBB@B@@@@@@ABA@@B@BBBBB@JBB@@@B@B@D@@BDAB@@A@@AC@@@ABC@A@C@ABA@A@A@A@A@A@A@@@G@C@ABE@CBABA@@FAFAB@FB@BB@DB@BB@@BBBBBFBDBFDDDDB@@DBB@D@@@FADA@@BBB@DABC@@@A@A@CDEDADE@A@A@E@AAC@AA@A@A@@@EDA@CBAB@@CAA@AA@CAC@C@CBABC@C@C@C@CEI@A@@BCBCB@HEBA@@BA@AB@B@@@BBB@@B@@BB@@BBBDB@@BDBBBB@J@HBHF@BBBBBHBBBB@B@BAD@AA@CBCFEBAFADA@CAAEBCA@ABCDG@A@A@C@@D@DAB@FBBB@BDD@@BBB@NBBA@@BA@A@C@CAA@AA@@@A@AACC@ABA@AB@B@@@B@@@BAB@BA@A@@AA@@@@@AA@AACAA@@AC@ABEBA@A@@AAA@A@ADADAB@BAB@BEBC@AFCBA@A@@AA@C@AA@ABA@@@ABA@AAAAA@A@A@A@CB@@AB@B@B@BBB@BCBABAD@BA@@@AB@D@B@BA@A@@@CACA@A@AACBCA@@A@C@A@C@E@AA@@@CBABA@@B@B@@AB@@ABAA@@AAA@CCACA@@@A@@@@@@F@BA@A@@@@@ECCAA@C@CACBA@@ACB@BCBA@G@CBE@AB@@CBABABABCBA@C@A@AA@@BADGBA@C@@AEACA@CCAA@@AA@A@I@A@ABADA@@B@@@B@FA@@B@DCBABAB@BAB@DBFBB@F@BA@@BA@@BA@C@ABEB@B@B@B@@B@BFBD@D@LEF@D@FBFBF@B@D@BA@CCGAA@A@AAA@A@ALIFEDABCAECEOGEACCAECCECECE@EACE@IAEEO@AAEBEDEFAFDDFBBDHDBBBBDJNFDDBH@FA@ADCDE@ABI@OBI@CBA@A@A@A@@AA@AAA@C@CACAG@CAA@CB@@ABABA@E@C@E@CDEHCJARHF@DB@@H@ACAC@C@AAGBA@C@AB@BA@@DADCB@DA@@BA@AB@@A@AAAAAA@@A@A@@BAB@H@DA@@FA@A@A@AA@AAA@@@E@A@A@AAA@@AAAACAAA@AAA@E@A@A@AAAAC@AA@AA@BABA@@FAB@@A@A@A@E@CAAACBADEBG@EEEMECAAAAA@A@AAA@A@A@ABADE@A@@AA@AEAGGEAAAAACE@@AA@A@A@A@A@C@@BA@CAACAAAA@BA@CDI@@DC@AA@@AIB@@A@@ABABCBCBCB@@A@ABEBA@@AA@AAA@@CCABCA@@AAAA@ABE@E@A@GEK@E@CDC@AAAE@E@AAAAAAA@GBGBEBA@A@A@IECACDCFATCDE@E@E@AD@BDFDDA@@B@B@@C@CBOCC@CBABA@A@A@A@CACA@@EAE@E@EDABA@C@@@E@KK@AC@ACAAAAAEA@@@CBA@A@GAA@CBC@CA@@EB@BA@ABCB@@K@AB@FCD@@A@C@EACBMAAAAAACA@A@C@ABA@CDABA@G@G@C@GBI@EBEBC@A@C@C@ABC@A@G@E@CBA@ABABAFABA@@@C@"]],"encodeOffsets":[[[106371,29776]],[[106631,30106]],[[106425,29751]]]}},{"type":"Feature","id":"511124","properties":{"name":"井研县","cp":[104.069726,29.651287],"childNum":3},"geometry":{"type":"MultiPolygon","coordinates":[["@@@@@@@@@@@@@@@@"],["@@@@A@@@@@@@@B@@@@B@@A"],["@@AAAA@A@A@A@C@A@AAAEAAAA@EB@@A@@@@BABBB@@@BA@A@@@@@AA@A@@@@A@@@@@ABBB@@AF@@A@ABABA@E@CAA@@@A@A@CDA@A@@@A@AAA@AAECACCA@AAABAB@@A@AA@@A@@AAAC@AC@A@A@@@A@IAA@AAAAA@@@AB@B@@@@A@A@AAAA@BC@E@A@@A@A@CACAACAA@ABABD@BB@@@B@@AB@@C@C@AAA@A@AA@@BABABAB@BAB@@ABA@AA@@@ABAB@AACC@@A@I@AA@A@ABABAAE@A@A@@BAFA@BB@@BBADBF@B@@AD@@A@A@@BA@EJC@CDAB@@CBCA@@AAA@@AAA@AC@A@CBA@A@AB@@@BD@BB@@AB@@A@A@A@A@AB@B@BA@A@E@AAG@AAAA@ABAB@BA@@@@@AAEEC@AA@@@A@C@ABA@C@@@@@A@@@AAAA@AAAA@A@CAA@A@@B@@@B@BAB@@A@@AAA@B@@ADAB@F@@ADEDAB@B@B@BBDA@C@G@AAA@AEAAAAEBABE@CAEAC@C@AAAAA@CBAFAHABAA@@@ACAA@A@CFAD@B@DBD@BABA@EAGAC@A@CF@BC@ABAB@B@D@B@B@D@B@BBBB@B@F@JC@@F@F@BBBB@@@D@@AD@BAB@BBF@BB@B@B@FAB@BB@B@B@D@@FCD@B@B@@HBBBB@@B@@@@@@@BB@@@BEH@B@@@@@BB@@BB@DB@@@@B@@@B@@@@@B@@B@@BBBB@B@@BBDDFFBB@BDAB@DAB@BA@@@C@@AAA@CA@@D@D@B@B@BB@B@@@H@BADABAD@DB@F@DCDAB@D@B@BBBBBBAD@@EF@B@D@D@BBD@@NDB@@B@@@BABA@CFAB@B@B@@B@B@FBF@H@FBFBDBBB@BA@@BC@CBC@A@C@A@AF@@@@BBB@B@ABD@FBHD@B@@ABABA@@BAB@BA@ABA@CAA@CACAA@A@A@C@A@A@A@@BAB@@BB@BBFDJBBBBBBBBDBBBB@BBBAB@BADABCDCBABA@@BB@DBB@@BDBB@BAB@B@D@F@DBB@@DDHD@BHDFDDB@BBBABABA@CBCDC@ABC@ABABAFAB@B@@@B@BB@AB@D@@B@D@FAB@B@BB@@BB@B@BAB@@ABA@A@C@A@ABAB@B@B@D@F@B@@@BGB@B@BB@DBB@BB@@@DAD@B@DDJBJ@D@D@H@BBF@B@@EB@@@B@D@BABAACA@B@B@BB@@BBD@@BBFCB@BB@J@BAB@BBBDBD@LBBB@@FHBB@D@@@B@@ABABABAB@B@D@BA@AA@@CD@@A@@@@B@D@DADA@ABA@A@AA@@@ABA@AAA@@AAA@A@CBC@E@GBEDGFI@CBADBDBDDLBJBB@BBBB@BB@BAB@BABADABA@@D@@A@@AC@@A@AAAAA@AAAA@@AE@CA@@AAAAA@A@EBG@C@CBC@C@A@AAGCAAC@IBC@A@@@@AA@A@CCAAA@ABA@AB@BBD@B@B@F@H@DFPBBDBB@HED@BBBFAJABABKAABAD@BBFBBFA@BB@FDB@@@HDDBHBDB@BBH@DFFBBBBB@BBB@D@@BABGHABABCH@BBJ@F@BBBB@HBB@D@DBBBDB@@B@B@DABA@ABAB@BAB@BAHBB@LDBA@B@D@@@BADA@EBABABAFAB@BEB@D@BBBHBBBB@BBDDBH@BB@@@BABAB@@@DD@DDAB@DADAB@BCBAB@BAD@B@B@BBBB@BFBBBB@D@DBBB@BBBBB@@BBBBBB@BBDBBBDBBBBB@DBB@FAD@BADAB@FBB@D@DBBDFB@@DADABAB@@A@AB@B@B@@A@ADAFCB@B@DB@@@B@BBBB@BBB@B@@A@A@C@ABADADA@@BC@A@A@A@A@C@@@A@CAEAA@@AAAACECEA@CAC@@A@AAE@CBAB@D@@@BBBBB@BADABAB@D@B@B@D@FBFAB@B@FADABABA@A@C@C@C@@@CBCDAB@BBDBB@F@B@BA@@@A@A@A@C@A@EAAIAA@ACCCACAACE@AAA@CBA@AACAAAAC@A@G@AAAAAA@A@ABABAFC@@BABAHCBE@E@ABC@AB@BCB@DCBCBCB@D@BABABCBC@C@@BCBAB@DAB@HFB@B@JC@@F@BA@CAAACBADAB@@@B@@AB@B@B@D@DEDCBC@EBEBAB@DEBANCBABC@A@@BAD@FBD@B@DCDCB@B@DB@N@@BBB@FBF@D@DAH@D@DAB@BAB@B@B@B@DC@@BCBAB@@@DBD@B@BA@@B@@AB@@ABAA@@A@@AA@AAA@C@@CGAM@CBAH@FBDBBHBBB@BBB@B@BABA@AAACCACA@AA@A@C@ABAB@@A@AACBA@@BAB@B@BA@ABCAAAC@ABAB@B@B@BBB@B@F@B@FABB@@@B@FAD@BBBBAB@B@B@DDDBD@B@BADAB@BABC@A@AA@ACAA@A@A@A@CBC@@B@B@B@B@@A@@@A@@@@@@D@D@@A@A@AAACACA@@@ABCF@B@H@BAB@@C@@GAA@@A@A@A@@BADADAB@D@D@@@B@BAAACA@@E@E@CBC@A@@A@A@@BC@A@@BAB@B@DBDBBA@A@@@C@C@CBA@@DAB@@AAA@@MAA@@ABC@A@@AAABA@E@A@A@CAAAC@E@E@EBC@A@A@@AA@@CAAA@EBEB@@EDA@EB@@A@@BAB@J@BABA@KDA@AAA@@AABA@ABCJ@@ABA@A@A@@AC@AA@@@E@AAA@AAA@A@ABA@ABABC@A@@@AAA@@ACAACACAA@@AA@@AAAAE@@@G@AAA@@CAA@CBA@@AA@E@A@A@AACC@@AAA@A@@@CDA@ABAA@A@@@CAA@@C@@BABA@@@AA@@@CBABADCBADEBC@CBC@@BAHAFCHA@@BABC@@BA@CAA@A@A@A@@@ABAFAB@@A@A@A@A@A@A@A@C@@@ACEAA@@CEAAGAAAC@AAA@A@@A@AAAAA@A@@@@@AB@BA@AEE@@A@ABAB@@A@A@EA@@CAA@A@@AAA@E@C@AB@B@B@FBDBDBB@B@B@B@B@BAB@@ABCBABCBA@A@AAACAACCA@@AC@A@A@AB@B@B@BBBBBBBBB@BBD@D@B@@A@@EC@A@ABA@@@A@ABCD@BA@@@@BB@@BB@AB@@@@A@@A@@@@@@@AAB@@@@@@A@@@@@A@@CA@@AAAAEA@@@@@A@@B@D@B@@@@@@A@A@@AA@AAA@A@@@C@A@AAAAAAA@@AC@AA@AAAAA@C@C@@@A@@@@BAB@@@F@BABABCBABEB@DADABABABA@A@A@AAAA@@A@A@A@@B@B@BB@F@BB@@@B@@@BA@@@C@@@@@@@@D@@@B@@ABABA@A@A@AA@AAC@A@@CC@A@A@A@@AAA@@@AAA@E@A@@@AAA@@A@ACAAAEC@A@@@AA@EC@AAAAA@AA@@@A@A@@BA@@@"]],"encodeOffsets":[[[106667,30205]],[[106650,30178]],[[106595,30181]]]}},{"type":"Feature","id":"511102","properties":{"name":"市中区","cp":[103.761329,29.555374],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@DIACA@AAA@AC@CCSAACCCCEAEE@B@@BH@BADBPAN@FCDA@@@C@CAA@AAAAA@CAC@A@@AABA@@@A@A@C@@@AB@@CD@DBDFBJHFD@@DBBBB@DB@BBDBF@B@@@BADCFCD@@AB@D@BBBDBBBBBDDB@B@B@@A@CBAB@F@@@@@B@B@DB@@B@D@@BBBBD@D@BBDFFHFBBDFBB@BAB@BABADCBEBABCB@BAB@H@@BBBBB@BBB@DCB@BAD@BB@BBBBDBBB@FBB@BBFABAB@BBB@BDBB@BBFBB@BBDBJBBBFFJ@B@B@@AB@B@BDB@BCD@@@B@BDBBBBBB@B@BAD@FAB@@B@@AB@D@@BB@BB@ABA@ABABABCFAD@DAB@@AD@@B@BB@B@BBBBBBBDBBB@B@DBBBBBFDDBBBB@B@@BBFBDBD@FBN@JAFAB@HAJAH@F@PFFBBB@FAF@BB@@BB@DCDAD@BBBBBFBF@@@D@BBB@BB@DADABADBD@BBBBBBBBAD@BA@CBEACBA@AB@B@BB@BBJ@F@@B@DABCBABABABCBAB@BA@DDBDB@DBDA@@B@B@DBBBHDFFHFBB@B@DABAH@@@BB@BBDDBBB@B@B@D@D@BBB@@BBB@B@BADCB@B@BB@B@D@DA@@BAB@BAB@BCDC@ABABABA@@B@D@F@F@BABABCB@HM@ABABADAFAD@BAB@@AB@@BA@@BB@BABB@D@DBDBBDBH@JBDDD@B@DAD@B@FDD@FFLJLJBBB@DBD@FBF@D@BAB@B@D@B@D@B@B@BBBBDDDBHDD@@DBH@DBBDBFAFABAFAH@J@B@DAF@J@D@D@D@DBBDBBBB@ABAB@BAB@BBDDB@B@@B@@B@D@JAD@BBHDBBB@D@D@DAD@H@FAB@B@BBBB@@DBF@@BB@BB@BBBBB@B@BD@@BB@@@@CB@BABCBA@ABA@AAAA@AA@AAAAICKACACBCDAJ@HEFCHAF@D@DAB@B@BB@@BB@BAB@B@@BBB@B@BAB@BC@C@C@A@@B@@@DC@@BBB@@A@C@ABABABABA@@@A@@@CAAEG@@AAKAC@CAAA@ABA@A@IAAA@EDAA@@AC@AA@@A@A@ADBBBBA@A@C@A@@FA@@@AAE@A@G@C@CAICI@C@ABC@C@@AAA@CAA@@A@AHA@A@@@A@E@C@A@ABABAB@D@B@B@BA@@BA@A@AAA@@AAA@A@EBC@A@@@@CBAA@@A@A@@@ABABEBABAD@BAD@DCDAB@BABAAA@ACAECGC@AGCCC@@AA@C@E@C@ABA@AAAAC@@AA@CAA@@ABABCDADCBABA@ABAAA@AACAAAAAAAAACIAE@AAA@@BA@AB@B@B@D@B@B@B@DBDBB@DBB@BAB@@ABA@AB@BABA@@@AGCEAC@BAA@A@AA@@@@BEB@D@B@D@DAD@@AB@@AAACAEAEAG@E@EAA@A@@@@A@ABADEB@BA@A@@@AA@MC@@AC@A@C@C@AFE@@BCAAAAAAA@C@A@CBCDE@A@@CBCBABC@A@G@@@AAAA@A@C@C@@@DBB@BB@@@D@@ABA@CBA@CB@AAAEECCAA@@@AAAAA@@@AA@@@@@A@@@A@@@@@CAA@@AA@@A@@@@@AFG@A@@AA@@@@@@A@@@AAAA@GA@A@C@ED@@@C@A@AAAA@EBA@A@A@@AAE@ABA@ABC@@@C@@A@A@CA@B@B@D@@A@A@A@A@A@A@AF@DABABCD@BABADABABABAD@BAB@BAB@D@D@BABAFADA@A@GIGAGACBABADCDCBE@C@CAIQCAC@E@GBE@AA@@AAAAAAABAB@@ABA@A@CAAECCECOIOECAE@KAC@A@A@CBGDEDEDE@ABAB@@EJADA@EDA@@@@BA@@@A@@@AAE@CAAEAAAAIAQACCAECECC@E@GAGAIACECEAIAEAAAE@CAE@K@E@K@BBAFADADMHA@MNEBG@A@E@UEECCAE@CBC@CBCBAF@DBDHJ@@@B@@ADA@C@@@E@A@A@@@AB@@@H@@ABA@EDCDADCBCBCFCFAFC@AAAACEIK@@CCCACAICG@ECAC@A"],"encodeOffsets":[[106062,30210]]}},{"type":"Feature","id":"511133","properties":{"name":"马边彝族自治县","cp":[103.546347,28.83552],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@EICICGAG@EJGJGPEHOAECEBI@EBCCMEMCICKGEGCC@GAGEECIMKIQICEECIBGAKDEBABCD@FCDEBEDAHADABC@E@CACBABCBG@ABA@ABGJAHELAHEJKTA@@BAB@@ADCD@@CDAB@D@B@BAHADCBADADCF@DAD@@@@AF@D@D@BADEHCBEFILABA@A@GBMFGDKDC@I@E@ABA@@BCDADABABCBAB@D@D@NAR@FC^AF@FDFFBZNJHPJFJDFFNBDBLBHBJBNDJJHHRDHLLDHDLDVBFJLJHRLHJDLBN@HCHOPMHMJIFABEHEDGJGHIPEJEHILGHEDGBKFIBUAE@C@CB@B@D@@@B@H@D@D@BABABAFAF@FAD@D@DBBDF@B@DABABCDADAB@D@B@BHJ^VLLNJHHDJCFGJIJKJGJCH@JAJFTBRDLHPDJHJJJNNDHHBDBFBH@JBNARALAJ@HBB@@BDDDBB@D@B@BBB@DBBBB@D@BB@BB@BBDFBBNDDDBBBB@RFDFBDDJLHLDDDBFAHIDCHAFAF@DB@@@B@F@FBDFBDBBDBBADBDFBHBJ@PDDDDBDBF@DBFDBFFFFFBBF@HAR@R@PBF@NEJCJCP@NDNFNBF@LCPELCFCBGDCDADEDIJEJAXBJFTDFBBABABEAKBIBMDABCDADADCBABAB@DBB@JBBAD@DADAJABADAFADABCB@BABA@C@A@GAC@C@G@C@ABABAD@HA@CBA@CBABCBABADADAD@DABA@A@A@E@C@EAG@C@CDC@C@C@KAKAECCAKCCAAAACECCACACGE@A@CBCBAAAEG@A@CBCDEBA@C@ACAAACACCAAAC@ABABCBA@C@AAG@AACACACBAB@B@N@N@PBJAZ@F@HBH@F@FBHBDADADAD@F@BBFDBBDBD@B@BBBD@DBFBBDBB@FAF@D@DDHFDFFDDDFDFBNBJDVHJFHHFDHDFBF@DAHCFGBGHODIJ]BEFGFIDE@C@CAA@CABGCCAGCIACAEAGCCGAAACCAECECGCEAIAEDCDC@E@ICCAAAAEAEDMHEDE@EAEC@ACCAACAA@C@EACACGECCAIACCECCAAGAE@C@GCEEEBE@IACAE@E@CAAA@G@ACEE@EABCDABAHCF@D@DCBC@CDG@ABCDIBCBCBC@G@E@AGEC@ACDEBAFC@CEBE@C@GAEAC@C@CC@E@ADADAB@F@LDD@B@FCFEBE@CAAGCA@EAAAEEEKCACCECCCEEEECCCCCCAE@ECG@CCAC@C@CBCBE@C@KCACCCECAAC@EACAEAEBEAE@CAG@CACCGCCAGAEAGCAAACAC@E@E@C@EBCCBCBGFABADAB@DABIHKDI@KASGGA@@CAC@CAGDGDIBW@K@CEDKBKEMS_IICCECIKSGECEGGAKCKAI@MCOAKEICKCOI"],"encodeOffsets":[[105912,29217]]}},{"type":"Feature","id":"511129","properties":{"name":"沐川县","cp":[103.902334,28.956647],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@BABAF@BABCDGFC@AAAAAAAC@ECCACC@A@AGDGJ@B@@@D@@@B@@@D@@@BA@ABA@@A@@@@AAA@@@CD@NOTD@@@F@@@BBBB@B@BBBDBBADAD@DADABAD@@A@@@A@A@EBA@G"],["@@@AAC@CAAAA@CBAFEBCDAFCBA@@LFDADAB@J@DAFAFAF@D@DBB@@BBBBDBBBBBBBBD@@@B@BABEBABAB@DAF@H@B@D@BAD@D@B@D@FAFAJ@HAD@H@H@B@BADCB@BAD@B@B@BDBBBBNBDAFBD@B@@@DC@EBAL@@@DABAB@@AFA@@DBD@DAB@HBB@B@DA@@B@BFBBBBBDD@@BLLF@@@D@B@BAFCF@F@FB@@DBDBB@B@B@B@BADAD@PDDAD@@@@A@AB@CCCE@ABCF@F@F@DCBSDEDCDBJFB@B@B@FAHAHAB@@C@AEM@A@AEE@@@A@@@A@@CIAA@ABC@A@A@M@A@C@ADMAEBC@GAAACACAAEAAAAAIM@AC@C@@@A@ABCBA@A@@@A@CHCDGDaJEDG@G@EC@EBMNWDIB@BE@IBGBK@@BADAD@FABC@CECCAICCCGECEA@CCGAI@CACCA@GICCC@@@QCEA@ACIAG@EBEBABC@EFO@@A@A@@@CCEEA@@@A@@A@@@@A@@ABA@AAEC@EDCBCBCBKBCBABA@CBAAA@CEBEDO@CCAGAC@CBCBABC@CCCEEC@ABADAJ@BABABA@C@@@E@M@I@EBA@ABCDCJE@A@@AAA@CACAABEDCF@@A@A@ACAEAACAEACAEAC@E@C@CBCAC@ECACACBE@ECECCCAACCCCAEAGCC@AAABCBCBADCFEDC@GBCBCBGLCFCDEDG@C@CBADAFADCBGFCDCDCBCDEBCFCBADA@GFCDCBCFEHCDEFCBIBCBCBABIFCDABCDABC@@DBB@D@DCFEJEHAFI^CJGPAHEHGDCBE@EAGCECGGIEUGICMAEAECCCECCEGECCC@E@EBA@CAAAAE@CACAAA@C@CAAAECAAE@C@CBCBCBGAEAE@G@GAE@Y@IBOAM@M@A@A@ABBDBDBD@BBH@B@DABADAB@BBDBBDDDBBBDB@B@DABCFAD@D@BFHBBABAD@D@BHFBDBDDDDFBBBBDDBLDDBFBL@L@D@DCD@D@DBH@F@D@F@B@BABCBC@CBCBABABADAB@DAB@DGBC@ABAB@B@D@H@DBD@H@B@DABABA@ADCBEBCBABIBCBCBC@ABIAA@CAA@ABABCDCBCBADCBANAJBLAFABABEASCIEWAIBIFCJCFFLLJHHLJLLJHBDBFANCRAJ@D@P@@BJFPBF@FEHGFGDG@KCM@G@GBEFAHCJAJ@D@JBFHVFJDJDLDPTZJITMRORGHCF@VAXAVBJ@LAJDJBFDDD@DBFAD@JCDEBKFCD@D@FDFFFF@DAJMHCF@BBBBBB@B@DABBF@B@BABADAB@@@BBBDBBBN@F@DBBB@@@BAD@BBBFBDDDD@@D@HAF@D@BDBBB@BBB@@BBDB@BAD@D@DBB@LDBBBBBBBB@BBDBBB@BBB@D@D@NAFBB@D@B@@@@@DABAB@BABABAFAB@DCBA@A@C@C@CAAACA@AAECCCGEAAAAAC@CBA@C@CBAAC@CCCACCCAACAEAAC@AACAC@CBCBAFEDA@@BABCDABADABCD@DAB@BAB@@CDI@AACAAACCAAAGCAA@@@ABAD@D@@ABAAAB@AAAC@C@AAECA@@@@AA@@A@@@AA@AA@@AB@BADAB@B@@AB@@@FCFADAB@@@B@F@F@B@B@B@B@@AB@B@B@D@B@D@B@F@@@B@B@@@BA@@BABC@CBEFCNCFADEDIFQ@CDIBCBABCBABAB@FEB@BAFAD@D@D@B@DBB@FBHBFDB@F@BBD@BAD@B@DAPS@MDCA@@@A@AA@@@@CAC@@@A@@@@A@AC@AAAAC@AAA@C@CAAC@A@@AAAAD@@BBABBBAB@BAD@D@@@@@B@B@DBJ@B@FBB@B@@@B@@@@BB@@B@@@B@D@B@@@B@AHIHC"]],"encodeOffsets":[[[106379,29785]],[[106379,29763]]]}},{"type":"Feature","id":"511181","properties":{"name":"峨眉山市","cp":[103.484503,29.601198],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@KIEGEEAAAAAGAEGIEEICCACAE@EDADCDALAH@JBFDBFDDDBF@DADEFCBEBE@EAGBG@EDCFGJEB@@AACAACACCCCAG@@@AAICG@A@A@AJCFCHADEBCBCAGECAC@CBCDCBE@A@C@CBE@EBEAE@CAEEAAE@MAE@GBKAGECIOLEDEJABERAHADAJALANANAJBFDHBJDJFH@DDH@LALAJGRAF@F@JBL@DDHBNBN@JBRFHBFFBLBLBPANANAN@PBNEJAN@LDFBHDBBD@D@BD@BBF@BFJBDFDHDDDDDBDCBEBE@I@CBC@@@@@A@@@CA@@A@AA@@A@@@@@E@C@A@A@CBCBABA@@DBBBBDFBD@B@B@BBB@@BD@BBBB@@@FF@@@B@@CFAD@@@B@@ADCFCH@@AB@@IPAB@@@BBB@DBFBFBD@@@@BDDB@@BB@@B@B@@B@@@@B@B@B@BBB@BDALBDBDCLADCD@BHFDDFBFBFAPCHAJBBB@BBBAF@DDBFBH@FBBDFHFDFBF@B@BDBBBDDJBDBBJBBB@DCPAB@FBDBDD@JDFDJDHDLDDDHF@DBBDBDBD@HCD@H@FAFAFBHFFFNPFNHL@@FNFHJHDBLFNDHB@@DBLHDBFCHAHBBBB@DABAB@D@D@B@F@HABAFBFBFBD@@@FKRG@@@@@@LCJEHGDIFKDAFELE@@DAHCPGB@NILGDCFEHG@AB@@@DAB@B@@@DAD@BABAFGBCBCBABA@@B@D@DBB@D@D@BADABABADCHC@A@AAABA@CDA@AB@D@@@@@BC@@BA@CBCDEBABABAB@BAA@@AAA@@@CBA@@@AA@EBC@ABA@A@AAAACA@A@A@@DC@ACA@A@ABA@@@A@AEIAEAAAIAC@AAAAE@AAAACA@AAA@ABEBAAA@EAA@AAACAA@AAAC@ABA@CDA@AAA@AAAA@@@GBA@ADABAFADABCBA@ABA@AAACEAAGEEEAC@A@CACAA@AC@A@@@CAA@A@@@@@E@A@AB@D@BA@A@A@CCAAAACAAA@A@CBA@@DCDEBC@A@@@AAEAC@ACAA@AACA@@ECIGEAAC@CDC@@BA@@D@B@B@@@B@BA@BB@D@DBB@BBBBB@DBD@@@B@DC@EBMAOBC@AAG@@@AAACCCCACC@WMCCMGEEEAIMEKCGGIGECAG@CDABBBBHAFAHCHA@@@A@@A@CDI@CACAC@@A@CEACCAAC@G@EAEAEGEC@CAKICEAECEAE@E@E@AACIAE@CBCDADA@AAGCECECG@C@CAAE@CDABADA@EAC@AAAKCCAAACC@E@GFM@C@GDAB@AC@CDE@ABCBC@A@A@AEECA@ABADABC@A@C@A@EBEDEDG@A@EQAIAIBGDEFEJEDKDODKBIDEDE@GC"],"encodeOffsets":[[105854,30010]]}},{"type":"Feature","id":"511132","properties":{"name":"峨边彝族自治县","cp":[103.262048,29.230425],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@ECCAAG@ECK@KAaBGCECGIEEEKGIECEKMGCEGAI@GBIBEBGAKAIAMCICIGM@@@@GGCGIIICIAKAE@EDEFABC@C@A@CBA@ABA@C@A@CBI@CBABA@CDCBA@ABA@CA@@ACACAEAA@@A@A@ABEDABA@A@E@C@ABABABABABI@A@ABC@@B@BBDENCHCJALEJINELAFCFAHEL@JDPDPDLCNKHCHEJAFAFAHENAN@BDTFNHTFNJZBJCLCNAFABEJEPCLBLDJHJLHJJDJALENALGNENGTILELENGNGNEPAJATDHDHFFNJLDPFLBLFHDLHLJJJDFHDHBPFFBDFHR@DJNFJFHFHFJHJFHHHFDNFHFFH@HBHBLDLDHBFJJHJJDLDFFFBHFFDDBJFVRPNJJFHHJBJD@BBBJ@JBDBDF@FBD@@D@HBF@DAH@DADBDABBN@L@JALFBFBHBD@DB@ADADADCFC@ADABAD@B@BAB@BCBABAD@D@DAHELCFCBABABA@CHKFEDEBCFAFAD@JEDCDGB@B@BBB@BFDFBD@HBDDFFDFFBD@D@L@BDBJBBB@BAFEFCDAD@BBDBD@B@BCHCDKAGBAFADABCBCBCBCBAD@J@DABEDDJHFLBHAF@NBF@BBFFDBF@FBFAF@DAD@B@F@DADCDAD@DBHFDBDAFABCDGDEBIB@B@H@JDBB@@H@DBDDBDBDDBBB@@FAHIDEFCH@HAFBF@FADAFEBC@CAECCECCAAE@IBGBKDCBCFCF@DBDBJDFFHJBFBHBBBBFFFHLJHDF@FCJCLAPCLCFCFIFEHCJAJBRBH@F@JDHFHHFHDNBLDDFB@@F@FEDIFIFGBCBEBEDCDGBEBABEDCDCBADCDCBC@CBI@CBCDCDAF@FAJAH@H@DBDFDHBDD@B@B@DCDCHELGDEDC@C@EAE@CBEBCDEDCBCDGDCBCDCDESYCOCKCIEIGUAE@I@CBIDIBGFEHAH@N@LDH@HCHEFG@EAEEOAI@@@O@CBIDQBMAEACIGKKKIGGKIEKCBCDAHEDKDOFKDE@MAMEMCO@IDIDMFE@OAQ@Q@GBE@AAEEEEAEECCAE@CACACCOCI@GAEAACBCAAACCAEAAC@E@E@A@@CAE@EBGBCDGJEBCACCGKIKCCEAEC@QAAAACCMCAACEAAA@@AAAC@A@AACAA@AAA@C@A@CACC@AA@GAI@KBQBMBIAG@EACAGACGMMIIGICIGOCKAQESBI@IDGHILIJIHIDECIGGMIKK]UGI@A@A@CBABCDCBABA@C@ACEAA@C@CBC@EBEBEBABA@A@C@C@G@A@@GGEEA@AACAAAA@A@CDCDCBCBCBA@C@A@AACBEDADQRKHEBAAAA@@A@@@@@CACAA@@@@@G@CBA@G@EBSDCBABIAGEA@MEC@E@A@AAAAAAGEAAGAEC@@"],"encodeOffsets":[[105591,29506]]}},{"type":"Feature","id":"511126","properties":{"name":"夹江县","cp":[103.571656,29.73763],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@@AB@@AB@BAB@@A@@@AAA@@@@A@@@A@BA@@@A@@A@A@@@A@A@@@@B@B@B@@A@@@A@@@@B@@C@@@A@@A@@@@@@A@BB@@A@A@AB@BAB@@@BBBD@DB@A@@@@B@BBBB@@@B@@B@B@@BB@@@@A@@A@@@@A@@@@@@BA@A@@@@@A"],["@@@AAAAACCAEAAAA@C@AAACAAAAAAA@A@AAAA@@@C@A@@BCB@DABBB@B@BGDCDABABCBABC@C@A@CAC@A@@@ABABADADEHABABC@CB@@A@A@CB@@A@@BGHEFCDKHMJA@OHGDCB@@KFEFCBELCJGHIFKD@@@@@@QHEL@@C@EAEAEAABGBE@A@C@C@A@ABCBA@AAGAGBEDCAKGCA@@GAMCKECAIGEGEM@@GKEMMOEEGEEAEBEBG@C@AHAFABCBCAC@GCC@C@AD@DADCB@FADCFAB@@BDBBBBAB@BCBABCBC@C@CAAA@ABCHEBC@CAEAIACCACCEAECE@A@AB@BABADABC@C@ABEF@B@@@@B@@@@@BB@@B@@@B@@@B@B@@BB@@BB@ABABA@A@EAGACAE@A@@C@AFE@@@@CAAA@@@@A@@@@@@@A@@@C@@AIB@@ABBBBD@J@BABKHCFAB@BBB@BBBFFFFBBGLAF@F@N@DBD@BBBBBHJDBLFDBBBBDAFABKHBBBDBFFF@BBD@BCC@B@DBF@FDBDFDDFBDBFDBBBFBD@JBB@BB@FAD@B@BDBD@@@BD@@@B@@@B@B@@@B@B@DBD@@@F@@@F@B@BABAB@BCBAB@B@@@@@@D@@B@B@@AB@@@B@@@H@DADADAHDJHHJ@DB@@@BBBAB@BGB@DAD@H@@@DABC@@@AGAEEAABCBCDCBABCBA@@@C@AAABAB@B@BBDDB@B@@@B@@A@C@A@@@ABAD@B@B@BA@AB@B@B@DB@@DA@C@E@ABGBABAD@BBBDDHBD@D@B@DADGFCHAFADBDFLAF@@@B@BBH@@@DAD@BBB@@ADAB@LBB@BB@FAD@B@FBJ@F@J@FBL@JAH@BAHCLEBABBBBDFDFB@DDHBF@BAB@B@@BDFBBDDBBBBABBFBDBF@BB@BBD@B@B@B@BAFAJCB@D@DBBB@D@@@D@B@BBD@DAL@D@D@BAFABABGBE@ABA@@B@BB@FD@B@@@B@@@@ABMACBA@AB@B@D@BBB@BD@BBDBF@D@@ABCBA@@F@BAB@@A@AB@@AAA@@@ABAB@BBB@D@B@B@BCB@@A@A@@B@B@B@B@@@B@@@B@B@@@B@BAB@DAD@@@DAB@@BBBBBBBDAD@FBB@BAB@B@BBB@BB@BBBBBB@DBB@DBDF@DCBA@ABADBD@B@@C@A@A@A@AD@BABA@AB@B@@@BFBBB@ADABAB@BBB@JFBBFDDDBB@@@F@FCDABABABA@ADBBF@@BDADAHABAFCA@@ADADA@@@@DAB@FABBB@@@@D@BDBJHDBB@D@@@B@B@BAB@BAHBJ@B@D@BBD@BBBBFBBB@@AFAD@BB@D@D@LADAFADADCB@FAFAD@DA@ABAAI@ABA@@AC@ACC@A@A@@D@FA@@@@BA@AAA@ABA@@FAD@FDD@B@@A@ACAAA@A@ABAB@F@BABA@AA@@AA@@ABABE@AB@DALAB@BBFCBA@@@CA@AA@@@AAA@A@@B@DA@@BA@@D@@ABA@@HEBA@@BCFGAA@AA@A@EAA@AAAAAEA@@AB@JCB@DADBHBB@B@BA@A@C@AECAA@ABA@A@A@@BADABAB@BA@ABA@CAAACAAAAAA@A@A@CAA@A@C@CBABAB@DAB@D@F@B@B@@C@AAEAA@CBAB@DAD@DABA@A@CCCBG@AAAA@A@C@CAA@A@CAACCC@@@C@ABCBG@A@AC@IFCDGBAB@BEAECCACAC@@@CBAAAACAA@CACBA@ABA@EDC@@@AAA@AA@@AC@A@A@CDC@CAC@AAA@ABABAFEBABA@CBABADAB@BABABADG@@BE@A@C@CBEBA@A@AAAA@AAA@@C@E@CBC@ABAD@D@BBD@BBDBD@D@@@BGBA@C@AAAGEEEGCAACAA@A@@@CBCAA@ACCCB@@ABADABABABADABA@C@AE@I@AAA@@A@ABAB@DAFBDAB@@ABCAAAAAAAAC@CAABCBCBA@@AAA@A@C@@AEAEAAAAC@CBCDA@@AA@@ABE@EAAEAOEE@G@IBGBA@EBIBM@EAC@CAEAAA@@"]],"encodeOffsets":[[[106002,30575]],[[106116,30363]]]}}],"UTF8Encoding":true});}));