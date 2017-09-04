(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('商丘市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"411403","properties":{"name":"睢阳区","cp":[115.653301,34.388389],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@@BC@ABA@@@A@ACIECACAG@C@C@KBMF@@GDMHA@CAIGEAEAECC@CA@CAAAAEAAAGA@@AB@FCBEBC@A@EAE@IBA@A@C@CAGEGGEACAEBEBCFA@C@EAEDABA@AB@@B@@H@@@BA@@BE@@DB@@B@@BBADBDA@AB@B@@@B@@E@@FG@AD@BAB@@G@@@@B@@C@A@@AOABGEA@AC@@@@BA@A@E@@J@@C@@@I@@CG@@@A@@AA@@@AB@B@@@@ABC@ABA@@@AB@BBD@@I@@GD@AE@@A@@EE@C@A@@B@BI@A@@BGB@B@BA@EB@BA@AB@CE@@BKB@@@@@BE@@CC@@@C@@GC@@AE@@AC@AB@@@FF@@@@@E@@B@@@B@@ABA@@@@BA@@BA@@FB@@B@@B@@BB@@FAB@H@B@B@@@DE@BFE@@B@@@BC@AAAB@AA@@@@D@B@B@BD@@BBA@@@D@@B@@B@B@@@@A@@D@@@B@@@B@B@@A@@AA@@BA@EHC@@@E@@AA@@DA@@FD@@@@BB@@DD@@BD@@D@@EB@AA@@@E@BDA@@@@D@@@D@@@@BF@@@@@@@DA@@L@BA@@F@@A@AAA@@BA@C@@DA@C@@A@@E@A@CBBCC@@@C@@@A@EA@CC@@@AAC@@AD@@E@@AC@AAB@AAA@@@A@@@CA@C@A@C@@@C@@D@@A@ABAA@@@B@@@@AB@@@LD@@@@@@DC@@BC@@B@@@@@DC@BFA@@CA@@BC@@A@FE@BBA@@AA@@D@@@@E@BBB@@@@@@@AB@BB@@DB@BDF@@B@FD@BBBBBB@B@DH@@BA@@@@BGBABA@CB@@@@E@@AA@@@@DC@@F@B@B@BBD@@D@@@@BB@@B@D@@AAA@@BE@@BB@@BAB@BAB@CA@CB@@@BKB@@ACA@@@@@@DCB@DA@@D@@CBC@@FEBBDC@@@@@@@CB@B@@C@@CA@@B@@A@A@@AB@@@C@@CC@@@C@@@BF@@C@AAA@A@@@AB@BDDB@@DA@AA@@AAA@@@CD@AAAEB@ACBACA@@@ACACA@AE@@@CEB@AC@@@BDA@@BA@BDA@@AE@BDC@BDA@@BC@@@@AA@@@@BA@@C@@@@C@@B@@D@@B@@@FB@DH@A@BAB@DEBC@AAIDCG@@BFA@BBMDA@@CA@@BI@@@@C@@AAAA@@A@A@AB@AUA@@C@@@A@@@A@@D@@@B@@@JAB@@A@G@AB@@IE@@@@A@A@@@@BG@@@@TABAA@@A@@@ABABA@@@@D@B@@ABADBB@JB@@@B@@HB@@B@@BH@@@F@@D@@@BA@@@BDA@DB@@BB@@BB@BFC@@DEBBFB@@HD@@BC@@F@@BB@@BDA@@BB@@A@@@@BBB@@BB@BB@@@B@@@B@@@@@@@B@@B@@@@A@@@AB@@D@@@C@@D@@A@AD@@@B@@BB@BFEB@DA@@@@@BF@B@@CD@@H@@D@@@C@@@LA@BD@@B@ED@B@BAA@FA@@B@DA@BH@D@BA@@@@@@BA@@BE@@BB@@@@DB@@J@@CD@@@AC@@DAJ@@@JB@@@D@@B@F@@B@DCD@BABDA@BF@@DFA@BBA@@@B@FA@@D@@@HABDF@D@@B@@F@AALA@@@@B@@AB@@AB@B@BCLA@@BDB@@BB@@@@LA@BHB@BDC@@B@@BHBD@BFAB@DAB@D@HDD@BBDBBBDBBDBBDBDDBBB@@@@@B@B@FADAB@BBBBD@BBB@H@BADABCDADADADAD@BABB@@BBBBBBBBB@@@AGBCL@PCF@D@FDB@BB@BHCB@DK@@B@@@HCB@@@RJB@FCFEBA@CBA@@BEBCBCFCFCBA@@@@BB@FBBDDBDDBDBDBDB@@NAJB@@BBBBBDADA@A@A@@@ABA@C@ABB@@B@BABA@CBAB@@@DDFFDBBBBLA@B@@DD@B@BD@FDDHDDBD@BB@LFB@B@B@B@DADAB@B@BB@@BDAH@B@BCHAB@B@@@@B@PBN@BF@@TBH@B@F@DCB@@CN@D@F@H@@@B@JAB@B@@@DAF@B@F@@@L@@@@AFB@A@AA@C@@CHBB@D@HBFBD@HB@@B@@@@A@C@A@A@A@A@@@@A@@@@AF@BME@BCM@OAA@@@BGDB@E@A@BBC@ALA@A@@L@ACB@@@@@@AB@@@@CPD@ACA@A@C@A@@BCFC@AFEBC@@@@@AECCA@AA@@A@@BCDC@@BAJABAB@@@@ACACA@@@@@EE@CAAK@IEGHABA@@LCBA@AA@CC@CA@AA@A@@AAAA@AAC@A@AABGQAAAB@@AA@@@@@AA@@CB@@AF@AAB@@@@@FA@ADC@AF@BA@AB@AAB@@BB@DA@@B@BBB@@ADAAEHA@@@AAAD@CG@@@GA@@AA@AEFA@@@AF@D@@C@@@@B@@CA@@EA@BFA@@CC@@DA@@EF@@CB@@AAC@@@A@AA@@BA@AA@CCBC@@CB@@@@@@CF@AIA@@@A@E@@DA@AAAC@E@A@AD@D@ACFAACB@ACB@B@ACA@@CA@@A@@@@AAE@B@BCDCB@BA@@C@@EE@@@@A@E@@C@AI@ACB@A@A@@@@B@ACD@B@B@@AAAB@ACB@@@@@BBB@@A@A@@B@BAAAD@AA@AF@B@BAD@DAB@D@@AA@@@@A@@AAD@BB@@@@AEB@BDB@ACB@A@FA@BB@BA@ABACID@@BD@@AB@@CD@@A@@BAA@@A@@D@BCAEB@AGB@@A@@DAB@@@BGH@@BB@@AD@@BB@AAB@@BB@BABCH@@E@@A@A@@@@CC@@CA@@D@@@C@AAB@CC@@AB@@ABA@A@A@@@@AC@@EB@@@A@@EA@DA@@C@@B@@EC@@BAA@CB@@E@@BA@BD@@BB@D@DA@DD@@AD@BD@BBABCBABABA@AAA@AAA@AA@ACB@@A@@B@@A@@@@@ABAB@BAF@BA@@B@F@@CB@B@@AB@@A@A@@@AB@D@@DJ@AFD@@@BGD@@@@@B@@C@@AABCEA@AA@@C@A@@@@@AC@BEBA@AB@DI@A@A@EEB@AEB@AA@@@HA@A@AD@@A@C@AAE@@@ABADA@A@@@A@@@GB@BB@BBABABABABCBA@A@@B@@@BABCBA@ABAB@@E@@AAC@"],"encodeOffsets":[[118561,34890]]}},{"type":"Feature","id":"411421","properties":{"name":"民权县","cp":[115.173971,34.648191],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@ABAE@@C@@CC@C@A@K@@C@@IDBD@BA@BDDBA@BDC@@FC@@B@@GB@A@@OBA@BF@@BD@D@@@BA@@BC@@AA@@BA@@BC@@@IBC@BDA@@BDA@DC@@@@DA@A@@@A@@@A@@DA@@DA@@CE@@BA@@@@D@@@EA@@BA@AA@@@D@@AA@@@@C@@@C@@@@@A@A@@AC@@DC@@EA@@EIBA@@AAB@CC@@DA@@BCB@@D@@@A@@D@@@CA@@DC@@@@BC@@BC@@D@@EB@CC@@EA@@@@EA@@GC@@@@@BAA@AA@@@BA@@AC@@A@C@@@@@CA@@@@EE@@AC@@AC@A@A@@AI@@@AB@@G@@@IB@@A@A@ABB@EB@@CBBF@FA@@@@DB@BDC@ABBBABBBA@@AKB@@ABA@AA@@@BB@@BA@@A@@AAABCECB@@A@AA@@A@@AA@A@@@A@K@@@E@@BA@C@@@A@E@@A@@@BC@@BE@@BE@@BA@A@@@@@C@@AEBAGK@@BA@@C@@@@@DC@@FAA@DC@@DC@@B@@@BB@@F@B@D@@I@@FA@@BA@@BD@@@C@A@@@@CA@I@@AMB@@E@@CC@@D@@@CC@BB@D@@@B@B@DD@@HB@@@BB@@@@@B@@@HA@A@@BE@@AC@@BA@@@@@@@@B@D@HAJ@DAH@B@DAD@H@D@B@B@DCF@B@@@@@@@B@B@F@B@BAB@@@@DJ@@BLBD@@I@@DA@AFEBG@@H@@@AB@@D@@@AB@@BB@@DB@@DD@@BB@@B@@@BDA@BC@@@B@@B@@@AB@@DB@@DB@@EB@@F@@B@@@AEB@@FB@AED@@D@F@@BC@A@A@@@D@@@BD@@B@BB@@D@@@FB@@DB@@BB@B@B@@@@@@CB@AG@@B@@@B@@A@AB@D@@B@@B@B@B@B@B@B@@A@AB@@@@@D@@@J@@E@@@A@AB@@@@BF@@D@BB@@C@B@@@FBH@F@B@B@B@B@@@@C@@@@@A@@@B@@B@BA@@@@@C@@@@BB@@@@HA@@B@@@BE@@B@BA@I@@@@@@C@@ADA@@A@@@BA@@@IB@@@B@BA@@AA@@@@@@@A@@@A@@@A@@D@@AAAFI@@A@@@@A@@@@@@B@@@FC@BBA@WBOBA@@E@G@E@GAA@@@@E@@AA@I@AAA@@B@@@AA@@B@@@A@AA@@B@@@AC@C@@D@@@AC@@DA@@D@@ABBJ@@@@A@AB@@@@D@@@A@C@BB@@B@BDB@@@@@IBBBB@@@H@@BE@@BFA@BE@@@B@@@BBAB@@@@A@@@@BD@@@AB@@B@@@@D@B@B@@C@A@@@B@@@@@A@A@@DB@@BA@A@@@@@@@AAC@@@A@A@A@@B@@@AAA@@A@@@C@@@A@@BA@@A@@@@A@@A@@CA@@@D@@A@@BA@@B@B@B@@D@@@B@@BH@BFC@@B@@@BB@@B@F@B@@F@@B@BB@B@@BD@B@@@@@@@@A@A@A@@@@@@@BE@@A@@B@BAB@@@@@@A@CB@@F@D@B@@BH@B@@D@@@@@D@@@B@B@@@H@D@@@@FB@@F@@M@@@@BC@@DA@@HA@@BC@@BC@@@@B@B@@@@@@@@C@@A@@@@@@C@@BA@@AD@@AE@@@B@@AA@@BA@@AA@@BA@@AA@BBA@@@@CA@@CC@@AC@@BC@A@BB@B@@@@A@BB@@@B@B@F@BC@@@@@@@@BA@@DC@@@E@@BA@@D@BB@@B@DH@@D@@@@@B@@@BA@@@BBA@@@JB@CB@@@@@@@B@@@B@B@@@DA@@@JB@@@@@BAAAB@@@@@@@B@@B@@J@@@@CF@@BB@DC@AB@@@@B@@B@B@BBF@@@F@@@BB@DA@BB@@BF@DDA@DD@H@ADB@@AH@LA@@BB@DBBBA@EJ@@A@E@@@A@CB@@C@CAA@E@@D@@C@@BB@A@AB@BA@A@@B@B@@@B@@@@AB@D@@AB@@@H@@BH@@A@@BAB@B@@@B@@AB@D@BG@ADC@@B@B@D@D@@@@BB@@@B@D@@BD@JAF@F@F@@@@BBBBLDA@@B@@@B@@BD@@@B@F@F@@@@BB@@B@B@@B@@@B@@@B@B@F@B@D@@@B@F@@BB@@@@EBBBAH@@@A@BB@@@A@@@@BA@BB@@A@@B@@B@@@BBB@@A@B@A@BNB@@BB@DAACAI@@@C@@BDBA@A@AB@@DH@@@B@@A@@@@BBB@B@EB@@FABB@BBB@BB@@H@F@BB@@D@@@DD@B@@@B@@BD@@B@@@CD@@EB@@@@FD@@BB@D@@BB@@D@@B@@C@@@BB@AAB@@B@@@ABA@@B@BAB@@@@BB@ACBAB@@C@@B@@BB@@D@@BABBDB@@@BB@H@FB@C@CLE@@D@JBB@@A@@D@@@@CF@F@@HH@BDD@N@B@T@L@F@@CBBB@B@@BJ@@DB@@@DBJA@@@B@DH@BPBJBAB@@@@DBA@CD@@F@A@CH@@@@B@B@AB@@DJAB@@BFAB@@CB@@@B@@DB@H@D@ACFA@@AGD@@I@@@@@@DABAD@BFBABBB@DA@DF@@@@AB@@@@AB@HB@H@@@AA@@@@B@D@B@BD@BHB@B@H@@@BBBFBHB@ABBBB@H@B@@AB@@@@@D@B@D@@A@@BB@@@@@CBAAE@@@@@AD@@B@@BB@B@@@AB@@BB@@@@A@C@@@@@@BD@@BB@B@@@B@@@BB@BA@B@@C@BDB@@@@BB@@A@@B@BB@@B@BBEBC@@@D@@B@B@@@@N@@A@@@BHARAVC@@LA@AB@@@B@@CF@@@D@B@BBB@@B@B@FB@@@@@D@@@D@@DE@@BA@CB@@BBA@@@BB@@@@@@AA@DA@@B@@AAGBBD@@@BB@BD@@@EBB@B@@BC@@B@@BBABBBA@BB@@@@@AA@@DB@@DA@@@CB@@BB@BDB@@C@@BB@@@D@@@BB@BB@@BFD@@B@B@DC@@@D@@DA@AAA@@@@@ABHB@@DDBB@DE@@B@@BBCB@@@@GFEPFD@@DDFFFDB@F@HBHAFAHA@@H@NFFDFDHBHBB@DAB@FAFAFEHC@@FCH@DA@APCFAHCDCJI@@DADAFAPADCDCHAHBFDH@H@HAFCHCHADCAGDCFCDEEC@EFCF@B@F@HADEBA@CBC@CDCDE@GB@@C@E@CBE@CBA@CBEBCDE@C@ABCBABEBE@CAC@AACACACEEAEACAA@EA@@CAC@ADEBCDCFEBEBABABEBE@A@C@@@E@@@EAC@@AC@EAA@E@C@E@CBE@ABCDE@ABA@@BERQBEBEBI@M@ADAAG@C@AAC@@D@DID@BIE@@CEAA@A@BCM@MAE@@BC@@C@@@AA@@C@AA@A@@@@@DAC@@ECA@@@@EA@BM@@CA@@@@CA@Q@@@@E@G@@IBAGFA@AD@AAEB@@@@C@@BCBBB@@@@DNE@@@@@@@@DMB@BA@BF@BG@AA@AAA@@AA@@EB@@IB@AACE@@B@@A@@@AB@B@@A@A@A@@@BDA@AC@@@@A@C@@BA@AB@AA@@@A@@B@@@@A@@AA@@CA@@A@BGFA@B@EB@BA@@BE@AA@@AAA@BFA@ACA@AB@CE@@BE@BFC@@@BDGB@@@@@BA@@@@@A@@ACB@BA@@@C@@@CBAAA@@EAB@@@BAADCA@@@A@@@@CE@@B@CE@AA@E@@E@AAGB@AKB@@BBEBC@@@AAACABDDABACABGA@BI@@CA@@AA@A@@DA@ABACMD@AA@@BC@AAE@A@BDA@@CAB@DA@@FC@BDC@BDEB@@A@AACB@@@B@@EB@@A@@BA@G@@AC@BAA@@BA@@DA@@CA@C@@AE@@BA@@CC@GB@BE@A@@CC@@@C@BFA@@BC@@@AD@@@B@@@B@@@@E@@D@@A@@CCA@CA@AAD@CGCB@A@@@A@@@@@AA@A@A@A@A@@A@@MFAB@@@@@IF@@CA@@CB@@AA@@EB@@GA@@AA@@A@@A@@BA@@EA@A@@FA@@@@EA@@FA@@EA@AB@@C@@D@@@CC@@FA@@FA@@E@@@DA@@GA@@@D@@AI@@@@JC@G@@BG@@AE@@DA@@AO@@CBCA@BABAAAA@BA@A@@C@@A@A@@H@@C@A@C@A@A@@@CH@AGAAC@AEB@@A@@@@ACC@A@@@A@@A@CA@ACA@BB@B@B@@AA@AA@@CAC@@ACB@@CACJAAM@@A@@MF@@@@OCIG@IB@AC@AE@@ACMB@@@@BDQB"],"encodeOffsets":[[117894,35359]]}},{"type":"Feature","id":"411402","properties":{"name":"梁园区","cp":[115.613965,34.443893],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@A@@@@@ABAACB@FA@@ACB@BD@@@A@@@A@AA@@@@@@@A@@CA@AAEBAEA@@@@A@@A@BD@BA@@@ABA@@ACB@BA@@ABA@@A@AC@@CB@CCBBD@@BB@@EBBFGB@DC@@DE@@B@BA@@@@B@@@B@@A@@A@AA@@B@F@@@@A@A@A@C@IB@CC@BDC@AB@CCBAEABA@CCA@BBAB@AABACGDDH@@CBAAABBBBA@D@@@@@B@BGDABGD@ACDCB@AABBBABA@@@AAA@@B@@@BA@@@@@I@@DE@ABC@BBA@@@C@C@@@AC@@G@@AOB@@AGJA@A@@AC@@@ACB@ACB@CB@@@@A@@@@EBAAB@AC@@ACA@AC@@A@A@ABKD@@ABGBFH@JBLDBF@@F@@@@DBDB@B@@A@ABIBAB@@CDAD@@@BB@@BDBFD@B@@@@ADEF@BEDAD@@@B@D@BDB@BOC@D@@A@@B@@@@A@BDK@@@@BKB@BAD@A@B@FCAAH@@B@PBN@ADF@ANE@@B@@B@@@@@@B@B@B@B@D@B@@A@@@GAC@EAGAC@A@GA@DD@B@@B@BEA@B@@K@@@E@A@E@CB@@A@A@IBA@@@G@E@C@M@@DA@CDE@A@G@SA@@AEM@OAA@@@@@@ABADG@A@ABGAC@@AAA@A@CBCBA@A@A@A@KEA@@AACCCCGECC@@A@ACC@@@AKBAAAAECCE@C@@BADAB@BA@A@AA@BAD@B@BA@@B@B@B@BCACAAAA@@IAMB@@CACACACAACCCAA@EAA@@@@ABEDEDADADAF@@AB@DABEFEDA@QI@@A@GD@@A@@@CLA@GD@AAAA@ECC@E@ODK@ADBH@@A@AAAAAAAA@@AAABC@CBCBCBCBADCBABG@A@AAC@AAAAA@CBEBA@A@@@@@A@AACCCAAAACCAAACAAAC@GCC@A@CBA@EB@BD@@AB@@B@@@AD@@@@@@B@@@DA@@@A@@@CBBB@@@DF@@FC@@D@@C@@B@BBB@@@D@@@@JA@DB@@BD@B@@BA@BD@@@DBHC@@@C@@BD@@B@@A@@DA@@BB@DN@BD@@@@BBFD@@DC@@@@D@H@@@@BD@BC@AD@@@@@BADF@@@C@DJB@DNDA@BHABFFA@@@A@@BB@@D@BBF@@BA@BFD@@C@@@@@@@BBDBABB@@@@@@B@@@@BB@BBCBBD@@B@@@@@BFE@AE@@CBA@BDC@BH@@ACB@BJDH@B@@D@@B@BBH@DB@BAFC@@BAB@F@BF@@BDJA@@D@ACB@@A@@@B@@D@@B@BBAB@@D@@@DAB@D@BA@@@@DAB@BI@FL@@B@DDIDAADAA@CBAA@@C@@DFABDBABBABFFAB@@FD@BC@DDCBAECBA@@@A@BD@@BBABBB@B@@A@@AA@A@@@@@@@@@A@@BA@@@@B@@EFBDBDGDA@@@@BA@BDBA@B@@FF@A@B@@@@F@@@@@CB@DDA@BBBC@@@@D@@AA@@@AEBBF@@BNC@AG@@@@@CC@@B@@@AA@@BAA@BC@BC@@ADAC@ACB@@@@CBB@ABBBAB@AA@BL@B@B@FD@@@B@@BA@@@AB@DD@@@@@C@@@A@@D@@C@@F@@E@@@A@@BH@BHA@@EE@@A@@E@ADA@@F@J@@@J@@A@@KGBBF@BA@@CCBAEA@@B@@@@@DA@BBDA@BC@@BA@@B@@@@FABBC@@BEBBHJA@@@H@F@@R@B@@D@@B@@DN@@AFB@@@@DB@FD@CB@@@@B@B@@B@DB@@B@@@DD@@AF@NBN@ADB@B@FB@DF@AJC@CJC@@@BD@B@DBHFBF@HAHAFEFGDG@CBC@GDEDCJMFEBAHGBADC@@HGDCDGDA@AFA@@FEB@BAJCB@FADAB@DAB@H@DAB@F@@A@A@@BA@@B@F@B@D@BBB@HDBBD@F@B@DAF@B@DAB@D@B@B@B@B@@@B@B@B@B@BBD@B@BBB@B@F@B@B@BA@@D@H@B@BB@@DAD@FBDBDBB@B@B@B@B@DAB@B@B@DA@@BABBBA@@D@DAB@BA@@B@B@@BA@@@@@@@@B@@@@B@@ADABCB@@@DAB@BADA@@B@JABA@@B@BC@@BAB@@@B@DAFA@AD@B@B@F@B@B@F@D@@@BAB@B@BA@@BBB@@B@@@B@@BB@BB@BBD@BD@BDB@@@BDB@BB@@BB@@B@J@R@B@J@J@FBB@BJBDAF@F@DCBEBAFCJCB@@@D@F@L@D@F@@@B@F@JA@@B@D@B@B@FAB@BBHAHAFAB@DAB@BAFAHAB@D@B@@@B@DAJAHADABA@A@@BCACAAAB@AC@@A@@@AA@@AC@@GC@@AE@AACB@@AA@@AE@B@DE@@@A@@@C@A@@BE@A@@BC@@@C@@AA@@@@ECA@AEAAAC@AEF@AAB@@C@@AAK@@@@A@A@@@@@CAA@B@BABEBA@@A@A@AA@@FA@@A@@A@@A@ABABA@A@@@CAAB@@AA@AEBADBBABC@@@BB@B@@CF@JA@A@GB@B@@AA@@AB@AAB@@AABA@A@@C@ED@AC@CC@BDA@GB@@A@@@BA@AF@@ACAC@ACG@@BA@BCCA@CA@@B@@@BABB@AFAB@BC@BE@@BAAABGA@AB@@@@AFB@AD@@AFCA@BADB@@B@DN@@DLB@@@@ADB@@FA@@BG@@A@@@D@@A@C@@D@BCA@CC@@C@AG@@EG@@C@@CA@D@BA@@@@AA@@E@@@C@AAA@@A@AGC@@AA@@A@@B@@A@@B@@A@A@@@ABA@@@@@CB@F@@A@AB@@ABAB@@CA@@BE@@@A@@CEA@@DAAA@C@@@@@GBAA@@@A@@E@@@@@A@AB@@A@ABB@A@@B@BABAH@@A@AF@@EC@@CC@@A@EA@@@@@@AB@HAD@DA@FB@DDB@@DD@@BB@@BB@BB@B@@BBF@F@@B@@D@D@BBB@D@BE@@AAAA@AA@@AB@@CD@@EJ@@AI@@AJ@@@@CG@@AH@@A@G@EE@@CCC@C@@@AACD@@AD@@@@@BA@AA@BA@A@A@@@ADBBCEA@ABABA@@D@BA@@DCAA@@BAAABADABA@@BBBA@@BA@AJCD@AABA@BB@@@@CDA@C@@@@FA@@@@BA@C@A@@A@@E@@CB@IB@@@@CF@A@@I@@C@@CA@@CC@@C@@@BC@@@BC@ED@@AD@@A@A@IB@F@@AH@@@AIB@@C@@@DB@@CB@@ED@@C@EB@@C@@D@@CA@@C@AA@@@A@@AB@@CCA@AAB@E@CAB@CA@@C@@A@@CA@@A@@@@AEH@@C@@@EB@@@@AB@@A"],"encodeOffsets":[[118582,35156]]}},{"type":"Feature","id":"411422","properties":{"name":"睢县","cp":[115.071879,34.445655],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@C@A@@@@@@K@AA@CD@B@@EA@A@ABAA@ADAB@@A@BBCD@@A@C@AAC@ECCCA@A@A@@@A@ADA@@FA@C@@HE@@AC@@FC@@BC@AB@D@BA@@B@@C@@AC@@@@@@@A@@D@@@A@@@BA@@@A@@BCBACMBAAEB@D@@EAGAE@A@ID@B@BI@AB@BC@A@@@@DEPGNC@A@A@@FA@@DC@GB@CAB@@CB@CA@A@@ACBEB@B@A@CCB@CA@@@AB@BC@@@@@@AA@@BC@@DCB@BA@@GC@ACC@BBA@AA@@AAB@@AA@A@@AA@@@@@A@@@C@@H@@@B@@@BB@DHGD@CA@ACA@AACB@ACBAAA@@DAA@B@@B@ADB@@@BBDHB@GB@BA@@B@@@A@@@BE@@BA@@BAB@AA@@F@@C@A@@E@@AAA@@A@AA@@@@@@AB@@AAB@A@A@A@@ACB@B@@AC@@AA@@AEB@A@@A@@BA@@DA@@BE@A@@@@@@@AB@@@DC@@BA@@@@B@BA@@DA@ADC@C@@AA@@AE@@@@@@EA@@A@@@AE@A@@@DF@B@BCB@HB@@H@@MB@@@BD@@D@@@FC@C@@@UBC@@A@AE@@BC@@@A@@@IA@HE@WB@@@@@BA@@BA@@DC@@F@@@D@@A@A@@CE@@@@HD@BA@FA@A@@B@@@@@AA@@BA@@AA@@BA@BAA@@B@@@A@@AB@@@A@@@B@@@@A@B@A@@@@@@BC@@A@AC@@BC@A@A@A@@D@@@BA@@CC@AA@B@BA@@B@@@DB@BDC@BDH@@BB@B@DAB@ABB@@B@DA@@@@DB@@B@@A@@F@A@DB@@D@@G@@@A@@C@@@DA@@AC@A@C@A@C@@@@B@@@AA@@B@B@@@C@@AD@@C@@@A@@B@@ADA@@D@@@B@BA@@B@@E@@BEB@@@JDA@CF@@DB@@B@B@BB@@@B@AB@B@@@@@BAB@@@@@BD@@@@D@@@DA@@DA@ABEBB@B@@@ABD@@B@@@BA@FB@AJBADD@@@@@AFC@AJB@@DD@@BDB@@@AHB@BXDAD@BB@BBD@@FFBF@@DB@@A@@@BB@@D@B@@@D@@A@@CB@@CA@@D@@@FA@@EA@BAC@@DCA@BC@@B@@@B@@@DA@@@A@@AC@@DA@@BC@@BAJC@@BA@@BA@CA@BIA@BAA@DA@C@@@E@@BI@A@@@@BA@@AC@@@@DJB@@A@@B@BA@@BC@AHB@@A@@@D@@@CB@@B@BH@@B@B@@BC@@@B@@@B@@@BB@@B@BCB@D@@@BC@DD@DA@AC@@A@@A@@@B@@@BCBBD@B@BB@@@B@@DN@@FHB@@@@AB@@F@@BCB@B@@A@@@C@E@ABC@@B@@B@@FB@@D@@@@B@@@B@BA@@@B@@@AD@@H@BA@@DA@@AA@@@@BB@@DD@@@BHD@@BB@BB@H@BFB@AB@B@@@BA@@@@C@CED@@EF@@@@ADAJC@AB@@@BB@@BF@@BDDDBFF@@@JA@B@@D@DBB@@BDFB@@BD@BFFLBFD@@@DJDABFFABBA@BF@BBFABFJA@@@ABEBACA@AACB@@CAACCDBBB@BBB@@@@B@@@B@@@B@@@FFABF@@@@B@@BA@@@DF@B@@ABC@BF@@F@@A@@BB@A@BA@@@CB@@EBB@@@B@@@@@BDC@BFB@@C@@@@@@DDA@@B@@@@ABDFB@@@A@BB@@BFC@@EA@@BA@@@A@CBBBA@@BA@@@B@@BABC@BD@@BBAB@B@@@BBBB@@BH@@A@@@@BFA@@B@@A@@@A@@B@BABE@@BEA@C@@ABA@@D@@@DB@@DB@AHADAL@BBH@@D@@D@@@CD@@DF@@@NA@BJ@B@@D@@B@D@@@C@@AB@@AB@@EJ@@@@C@A@EA@@A@@@AD@@CD@@CBB@ED@@C@@@@@DB@@AL@BHFA@BD@@@@@B@B@@AF@@AF@@AD@@A@@@BF@B@@@D@B@@AF@@@L@B@@@B@B@@BB@@@BBB@@@DADFBABB@@@BB@@AA@@A@@BBB@BA@@LA@BB@AABAAABAD@ACA@@C@@B@@EAEDA@@FAA@BAB@B@@@JA@@H@@@BA@@J@@BB@B@D@@BD@@BF@@F@@B@@D@@@@@D@BD@@BB@@A@@BBB@AB@@@@D@@HB@@F@@B@@FD@@DFA@@@CD@@AD@@A@@D@@CB@@D@@@CB@@@C@@@DA@AB@@CD@@DBA@BB@JA@FB@@FD@@CD@@BB@B@@@@@D@@@D@@@@@BB@@@C@@BBB@@AB@@F@@@C@@B@@AF@@DB@@CB@@CB@@@B@@@B@B@@C@@D@@CCB@AB@ACD@JA@@D@@AB@@AB@@BD@@AB@@A@@@CAC@@AEB@PA@@@BHA@@@AD@@ED@ACB@CAACB@@AACJC@@@DL@B@D@D@@DD@@@BFBARAAC@@@@@@DCBAB@BC@@@@BA@@DA@ABA@@@AACACAG@@BB@A@@@@B@@AB@BB@ABAB@@@FCB@BB@AB@D@BBBB@DB@BA@AD@B@B@BABB@A@AB@D@CAAAB@AABCFCD@FBFDB@DBBB@@B@B@B@@@@@F@DCB@@AAA@C@CB@AA@EA@AC@A@@@ABABABA@CAADGDGDA@AFC@CFADCFABADABCBA@@@CACAE@@E@A@GEC@@IC@@@AA@@G@A@@O@@B@BADAD@BC@C@ADC@IEAA@A@AACA@@@@CAEB@EE@@ICAA@@A@CHB@CDA@CBEE@@CC@@EC@@C@A@CACDABBD@@CDB@@BA@AF@@@@CD@@ED@AA@CACDA@@BAD@@C@@@GB@@CB@B@B@@E@CAA@@C@@ACAC@@@C@@A@AC@@E@@AG@@A@A@A@O@C@@@E@@EB@BC@EEGAA@E@CAAAA@@ACEE@AAG@CAC@C@@ACEI@@FADG@EBCBCD@FBBDD@FAAGGA@A@@BCDEAAACGCA@CABACA@GACC@AAAAA@ABAE@ABE@A@AACAC@CDGFCE@@EC@ACBE@C@CBA@CFCBC@@@@I@@AAAC@@@@AACJA@AD@@AF@@AD@@A@EA@A@@DG@@CA@@DC@A@CBABA@A@@DCB@DCBA@BDA@C@@CABA@AGB@AEDC@A@@AC@A@GB@B@B@@A@@@@@AB@ACC@@@@A@A@@AA@@@@BB@B@BA@ACGAABH@@FABA@CAA@C@@@A@@A"],"encodeOffsets":[[117898,35033]]}},{"type":"Feature","id":"411423","properties":{"name":"宁陵县","cp":[115.313743,34.460399],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@G@@CA@A@A@@AB@AAA@@@@@AB@@@DAHA@Q@@BA@@CC@@FC@A@A@ACA@@AC@@@A@@@A@@CA@AA@@C@@@A@@BABEDA@AB@BA@@@E@@@@DA@@C@@A@@@@FE@C@@AA@@AA@BIC@@@@@C@@A@@@CK@@BCA@BG@@@@BA@E@@G@@E@BCC@@DG@@CA@@D@@C@@AE@@@E@ABB@@DB@@@C@@FIBAC@B@B@@AAA@@AEDCH@DBDBD@B@BAF@BBFBAB@BBBBD@BD@HDBABDBB@HDBDBBCFAD@@@BHBBHEBC@ACEAC@ADAD@FCHEB@@FJBD@@@DBD@DBH@BFFBD@@BBBB@D@FBBFH@FADA@@FF@@@D@P@B@B@B@@@BH@@@FD@@B@BD@@@D@DB@BD@@@BB@D@FA@A@A@@DA@@H@@@DC@AB@@CBBD@DBBC@@FC@@D@@E@@BAB@@CA@DC@AACBBD@D@B@DD@@FD@@DF@AF@DCB@DGA@D@BB@DB@JF@@FFADB@@@@DBBBB@B@FB@JCD@B@DADC@CBABA@@@@PB@H@@@BB@@D@@JD@HFB@F@@@BFBD@D@@ABADCBABEBCDEB@DED@BCBCHCHBB@DABABAB@B@@@BBDB@@FBBA@@D@DBB@BA@CDE@@@@@A@A@A@@@AACAA@ECEAC@EDADBBA@BBDBC@A@@B@BAAABA@A@C@@BABA@@CAAAAC@A@@BAAA@ED@@A@AB@BAAA@@BA@@@@@@BAA@@BHBDBD@B@@AB@BCB@@AB@@@@ADA@ABCD@@NABD@@BFD@@BJAH@DJ@P@@E@@NB@@@BNIBBD@DA@BD@@BD@DB@@BBB@@@A@AAAB@BDB@@D@BB@@@B@D@BD@@@@@BA@BFD@BBBHG@@D@@@B@B@D@B@DG@@@@B@BD@@@@BABB@BBABABB@AD@DP@@BB@@CF@@BH@@AH@D@@I@@J@@BC@@@B@@HB@@C@@@FB@@EB@@ED@@D@@@CD@@@BAB@@FB@@EB@@F@@B@@EB@B@@FB@@AB@@@@BB@@BB@@HA@@FB@@BA@@DB@@DE@@J@@@@BANE@@@BB@B@B@B@B@@B@@@@@B@@@BDADHC@BBB@@DDB@DB@@@@CF@@@@@@A@@@A@@BC@@D@@AB@AED@@@D@@DB@F@@AHAD@@DB@@AF@@BD@B@@DB@@CB@@AB@ABD@@BH@B@@AB@@@FA@@@A@@DABBB@@@FAACD@ACD@@EB@@CBA@DB@ACB@F@BBD@@AB@@BNCBDBAB@@CB@B@@BB@@DJ@@AHBBABDBACCBABDBB@@D@FAAA@@LA@BHABBF@@@@FBBF@@D@AF@@D@@B@@@B@CDBB@A@@BA@FB@BBDA@@D@@@B@@ADA@BB@@@@@B@@A@@@@HAAC@@D@AEF@@AF@@DBAB@BDB@AEB@BB@@BBF@@AB@@AFAA@B@HE@A@BB@@DB@@BB@@@@@@AB@@@B@@BBAB@@AD@B@@@@@BDB@AC@@B@B@B@@@@ABA@@B@@@@AF@BD@BJA@@FA@@BB@@BB@BBBH@@AAEB@@ANA@C@@@@@@F@CM@@@@AADA@AD@@AB@@AD@@ACBAAB@@C@@@@@AB@BFDA@DB@@AAEHA@LB@@@@I@@@I@EB@BCF@@@@BF@@FB@AGG@@AB@@@F@@@@ED@@@@CB@@@D@@@@@C@@CBA@@B@@AA@@@C@@E@A@AAKB@@BBAAABAA@DA@@@@DA@BBDBC@@ADD@@ABB@AB@@B@@@AD@@D@@@@BHD@AM@@AEFA@B@@BB@@@C@@D@AA@ACB@CDA@@@@E@@@@@@A@BEE@@@AABACB@@A@@B@HCACACFE@@@A@@B@@AB@@@@@@@@@B@B@@BB@@@@AAABAAA@@ACB@@@B@DABFDACCD@@AEC@@BAEEBAAAABACEB@CD@@@BBDAB@CBBBJCCCA@@@EKJ@@ABA@C@@B@@A@CBA@C@@@CA@AB@A@AC@@@@A@@@BA@BDC@@@IBAC@@AEE@A@AB@@EDABA@@CAG@A@AC@@@@ACGAIA@BD@@AGD@ACB@DA@@BFF@AE@@@@A@@@ACDAAAA@@A@@A@@@@@@@AAABAC@A@@@@@@@DC@AEB@@AE@AAC@@@AA@@@B@@EBAEGB@ACBCMA@CID@@@E@BC@A@@@@BCD@@AAC@@@@@G@C@@D@@CC@AE@A@@C@@ACMA@@AB@@CB@@@@AC@@AD@@@D@AG@C@@ACB@@AA@C@@AA@@CIB@@@@@C@@AA@A@AD@@@@CD@@EE@@C@@AADA@@B@@@B@@C@@@A@@@@C@@B@@@AA@@BC@@A@AACAG@@@AD@ACA@AGB@@K@@A@@AA@AC@@KBADA@A@@BA@@BA@@@@@KBBBE@@@@AC@E@ACGB@@C@@@EBA@@@B@AAB@CE@@AEB@ACABC@CDA@@@@E@AC@@@A@@I@@BI@CD@@B@@DC@@@IA@@C@@A@@AF@@AB@@A@@@@B@@A@CAGB@@C@AB@@EBB@A@AFCA@@@ACB@@K@@@D@@@CG@@@DC@@@AAE@@@@B@@CFAAEA@@AA@@@C@@B@BC@@@@D@@@CA@@B@@@B@@A@@@@A@@@@@@@A@@@A@@AAA@@AA@AA@@@@@BA@@AB@AC@@AA@@@ED@@AC@@GA@AEFA@CD@AEA@@AA@@AA@@CCB@A@@AB@@C@@@@E@@AG@@@AA@@GA@GB@@ABBDA@A@@CID@AA@A@BBMDA@@@@DC@IBBDM@@D@@A@@@C@@C@@AA@@AA@@@@@D@@A@A@@AC@@@@CA@@ACA@AC@@@A@@AE@@@@AC@@CB@@DB@@C@@@AA@@AA@CA@A@@@AEA@C@@A@A@@AA@@C@@C@@@EA@BGB@@C@@@A@"],"encodeOffsets":[[118031,35075]]}},{"type":"Feature","id":"411424","properties":{"name":"柘城县","cp":[115.305708,34.091082],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@@A@@@AD@@BD@@A@CA@AG@AA@@B@A@@@@CGA@@AC@@BI@@A@@A@A@@AA@@@@AC@@B@@GA@BCBCBCBA@A@@@EB@@E@@@A@@@@BA@@ACBEB@@ED@DC@@AA@@@AAA@@AA@AAE@@DA@@AA@ABA@@BA@@@@@@@@B@@@@@@@@A@@BC@@@D@B@@HC@CB@@@@@@@@@D@@@BB@DBCB@B@B@BB@@@@BD@@AF@B@B@@BB@@ACCB@BB@@@BF@@@@B@BA@@B@@@@@@@JA@BFA@@@@@@D@BBB@E@@@FD@@BB@@CB@@BB@@@BHB@ABABA@A@@FE@@D@@@DB@@B@B@@BA@DH@@DHA@@@DB@@D@@@D@@@@D@@@B@@DBB@@@@@DF@@@B@@@@@@AB@@D@@@@@BB@@BBB@@D@@B@@@@@FD@BBA@@DA@@BDABD@DAB@@ADY@@P@@D@BBD@D@D@L@N@D@`C@@@D@@@FB@@BBB@AB@@B@@@@@@@DD@@CFA@@B@@CFA@B@@BB@BBB@DBFBBBFBBDB@BBB@BDDABB@@FD@DB@B@@@B@BB@B@BBA@@D@@A@BB@@@B@@ADEDAB@@G@@DA@@B@@EBG@@B@@@@A@@@A@@@E@BB@@@DB@@BB@@D@@@BA@@BA@AB@A@@@@@B@@AAA@BD@DD@@AB@BDB@@DA@@@@DB@@BA@BBEB@@@@@@@@@BB@BA@@BBAB@@A@@BC@@F@@@D@B@B@A@D@@@@@@@DA@@@C@@BB@@@D@@DD@@@B@@@@@@@@AB@@BD@@@B@@@D@@@@J@@@@C@@B@@@B@@AD@@@BA@@@B@@B@@@BB@@B@@@@@HA@A@@@@@@@C@@FA@@A@@@AA@@@@@@B@@@D@@@BC@@BA@@B@@@BD@@@D@@BB@@@B@@BB@@AB@@DB@@@@H@@@@A@@DBD@@@BBHC@@D@BB@@D@@@@B@@@B@@FA@@B@@@B@@@BD@@BB@@AB@@DB@@FJA@BC@@@@@@BF@@BC@@BA@@BD@ADDB@BI@@DB@@@@D@@@F@B@HD@@DADG@@@@CKJ@CA@@AA@@FC@@@C@@HE@@CCB@DD@@@BDD@@DF@@BA@A@@BA@@BBHGB@CE@@AA@@BA@BHHABBFA@@BDHABHA@@B@@B@@@BABCB@AB@B@BFB@@@ADCB@@B@L@@@@B@D@@BB@@@D@B@DBB@BA@EG@BAHBBDB@@A@AAA@@@@BB@@@B@B@@D@BDA@@B@@@@@BA@A@A@@H@BBD@@@BCDBFA@BHB@BA@DD@B@ACB@DA@CDA@CB@B@BADAB@D@@CB@@DH@@CB@B@@F@BC@@BE@@BC@@BIBBD@B@@D@BB@BJ@@@@@ADED@DAB@D@DAFBDD@@FF@@BB@BB@@@A@ABDJA@ED@@@A@@CA@BAF@@@F@@BD@@@@CB@@DH@@CD@ADF@@@@HF@B@@A@@H@@ADB@AL@@D@@@BD@@@@@D@AJB@@BB@@BD@F@@E@@B@@@@DB@@C@@F@@@B@@ABAB@FCBA@AB@@@D@@@BBB@@DB@@@B@@@D@@BB@BDB@B@D@@ED@@DB@@AR@B@BG@C@@BA@@@@B@BBA@@BB@B@B@@DH@B@@@D@@@HA@AFB@@D@@@@DB@@BB@B@@@@DFB@B@@@BDBB@@BB@@B@@@DA@@CA@@DD@@B@@F@@BB@@@D@@BDB@BB@@D@@D@@BB@B@@@@C@@@@BB@@BB@@@DD@@@B@@@@CN@ACJAD@@C@@B@NCAAB@B@@BJC@DB@B@ACBA@@HA@@A@@IAABCBA@@@A@C@@B@BABA@@B@@@BBBA@S@@H@@A@@B@B@@@@@JF@@BAH@B@@@BA@I@@@A@@@CB@@@B@@@D@@@VB@BBAB@B@@@BBBB@@@D@@J@@AB@@DB@NCAAB@AE@@DHJCBBD@FA@CBA@A@BCGA@@E@@@AC@@@@AD@@@@@@DB@@A@@B@@B@@D@@AB@ACD@ACF@@BB@ACB@@AB@AC@@D@@BFA@D@@BFB@BDBD@@B@BDDA@BFABB@BDC@@B@BB@@BBB@@CA@CC@ABA@@B@B@BBD@@@AE@@D@@@D@@DD@@@A@@BB@B@@@@AB@@DD@@@@ADA@@@@@@D@ACFA@ED@DA@@@CB@@CDA@C@@@@B@BD@@LA@A@@DAB@@DBA@ABA@AA@@AF@@AB@BB@@@C@AA@@A@@C@@@AC@A@A@A@ED@@C@@B@@BF@@@@@DAB@BAHA@A@@B@@AG@@C@AAAAAAAC@@E@AE@ACA@@CA@@ABA@@@@@@A@AAF@@@@@@CB@@BB@AAF@@E@BD@@AB@@DB@AED@@C@@@@@AD@@AD@@C@@@@C@@K@@BA@@@@@A@@BBBAB@@@@CD@@@D@B@D@B@@D@@@B@@BB@BBA@BBD@@@FC@@BD@BB@@D@@DFBB@@@D@@@D@ADDAB@F@@@@BD@B@@CD@B@@AB@BBB@@@@EB@@A@KB@@C@@@@@@AE@@@@@C@@@C@@B@ACF@@@B@@BFA@@@CC@@AC@@CA@@A@@C@@EB@@CB@@BF@@@D@FGB@@AB@@BB@@@@A@A@@@A@@@CB@@@@@@A@AA@@@@C@@AB@AC@@A@A@A@C@@B@@BBABBD@@A@@@AF@AEF@@C@@@A@A@GBA@EA@@AA@@@@AA@@EB@@AB@@A@@B@BA@@@A@@@AF@@@@@E@@E@@A@@CC@@AA@BE@@LABIBE@@@G@AAA@C@G@A@@@E@@BCAC@AA@@I@CB@@CBA@AA@@AA@AB@B@A@@AB@@@CC@AC@AA@@@@@@CA@@CA@@AE@@@@ID@@A@@@BB@AC@CC@@CACA@O@@A@@@BA@@A@@@AB@@A@@C@@BA@@@AAA@@B@@CDCDCB@@AD@BA@@@@ACDA@@@A@@AC@@@@EB@@CA@@AA@A@@@C@@CEB@AC@@A@@@@A@A@EB@@EB@BAB@@ABCB@@AE@@@AACC@A@@@@AA@A@A@@A@@@AA@@CC@@@@A@@G@@@@CA@ABC@@BA@@@A@@DC@AA@@CBA@@@@@@A@E@G@ABA@@AC@AA@@AAAB@ACC@AAA@BAB@@@A@@@BA@AAA@C@@@@@A@@I@C@E@G@@@G@A@A@ABA@C@C@CB@@A@CB@@ABCBABGAABA@ABA@@BC@@@G@G@MBABA@@@EDCB@@ABABABCBCBCBABMFABCBABC@ABGFCFA@ABA@@AAAA@@CACA@CBABABA@A@ABA@A@A@@GAB@AC@@AC@CE@AAE@@CB@AC@@@A@IB@BA@@AI@@@ACC@@AE@AE@E@AA@@A@@G@@BE@@CAB@@@CA@@DA@@C@@C@CBA@@@@AA@@@@D@@@@@AI@@BC@@B@@@D@F@@CB@@@@@BA@@B@@D@BF@@@@DHBFBFBBDBBB@F@B@@IA@@@AKA@AA@@BC@@@A@@@K@@AE@@AC@@AA@@@@BC@AC@@C@E@C@@@A@CBK@@FA@@AEA@@@@@AA@A@BCC@@CBB@E@@BIEA@@@@@@B@@@BABABCBA@@BAA@@@@CB@@CB@BG@@B@@@@CBC@@A@@@@GBB@CB@@AB@@BD@@CE@CAA@IACAE@AACA@HA@@BGB@BK@@EB@@AB@@CB@AEA@EBCDCBC@CBABCBC@CBEBEBEBCBA@ABCF@BA@CAI@@EBEA@BCA@DECA@AB@B@DBFCB@DABADADA@ABA@A@AB@@AAC@BCAGA@AC@@BA@@AI@@D@@O@@A@@@@ACB@@CA@@ABA@GA@@C@@MBA@@A@@@AA@A@@AC@@@@A@ACC@@AB@AA@@A@@SCA@EAAD@@CBGBA@@BKB@BA@@AA@@@@@BF@@B@@DA@@B@@@DA@BBA@@B@@@D@@C@@@C@@B@@@AA@@@C@@@CDA@A@C@A@@@A@G@C@@CA@A@@B@@AB@AG@@AAC@@A@@CC@@EC@A@@@DC@@B@EGAA@ABA@@"],"encodeOffsets":[[117869,34761]]}},{"type":"Feature","id":"411481","properties":{"name":"永城市","cp":[116.4495,33.929291],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@K@@@AAA@ABA@A@AC@ACAA@C@ABG@ECIB@ACAA@AAABI@E@EB@BEAC@IAKCA@CA@AAC@CAC@A@@A@@BA@A@@@C@A@@@ABABCBCBA@@@AA@AAC@AACCE@@CC@AA@@ACACAGAGAGAGAGAGC@@CCCEECCC@AAAAECCCAAACAE@GAM@G@GDE@A@E@I@IAKCGAE@GAGBGAEACAEA@AGCCA@@AAACECCCECEAA@EAE@A@C@AB@AA@A@GBC@CDCFCD@B@BCFCFCH@FAFAB@BBFCBABABABAB@BAD@BABABAB@@@BCBA@EBGBABA@C@A@CBC@CB@@C@ABA@ABCDCDAB@DADAFABAD@B@BBBDB@@@B@@@BCF@@A@A@G@I@A@G@@@EACAC@A@CBCB@BA@@B@B@DDDBD@B@BABC@IDA@@B@B@D@@ABEBEBGDBF@BF@BBBDBF@BA@@BC@AJK@GBE@@BBF@DDDF@B@@GJ@BAFADB@BB@@BADABBD@DBB@FBDBLABABC@ABGDA@@B@BDFBF@D@@C@C@AHA@C@ABA@@B@@AB@B@BCB@BA@ADABABA@A@C@CACA@D@@@B@B@B@B@BGDCBIBEBI@E@@F@F@F@B@BABADABC@GBCBE@E@C@AAA@A@C@C@A@@DCDADCF@D@BBFBJDF@@BHDFBFBFBHBB@@@FDBBFBHBF@BBDBFBF@DAD@@AFCDCFADEDEHCFCDABABCD@@@F@@@HC@@H@@BFAB@B@@@@BDBABB@BAB@@DB@DA@CF@@B@AFB@@FH@@F@BB@H@@BB@ACF@@BF@@AF@@CB@@@@BD@@@B@@ADA@B@@@CB@@B@@DC@@@BBBDA@B@@@CF@AA@A@@B@B@BB@AB@@@@@@FD@@BBFEBBB@@DA@BB@@@BBA@@B@@B@B@BB@@FA@@AEA@AGD@@@@@B@B@BBB@@AF@@DDA@@@DB@DA@A@@B@@BB@BBB@BD@@B@B@@@@@D@BB@@DA@@DC@D@@FA@AAA@@@AFA@A@@AI@@A@A@@A@@@@B@@A@@@AC@AADA@@CBACFA@AEB@A@@B@DA@@F@@AB@@ADA@AB@@C@ABAD@B@@@B@@@BB@@DABABA@@BA@BB@DA@BD@@F@BD@@BH@B@@BB@@BB@@BB@B@@@@BABAB@BAB@B@B@@A@A@BDB@@F@DC@BDA@@BF@@DF@@D@@BBB@BBB@B@@AD@@AD@@CB@B@BAAC@@B@B@B@AAB@AAB@@C@@BDBBAEB@BA@B@BB@B@@B@@BA@@B@@DHA@@@C@@BDF@ACB@@AB@@@@FHBB@@@@DC@BDA@@BCB@H@@BB@BB@@BB@@B@@B@DBB@@BBD@BB@@BB@BB@@@@BD@@BB@BA@@@AHA@@BBBABBB@@@D@BBB@@DF@BBDDABDB@@@BDDA@DB@@DFA@AB@@AD@D@B@@@B@FC@@CEDA@@FAACFA@BTG@@@@BBF@@@DLAABFBADDBB@H@@J@@AB@BB@@B@BDA@@BB@@BBA@BB@@BB@AADA@AFAAAD@B@BA@B@@BBB@B@B@@B@@@BADABA@A@A@@BBH@@A@@@FJ@BABABBBBDB@B@DABBFCB@ACBALEDF@@DAD@B@@A@@BBBDB@@@@B@@@B@@BB@@B@@BB@@ABB@B@@@@BA@@BDDAB@AA@A@AB@@ADCHCFE@@DD@@B@D@B@@BAD@@@B@@@B@B@@@BBDBDBB@F@@@D@BBDDF@BBBBB@B@@@D@F@@BB@BBBBDBB@@B@BA@@BBB@@@@A@@DABDD@@@BB@BBBD@DHDA@BB@B@AB@@FAB@B@@B@A@C@@BF@@@EB@@BB@@BBF@@@ED@@@@DB@B@@D@@BBB@BJ@BB@@@B@@B@@A@@B@@@@D@BBD@B@DA@C@@B@@BDABD@@B@B@BB@BB@@CD@AEDA@@ACB@@@LAJA@@B@@@BBBB@DCBBB@BEB@@F@@DD@@FBB@FF@@@@DB@BA@H@@F@NB@@D@@BB@B@ADB@@A@A@@F@@AB@ADB@BC@@@DB@@@BCD@@AD@A@B@@AEAB@@@F@@ED@@A@FB@@EB@@D@@@BF@@@BA@A@@B@BB@@B@@A@@B@@A@@@ADBB@@@FAD@@D@@@@DB@CD@@@B@B@@AB@@@B@@@@@@AB@@BB@@DB@@B@BFABD@@H@@DB@@@@@@D@BD@@DD@@BD@@B@DBAB@B@@DF@@DHB@AFBB@B@HABBD@@@BB@@BF@@BB@@B@D@DAF@BAD@H@D@F@BA@BBL@BAB@BA@ABABA@@@A@A@A@AB@@@B@B@B@@D@BD@@F@@@@AHA@@@CL@@FB@@BF@@@@BD@@DB@BFBAL@@@@@@BD@@@@B@BB@AD@B@B@@@FB@@DA@@DA@ALA@@D@@HBAHA@ADAHD@@BAFD@BF@@AJ@H@D@B@@@D@BCDABABAF@BADBBBD@B@D@B@B@B@D@@C@K@@@@FB@@DC@BFB@@CTDHFBBFFDB@@FDBB@BBBFDBBFFDBDBFDDBFBB@FBH@J@D@D@HAFAFAB@FAF@DA@@F@HAFC@@H@HAFAF@HADAF@@AD@HEDAHCBAFC@A@A@C@A@E@AA@CAAE@@CC@@AACCEC@AACAAA@AAC@CA@@CAA@@AA@AC@AAA@@AACAA@C@A@A@@@A@A@C@@@A@@AAA@ABA@AB@@A@A@AAC@@@AB@BCB@@A@@@A@@AACAAA@@@A@A@A@@AA@@@A@@@A@@BA@@@A@@@A@@@@@A@@@A@A@A@@@A@@DCBAB@@@@A@@AA@@CA@@A@@@@@@A@@@@@ABADABA@A@@AC@@@@@@@A@@@@@A@@@@BA@@BA@@BAB@@A@ABA@ABAB@B@@AB@@@FB@@DA@@@@@A@A@CB@@A@@@A@@@A@@@A@@@@@@@A@@B@BA@AB@BA@@BA@@@AAA@A@@BAGEGCEAE@ICA@AAIGCCAC@@CC@EACAC@CACAGAEA@AC@C@EAE@A@@@C@E@C@CBCBCBEDA@@BAFCF@B@B@HAHAF@FCFAFEDCDCDGBCBE@EAG@@@@FI@B@@D@@AD@@@B@AAB@@AB@@@A@@@B@@@BA@AFB@CE@@CA@B@BA@A@ABABA@@BA@@@C@A@@@ABAFCBA@@@A@C@AB@@ALGBAB@@@BA@AHQBEBABA@ABA@A@A@@@CAC@@@A@A@@E@@AD@@ACB@@@AB@AADAAAFAAAHA@@@AAC@@@C@ABCJCBABABAB@BAB@DCDABAAEB@@CPAACD@@AF@AC@C@@@@PBDABCBABAB@B@BC@@DEBEAIAACCEECCCCAC@CBC@CBEFE@GBECGCCCCAC@AAC@E@A@EBG@@BEDEBG@C@EAAAAGCC@G@G@EB@@IDGDGD@@IFIFIFGBGBEDIBE@G@@@G@GAE@CCCCCCAE@@@E@ECG@AD@@AB@@A@@@A@@@C@@@CWB@CAGIC@BA@@ACBAD@F@D@@GB@@AAC@ACG@@A@CAEEGEBE@EDE@CAC@CKACA@EBA@C@A@KFA@CBA@AA@@AAACCAAAC@CAACKBE@AA@AA@A@C@AA@C@A@A@CAAAAAAA@A@AA@AAAGAC@M@E@@AB@@A@@@A@A@GAA@GCE@@@AAE@CAI@@@A@C@C@ABCDMBC@@@C@A@@A@@@@A@@A@AAAA@CA@@@A@ABA@A@ABA@A@A@@AAAA@AB@@CDGH@BA@ABA@A@@@ABA@A@AAAA@@@A@AACCB@A@AAAAECCCCCAAE@CAC"],"encodeOffsets":[[119188,34594]]}},{"type":"Feature","id":"411426","properties":{"name":"夏邑县","cp":[116.131447,34.237553],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@ABCB@@AA@@A@@@A@C@AB@B@DA@@BCB@BA@@BE@@@CBA@@@@BFA@BEBBDDA@@CBBBD@@B@@@BA@@@@@@BB@B@@@BJ@@@BEB@B@@BB@BEB@@@CCD@@CB@@AAC@@@@@A@A@@@ACA@AAA@@AA@@@@BCBA@@C@@CB@CE@@BA@AAA@A@@@@@C@BHB@BF@@EB@@AAA@A@@@@AB@AA@@A@@ACB@@AAFAAE@AC@@E@@@@A@@BAAA@A@@@@BBBE@@D@@@ACBAA@A@@CD@@@AA@@D@@@ACB@BA@@@C@@A@@A@@DE@@BE@@AE@BDA@@AG@A@@A@EG@@EA@BEA@@@DEB@@CCA@@BA@AAAABAC@@@@@ABAAE@@@GD@@G@@@ECDCBGF@@ABCDCDCBCB@@EDEBC@@@E@GAE@EBE@E@E@C@C@EB@D@BBDDA@BB@E@@B@BA@@A@@@BCD@BAB@BB@@@@A@AD@@BB@@BD@DA@DD@@CB@AGB@BD@@@@B@AAB@@BD@BBB@@F@D@B@@CB@AA@@AA@@DA@BB@@@BD@@BDB@BI@@DA@@B@@A@@D@@BB@@B@@@@B@@@@BB@@@@B@BBB@BD@DB@@@EB@BG@BDCB@@@@C@@BB@AB@BD@@DD@@@B@BDBA@BB@@@BB@@B@@DD@AAD@@ADA@BB@@ABBBBBD@@@AB@@BB@@@BD@@@@@DA@@BC@BB@@@BA@C@@@ABBBA@ACA@A@DAA@CB@ACBA@ABABABABIB@BBDA@BBABBDA@BBADDA@BBABB@BBA@@BB@@DD@@B@DF@@BD@@CBBBA@@BAB@BA@BBA@@@A@AB@B@@@D@A@BA@@@@@@@@@ADG@@BC@@BA@@FA@@A@@A@@BA@@AA@@AC@A@@@@AAA@@@A@@@@CB@AA@ABA@@@@DA@@DB@ADB@@FB@@AB@@A@@@B@DA@@DA@@A@@@CA@@CA@@B@@@AA@@H@@B@@@B@@A@@@H@@B@@DB@BN@@A@AC@@@FM@@@BD@@A@@B@B@BE@A@@B@@F@@BC@@B@@C@AD@@A@@@C@@AMDA@EB@AA@A@A@@@A@@D@@ACGB@BA@AB@B@@@LA@@J@@@DFA@DAB@FF@@@AB@@@BB@BFB@F@@DB@@@@BA@@B@B@BABAB@@@@D@@BE@@BD@@BB@@BB@@B@DB@B@B@B@AB@B@@@FA@BJ@@@BB@@B@@BB@@@CB@@@BB@@B@B@@@BBB@BB@BB@B@@BDAAAFA@BB@DA@@D@@@B@D@BA@B@@BDD@@DBF@@@@B@BDBABFDA@@B@BF@@BAD@@ADABDBABFDA@@BBBA@@BABDHAAABAB@B@@BBD@@FA@@BB@@D@@@@BB@@DF@BB@BB@@BB@BBC@@@BBF@@BE@@@@@@HHA@FD@BDB@ACB@@FB@@@@B@@CB@@BBB@A@ABC@ABAB@@BFABB@AD@@@B@B@@@@CB@@CB@BA@A@BBAB@@DHB@BBA@DDB@BB@BBBCBDFA@@BC@BDA@BDBD@@BD@BAB@@@@@B@BAB@@@D@@B@JBB@D@BDB@@D@@A@@@@H@@@BD@@B@@@BD@@B@B@BH@BBFA@@BBH@@@A@BDA@@B@@@BBBABB@@B@BBB@BB@@DD@@FD@@B@@@@B@@B@@@BHC@@B@@@@D@BC@@@@DCB@DA@@B@@A@@@C@@DE@@BEB@A@@@BG@@B@@@@@B@@A@@@@@C@ABA@A@@BA@@@A@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@A@@@@@@@@B@DB@B@@FB@@B@BC@CB@@BF@@BDHA@DD@D@BA@@BA@B@@@D@B@@AB@@@B@B@@@B@@@B@@@BA@@@ABA@@@@@B@BD@@E@ABB@@DB@BF@@@@B@B@@@@@D@@BB@@@@DD@@BC@@D@@F@@BFABHBDE@@@BBB@BFA@BB@BB@@D@@E@@BB@DA@@BBC@@@@@@BB@@BB@@B@B@@BLE@A@E@@BF@@DA@BB@@A@C@ABA@@BA@BD@@C@@B@BBHB@B@@@@DA@@DF@@B@@@DDA@D@@D@@@@B@@AD@DC@ADB@@BB@@D@@B@@D@BH@B@@CD@@@H@N@@DB@@BB@@@B@@DB@@AHA@AFA@BD@@FD@@@@DB@@BB@@@BABAB@@@@GA@@CjB@A@@B@ACB@BDBAAE@@@@DF@@B@BB@@BBT@F@@BC@@@D@BB@B@@@BB@@@@AB@@D@@@CD@@DA@@@D@@CD@@B@BB@D@@BB@@BD@@@@A@ABA@A@C@E@@@@D@B@@BD@@@@ABCPB@FF@@@D@@BD@AFB@B@PBBD@@@D@BB@@@B@H@@E@@H@BFN@@BD@D@BEC@@E@@BM@@B@@@@ABB@@@@B@@EJ@@@B@@@@CB@@@B@@@@@@@@FF@FBBDD@B@@BB@@BD@@BD@H@BJJA@@@B@@B@@BRABB@@@D@B@@DJDAFCFCDAFEFAB@FCDADEDCDEBCDA@EBC@ECCCCA@EC@@@A@CDE@@DCFCB@DAB@DAFAHAHAF@@AH@F@BBF@FBF@F@FAH@B@FADAD@DC@@DAB@DADAFCFADG@@FC@ABEBEBCDCBABCBADADC@@HAHCDA@AFAH@DAHCDCHC@@DAF@DAB@HAFA@@HC@@HAFCDADAJCBADCBCBCBC@C@ADC@A@ABE@CBCAECECECE@CACCAACBE@A@ABCFAJCBDDFDBFBB@FBF@FBDBD@@C@@LB@EB@@B@FJBBC@@@AD@BD@@@A@@@AB@@CBBBA@D@@BGD@BC@@B@@D@@@CBB@BB@BA@@@BB@@ALF@CB@DBBBBC@@B@AJABABBB@@DFBADBA@DBADB@@AB@@BBB@B@@@@DBDBB@DBB@F@B@DCGKHGFEBEA@AED@@CA@@E@@L@D@@@@C@A@A@A@C@AACAABC@ABEBABADC@A@C@@@A@C@GBI@@AEC@BE@AC@BGBCB@BGGA@@@CB@BKB@@CB@@CA@@E@@@A@ABCA@@A@A@@C@@A@@@@K@ABAEA@@CC@@A@@E@@AA@@EK@@D@@GB@B@@E@@@ACC@@@@A@A@A@@BAB@B@B@@@B@BABAB@@ABA@AAK@AABE@C@G@C@ABE@CBC@A@@@AA@@AE@@AA@@C@AAGBA@A@EA@BGA@CE@@CA@A@AB@C@AC@@AC@@CC@@A@C@@@@A@@CG@@@ACEB@A@AA@@CA@@AA@@B@@@@A@@@A@@BA@A@@@C@@DCA@@@@@CC@EB@@A@CA@B@@@BA@@@@BA@@@AAA@@@@BAB@@E@@A@@@CA@@FA@@E@BC@@FE@@@A@FB@BA@B@C@@BC@AD@@A@@C@@ADA@BCA@@BE@@@@B@BA@BCA@A@@AC@@@MAE@@@@GABA@@C@@E@@EAA@EC@@CE@@@FA@AAADA@CAAAA@@A@@@IBKB@@A@BD@@CBBFC@@DA@@AAAA@A@@@ACCB@AA@@@@DCBA@C@AAC@@@@@@AB@@@@AA@@@A@@AAIA@AA@@@CA@A@@C@@C@@F@@AE@AA@@AA@@F@@AE@@@D@B@AA@A@EB@@BAA@A@@ACBCGC@AA@AAA@@C@ACCB@@@B@@A@AA@@ABA@@@AAACAA@AAA@@@E@C@@@AAAAA@ACEAC@A@C@@@EAAACAC@A@@@A@A@@@A@@BC@AA@C@A@@@CC@@EFGDCD@BA@@B@BBBA@CBAC@@AB@@@@@AAA@BA@@AA@@@AA@@@A@@@A@@A@ACAA@@@BA@C@CB@@CEKFABBDA@EDAACBA@A@ACAABABA@AEI@@B@@@AG@AB@B@B@BABC@A@@@AA@A@A@AA@@@AABA@C@BBEB@BCBBBA@@AA@@AAB@AA@@AB@ACA@@@AAA@@BI@@@@GAACCABAEBBCK@@E@AA@@@@SH@AEBBDEB@@CBDF@@EDA@@@A@C@C@@BA@@BEB@CA@@CCBAC@@A@ACCBAC@ACE@@AA@A@C@@AABAAA@AB@BG@@B@@AAA@@AC@@@@AAA@@AA@@AAC@AA@CAA@@@@AA@@AA@@AAA@@@GDA@AB@ACD@@C@@A@GA@E@@A@@BA@BDE@AC@@@D@@GB@CA@@@AB@@@AA@A@@A@AABA@BFAAAC@@@DA@BBA@BBA@A@A@@@BDABA@A@@DC@@BC@@BA@A@AAA@AA@@@CE@@CE@@AB@ACD@@C@EA@ACB@B@@@@A@ABA@ABABA@A@@A@A@@AA@@AA@@AA@G@@AC@@A@EC@@ACBA@@AAB@@AB"],"encodeOffsets":[[118853,34816]]}},{"type":"Feature","id":"411425","properties":{"name":"虞城县","cp":[115.828319,34.400835],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@D@@A@@REVGLCDALTNBXBF@B@B@BBdDD@N@H@XBD@X@B@FBtN@@DBLBR@XBHDHDBZ@F@BLXLBTB@@VWDAPQ\\QJ@ZDNHB@PHRHFBH@JATABA`_HO@CDIBCDCBCJKDELCFEFCB@H@B@H@BBFBHDJFFDFDPFB@DBDBFDLHBBBCBEEABA@A@A@C@E@CACBEAECCAEAE@CAA@E@EDEBC@@BCDCDE@CJE@C@E@KIEIGGIWABM@E@CAAAAAA@A@AAACECCG@ACBC@AAEIK@@DCBEFEDAHGBABABG@ABC@CBGBA@AFCHA@@CI@@@A@C@@AAQB@AA@@@@A@@IBAIG@C@@AC@@AA@@AA@C@ACEAE@@E@@@@@@A@@@A@@D@@A@@@I@@FA@@@@@AA@B@@A@@@AN@@@FD@AFC@C@@AM@AEG@@@@FG@A@@@A@@A@C@@ACOAA@A@BEC@@AC@@@E@@EOAAD@B@@C@@AA@C@@@@@@F@D@BAB@B@B@@C@@AA@@AC@A@@A@AC@@DC@@@B@@CC@@D@@@CA@@B@@A@@A@@@AAAC@@@D@@AE@S@AA@@AAA@@@CE@@@@BFABACA@BDA@@@@BiA@DB@@H@@A@ABAB@@A@@AA@@C@@C@@EC@@AEB@BGB@BA@@CA@@@A@@AA@@CM@G@@@C@@DA@G@@A@CA@@@@CA@@AA@BCD@@CBC@@@A@@C@@@@CCB@C@@@AE@@CB@@C@@A@A@AG@A@AD@@@ACB@@AB@BAD@B@@@AAB@@CE@@AF@B@F@AK@@@A@AA@@AA@@A@@@@D@AA@@CBA@@AF@@@@CA@@AAAB@AEA@AA@@F@ACAGEB@AE@@@@CD@@AC@@C@@A@@AC@@@@@A@A@@@@@AEA@@CA@BAF@@@ACA@@@@@B@BA@@B@@A@@@A@@@A@@@A@A@@BA@@@A@C@@@AAB@@ABC@C@@CGBAC@@AE@@DAD@@A@AA@@EA@A@@C@A@@@@@@B@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@B@@@B@@AB@B@BAD@@@@@B@@@@A@@@@@AH@@A@@@BFA@AF@@CD@@@B@@@@AB@@CDA@C@@D@@A@C@@A@@@GD@A@@@AA@@@@@@AC@@EC@@CA@@AAA@A@AA@BAAA@A@@@AB@ACB@@@G@AA@@EBAAG@@A@A@AC@@A@@@AC@@A@@@G@@B@@@@CA@ACC@A@IAA@@@@C@@BA@A@A@@@@BA@AAC@@ACACB@ACD@@AB@CEDAAA@AAAA@CCB@AAA@CG@@BAAAB@B@@ADA@@DA@@@@@A@A@@BCA@BAAE@@BABAD@BAB@A@AA@@DA@@@A@@A@@EA@BDA@ACC@@EGB@G@@@@F@@AE@AA@@D@AAA@@AA@@AAAE@@CA@@A@@C@@@AA@@EB@@AC@AA@A@ABBBGBACAB@@ABAA@@CBAEABACCB@BC@AB@@AEA@@@CBAEABACA@@@@@AE@CC@AC@@@AABC@A@@@C@@@CBA@@AEBBBCB@AA@A@@AAAA@AA@@A@A@@@AA@@A@@D@@AA@@@AA@@A@@AIB@@E@@@ABAA@A@A@A@@C@AA@@AA@@AC@@AF@@AC@@@@@BABA@A@A@AB@@A@@A@@CE@A@AEA@@A@@BA@@E@@EBA@CEB@C@@@IB@@K@@@ABAB@@AHABD@@@CB@@@B@B@B@@BFAB@NC@BD@@@B@@@BCD@@@@AD@@AE@@@@AB@F@@A@A@AB@@@AC@@N@@E@@BDB@@@AMA@@CA@@@@G@@@BA@@@A@@@@GB@@B@@@AB@@DB@@D@@@BB@@CB@@C@A@@@BA@@BA@@EA@BCA@@CB@@C@@B@BAB@@BDA@@@@@B@@BB@B@@B@D@@BB@@BB@@AB@@@@BB@@EB@@AD@@AH@BC@@@@@@@@B@@A@B@C@@@ABAB@@@B@AAB@@ABA@AB@AADA@@AC@@CEA@@@CC@@AA@@AB@AAAAB@ACBBCAAB@ACBAAAB@AC@AJABABABABAB@DA@BDAB@CBB@B@BDB@AABA@@D@B@@A@@AAD@@AB@@C@@@@AC@@A@@AA@@B@@ACAAAA@BA@@ACB@BC@BBC@@CA@@@AA@@A@@AABACA@@@C@@CC@@ABAA@@AD@@@@@DAACH@@AFA@@A@@CACA@AAA@@@@@AA@@@@@A@@A@@@AA@@@CB@@@@AB@@CJ@@ACA@AC@@A@@AAB@@CB@@BB@@BDA@@@A@C@EA@AAC@@AA@BBA@@@@@ACA@BHA@@DC@@CCBC@@AA@@AC@@B@B@@A@@ABA@ADC@A@@@BB@@A@AF@A@@ACBAC@A@CA@EBGDC@GACAG@EBCBCBCF@DAHAFAF@@AD@@CBEBEDC@A@C@ECCA@@@@AA@C@C@G@O@A@CBE@A@A@CC@GBC@E@AAGBC@E@E@AAEBCDCHAD@D@F@DBF@F@D@DADEB@BCBEDEDCBGHEBCDCDCBCFCDABCF@BABABG@IBK@CB@@AB@BABABA@ABA@@@A@CBABABAB@@AB@@D@BB@@@FA@AB@BABADAB@@A@@@@BABADABABABAB@AAAA@@H@@@B@@@BCBAB@B@@BF@B@D@BC@@B@BGB@@B@@BFA@BFA@F@B@BCJA@@BABAFD@@B@@@@@B@DB@@BFBADBB@@@DA@@@@@C@AH@@C@BEI@@CC@A@@B@@@B@BA@@BA@A@@DE@A@@@ABE@ABA@AB@B@@@@@BA@@@@BA@BDB@@BBB@BBB@BABABABADAB@AACC@@BC@@CCBC@A@@AC@@AAB@@@FA@@DBB@AD@@FA@@@@DB@@CFB@@@B@@FA@@BD@@@@@B@BAB@BA@@BD@@DBA@B@D@@@CB@@DD@@D@@B@B@@@@FG@ADABA@@AA@BBA@@AC@@BA@@AG@AH@@A@CB@@@BA@BHA@BFADC@@@@BB@AB@@@BC@@DA@@BC@@AC@DJAB@BABA@@AEBB@A@BDA@ACA@BF@@@@AAC@BB@@@B@@B@@BC@A@CBC@ABA@E@@BBBC@BBABA@@@@B@BA@AA@@@@A@BDA@BB@BA@A@C@BDA@@@@@@B@BDA@BBJD@@@@F@B@@F@@FD@@@ABA@CDADA@F@BB@@@@@BB@@DB@BDA@A@BDA@BDEBBDC@C@@B@B@FBDBBB@@CF@B@@@B@BJE@@D@@@@A@@DD@DA@DBBB@@AB@@B@B@@BD@BA@@DE@@FB@@CD@@DB@AEB@@FB@@DA@@@@@@DC@E@@B@@EBBFB@@BB@@H@@DHC@BB@B@@GBBFCB@BA@AAA@@@CBA@@AA@BBA@@BABE@@BCD@BEB@@@@A@BBE@@BA@@DB@@B@@@@BB@@BABBHRBA@B@BBD@BBBBB@@@BBBB@@DDDB@@BB@B@@@BDB@BD@@BDA@BBFA@@@@@B@@A@@DDA@BDA@B@@BD@@@BIBBH@@PA@BH@@@BD@@D@D@@@B@AAD@BAF@@CJ@@@@@B@@A@@@AB@BB@@B@BAAABA@BDADC@BHCBAHC@A@A@@@@@CABAABABBDA@@CGHCBDBA@BBAAAB@DDB@BABFDA@DBAD@ACD@@DJAD@B@B@B@@@@@@E@AB@@B@BB@@@@A@@@A@@B@@A@AF@@CD@@CHAAEFA@@AA@@ACDA@DDA@@BDB@@@AB@BB@@ADA@BB@BA@@B@@AACB@@@@B@@B@BFFABBB@@DB@@@@@@@B@@B@B@@@B@@ACA@BD@@EBA@BDAB@B@@@@@B@BA@@B@@A@@F@@@DG@BF@@@@@BB@@DB@@@@DB@@DBA@D@FBA@BDB@DA@@BB@@@B@@B@DB@@DC@@@@DA@@F@DC@@FA@@DA@@C@@@DA@BJ@@G@@BE@A@@J@B@BC@@BC@@FAD@@D@@A@@@DD@@DB@@DD@@@@JB@E@@D@@A@@JDA@@@FB@@@@B@DAB@@@@EB@@@@@DCB@D@@A@@AABBBC@ID@BAB@@ABAA@@ABCBABBBAB@@BBCD@@ABC@@@ABAB@BFBADCA@B@@@B@BABB@@BAB@@@@C@@BC@BD@B@@@DDD@DF@@F@H@BG@@BH@@D@@I@@BJ@@BI@@FC@@DA@@BB@@BBBBB@@AFC@A@AAC@C@@@@AE@E@AA@@@AAAA@@AA@@AC@@CA@CCA@@ECBC@GBA@@B@@@@B@@F@BD@@DD@@FE@@B@BG@ABABA@@@@BAA@B@BA@@B@B@@@@@FB@@@B@AB@H@@@@@DBBCB@@FB@DB@@@F@@AB@@DA@AB@BA@@B@BE@A@@D@@@@AB@B@@@B@BA@@@@BA@@@@BB@@BD@BHB@@@BB@B@D@@@FB@@B@@B@@A@CDB@@@DH@@FH@@B@DD@@DDB@A@CD@B@@@@C@@@BH@@AB@@EA@BC@@@@KA@CM@@C@AA@BC@ADBBE@@BCA@BE@@@@BAB@AHBBAB@@AFD@@ABABEA@BA@A@@@AB@@DDBADB@@AH@BDD@DB@BE@@BAB@@B@@@HAB@ACD@@DBDC@@F@DB@B@BA@BA@BBA@@BB@@BA@A@@H@BIBE@@DA@A@@A@@ADABCAABBFB@@BA@BB@D@@@BABAB@B@BB@@@@BB@@EB@@B@B@BB@FABA@A@ABB@D@@@@@B@B@@L@BB@@@DA@BBE@BFD@BBFB@BDB@F@@B@@BD@@@D@@AB@F@@AB@D@@@B@@@F@@C@ABF@@BB@@DABBF@@BD@@HD@@BB@@B@@@BD@@BBABBBD"],"encodeOffsets":[[118580,35404]]}}],"UTF8Encoding":true});}));