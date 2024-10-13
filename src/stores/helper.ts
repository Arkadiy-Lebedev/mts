import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useHelperStore = defineStore('helperStore', () => {
  const isInstructions = ref(false)
  

  return { isInstructions }
})