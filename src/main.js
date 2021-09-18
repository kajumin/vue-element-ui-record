import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import createPreview from '@/components/ImgPreview/index.js'
import initPlugin from '@/utils/initPlugin.js'
import '@/styles/common.scss'
import '@/styles/sass-fn.scss'
import '@/styles/base.scss'
import 'font-awesome/css/font-awesome.min.css'
Vue.prototype.$createPreview = createPreview
Vue.use(ElementUI)
// import myPlugin from '@/utils/myPlugin.js'
// Vue.use(myPlugin)
Vue.use(initPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
