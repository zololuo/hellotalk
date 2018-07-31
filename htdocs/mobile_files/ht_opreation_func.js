

//绑定单击和修改理由下拉的函数



var OpCenter={
Page:'',
HandlePage:'',
	hideAfterHandle	:true,
	selectAutoDone	:true,	//select选择之后自动触发，onchange
getHandlePage:function(){
	return navTab.getCurrentPanel();
},
BindAll:function(){
	if(!this.Page)
	{
		htalert("操作失败,操作面板没有绑定");
	}
	
	var $this = this;
	
	var STATE_MODI = function(){
		
		$this.set_state($(this).attr('state'),$(this).attr('takefrom'));
	};
	
	$(".setstate [type='button']",this.Page).click(STATE_MODI);
	
	if($this.selectAutoDone){
		$('.setstate select',this.Page).change(STATE_MODI);
		
		$('.hidereason2,.hidereason3,.markreason2,.markreason3',this.Page).change(STATE_MODI);
		//禁止发言,行为控制
		$('#behavior_controller,#client_controller',this.Page).change(function(){
																	  $this.behavior_set($(':selected',this))
																	  });
	}
	//恢复用户
	$('.oprecoverbtn',this.Page).click(function(){$this.recover()});
	//修改头像
	$('.opdeleteselfbtn',this.Page).click(function(){$this.ask_delete_himself()});

	$('#setheadurl_btn',this.Page).click(function(){$this.change_user_headpic()});
	
	$('#grouphandle .sendmessage',$this.getHandlePage()).click(function(){
															   var touserid = $('.useridgroup',$this.getHandlePage()).val();
															   $this.sendMessgae(touserid);
															   });
	
	$('.sendmessage',this.Page).click(function(){
									  var touserid 	= 	$this.getUserid();
									  $this.sendMessgae(touserid);
									  });
	
	//增送礼物 按钮响应
	$('#sendgift_btn',this.Page).click(function(){$this.send_gift()});
	
	$('#send_multilang_btn',this.Page).click(function(){$this.send_multilang()});
	
	$('.behaviorbtn',this.Page).click(function(){
									  $this.behavior_set(this);
									  });
	
	$('.ophideshow .togglebtn',this.Page).click(function(){
												$(this).parent().find('.hide_area').toggle();
												});
	
	this.fastMessage(this.Page);
	var showFastMsg	=	function(){
		$(this).parent().find('.send-msg').show();
	}
	$('.send-msg-btn',this.Page).hover(showFastMsg,function(){
									   $(this).parent().find('.send-msg').hide();
									   });
	$('.send-msg',this.Page).hover(showFastMsg,function(){
								   $(this).parent().find('.send-msg').hide();
								   });
},
fastMessage:function(Page){
	var that	=	this;
	
	$(".short-name",Page).mousedown(function(e){
									var userid		=	that.getUserid();
									var text		=	$(this).parents('.btn-area').find('.description').val();
									if(!userid || userid.length < 3){
									htalert("未知错误请联系管理员",1000,'error');
									return;
									}
									//鼠标左键处理
									if(3 == e.which){
									that.sendMessgae(userid,text);
									}else if(1 == e.which){ //鼠标右键处理
									var pushType	=	$('.push_type:checked').val();
									send_ajax("IMServer/sendmessage",
											  {push_type:pushType,send_type:'text',content:text,touserid:userid},
											  AfterSendMsg,
											  'post'
											  );
									}
									})
},
	//操作面本自己
setPage:function(Page){
	this.Page	=	Page;
	select_input_adjust('hidereason',Page);
	select_input_adjust('deletereason',Page);
	select_input_adjust('markreason',Page);
	select_input_adjust('giftday',Page);
	this.BindAll();
},
	
	//设置要回显的面板
setHandlePage:function(Page){
	this.HandlePage	=	Page;
},
getUserid:function(){
	return $('.tempinfo',this.Page).attr('userid');
},
set_state:function(state,takefrom){
	
	var userid 		=	this.getUserid();
 
	var reason_from_arr	=	takefrom.split(',');
	var reason = '';
	for(var i = 0 ; i < reason_from_arr.length ;i++){
		var pre = '.';
		if(reason_from_arr[i].indexOf('select')>0){
			pre = 'select.';
		}
		reason +=$(pre+reason_from_arr[i],this.Page).val();
		if(reason != ''){
			break;
		}
	}
	
	if(userid.length<2){
		htslert("没有jid处理");
		return;
	}
	var  $this = this;
	if(reason.length < 2){
		htalert('理由错误！！！');
		return;
	}else{
		send_ajax(
				  'userController/setstate/',
				  {state:state,userid:userid,reason:reason},
				  function(data){
				  $this.callback_state(data);
				  });
	}
},
	
	
	//隐藏用户的函数
	recover : function(){
		var userid = this.getUserid();
		if(userid.length<2){
			htslert("没有jid处理");
			return;
		}
		var  $this = this;
		send_ajax( 'userController/unsetstate/',{userid:userid},function(data){ $this.callback_state(data);});
	},
	
ask_delete_himself:function(){
	var userid =	this.getUserid();
	if(userid.length<2){
		htslert("没有jid处理");
		return;
	}
	alertMsg.confirm('你确定用户要删除自己吗', {
					 okCall: function(){
				  send_ajax( 'userController/ask_tobe_delete/',{userid:userid},function(data){
							if(data && data.status == 1){
							htalert('操作成功',1200,'success');
							
							}else{
							htalert('操作失败',1200,'error');
							}
							
							});
					 }
					 });
},
 
	//服务器返回数据
	callback_state :  function(data,Page) {
		
		if(data && data.status == 1){
			var cost	=	data.timecost;
			htalert('消耗时间: '+data.timecost+' ,操作成功！',1000,'success');
			
			if(!data.userid)	return;
			// console.log(data.userid); return;
			var THISTABL	= Page||this.getHandlePage();
			var userid_arr = data.userid.split(',');
			for(var i = 0 ;i < userid_arr.length;i++){
				var OBJ	=	THISTABL.find('#'+userid_arr[i]+' .USERMGSTATE');
				if(data.unset){
					OBJ.find('span').text('');
					OBJ.find('.MGSTATE').text('');
				}else{
					OBJ.find('.MGSTATE').text(data.state.ucfirst()+'：'+data.reason);
				}
				
			}
		}else{
			htalert('消耗时间: '+data.timecost+' ,操作失败！'+data.info,1000,'error');
		}
		$('.retinfo').text(data.info);
		if(this.hideAfterHandle)$('.operation_panel').hide();
	},
	
	//增送礼物
	send_gift : function(){
		
		var userid =	this.getUserid();
		
		var giftday = parseInt($('select.giftdayselect',this.Page).val());
		var giftday2 = parseInt($('.giftdayinput',this.Page).val());
		giftday	=	giftday||giftday2;
		
		if(isNaN(giftday) || giftday<=0)
		{
			htalert("请选择时长",1000,'error');
			return;
		}
		
		var comment = $('.comment',this.Page).val();
	 
		var arg = 'post_type=giving&userid='+userid+'&giftday='+giftday+'&comment='+comment;
		var text = "增送";
		$this	=	this;
		var success_Controller =  function(data) {
			$this.success_Controller(data,text);
		}
		
		send_ajax('IMServer/gifttranslate/',arg,success_Controller);
	},
	success_Controller : function(data,text) {
		if(!data ) 	return htalert('操作失败',1200,'error');
		text  = text || '';
		if(data.status=='1')
		{
			$('#retinfo',this.Page).html(text+'成功');
			htalert('操作成功',1200,'success');
		}
		else
		{
			$('#retinfo',this.Page).html(text+'失败'+data.info);
			htalert(data.info,1200,'error');
		}
	},
	send_multilang	:	function(){
		var userid 	=	this.getUserid();
		var arg		=	'userid='+userid;
		$this		=	this;
		var success_Controller =  function(data) {
			$this.success_Controller(data);
		}
		send_ajax('IMServer/giftmultilang/',arg,success_Controller);
		
	},
	sendMessgae :function(touserid,text){
		$(this.Page).hide();
		
		$.pdialog.open(APP_NAME+'panelinfo/chatbox.html', 'chatbox', '发送信息', {fresh:false,width:400,height:330,mask:true,callback:function(Page){
					   $('.touserid',Page).val(touserid);
					   $('.dialogHeader_c h1',Page).append(touserid);
					   if(text){
					   $('.message_text',Page).val(text);
					   }
					   }});
	},
	
	change_user_headpic	: function(){
		var userid = this.getUserid();
		var handlePage 	=	this.getHandlePage();
		var success_Setheadurl = function(data){
			if(data && data.status != 1){
				$('.operation_panel .retinfo').html(data.info);
				
			}else{
				$('#'+userid,handlePage).find('.HEADURL img').attr('src',data.url);
				htalert('操作成功',1200,'success');
			}
		}
		send_ajax( 'userController/set_user_headurl_default/',{userid:userid},success_Setheadurl);
	},
	//行为设置
	behavior_set	:	function(OBJ)
	{
		OBJ 		=	$(OBJ)
		var $this 		= 	this;
		var userid		=	this.getUserid();
		var behavior	=	OBJ.attr('behavior');
		var action		=	OBJ.attr('action')
		
		
		var URL 	=	action+'/'+behavior;
		
		var arg 	=	OBJ.attr('param')+'&userid='+userid+'&openid=9108780';
		
		if(!action || action.length<1 || !behavior || behavior.length<1  ){
			htalert('参数错误');
			return;
		}
		//是否有值需要输入
		var promptneed 	= OBJ.attr('prompt');
		if(promptneed){
			var title 	= OBJ.attr('prompt_title') || "请输入你的值";
			var default_val = OBJ.attr('prompt_default') || '0';
			
			while(1){
				var promptval = prompt(title+":",default_val);
				if(promptval){
					arg	+='&'+promptneed+'='+promptval;
					break;
				}else{
					return;
				}
			}
		}
		
		send_ajax(URL,arg,function(data){
				  $this.callback_state(data);
				  }); 
		
	}
	
	
 
}


