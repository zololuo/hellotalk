<template>
    <div class="home" @viewappear="viewappearAct">
        <navBar :title="curTitle"></navBar>
        <scroller class="scroller" :style="{width:fullWidth}">
            <div class="banner" :style="{width:fullWidth}">
                <image class="banner" resize="cover" :style="{width:fullWidth}" :src="bannerSrc" ></image>
            </div>
            <div class="myCourse">
                <div class="CourseHead">
                    <text class="headTitle">{{$t('MY_LESSONS')+'（'+myCourses.length+'）'}}</text>
                    <div class="moreBtn" @click="gotoMycourse">
                        <text class="more" v-if="myCourses.length>0" >{{$t('SEE_MORE')}}</text>
                    </div>
                </div>
                <div class="newCourse" v-if="myCourses.length>0" @click="gotoPage(newCourse.goto_url)">
                    <div class="picWrapper">
                        <image class="pic" :src="newCourse.head_image" resize="cover"></image>
                    </div>
                    <div class="courseInfo">
                        <div class="infoHead">
                            <text class="courseTitle">{{newCourse.title}}</text>
                        </div>
                        <text class="courseIntro">{{newCourse.abstract}}</text>
                    </div>
                </div>
                 <div class="noCourse" v-if="myCourses.length===0">
                        <image class="noCoursePic" :src="noCoursePicSrc"  ></image>
                </div>
            </div>
            <div class="recommendCourse">
                <div class="CourseHead">
                    <text class="headTitle">{{$t('RECOMMEND')+'（'+courseList.length+'） '}}</text>
                </div>
                <div class="noCourse" v-if="courseList.length===0">
                        <image class="noCoursePic" :src="noCoursePicSrc" /></image>
                </div>
                 <recommendList 
                    :courseList="courseList" 
                    @alertBuy="alertBuyAction" 
                    :isBuy="false" 
                    :userInfo="userInfo"
                    :hpUserinfo="hpUserinfo"
                    :priceData="priceInfo"
                    :source="source"
                    @refreshData="updateData"></recommendList>
            </div>
        </scroller>
        <alertBuy v-if="popup" 
                  class="alertBuy" 
                  :totalPrice="totalPrice"
                  :priceInfo="priceInfo"
                  :count="count"
                  :lang ="lang"
                  :alertHeight="count==1?152:222"
                  :fullHeight="fullHeight"
                  @buyCourse="buyAction"
                  :style="{width:fullWidth,height:fullHeight+'px'}"
                  @cancel="cancelAction"></alertBuy>
    </div>
    
