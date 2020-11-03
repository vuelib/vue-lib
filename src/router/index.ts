import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '@/components/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    name: 'title',
    path: '/title',
    component: () => import(/* webpackChunkName: "title" */ '../components/Title/Title.vue'),
    children: [
      {
        name: 'svgIcon',
        path: 'svg-icon',
        component: () => import(/* webpackChunkName: "title" */ '../components/SvgIcon/SvgIcon.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
