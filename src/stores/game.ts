import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGameStore = defineStore('gameStore', () => {
  const level1 = ref(false)
  

  return { level1 }
})
