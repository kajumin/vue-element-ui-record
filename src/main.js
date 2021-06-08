import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ElementUI from 'element-ui'
// Vue.use(ElementUI)
import '@/styles/common.scss'
import myPlugin from '@/utils/myPlugin.js'
Vue.use(myPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
