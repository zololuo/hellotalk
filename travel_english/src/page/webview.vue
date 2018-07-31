<template>
    <div>
        <navBar :title="$t('MY_LESSONS')"></navBar>
        <web class="web" :style="{width:fullWidth}" src="http://qtest.hellotalk.org/htmall/fastadmin/public/index.php/lesson/minicourse/coursecontent?openid=23WmTPpSEHZj&courseid=2&token=4496154fb0764f159de196e4750e3cf5"></web>
    </div>
    
</template>

<style scoped>
    .web{
        flex: 1;
    }
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
               
                // fetch('mycourse',{userid:this.userInfo.userid}).then(data=>{
                //     self.courseList = data.course_list;
                // })
            }
    }
</script>
