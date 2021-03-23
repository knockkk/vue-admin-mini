import Router from 'vue-router'

import Layout from '@/layout'

export const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/staff',
    name: 'Basic',
    meta: { title: '基本信息管理', icon: 'el-icon-s-home' }, // 使用 element 自带 icon，参见https://element.eleme.cn/#/zh-CN/component/icon
    children: [
      {
        path: 'staff',
        name: 'Staff',
        component: () => import('@/views/staff'),
        meta: { title: '人员信息管理', icon: 'el-icon-user' }
      },
      {
        path: 'check',
        name: 'Check',
        component: () => import('@/views/check'),
        meta: { title: '数据核查', icon: 'el-icon-s-data' }
      }
    ]
  },
  {
    path: '/rank',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Rank',
        component: () => import('@/views/rank'),
        meta: { title: '警衔管理', icon: 'el-icon-star-on' }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  routes
})
