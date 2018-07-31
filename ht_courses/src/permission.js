import router 		 		from './router'
import store  		 		from './store'
import * as msgApi 		from './api'

router.beforeEach((to, from, next) => {	
	setTimeout(function(){
		if (store.getters.token) {
			next();
		}else{
			msgApi.getSessionInfo((res,token)=>{
		    if (res&&res.status===0) {
		    	store.commit('setToken',token);
		    	store.commit('setUserInfoAndApilist',res);
		    	if (to.path==='/') {
		    		next('/coursesClass');
		    	}else{
		    		next();
		    	}
		    }else{
		      if (to.path!=='/') {
		    		next({path:'/'});
		      }else{
		      	next();
		      }
		    }
		  })
		}
	}, 300);
})