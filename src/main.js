import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import VueLazyload from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import VueCookie from 'vue-cookie'
import { userInfo } from './api'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
Vue.use(infiniteScroll)
Vue.use(VueCookie)
Vue.use(VueLazyload, {
  // preLoad: 1.3,
  // error: 'dist/error.png',
  loading: '/static/images/load.gif'
  // attempt: 1
})
// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false
const whiteList = ['/home', '/goods', '/login', '/goodsDetails'] // 不需要登陆的页面
router.beforeEach((to, from, next) => {
  userInfo().then(res => {
    if (res.status === '1') { // 没登录
      if (whiteList.indexOf(to.path) !== -1) { // 白名单
        next()
      } else {
        next('/login')
      }
    } else {
      store.commit('RECORD_USERINFO', {info: res.result})
      if (to.path === '/login') { //  跳转到
        next({path: '/'})
      }
      next()
    }
  })
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
