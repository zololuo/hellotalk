﻿/***
	包含以jquery为基础的基础应用全局数据
	liling 2013-09-16
***/ 
var CHAT_COUNT		=	{};	//用户聊天次数记录
var REPORT_USERINFO ={}	;//拉黑举报的用户信息
var DATE_SPLITE		=	'SHOWTIME';   //后台日期相差一天的间隔日期

var EXTERAL_TAB		=	{Uploadfile:true,iOSCrashReport:true};		//描述是否是外部标签
var WINDOW_TAB		=	{Todayinfo:true,'apc.php':true,'memcache.php':true ,'CityManager/worldmap':true};		//描述是否是浏览器标签
var HEAD_IMG_URL	=	'';		//头像URL
var CHAT_IMG_URL	=	'';		//聊天URL
var LAST_UPLOAD_IMAGE={};	//记录上次上传头像的URL信息
var MG_IMG_URL		=	'';		//后台小图片地址
var PATCH_TABLE 	=	'';		//需要额外ajax获取的数据表信息
var	APP_NAME 		= 	'/'+window.location.href.split('/')[3]+'/';	//保存的时候当前工程的名称 htmanager or htmanagertest
var SEARCH_URL 			=  APP_NAME+'userlist/search/';	
var THISTAB 		= 	'';
var CLIENT_LOG_PREFIX 	=	'http://www.nihao520.com/htmedia/clientlog/';
var LANGCODE 	= ["不限","English","Chinese","Chinese_tw","Chinese_gd","Japanese","Korean","Spanish","French","Portuguese","German","Italian","Russian","Arabic","Turkish","Persian","Azerbaijani","Thai","Indonesian","Malay","Tagalog","Vietnamese","Dutch","Danish","Finnish","Norwegian","Swedish","Catalan","Hebrew","Polish","Greek","Czech","Ukrainian","Romanian","Hungarian","Bulgarian","Croatian","Serbian","Slovak","Hindi","Afrikaans","Esperanto","Yiddish","Lithuanian","Urdu","Tamil","Bengali","Mongolian","Bosnian","Punjabi","Nepali","Albanian","Armenian","Basque","Belarusian","Cebuano","Estonian","Galician","Georgian","Gujarati","Haitian Creole","Hausa","Hmong","Icelandic","Igbo","Irish","Javanese","Kannada","Khmer","Lao","Latin","Latvian","Macedonian","Maltese","Maori","Marathi","Slovenian","Somali","Swahili","Telugu","Welsh","Yoruba","Zulu","Chinese_sh","Kurdish","Maithili","Malayalam","Oriya","Chewa","Malagasy","Sesotho","Myanmar","Sinhala","Sundanese","Kazakh","Tajik","Uzbek","Hokkien","Amharic","Flemish","Navajo","Kyrgyz","Frisian","Toki Pona","Ojibwa","Dakota","Apache","Choctaw","Xhosa","Tswana","Tsonga","Swazi","Venda","Ndebele"];

var LANGCODE_ch  = ['','英语','中文','中文(繁)','中文(粤)','日语','韩语','西语','法语','葡语','德语','意大利语','俄语','阿拉伯语','土耳其语','波斯语','阿塞拜疆','泰语','印尼语','马来语','塔加拉语','越语','荷兰语','丹麦语','芬兰语','挪威语','瑞典语','加泰罗尼亚语','希伯来语','波兰语','希腊语','捷克语','乌克兰语','罗马尼亚语','匈牙利语','保加利亚语','克罗地亚人语','塞尔维亚语','斯洛伐克人语','北印度语','南非荷兰语','世界语',' 依地语','立陶宛语','乌尔都语','坦米尔语','孟加拉人语','蒙古语','波斯尼亚','旁遮普语','尼泊尔语','Albanian','Armenian','Basque','Belarusian','Cebuano','Estonian','Galician','Georgian','Gujarati','Haitian Creole','Hausa','Hmong','Icelandic','Igbo','Irish','Javanese','Kannada','高棉语','老挝语言','拉丁语','Latvian','Macedonian','Maltese','Maori','Marathi','Slovenian','Somali','Swahili','Telugu','Welsh','Yoruba','Zulu','Chinese_sh','Kurdish','Maithili','Malayalam','Oriya','Chewa','Malagasy','Sesotho','Myanmar','Sinhala','Sundanese','Kazakh','Tajik','Uzbek','Hokkien','Amharic','Flemish',"Navajo","Kyrgyz","Frisian","Toki Pona","Ojibwa","Dakota","Apache","Choctaw","Xhosa","Tswana","Tsonga","Swazi","Venda","Ndebele"];

