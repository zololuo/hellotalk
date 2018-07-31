<template>
	<div class="coursesDetail">
		<div class="detailContent">
			<div class="opation-box">
				<div>
				  <el-dropdown @command="handleCommand"
				  						 @visible-change="downMenu"
				     					 v-if="$route.params.name&&$route.params.coursesList">
	          <h1 class="coursesClassSelect">
					    {{currentCourseName}}<i class="el-icon--right el-icon-arrow-down" :class="{'route-icon':icon_downMenu}"></i>
					  </h1>
	          <el-dropdown-menu slot="dropdown">
	            <el-dropdown-item v-for="(item,index) in $route.params.coursesList"
	            									:key="index"
	            									v-if="item.lesson_name!==currentCourseName"
	            									:command="{item:item,list:$route.params.coursesList}">{{item.lesson_name}}</el-dropdown-item>
	            <div 	style="text-indent:10px;"
	            			v-if="$route.params.coursesList&&$route.params.coursesList.length<2">无其他课程</div>
	          </el-dropdown-menu>
	        </el-dropdown>
					<el-button type="primary" class="createCoursesBtn tootlpBox" @click="createCourseContent">添加<div class="tootlpTitle" v-if="coursesContentList.length===0">暂无内容，点击按钮进行添加</div></el-button>
				</div>

				<el-tooltip placement="bottom" v-model="icon_derection">
				  <div slot="content">
						<el-button class="cancel-btn" @click="logOut" type="text">{{t('log_out')}}</el-button>
				  </div>
			    <div class="user-center" v-if="user">
			    	<div class="hu-box">
			    		<img :src="HEAD_HOST+user.headurl" alt="">
			    	</div>
			    	<span>{{user.nickname}}</span>
			    	<i class="el-icon-arrow-down" :class="{'route-icon':icon_derection}"></i>
			    </div>
				</el-tooltip>

			</div>
			<div class="detail-list">
				<el-table
			    :data="coursesContentList"
			    height="100%"
			    border
			    style="flex:1">
			    <el-table-column
			      prop="title"
			      label="标题"
			      width="180">
			    </el-table-column>
			    <el-table-column
			      prop="link"
			      label="链接"
            id="cell"
          >
			      <template slot-scope="scope">
			      	<a :href="scope.row.link" target="_blank">{{scope.row.link}}</a>
			      </template>
			    </el-table-column>
			    <el-table-column
			      prop="creator"
			      width="180"
			      label="创建者">
			    </el-table-column>
			    <el-table-column
			    	width="270"
			      label="操作">
			      <template slot-scope="scope">
			        <el-button type="text" size="large" @click="openWindow('openIssue',scope)">发布</el-button>
			        <el-button type="text" size="large" @click="previewPage(scope.row.link)">预览</el-button>
			        <el-button type="text" size="large">复制</el-button>
			        <el-button type="text" size="large" @click="delCourseContentItem(scope.row.id,scope.$index)">删除</el-button>
			        <el-button type="text" size="large" @click="editCourseContent(scope.row.id)">编辑</el-button>
              <br>
              <a :href="encodeURI(headUrl+'?ref=addtabs&links='+scope.row.link)" target="_blank" class="btn" >发布到公众号</a>
			      </template>
			    </el-table-column>
			  </el-table>
        <postedList :posted_list="postedList" v-on:getChildData="openAlertWindow" v-on:updatePostedList="updateIssueList"></postedList>
        <transition name="fade">
          <div class="box-shadow" v-show="openIssue">
            <!--<div class="issue-box">-->
            <el-form :model="validIssueInfoForm" ref="validIssueInfoForm" class="issue-box">
              <h3>自动发布</h3>
              <el-form-item
                label="发布对象"
                prop="group_id"
                :rules="[
                    { required: true, message: '群ID不能为空'},
                    { type: 'number', message: '群ID必须为数字值'}
                  ]">
                <span id="title">{{ group_name }}</span>
                <el-input type="group_id" v-model.number="validIssueInfoForm.group_id" placeholder="请输入对应的群ID" @blur="queryGroupId"></el-input>
              </el-form-item>
              <el-form-item
                label="发布时间"
                prop="datetime"
                :rules="[{ required: true, message: '发布时间不能为空'}]"
              >
                <el-date-picker  v-model="validIssueInfoForm.datetime" type="datetime"  placeholder="选择日期时间" @blur="checkTime"></el-date-picker>
              </el-form-item>
              <el-form-item class="btn-wrap">
                <span @click="closeWindow('openIssue')" style="cursor: pointer;display:inline-block;width: 60px;height: 100%;">取消</span>
                <el-button type="primary" @click="issueCourse('validIssueInfoForm')">发布</el-button>
              </el-form-item>
            </el-form>
            <!--</div>-->
          </div>
        </transition>
        <transition name="fade">
          <div class="box-shadow" v-show="openAlert">
            <!--<div class="issue-box">-->
            <el-form :model="validIssueInfoForm" ref="validIssueInfoForm" class="issue-box">
              <h3>修改发布</h3>
              <el-form-item
                label="发布对象"
                prop="group_id"
                :rules="[
                            { required: true, message: '群ID不能为空'},
                            { type: 'number', message: '群ID必须为数字值'}
                          ]">
                <span id="title1">{{ group_name }}</span>
                <el-input type="group_id" v-model.number="validIssueInfoForm.group_id" placeholder="请输入对应的群ID" @blur="queryGroupId"></el-input>
              </el-form-item>
              <el-form-item
                label="发布时间"
                prop="datetime"
                :rules="[{ required: true, message: '发布时间不能为空'}]"
              >
                <el-date-picker  v-model="validIssueInfoForm.datetime" type="datetime"  placeholder="选择日期时间" @change="checkTime"></el-date-picker>
              </el-form-item>
              <el-form-item class="btn-wrap">
                <span @click="closeWindow('openAlert')" style="cursor: pointer;display:inline-block;width: 60px;height: 100%;">取消</span>
                <el-button type="primary" @click="updateIssue('validIssueInfoForm')">确认修改</el-button>
              </el-form-item>
            </el-form>
            <!--</div>-->
          </div>
        </transition>
        <transition name="fade">
          <div class="box-shadow" v-show="openHistoryList">
            <div class="list-box">
              <ul class="list ">
                <li v-for="item in historyList" >
                  <p class="fl-l time">{{item.time}}</p>
                  <h4 class="fl-r">{{item.issuer}}</h4>
                  <h4 class="fl-l cl">{{item.title}}</h4>
                  <p class="fl-r c-555">{{item.room_name}}</p>
                </li>
              </ul>
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentHistoryPage"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="totalPage">
              </el-pagination>
              <el-button type="primary" @click="closeWindow('openHistoryList')">取消</el-button>
            </div>


          </div>
        </transition>
			  <el-button type="button" size="large" class="postedHistory el-button--info" @click="openWindow('openHistoryList')">发布历史 ({{totalPage}})</el-button>
			</div>
		</div>

		<el-dialog :visible.sync="dialogTableVisible" custom-class="preview-wrapper" :show-close="false">
			<div class="preview-box">
				<iframe id="huoduan_frame"
						  frameborder="0"
						  scrolling="auto"
						  :src="currentLink"
						  style="display:block;height:76%;width:86%; z-index: 1;overflow: visible;"></iframe>
			</div>
		</el-dialog>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import * as msgApi    from './../api'
