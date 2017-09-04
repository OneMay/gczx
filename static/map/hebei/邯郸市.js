(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('邯郸市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"130402","properties":{"name":"邯山区","cp":[114.531002,36.594313],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@AE@ACFY@A@GBIGIACCGCGCI@CAC@ACMAA@@GKA@EMACAACIAOAECGAAAC@A@@DEB@DDDHF@AOA@@AAM@@@CCMCBAQAAC@M@C@K@BDCBE@K@[BABE@A@@LOHoDCB@DBVIBEBE@ODFXO@WDAK@OKBG@MBA@CAC@CAG@M@AHAHEDGBIBCDEFAH@BBDBP@BANAV@NAD\\@N@@FV@R@D@HH@DADCFENCHAFAFAFVE\\G@ED@D@J@JH@B@F@J@@@HDNDTBH@D@J@D@D@DC@@HCDBDQF@@A@BDCBG@CBIDGD@@A@KBCBXnL@VC@HjT@@@CD@BKAA@KBEF@@DB@AGBADBBDBA@BJ@@AAAFA@EHAD@B@@@BBB@@@@BH@P@B@D@B@F@N@BP@B@@B@@@D@J@@B@@DLB@@B@BBB@BBB@B@@@@BD@B@@@@BFBB@@@B@D@@@HF@@@D@@@D@F@@@@@D@B@B@D@D@@@JAB@FAH@@@D@DAB@N@FA@@@@@@F@@@@@H@F@HA@@J@@C@@@CB@@CAEA@BAD@B@@AA@@@A@@CD@@@D@D@B@BBBBDBD@D@FA@AD@@FD@@B@FHDH@B@HBF@D@@BLPPJDBHBVDR@J@J@AGB@L@@IB@@EH@BA@G@CBM@CBADGDAD@BAACD@@C@CCAO@@CE@@@@@C@AAICC@CBAG@A@A@@NCDCAIA@@E@AD@@EBGJ@BCF@@AFS@@AKIKAAGE@@GG@@A@A@AAA@A@AEDABEDGBABAFICEEIEIGK@@[BA@MHCBCBIBABE@M@K@@@BDEBGBKBCG@@WDEHBHEFK@E@CAMAC@ADCBE@GA"],"encodeOffsets":[[117265,37374]]}},{"type":"Feature","id":"130403","properties":{"name":"丛台区","cp":[114.492896,36.636409],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@G@EBA@IB@@C@C@A@A@C@@@@@E@C@@@C@@@E@BF@@@B@H@@A@@BA@@AA@@HA@@@C@@@A@@B@@BHE@BF@B@J@@@HB@@@DEBD@DB@BDAB@@D@@D@B@BBH@BD@@FD@@NEAK@EAC@AAM@C@A@EA@CCAE@@@A@EBGBGBA@CAIG@GEBAEAGIF@@EDEB@FDRGBEB@@E@G@C@CHA@EDCDABABC@CBGBCC@CAA@@A@@@@@AA@@@BA@@AABA@KFA@CBABEBGDCDEBCBA@EEACMBGBA@I@I@C@@FABADBDDABB@LADAB@DBB@B@BBBBFBB@LBLAD@BAFB@@@@BDAHBDDBDDDLADCCAEG@E@CJGFIBDBBJAFC@CFAF@DB@DL@JBF@D@BD@DR@TDDBHBPBLBH@D@B@JBD@B@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@J@H@R@BJ@FB@H@D@F@L@H@B@@AR@B@D@B@BBAO@A@@@@@AH@@A@AH@D@@@B@FAB@B@AEB@B@BDBF@B@D@A@AF@DBFDRN@BF@BAFABB@DB@DBBF@B@BB@@BJ@D@@EB@@CLBF@FAJ@VCB@@@LCH@L@RCDALKBABARHEPAV@@@D@VAN@HENG@KJ@@@NAFEDELS@CAA@AAA@@ACAGDAJ@@@FAD@FABBB@BBDFLBFDLFTLDBEHBLDJ@@BDDFF@BAPAXCNAJALM@KAKAGAGBGBIMABKEAC@C@I@CAAEE@@EA@@@WKC@ECGAIC@AIC@@@@A@@AA@CA@@@@A@@@@@@@UGA@MCIAICO@@GJ@@EKKGO@A@AA@A@@CAACICAAO@@I@G@@HGBE@GBBJCFA@CBECC@CEMECI@C@C@ACC@A@@@A@@AAK@O@@DC@BDABC@CBCHAB@DAN@D@HABG@@FA@@JK@A@BHI@I@Q@UCGACAOIKO@AC@E@GAA@G@GC@E@AC@@EC@@BEBC@C@CAAAAAA@C@C@@@C@@DB@@@B@@BA@C@ABB@BF@DA@@D@@@DI@@@GBE@G@@@@@E@@@@@@@EBM@A@CBC@"],"encodeOffsets":[[117254,37481]]}},{"type":"Feature","id":"130406","properties":{"name":"峰峰矿区","cp":[114.212802,36.419739],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@EBGDIDIDOHABIDEDGBGB@H@VI@AB@@AAA@@A@@ECGCGEC@ICCAQHCLEPAFEVEZCLAL@L@F@D@J@H@FBD@J@F@D@V@DAH@J@BBHENCNEF@@FBLAD@@D@DCB@DAFC@Q@[Ba@AB@B@@IAC@ADFFFDBB@DCBBB@@B@B@@BD@B@B@BBB@B@DB@F@BDHH@DBBBFDJAFBBDDH@FKH@DAB@FBBAFAJDLBBBBPBHADABABADA@A@@@@@CAE@ABABCDAP@F@D@@BAFBB@@BBBHB@@@@@BDBFFADBBFDCDGF@D@FCBEAE@EAIBADAH@BBHBHAD@BAJEPEJANA@@HATBVHLDFAD@J@F@DN@@HHBBHA@D@@HAB@F@FAB@B@@EDA@C@@NA@AAEDA@E@CDCDDBBDB@H@DF@T@BBB@@GBCBG@CGCKAGC@GBAHBHCDEBABC@A@GDA@ADM@@@CAE@ACEAAC@G@I@CBAAAG@CBC@GFAACBEACD@BAF@DAB@BDLABJ@BDABCB@D@NAHCBADABG@I@GLABCEAEBWAKBACA@E@@E@AHACGCIAEAACGDAKA@KA@@@A@@@@@@@A@@BA@@JI@EBCEAAGICAKEA@CAOCKGAAEGESAE@@AA@@@CAE@C@CAK@CCGCE@AAGAE@CG@CCCCAGCCDAFAMCGICIMBCB"],"encodeOffsets":[[116935,37217]]}},{"type":"Feature","id":"130424","properties":{"name":"成安县","cp":[114.670032,36.444317],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@G@AH@JFA@FB@F@DAB@BB@BDX@D@BA@G@E@BH@BABA@M@AA@AE@@BEBE@I@AB@B@@E@@BO@BJBN@J@BA@C@C@BDABKBBDA@@BC@G@@GE@A@BJC@@FODABBHKAC@C@@FM@EBI@E@ACI@GBAMM@AKEBA@QB@B@BIBA@@@CBE@BNABK@@@C@@EA@EAG@G@E@CBAG@EC@EBAAK@CFGNAB@P@@BFBHBL@DMBCBA@E@IBS@@@IDCBI@AA@@@L@H@@@BCAQBA@K@I@@Y@EKBG@CAECBNBTE@@D@BCBA@OA@BI@EBBFBPDJBBBDFNB@HL@@BBDN@BBD@DDJDHDHBDHJAJ@H@BEZBDF@@BHBF@DABCD@NBDBF@L@FEAGFGXC@@DHLAHAFAAC@@L@N@F@BAJADADANGB@\\A@@HLFJFJ^GJAJAD@B@BBDFD@H@DBDBHDBBL@BDD@@CF@LAH@@@FBD@D@BADAD@HBL@@@FDBD@RBBF@D@J@LA@@@E@ADAH@DB@@BDFDL@H@D@BAFCBA@E@@F@B@DABAF@B@H@HBH@D@HBJ@D@JB@@N@H@F@B@D@LB@@L@F@F@J@PAHM@C@C@@@E@IFGAGAIAMAGGQAE@CAEDQREVBD@JANGHCEMCEACIGOEQEO@@@QAMAIEGCIKB@DAAC@ABC@AD@@@C@@@ACDAAC@A@EAAE@CMA@A@@GAAHA@@AGCA@AB@CC@ACGIIIIAACCCKAEK@CII@@@AI@CAAIIGEEACAC@E@@@GBAEAC@@@@COA@KB"],"encodeOffsets":[[117511,37164]]}},{"type":"Feature","id":"130404","properties":{"name":"复兴区","cp":[114.462061,36.639033],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@I@@AABACCAABBHA@@CE@AF@LBBALC@@D@@iS@GUDK@WmDALAB@@@HCJCDAH@DAACB@@@REACDC@GD@@C@C@C@I@CAGCSCM@G@@@I@E@AIGI@C@C@@F[HUFBEBEBEDGFMDEBC@CGGC@Q@U@@EM@[@BC@MBUBM@AAOMDA@KDI@EBKBC@ED@BCBDHBBBFDJDHGB@B@FF@B@BDLAXBFAFBADKB@H@JAHCBABGDMBC@A@ADCB@AAIKBACA@CBE@ABC@BDAFBDEB@HAD@DBHBBDAJ@H@D@BBDF@BBF@D@@CN@BCB@H@BADABCFGDGAAB@HHDLBHD@DAHAD@HA@AAADDDH@DADBAD@REFCJADBB@BFBHDCDADF@JFFB@FAAC@ABAFHDAHE@GDED@@GBIBADCH@BAL@@@B@BDBRAFCB@BB@@D@@@@@D@@B@@@@B@ABB@A@@B@@@B@B@B@@B@@@@BB@B@B@B@@@BA@@DABBBHB@BDBFBDBH@BKBABA@BBBDBDHJBBJA@@@@B@BBBBBFDJFJBDADADD@J@J@B@HANABDFFB@DAFADCHCFABADAB@LEB@BA@BB@@A@@BB@@@@B@@@BB@DDDHADAD@BABADCFCB@DGD@H@F@@@FAHACQ@EFAFC@@JEBHBFFA@HJHDBB@HAHAFAB@@@F@DB@DFBB@D@N@BBD@FBL@FB@MC@@EC@@AAG@A@A@CC@@@BAACA@@CACCF@@A@@G@@@I@AAEF@AG@@@AB@@@D@@@B@@GB@@BB@@AB@@@@G@A@@AE@G@@@C@A@@AAAE@@@@@AAC@@@@@AAA@AAA@A@AA@CK@@@AI@C@@@A@@@@AAOM@E@A@C@A@O@G@@A@@A@AA@@A@C@GB@FEBBB@B"],"encodeOffsets":[[117169,37452]]}},{"type":"Feature","id":"130423","properties":{"name":"临漳县","cp":[114.619536,36.335025],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@GB@@CB@DMBAACGAA@@AAG@@ACA@EE@@EAAA@MBBFC@@BEBC@I@BFC@C@AEI@AEAI@@MBC@A@@CC@A@A@BDE@WBM@A@A@@AA@@AGBC@@CM@@@A@@@@AEA@C@C@@@AA@@CE@@@EA@A@CA@C@@AGBAC@BC@A@@FI@@DG@@CAA@DCA@C@@@AAC@@@BA@@@A@@ACB@BAB@@@A@@E@@AA@@CIBACABA@AAAACBABA@CBBB@D@@BHDAB@B@@DB@@@D@@B@@@@@@@BA@@@@@@BE@@BA@@B@@@F@@@F@BIB@@@@E@@@@BE@@DGB@FG@@FKBG@@CA@@@@D@@AACB@@CBBBEBCB@@ABABADIHGHGBA@GBGBG@ABK@E@I@OBC@IDGBMH@BEFED@BEHADCDCFKFODSAQBC@A@SDGBADEF@D@DAD@BCHCFC@OAA@EAEAMBMBCBA@@@ABK@A@@HGB@AACCBCBEB@H@@@@@FA@@HA@@DC@@BEBABA@@NC@@FRBANBBFBNDB@B@LDDFFBJ@DADAF@DB@TB@F@BJAJ@BRFCV@B@FHDDBJEF@H@DVDNBHDDF@@D@BA@A@@@@NA@C@@F@@B@J@BHB@LA@DF@@N@VAJ@DB@B@F@BA\\AL@F@DAACL@D@N@D@BBBRDADN@D@@BN@BB@BPE@CGCCA@CF@@@BBDBBDHFAJ@@APBB@DA@A@CF@ASAMFDDBH@LA@F@ZJ@L@B@RADB@A@@@G@K@@BBJ@DAJC@@T@JAF@B@DANA@CAKAGAE@@@OBAHMDEL@BBFAD@@FBHDAF@H@H@FBB@@FD@@@L@BAAMF@DA@@B@JA@A@ARAB@FABLN@BNHAJ@BDF@J@FAN@@ED@D@LBAGBAPC@ED@AIB@F@@HH@D@@AB@ACLABAACD@D@B@@A@IAMAIP@@AF@@@@ABAJ@F@FA@AF@@BBBN@B@BA@AAGF@H@B@@A@CCW@AAAA@CBE@A@@EEB@IBGEKEQCGAC@C@@@@CM@E@KDK@CBCHIHI@@@C@@@C@AD@AE@GA@AEA@@@@AAKA@A@A@@@FA@AAGAAD@@@BBLJBBBBDBBC@@HGBA@ABCDE@ABADGAKAEAAAE@I@ABABCDGFCD@AACG@@GCKBBB@BGB@G@ABICCIDA@C@GEAC@A"],"encodeOffsets":[[117502,37019]]}},{"type":"Feature","id":"130426","properties":{"name":"涉县","cp":[113.6914,36.584994],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@JLBDLDPDLDN@@@N@PITAVJRLFBLHJHPLDBNHLFFBLBR@PFCPIRDLBFJHDJGNGNAJADBNBHHFDDHHHJDNBBHJLFPDBABABCDAFCD@D@BBD@BBD@B@DCBC@C@EBCAA@E@E@G@CFAD@B@DA@A@CB@@ABA@AB@BADBBADBD@B@DDBBJEHCDABCFGBA@C@C@E@@BCDABG@GFUDM@IEKCO@ADMNCJBFBHBPDXCBAFAPCRCLA@@FAV@JCFA@AHIDIBCEGPOBCDODEHKNONILMFK@ABCBIAGAAIIGGBIHI@CBG@OKWGKGAII@MAK@@ACCCACAACEIK@AEGAIBCDCBE@@@@BAPINC@@FG@CAK@ACOCIACCSAIAE@@AI@E@QBC@ALKHAFFBB@BDFNPBL@B@@BB@B@@@@BD@BBDDFHFDBB@P@PG@@BMB@@A@CDOBE@CBAHQFONGBAB@JCB@JE@@HCHCHCBAF@F@COGGIGAAA@A@AAA@A@CAGG@MAMGKIISKKCIGCK@IDKAGIIMGMCCE@@CAA@AAAACEACAA@ABEBCFAHABACCE@C@CCACBEB@B@D@HDBABBB@JEB@DBB@LCDABAB@BBDBDBBBDAB@BA@CB@FAD@D@FDDBD@H@FAB@B@B@B@BB@@LEDAJCAA@C@ABC@CBCBC@ABA@AB@B@B@D@@@B@B@BB@B@@BBB@B@B@BADA@@@A@@AC@A@A@A@AB@@AB@B@B@F@BA@@BA@A@A@AA@@AA@@@A@C@C@CAAAACAC@CBA@ABA@ABAB@@A@A@AA@@AA@CBC@EBCBA@AB@BABAD@@@F@BAB@BADABADAB@@CD@@CBCD@@AB@@@BB@@D@B@@@B@@ADABADADADABCBEDABA@@@A@C@@@A@@@A@AAAAC@AAAA@AAC@ABA@ABAB@@AB@B@B@B@B@D@D@DAD@@A@@@@@A@@AA@AA@@@@A@A@AAA@A@@AA@@C@A@ABC@A@@@A@@@EBEBA@C@A@GCA@@A@@@A@AB@@A@@@CAAAA@@@MACA@KCMCMACBA@@FERGRABEFA@@@@@ABC@AB@BA@AB@@AD@BAFAB@BA@A@CBC@@BA@@@EA@@A@@@A@C@C@A@A@A@AAC@A@C@C@CAE@CAA@C@AAAAAA@C@A@ABA@A@@AA@AB@@ABA@@@A@@B@BA@@D@BAB@BADA@A@A@@A@AAA@A@C@A@ABGBCBE@EBA@EBA@A@A@AAA@A@A@A@AAA@C@A@CAC@C@C@A@@@CB@@AB@@ABABAB@BAB@@A@@@@@A@@@A@A@@AA@A@@@A@@@@B@@@D@@@BA@@DAB@BABABA@@BA@A@C@A@ABA@AB@@A@A@C@E@AAA@ABA@@@@@A@@@@B@@@BBB@@BBBB@@BD@@@@@BABAB@@A@@@A@@@AAAA@@ACAAA@@@A@A@@@A@C@A@ABA@A@AB@@A@ABAB@BADA@@B@@@@AB@BAB@@A@ABC@A@C@AAA@C@AAA@@@AA@A@A@A@ABCB@@AA@@AA@A@@@AA@@A@AB@@A@@BC@A@A@@@AB@@@B@@BB@@BB@@@BB@@B@BA@@@A@A@@@@B@L@DCRGPMREREPEJCHK@M@M@E@IAUFUNIHIJKJQLKFIBMDS@M@M@MHELARANCBA@EBC@GBIJCBK@GAIECAAB@DBFJBDB@LDD@F@F@B@DBBFJ@D@B@JAD@DB@DCD@@FABG@GHGAGBCB@H@BDDDADEDA@@FBDDLFD@BBB@D@HCDAF@D@D@BBDBBDBBBDBDBFAFANKLINGHGLMHSASDGHDLDP@HDJANQLUBOBO@ODODM@OLGLDPHNLLVTJHDNHRAPQ@OEMEMAG@KDCPNRLTJLPLRFZGNARCRCLNBL"],"encodeOffsets":[[116269,37627]]}},{"type":"Feature","id":"130425","properties":{"name":"大名县","cp":[115.147814,36.285616],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@FETEJHF@N@@@F@B@TAB@B@BGPG@@RER@F@BBNBJBLDFBB@NH@BLHHFLJDBL@@@B@B@@A@A@@AAA@CAAA@@AA@ABABEBC@@@A@A@ABAB@B@@@B@BD@BDDBBBBB@B@BAFCB@@@B@@A@@@A@@@@AC@BAAFA@@B@@BDA@ABAB@B@@@@C@@@@DA@CA@AAFA@AAEB@AEB@AGA@@@BA@@@@@AC@@AD@@A@EABG@@@CAAAAAAA@C@CAAACAAA@CAAACAAA@A@A@A@ABAB@BALEJAFA@@VCPEPGFIBADCDKBI@O@@@A@@@@@@@@@OBAHIHIFEDALK@CDOEIAAGEEI@CBKLCNFD@HDNHNHDBhHPE@ABACEAC@@B@AG@AA@@AFBAC@AA@@ADAAGDA@@CGA@@CA@@AA@A@B@AEB@@CDAAAB@@AJ@@AF@@CD@B@AC@@@AB@@A@@@A@AD@HAACLAHABDDA@@BADBFDB@D@B@D@B@BA@C@ABA@AB@@@@@@AB@@ABAB@@@B@AEB@@A@@@BB@ACDA@@C@@C@@@AA@@@@@@AA@@B@@AE@@A@B@@A@@AC@CB@@AFA@@D@@AH@@@B@ACD@@C@ABC@EAG@@@E@I@C@A@IBIBC@ABC@C@IAEAGAE@IBA@ABI@ABA@CBCBG@KBCD]IBEBE@EDA@CHADAL@LABKB@@GACAAAAK@K@E@@@EACC@AAE@IBC@E@EACCKMECG@AAEBCB@@E@@DA@@DCA@DBBBBDDB@EBBD@@@B@@@BA@@DCB@DB@@DB@@@C@@@@ACIA@AC@@AGC@@@A@@@BAA@HEAA@@@AB@ACA@AC@@AABC@@C@AECEA@AAG@Q@CAAC@AAGAOAGEKGG@@KGOGEAAAICC@ABC@@@GDA@GAICAAIBKBIDCDEFCH@@EHAB@F@DDHDPBD@JAFEDEBA@KDA@E@GDABEDABEJCBIP@@CHAD@BAJABAHKPEFCHOJ@BSHA@@@MDA@IFEDCBEBI@@A@@CB@AA@BDA@@B@@@B@@@B@@@@F@@BEA@BL@@BKA@@A@@B@@@A@@@B@DEAAAA@@ED@@AA@@A@@@@A@@EC@@EABA@A@@@@CC@AEA@@AA@A@A@@@AAABACG@A@C@AAGAGBMBEDAB@DBD@DEHA@CDA@IDC@G@G@M@@@GBGDGDCDADEBABC@I@GDEHAB@BADEJCF@B@B@J@FALAD@@@BAVAJAL@FCZCLANAVATKNADMJCB@BEBABGHGJILIHQJEDGNEN@B@F@DCBAFCFABC@GAE@@@@F@DABAG@AC@BFABA@MBBHQ@@JB@D@@D@@C@@D@BEDCBEFCJAB@DB@@F@@E@BFNAFDJDBD@HBBBBB@T@H@@CDABD@BD@AI@AT@DBAED@B@LBBFDHBBFBBB@BABB@FBBADBFB@@@BB@BFBBBB@JFLBBPNTFB@FHB@HHJF@BB@HDD@FBPBVCB@B@LIBAJIJCB@REHADANHHKFGFE@A"],"encodeOffsets":[[117932,37342]]}},{"type":"Feature","id":"130427","properties":{"name":"磁县","cp":[114.373946,36.374011],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@SBK@@CAE@EA@E@A@ABABC@CBEBAAA@A@AAA@@AA@@A@@@AB@@A@@A@C@G@C@A@@AA@@@IBE@AB@DEBGDODC@GDAB@BCBABCBGDA@A@CBA@CAAA@AACAA@AECECCA@@CAA@C@CBADELCDCDEDADADBBC@@@A@@@A@A@E@ADC@C@A@@@CIBA@@@CCE@@A@@@@@CE@A@ABA@C@@B@@AAC@AAAAA@A@AA@@A@@@@A@A@@A@@A@ABA@@@@B@@A@A@ABA@@@A@C@C@A@@@A@@BA@A@@@@A@@@@A@@A@@@@@@AAAA@A@@A@A@@@@@A@@@@@AA@@@@@@C@BB@@@BAAA@A@@@@@@@A@@B@@@@AB@@@@@@B@@@@B@@CA@A@@@A@@@@A@@@A@@@BB@@@@@@A@@A@@A@@@BB@B@@B@@@@BB@@@@@BBBB@BA@@BBB@@AB@@BD@@@@A@@@@@@B@@@@A@@@@@B@@B@@@@@@B@@@@BDB@BBF@B@B@BCBABC@CBA@AAA@@@@BBD@@A@@@AA@@@BA@AEAC@@@@@@@B@B@@@@@@A@A@A@CB@@@@@@A@AB@@@@AA@@AB@@@B@@@@AB@@@@@@EB@BA@@A@@AA@@@B@@@B@@@@@@A@@@@@@B@@ABA@CBA@@B@BA@@@A@@B@@@@@BA@@A@@@BA@A@@@AA@@@B@@AA@@@@@@@@@@A@BA@@@@A@@@ABA@@DAB@@A@@@@@BC@@@@A@@@ABA@@A@@@@@@BA@@@@AA@@ABA@@@@A@@BA@@@A@@AB@@@A@@B@B@@A@@@@A@A@@@A@ABAB@@@A@A@@BA@@@@@@A@A@@@@@@A@@A@@@A@@@@@ABABA@@A@@A@@@C@@@A@AACBA@A@A@@A@@@A@@@B@B@@A@A@@@AB@@A@A@A@A@A@@@A@C@@B@@A@@BA@C@AB@A@@@@A@@@@@A@@AB@@@AA@A@@@@@A@@@@A@@AA@A@@BA@@@@@AA@A@@@A@@A@A@@@A@@@@AA@AB@@@@BBA@@@AB@@A@A@A@A@A@C@@@@@A@GBMH@@@@@@A@@B@@@@@@@@@B@@@@@@@B@@A@@@@@@BB@@@A@@B@@A@@B@@@@@B@@@B@B@@@@A@@BCB@@@BA@@BGF@@@@ABAB@@@B@@A@@AA@@@@@A@@BA@@A@@@@@B@@@@@BCB@@@@BB@@@B@@BB@@@@@B@@AB@@@@@B@@A@@@@@AA@@A@@@A@@@@B@@A@@@@BA@@@@@@@B@@@DBB@@@B@B@B@@@B@B@@@B@@@B@B@@@@@@B@@B@@B@@@BA@@B@@A@@@@@@BA@B@@@@BB@@@@@B@@B@@B@@@B@@@@@@BB@@@@@BB@@@@@@B@@@B@@@@A@@B@@@@@BB@@@@@@BB@BBB@@B@@@@BB@@@@@AB@@@@@@ABA@@B@FAD@DABAB@@ABC@C@A@@ACACCAAA@A@ABC@@BC@CAI@E@@@@AA@@A@@A@@@A@@D@B@B@B@BBBBBBBDDBDBD@B@B@D@B@B@B@BADADABABA@CBABA@A@A@C@A@@AEAA@AA@@@CBCAC@AAA@@CAAA@@C@@@AB@@@@A@ABCB@@AB@@@@@BABABABCBCDCBEBIFEBC@C@A@AA@@IDCBKF@@AAA@A@A@A@EBG@C@CAECC@C@EBA@@DABA@CBAACACAAAA@ABCBKDA@CAA@IFA@AAABGCC@A@A@AFBDDDD@F@DDABGBEBADAF@BBBBDDFBBBBB@DB@@DFNDNHJJBHCL@JDLJHLDTLJJHLBN@NHHDBB@B@BBB@B@BBJHHHDPDDDJ@@BBBD@BD@DBBDDHFHHDD@BABAFCDEJCBAFBDAH@BFDBB@HF@@L@FEB@BCJCBD@D@BDB@DBF@BDADBA@D@JB@@@ABAb@\\AR@D@BE@CDA@C@CC@KBEA@@FEDMFMAG@A@IBG@C@U@C@E@IAC@E@G@I@C@E@KBKDKFYFUBEFODKRGDBJDD@HFHDFD@@@BB@BB@@BAJ@@U@GHAHAFCJCBAPGJCJCHCFADANADJHJNDEBCBDDBHDDDDH@@DBFBH@BDFDH@DBL@D@DBF@D@@BB@@BFFTFHBBLHPDDBB@LFDBHJBBDFFAJ@@IB@@AB@@@@@@@B@@@B@@LLB@AFCD@LAFAJ@LCB@NCAC@ABGFEDCJAHAFCBGBGN@H@DBD@DBB@NAH@LA@PBLXCP@EWPCF@FAJAAU@CDApCPG@KA@@CBI@U@ME@@CKBA@AGI@A@@@@ED@B@@M@@B@B@@A@CE@CCAGCMCUG@E@IFCAGC@E@ADUQE@ABIAIE@A@@SCAE@CBCBI@EACEKCA@A@MCEAAABMQA"],"encodeOffsets":[[117090,37126]]}},{"type":"Feature","id":"130428","properties":{"name":"肥乡区","cp":[114.800166,36.548131],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@IB]HDFEJABABCHAFCBBFB@B@BBB@B@@@HH@@HFBBJLBL@@ET@BE@ADI@AH@FC@@B@FB@BJCDMD@@@B@BBHDAD@JDBBD@@@@@F@@DP@DB@DP@L@BB@@@B@@@BDD@B@D@DDJNFDFD@FDDAB@DEAIHAF@HA@GH@J@@@BPDBDJBB@DB@B@@B@BHPLL@FI@@HP@JDJBNDB@VH@@@@@@B@@@@@DBB@@BB@@@@@JD@BJDHBFDD@XL@@B@@FF@BFDBJ@D@D@FBALNBF@D@BBJ@F@JB@@@BBDN@F@HA@@BH@BB@BFJCF@@@@@HBNADADAFC@E@AB@D@@F@BJ@LAFBDAH@JADA@A@GE@@EBCB@@A@C@C@ADEB@B@HANAFDD@D@DAAAJAF@JANDBHJGFAD@AEF@@@DAAE@AHABDD@F@@@H@D@BC@@@@DAB@@@D@@@@BBDD@@B@AAAB@D@D@F@FF@D@@F@FCFABCFED@FAAGBAFALCLCHAJI@G@ABAD@B@EC@A@A@AAACB@@CAECE@E@ACAAAE@@AGCS@AC@I@AA@IDABAAG@EB@@DB@D@BI@CE@AEGCCAAIO@AAAG@@CM@@A@CIKB@@ACGBC@CAAAAEAGKBC@AA@AGBABC@CEA@@@GC@AH@L@BO@ABEGCCECACEEBA@BDABWAGBACAE@KG@@EG@ACCKC@EA@EC@K@ED@B@LEBCF@@@BCBGDG@@CQBCAQEE@KA@DGNOBI@E@E@K@@@KAC@A@E@G@M@@@IAC@I@GAC@G@GAG@A@E@ABCBA@E@@@@FABEDABC@G@K@ECAC@@CAG@CB@B@F@@KBI@C@E@AA@QACEC@@K@GAC@CBABC@C@EA@@G@KBE@@DC@ACK@AAGCCACAG@C@CEAAA@C@IB"],"encodeOffsets":[[117404,37362]]}},{"type":"Feature","id":"130429","properties":{"name":"永年区","cp":[114.543832,36.743966],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@ABABKLCBQDK@G@KD@@A@UDI@EBE@KA@DA@@FC@I@@AA@@A@AAECAA@@CAAEBABE@@AQMECCAE@@B@B@C@AAEACA@A@BFA@A@EBA@@@C@G@@B@BG@@B@@@@@BBPAAA@C@A@Q@@BA@G@K@E@C@G@A@@EAIQ@G@I@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@A@C@IAA@C@G@KAOAGACASCQ@@CACC@E@IAK@@CCAE@EB@DEDIBAAACEJIH@D@FFHDBBBDDBJJPHBFDD@JFFDDFFFDADNDB@B@FEJ@FBJ@DABEDKBCF@DABABA@CBFBBBBDBDBFBDB@FJ@P@B@DBH@@@B@NBJADGLCFQVF@J@\\CFAJAB@BAJCJALAB@BB@F@@@BB@FA@GFBB@BEB@FA@@P@D@BDBBB@D@HAH@JB@FFDF@F@J@@@@E@CDAD@BAL@BEBCDADAB@HAJAHAF@DAB@RCTDFBD@BBLBFDLDFB@@B@B@@@@@DBDBDBJFDF@BAFBDBF@J@F@BC@A@@DBHEB@@F@B@BJCHC@@BAD@DL@@@@@@FDDPA@FTAF@B@@JF@DAF@@CP@F@@CDADBD@FHDDJ@L@B@@AF@D@FF@FPB@GF@R@@BFB@FJ@@DDBH@B@DJB@D@B@DF@HHA@AB@FAF@HAP@D@DBDB@DB@LB@@@@B@BD@BB@CDBFFDF@BD@FF@@JDBHAL@@FBDD@D@BA@EFC@@H@@ABGD@@@LADA@CF@F@@E@@JDCKAAA@AADM@@@CDAD@BC@IBG@CEGACKGOC@@QAA@KAA@C@OCA@EGCCACL@@EBCRARAB@@ABCJ@@EJ@@IEB@E@AAI@@B@FMFGLENIFM@M@KDMBINOLAHAB@RAXAX@F@LALCD@PED@JAFABAFCDC@ADAB@FBHAFAAIB@F@@E@A@@@@@@@CAAACE@@@CAAA@AB@@A@EBAAE@AA@AA@C@@A@ABA@A@AA@A@AA@AB@E@@@@@EHA@@@WAAAAE@CM@@EC@CB@@C@@@@@@D@@GBCBCH@@BB@@C@G@EA@I@E@ECGCAAAECEF@AEA@C@AEFCAEA@@AAG@@GBE@M@AC@A@@IAE@I@AAC@E@AJAHBHBHBL@LKNIBMBWDOBABE@CEAC@@CIAKFGCASKKEECKACEAAA@AAEBC@EB@@I@CBBHBD@@BB@BBB@DKTCFEFMB@@I@@LMHGFM@UBC@@@U@OBFQG"],"encodeOffsets":[[117356,37592]]}},{"type":"Feature","id":"130430","properties":{"name":"邱县","cp":[115.200589,36.811148],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@FE@CAGCEAACAA@A@EBODCBBFIBABBDEBBDABEBEBBDCBACC@@F@@A@A@@CE@C@ACACCBU@MGA@KGECAAGK@A@ABGBS@A@A@@@@AMAAGGACQCBLDLKBEJCDCDADMD@FBHQBE@KHCFCHADAH@@CN@BA@@@INIFOBW@A@G@I@G@C@I@CL@B@@@BAHBP@B@@@@@H@F@JAP@FAJAN@@GHOBOFAECF@DCBC@BH@B@D@B@BABCF@@@D@F@DBH@BM@@@@DAC@@@@@@GA@@@@@@GBDHHBHHJ@BBBDD@B@@L@FABABCBMBGDEDADAH@@AD@N@B@BAE@@@B@L@BFA@LBBB@TA@@JCTA@BADADH@BJF@BF@@G@CD@BB@@DGDEBI@A@AAE@CAC@I@CBCDCDG@CB@@@HEDEB@BGBA@R@@BC@BDEAA@@CABCAEDABAFADBB@JB@B@BJBBDDHDBBB@BNA@AB@@BDDDDFBBBB@@FFLABJBBF@@BBA@FL@@J@L@@@F@BDLBF@@DFBDB@BF@@D@@BD@@C@CD@B@@FD@DEDCBEDADADIDKBCE@CACAQCGE@ABGJODCJGNIB@JEJCHAFAB@NBH@D@@@FDDBJA@I@EFA@ABK@IH@@AAAIGCWA@I@CAACA@@GBCBEDAFAD@J@JBB@BFDDDBDDFBFDNHJFRBFCJCVBLBRA@AL@J@F@B@L@B@BATCR@B@LDDBPFNBNBZAOU@AGIACAA@ACEAGA@AEAC@OFMBCXI@E@I@K@AHI@ADIEIICPGHE@KMOIGEECG@CBQBAHQBGDK@KIG@@A@CIEAGBCAC@@CQDAEE@@AAAJABACO@ADE@AFCBALAFE"],"encodeOffsets":[[118079,37561]]}},{"type":"Feature","id":"130432","properties":{"name":"广平县","cp":[114.948606,36.483484],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@IBC@UAQFCRBF@DBFHRBHBNBJBHEH@J@F@@@DLBF@RFDBRA@DH@HCDA@A@@DEFA@K@AFCL@D@@FFBD@DLBDH@@FH@@LBFBDHAXBBAACB@FADFDBDFHDAF@BAPK@G@@BHD@@B@DFD@BAHA@BBBD@LABHBFBBDBD@HABD@@LADJB@@@DN@@BHBBP@BJDBHDBFF@@DAJC@A@@CA@@FBHABCB@JBBJ@D@@BDTBH@@BFBBBDF@F@FDDB@@DABB@B@B@BFDB@J@@ET@BGD@@EF@@C@@@A@AB@F@@BB@D@DAB@@AD@AEFAF@@DDBHAA@DADFFA@B@BFADAF@@A@ABBDB@A@A@ABALA@@BFDL@F@DL@LA@CD@B@TCBHHABHD@DADT@B@BBDB@F@D@F@@DB@@C@@DA@@LCAEAED@ACC@AEECI@CB@@@@EC@ABADACIAAEBG@A@AIJEB@HBD@@EFCJAB@@@VC@@BFF@DA@AFCJADAAECEEC@@AAAG@MAM@CBACKAAABAA@@FA@AK@C@AA@A@@A@G@@K@@A@I@G@O@@@QICCECACECGWAECSA@A@UDOAEAC@GCA@@AIEGGA@EGA@SEOMAAEK@IAAAAAEA@@A@@EACAABEAA@BA@AAAEAAACGAEKAA@C@BFCAS@@BBJC@@AACCB@DG@S@A@AAAA@GACICECMBAE@@@FABABC@EFAAG@IABAACACAA@@GCEAC@GBDBEFEBEAEA@AC@AA@KCGG@AECB@DKB@BM@CACAAOBAD@AEDADBBBAEF@D@B@AG@ACSF@BAEAG@EEAC@IGEEA@AD@GCEEIAKBGABHC@@AA@C@@BA@CBE@@FE@@HSB@DE@CEEDA@CAACCAGBAIC@IDABBDAB@@C@@BAD@BBDCBA@JLHDJFNBRB@@P@RFPFJHBDDFFNGDMH"],"encodeOffsets":[[117639,37304]]}},{"type":"Feature","id":"130431","properties":{"name":"鸡泽县","cp":[114.889376,36.91034],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@B@B@DADAB@BEB@B@D@@C@AC@AAAI@@CEACCACAEAEAA@EBC@G@A@AA@BA@@BAB@@@A@AAB@B@@C@@BAHACC@C@CBAAA@@@@@@@A@A@A@@@@@AB@@@@@@@@A@A@@@A@C@CBA@@F@BA@@BBBDB@@F@BDBB@D@@@@@@@B@FE@A@BJEBGBEAA@CB@BCDEDABEBIBC@OFC@KDKBE@W@WBQBA@GBKBMPAJCN@L@NENMJKFEHENA@@@BJ@B@FFA@JI@@FI@AD@BA@QBQBAD@FK@BDDDFHB@PDD@B@LBB@RB@@PDLHBDFH@DAH@JADC@CB@D@@CNBBB@BBDLDBD@DABBD@BAHIHILGBBDBN@HBBBBJ@@BD@@@@F@BH@BJAD@@@BBDJ@BNNLJDBLF@BCN@BDBJ@@DD@B@BB@D@BDBTCFB@DBBFBJ@@EDAF@BAD@L@DA@DDDDBD@NGB@H@H@HCHAFAB@@CA@AEAC@AB@LA@@@@@DD@@@RCPC@@@AACNAB@BDDAB@BDB@B@B@JB@FB@F@DABA@AF@BOB@D@BCBI@AAG@A@EACGCAE@ADA@EI@AGBAD@@@AI@CFCFB@AAG@A@C@AEBAGB@@@BCCCKBA@IBEE@GEFAEAGBAD@CGA@AE@EFCNE@@CME@AOE@@O@@FA@@BEAECG@AEBACC@A@@EBEFGDGDCIAKCEGCEEMAACIABKDGEAG@@@ACO@C@@CM@AB@@C"],"encodeOffsets":[[117674,37648]]}},{"type":"Feature","id":"130433","properties":{"name":"馆陶县","cp":[115.282467,36.547556],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@Q@QF@@OHAHA@A@SBA@E@@@M@E@IGSFEF@BEFEHGLMGCBGBQFA@IDIJABKJDTBFHXFDBDFDDDRJ@@P@H@J@B@@@@LH@B@@@@BBBD@L@@BEB@@BBBABBDLAB@DBN@NBHBB@@FDDFBFCB@@BFRABFBDBDBBFDDNBBBFBDJDHDNJANAL_JAB@D@LD@@AB@D@NCPCRDBDHHBBBN@@@@@B@BATAH@B@BHLBBFDLHB@NHV@DABDBDD@F@@DB@B@@@@ED@BDDAACFAFABAACFAACBAJAAEDAPCFAB@B@DBBBDFBH@DEFEFKBABED@BCF@BDPABIBBB@BF@BFRC@DD@DBHAFBDJB@@@JH@LCLAHGRABAR@DDHFFJHNP@LFABDFDLADFBFBDB@D@BABCDGH@BCACFE@CF@B@JAACJ@JCD@RED@H@@@P@JDBFVCD@FG@ABGLDPBJC@EdEBFBBBAF@B@D@B@@@D@DAB@BA@AAA@@@AACAEAAAC@@ACCC@@CC@@AAAAA@C@ABAA@@AA@@ACBA@@@@DABAB@@AB@AA@@@AC@C@C@@@AAACAAACD@DA@@BAAACCAA@@A@A@A@AAA@A@@@AA@@@C@A@E@ADA@@BAAA@@@@CAA@E@A@@A@@AA@ABCBABAAAAA@@@@A@BC@AC@@@@@A@AFCAC@A@@@@@A@ACCAAAC@A@A@EAC@C@@@@A@A@C@CA@@AAAC@AACAAACAAC@A@A@A@A@A@A@AAA@AAAA@EAA@@@A@EAA@CAA@EA@@C@AACC@@A@@A@A@@BC@ABA@@@A@A@@@C@@@AAAGEAC@@CIACA@AAAACCCAAAAAACCAAAAAABGB@BC@EFA@@E@AACAAACEECCCAAABAHEDAA@AAA@GACAAA@@AC@C@C@A@AJ@L@@C@CAAIBCGKDACAEAC@A@ABC@EAC@C@@AGCG@C@E@C@C@A@A@C@AAA@AAACCAAAAAA@@AA@@AACACCEAAACAAAAA@AAAACAAA@AAA@C@A@AAA@@B@B@@@D@B@B@BA@ABA@C@@@CAAACCCA@@AABAB@@A@@@AAALAB@@@A@ACAA@AAA@CBA@ABABA@ABAB@@A@A@A@ACEAC@@AAAA@@CCGB@DA@AA@@@AA@AEQD@AAG@@@AA@BA@@B@@E@@@BF@@A@@@AF@F@D@@A@@@C@A@AAC@A@A@AB@@@BAD@CAKIGEKG@AMGA@EAKCIAMAAAE@"],"encodeOffsets":[[118003,37328]]}},{"type":"Feature","id":"130434","properties":{"name":"魏县","cp":[114.93892,36.359868],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@A@CAA@@@C@ABA@AB@@A@@B@BFPDR@BDJBHBDDLBF@B@B@DCLCHGDABGD@@CFAFABEF@@BDA@B@A@BF@BDJ@@BDBHBJD@@@CB@@IB@AK@GA@@GBA@BFB@@@@@@@A@@DA@AAA@@@AB@AMB@AAAA@C@@JA@@@ABAEA@@@MBACE@BAA@C@A@E@@CA@AIB@AAD@AQA@@@M@@B@@@@G@@B@BA@@BG@@CA@@@A@@BEB@AAACBC@AEA@C@@ECBACA@GB@BGBABE@C@@@A@@DA@E@BBEB@DAB@AA@@CK@@CEBC@BDE@A@@BA@G@@@G@AIA@I@AGKBA@@@BLEBBFKB@BABIB@@@@BBA@BBC@@BDDCBBDC@@BCBBDA@@BBDHFD@B@JCDDAJ@B@HHA@AAALAHD@@DHBBC@EDCHADAB@B@JBFBBBFBLCHAB@BCFAD@BABGH@@ADCAAAAAKIAA@@C@BBBH@BEB@@B@B@B@BL@B@@B@BFB@@HBFC@@B@D@@@D@@GJGJAD@DCL@L@FDN@@@@@DBDDHFRFLH@LAB@DP@@@@BDBFHA@@F@D@DBFBHFJJBB@DBJ@@J@DJL@BFDLDDBBJJJJDH@BDDA@@BDBBH@@GBBB@HB@B@DNF@BB@F@BBDCBBD@@D@BAACBAJCD@BJHADBBDDBB@FCDFF@@CTA@GF@@EF@DAB@@AD@B@@BD@AGHBLAJBFFHDC@@BFBHF@JBDFFH@FBABE@DT@BBHA@C@E@BFAACACBBFC@ABBPDBDBN@@ALA@CDABFH@DH@LBBD@@BFBFBFAFECAHAD@FBHD@@BBBDBDABJBH@BBFED@BABA@E@@F@@@@EA@@CBADIFEDAFC@A@CD@@@@CC@A@@IR@AGNAB@BAAED@@BBHBA@C@E@@F@HBD@BADEBEDA@C@E@AFMHMFCRIJGJKHIHGBAFA@ADANIBCLMBSBUBMDKDY@EBKBIBU@A@@BCBK@E@I@A@ADEFIBC@ABAFGHCJ@D@BAFABCDCHCHCICGCEECGCI@AAEAM@AAQAC@@CAG@]HCBYFG@C@AAEEECAEIICCACAE@EBGBC@E@EACCKAIAA@E@GDIBAAC@A@A@@@A@AA@ECCACCEECAGGGGGGAAKIAAECCEECCCCCGG@@CACACAA@AAA@A@C@G@C@ABA@A@A@C@CBA@A@@B@@ABA@AB@@A@AAA@A@AAA@AAE@A@C@A@A@AAACACA@A@A@@@C@A@C@AAACAAAAA@CAA@AAAA@C@A@AAAAAC@E@A@"],"encodeOffsets":[[117684,36915]]}},{"type":"Feature","id":"130435","properties":{"name":"曲周县","cp":[114.957504,36.76607],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@FILACKAKODMDC@A@@BC@@K@CBA`IBKBMMIGCICACAEAACMECAAACACAEQBAE@@IBED@BCBE@AE@@UD@@A@IBED@FC@GAA@IFBJB@H@FABBDJCBAB@BFD@@@@DAJ@FDBFD@BDC@BFBFKD@@CB@@@DA@@CE@C@E@A@AC@A@ACSCBC@AGGBAGSDA@C@@DKBK@@C@ECKAE@@KBAB@B@B@BCAAA@B@BE@CBEB@A@AEBCECBB@GBCA@CE@EBBFC@@BA@CBC@A@@AE@A@@B@B@@@DE@@FC@AHS@@FI@A@A@C@AB@B@HIJGBKDKDEBABBHEBC@EFADEBEDE@@@@CEEE@C@C@A@BB@B@AC@AC@A@@C@@@A@CB@@@@ADC@G@@@E@C@ACGB@BBFCB@@E@BFC@EBIHAGMCIBE@IBBBCBC@C@ECMBGBA@A@CF@B@D@D@BA@AD@FF@@H@BCBIBG@CBEAKBI@@A@EC@A@@B@FEDCBCBMBGA@@@@E@IDEDBFD@B@BFE@DFBFBBHDFDF@J@B@@F@H@DA@@AG@ADAD@HC@@@@@@@@DA@@DFD@@DNF@BBBB@X@@GB@F@@@@@FBAB@@B@BBBB@B@BAB@@@@DBBB@@BBFABB@DAD@B@@@B@B@@@@@@@@@BA@@@@B@B@B@@@@@@@B@BBDAD@D@BDBG@AD@@@@ABA@B@B@@BA@AB@@ABBB@H@D@FAB@FBFBDBDBBDDF@@BJBBD@@B@DC@A@A@AFA@CBCBA@A@@DA@@BDN@@@DDP@B@@BHHFLCBADJBBFNDFFHLDJBCDCHEHAF@FB@D@BDFA@BDHBFAF@@EB@@@PF@BPF@DN@@MFED@FBFB@DHC@ABBHBFFE@HFFJAB@LADDAD@@A@BHFA@B@D@BBH@BEAED@DBJ@@C@ABBHJ@@FCB@BBFHDBD@F@BBH@BAJADC@A@APF@L@DBHA@HDB@ABA@@@@@AB@@@@D@BBBB@B@HB@ABAJCDBHDB@DBHDNDDDD@J@@@DCJ@F@DAD@BAB@JAB@B@LCJBVBB@LBD@FBTHB@B@AABCHCB@@AAEA@ACCE@@AECK@A@E@@@K@IK@@EAB@AE@AAAIKBEE@@AAAACECCAC@@BAB@AMA@AAGCCCAAAIA@A@@IAABCBEBAFCDBBA@DB@FBACD@@AQ@B@HA@AFAFC@G@@DAH@DCDCDAJ@D@DBF@BBB@J@FAHC@CA@@ADCH@@@AEE@AIG@BCBC@ASBID@@SBA@AA@KEB@A@K@A@@BF@A@A@MBC@@BGBCFCHCNADABABA@E@KA@C@ACAAI@GGGACGHA@@@@@@HB@@@@@@BD@C@@N@@AAG@C@E@C@@DEBA@A@A@C@AAGD@DA@CDEBFPEPAHG@@BMBI@EBO@I@E@G@@@@@AAOBG@A@@@ADKJ@D@H@J@H@B@X@PAJEJM@@B@@ADM@@BGBCDGDELGF@RAAG@ENCBCDCDC"],"encodeOffsets":[[117980,37530]]}},{"type":"Feature","id":"130481","properties":{"name":"武安市","cp":[114.203697,36.696506],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@CCA@A@CACIDADA@EFK@@@GEA@CAAEG@CBEAABIDCFEDABABC@GCEGCGACCAC@@AACAA@@CICCE@E@ABGDGDGD@@IFA@IDA@ABMHEPGRAB@DAFCP@D@BA@AN@@OHO@A@CAGECEAC@AAC@@@@@AAA@@@AAKMOCE@AAAEEGBKL@BAD@R@FBJ@@BFBJDTBDDJDP@BBL@DEH@@MDOJAB@@@@AFCDADBJFH@BJLDFBBBDDDBD@@BL@NJJHBHLLX@PAH@DGJAJHHJJBBBHAJAD@BELKNMJMPGLCFCPADOPFHADCJGJ@BEBIDU@EB@@KBQDODEBABWDOCGAEAIAMDCN@BDPFL@JCNEV@HAHCBAD@@@F@D@DABEHADCBGDIF@BDLBBBB@@NBB@HI@GF@DLIJBHBDJAFCH@DBB@FFDDFPALANCJCFEHIPCHBJJH@D@HCBECEAEBGH@BAFEPIRDJPHNFBLBB@BBBDHRNBBFLTPPHRFNFRBH@D@PBRBJAP@JANCJGHIBCNG`INCZGLEBCFMLGDANIBALEBAJIHGFEJK@EBEDGDOBSFEJIDILGFEFCLEHGFEFCXCF@@@H@V@B@L@TEHEDABE@@JIFAF@BAAACA@ACAAC@A@C@EEEA@CA@@BCH@JBDA@@BALEBA@AH@FBF@B@FD@BDBBARCFAF@HBD@JAJ@B@R@LBPBJBH@HBB@@@JDF@BCD@P@@@F@D@B@\\AD@B@BBD@JBJDBFDDHANJBBL@LBJAHCJGFCLID@H@HBB@F@@BBHFL@BDFD@BAB@@A@A@@BA@ADAFAH@@@B@@@B@@@FA@EDBBA@BF@FADCB@JD@@BBF@NDB@B@@@LARUDEHKBCAI@M@A@@AG@C@A@OEIA@ACAEACACAAEADAB@BABA@CDELAFCBA@CAI@EFI@E@ACACMCBEECEECIEC@ECGAIOAICCAACDKBCCACCCGACB@A@@A@BE@ABCAK@KAAAEAA@A@AAA@CBABC@KAACBACBCBA@EBCBCACEICIAEAAAAA@@@@@IBAAGIACACAAB@BALA@AAGACAEACA@AGAACB@@AB@@A@A@A@A@@A@@A@@@@A@A@A@@@AB@A@BAA@@@@@@AC@@@@@C@@@AAA@EDQBCA@A@A@@BK@ADGBCJAHA@@FCHCF@BGGCBEBAD@BB@EEAIEE@BCDCGCEA@AAABCDIFE@QBCCACBG@CCBCS@E@@C@GCAAACCCD@D@FCBBF@BMB@@@DCB@FA@A@EBE@A@GB@@@CGBAAGG@@CME@I@C@EBKCUGSAGB@@MBIBOFIFABC@GBGAAAG@CBABBJ@FBFAFEDC@E@CHCDAECAEBAEAC@@@@A@AGAA@@AABE@AC@E@O@CBADAB@BBF@D@@@@@BCBABABCBGBOAAAAACKBIBEAA@EBA@CLG@ECGACEAIBECAACAG@CG@A@ECAA@A@AAA@A@C@@AA@A@@@AADA@CAAECEEBCB@CACB@AAE"],"encodeOffsets":[[116788,37383]]}}],"UTF8Encoding":true});}));