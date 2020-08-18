// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  vuex  from 'vuex'
import store from './store'
import Cookies from 'js-cookie'
import './assets/js/flexible-css-js' //淘宝布局适配移动端
import animated from 'animate.css'

Vue.config.productionTip = false

Vue.use(animated)
Vue.use(vuex)
Vue.use(Cookies)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
 
// {
//   let head_el = document.getElementsByTagName('head')[0]
//   let script_el = document.createElement('script')
//   script_el.src = './assets/js/flexible-css-js'
//   head_el.appendChild(script_el)
// }