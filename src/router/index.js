import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      redirect: '/offer',
      component: require('@/views/TabView'),
      children: [
        {
          path: '/offer',
          components: {
            tab: require('@/views/Offer')
          }
        }, {
          path: '/mall',
          components: {
            tab: require('@/views/Mall')
          }
        }, {
          path: '/personer',
          components: {
            tab: require('@/views/Personer')
          }
        }
      ]
    }, {
      path: '/offer/:id',
      components: {
        default: require('@/views/OfferDetail')
      }
    }, {
      path: '/offer/:id/photograph',
      components: {
        default: require('@/views/PhotoGraph')
      }
    }, {
      path: '/login',
      name: 'Login',
      component: require('@/views/Login')
    }
  ]
})
router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', true)
  console.log('跳转之前')
  next()
})

router.afterEach(function (to) {
  store.commit('updateLoadingStatus', false)
  console.log('跳转之后')
})
export default router
