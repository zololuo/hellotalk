/***
	包含以jquery为基础的基础应用函数
	liling 2013-09-16
***/
var change_float_position = function(tar,tri){  
		 var top		=	$(this).offset().top - 210;	
		 $(tar).css({top:top});
}

var send_ajax = function(url,arg,successCall,action){
		$.ajax({
				type: action||"post",
				url:  APP_NAME+url,
				data: arg,
				async: true,
				success: successCall
			}); 
}
	//HT对象描述，统一异步加载
	var HT = {
		tabletr		:'',
		page		: '',
		option		:{userid:'',table:'device,state'},
		startPatch 	: function(options,page){
			//配置userid
			
			this.option = $.extend({userid:'',table:'device,state'},options);
			this.page	= $(this.option.page).size()>0?$(this.option.page):THISTAB;
			var ALL_UDID=	[];
			if(!this.option.userid){
				var userid	=	new Array();
				this.page.find('.userbox').each(function(){
					var id	=	$(this).attr('id'); 
					userid.push(id);
					var deviceid 	=$(this).find('.DEVICEID').text()
					ALL_UDID.push(deviceid);
				 
				});
				this.option.userid	= 	userid.join(',');
			}
			
			if(this.option.userid.length < 1 || this.option.table.length < 1)	return;
			//关闭加载状态
			$.global(false);
			//接收异步加载的数据处理函数
			
			var	$this		=  this;
			var get_patch_Data = function(data){
				$.global(true); 	//开启全局图标
				if(data){
					var table_arr 	=	$this.option.table.split(',');
					var table_num	=	table_arr.length;
					var dic_data		=	arr_to_key(data,'USERID'),i=0;
					 
					if(table_arr.indexOf('device')<0){ 
							$this.patch_device_deleted($this.page,ALL_UDID);
					}
					var start=(new Date()).getTime(); 
					//多重函数调用
					console.log(table_num);
					for( i = 0 ;i< table_num;i++){
							var $callback = 'handle_'+table_arr[i]; 
							console.log($callback);
							 if ($.isFunction($this[$callback]))	 
								$this[$callback](dic_data,$this);
							//$callback(data);

					}
					var end	=	(new Date()).getTime();
					log('start '+ start);					log('start2 '+ end);
					var cost 	=	 parseInt(end)-parseInt(start);
					log('time cost'+ cost);
					//图标区域的浮动提示
					$('.icon_area img',$this.page).powerFloat({
						target: function() {
							var Ob= $(this).parent().parent().find('.icon_area_des .'+$(this).attr('class'));
							return Ob;
						},
						eventType: "click",
						showCall:change_float_position,
						position: "4-1"
					});
				}
				
				if($.isFunction(options.callback)){
					options.callback();  
				}
			};
			
			send_ajax(
			"userinfo/getuserinfo/",
			{userid:this.option.userid, table:this.option.table},
			get_patch_Data
			); 
				
		},
		//用户设备信息的展现
		handle_device : function(data,obj){
				log('start handle device');
				var field 	=	['VERSION','OSLANG','OSVERSION','DEVICEDETAIL','DEVICEID','TERMINALTYPE'];
				var tr 		=	'',userid	=	'',i=0;
				var ALL_UDID=	[];
				obj.page.find('.userbox').each(function(){
					userid	=	$(this).attr('id');
						if(!data[userid]){
							return true;
						}					
					for(i=0;i<field.length;i++){
						$(this).find('.'+field[i]).text(data[userid][field[i]]);
					};
					ALL_UDID.push(data[userid]['DEVICEID']);
					
					//添加越狱判断
					if( 1 == data[userid]['JAILBREAK']){
						$('.TERMINALTYPE',this).parent().attr('jailbreak',1);	
					}
					
					
				});
				   
				//对被禁止的设备，高亮
				obj.patch_device_deleted(obj.page,ALL_UDID);
				 
				
				change_device(obj.page.get(0)); 
		},
		patch_multi_device	:function(page,ALL_UDID){
			 var all_udid	=	ALL_UDID.toString();
			 if(all_udid.replace(/[,]+/,'').length < 2)	return;
			 
			 $.global(false); 
			 send_ajax('userinfo/multi_device',{udid:all_udid},function(data){
					$.global(true);
					if(!data)	return false;
					console.log('aa');
					console.log(data);
					var key_device_id	= arr_to_key(data,'DEVICEID'); 
					
					console.log(key_device_id);
					var DeviceStatus	=	{COUNTOPEN:'countOpen.png',RELEASECOUNT:'releaseRegister.png',REGISTERBAN:'registerBan.png'};
					
					$('.DEVICEID',page).each(function(){
						var my_device	=	key_device_id[$(this).text()];	
						var des 		=	$(this).parent().find('.TERMINALTYPE');
						// console.log('device');
						// console.log(my_device);
						if(my_device && my_device.DEVICEID){ 
							var red =	''; 
							var $parent = $(this).parent();
							
							$parent.attr(my_device);
							for(var key in DeviceStatus){
								if( my_device[key] && my_device[key]>0){
									var URL = MG_IMG_URL+DeviceStatus[key];
									$parent.append($('<img>').attr({"src":URL,class:key,width:'15px',height:'15px',}));
								}
							}
							if(my_device.LOGINCOUNT>1){
								red = 'class="red"';
							}
							var regCount	=	parseInt(my_device.REGISTERCOUNT),
							loginCount		=	parseInt(my_device.LOGINCOUNT);
							if(regCount == 1 && regCount==1){
								return true;
							}
							des.html('<b '+red+' >'+des.html()+' R:'+regCount+', L:'+loginCount+'</b>');
							
						}else if ( my_device && my_device.DEVICEID ==""){
							des.html('<b class="red" >设备ID为空</b>');
						}
					});
						
				});
		},
		patch_device_deleted:function(page,ALL_UDID){
			 //加载当前页面用户是否多设备
	 
			this.patch_multi_device(page,ALL_UDID);
			 
			
			 var all_udid	=	ALL_UDID.toString();
			 if(all_udid.replace(/[,]+/,'').length < 2)	return;
			  $.global(false);
			 send_ajax('userinfo/get_blocked_device',{udid:all_udid},function(data){
					$.global(true);
					if(!data)	return false;
						var key_device_id	= arr_to_key(data,'DEVICEID'); 
						$('.DEVICEID',page).each(function(){
							var my_device	=	key_device_id[$(this).text()];	
							if(my_device){
								$(this).parent().addClass('device_deleted');
								$(this).parent().append($('<span>').html('BANTIME:'+my_device.BANTIME.str_timezone()));
								
								
							}
							
						});
						
				});
		},
		//用户在线状态的展示
		handle_state : function(data,obj){
				log('start handle online state');
				var timearr = {d:86400,h:3600,m:60,s:1},
				date	= new Date(),
				tr 		= '',
				index	= 0,cols=5,
				online_state = new Array();  
				online_state[0]	 = '<img src="'+MG_IMG_URL+'offlineuser.gif"/>';
				online_state[1]	 = '<img src="'+MG_IMG_URL+'onlineuser.gif"/>';
				online_state[2]	 = '<img src="'+MG_IMG_URL+'offlineuser.gif"/>';
				online_state[3]	 = '<img src="'+MG_IMG_URL+'offlineuser.gif"/>';
				
				obj.page.find('.userbox').each(function(){
					userid	=	$(this).attr('id');
						if(!data[userid]){
							return true;
						}					
					if(!data[userid].LASTACTIVE) return true; 
					var ret =	obj['time_ago'](data[userid].LASTACTIVE,8);
	 
					if(ret)	$(this).find('.onlinestate').html(online_state[data[userid]['STATE']]+' '+ret); 
				}); 
		},
		handle_setting : function(data,obj){
			console.log(data);
			var cols	=	5;
			var	Arr_fn	= {EXACTMATCH:function(val){
						tr.find('.icon_area_des .EXACTMATCH').html('开启的精确匹配');
			},HIDESELF:function(val){
						tr.find('.icon_area_des .HIDESELF').html('开启的自我隐藏，打开时间为'+val['HIDESTART']+' 隐藏时间 ' +val['HIDEDAYS']);
			},DNDSET:function(val){
						tr.find('.icon_area_des .DNDSET').html('开启了免打扰，时间段是'+val['DNDSTART']+' - ' +val['DNDEND']);
			},STOPLOCATE:function(val){
						tr.find('.icon_area_des .STOPLOCATE').html('停止定位更新');
			},ONCEMODIFIED:function(val){
						tr.find('.icon_area_des .ONCEMODIFIED').html('一次修改头像');
			},SAMEGENDER:function(val){
						tr.find('.icon_area_des .SAMEGENDER').html('同性别找到我');
			}};
			var	imgArr	={EXACTMATCH:'exactmatch.jpg',HIDESELF:'selfhide.jpg',DNDSET:'dndset.png',STOPLOCATE:'stoplocation.jpg',ONCEMODIFIED:'oncemod.jpg',SAMEGENDER:'SAMEGENDER.jpg'};
			  
			 var tr = '',userid=''; 
				obj.page.find('.userbox').each(function(){
					tr		=	$(this);
					userid	=	$(this).attr('id'); 
						if(!data[userid]){
							// return true;
						}					
					for( var key2 in imgArr){ 
						if(data[userid][key2] == 1){ 
								obj['add_img_des'](this,key2,'',imgArr[key2],'');
								$(this).find('.icon_area_des').append('<div class='+key2+'></div>');
								Arr_fn[key2+''](data[userid]);
								
						}
					}
				}); 
			  
		},
		handle_buy_trans:function(data,obj){
			var type 	=	{0:'',1:'一个月翻译',2:'一个月翻译(自动续费)',3:'年费翻译',4:'三个月翻译',11:'一个月翻译礼物',12:'三个月翻译礼物',13:'一年翻译礼物'},userid='',img_des='';
			var dt	=	(new Date());
			obj.page.find('.userbox').each(function(){
			userid	=	$(this).attr('id');
						if(!data[userid]){
							return true;
						}			
			if(data[userid]['BUYITEM']>0){
				var tt = new Date();
				tt.setTime(tt.strtotime(data[userid]['BUYCREATETIME'])*1000+8*3600000)
				dt.setTime(data[userid]['BUYEXPIRETIME']*1000);
				img_des	=	'<div class="BUY">购买'+type[data[userid]['BUYITEM']]+' 于 '+tt.format('yyyy-M-d H:mm:s')+' <br>到期时间:'+dt.format('yyyy-M-d H:mm:s')+ '</div>';
				var left_day	=	parseInt((dt.getTime() - (new Date()).getTime())/86400000);
				obj['add_img_des'](this,'BUY',img_des,'BUY'+data[userid]['BUYITEM'],left_day);
			}
			});
			
		},
		handle_block_state:function(data,obj){ 
			var field 	=	{BUYBLOCK:"购买",MESSAGEBLOCK:"发言",PICBLOCK:"发图片",LOGINBLOCK:"登录",BLOCKFILTER:"自定义搜索",BLOCKRECOMMEND:"系统推荐"},userid='',img_des='';
			var tt = new Date();
			obj.page.find('.userbox').each(function(){
					userid	=	$(this).attr('id');
					
					if(!data[userid]){
						return true;
					}
					
					for(var key in field){
						if(data[userid][key]=='1'){ 
							tt.setTime(tt.strtotime(data[userid]['LASTBLOCKTIME'])*1000+8*3600000);
								img_des	=	'<div class='+key+'>用户被'+data[userid]['BLOCKOPERATOR']+' <br>于 '+tt.format('yyyy-M-d H:mm:s')+'被禁止'+field[key]+','+data[userid]['BLOCKREASON']+'</div>' 
							obj['add_img_des'](this,key,img_des)
						}
					}
			});
		},
		handle_count_info:function(data,obj){
			var field 	=	{ALLCOUNT:"总收藏语句",SINGLECOUNT:"收藏单句",TRANSLATECOUNT:"翻译次数"},userid='',img_des='';
			var tt = new Date();
			obj.page.find('.userbox').each(function(){
						userid	=	$(this).attr('id');
						if(!data[userid]){
							return true;
						}
						if(parseInt(data[userid]['ALLCOUNT'])>0){
							tt.setTime(tt.strtotime(data[userid]['COUNTINFOUPDATETIME'])*1000+8*3600000);	
							img_des	=	'<div class= ALLCOUNT >用户总收藏语句= '+data[userid]['ALLCOUNT']+' 收藏单句='+data[userid]['SINGLECOUNT']+' <br>更新 '+tt.format('yyyy-M-d H:mm:s')+'</div>';
							 
							 obj['add_img_des'](this,'ALLCOUNT',img_des,0,data[userid]['ALLCOUNT']);
						}
						
						if(parseInt(data[userid]['TRANSLATECOUNT'])>0){ 
							 
							$(this).find('.icon_area .TRANSLATECOUNT').after(data[userid]['TRANSLATECOUNT']);
							
							img_des	=	'<div class= TRANSLATECOUNT >使用翻译次数= '+data[userid]['TRANSLATECOUNT']+', 总次数='+data[userid]['TOTALTRANSCOUNT']+'</div>';
							var over20_transcount = parseInt(data[userid]['TRANSLATECOUNT'])/20,
							all_transdcount = parseInt(data[userid]['TOTALTRANSCOUNT']);
							var img_side_des = '<b>'+over20_transcount+'</b>－'+all_transdcount;
							obj['add_img_des'](this,'TRANSLATECOUNT',img_des,0,img_side_des);
						}
						
						var transEngine 	=	parseInt(data[userid]['TRANSLATEENGINE']);
						var scriptionEngine =	parseInt(data[userid]['TRANSCRIPTIONENGINE']);
						
						var engineImg	=	{translate:['translate_google.jpg','translate_googleapi.jpg','translate_bing.jpg'],
											translateText:['googleweb','googleapi','bing'],
											transcriptionText:['google','iflytek','nuance'],
											transcription:['transcription_google.jpg','transcription_iflytek.jpg','transcription_nuance.jpg']};
					 
						if(transEngine>=0 && transEngine<=2){
							img_des = '<div class= TRANSLATEENGINE >翻译引擎:'+engineImg.translateText[transEngine]+'，文字:'+data[userid]['TOTALTRANSCOUNT']+'，音译:'+data[userid]['TRANSLITERATIONCOUNT']+'，朗读:'+data[userid]['READCOUNT']+'</div>';
							obj['add_img_des'](this,'TRANSLATEENGINE',img_des,engineImg.translate[transEngine]);
						}
						
						if(scriptionEngine>=0 && scriptionEngine<=2){
							img_des = '<div class= TRANSCRIPTIONENGINE>语音引擎:'+engineImg.transcriptionText[scriptionEngine]+'，语音:'+data[userid]['TRANSCRIPTIONCOUNT']+'，朗读:'+data[userid]['READCOUNT']+'</div>';
							obj['add_img_des'](this,'TRANSCRIPTIONENGINE',img_des,engineImg.transcription[scriptionEngine]);
						}
						
			});
		},	

		handle_device_status : function(data,obj){ 
		
				var PUSH	=	{1:'Badge',2:'Sound',4:'Alert'};
			 
				var pushDes 	=	{	
								0:{imgurl:'pushclose.png',des:'推送没有打开'},
								1:{imgurl:'pushhalf.png',des:'推送 Badge'},
								2:{imgurl:'pushhalf.png',des:'推送 Alert'},
								3:{imgurl:'pushhalf.png',des:'推送 Sound+Badge'},
								4:{imgurl:'pushhalf.png',des:'推送 Alert'},
								5:{imgurl:'pushhalf.png',des:'推送 Badge+Alert'},
								6:{imgurl:'pushhalf.png',des:'推送 Sound+Alert'},
								7:{imgurl:'pushopen.png',des:'推送全开'}
								};
				obj.page.find('.userbox').each(function(){ 
					var userid	=	$(this).attr('id');
						if(!data[userid]){
							return true;
						}					
					var pushVal	 =	data[userid].PUSH;
					if( typeof pushVal !=='string'){
						return true;
					}
					if(pushVal < 0 || pushVal>7){
						obj['add_img_des'](this,'PUSH','推送值错误','pushclose.png');
						return true;
					}					
					var updateTime 	= data[userid].MG_DEVICE_STATUS_UPDATETIME?data[userid].MG_DEVICE_STATUS_UPDATETIME.str_timezone(8):'';
					var DES = '<div class= PUSH >'+pushDes[pushVal].des+':'+updateTime+'</div>';
					obj['add_img_des'](this,'PUSH',DES,pushDes[pushVal].imgurl);
				});
		},
		add_img_des:function(obj,classname,des,imgurl,img_side_des){
				if(!imgurl)	imgurl	=	classname;
				if( -1 == imgurl.indexOf('.') ){
					imgurl 	=	imgurl + '.JPG';
				}
				if(img_side_des==undefined)	img_side_des	=	'';
				$(obj).find('.icon_area').append("<img style='width: 15px;' class='"+classname+"'  src='"+MG_IMG_URL+imgurl+"'>"+img_side_des);
				$(obj).find('.icon_area_des').append(des); 
		},
		time_ago:function(stamp,timezoneadd){
				var date 	= new Date() ,
				timearr={d:86400,h:3600,m:60,s:1},
				now	= (date.getTime()/1000);
				if(!timezoneadd)	timezoneadd = 8;	//默认添加时区
 
				if(!isDigit(stamp) ){
					stamp = date.strtotime(stamp); 
					stamp	+=	3600*timezoneadd;
				} 
				
				var	time_exp	= now	-	 stamp;
				time_exp	=	time_exp< 0 ? 0 : time_exp;
					for( var key2 in timearr){
						var c = time_exp/timearr[key2];
						if(  c > 1 ){
							c = Math.round(c*10)/10;
							return c+''+key2;
						}
					}				
				return false;
		},
		
		TipArr:[],
		add_tip:function(func){
			var  length = arguments.length;
			for ( var i = 0; i < length; i++ ) {
				this.TipArr.push( arguments[i]);
				$( arguments[i]);
			}
		},
		show_tip:function(){
			for(var i =0 ; i < this.TipArr.length;i++){
				$(this.TipArr[i]);
			}
		}
	};
	
 
	var decToHex = function (str) {
	    var res = [];
	    for (var i = 0; i < str.length; i++)
	    res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
	    return "\\u" + res.join("\\u");
	}
	
	var hexToDec = function (str) {
		if(str == null || str == "")return "";
	    str = str.replace(/\\/g, "%");
	    return unescape(str);
	}
	
	//Jquery 扩展函数
