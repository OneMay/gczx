(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('沧县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"130921","properties":{"name":"沧县","cp":[117.007478,38.219856],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@BBBAF@B@B@B@D@DBB@D@@@B@B@B@BAF@D@D@BAB@BBB@B@@@@@D@@@F@F@B@B@BABCFFBJDBH@B@@@@DJFFBBD@DADIBGFE@A@@BADAB@DGH@DD@@PB@GBC@@BBDBRAAJB@BA@ABC@@B@@BB@@FBBHBJHNDBB@BBBVDJDFA@@NDVFD@PD@C@AF@DBDF@H@DBDABGA@D@DDBNDBBB@PJXFHBNBNFNJHHTFFGFGBG@AAQ@IBGFKFEB@BAJEDANI@@@@@@HM@CEKIMCGAAAAEEIWIU@C@G@GDMDKDM@EDMBUIIAAQK@KN[XKLEDAFE@A@C@A@C@CBC@C@E@@FGBAD@@@N@RARGFCDCAEEUEOAAHMBAEE@MAMACCG@ACM@@@OBMEGKMGIIGGK@@@EAIACBK@@@@@C@ABGJ[AAGBAABE@EBABAFAJ@@A@AHBBDHABCJBBADAFKASEBU@@DCECEA@@AABEDA@@MA@AFA@CC@@CEBCCCC@AA@ABA@A@E@CM@ACC@@D@@S@ACEBAA@GACO@@@BCG@BJCFEAOCMAOCQCEACCA@DEIEOIEEECAAGAWGAAAB@BABA@KBAABEA@C@ABEBA@C@@@DAACE@ECC@AE@AC@A@AB@@Q@EC@K@@E@@FG@ACC@ADI@BABCBC@@C@O@@B@DAB@BFB@D@@@@@@G@AHABC@BJC@A@E@@@A@ED@FBFI@A@ABMBC@K@A@AIEAEBADA@GAaBCJCLBJ@FEBABABDF@FDBBDBP@FG@ABCAAAKEE@E@CBADE@GB@BA@IBIAI@AACAACBCC@MBC@C@BGA@G@CBAB@BI@@HDBBABDAJ@BEA@FCFADGDBF@@MFCBEBE@CEODDFMDA@C@CBCBADBDA@BB@@BB@@@D@BADEDCEA@ABDDABWH@BIKEGA@GBEBCBEGQFEDEBABCA@D@B@BI@@@ABM@ABAD@D]HDBIBICABA@EDAD@DDD@B@@@@A@@FBBD@@@@DC@ABADICKCEAC@CAA@G@A@@B@@ABCCAB@B@AA@C@E@EAE@A@CAKEC@GBCDEAAABAAGEC@A@D@@KBE@E@A@A@I@@C@ADAAAEC@@BA@AAAAAAA@@C@E@A@C@C@EAAAE@CAE@A@E@GA@AG@@@ABEAC@@@ECA@CCAACDEAABAHBLM@BH@@@@BXE@@B@BG@KAA@E@DB@B@@@BC@@N@@G@@JCJB@F@D@BBBJBD@BC@DFEDKDFBEFCD@B@BMBO@ADADA@CBAAABCBCAAA@@@@KAA@CAABAD@FBDDBBHF@BD@DBBBH@DA@DN@D@@@B@B@FADBHA@C@@FA@@@@BBJ@DBLBH@B@HH@@FFABDHA@HBFJABB@DF@B@BF@BC@@DD@FAB@BFFAD@@BBD@@@BDFDNBL@B@@@H@N@D@JFHB@LHRDP@B@NBHD@@@@NFBBDHBFBDFFDDVFLAFEDAFIBCFINBFAL@@EBBBBF@@FDD@@D@@FHHJ@L@HBNBBADAH@BB@@@AAIH@@EB@HC@E@@AGBABA@@BC@AFCFA@GDBDBD@JBDEDAHD@CHBFDDBLBPDL@PBD@TDDBFBDBDBJHHHB@FDDFB@HBJ@BA@A@@HAHADAAA@@HE@CJABAAAB@FAF@FJDBFBDABAB@TBB@@BB@@@@@BHB@@BJBD@DB@BCFB@B@FDJAAAACLEBDBAACBEXGDAMI@AB@AAECUO@@AACKCCA@CDAECE@ACEAECEAA@@@CAAAAACAA@AA@ACIGCCC@AACACACA@@CCAEAA@E@@ACDC@C@A@A@AA@BABA@@BEFA@EKAC@AAAAAA@@AA@A@AA@GAA@@@@A@AB@@EF@@CACACB@D@BA@@AGB@LBCGA@GCCBAACGI@A@AA@E@A@ABAH@AEf@H@@GC@C@AKGBAEAEAC@@CGCBAAAEFACKACCECIKQJC@EVIB@DDB@BBBBB@B@B@D@@@BBABAB@BA@BD@BB@BBFBD@BBBB@B@BBBB@BBBAD@FAB@B@BB@BB@@BAB@BAB@DA@@BBB@BBBBBFBB@BD@B@D@@BB@BB@BBBBB@BBBAB@BABA@A@A@A@AB@BAB@D@DBB@B@B@BAB@BAB@@AB@DAB@@@BBAF@BB@@@B@FAB@@B@@B@@BBBBDFDBB@@@@@BA@A@G@AB@@@B@@@BDBDBB@@BCBADAB@B@B@BBB@@D@L@@@BB@@@BCDF@@BF@B@@DC@BFBBF@@KAAH@B@B@@AB@D@@EHA@AGAAIIAAABA@CT@HACOD@D@@AB@B@DDB@HAB@D@D@@@BB@@@@@B@BB@B@D@B@DB@@HBDB@VOB@B@BJ@NABDBBZOBCDBFBHDB@F@J@LBFDFBHDLDD@BAPDLDDBD@HHAFFDBDBBOZ@DCFELJBCJSAMCgQBIEAEAEC@F@BABEC@B@TJ@AJ@@@B@DFJBBF@A\\HDDB@@gJIBCB@B@F@LGBBHE@C@CEKBEDIA@BCBI@CDG@@DA@AEA@@@C@BEACGBCBBGJAAAE@AEAEEBCBE@CAEBCDEB@BABADAB@B@@BB@@D@H@D@B@@@DABA@AB@BB@@@B@D@BABC@ABCBABAB@@@B@F@BB@BBB@D@B@B@BB@@@B@B@D@D@B@BBBB@@BDBBBBB@@@B@BA@GH@@B@@@BBD@D@BBB@B@BD@@@BA@ABE@@B@@@DDD@BBDBDBB@@@B@@ABAB@@@@BBBDBB@B@@@BA@CB@BAB@@@B@BB@@@H@BB@@@B@@ABABCDCB@BBB@BBDB@@D@@"],"encodeOffsets":[[119698,39361]]}}],"UTF8Encoding":true});}));