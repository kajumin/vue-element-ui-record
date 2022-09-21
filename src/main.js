import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import initPlugin from '@/utils/initPlugin.js'

import '@/styles/init.scss'

Vue.use(initPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
