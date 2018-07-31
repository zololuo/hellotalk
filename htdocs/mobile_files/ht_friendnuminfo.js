	
	//好友数量信息的处理-friendinfo页面需要
	var Ptach_friend_numinfo = function(info,Page){
			 if(!info)	return;
			 var THISTAB 		=	$(Page);
			var col_index		=	6,length=info.length,data={},userid;
			var All_td			=	THISTAB.find('tbody tr td::nth-child('+col_index+')');
			var head_th			=	THISTAB.find('thead tr th::nth-child('+col_index+')');
 
			var index_arr		=	['FRIENDNUM','BADASKNUM','UNREPLYNUM','DELETENUM','BEDELETENUM','BEBLACKNUM','BEINFORMNUM']
			var days_arr		=	['','7','14'];
			var title_arr		=	['好友数','发出未处理','未回复数','删除','被删除','被拉黑','被举报'];
			var title_head		=	['总','7天','14天'];
			for(var i=0;i<length;i++){
				data[info[i]['USERID']]	=	info[i];	
			}
			var lastfield		=	THISTAB.find('.lastfield').val();
			var title 	= '<th>描述</th>',style='';
		//	var td		=	'<td></td>';
			for(var i = 0 ; i < title_arr.length;i++){
				if(index_arr[i]==lastfield){
					style	=	'background:yellow;';
				}else	style='';
				title		+=	'<th style="cursor:pointer;'+style+'" class="sort" field	="'+index_arr[i]+'"><a>'+title_arr[i]+'</a></th>';
				//td			+=	'<td></td>';	
			}head_th.before(title);
			
	 
			log(THISTAB.find('thead .sort').size());
			
			THISTAB.find('thead .sort').click(function(){
					var daynum		=	THISTAB.find("input:radio[name=daynum]:checked").val();
					var field		=	$(this).attr('field');
					if(!daynum || daynum.length < 2){htalert('请选择时间',0,'warn');return;}
					 navTab.reload('',{data:{daynum:daynum,field:field}});
			
			});
			 
			All_td.each(function(){
					var td		=	'<td><br><span>总</span><br><span>7</span><br><span>14</span></td>';
					userid		=	$(this).parent().attr('id') ;
					for(var i = 0 ; i < index_arr.length;i++){
							td		+=	'<td>';
							for(var k = 0 ; k < days_arr.length;k++){
								td		+=	'<br><span>'+data[userid][index_arr[i]+days_arr[k]]+'</span>';
							}
							td		+=	'</td>'; 
					}
						$(this).before(td);
					
			});
			//All_td			= THISTAB.find('tbody tr td::nth-child('+col_index+')');			
	}
	
	//格式化数据到html面板
	var GetFriendUnmOK=function(data){
		if(!data){	//取最右边三列清空。 
					return;
		}
		var friendPanel_body= $('.friend_num_info tbody');
		friendPanel_body.html('');
		var	friend_count = {'FRIENDNUM':'好友数','DELETENUM':'删除好友','BEDELETENUM':'被删除','BADASKNUM':'发出请求','UNREPLYNUM':'未答复数','BEBLACKNUM':'被拉黑','BEINFORMNUM':'被举报','SINGLE':'唯一次数','ZDBLACKNUM':'主动拉黑','ZDINFORMNUM':'主动举报'},
		sufffix=['','14','30'],
		daynum_arr=['total','day14','day30'],
		friendPanel		=	$('.friend_num_info'),
		firendcount 	=	data.friendcount,
		chatcount 		=	data.chatcount,
		friend_html 	=	'',
		chat_title_arr	=	['TOTALNUM','TEXTNUM','IMAGENUM','VOICENUM','SENDCOUNT'],
		chat_title_arr_text	=	['总信息','文字信息','图片信息','语音信息','人数'];
		var cols_added	=	0;
		if(firendcount){ 
				for(var keyT in friend_count){
					//添加行和标题
					friend_html+='<tr target="sid_user" class="'+keyT+'"field="'+keyT+'" ><td>'+friend_count[keyT]+'</td>'; 
					
					for(var col_id = 0; col_id < sufffix.length;col_id++){ 
						var num	=	firendcount[keyT+sufffix[col_id]];
						if(!num)	num=0; 
						friend_html+='<td daynum="'+daynum_arr[col_id]+'">'+num+'</td>';
					}		
				
					//添加聊天数量信息在旁边
					if(chatcount && cols_added < 5){
						friend_html+='<td>'+chat_title_arr_text[cols_added]+'</td>';
						friend_html+='<td>'+chatcount[0][chat_title_arr[cols_added]]+'</td>';
						friend_html+='<td>'+chatcount[1][chat_title_arr[cols_added]]+'</td>';  
					}else{
						friend_html+='<td></td><td></td><td></td>';
					}
					cols_added++;
					friend_html += '</tr>';
			}
			friendPanel_body.html(friend_html+'<tr target="sid_user"class="HANDLE"  ><td  colspan=4><button onclick="show_friend();"style="width:95px;height:27px">显示</button></td><td  colspan=3><button onclick="send_msg_to_friend();" style="width:80px;height:27px" >群发</button></td></tr>'); 
			 
			//颜色和按键的响应		  
			$('tr td',friendPanel_body).each(function(){
							 var td_text	=	$(this).text();
							 $(this).css('cursor','default').css('background-color','#fff'); 
							 //有数字的才可以点击
							if( $(this).attr('daynum') &&  td_text!='0'&& td_text!='' ){
							
								$(this).css('cursor','pointer').css('background-color','#aff'); 
 
								// 单击选中边颜色
								$(this).unbind("click").click(function(e){
									$('.selected',friendPanel).removeClass('selected').css('background-color','#aff')
									if(!$(this).hasClass('selected')){
										$(this).addClass('selected');
										var daynum 	= 	$(this).attr('daynum'),
										field=$(this).parent().attr('field'),
										title=$(this).parent().find('td:eq(0)').text();  
										friendPanel_body.attr('daynum',daynum).attr('field',field).attr('title',title);  
									}else{
											$(this).removeClass('selected');
											friendPanel_body.attr('daynum','').attr('field','').attr('title',''); 
									} 
									$('.selected',friendPanel).css('background-color','#a3f'); 
								});
						  }//if end
				});
			$('tr td',friendPanel_body).css({'height':'15px','border-bottom':'1px solid #CFC5C5'});
				 
		}
		

	}
						
	var Trigger_friendnuminfo	= function(){
						var userid	=	$(this).parents('.userbox').attr('id'),friendPanel=$('.friend_num_info');

						if(friendPanel.find('tbody').attr('userid') == userid){
							return friendPanel;
						}
						friendPanel.find('tbody').attr('userid',userid);
						friendPanel.find('tbody').html('<div class="loading-float">数据加载中</div>');
						friendPanel.find('thead').hide();
						$.global(false);
						var cache  = $('body').data('frinuminfo'+userid);
						if(cache){
								$.global(true);
								friendPanel.find('thead').show(); 
								GetFriendUnmOK(cache);
						}else{
						$.ajax({
							type: "get",async: true,
							url: window.APP_NAME+"userinfo/get_friend_num/",
							data: {userid:userid},  
							success: function(data){
								$.global(true);
								console.log('fred');
								console.log(data);
								friendPanel.find('thead').show(); 
								GetFriendUnmOK(data);
								$('body').data('frinuminfo'+userid,data);
							},
							error:function(){
								$.global(true);
								friendPanel.find('thead').show(); 
								friendPanel.find('tbody').html("<div>加载数据失败···</div>")
							}
						});
						
						}
						
						return friendPanel;
	}
	
	var get_friend_userid = function(param){
			
			var re_userid 	=	'';
			
			var GetUserIdOK = function(data){
				if(!data)	return;
				re_userid	=	data.join(',');
				
			}
			
			$.ajax({
							type: "get",async: false,
							url: window.APP_NAME+"userlist/user_friends/",
							data: $.extend({justuserid:'1'},param),  
							success: GetUserIdOK
			});
			
			return re_userid;
	}
	
