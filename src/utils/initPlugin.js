import NoData from '@/components/no-data/NoData.vue'
import MPagination from '@/components/pagination/Pagination.vue'

export default function install(Vue) {
  // 自定义组件
  Vue.component(NoData.name, NoData)
  Vue.component(MPagination.name, MPagination)
}
