import ElementUI from 'element-ui'
import createPreview from '@/components/ImgPreview/index.js'
import NoData from '@/components/no-data/NoData.vue'
import MPagination from '@/components/pagination/Pagination.vue'

import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'

export default function install(Vue) {
  // 引入element-ui
  Vue.use(ElementUI, { size: 'small' })
  Vue.prototype.$createPreview = createPreview
  // 自定义组件
  Vue.component(NoData.name, NoData)
  Vue.component(MPagination.name, MPagination)
}
