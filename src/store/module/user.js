import {login} from '../../config'
const state = {
  logined: false,
  userInfo: {}
}
const getters = {
  // 验证是否登录
  checkAuthor (state) {
    return state.logined
  },
  // 获取登录用户信息
  getUserInfo (state) {
    return state.userInfo
  }
}
const mutations = {
  // 用户登录操作
  postLogin (state, This) {
    if (This.form.tel === '' || This.form.pwd === '') {
      This.$vux.toast.show({
        type: 'text',
        width: '20em',
        position: 'bottom',
        text: '手机号码和密码不能为空！',
        time: '1000'
      })
    } else if (!This.$refs.tel.valid) {
      This.$vux.toast.show({
        type: 'text',
        width: '20em',
        position: 'bottom',
        text: '手机号格式不正确',
        time: '1000'
      })
    } else {
      if (!This.loading) {
        This.$http({
          method: 'jsonp',
          url: login,
          jsonp: 'callback',
          jsonpCallback: 'json',
          params: {
            tel: This.form.tel,
            pwd: This.form.pwd
          },
          before: () => {
            This.loading = true
          }
        })
        .then(res => {
          if (res.body.data) {
            This.loading = false
            This.$vux.toast.show({
              type: 'text',
              width: '10em',
              position: 'bottom',
              text: '登录成功！',
              time: '1000'
            })
            state.logined = true
            state.userInfo = res.body.data.userInfo
            This.$localStorage.set('userInfo', JSON.stringify(state.userInfo))
            setTimeout(() => {
              console.log(This.$router)
              This.$router.replace('/')
            }, 1000)
          } else {
            This.loading = false
            This.$vux.toast.show({
              type: 'text',
              width: '15em',
              position: 'bottom',
              text: '用户名或者密码有误！',
              time: '1000'
            })
          }
        }, res => {
          This.loading = false
          This.$vux.toast.show({
            type: 'text',
            width: '20em',
            position: 'bottom',
            text: '服务器正在维护中！',
            time: '1000'
          })
        })
      } else {
        This.$vux.toast.show({
          type: 'text',
          width: '20em',
          position: 'bottom',
          text: '正在努力加载中，不要着急哦！',
          time: '1000'
        })
      }
    }
  }
}
export default {
  state,
  getters,
  mutations
}
