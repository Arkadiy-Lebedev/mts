import { createRouter, createWebHistory } from 'vue-router'
import Level1 from '../views/Level1.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'level1',
      component: Level1
    }
  ]
})

export default router
