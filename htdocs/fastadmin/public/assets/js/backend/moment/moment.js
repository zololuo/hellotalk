define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        
        index: function () {
                    var datas = {};
                    var orderArr = [];   
                    try{
                        $.ajax({
                              type: "GET",
                              url: urls,
                              success: function(msg){
                                datas = msg;
                                page();
                                setTimeout(reflow,25);
                                
                              }
                           });
                    }catch(e){
                        console.error(e);
                    }
                     
                    $(window).resize(imgLocation);
                    // 初始化卡片位置及相关事件 耗时较久
                    function reflow() {
                        setTimeout(imgLocation,120);
                        showLang();
                        translate();
                        audioJs();
                        enlargeThumb();
                        clickSet();  
                        return true;  
                    }
                    // 精华帖condi，及底部菜单按钮点击弹窗事件
                    function clickSet() {
                        try{
                            // condi点击
                            var condiSet = $('#container .c-body .feature-box .fe-condition');
                            condiSet.each(function(index,value){
                                $(this).click(function (e){
                                    e.stopPropagation();
                                    alert(JSON.stringify($(this).data('condi')));
                                })
                            });
                            // menu点击
                            var delBtn = $('#container .c-footer .del-btn'),
                                hideBtn = $('#container .c-footer .hide-btn'),
                                folBtn = $('#container .c-footer .fol-btn'),
                                markBtn = $('#container .c-footer .mark-btn'),
                                momentBtn = $('#container .c-footer .moment-btn');
                            delBtn.each(function (){
                                $(this).click(function(){
                                    alert('del');
                                })
                            });
                            hideBtn.each(function (){
                                $(this).click(function(){
                                    alert('hide');
                                })
                            });
                            folBtn.each(function (){
                                $(this).click(function(){
                                    alert('fol');
                                })
                            });
                            markBtn.each(function (){
                                $(this).click(function(){
                                    alert('mark');
                                })
                            });
                            momentBtn.each(function (){
                                $(this).click(function(){
                                    alert('moment');
                                })
                            });
                            // 刷新
                            var refresh = $('#container .c-header .box-tools');
                            refresh.each(function (){
                                $(this).click(function(){
                                    imgLocation();
                                })
                            });
                        }catch(e){
                            console.error(e);
                        }
                    }
                    // 卡片位置更新
                    function imgLocation(index){
                        console.time("reflow");
                        try{
                            var box = $("#container .bo");
                            var boxWidth = box.eq(0).width();
                            var num = Math.floor($('.panel-body').width()/(boxWidth));
                            var boxArr=[];
                            var min = 0;
                            if(index>=0) {
                                var curBox = box.eq(index);
                                var curCol = curBox.attr('data-col').split('-')[0];
                                var changeList = orderArr[curCol].group;
                                var curIndex = curBox.attr('data-col').split('-')[1];
                                var boxTop = curBox.position().top;
                                var curTop = boxTop + curBox.height();
                                $(changeList).each(function(i,value){ 
                                    if(i>curIndex){
                                        $(value).css({
                                            "top" : curTop+10
                                        })
                                        curTop += $(value).height()+10; 
                                    } 
                                });
                                if($('.panel-body').height()<curTop){
                                    $('.panel-body').height(curTop);
                                }
                                
                            }else {
                                for(var j = 0;j<num;j++){
                                    var obj = {
                                        name : 'col'+j,
                                        group: []
                                    };
                                    orderArr.push(obj);
                                }
                                box.each(function(i,value){
                                    var boxHeight = box.eq(i).height();
                                    if(i<num){
                                        boxArr[i]= boxHeight;
                                        min = i;
                                    }else{
                                        var minboxHeight = Math.min.apply(null,boxArr);
                                        var maxboxHeight = Math.max.apply(null,boxArr);
                                        var minboxIndex = $.inArray(minboxHeight,boxArr);
                                        min = minboxIndex;
                                        $(value).css({
                                            "position":"absolute",
                                            "top":minboxHeight+75,
                                            "left":box.eq(minboxIndex).position().left
                                        });
                                        $('.panel-body').height(maxboxHeight+boxHeight-50);
                                        boxArr[minboxIndex]+=box.eq(i).height()+10;
                                    }
                                    $(value).attr('data-col',min+'-'+orderArr[min].group.length);
                                    if(min===0){$(value).addClass('first-col')};
                                    switch(min) {
                                        case 0: orderArr[0].group.push(value);break;
                                        case 1: orderArr[1].group.push(value);break;
                                        case 2: orderArr[2].group.push(value);break;
                                        case 3: orderArr[3].group.push(value);break;
                                    }
                                }); 
                            }
                        }catch(e){
                            console.error(e);
                        }
                        console.timeEnd("reflow");
                        
                    }
                    // 展开缩略图
                    function enlargeThumb() {
                        var thumbs = $('#container .contents .showPics img');
                        var thumbBox = $('#container  .showThumb');
                        thumbs.each(function(i,value){
                            $(value).click(function(e){
                                e = e || window.event;
                                e.stopPropagation();
                                var bigSrc = $(this).attr('bigSrc'); 
                                thumbBox.css({
                                    width: 'auto',
                                    height: 'auto',
                                    top: $(document).scrollTop()+100+'px',
                                })
                                var $img = $('<img src="'+bigSrc+'" >');
                                $img.load(function(){
                                    thumbBox.html($img); 
                                    if(thumbBox.hasClass('hide')){
                                        thumbBox.removeClass('hide');
                                    }else{
                                        thumbBox.addClass('hide');
                                    }   
                                });
                                $img.click(function(){
                                    thumbBox.addClass('hide');
                                })        

                            })
                            
                        })
                    }
                    // 显示翻译
                    function  translate(){
                        var translateZH = $('#container .bo .c-header .box-tools .lang-zh'),
                            translateEN = $('#container .bo .c-header .box-tools .lang-en'),
                            zhSp = $('#container .c-body .list .zh-sp'),
                            zh = $('#container .c-body .list .zh'),
                            enSp = $('#container .c-body .list .en-sp'),
                            en = $('#container .c-body .list .en');

                        translateZH.each(function(index,item){
                            $(item).click(function (){
                                if(!this.flag){
                                    $(zhSp[index]).removeClass('hide');
                                    $(zh[index]).removeClass('hide');
                                }else{
                                    $(zhSp[index]).addClass('hide');
                                    $(zh[index]).addClass('hide');
                                }
                                this.flag = !this.flag;
                                imgLocation(index);
                            })
                        });
                        translateEN.each(function(index,item){
                            $(item).click(function (){
                                if(!this.flag){
                                    $(enSp[index]).removeClass('hide');
                                    $(en[index]).removeClass('hide');
                                }else{
                                    $(enSp[index]).addClass('hide');
                                    $(en[index]).addClass('hide');
                                }
                                this.flag = !this.flag;
                                imgLocation(index);
                            })
                        });
                    }
                    // 显示user信息
                    function showLang() {
                        var Lang = $('.show-lang');
                        Lang.each(function(index,item){
                            $(item).click(function(){
                                show(this);
                                imgLocation(index);
                            })
                        })
                    }
                    function show(self) {
                        if(self.flag){
                            $(self).parent().parent().find('.mnt-lang').addClass('hide');
                            self.flag = false;
                        }else{
                            $(self).parent().parent().find('.mnt-lang').removeClass('hide');
                            self.flag = true;
                        }

                    }
                    // 分页
                    function page() { 
                        var itemArr = [],
                            $con = $('#container  .n-ct'),      // 列表容器
                            $pageCon = $('#container .n-ct-list'),
                            $pageNum = $pageCon.find('.page-change .pageNum'),
                            $first = $('#first'),
                            $prev = $('#prev'),
                            $next = $('#next'),
                            $last = $('#last');
                            $search = $('#search-page');
                        console.time("create page");
                        createNewsItem();                       // 获取数据，并生成相应结点
                        console.timeEnd("create page");
                        var length = itemArr.length,            // 总条数
                            count = 200,                         // 每页数据条数
                            num = Math.ceil(length/count),      // 总页数
                            page = [],                          // 用于存放每页的数据
                            curPage = 0;                        // 当前页
                        $search.attr('max',num);
                        $search.attr("placeholder",'总页数：'+num+',请输入正确的页数');
                        pagenation();                           // 生成分页器
                        var $pageA = $pageNum.find('a.pg-num');
                        $pageA.eq(curPage).addClass('select');  // 默认呈现第一页
                        var $searchPage = $('#search-page');
                        setPage();
                        servlet();
                        function servlet() {                    // 页面跳转
                            for(var i=0;i<page[curPage].length;i++){
                                $con.append(page[curPage][i]);  // 为第一页注入新闻数据
                            }
                            $pageA.click(function () {
                                var index = $(this).index();
                                change(index);
                                reflow();
                            });
                            $('#first').click(function () {     // 跳转首页
                                change(0);
                                reflow();
                            });
                            $('#prev').click(function () {      // 跳转上一页
                                var index = (curPage-1<0)?0:curPage-1;
                                change(index);
                                reflow();
                            });
                            $('#next').click(function () {      // 跳转下一页
                                var index = (curPage+1>=num)?num-1:curPage+1;
                                change(index);
                                reflow();
                            });
                            $('#last').click(function () {      // 跳转尾页
                                change(num-1);
                                reflow();
                            });
                            $('#go').click(function(){          // 跳转选定页 
                                if($search.val()>num) {
                                    $search.val('');
                                    $search.get(0).focus();
                                    return;
                                }
                                change($search.val()-1);
                                reflow();
                            })
                            function change(index) {
                                var newItem = $con.find('.bo');
                                $pageA.eq(curPage).removeClass('select');
                                $pageA.eq(index).addClass('select');
                                if(index!==curPage){
                                    newItem.remove();
                                    for(var i=0;i<page[index].length;i++){
                                                                // 为第一页注入新闻数据
                                        $con.append(page[index][i]);
                                    }
                                    curPage = index;
                                }
                            }

                        }
                        function setPage() {                    // 为每一页分配数据
                            var sum = 0;
                            for(var i=0;i< Math.floor(length/count);i++){
                                var arr = [];
                                for(var j=0;j<count;j++){
                                    arr.push(itemArr[sum])
                                    sum++;
                                }
                                page.push(arr);
                            }
                            var Dvalue = length - sum;
                            if(Dvalue>0){
                                arr = [];
                                for(i=0;i<Dvalue;i++){
                                    arr.push(itemArr[sum+i])
                                }
                                page.push(arr);
                            }
                        }
                        function pagenation() {                 // 跳转链接
                            if(num>=5){
                                var $a = '<a href="javascript:void(0);" class="more">...</a>';
                                $pageNum.append($a);
                            }else{
                                for(var i=0;i<num;i++){
                                    var $a = '<a href="javascript:void(0);" class="pg-num">'+(i+1)+'</a>';
                                    $pageNum.append($a);
                                }
                            }
                        }

                        function createNewsItem() {
                            datas.data.moment_list.forEach(function (item,index) {
                                var $bo = $('<div class="bo"></div>'),
                                    $contents = $('<div class="contents"></div>');
                                // 用户信息
                                var useBlock = `<div class="user-block clear-float">
                                                    <img src="${item.user.head_url}" alt="头像"   class="img-circle show-lang">
                                                    <span class="user-name">
                                                        <a href="javascript:void(0);">${item.user.nickname}</a>
                                                    </span>
                                                    <button type="button" class="c-btn">
                                                        <span>${item.user.userid}</span>
                                                    </button>
                                                    <span class="c-time">${item.moment.post_time}</span>
                                                    <div class="nation-flag">
                                                        <img src="${item.user.flag}" alt="国旗">
                                                    </div>
                                                </div>`,
                                    mntStatus = `<div class="mnt-status">
                                                    <span class="more-tag"></span>
                                                    <span class="lang-type">${item.user.nationality}</span>
                                                    <span class="op-reason">${item.op_reason}</span>
                                                </div>`;
                                //  语言显示
                                var tL = '',lL='';
                                if (item.user.teach_lang2!=0) {
                                    tL = `<span class="teach-lang2">Teachasds:${item.user.teach_lang2}:${item.user.teach_skillevel2}</span>
                                          <br>`;
                                    if (item.user.teach_lang3!=0) {
                                        tL = `<span class="teach-lang2">Teach:${item.user.teach_lang2}:${item.user.teach_skillevel2} ${item.user.teach_lang3}:${item.user.teach_skillevel3}</span>
                                              <br>`;
                                    }
                                };
                                if (item.user.learnlang1!=0) {
                                    lL = `<span class="learn-lang1">Learn:${item.user.learnlang1}:${item.user.skillevel1}</span>
                                          <br>`;
                                    if (item.user.learnlang2!=0) {
                                        lL = `<span class="learn-lang1">Learn:${item.user.learnlang1}:${item.user.skillevel1} ${item.user.learnlang2}:${item.user.skillevel2}</span>
                                              <br>`;
                                        if (item.user.learnlang3!=0) {
                                            lL = `<span class="learn-lang1">Learn:${item.user.learnlang1}:${item.user.skillevel1} ${item.user.learnlang2}:${item.user.skillevel2} ${item.user.learnlang3}:${item.user.skillevel3}</span>
                                                  <br>`;
                                        }       
                                    }
                                };
                                var mntLang  =  `<div class="mnt-lang hide">
                                                    <span class="native-lang">Native:${item.user.native_lang}</span>
                                                    <br>
                                                    ${tL}
                                                    ${lL}
                                                    <span class="mid">MID:${item.moment.mid}</span>
                                                </div>` ;
                                // 下拉菜单
                                var boxTools = `<div class="box-tools">
                                                    <a href="javascript:void(0);" class="c-btn refresh">
                                                        <i class="glyphicon glyphicon-unchecked"></i>
                                                    </a>
                                                    <a href="javascript:void(0);" class="c-btn lang-zh lang">Zh</a>
                                                    <a href="javascript:void(0);" class="c-btn lang-en lang">EN</a>
                                                    <ul class="nav navbar-nav">
                                                        <li class="dropdown">
                                                            <a href="javascript:void(0);" class="" data-toggle="dropdown" style="margin-top: -10px">
                                                                <span class="caret"></span>
                                                            </a>
                                                            <ul class="dropdown-menu" role="menu">
                                                                <li><a href="javascript:void(0);">Like</a></li>
                                                                <li><a href="javascript:void(0);">Cancel Like</a></li>
                                                                <li><a href="javascript:void(0);">点过的赞</a></li>
                                                                <li><a href="javascript:void(0);">set feature</a></li>
                                                                <li><a href="javascript:void(0);">Cancel feature</a></li>
                                                                <li><a href="javascript:void(0);">open Share page</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>`;
                                var $cHeader = $('<div class="c-header clear-float">'+useBlock+mntStatus+mntLang+boxTools+'</div>');
                                // end header
                                var title = `<h2 class="li-title" title=""></h2>
                                              <p class="description">${item.moment.content}</p>`,
                                    list = `<div class="list">
                                                <span class="zh-sp hide"> <i class="glyphicon glyphicon-chevron-right"></i> </span>
                                                <p class="zh hide">翻译成中文</p>
                                                <span class="en-sp hide"> <i class="glyphicon glyphicon-chevron-right"></i> </span>
                                                <p class="en hide">翻译成英文</p>
                                            </div>`;
                                // 图片显示
                                var pics = '',picLength = item.moment.image_cnt;
                                if (picLength>0){
                                    if (picLength == 1) {pics =  '<img src="'+item.moment.images[0].thumb_url+'" bigSrc="'+item.moment.images[0].big_url+'">';}
                                    if (picLength == 2) {
                                        pics =  `
                                            <img src="${item.moment.images[0].thumb_url}" bigSrc="${item.moment.images[0].big_url}" style="width:120px;" >
                                            <img src="${item.moment.images[1].thumb_url}" bigSrc="${item.moment.images[1].big_url}" style="width:120px;">
                                        `;
                                    }
                                    if (picLength >= 3) {
                                        for (let i=0,length = item.moment.image_cnt;i<length;i++){
                                            pics +=  '<img src="'+item.moment.images[i].thumb_url+'" bigSrc="'+item.moment.images[i].big_url+'" style="width:84px;height:100px;">';
                                        }
                                    }
                                    
                                }
                                var showPics =  `<div class="showPics">
                                                    ${pics}
                                                </div>
                                                ` ;
                                // 语音显示
                                var showVoice = '';
                                if(item.moment.voice&&item.moment.voice.url){
                                    showVoice = `<div class="showVoice">
                                                    <div class="voice-template">
                                                        <div class="aplay-box" dataSrc="${item.moment.voice.url}">
                                                            <div class="aplay-animation-box">
                                                                <i class="voiceStopIcon"></i>
                                                                <i class="voicePlayIcon"></i>
                                                            </div>
                                                            <span>${item.moment.voice.duration}''</span>
                                                        </div>
                                                        <audio style="display: none;" class="audioEle"></audio>
                                                    </div>
                                                </div>`;
                                }
                                // 精华帖信息显示
                                var featureBox = '',featuredData = item.moment.featured;
                                if ( featuredData !== '') {
                                    try{
                                        var condition = JSON.parse(featuredData.condition.replace("\\",""));
                                        var nation = '',nationData = '',nationBox = '', star = `<span class="fe-icon"><i class="glyphicon glyphicon-star"></i></span>`;
                                        if(condition.show_classify==null){ // condition字段无值，不显示星星
                                            star = '';
                                        }
                                        if(condition.nationality&&condition.nationality.national_array.length>0){
                                            nationData = condition.nationality.national_array;
                                            for (var i = 0,len = nationData.length;i<len;i++){
                                                nation += nationData[i]+ ' ';
                                            }
                                            nationBox = `<p>nation: ${nation}</p>`;
                                        }
                                        featureBox = `
                                            <div class="feature-box">
                                                ${star}
                                                <p>${featuredData.valid_begin}</p>
                                                <p>${featuredData.valid_end}</p>
                                                <p>times: ${featuredData.show_times}</p>
                                                <p>level: ${featuredData.level}</p>
                                                ${nationBox}
                                                <p><a href="javascript:void(0);" class="fe-condition" data-condi='${JSON.stringify(condition)}'>condi</a></p>
                                                <p>build: ${featuredData.level}</p>
                                            </div>
                                        `;
                                    }catch(e){
                                        console.log(e);
                                    }
                                    
                                }
                                var $cBody = $('<div class="c-body">'+title+list+showPics+showVoice+featureBox+'</div>');
                                // end body
                                var deleted = item.deleted;
                                var hideFol = `
                                                <a href="javascript:void(0);" class="c-btn del-btn"><i class="fas fa fa-trash"></i></a>
                                                <a href="javascript:void(0);" class="c-btn hide-btn"><i class="fas">hide</i></a>
                                                <a href="javascript:void(0);" class="c-btn fol-btn"><i class="fas">Fol</i></a>`;

                                if(deleted){
                                    hideFol = `
                                                <a href="javascript:void(0);" class="c-btn del-btn red"><i class="fas fa fa-trash"></i></a>
                                                <a href="javascript:void(0);" class="c-btn hide-btn hide"><i class="fas">hide</i></a>
                                                <a href="javascript:void(0);" class="c-btn fol-btn hide"><i class="fas">Fol</i></a>
                                                <span class="hide-btn fol-btn">${deleted}</span>`;
                                }
                                var foot = `<div class="c-footer">
                                                ${hideFol}
                                                <a href="javascript:void(0);" class="c-btn mark-btn"><i class="fas">Mark Me:)!</i></a>
                                                <div class="c-right clear-float">
                                                    <span class="like"><i class="count">${item.liked_count}</i><i class="glyphicon glyphicon-heart-empty"></i></span>
                                                    <span class="moment"><i class="count">${item.comment_count}</i><i class="glyphicon glyphicon-comment"></i></span>
                                                    <a href="##"  class="c-btn moment-btn"><i class="fas">评</i></a>
                                                </div>
                                            </div>`,
                                    $cFooter = $('<div class="c-footer">'+foot+'</div>');
                                $contents.append($cHeader);
                                $contents.append($cBody);
                                $contents.append($cFooter);
                                $bo.append($contents);
                                itemArr.push($bo);
                                
                            })
                        }
                       
                    }
                    function audioJs() {
                        var len = document.getElementsByClassName('aplay-box').length;
                        var audioGroup = document.getElementsByClassName('audioEle');
                        for (var i = 0; i < len; i++) {
                            queryAudio(i);
                        }

                        function queryAudio(i) {
                            var btn = document.getElementsByClassName('aplay-box')[i];
                            var audioEle = document.getElementsByClassName('audioEle')[i];
                            var voiceStopIcon = document.getElementsByClassName('voiceStopIcon')[i];
                            var voicePlayIcon = document.getElementsByClassName('voicePlayIcon')[i];
                            btn.onclick=function() {
                                if (!audioEle.paused) {
                                    audioEle.pause();
                                    voiceStopIcon.style.display="inline-block";
                                    voicePlayIcon.style.display="none";
                                    return;
                                }
                                for (var j = 0; j < len; j++) {
                                    if (i!==j) {
                                        if (audioGroup[j]) {
                                            audioGroup[j].pause();
                                        }
                                    }
                                }
                                if (!audioEle.src) {
                                    audioEle.src=this.getAttribute('dataSrc');
                                    setTimeout(function() {
                                        audioEle.play();
                                    },100);
                                }else{
                                    audioEle.play();
                                }

                            }
                            audioEle.onplay=function() {
                                voiceStopIcon.style.display="none";
                                voicePlayIcon.style.display="inline-block";
                            }
                            audioEle.onpause=function() {
                                voiceStopIcon.style.display="inline-block";
                                voicePlayIcon.style.display="none";
                            }
                            audioEle.onplaying=function() {
                                audioEle.play();
                            }
                        }
                    }

    //index end
        }
    };
    
    return Controller;
});