;(function($)
{
    $.extend({
		global:function(ok){
			$.ajaxSetup({ global: ok });
		},
        urlGet:function(key,def) {
            var aQuery = window.location.href.split("?");//取得Get参数
            var aGET = new Array();
            if(aQuery.length > 1){
                var aBuf = aQuery[1].split("&");
                for(var i=0, iLoop = aBuf.length; i<iLoop; i++){
                    var aTmp = aBuf[i].split("=");//分离key与Value
                    aGET[aTmp[0]] = aTmp[1];
                }
            }
			if(key =='*')			return aGET
		 var start = def;
		 if(  aGET.length < 1 && aGET.hasOwnProperty(key) )	 {
			 start = aGET[key];
		 } 
		  return start;
        },        
		urlGetExcept:function(key,def){	//取得get参数中除了某项的值
            var aQuery = window.location.href.split("?");
            var aGET	 = new Array();
			 var aBuf	='';
            if(aQuery.length > 1)   {
                  aBuf = aQuery[1];
				var start = aBuf.indexOf(key);
				if(start == -1)	return aBuf;
				var end = aBuf.indexOf('&',start);
				var len = end - start;
				if(end == -1){ 
					len = aBuf.length - start;
					start--;
				}
				
				var reg = new RegExp(aBuf.substr(start,len+1));
				aBuf = aBuf.replace(reg,'');
				aBuf = aBuf.replace(/undefined/,'');
				return aBuf;
            }
			return def;
        },
		key_fn:[],			//存放绑定的字符对应的函数
		key_code:[],		//存放字符
		input_mod:false,
		Handel_input_conflict:function(){
			var input = $('textarea,:text');
			input.focus(function(){$.input_mod	= true;log(' focus ');});
			input.blur(function(){$.input_mod	= false;log(' blur ');});
		}, 
		key_bind:function(ch,callback,obj){
				var KeyCode = {a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,esc:27,enter:13,ctrl:17};
					log('bind key='+ch);
					log('KeyCode.hasOwnProperty '+KeyCode.hasOwnProperty(ch));
				
				if(KeyCode.hasOwnProperty(ch)){
					 $.key_fn.push(callback);
					 $.key_code.push(ch);
					 
					 if($.key_fn.length == 1){ 
						$(document).keydown(function(e){
							if($.input_mod)	return;
							var e = event || window.event; 
							var k = e.keyCode || e.which; 
							
							 for(var i =0 ; i < $.key_fn.length ;i++){
								 // - 32 兼容小写
								if(k-32 == KeyCode[$.key_code[i]] || k == KeyCode[$.key_code[i]] ){
									log('pressed binded key '+k);
									$.key_fn[i]();
									break;
								}
							}
							
						});
					}
				}else
				{
					htalert('绑定事件只能是字母');
				}
		},
		removecss:function(str){
						
		},//将请求参数字符串化
		unserialize:function(data){
			if(!data)	return '';
			if(typeof data == 'string')	return data;
 
			if(typeof data == 'object') return $.param(data);
			var	anchor	=	'';
			for(var i=0;i<data.length;i++){
					if(data[i].value!='' && data[i].name!='_' && data[i].name.indexOf('URL')==-1 && data[i].value!='Array'){
						anchor	+=	'&'+data[i].name+'='+data[i].value;
					}
			}
			return anchor.trim('&');
		
		},
		
		
    });
})(jQuery);  

