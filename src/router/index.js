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