//发送信息给好友等，默认名片已经是自己的userid
var send_msg_to_friend = function(){

		var friendpanel = $('.friend_num_info tbody');
		var daynum 	= 	friendpanel.attr('daynum'),
			 field	=	friendpanel.attr('field'),
			 title	=	friendpanel.attr('title'),
			 userid=	friendpanel.attr('userid');
			 
		if(!daynum || !field ||!userid){
			console.log(daynum);
			console.log(field);
			console.log(userid);
			htalert("参数错误",1200); 
			return false;
		}
		
		var touserid 	= get_friend_userid({daynum:daynum,field:field,userid:userid});
		 if(!touserid || !touserid.match(/^[\d,]+$/g)){
			htalert('选择发送的userid 不合法：',1000);
			return false;
		}
		//$('.chatbox .userid').val(touserid);
		//$('.chatbox .input_profile .message_profile').val(userid);
		$.pdialog.open(window.APP_NAME+'panelinfo/chatbox.html', 'chatbox'+userid+field+daynum, '发送信息给'+userid+'的'+daynum+title, {callback:function(dialog){
			$(dialog).find('.userid').val(touserid);
			$(dialog).find('.input_profile .message_profile').val(userid);
		
		},fresh:true,width:400,height:330,mask:false});

	}
	