$.fn.extend({
	smartFloat : function(fnout,fnin) {
		var position = function(element) {
			var top = element.position().top, pos = element.css("position");
			$(window).scroll(function() {
				var scrolls = $(this).scrollTop();
				if (scrolls > top+90) {
				
						if(element.css('position')!='fixed'){
							element.css({
								position: "fixed",zIndex:'499',width:"2000px",
								top: 0
							}); 
							fnout(element);
						}
				}else {
					if(element.css('position')!='relative'){
						element.css({
							position: "relative",zIndex:'499',width:"auto",
							top: top
						}); 
						fnin(element);
					}				
				}
			});
		};
		return $(this).each(function() {
			position($(this));                         
		});
	},

		bind_voc :function(type){
			if(!type)	type = 'chat';
			
			
			function pv_q(u, w, h){
				var pv='';
				pv += '<span class="vocplayer"   ><object width="'+w+'" height="'+h+'" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab">';
				pv += '<param name="src" value="'+u+'">';
				pv += '<param name="controller" value="false">';
				pv += '<param name="type" value="video/quicktime">';
				pv += '<param name="autoplay" value="false">';
				pv += '<param name="target" value="myself">';
				pv += '<param name="bgcolor" value="black">';
				pv += '<param name="pluginspage" value="http://www.apple.com/quicktime/download/index.html">';
				pv += '<embed src="'+u+'" width="'+w+'" height="'+h+'" controller="true" align="middle" bgcolor="black" target="myself" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/index.html"></embed>';
				pv += '</object></span>';
				return pv;
			}
			
			return $(this).click(function(){ 
				var vocurl = $(this).attr('rel');
				
				vocurl = APP_NAME+'userinfo/getvoc/type/'+type+'/url/'+vocurl;
				if($(this).parent().find('.vocplayer').size()){//再次按播放时候重新加载
					$(this).parent().find('.vocplayer').html($(this).parent().find('.vocplayer').html());
				 
				}else
					$(pv_q( vocurl.replace(/htk/,'amr'),40, 10)).insertBefore(this);
			});
		}	
});
	
	//数组去重复
	Array.prototype.unique=function(){
		var newArray=[];
		var provisionalTable = {};
		for (var i = 0, item; (item= this[i]) != null; i++) {
			if (!provisionalTable[item]) {
				newArray.push(item);
				provisionalTable[item] = true;
			}
		} 
		return newArray;
	}
	var object_keys 	=	function(obj){
			
		   var keys = [];  
		   for(var pro in obj){  
			  keys.push(pro);  
		   }  
		   return keys;  
			
	}
	
	var object_values	=	function(obj){ 
	 
		var values = [];  
		for(var pro in obj){  
		  values.push(obj[pro]);  
	   }  
		return values;   
	}
	
	Array.prototype.remove = function(val) {
            var index = this.indexOf(val);
            if (index > -1) {
                this.splice(index, 1);
            }
     };
	 
	String.prototype.trim = function(chr) {
            var newString = '';
			newString =this;
			if(this[0] == chr)
				 newString=this.slice(1,this.length);
            if(newString[newString.length-1] == chr)
				newString= newString.slice(0,newString.length-1); 
			return newString;
     };
	String.prototype.ucfirst = function(){
	
		var newString = '';
		newString =this.toLowerCase();
		return 	this.charAt(0).toUpperCase()+newString.substr(1);
	
	};
	//修改时间的时区
	String.prototype.str_timezone = function(timezone,formatstr){ 
			var date = new Date();  
			if(timezone == undefined){
				timezone	=	8;
			}
			var format	= formatstr	|| 'YY年MM月dd日-HH:mm'; 
			var tmp_datetime = this.toLocaleString().replace(/:/g,'-'); 
			tmp_datetime = tmp_datetime.replace(/ /g,'-'); 
			var arr = tmp_datetime.split("-"); 
			date.setTime(Date.UTC(arr[0],arr[1]-1,arr[2],arr[3]-8+timezone,arr[4],arr[5])); 
			return date.format(format);
	}
 
	//模本函数
	 String.prototype.temp = function(obj) {
		return this.replace(/\$\w+\$/gi, function(matchs) {
			var returns = obj[matchs.replace(/\$/g, "")];		
			return (returns + "") == "undefined"? "": returns;
		});
	};
	
	String.prototype.multi_temp	=	function(arr){
			var ret ='';
			if(!arr)	return '';
			for(var i = 0 ;i < arr.length;i++){
				ret +=	this.temp(arr[i]);
			}
			return ret;
	}

