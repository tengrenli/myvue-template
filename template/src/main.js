import 'lib-flexible'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import inject from './inject'
import filters from './utils/filter'
import FastClick from 'fastclick'

// 注册过滤器
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

Vue.use(inject)
/**
 * 消除物理点击和 click 移动浏览器上的事件触发之间的300毫秒延迟
 */
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
