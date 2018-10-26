import Vue from 'vue'
import App from './App'
import router from './router'

import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})