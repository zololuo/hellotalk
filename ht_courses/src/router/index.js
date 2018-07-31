import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import loginPage     from './../components/loginPage'
import coursesDetail from './../components/coursesDetail'
import coursesClass	 from './../components/coursesClass'
import createCourses from './../components/createCourses'

var routerMap = [
	{ path: '/', component: loginPage },
	{ name:'coursesDetail', path:'/coursesDetail', component:coursesDetail },
	{ path:'/coursesClass', component: coursesClass },
	{ name:'createCourses', path:'/createCourses', component:createCourses}
]

export default new VueRouter({
  routes:routerMap
})