function   isDigit(s)  
{  
    var   patrn=/^[0-9]{1,20}$/;  
     if  (!patrn.test(s)) 
		return   false;
	return   true;  
}   
		 
function isArray(obj) {   
  return Object.prototype.toString.call(obj) === '[object Array]';    
}  
	 


var  select_input_adjust = function(classname,Page){
	$('.'+classname+'input',Page).focus(function(){$('.'+classname+'select',Page).val('')});
	$('.'+classname+'select',Page).focus(function(){$('.'+classname+'input',Page).val('')});
}

//自定义的错误提示
/*	第一个参数表示提示的内容
*	timeout表示提示的延时
*	type 表示提示的类型
*/
function htalert(str,timeout,type){ 
			if(type == 'error' || typeof(type) == "undefined"){	alertMsg.error(str);}
			else if(type == 'info' ){	alertMsg.info(str);}
			else if(type == 'warn' ){	alertMsg.warn(str);}
			else if(type == 'success' ){	alertMsg.correct(str);}
			else{	alertMsg.correct(str);}
			if( !timeout) alertMsg._closeTimer = 1000;
			if(!isNaN(timeout))
				alertMsg._closeTimer=setTimeout(function(){alertMsg.close()},timeout);
}
 
//日志输出函数
	function log(str){
		console.log(str);
	}
	
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}


