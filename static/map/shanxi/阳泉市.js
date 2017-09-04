(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('阳泉市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"140303","properties":{"name":"矿区","cp":[113.555279,37.868494],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@A@E@AAI@KBABEDCFCDK@@B@BA@A@CCCDD@E@@@A@A@BBABA@@@@AA@A@@@BBA@@@@BB@A@@@@B@@@@AAB@@@@@A@ABMBADA@@@@@@B@@C@@@C@B@AA@AC@E@AB@BA@@BB@@@@@BAD@@@DB@AB@@BB@@@DAABD@@BD@@@@@@AB@@BB@@BGA@DGH@D@F@BLBFBBA@BBB@BB@@@@BABBB@@@BA@GD@@ABBBB@BAD@@@B@A@AB@B@@@BBA@BD@@@@JE@MB@DDBD@H@F@H@@@B@BA@@@@@BBA@@@@B@A@D@@BB@@AA@@@@@@AB@@@@@D@@AB@@@B@AAEACAECAE@@A@@A@AAB@A@@@A@A@CC@BCAAAGAEFB@@AA@AD@BAEAAA@@BC@@B@@AB@B@@@@B@@@BBB@EF@BA@BA@@F@@@B@DBBBDBDFCACC@CCBC@C@AB@@AA@@CF@H@@@HA@AB@DAF@@@BD@@B@BBBBAB@@@B@DABAB@BA@A@AB@@BB@BBBDF@B@FB@B@@DB@@C@AFK@@@AC@@AB@@A@AB@@BD@@AA@AE@A@AAAAAA@@@@@@@@CAAB@@A@@B@@A@BFA@@D@@@AB@@@D@@B@@@B@@B@AB@@@BAA@@@BA@@@@@A@@@@B@B@@@A@BD@@@BD@D@@BB@ABB@B@@BB@F@@HBCBACA@A@CB@@GA@@C@@BBBAA@F@@@B@@AEBAE@@@A@@@A@@@CACACDAG@GBCB@A"],"encodeOffsets":[[116286,38769]]}},{"type":"Feature","id":"140322","properties":{"name":"盂县","cp":[113.41233,38.085619],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AACICKAIAM@A@MAMDO@C@CBIKEMAQAS@SBOFSFWDG@EAOAGAI@EBCDMJOJOFMFADCFEHGDOHE@M@KAMBADCBEDCLCH@NAJ@H@FCHCFCDIBIDM@EDALALADMV@LFFHFHBBDCHCJCHEDIFKBQDKAG@ICIGOGIQAGIMEISGW@I@MBKBGFIJKHGJEJIJGAIAOIQIGEEE@@AA@A@A@A@@@ECCI@O@C@GDEAAAC@G@C@@DAH@DAAE@CBE@CBGBEFEFCDAF@D@DABIDI@CBCBI@GAEACAA@ADSLIFA@CDAD@DA@@@C@A@CBCDCBA@CDCBCBADEDCBCFCDCDA@CFAH@HBH@BAD@B@B@B@BA@@BABA@A@AAA@A@CAA@@@CAA@A@AAA@AAA@A@C@A@A@A@A@A@A@ABA@@BABABAB@BC@@@A@A@ABA@CD@D@B@D@DCDADDJ@@HDH@LGDBBDBB@N@F@BEHBDBB@@BBB@@BBB@BBBBB@BB@B@B@B@B@B@AB@B@BABA@@BBB@BBBB@BB@@BBBB@@BBBBBBB@@DBBBBB@@B@B@BAB@@AB@B@B@BBB@B@BBBB@BBB@B@D@FDFDBF@FBDBDBBD@FBJBFFDDBDHDHDHDFBHFHDHDFAF@HBBB@@BBB@BBD@@BBB@BBH@DBDBDH@F@FDF@HF@F@BFBHBDDBFBF@D@BBD@BBDBBJ@DBBDABBFDBBBDAHBFAHBD@FBDBDBBAHAFAF@FDDDBBFBDDDAH@D@HBHBDD@BBBDDD@DDJHBBBDHLDF@LKJMLCJB@@BBBB@BB@BBBB@@B@BBBBB@BBB@B@BBB@B@D@BAB@B@BAB@BAB@@ABAB@BA@@BA@@BABAB@BAB@@AB@B@B@BAB@B@B@B@B@@@B@BBB@BBB@BBBD@BFBDDDJBPC@@FAD@FBDBL@JBLAN@P@HDDFdLDBLFTJ\\LRDRDNHDDBBDLBDFH@@@BHHRHNHNDbPXFFBNFB@XFDBFDZHLHRJHBDBBBHBLFHBFBHBF@J@TIJEREHALAH@Z@LDRFVJFBHBL@P@H@RDP@HA@KBKBIDK@KDMHEDCFCHGLIDCBABA@MIIKKCAKGKIMIKKCCMOCKEOAKGOCODOFIHKHEFEVMJQAO@MASCKGQ@AAECMAMAC@G@SFEDAPORMFSDIJINGLCV@FB\\FVDV@LANCNIPSFGBAJELCPAPDD@BBF@LFFDDBD@DEBCBE@CAEACAEBCHCDAD@HDB@DBD@DADABADA@CAAAAEACACA@@AABA@CCAIEEABAHCDABAFAD@BDD@BBDBFCDBF@F@N@PARATEPCLCT@@BFBJDHBHBHBF@FABABABCCAAEAAAACA@C@AD@DCDC@A@E@@E@EDEBCBAC@EBI@ACK@CCCAECA@ACC@EEEAIBCCAAACA@@AAIAA@A@CA@@GGIG@A@A@AAAACA@AAAAA@C@C@A@AACA@AC@@AEA@@EEEEAACCCBCBEBIDEBI@GAE@@@ABAB@BBH@BCDBFADCBCBABE@EBKBEBEBC@@@@@OCGBK@E@ABA@CAECCCEAAAAABCDADC@EACE@EBG@IFIACBGBIACBC@C@QBCACACGE@CA@EBC@CODKJADGFC@EAEGAECC@@BCBE@@AGAEGCE@ACGECBIPCBCBG@EACCAACEECEEIKA@C@IBEBABCACAGGOEKGAAC@CBCAC@ACAE@AD@BA@@@AE@@GBABCFAFA@A@GDGFACMBCDABA@E@A@A@@AE@CAACACAA@E@A@CBA@EDAB@@AB@@BBBBFB@B@@EBEDA@AA@@C@A@A@ABCBABAB@BABABABABA@E@@@A@ECCE"],"encodeOffsets":[[116198,38920]]}},{"type":"Feature","id":"140321","properties":{"name":"平定县","cp":[113.630107,37.804988],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@UIICIDAJCJ@@@B@DCHEDCBG@C@A@ABCBC@GBKBK@GAG@K@IAKAGAAAECAE@EBA@AAA@@CC@@G@G@GAI@AACCGE@@OAI@@@EBI@IBGDGBGHONIDOBSAMEQAK@WBUAO@KBI@QDKLCJGHGHM@OAKBOBOBIVORKFQL@BEJGLEHCN@L@RAFFHDF@HDHDFNFPHNFTDBBBB@FBBBF@D@DDPAJ@DEPAJBDNHLAR@JBPCDE@OBC@EFA@@HCBAB@D@BBFAB@DAFAD@BADABAB@NA\\FFBPBNDLDJDN@@@TAFEREDBHBJCD@H@F@D@F@HBFT@BLRB@RFV@NPKBDL@LMHAFAB@BDHDDBBFDFBDBNBDFDDHN@BBF@FBF@D@B@@@B@DDB@B@@ABGBGBKDCBOHCLEJCHCBGHABABCDGFEFKRAD@@FHJDJHFJLLB@P@J@FDB@@FCNA@MF@DA@@BA@C@C@C@C@CBABABC@C@C@EBCAABAB@DBBJ@PHHBD@BABAF@BBF@BB@D@DB@D@BAFCB@@BAF@DABCBE@KDADENAFAFAJEJ@@CBG@GBEBEBA@E@A@A@AAA@A@A@@BAB@BBBBDB@@BDDBH@ZANBBBHHADAJBJEH@FAF@BD@FCDCBADBBBBFBDDFDDBB@BAF@L@HAPD@@@@D@FAFALAFAF@BADADABCAEDC@AAG@ABABA@@F@HBJ@FAJCFADADADDBBFFFF@@FB@BD@@BDBBBB@D@D@B@BBBBB@BDBB@B@B@BJHHH@@DBB@B@JBBB@@DBBBDBDABADADADBD@DAHGLIHELKPOBABADE@CBABECA@CBCDCHAHAFCJCDCBAAA@EECAA@ADG@AAC@CDADCDE@E@ECEACAGAA@GFC@CCKCAC@CAE@E@AADALIBCBABADAB@RDF@DABAHANGHGHKBEDGPSFMFIBIDKBGPQPCNGJKFIBMDMDEFODGDS@U@E@C@MAM@KBKDGBCFILGNAP@RDREBCFGBIAKHEDCLELGNIDKBICIEKGCOKKCOCGEIEMGGICKAQ@K@EFCAGAOCQAIGEOAODOJYLEDSJKDUHMFUFG@K@WAMIIECCKKSIUKMGUAOAG@MA@@O@WE"],"encodeOffsets":[[116519,38574]]}},{"type":"Feature","id":"140302","properties":{"name":"城区","cp":[113.600669,37.847436],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@@@@B@B@@@@BDDB@DODIHAH@@AEA@IBID@BJ@BBF@B@@@@BDAHAH@CBBDBD@D@@@B@@@B@@BFFA@BA@@@E@B@ABAA@@@DB@BBBABADADAF@CFADBD@BBDBA@C@CAA@@@ABABCB@@@B@B@@C@@D@B@F@@@@@B@@AD@@@@@F@@@AC@@AAB@@BF@@AB@@AFABAB@JAP@@AD@B@DABABC@@DABADBF@DAF@DGD@D@H@B@@@B@D@D@D@@C@AA@@@AAEAG@C@E@C@CACCCABAAAG@C@GA@ABCB@@GE@A@G@@DDBK@IA@D@DBBD@DGDBBAF@D@AHC@@@C@A@@@A@@A@BFB@B@B@B@DJ@@B@HEBACA@AACB@AEA@@AABCG@@B@B@@GDA@KDA@AA@@@AB@EED@JCFJ@@GKAAF@ACE@OBMBGGDACC@@@ACBC@@BG@A@A@BB@@@BD@DD@@@DBB@B"],["@@@@D@D@F@B@@@BA@@@AD@F@@AD@@A@A@AAAA@A@A@C@A@A@A@E@A@@@A@@BA@A@@@AB@B@@@B@B@B@BB@"]],"encodeOffsets":[[[116299,38750]],[[116375,38779]]]}},{"type":"Feature","id":"140311","properties":{"name":"郊区","cp":[113.594163,37.944679],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@EA[EMBA@ABCBABC@EBCBA@EBAAC@A@ABGD@@EB@FAD@PCFD@DBBBBDD@B@DB@BB@BDF@DBBB@@BBDBBBBBF@DBF@B@BDJCJAB@BF@@BGJGPC@CCAAC@@@@@A@A@@@AAA@C@@CCC@@A@@AAB@B@H@@AD@DA@B@@DDCBHHNAPAF@BDE@BBHL@@EIIDC@FFA@@B@@BBB@LCB@HC@@@A@AH@ADBB@@FB@BDABBB@BDFA@G@AI@@C@A@A@AEA@A@BB@@@B@D@@@D@BGC@E@ABCACHC@AA@C@CJBL@CA@CH@B@F@@HA@AD@BHBD@H@BBABDBDDDBD@F@D@H@FBBB@@B@@B@DC@C@C@A@@@A@G@A@BB@@@B@@BB@B@BBBBBB@BB@B@@ABBDDAD@BB@B@BF@B@B@B@D@B@B@B@DBDDDDFBDBDBDBBABENG@KCKLAMOU@QEA@KQ@AESGAE@C@E@G@C@IDGACAQFEFSB@@M@ICKCMCOA"],["@@ODIAQ@KBMGACBIFO@CBICO@C@CAEAA@EAAAASCMEOGMECECG@GCEEGABEFIFKHIHIJIPILCFKNENCJIJIFEDKHEDCFCJAFALDJBPCDADIFKFOHIDKHIFEJCP@@AJBLBN@@BDBHFNDNFPBH@HDN@J@JNEPEPINIDCFAJ@HBPBFBH@XCTEPETAT@RBNBLFAJ@D@DCPBN@N@BBNBJDLDJBBDFFDB@@@F@B@BABABABA@ABABADABAB@B@D@@@BBB@FCFA@@@AEAAAAA@@BA@@BAFCB@DAB@F@B@DBDBBB@DBF@@@B@B@FABCBADDNEBCH@H@BEBEBADAB@HF@@B@@ABC@@BBFBDD@DBDAD@BBLHPFHHDBDBBAFAJAD@B@JLFFFDDFBBDDFBH@DADAJODAHFBDF@HDBFBH@@AFAD@@DDBFFHFBD@HEBCLIPC@DAD@FDBF@DHDBDBRAD@D@DAJBAGAABM@YAGCC@AA@ACAA@ABA@AB@B@B@BBB@B@F@B@FAFAHAH@DA@@FIBIBEBEFMBCLCF@DABA@CBE@AA@EDABC@A@@C@CAAE@AAE@ABABC@GAOGI@AA@CBABADBFAD@D@D@BABADAD@D@D@D@B@@AB@@CNEB@DM@EA@ECI@O@A@KKEIIGICEG@@BCLQFEHEDCBABAHGDADGFIDKPGDALCHAHABA@@@ACA@C@A@@@A@CAE@EAE@AGMCCCEMACAEAECAACCCG@ACACACAEACCCCCABB@B@B@BC@@BE@C@@B@@AB@@A@E@C@C@@@A@@A@A@A@A@@@ABA@@B@B@@AB@@@B@@A@AAAC@CBACBA@@@AAAA@AAAA@A@AAA@@@A@@AAB@C@C@CHE@CBE@CAABCB@@ADABCBA@C@@BO@IBA@ABEB@BA@@BE@@AA@BB@@BD@@E@@@@@C@@BA@@@@@E@A@C@@@@DA@A@@@A@ADAB@B@@BB@D@DABAC@AACBCDEE@CBCBABABAA@HA@@D@BDBABAD@GE@A@@AA@A@BAA@@AC@C@@A@@ACB@@@A@A@@@@@@B@@@@AB@@B@AB@@A@@B@AA@@@A@@@@C@@BA@@C@@@EB@A@BA@@@@BA@BB@D@@@@@@B@BBBB@B@BBFB@@BC@@AA@@B@BA@@BD@@B@@EL@B@DA@@CA@A@@E@ACEAA@AAA@@BAB@B@@ABABA@C@A@@BAAAAAA@@@AC@@E@CBA@@BGB@@G@E@@DB@@BA@@B@DADDDD@BDEDACACAA@C@A@@@EB@@AABE@@FAA@A@@@A@@A@A@@BA@@@AD@@BBFBABC@@BBB@@EABFBHBBADD@@D@B@B@@@BBA@B@BB@@@BFFDDBFBBBA@@@A@@BC@@@@@A@@B@@@@B@@BA@@AC@B@A@@@@@AB@A@@@@ABA@@@G@E@G@C@CA@CNAF@@I@@C@@AAB@A@@@ABAB@A@@@C@ABA@AABA@@HCB@@A@@AABA@A@@A@@AAA@AABEAKA@A@E@CHG@CHB@AA@@AA@@B@@@@C@@AC@BACB@@A@@AA@@BCA@@C@AB@@@@A@@AB@@ABAF@D@@BBBA@D@@@D@@@@A@@@@B@BCNABAB@@@@@A@BB@@@@@A@@B@A@@A@@B@AA@@B@B@@B@@B@BAAAB@B@@@F@C@DCDDB@B@@A@AL@DCDEFCBALA@AACA@E@CAE@AAAACAAA@@AACAE@ACA@@ACAA@C@ACAACAC@"]],"encodeOffsets":[[[116297,38728]],[[116242,38750]]]}}],"UTF8Encoding":true});}));