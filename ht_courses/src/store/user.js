
const user = {
  state: {
    token: '',
    apiList: {},
    user: {}
  },

  mutations: {
    setToken: (state, token) => {
      state.token = token;
    },
    setUserInfoAndApilist: (state, config) => {
      if (config.apiList&&config.user) {
        state.apiList = config.apiList;
        state.user    = config.user;
      }
    }
  },



  actions: {
    // 用户名登录
    LoginByUsername({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password).then(response => {
          const data = response.data
          setToken(response.data.token)
          commit('SET_TOKEN', data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
export default user