import { Message, MessageBox } from 'element-ui'
import postedList  from './postedList'
export default {
	data() {
		return {
			currentCourseId:null,
			currentCourseName:null,
			currentLink: null,
			icon_derection:false,
			icon_downMenu:false,
      coursesContentList:[],
      dialogTableVisible: false,
      headUrl: '',
      openIssue: false,
      openAlert: false,
      openDel: false,
      openHistoryList: false,
      validIssueInfoForm:{
        group_id: '',
        datetime: '',
      },
      group_name: '',
      postedList: [],
      currentIndex: 0,
      currentIssueInfo: {
			  id: null,
        index: null,
			  title: '',
        time: '',
        type: '',
        issuer: '',
        task_id: ''
      },
      currentHistoryPage: 1,
      totalPage:null,
      pageSize: 10,
      historyList:[{
        time: '2018-01-08 10:38:00',
        issuer: 'QinDapa',
        title: '21天英语课',
        room_name: '1002100_HelloTalk口语突破'
      },{
        time: '2018-01-08 10:38:00',
        issuer: 'QinDapa',
        title: '21天英语课',
        room_name: '1002100_HelloTalk口语突破'
      },{
        time: '2018-01-08 10:38:00',
        issuer: 'QinDapa',
        title: '21天英语课',
        room_name: '1002100_HelloTalk口语突破'
      }]
		}
	},
	computed: {
		...mapGetters([ 'user' ]),
		HEAD_HOST(){
			return HEAD_HOST;
		}
	},
  components:{
    postedList
  },
	mounted() {
		this.currentCourseName = this.$route.params.name;
		this.currentCourseId 	 = this.$route.params.id;
		// console.log(this.$route.params);
		if (typeof this.$route.params.id === 'number') {
			this.refreshList(this.$route.params.id);
		}else{
			this.$router.push('/coursesClass');
		}
		this.sendPublicAccount();
    this.queryAutoPubTaskList();
	},
	methods:{
		logOut() {
  		msgApi.logOut()
  	},
  	refreshList(id) {
  		var self = this;
			msgApi.getCourseContentList({
				lessonid:id
			}).then(data=>{
				var res = data.data;
				if (res&&res.status===0) {
					self.coursesContentList = res.data;
				}else{
					Message({
			      message: res.message,
			      type: 'error',
			      duration: 5 * 1000
			    })
				}
			}).catch(err=>{ console.log(err); })
  	},
		handleCommand(obj) {
			this.currentCourseName = obj.item.lesson_name;
			this.currentCourseId	 = obj.item.id;
			this.refreshList(obj.item.id);
		},
		downMenu(val) {
			this.icon_downMenu = val;
		},
		delCourseContentItem(itemId,index) {
			var self = this;
			MessageBox.confirm('确认删除课程内容?', '', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
      	msgApi.delCourseContentItem({
      		content_id: itemId
      	}).then(data=>{
      		var res = data.data;
      		if (res&&res.status===0) {
      			self.coursesContentList.splice(index,1);
      			Message({
				      message: '删除成功',
				      duration: 5 * 1000
				    })
      		}else{
      			Message({
				      message: res.message,
				      type: 'error',
				      duration: 5 * 1000
				    })
      		}
      	}).catch(err=>{ console.log(err); })
      }).catch(() => {});
		},
		editCourseContent(id) {
			this.$router.push({
  			name:'createCourses',
  			params:{
  				id:id,
  				mode:'edit',
  				faId: this.currentCourseId,
  				faName: this.currentCourseName,
  				faCoursesList: this.$route.params.coursesList
  			}
  		})
		},
		createCourseContent(){
			this.$router.push({
  			name:'createCourses',
  			params:{
  				mode:'create',
  				faId: this.currentCourseId,
  				faName: this.currentCourseName,
  				faCoursesList: this.$route.params.coursesList
  			}
  		})
		},
		previewPage(link) {
			this.currentLink				= link;
			this.dialogTableVisible = true;
		},
    sendPublicAccount (){
      var self = this;
      msgApi.getOFFICIAL_ACC_ART_EDIT({

      }).then(data=>{
        var res = data;
        console.log(res.config.url);
        if (res&&res.status===200) {
          self.headUrl = res.config.url;
        }else{
          Message({
            message: res.message,
            type: 'error',
            duration: 5 * 1000
          })
        }
      }).catch(err=>{ console.log(err); })
    },
    openWindow(ele,data) {
      this[ele] = true;
      if(data){
        this.currentIssueInfo.id = data.row.id;
        this.currentIssueInfo.title = data.row.title;
        this.currentIssueInfo.index = data.$index;
      }
      if(ele==='openHistoryList') {this.queryAutoPubTaskList()}
    },
    closeWindow(ele) {
      this[ele] = false;
    },
    updateIssue(formName) {
        let self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            msgApi.editAutoPubTask({
              task_id: Number(self.currentIssueInfo.task_id),
              room_id:  self.validIssueInfoForm.group_id,
              set_time: self.validIssueInfoForm.datetime
            }).then(data=>{
              var res = data;
              console.log(res);
              if (res&&res.status===200&&res.data.status===0) {
                self.postedList.splice(self.currentIssueInfo.index,1,{
                  title: self.currentIssueInfo.title,
                  time: self.validIssueInfoForm.datetime,
                  type: self.validIssueInfoForm.group_id+'_'+self.group_name,
                  issuer: self.user.nickname,
                  flag: false,
                  task_id: res.data.task_id})
                console.log(self.postedList)
              }else{
                Message({
                  message: res.message,
                  type: 'error',
                  duration: 5 * 1000
                })
              }
            }).catch(err=>{ console.log(err); })
            this.openAlert = false;
          } else {
            console.log('error issue!! Form valid error!!!');
            return false;
          }
        });
    },
    issueCourse(formName) {
      let self = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          msgApi.addAutoPubTask({
            content_id: Number(self.currentIssueInfo.id),
            room_id:  self.validIssueInfoForm.group_id,
            set_time: self.validIssueInfoForm.datetime
          }).then(data=>{
            var res = data;
            if (res&&res.status===200&&res.data.status===0) {
              // 参数验证 需要判断返回结果才添加
              self.postedList.push({
                title: self.currentIssueInfo.title,
                time: self.validIssueInfoForm.datetime,
                type: self.validIssueInfoForm.group_id+'_'+self.group_name,
                issuer: self.user.nickname,
                flag: false,
                task_id: res.data.task_id,
                room_id: self.validIssueInfoForm.group_id,
                group_name: self.group_name
              })
              self. queryAutoPubTaskList();
            }else{
              Message({
                message: res.message,
                type: 'error',
                duration: 5 * 1000
              })
            }
          }).catch(err=>{ console.log(err); })
          this.openIssue = false;
        } else {
          console.log('error issue!! Form valid error!!!');
          return false;
        }
      });
    },
    checkTime(e) {
       let date = new Date(this.validIssueInfoForm.datetime);
       let Y = date.getFullYear(),M = date.getMonth() + 1, D = date.getDate() ,h= date.getHours(),i = date.getMinutes(), s = date.getSeconds();
        M = M>9?M:'0'+M;
        D = D>9?D:'0'+D;
        h = h>9?h:'0'+h;
        i = i>9?i:'0'+i;
        s = s>9?s:'0'+s;
        let formDate = Y+'-'+M+'-'+D+' '+h+':'+i+':'+s;
      this.validIssueInfoForm.datetime = formDate;
    },
    queryGroupId(e) {
      let self = this;
      let id = self.validIssueInfoForm.group_id;
      if (typeof id === 'number') {
        msgApi.queryRoomInfo({
          room_id: id
        }).then(data=>{
          let res = data;
          console.log(data);
          if (res&&res.status===200) {
            self.group_name = data.data.roomname;
          }else{
            Message({
              message: res.message,
              type: 'error',
              duration: 5 * 1000
            })
          }
        }).catch(err=>{ console.log(err); })
      }
    },
    openAlertWindow(data) {
        console.log(data);
        this.openAlert = data["currentItem"].flag;
        this.currentIssueInfo.id = data["currentItem"].id;
        this.currentIssueInfo.task_id = data["currentItem"].task_id;
        this.currentIssueInfo.index =  data.index;
        this.currentIssueInfo.title = data["currentItem"].title;
        this.currentIssueInfo.time = data["currentItem"].time;
        this.currentIssueInfo.type = data["currentItem"].type;
        this.group_name = data["currentItem"].group_name;
        this.validIssueInfoForm.group_id = data["currentItem"].room_id;
        this.validIssueInfoForm.datetime = data["currentItem"].time;
    },
    updateIssueList (data) {
      this.postedList = data;
    },
    handleSizeChange () {

    },
    handleCurrentChange (e) {
      let self = this;
      self.currentHistoryPage = e;
      msgApi.getAutoPubTaskList({
        lesson_id: self.currentCourseId,
        is_pub: 1,
        page:  self.currentHistoryPage,
        limit: self.pageSize
      }).then(data=>{
        var res = data;
        if (res&&res.status===200&&res.data.status===0) {
          // 参数验证 需要判断返回结果才添加
          console.log(res.data)
          let lists = [];
          res.data.data.forEach(function (val) {
            let item = {
              time: val.pub_time,
              title: 'DAY1.How are you',
              room_name: val.room_name,
              issuer: self.user.nickname
            }
            lists.push(item);
          })
          self.historyList = lists;
        }else{
          Message({
            message: res.message,
            type: 'error',
            duration: 5 * 1000
          })
        }
      }).catch(err=>{ console.log(err); })

    },
    queryAutoPubTaskList () {
      let self = this;
      msgApi.getAutoPubTaskList({
        lesson_id: self.currentCourseId,
        is_pub: 1,
        page:  self.currentHistoryPage,
        limit: self.pageSize
      }).then(data=>{
        var res = data;
        if (res&&res.status===200&&res.data.status===0) {
          // 参数验证 需要判断返回结果才添加
          console.log(res.data)
          self.totalPage = res.data.total_count;
          let lists = [];
          res.data.data.forEach(function (val) {
            let item = {
              time: val.pub_time,
              title: 'DAY1.How are you',
              room_name: val.room_name,
              issuer: self.user.nickname
            }
            lists.push(item);
          })
          self.historyList = lists;
        }else{
          Message({
            message: res.message,
            type: 'error',
            duration: 5 * 1000
          })
        }
      }).catch(err=>{ console.log(err); })
    }

  }
}
</script>
<style scoped>
  a{text-decoration: none;}
  a.btn{
    color: #4db3ff;
  }
