import { createRouter, createWebHistory } from 'vue-router'
import Level1 from '../views/Level1.vue'
import Start from '../views/Start.vue'
import Instruction from '../views/Instruction.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/level1',
      name: 'level1',
      component: Level1
    },
        {
      path: '/instruction',
      name: 'Instruction',
      component: Instruction
    },
  ]
})

export default router