//响应userid面板	
var show_friend	=	function(){ 
		var friendpanel = $('.friend_num_info tbody');
		var daynum 	= 	friendpanel.attr('daynum'),
			 field	=	friendpanel.attr('field'),
			 title	=	friendpanel.attr('title'),
			 userid=	friendpanel.attr('userid');
			if(!daynum || !field ||!userid){
				htalert("参数错误",1200); 
				return false;
			}
		var mysex	=	$('#'+userid+' .SEX',THISTAB).text();	
		var nativelang	=	$('#'+userid+' .NATIVELANG',THISTAB).text();	
		var learnlang	=	$('#'+userid+' .LEARNLANG1',THISTAB).text();	
		$('.friend_num_info').hide();
		$.pdialog.open(window.APP_NAME+'userlist/user_friends?usermin=1&daynum='+daynum+'&userid='+userid+'&field='+field,
		'chatbox'+userid+field+daynum, daynum+title+'信息-'+userid,{
		callback:function(dialog){

			HT.startPatch({ table:'setting,state,buy_trans,block_state,count_info',page:dialog});
			add_friendnuminfo_float(dialog);
			add_common_float(dialog);
			change_sex(dialog);
			change_age(dialog);
			change_timezone(dialog,'SHOWTIME,REGTIME');
			change_lang(dialog);
			change_device(dialog);
			set_country_hover(dialog);
			add_userid_menu(dialog);
			add_intro_voc(dialog);
			handle_multi_select(dialog);
			
			var show_userid =[];
			$('.userbox',dialog).each(function(){
				var userid	= 	$(this).attr('id');
				if(userid)
					show_userid.push(userid);
			});
			
			if(['BEBLACKNUM','BEINFORMNUM','SINGLE','ZDINFORMNUM','ZDBLACKNUM'].indexOf(field)>-1){
				//添加展示对话
				add_show_dialog(dialog,userid);	
				//添加聊天数量信息
				Patch_chat_count(dialog,userid,show_userid.join(','));
				//添加拉黑举报信息
				patch_black_report(dialog,userid,field);
			} 
			$('#usertable',dialog).parent().css('overflow','auto');  
			$('.dialogContent ',dialog).css('overflow','auto'); 
			
 			//群发信息设置above
			$('.sendmessage',dialog).click(function(){
				var touserid	= $('.useridgroup',dialog).val();
				if(!touserid || touserid.length<3){
					return htalert('userid 非法');
				}
				$.pdialog.open(window.APP_NAME+'panelinfo/chatbox.html', 'chatbox', '发送信息', {fresh:false,width:400,height:330,callback:function(chatdialog){
						$(chatdialog).css("zIndex", ($.pdialog._zIndex +100));
						$.pdialog.minimize(dialog);
						$('.touserid',chatdialog).val(touserid);
						$('.input_profile .message_profile',chatdialog).val(userid);
				}});
				
			});
		
			cal_dialog_userinfo(dialog,userid,mysex,{nativelang:nativelang,learnlang:learnlang});
			$('.mynative',dialog).html(nativelang);
			$('.mylearn1',dialog).html(learnlang);
		}
		,fresh:true,width:1000,height:500,mask:false,param:"{msg:'message'}"});
	}

	//为浮动面板添加展示对话
	var add_show_dialog  = function(Page,mian_userid){
		var col_count = $('thead th',Page).size()-2;
		
		//选中最后一列 
		$('tbody tr td::nth-child('+col_count+')',Page).each(function(){
			var fri_userid = $(this).parent().attr('id');
			$(this).append('<br><button type="button" class="show_conversation" who="'+mian_userid+','+fri_userid+'">对话</button><span class="allmsgcount"></span><br><button type="button" class="show_conversation img_only" who="'+mian_userid+','+fri_userid+'">图片</button><span class="imgmsgcount"></span>');
		});
		
		ConversationFloat(Page);				
	}
	
	//patch举报拉黑信息
	var patch_black_report = function(Page,userid,field){
		
		send_ajax('userinfo/get_report_black',{userid:userid,type: field || 'all'},function(data){
				if(data){
					var length = data.length;
					var key_info_arr	= 	{};
					var nowuser	=	[];
					for(var i =0 ; i < length; i++){
						nowuser	=	data[i];
						if( key_info_arr[nowuser.USERID]){
							key_info_arr[nowuser.USERID].push(nowuser);
						}else{
							key_info_arr[nowuser.USERID]	=	[];
							key_info_arr[nowuser.USERID].push(nowuser);
						}
					}
					var date	= new Date(),happen_time,myuserid,thisuser_arr=[];
					$('.userbox',Page).each(function(){
							myuserid	=	$(this).attr('id');
							happen_time	=	'';
							var prefix 	=	'';
							if(myuserid){
								thisuser_arr		=	key_info_arr[myuserid];
								for(var i =0 ;	thisuser_arr &&  i < thisuser_arr.length; i++){
									showtime	=	thisuser_arr[i].UPDATETIME.str_timezone(8,'YY-MM-dd HH:mm');
									 prefix 	=	$(this).find('.SHOWTIME').lenght > 2?'':'<br>';
									$(this).find('.SHOWTIME').append(prefix+showtime+':<b>'+thisuser_arr[i].type+'</b>');
								}
								
							}
					});
				}
		},'get');
	
	}
	
	//计算和该用户的语言匹配数量和性别比例
	var cal_dialog_userinfo	= function(Page,userid,sex,lang){
		var userCount	=	$('.userbox',Page).size();
		var exactCount	=	0;
		var FemaleCount	=	0;
		$('.userbox',Page).each(function(){
				
				if($(this).find('.SEX').text()=='女'   ){
					FemaleCount++;
				}
 
				if($(this).find('.NATIVELANG').text()== lang.learnlang && 
				 $(this).find('.LEARNLANG1').text()== lang.nativelang ){
					exactCount++;
				}
		});
		var num  = new Number(FemaleCount/userCount*100);
		$('.female_rate',Page).html(num.toFixed(1)+'%');
		num  = new Number(exactCount/userCount*100);
		$('.langmatch_rate',Page).html(num.toFixed(1)+'%');
	
	}
	
	//异步计算获取好友信息
	var   triggerAllFriendNum = function(userid_arr,Page){
		if(typeof userid_arr != 'object' || userid_arr.length < 1)
			return;
				
				var userid_p = '';
				
				var split_time = 3000;
				
				var TimeOut 	= 0;
				
				//返回时间相关参数
				var TimeOut_FriendNum 	= function(userid_str,process,ThisBlackReportTab){
					return (function(){
						$.global(false); 
						$.ajax({
							type: "get",async: true,
							url: window.APP_NAME+"userinfo/get_friend_num/",
							data: {userid:userid_str},  
							success: function(data){
								if(data){
									$('body').data('frinuminfo'+userid_str,data);
									$('.friendnumprocess',ThisBlackReportTab).html(process*100+'%');
								 
								}
								$.global(true); 
							},
							error:function(){
								$.global(true); 
							}
						});
						
						});
						
				}
				
				var  userid_num	=	 userid_arr.length;
				
				for(var i = 0 ; i < userid_num;i++){
					userid_p	=	userid_arr[i];
					var myfunc 	=  TimeOut_FriendNum(userid_p,(i+1)/userid_num,Page);
					
					setTimeout(myfunc,TimeOut)
					
					TimeOut	+= split_time;
				}
	}
	
