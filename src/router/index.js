import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: { name: 'ElementUI' }
  },
  {
    path: '/element-ui',
    name: 'ElementUI',
    component: () => import(/* webpackChunkName: "element-ui" */ '@/views/ElementUI.vue'),
    redirect: { name: 'Upload' },
    children: [
      {
        path: 'upload',
        name: 'Upload',
        component: () => import(/* webpackChunkName: "upload" */ '@/views/form/Upload.vue')
      },
      {
        path: 'select',
        name: 'Select',
        component: () => import(/* webpackChunkName: "select" */ '@/views/form/Select.vue')
      },
      {
        path: 'cascader2',
        name: 'Cascader2',
        component: () => import(/* webpackChunkName: "cascader2" */ '@/views/form/Cascader2.vue')
      },
      {
        path: 'cascader',
        name: 'Cascader',
        component: () => import(/* webpackChunkName: "cascader" */ '@/views/form/Cascader.vue')
      },
      {
        path: 'scrollbar',
        name: 'Scrollbar',
        component: () => import(/* webpackChunkName: "scrollbar" */ '@/views/Scrollbar.vue')
      },
      {
        path: 'img-preview',
        name: 'ImgPreview',
        component: () => import(/* webpackChunkName: "img-preview" */ '@/views/img-preview/ImgPreview.vue')
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import(/* webpackChunkName: "tree" */ '@/views/tree/Tree.vue')
      },
      {
        path: 'pdf',
        name: 'Pdf',
        component: () => import(/* webpackChunkName: "pdf" */ '@/views/pdf/Pdf.vue')
      },
      {
        path: 'pdf2',
        name: 'Pdf2',
        component: () => import(/* webpackChunkName: "pdf2" */ '@/views/pdf/Pdf2.vue')
      },
      {
        path: 'wang-editor',
        name: 'WangEditor',
        component: () => import(/* webpackChunkName: "wang-editor" */ '@/views/wang-editor/WangEditor.vue')
      },
      {
        path: 'sku',
        name: 'Sku',
        component: () => import(/* webpackChunkName: "sku" */ '@/views/sku/Sku.vue')
      },
      {
        path: 'sku2',
        name: 'Sku2',
        component: () => import(/* webpackChunkName: "sku2" */ '@/views/sku/Sku2.vue')
      },
      {
        path: 'ewm',
        name: 'Ewm',
        component: () => import(/* webpackChunkName: "ewm" */ '@/views/ewm/Ewm.vue')
      },
      {
        path: 'base-table',
        name: 'BaseTable',
        component: () => import(/* webpackChunkName: "base-table" */ '@/views/table/BaseTable.vue')
      },
      {
        path: 'transition',
        name: 'Transition',
        component: () => import(/* webpackChunkName: "transition" */ '@/views/transition/Transition.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