function arr_to_key(data,key){
if(!data || !key)	return {};
var key_device_id	=	{}; 
 for(var i = 0 ; i < data.length;i++){
	key_device_id[data[i][key]] = data[i];
}
return key_device_id;
}


/*
*	日期操作函数
*/
Date.prototype.strtotime = function(datetime){
	if(typeof datetime == 'string'){
    var tmp_datetime = datetime.replace(/:/g,'-'); 
    tmp_datetime = tmp_datetime.replace(/ /g,'-'); 
    var arr = tmp_datetime.split("-"); 
    var now = new Date(Date.UTC(arr[0],arr[1]-1,arr[2],arr[3]-8,arr[4],arr[5])); 
    return parseInt(now.getTime()/1000); 
  }
}
 

Date.prototype.format = function(formatStr)   
{   
    var str = formatStr;
	
    var Week = ['日','一','二','三','四','五','六'];  
  
    str=str.replace(/yyyy|YYYY/,this.getFullYear());   
    str=str.replace(/yy|YY/,(this.getYear() % 100)>9?(this.getYear() % 100).toString():'0' + (this.getYear() % 100));   
	var month = this.getMonth()+1;
    str=str.replace(/MM/,month);//month>9?month.toString():'0' +month   
    str=str.replace(/M/g,month);   
  
    str=str.replace(/w|W/g,Week[this.getDay()]);   
  
    str=str.replace(/dd|DD/,this.getDate()>9?this.getDate().toString():'0' + this.getDate());   
    str=str.replace(/d|D/g,this.getDate());   
  
    str=str.replace(/hh|HH/,this.getHours()>9?this.getHours().toString():'0' + this.getHours());   
    str=str.replace(/h|H/g,this.getHours());   
    str=str.replace(/mm/,this.getMinutes()>9?this.getMinutes().toString():'0' + this.getMinutes());   
    str=str.replace(/m/g,this.getMinutes());   
  
    str=str.replace(/ss|SS/,this.getSeconds()>9?this.getSeconds().toString():'0' + this.getSeconds());   
    str=str.replace(/s|S/g,this.getSeconds());   
 
    return str;   
}

//ajax 下载文件
function download_file(url)
{
	if(typeof(download_file.iframe)== "undefined")
	{
		var iframe = document.createElement("iframe");
		download_file.iframe = iframe;
		document.body.appendChild(download_file.iframe); 
	}
	download_file.iframe.src = url;

	download_file.iframe.style.display = "none";
}

 function openWindowTab(form){
		var $form	=	$(form);
		var data	= 	$.unserialize($form.serializeArray());
		var	url		=	$form.attr('action');
		window.open(url+'?'+data,'_blank');
		return false;
 } 
 
function detectFlash() {
        //navigator.mimeTypes是MIME类型，包含插件信息
    if(navigator.mimeTypes.length>0){
    //application/x-shockwave-flash是flash插件的名字
        var flashAct = navigator.mimeTypes["application/x-shockwave-flash"];
        return flashAct != null ? flashAct.enabledPlugin!=null : false;
    } else if(self.ActiveXObject) {
        try {
            new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
            return true;
        } catch (oError) {
            return false;
        }
    }
}

 