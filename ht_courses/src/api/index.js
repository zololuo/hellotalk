import * as createFetch from './fetch'
import store       			from './../store'

var fetch = null

export function getSessionInfo(callback) {
  if(window.localStorage){
    var oid = window.localStorage.getItem('_tokendata');
    if(oid){
      try{
				var _tokendata = JSON.parse(oid);
				if (_tokendata.token) {
					// fetch = createFetch.createFetchPlugin('xuan');
					fetch = createFetch.createFetchPlugin(_tokendata.token);
					fetch({
						url: CHECK_SERVER_LOGIN,
						method: 'get'
					}).then(data=>{
						callback(data.data,_tokendata.token);
					}).catch(err=>{ console.log(err); })
				}else{
					callback('');
				}
			}
			catch(e){
				console.log('initSessionID',e)
			}
    }else{
    	callback('');
    }
  }
}

export function getQrcodeTokenURL(type,onsucc,onfail){
	axios({
    url: QR_TOKEN_URL,
    method: 'get'
  })
	.then(function (response) {
		onsucc(response.data)
	})
	.catch(function (error) {
		onfail( error);
	})
}

export function checkLoginSuccess(){
	if (store.getters.token){
		// fetch = createFetch.createFetchPlugin('xuan');
		fetch = createFetch.createFetchPlugin(store.getters.token);
	}else{
		debugger;
	}
}

export function moveTokenToLocal(tokenInfo) {
	if(window.localStorage){
		if (tokenInfo) {
			try{
				var _tokenStr = JSON.stringify(tokenInfo);
				window.localStorage.setItem('_tokendata',_tokenStr);
			}
			catch(e){
				console.log('saveSession',e)
			}
		}
  }
}

export function checkServerLogin(suc,fail) {
	fetch({
		url: CHECK_SERVER_LOGIN,
		method: 'get'
	}).then(data=>{
		var res = data.data;
    if (res&&res.status===0) {
    	store.commit('setUserInfoAndApilist',res);
      suc();
    }else if(res.message) {
      fail(res.message);
    }
	}).catch(err=>{ console.log(err); })
}

export function logOut(url,errcb) {
	if (window.localStorage) {
		window.localStorage.clear();
	}
	location.reload();
}

export function getCoursesList() {
	return fetch({
		url: store.getters.apiList.LESSON_LIST,
		method: 'get'
	})
}

export function createCourse(data) {
	return fetch({
		url: store.getters.apiList.LESSON_ADD,
		method: 'post',
		data
	})
}

export function modifyCourse(data) {
	return fetch({
		url: store.getters.apiList.LESSON_EDID,
		method: 'post',
		data
	})
}

export function delCourse(data) {
	return fetch({
		url: store.getters.apiList.LESSON_DEL,
		method: 'post',
		data
	})
}

export function getCourseContentList(data) {
	return fetch({
		url: store.getters.apiList.CONTENT_LIST,
		method: 'get',
		params: data
	})
}

export function getCourseContentInfo(data) {
	return fetch({
		url: store.getters.apiList.CONTENT_INFO,
		method: 'get',
		params: data
	})
}

export function createCourseContent(data) {
	return fetch({
		url: store.getters.apiList.CONTENT_ADD,
		method: 'post',
		data
	})
}

export function editCourseContent(data) {
	return fetch({
		url: store.getters.apiList.CONTENT_EDIT,
		method: 'post',
		data
	})
}

export function delCourseContentItem(data) {
	return fetch({
		url: store.getters.apiList.CONTENT_DEL,
		method: 'post',
		data
	})
}
export function getProductList (data) {
  return fetch({
    url: store.getters.apiList.PRODUCT_LIST,
    method: 'get',
    params: data
  })
}

export function getOFFICIAL_ACC_ART_EDIT(data) {
  return fetch({
    url: store.getters.apiList.OFFICIAL_ACC_ART_EDIT,
    method: 'get',
    params: data
  })
}

export function queryRoomInfo(data) {
  return fetch({
    url: store.getters.apiList.QUERY_ROOM_INFO,
    method: 'get',
    params: data
  })
}

export function addAutoPubTask(data) {
  return fetch({
    url: store.getters.apiList.ADD_AUTO_PUB_TASK,
    method: 'post',
    data
  })
}



export function getAutoPubTaskList(data) {
  return fetch({
    url: store.getters.apiList.AUTO_PUB_TASK_LIST,
    method: 'get',
    params: data
  })
}

export function delAutoPubTask(data) {
  return fetch({
    url: store.getters.apiList.DEL_AUTO_PUB_TASK,
    method: 'post',
    data
  })
}

export function editAutoPubTask(data) {
  return fetch({
    url: store.getters.apiList.EDIT_AUTO_PUB_TASK,
    method: 'post',
    data
  })
}
