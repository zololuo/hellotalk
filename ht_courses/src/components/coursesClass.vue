<template>
	<div class="wrapper-bg">
		<div class="wrapper" ref="wrapper">
			<div class="btn-head">
				<h1>课堂内容管理</h1>
					<el-button  size="small"
											type="primary"
											class='el-icon-plus up tootlpBox'
											@click="confirmCoursesName"
											ref="file_btn"><div class="tootlpTitle" v-if="coursesList.length===0">暂无课程，点击按钮进行添加</div></el-button>
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

			<div class="coursesList">
				<coursesInfo v-for="(item,index) in coursesList"
										:key="index"
										:course="item"
										:index="index"
										:coursesList="coursesList"
										@delCourse="delCourse"
										@refreshList="refreshList"></coursesInfo>
			</div>

		</div>
	</div>
</template>
<script>
// import * as util from './../api/module/util';
import * as msgApi from './../api';
import { MessageBox, Message } from 'element-ui';
import coursesInfo	from './coursesInfo'
import { mapGetters } from 'vuex'

export default {
	data(){
		return {
			showRemindTitle: true,
			icon_derection:false,
			coursesList:[]
		}
	},
	components: { coursesInfo },
	computed: {
		...mapGetters([ 'user' ]),
		HEAD_HOST(){
			return HEAD_HOST;
		}
	},
	mounted() {
		this.refreshList();
	},
  methods: {
  	refreshList() {
  		var self = this;
			msgApi.getCoursesList().then(data=>{
				var res = data.data;
				if (res&&res.status===0) {
					self.coursesList = res.data;
				}else{
					Message({
			      message: res.message,
			      type: 'error',
			      duration: 5 * 1000
			    })
				}
			}).catch(err=>{ console.log(err); })
  	},
  	logOut() {
  		msgApi.logOut()
  	},
  	confirmCoursesName() {
  		var self = this;
  		MessageBox.prompt(' ', '课名', {
        cancelButtonText: '取消',
        confirmButtonText: '确认',
        inputPlaceholder: '请输入课名',
        inputPattern: /^\S+$/,
        inputErrorMessage: '课名不能含有非空字符'
      }).then(({ value }) => {
      	var name = value;
       //  MessageBox.prompt(' ', ' ', {
	      //   cancelButtonText: '取消',
	      //   confirmButtonText: '创建',
	      //   inputPlaceholder: '请输入课程描述',
	      //   inputPattern: /^\S+$/,
	      //   inputErrorMessage: '请正确输入课程描述'
	      // }).then(({ value }) => {
	      	msgApi.createCourse({
	      		lesson_name: name,
	      		description: ' '
	      	}).then(data=>{
	      		var res = data.data;
	      		if (res.status === 0) {
	      			self.refreshList();
	      		}else{
	      			Message({
					      message: res.message,
					      type: 'error',
					      duration: 5 * 1000
					    })
	      		}
	      	}).catch(err=>{ console.log(err); })
	      // }).catch(() => {});
      }).catch(() => {});
  	},
  	delCourse(index) {
  		this.coursesList.splice(index,1);
  	}
  }
}
</script>

<style scoped>
.wrapper-bg{
	height: 100%;
	width: 100%;
	background-color: #ddd;
	overflow: hidden;
}
.wrapper{
  min-width: 451px;
	width:80%;
	height: 80%;
	background-color: #fff;
	margin:100px auto;
	border-radius: 6px;
	position: relative;
}
.el-button--primary{
	height: 40px;
	padding:0px 50px;
	background-color: rgb(66,95,208)!important;
	border:none;
	font-size: 20px;
	margin-right: 20px;
}
.btn-head{
	display: flex;
	padding:20px 4%;
	align-items: center;
}
.btn-head h1{
	font-weight: normal;
	margin:0;
	margin-right: 20px;
	font-size: 22px;
}
.ic-web-succeed-normal {
	width: 20px;
	height: 20px;
	object-fit: contain;
	vertical-align: middle;
}
.coursesList{
	width:100%;
	display: flex;
	flex-wrap: wrap;
	max-height: calc(100% - 80px);
	overflow: auto;
	box-sizing: border-box;
	padding:0 4%;
	padding-right: 0;
}
</style>
