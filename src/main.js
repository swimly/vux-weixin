// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import store from './store'
import {WechatPlugin, LoadingPlugin, ToastPlugin} from 'vux'
import VueLazyload from 'vue-lazyload'
import VueHead from 'vue-head'
import VueResource from 'vue-resource'
import VueJsonp from 'vue-jsonp'
Vue.use(LoadingPlugin)

FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.use(VueJsonp, 5000)
Vue.use(WechatPlugin)
Vue.use(VueResource)
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
