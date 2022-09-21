import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/Layout.vue'
import Home from '@/views/Home.vue'

import form from './modules/form.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: { name: 'Home' },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      }
    ]
  },
  form,
  {
    path: '/img-preview',
    name: 'ImgPreview',
    component: Layout,
    redirect: { name: 'ImgPreviewDemo1' },
    children: [
      {
        path: 'demo1',
        name: 'ImgPreviewDemo1',
        component: () =>
          import(
            /* webpackChunkName: "img-preview" */ '@/views/img-preview/ImgPreview.vue'
          )
      }
    ]
  },
  {
    path: '/scrollbar',
    name: 'Scrollbar',
    component: Layout,
    redirect: { name: 'ScrollbarDemo1' },
    children: [
      {
        path: 'demo1',
        name: 'ScrollbarDemo1',
        component: () =>
          import(
            /* webpackChunkName: "scrollbar" */ '@/views/scrollbar/Scrollbar.vue'
          )
      }
    ]
  },
  {
    path: '/transition',
    name: 'Transition',
    component: Layout,
    redirect: { name: 'TransitionDemo1' },
    children: [
      {
        path: 'demo1',
        name: 'TransitionDemo1',
        component: () =>
          import(
            /* webpackChunkName: "transition" */ '@/views/transition/Transition.vue'
          )
      }
    ]
  },
  {
    path: '/tabs',
    name: 'Tabs',
    component: Layout,
    redirect: { name: 'TabsDemo1' },
    children: [
      {
        path: 'demo1',
        name: 'TabsDemo1',
        component: () =>
          import(/* webpackChunkName: "tabs" */ '@/views/tabs/Tabs.vue')
      }
    ]
  },
  {
    path: '/table',
    name: 'Table',
    component: Layout,
    redirect: { name: 'TableDemo1' },
    children: [
      {
        path: 'demo1',
        name: 'TableDemo1',
        component: () =>
          import(
            /* webpackChunkName: "table" */ '@/views/table/BaseTable.vue'
          )
      }
    ]
  },
  {
    path: '/tree',
    name: 'Tree',
    component: Layout,
    redirect: { name: 'TreeDemo1' },
    children: [
      {
        path: 'demo1',
        name: 'TreeDemo1',
        component: () =>
          import(/* webpackChunkName: "tree" */ '@/views/tree/Tree.vue')
      }
    ]
  },
  {
    path: '/sku',
    name: 'Sku',
    component: Layout,
    redirect: { name: 'ScrollbarDemo1' },
    children: [
      {
        path: 'Demo1',
        name: 'SkuDemo1',
        component: () =>
          import(/* webpackChunkName: "sku" */ '@/views/sku/Sku.vue')
      },
      {
        path: 'Demo2',
        name: 'SkuDemo2',
        component: () =>
          import(/* webpackChunkName: "sku2" */ '@/views/sku/Sku2.vue')
      }
    ]
  },
  {
    path: '/s-table',
    name: 'STable',
    component: Layout,
    redirect: { name: 'STableDemo1' },
    children: [
      {
        path: 'Demo1',
        name: 'STableDemo1',
        component: () =>
          import(/* webpackChunkName: "s-table" */ '@/views/sTable/demo1.vue')
      }
    ]
  }
]

function getMenuList(routes, menuList = {}, lastName = '') {
  routes.forEach((item) => {
    if (item.children) {
      menuList[item.name] = []
      getMenuList(item.children, menuList[item.name], lastName + item.name)
    } else {
      menuList.push({ path: item.name, name: item.name })
    }
  })
  return menuList
}
export const menuList = getMenuList(routes)
console.log(menuList, 'menuList')

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
