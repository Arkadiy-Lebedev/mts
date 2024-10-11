import { createRouter, createWebHistory } from 'vue-router'
import Level1 from '../views/Level1.vue'
import Level2 from '../views/Level2.vue'
import Level3 from '../views/Level3.vue'
import Start from '../views/Start.vue'
import Instruction from '../views/Instruction.vue'
import Final from '../views/Final.vue'

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
      path: '/level2',
      name: 'level2',
      component: Level2
    },
    {
      path: '/level3',
      name: 'level3',
      component: Level3
    },
        {
      path: '/final',
      name: 'final',
      component: Final
    },
    
        {
      path: '/instruction',
      name: 'Instruction',
      component: Instruction
    },
  ]
})

export default router
