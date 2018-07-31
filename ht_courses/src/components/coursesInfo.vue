<template>
	<div class="coursesInfoBox"
			@click="coursesDetail"
			@mouseenter="openCoursesOpation=true"
			@mouseleave="openCoursesOpation=false">
		<ul class="coursesInfo">
			<li>
				<div class="coursesCount">{{course.content_count | countFormat}}</div>
				<div class="coursesInfoName">内容</div>
			</li>
			<li>
				<div class="coursesCount">00</div>
				<div class="coursesInfoName">待发</div>
			</li>
			<li>
				<div class="coursesCount">00</div>
				<div class="coursesInfoName">已发</div>
			</li>
		</ul>

		<div class="coursesOpation">
			<h3>{{course.lesson_name}}</h3>
			<div>
				<el-button type="text" v-if="openCoursesOpation" @click="reCoursesName($event)">编辑</el-button>
				<el-button type="text" v-if="openCoursesOpation" @click="removeCourses($event)">删除</el-button>
			</div>
		</div>
	</div>
</template>
<script>
import { MessageBox, Message } from 'element-ui'
import * as msgApi						 from './../api'

export default {
	data() {
		return {
			openCoursesOpation: false
		}
	},
	props:{
		course:Object,
		index:Number,
		coursesList:Array
	},
	methods:{
  	coursesDetail() {
  		this.$router.push({
  			name:'coursesDetail',
  			params:{
  				id:this.course.id,
  				name:this.course.lesson_name,
  				coursesList:this.coursesList
  			}
  		})
  	},
  	reCoursesName($event) {
  		var self = this;
  		$event.stopPropagation();
      MessageBox.prompt('请重新输入课名', ' ', {
        cancelButtonText: '取消',
        confirmButtonText: '确认',
        inputPlaceholder: '请重新输入课名',
        inputPattern: /^\S+$/,
        inputErrorMessage: '请正确输入课名',
        inputValue:this.course.lesson_name
      }).then(({ value }) => {
      	var name = value;
       //  MessageBox.prompt('请重新输入课程描述', ' ', {
	      //   cancelButtonText: '取消',
	      //   confirmButtonText: '确认修改',
	      //   inputPlaceholder: '请重新输入课程描述',
	      //   inputPattern: /^\S+$/,
	      //   inputErrorMessage: '请正确输入课程描述',
	      //   inputValue:this.course.description
	      // }).then(({ value }) => {
	      	msgApi.modifyCourse({
	      		lessonid   : self.course.id,
	      		lesson_name: name,
	      		description: ' '
	      	}).then(data=>{
	      		var res = data.data;
	      		if (res.status === 0) {
	      			Message({
					      message: '修改成功',
					      duration: 5 * 1000
					    })
	      			self.$emit('refreshList')
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
		removeCourses($event) {
			var self = this;
			$event.stopPropagation();
			MessageBox.confirm('确认删除此课?', '', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
      	msgApi.delCourse({
      		lessonid:self.course.id
      	}).then(data=>{
      		var res = data.data;
      		if (res&&res.status===0) {
      			self.$emit('delCourse',self.index)
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
		}
	}
}
</script>
<style>
.coursesInfoBox{
	width: 45%;
	border-top:1px solid #ddd;
	height: 200px;
	cursor: pointer;
	margin-bottom: 40px;
	margin-right: 3.33%;
	border-radius: 4px;
	box-shadow:0 0 9px 1px #ccc;
}
.coursesInfoBox:hover{
}
.coursesInfo{
	border-radius: 4px;
	/*border:1px solid;*/
	height: 80%;
	margin-bottom: 10px;
	display: flex;
}
.coursesInfo>li{
	width:33.33%;
  height: 100%;
	/*border:1px solid;*/
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.coursesCount{
	width:100%;
	height: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-right:1px solid;
	font-size: 24px;
}
.coursesInfo li:last-of-type .coursesCount{
	border:none;
}
.coursesInfoName{
	display: flex;
	justify-content: center;
	align-items: center;
}
.coursesOpation{
	display: flex;
	justify-content: space-between;
	padding:0 10px;
}
</style>
