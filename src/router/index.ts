import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '@/components/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Index,
  },
  // {
  //   path: '/title',
  //   component: () => import(/* webpackChunkName: "title" */ '../components/Title/Title.vue'),
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
