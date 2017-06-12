// import jsonp from 'jsonp'
const state = {
  logined: false,
  userInfo: {}
}
const getters = {
  chekLogined (state) {
    return state.logined
  }
}
const mutations = {
  postLogin (state, This) {
    This.$http({
      method: 'jsonp',
      url: 'http://liuwbox.com/zzbao/app/user/login.htm',
      jsonp: 'callback',
      jsonpCallback: 'json',
      params: {
        tel: This.form.tel,
        pwd: This.form.pwd
      },
      before: () => {
        if (This.loading) {
          console.log('不能再次点击', This.loading)
          return false
        }
        This.loading = true
      }
    })
    .then((res) => {
      console.log(res)
    })
  }
}
export default {
  state,
  getters,
  mutations
}