.coursesDetail{
	width:100%;
	height: 100%;
	background-color: #ddd;
	overflow:hidden;
}
.opation-box{
	height: 80px;
	width:75%;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.detailContent{
  min-width: 451px;
	width:80%;
	height: 80%;
	background-color: #fff;
	margin:100px auto;
	border-radius: 6px;
	position: relative;
	padding:2% 4% 50px;
	box-sizing: border-box;
}
.coursesClassSelect{
	color: #000;
	font-weight: normal;
	font-size: 20px;
	margin-right: 30px;
	cursor: pointer;
}
.coursesClassSelect i{
	font-size: 14px;
}
.detail-list{
	width:100%;
	display: flex;
	height: calc(100% - 80px);
	position: relative;
}

.ellipsis div.cell{

}

.createCoursesBtn{
	width:140px;
}
.postedHistory{
	font-size: 14px;
	position: absolute;
	bottom: -35px;
	right:0;
}
.el-button--info{
  padding:5px 5px;
}

.box-shadow{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.7);
  z-index: 9;
}
.box-shadow .issue-box{
  position:absolute ;
  top: 30%;
  left: 50%;
  width: 430px;
  height: 280px;
  box-sizing: border-box;
  padding: 40px 30px 15px 30px;
  -webkit-transform: translate(-50%,-50%);
  -moz-transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
  -o-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  z-index: 2000;
  background: #fff;
}
  .issue-box .el-date-editor,.issue-box .el-select,.issue-box .btn-wrap,.el-input{
    width: 290px;
    /*margin-top: 15px;*/
    /*margin-left:10px;*/
}
.el-input__inner{
  height: 24px;
  border-radius: 0;
  border-color: #000000;
}
  .issue-box .el-button{
    width: 140px;
    float: right;
  }
  .issue-box .btn-wrap{
     float: right;
    margin-top: 40px;
    font-size: 14px;
    line-height: 35px;
  }
  .btn-wrap:after{
    content: '';
    display: block;
    clear: both;
    overflow: hidden;
  }
  .el-picker-panel.el-date-picker.has-time{
    min-width: 290px !important;
    width: 290px !important;
    top: 413px !important;
    left: 952px !important;
  }
  #title,#title1{
    position: absolute;
    top: 0;
    right: 5px;
    width: 120px;
    z-index: 9;
    text-align: right;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 12px;

  }
  .el-pagination{
    text-align: center;
    position: absolute;
    bottom: 10%;
  }
  .list-box{
    position: relative;
    width: 60%;
    height: 80%;
    margin: 50px auto;
    background: #fff;
    padding: 20px 20px 55px 20px;
    box-sizing: border-box;
  }
  .list-box .el-button{
    position: absolute;
    margin-top: 10px;
    right: 20px;
    bottom: 2%;
  }
  .list{
    width: 85%;
    height: 90%;
    overflow: auto;
    margin: auto;
    background: #fff;
    padding-bottom: 10px;
  }
  .list > li{
    height: 50px;
    padding:5px;
    box-sizing:border-box;
    border-bottom: 1px solid #ccc;
  }
  .list > li:after{
    content:'';
    display:block;
    clear:both;
    overflow:hidden;
  }
  .list li h4,.list li p{
    /* display:inline-block; */
    padding:0;
    margin:0;

  }
  p.time,p.c-555{color:#555;font-size:12px;}
  .c-555{color:#555;}
  .fl-l{float:left;}
  .fl-r{float:right;}
  .cl{clear:both;}
.fade-enter-active, .fade-leave-active {
 transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>
