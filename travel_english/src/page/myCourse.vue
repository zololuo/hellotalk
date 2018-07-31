<template>
    <div @viewappear="viewappearAct">
        <navBar :title="$t('MY_LESSONS')"></navBar>
        <courseList :courseList="courseList" :userInfo="userInfo"  :isBuy="true" :source="source" :hpUserinfo="hpUserinfo"></courseList>
    </div>
    
</template>

<style scoped>
    
</style>
<script>
    import                      '@/pageEntry'
    import navBar from '@/components/navBar'
    import courseList from '@/components/courseList'
    import * as util from '@/util'
    import {fetch,$get,getHpUserInfo}        from             '@/api'
	export default {
            components:{navBar, courseList},
            created:function () {
                
            },
            data(){
                return {
                    myCourseNum: 6,
                    audioFreeSrc:'http://ht-blog.oss-cn-hongkong.aliyuncs.com/class_share/20180629/36775fb3a07b691e3ab65956931af765.png?x-oss-process=image/resize,w_750/quality,q_88',
                    noCoursePicSrc:'http://ht-blog.oss-cn-hongkong.aliyuncs.com/class_share/20180629/99f94e796b8be3e01a7cc68eaa86178c.png?x-oss-process=image/resize,w_750/quality,q_88',
                    courseList: [],
                    userInfo: {},
                    source: '',
                    hpUserinfo: {}
                }
            },
            methods:{
                $t(attr,...data) {
                    return util.translate(attr, data);
                },
                viewappearAct() {
                    var obj = util.parseQueryString(weex.config.bundleUrl);
                    if(obj&&obj.userid) {
                        this.userInfo.userid = obj.userid;
                        if(obj.source&&obj.source==0) {
                            this.source = 'public_account_home_page'
                        }
                    }
                    util.sensorsAct('MCViewScreen',{
                        page_name: 'My Course',
                        source: this.source
                    })
                },
            },
            computed:{
                isWeb() {
                    return weex.config.env.platform=='Web';
                },
                fullWidth() {
                    return weex.config.env.platform=='Web'?'100%':weex.config.viewport+'px';
                }
            },
            mounted() {
                var self = this;
                $get('mycourse').then(data=>{
                    self.courseList = data.course_list;
                });
                if (WXEnvironment.platform==='Web') {
                    this.hpUserinfo = {
                        hpUserId:15040,
                        hpUserName: 'mini course'
                    }
                    return;
                }else{
                    getHpUserInfo().then(hpUserinfo=>{
                        self.hpUserinfo = hpUserinfo;
                    })
                }
                // fetch('mycourse',{userid:this.userInfo.userid}).then(data=>{
                //     self.courseList = data.course_list;
                // })
            }
    }
</script>
