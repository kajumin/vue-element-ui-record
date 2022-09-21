import Layout from '@/layout/Layout.vue'

export default {
  path: '/form',
  name: 'Form',
  component: Layout,
  redirect: { name: 'Upload' },
  children: [
    {
      path: 'password',
      name: 'Password',
      component: () =>
        import(/* webpackChunkName: "password" */ '@/views/form/Password.vue')
    },
    {
      path: 'upload',
      name: 'Upload',
      component: () =>
        import(/* webpackChunkName: "upload" */ '@/views/form/Upload.vue')
    },
    {
      path: 'select',
      name: 'Select',
      component: () =>
        import(/* webpackChunkName: "select" */ '@/views/form/Select.vue')
    },
    {
      path: 'dyn-input',
      name: 'DynInput',
      component: () =>
        import(
          /* webpackChunkName: "dyn-input" */ '@/views/form/DynInput.vue'
        )
    },
    {
      path: 'cascader2',
      name: 'Cascader2',
      component: () =>
        import(
          /* webpackChunkName: "cascader2" */ '@/views/form/Cascader2.vue'
        )
    },
    {
      path: 'cascader',
      name: 'Cascader',
      component: () =>
        import(/* webpackChunkName: "cascader" */ '@/views/form/Cascader.vue')
    },
    {
      path: 'form-default-action',
      name: 'FormDefaultAction',
      component: () =>
        import(
          /* webpackChunkName: "form-default-action" */ '@/views/form/FormDefaultAction.vue'
        )
    }
  ]
}
