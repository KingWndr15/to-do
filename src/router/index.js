import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/to-do',
    name: 'to-do',
    component: () => import('../views/To-Do.vue')
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