</template>
<script>
    const modal = weex.requireModule('modal');
    import * as util from '@/util'
    import                      '@/pageEntry'
    import navBar from '@/components/navBar'
    import courseList from '@/components/courseList'
    import alertBuy from '@/components/buyAlert'
    import recommendList from '@/components/recommendList'
    import {getUserInfo, $get, getHpUserInfo, fetch, startIap, startPayment,startBraintreePay}        from             '@/api'
	export default {
            components:{navBar, courseList, alertBuy,recommendList},
            beforeCreated() {
                
            },
            created() {
                this.getHpuserInfo();
                this.listenEvent();//开启事件监听
            },
            data(){
                return {
                    curTitle: 'HT English',
                    myCourseNum: 3,
                    audioFreeSrc:'https://ali-hk-cdn.hellotalk8.com/class_share/20180629/36775fb3a07b691e3ab65956931af765.png?x-oss-process=image/resize,w_750/quality,q_88',
                    noCoursePicSrc:'https://ali-hk-cdn.hellotalk8.com/class_share/20180629/99f94e796b8be3e01a7cc68eaa86178c.png?x-oss-process=image/resize,w_750/quality,q_88',
                    courseList: [],      // 推荐课程列表
                    myCourses: [],       // 我的课程
                    bannerSrc: '',       // banner图
                    popup: false,        // 是否显示弹窗
                    userInfo: {},        // 用户信息
                    hpUserinfo:{},       // 公众号信息
                    newCourse: {},       // 最新一节我的课程
                    isDomesticPay: false,// 是否为国内支付方式
                    currentPid: 0,       // 单节课程的产品id
                    currentPcode: 40,    // 产品代码编号
                    allPid: 0,           // 剩余课程的产品ID
                    totalPrice: {        // 剩余全部课程价格信息
                        price: '',
                        symbol: ''
                    },
                    priceInfo:{          // 单节课程价格信息
                        price: '',
                        symbol: ''
                    },
                    count: 0,            // 收费课程数目
                    currency: '',        // 货币
                    currentBuyCourse: {},// 当前购买课程信息
                    currentBuyIndex: null,// 当前购买课程索引
                    groupId: 0,          // groupId
                    allCourseId: [],     // 剩余为购买课程ID
                    isSingleBuy: true,   // 单节购买
                    pageAppearTime: 0,
                    source: ''        ,   // 来源: public_account_home_page:公众号主页菜单,没有则默认landing page
                    timer: null,
                    fullHeight: 0,
                }
            },
            methods:{
                viewappearAct() {
                    var obj = util.parseQueryString(weex.config.bundleUrl);
                    if(obj&&obj.source&&obj.source==0){
                        this.source = 'public_account_home_page';
                    }
                    util.sensorsAct('MCViewScreen',{
                        page_name: 'Mini Course Home Page',
                        source: this.source
                    })
                    // this.pageAppearTime = new Date().getTime();
                },
                gotoPage(src){
                    var obj = util.parseQueryString(weex.config.bundleUrl);
                    var source = '';
                    if(obj&&obj.source&&obj.source==0){
                        source = 'public_account_home_page';
                    }
                    var url = src+'&htdisablemenu'+'&source='+source+'&hpid='+this.hpUserinfo.hpUserId;
                    weex.requireModule('weexRouter').openUrl({
                        url: url,
                        animated: true
                    })
                },
                gotoMycourse() {
                    util.jumpRemotePage({weexPage: 'myCourse'},this.userInfo);
                },
                alertBuyAction(obj,index) {
                    util.sensorsAct('MCPurchasePopups',{
                        course_id: obj.id+'',
                        course_name: obj.title,
                        source: this.source
                    });
                    this.currentBuyCourse = obj;
                    this.currentBuyIndex = index;
                    this.popup = true;
                    weex.requireModule('dom').getComponentRect('viewport',option=>{
                        this.fullHeight = option.size.height;
                    });
                },
                cancelAction() {
                    this.popup = false;
                },
                buyAction(flag) {
                    var self = this;
                    var obj = { // 传给后端的信息
                        click_course_id: this.currentBuyCourse.id, // 点击购买的那节课程ID
                        click_course_name: this.currentBuyCourse.title,  // 点击购买的那节课程title
                        course_id: [],               // 购买课程的ID
                        course_group:  self.groupId, // 群ID
                        course_url: '',              // 课程链接 
                        product_id: '',              // 购买课程的productID
                        price: '',                   // 购买课程的价格，单买就是单价，全买就是总价
                        source: self.source          // 神策数据上报 预留字段
                    };
                    if(flag) { // 全买
                        this.isSingleBuy = false;
                        obj.course_id = this.allCourseId;
                        obj.product_id = this.allPid;
                        obj.price = this.totalPrice.price;
                        obj.course_url = util.readWeexUrl('home');
                        this.startPay(obj);
                    }else{ // 单买
                        this.isSingleBuy = true;
                        obj.course_id[0] = this.currentBuyCourse.id;
                        obj.product_id = this.currentPid;
                        obj.price = this.priceInfo.price;
                        obj.course_url = this.currentBuyCourse.goto_url;
                        this.startPay(obj);
                    }
                    util.sensorsAct('MCSelectPurchase',{
                        course_id: this.currentBuyCourse.id+'',
                        course_name: this.currentBuyCourse.title,
                        currency: this.currency,
                        pay_amount: parseFloat(obj.price),
                        purchase_type: flag?'Package Purchase':'Single Class Purchase',
                        remaining_course: this.count,
                        source: this.source,
                        purchase_course: obj.course_id.toString()
                    });
                },
                getMycourse() {
                    $get('mycourse').then(data=>{
                        this.myCourses = data.course_list;
                        this.newCourse = data.course_list[0];
                    });
                },
                getCourseList(){
                    $get('courselist').then(data=>{
                        this.courseList = data.course_list;
                        this.bannerSrc  = data.banner;
                        this.allPid     = data.all_course_product;
                        this.count      = data.charge_course_num;
                        this.currentPid = data.one_course_product;
                        this.currentPcode = data.product_code;
                        this.groupId = data.group_id;
                        this.allCourseId = data.all_course_id;
                        this.getDomesticPrice();  
                    });
                },
                getHpuserInfo() {
                    var self = this;
                    return new Promise((resolve, reject) => {
                        if (WXEnvironment.platform==='Web') {
                            this.hpUserinfo = {
                                hpUserId:15040,
                                hpUserName: 'mini course'
                            }
                            resolve();
                            return;
                        }
                        let hpUserinfo = util.parseQueryString(weex.config.bundleUrl);
                        if (hpUserinfo&&(hpUserinfo.hpUserId||hpUserinfo.hpid)) {
                            if (hpUserinfo.hpid) {
                                this.hpUserinfo.hpUserId = hpUserinfo.hpid;
                            }
                            util.setCacheValue({ 
                                key: 'miniCourseHpUserinfo',
                                value: this.hpUserinfo
                            },()=>{
                                resolve();
                            })
                        }else{
                            reject();
                            log({
                                tag: 'public id error2',
                                message: '获取公众号信息出错:'+weex.config.bundleUrl,
                                level: 3
                            },()=>{})
                        }
                        
                    });
                },
                updateData() {
                    this.getMycourse();
                    this.getCourseList();
                },
                filterPayInfo() {
                    if (WXEnvironment.platform==='Web') {
                        this.isDomesticPay = true;
                        this.getDomesticPrice();
                        return;
                    }else{
                        if(/ios/gi.test(WXEnvironment.osName)){
                            this.getDomesticPrice();       
                        }else if(/android/gi.test(WXEnvironment.osName)) {
                            this.isDomesticPay = true;
                            this.getDomesticPrice();   
                        }
                    }
                },
                getDomesticPrice() { // 向后端请求价格信息
                    $get('price',{product_id:this.currentPid,currency:this.currency}).then(res=>{
                        if(res&&res.data){
                            this.priceInfo = res.data;
                        }
                    });
                    $get('price',{product_id:this.allPid,currency:this.currency}).then(res=>{
                        if(res&&res.data){
                            this.totalPrice = res.data;
                        }
                    });
                },
                getStorePrice() {
                    var  self = this;
                    weex.requireModule('payUtils').productInfo({
                        pid: this.currentPid,
                        pidCode: this.currentPcode
                    },res=>{
                        if (typeof res==='string') {
                            try{
                                res = JSON.parse(res)
                            }catch(e){}
                        }
                        if (res&&res.price) {
                            this.priceInfo = Object.assign(this.priceInfo,res);
                        }
                    });
                    weex.requireModule('payUtils').productInfo({
                        pid: this.allPid,
                        pidCode: this.currentPcode
                    },res=>{
                        if (typeof res==='string') {
                            try{
                                res = JSON.parse(res)
                            }catch(e){}
                        }
                        if (res&&res.price) {
                            this.totalPrice = Object.assign(this.totalPrice,res);
                        }
                    });
                },
                $t(attr,...data) {
                    return util.translate(attr, data);
                },
                getCurrency() { // 查询货币信息
                    getUserInfo().then(res=>{
                        if(this.isWeb){
                            this.currency = 'CNY';
                            return;
                        }
                        if(res.nationality=='CN'){     // 国籍为中国的默认人民币，走微信支付宝
                            this.currency = 'CNY';
                            this.isDomesticPay = true; // 国内支付方式
                        }else{                         // 非中国国籍的用户取苹果商店的货币
                            this.isDomesticPay = false; // BraintreePay
                            weex.requireModule('payUtils').payContext(data=>{
                                this.currency  = JSON.parse(data).currency;
                            })
                        }
                    });
                },
                startPay(obj) {
                    var self  = this;
                    if(this.currency=='CNY') {
                        startPayment({
                            product_id: obj.product_id,
                            token: 'HTEnglish' ,
                            money: obj.price,
                            source: this.source,
                            curUrl: util.readWeexUrl('home')	,
                            business_type: 4,
                            client_config_data: JSON.stringify(obj),
                            // req_uid,product_id,currency_code,amount,device_info,hp_userid,source,business_type,client_config_data
                        });
                    }else{
                        Object.assign(obj,{
                            business_type: 4   
                        });
                        startBraintreePay({
                            product_id: obj.product_id,
                            pay_entrance: 'HT English' ,//从哪里点进来
                            currency: this.currency,
                            currency_type: this.priceInfo.symbol,
                            amount: Number(obj.price)*1000,
                            add_on_id: '',
                            promotion_code: '',
                            client_config_data: JSON.stringify(obj),
                            plan_id: '',
                            source: this.source
                        })
                    }
                },
                listenEvent() {
                    util.addEventListen('callbackPayment', res=>{
                        if (res&&res.status==0) {//支付成功
                            this.cancelAction();
                            var self = this;
                            var lastCount = this.count;
                            var queryTimes = 0;
                            var url =  this.currentBuyCourse.goto_url+'&htdisablemenu'+'&source='+this.source+'&hpid='+this.hpUserinfo.hpUserId;
                          
                           if(this.isSingleBuy) { 
                                 this.timer = setInterval(function() {
                                    if(queryTimes>1) {
                                        clearInterval(this.timer);
                                        queryTimes = 0;
                                        return;
                                    };
                                    if(lastCount==this.count) {
                                        this.updateData();
                                    }else{
                                        clearInterval(this.timer);
                                        queryTimes = 0;
                                        return;
                                    }
                                    queryTimes++;
                                }.bind(this),2000);
                                this.gotoPage(this.currentBuyCourse.goto_url);
                            }else{
                                this.updateData(); 
                                // 若请求数据未更新,则手动变更
                                var flag = true;
                                for(let i=self.courseList.length-1;i>=0;i--) {
                                    if(self.courseList[i].course_type) {
                                        if(flag) {
                                            self.newCourse = self.courseList[i];
                                            flag = false;
                                        }
                                        self.myCourses.push(self.courseList[i]);
                                        self.courseList.splice(i,1);
                                    }
                                }
                                this.count = 0;
                            }
                        }else if(res&&res.status) {
                            weex.requireModule('modal').toast({
                                message: this.$t('PAYMENT_FAILED'),
                                duration: 3
                            })
                        }else{ // 避免购买成功没有收到回调造成数据没更新导致的重复购买问题
                            this.updateData();
                            var lastCount = this.count;
                            var queryTimes = 0;
                            this.timer = setInterval(function() {
                                if(queryTimes>1) {
                                    clearInterval(this.timer);
                                    return;
                                };
                                if(lastCount==this.count) {
                                    this.updateData();
                                }else{
                                    clearInterval(this.timer);
                                    return;
                                }
                                queryTimes++;
                            }.bind(this),2000);
                        }
                    });
                },
            },
            computed:{
                isWeb() {
                    return weex.config.env.platform=='Web';
                },
                fullWidth() {
                    return weex.config.env.platform=='Web'?'100%':weex.config.viewport+'px';
                },
                // fullHeight() {
				// 	return weex.config.env.platform=='Web'?'100%':weex.config.screenHeight+'px';
                // },
                lang() {
                    return util.getLang();
                }
            },
            mounted() {
                this.getCurrency();
                this.getMycourse();
                this.getCourseList();
            }
    }
