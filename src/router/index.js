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
    path: '/form',
    name: 'Form',
    component: () => import(/* webpackChunkName: "element-ui" */ '@/views/ElementUI.vue'),
    children: [
      {
        path: 'form-default-action',
        name: 'FormDefaultAction',
        component: () => import(/* webpackChunkName: "form-default-action" */ '@/views/form/FormDefaultAction.vue')
      }
    ]
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
        path: 'password',
        name: 'Password',
        component: () => import(/* webpackChunkName: "password" */ '@/views/form/Password.vue')
      },
      {
        path: 'select',
        name: 'Select',
        component: () => import(/* webpackChunkName: "select" */ '@/views/form/Select.vue')
      },
      {
        path: 'dyn-input',
        name: 'DynInput',
        component: () => import(/* webpackChunkName: "dyn-input" */ '@/views/form/DynInput.vue')
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
        component: () => import(/* webpackChunkName: "scrollbar" */ '@/views/scrollbar/Scrollbar.vue')
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
        path: 'base-table',
        name: 'BaseTable',
        component: () => import(/* webpackChunkName: "base-table" */ '@/views/table/BaseTable.vue')
      },
      {
        path: 'transition',
        name: 'Transition',
        component: () => import(/* webpackChunkName: "transition" */ '@/views/transition/Transition.vue')
      },
      {
        path: 'tabs',
        name: 'Tabs',
        component: () => import(/* webpackChunkName: "tabs" */ '@/views/tabs/Tabs.vue')
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
