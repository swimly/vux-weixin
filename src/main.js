// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import store from './store'
import {WechatPlugin, AjaxPlugin, LoadingPlugin, ToastPlugin} from 'vux'
import VueLazyload from 'vue-lazyload'
import VueHead from 'vue-head'
Vue.use(LoadingPlugin)

FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(VueHead)
Vue.use(ToastPlugin)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'static/img/loading.gif',
  attempt: 1
})
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