</script>

<style scoped>
    .scroller{
        background-color: #f6f6f6;
    }
    .banner{
        background-color: #afafaf;
        height: 160px;
    }
    .myCourse{
        background-color: #ffffff;
    }
    .CourseHead{
        height: 40px;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        padding-left: 15px;
    }
    .headTitle{
        font-size: 16px;
        font-weight: 600;
        font-family: PingFangSC-Semibold;
    }
    .moreBtn{
        padding-right: 15px;
        /* width: 70px; */
        height: 40px;
        flex-direction: row;
        justify-content: flex-end;
        align-items: flex-end;
        padding-bottom: 4px;
    }
    .more{
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #999999;
        line-height: 16px;
        text-align: right;
        
    }
    .newCourse{
        flex-direction: row;
        /* height: 140px; */
        padding-bottom: 25px;
        padding-top: 25px;
        padding-left: 15px;
        padding-right: 15px;
        border-bottom-color: #e5e5e5;
        border-bottom-width: 1px;
        border-bottom-style: solid;

    }
    .picWrapper{
        width: 90px;
        height: 90px;
        border-radius: 2px;
        background-color: #d8d8d8;
        overflow: hidden;
    }
    .pic{
        width: 90px;
        height: 90px;
    }
    .courseInfo{
        margin-left: 15px;
        flex: 1;
    }
    .infoHead{
        flex-direction: row;
    }
    .courseTitle{
        font-size: 17px;
        color: #484848;
        line-height: 19px;
        font-weight: 600;
        font-family: Helvetica-Bold;
        lines: 2;
        flex: 1;
    }
    .courseIntro{
        flex: 1;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #999999;
        line-height: 18px;
        height: 54px;
        margin-top: 5px;
        lines: 3;
    }
    .recommendCourse{
        background-color: #ffffff;
        margin-top: 20px;
        border-top-color: #e5e5e5;
        border-top-width: 1px;
        border-top-style: solid;
        margin-bottom: 104px;
    }
    .noCourse{
        justify-content: center;
        height: 140px;
        align-items: center;
    }
    .noCoursePic{
        width: 71.5px;
        height: 68.5px;
    }
    .course{
        flex-direction: row;
        padding-bottom: 25px;
        padding-top: 25px;
        padding-left: 15px;
        padding-right: 15px;
        border-bottom-color: #e5e5e5;
        border-bottom-width: 1px;
        border-bottom-style: solid;
    }
    .audioFree{
        width: 48px;
        height: 16px;
    }
    .price{
        font-family: PingFangSC-Regular;
        width: 48px;
        font-size: 20px;
        line-height: 20px;
        color: #484848;
        text-align: right;
    }
    .alertBuy{
        position: absolute;
        top: 0;
    }
</style>