var SEXCODE =['女','男'];
var DEVICECODE = ['iOS','安卓'];
 
var COUNTRYCODE = {AF:"Afghanistan",UK:'England',AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua and Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BA:"Bosnia and Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",BN:"Brunei Darussalam",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos (Keeling) Islands",CO:"Colombia",KM:"Comoros",CG:"Congo (Republic)",CD:"Congo (DR) ",CK:"Cook Islands",CR:"Costa Rica",CI:"Cote D'Ivoire",HR:"Croatia",CU:"Cuba",CY:"Cyprus",CZ:"Czech Republic",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:"Falkland Islands (Malvinas)",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard Island and Mcdonald Islands",VA:"Holy See (Vatican City State)",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran, Islamic Republic of",IQ:"Iraq",IE:"Ireland",IL:"Israel",IT:"Italy",JM:"Jamaica",JP:"Japan",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",KP:"Korea, Democratic People's Republic of",KR:"Korea, Republic of",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Laos",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libyan Arab Jamahiriya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MK:"Macedonia",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia, Federated States of",MD:"Moldova",MC:"Monaco",MN:"Mongolia",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",AN:"Netherlands Antilles",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestinian",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RE:"Reunion",RO:"Romania",RU:"Russian Federation",RW:"Rwanda",SH:"Saint Helena",KN:"Saint Kitts and Nevis",LC:"Saint Lucia",PM:"Saint Pierre and Miquelon",VC:"Saint Vincent& Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome and Principe",SA:"Saudi Arabia",SN:"Senegal",CS:"Serbia and Montenegro",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia and the South Sandwich Islands",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SJ:"Svalbard and Jan Mayen",SZ:"Swaziland",SE:"Sweden",CH:"Switzerland",SY:"Syrian Arab Republic",TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",TL:"Timor-Leste",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad and Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks and Caicos Islands",TV:"Tuvalu",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",US:"United States",UM:"United States Minor Outlying Islands",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VE:"Venezuela",VN:"Viet Nam",VG:"Virgin Islands, British",VI:"Virgin Islands, U.s.",WF:"Wallis and Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe",AJ:'Azerbaijan',RS:'Serbia',XK:'Republic of Kosovo',SX:'AKA Saint Martin',ME:'Montenegro',TL:'Timor-Leste',SS:'South Sudan',JE:'Jersey',SB:'Solomon Islands',GG:'Guernsey',IK:'IK',AC:'AC',CW:'Curacao',AW:'Aruba',GU:'Guam'};

var COUNTRYCODE_CHINESE = {AA:'阿鲁巴',AD:'安道尔',AE:'阿联酋',AF:'阿富汗',AG:'安巴',AL:'阿尔巴尼亚',AM:'亚美尼亚',AN:'荷:安德列斯',AO:'安哥拉',AQ:'南极洲',AR:'阿根廷',AS:'东萨摩亚',AT:'奥地利',AU:'澳大利亚',AZ:'阿塞拜疆',Av:'安圭拉岛',BA:'波黑',BB:'巴巴多斯',BD:'孟加拉',BE:'比利时',BF:'巴哈马',BF:'布基纳法索',BG:'保加利亚',BH:'巴林',BI:'布隆迪',BJ:'贝宁',BM:'百慕大',BN:'文莱',BO:'玻利维亚',BR:'巴西',BS:'巴哈马',BT:'不丹',BV:'布韦岛',BW:'博茨瓦纳',BY:'白俄罗斯',BZ:'伯里兹',CA:'加拿大',CB:'柬埔寨',CC:'可可斯群岛',CD:'刚果',CF:'中非',CG:'刚果',CH:'瑞士',CI:'象牙海岸',CK:'库克群岛',CL:'智利',CM:'喀麦隆',CN:'中国',CO:'哥伦比亚',CR:'哥斯达黎加',CS:'捷克斯洛伐克',CU:'古巴',CV:'佛得角',CX:'圣诞岛',CY:'塞普路斯',CZ:'捷克',DE:'德国',DJ:'吉布提',DK:'丹麦',DM:'多明尼加:共',DO:'多米尼加:联',DZ:'阿尔及利亚',EC:'厄瓜多尔',EE:'爱沙尼亚',EG:'埃及',EH:'西撒哈拉',ER:'厄立特里亚',ES:'西班牙',ET:'埃塞俄比亚',FI:'芬兰',FJ:'斐济',FK:'福兰克群岛',FM:'米克罗尼西',FO:'法罗群岛',FR:'法国',FX:'法国-主教区',GA:'加蓬',GB:'英国',GD:'格林纳达',GE:'格鲁吉亚',GF:'法属圭亚那',GH:'加纳',GI:'直布罗陀',GL:'格陵兰岛',GM:'冈比亚',GN:'几内亚',GP:'瓜德罗普岛',GQ:'赤道几内亚',GR:'希腊',GS:'S.GeorgiaandS.SandwichIsls.',GT:'危地马拉',GU:'关岛',GW:'几内亚比绍',GY:'圭亚那',HK:'香港',HM:'赫德和麦克唐纳群岛',HN:'洪都拉斯',HR:'克罗地亚',HT:'海地',HU:'匈牙利',ID:'印度尼西亚',IE:'爱尔兰',IL:'以色列',IN:'印度',IO:'英属印度洋领地',IQ:'伊拉克',IR:'伊朗',IS:'冰岛',IT:'意大利',JM:'牙买加',JO:'约旦',JP:'日本',KE:'肯尼亚',KG:'吉尔吉斯',KH:'柬埔寨',KI:'基里巴斯',KM:'科摩罗',KN:'圣基茨',KP:'韩国',KR:'韩国',KW:'科威特',KY:'开曼群岛',KZ:'哈萨克斯坦',LA:'老挝',LB:'黎巴嫩',LC:'圣卢西亚',LI:'列支顿士登',LK:'斯里兰卡',LR:'利比里亚',LS:'莱索托',LT:'立陶宛',LU:'卢森堡',LV:'拉托维亚',LY:'利比亚',MA:'摩洛哥',MC:'摩纳哥',MD:'摩尔多瓦',MG:'马达加斯加',MH:'马绍尔群岛',MK:'马其顿',ML:'马里',MM:'缅甸',MN:'蒙古',MO:'澳门',MP:'北马里亚纳群岛',MQ:'法属马提尼克群岛',MR:'毛里塔尼亚',MS:'蒙塞拉特岛',MT:'马耳他',MU:'毛里求斯',MV:'马尔代夫',MW:'马拉维',MX:'墨西哥',MY:'马来西亚',MZ:'莫桑比克',NA:'纳米比亚',NC:'新卡里多尼亚',NE:'尼日尔',NF:'诺福克岛',NG:'尼日利亚',NI:'尼加拉瓜',NL:'荷兰',NO:'挪威',NP:'尼泊尔',NR:'瑙鲁',NT:'中立区(沙特-伊拉克间)',NU:'纽爱',NZ:'新西兰',OM:'阿曼',PA:'巴拿马',PE:'秘鲁',PF:'法属玻里尼西亚',PG:'巴布亚:新',PH:'菲律宾',PK:'巴基斯坦',PL:'波兰',PM:'圣皮艾尔',PN:'皮特克恩岛',PR:'波多黎各',PT:'葡萄牙',PW:'帕劳',PY:'巴拉圭',QA:'卡塔尔',RE:'法属尼留旺岛',RO:'罗马尼亚',RU:'俄罗斯',RW:'卢旺达',SA:'沙特阿拉伯',SC:'塞舌尔',SD:'苏丹',SE:'瑞典',SG:'新加坡',SH:'圣赫勒拿',SI:'斯罗文尼亚',SJ:'斯瓦尔巴特',SK:'斯洛伐克',SL:'塞拉利昂',SM:'圣马力诺',SN:'塞内加尔',SO:'索马里',SR:'苏里南',ST:'圣多美',SU:'前苏联',SV:'萨尔瓦多',SY:'叙利亚',SZ:'斯威士兰',Sb:'所罗门群岛',TC:'特克斯和凯科斯群岛',TD:'乍得',TF:'法国南部领地',TG:'多哥',TH:'泰国',TJ:'塔吉克斯坦',TK:'托克劳群岛',TM:'土库曼斯坦',TN:'突尼斯',TO:'汤加',TP:'东帝汶',TR:'土尔其',TT:'千里多巴哥',TV:'图瓦卢',TW:'台湾',TZ:'坦桑尼亚',UA:'乌克兰',UG:'乌干达',UK:'英国',UM:'美国海外领地',US:'美国',UY:'乌拉圭',UZ:'乌兹别坦',VA:'梵蒂岗',VC:'圣文森特',VE:'委内瑞拉',VG:'英属维京:岛',VI:'美属维京:岛',VN:'越南',VU:'瓦努阿鲁',WF:'瓦里斯和福图纳群岛',WS:'西萨摩亚',YE:'也门',YT:'马约特岛',YU:'南斯拉夫',ZA:'南非',ZM:'赞比亚',ZR:'扎伊尔',ZW:'津巴布韦',AJ:'阿塞拜疆',RS:'塞尔维亚',PS:"巴勒斯坦",XK:"科索沃",SX:'AKA圣马丹',ME:'黑山:共',TL:'东帝汶',SS:'南苏丹:共',JE:'泽西岛',SB:'所罗门群岛',AC:'AC',IK:'IK',GG:'格恩西岛',CW:'库拉索',AW:'阿鲁巴岛',GU:'关岛'};

var ALLCOUNTRY = ['CN','KR','US','JP','BR','RU','TR','MX','IT','FR','SA','TH','TW','ES','IN','CO','DE','CA','GB','EG','ID','PH','VN','HK','IR','AU','IQ','MY','MA','SY','SV','GT','SG','UK','UA','HN','KZ','CL','EC','PE','PR','VE','DO','NL','AE','JO','PK','NP','BE','SE','DZ','AR','KW','CH','YE','CR','IL','NO','BD','LB','KH','DK','PL','CU','AF','AZ','PS','IE','OM','NZ','LY','BH','AT','SD','QA','UZ','RO','BY','MN','PT','AM','BO','TN','HU','LK','FI','MM','KG','AJ','NI','MO','ZA','AL','GR','NG','GE','BG','LA','PA','RS','CZ','MD','TJ','SO','HT','JM','LT','CY','TM','UY','PY','IK','SK','LV','GH','HR','BA','SN','TT','MK','EE','CI','KE','AO','CM','ET','BN','BT','LU','BS','MV','ER','TZ','XK','MU','ML','SI','SX','MR','MG','ZW','CG','GA','GN','IS','GY','FJ','TD','BZ','CV','BB','DJ','DM','ZM','GM','BJ','SR','MT','TG','ME','NA','BW','UG','AD','CD','BF','AN','FM','MC','LR','KP','NE','MZ','WS','GQ','FO','LC','SL','GL','SM','AG','RW','GD','KM','TL','BI','TV','SZ','VC','SS','MH','TO','AC','MW','KN','CK','PG','JE','CF','GW','ST','PW','NR','SC','KI','LI','SB','GG','LS','VU','NU'];


var LANG_DES	=	{Afrikaans:["af","南非荷兰语"],Albanian:["sq","阿尔巴尼亚语"],Arabic:["ar","阿拉伯语"],Armenian:["hy","亚美尼亚语"],Azeri:["az","阿泽里语"],Basque:["eu","巴斯克语"],Belarusian:["be","白俄罗斯语"],Bulgarian:["bg","保加利亚语"],Catalan:["ca","加泰罗尼亚语"],Chinese:["zh","中文（简体）"],Chinese_tw:["zh-tw","中文（繁体）"],Chinese_gd:["zh-gd","中文（粤语）"],Croatian:["hr","克罗地亚语"],Czech:["cs","捷克语"],Danish:["da","丹麦语"],Dhivehi:["div","马尔代夫语"],Dutch:["nl","荷兰语"],English:["en","英语"],Estonian:["et","爱沙尼亚语"],Faroese:["fo","法罗语"],Farsi:["fa","波斯语"],Finnish:["fi","芬兰语"],French:["fr","法语"],Galician:["gl","加利西亚语"],Georgian:["ka","格鲁吉亚语"],German:["de","德语"],Greek:["el","希腊语"],Gujarati:["gu","古吉拉特语"],Hebrew:["he","希伯来语"],Hindi:["hi","印地语"],Hungarian:["hu","匈牙利语"],Icelandic:["is","冰岛语"],Indonesian:["id","印度尼西亚语"],Italian:["it","意大利语"],Japanese:["ja","日语"],Kannada:["kn","卡纳达语 印度"],Kazakh:["kk","哈萨克语"],Konkani:["kok","贡根语"],Korean:["ko","朝鲜语"],Kyrgyz:["ky","吉尔吉斯语"],Latvian:["lv","拉脱维亚语"],Lithuanian:["lt","立陶宛语"],Macedonian:["mk","马其顿语"],Malay:["ms","马来语"],Marathi:["mr","马拉地语"],Mongolian:["mn","蒙古语"],Norwegian:["no","挪威语"],Polish:["pl","波兰语"],Portuguese:["pt","葡萄牙语"],Punjabi:["pa","旁遮普语"],Romanian:["ro","罗马尼亚语"],Russian:["ru","俄语"],Sanskrit:["sa","梵语"],Slovak:["sk","斯洛伐克语"],Slovenian:["sl","斯洛文尼亚语"],Spanish:["es","西班牙语"],Swahili:["sw","斯瓦希里语"],Swedish:["sv","瑞典语"],Syriac:["syr","叙利亚语"],Tamil:["ta","泰米尔语"],Tatar:["tt","鞑靼语"],Telugu:["te","泰卢固语"],Thai:["th","泰语"],Turkish:["tr","土耳其语"],Ukrainian:["uk","乌克兰语"],Urdu:["ur","乌尔都语"],Uzbek:["uz","乌兹别克语"],Vietnamese:["vi","越南语"],Zulu:["zl","祖鲁语"]};
 
var reportError = function(op){
	$.post(window.APP_NAME+'Report/jsError',op);
	$('#progressBar').hide();
	$('#background').hide();
}
window.onerror = function(
  errorMessage,
  scriptURI,
  lineNumber,
  columnNumber,
  error
) {
	if(error && error.message){
		errorMessage=error.message;
	}
    reportError({
      message: errorMessage,
      script: scriptURI,
      lineno: lineNumber,
      columnno: columnNumber
    });
 
}