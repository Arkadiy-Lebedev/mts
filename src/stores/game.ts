import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { level1, level2, level3 } from '@/data/brends'
import type { IBlock, IBrendListLevel1, IBrendListLevel2, IBrendListLevel3 } from '@/types/block'
import { checkIdsMatch, startBlocks, defaultActiveName, defaultActiveNameLevel2, defaultActiveNameLevel3 } from'@/helpers/functions'



export const useGameStore = defineStore('gameStore', () => {
  const gameLevel1 = ref<IBlock[]>([])
  const activeNameLevel1 = reactive<IBrendListLevel1>(defaultActiveName)
 
  const gameLevel2 = ref<IBlock[]>([])
  const activeNameLevel2 = reactive<IBrendListLevel2>(defaultActiveNameLevel2)

  const gameLevel3 = ref<IBlock[]>([])
  const activeNameLevel3 = reactive<IBrendListLevel3>(defaultActiveNameLevel3)
  
  
  gameLevel1.value = startBlocks(level1)
  gameLevel2.value = startBlocks(level2)
  gameLevel3.value = startBlocks(level3)

  const restartLevel1 = () => {
   gameLevel1.value = startBlocks(level1)
      activeNameLevel1.handle = false
  activeNameLevel1.kion = false
  activeNameLevel1.mts = false
  activeNameLevel1.shape = false
    activeNameLevel1.volt = false
    console.log(gameLevel1)
  }

   const restartLevel2 = () => {
   gameLevel2.value = startBlocks(level2)
  activeNameLevel2.arrow = false
  activeNameLevel2.book = false
  activeNameLevel2.cube = false
  activeNameLevel2.goat = false
  activeNameLevel2.people = false
  activeNameLevel2.prize = false
    console.log(gameLevel1)
   }
  
     const restartLevel3 = () => {
   gameLevel3.value = startBlocks(level3)
  activeNameLevel3.bol= false,
  activeNameLevel3.gourd= false,
  activeNameLevel3.heart= false,
  activeNameLevel3.l= false,
  activeNameLevel3.pixel= false,
  activeNameLevel3.sun= false,
    console.log(gameLevel1)
  }




  function checkAllFalse(obj:any) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] !== false) {
        return false;
      }
    }
  }
  return true;
}
  
  

  return {
    gameLevel1, activeNameLevel1, restartLevel1,
    gameLevel2, activeNameLevel2, restartLevel2,
    gameLevel3, activeNameLevel3, restartLevel3,
    checkAllFalse
  }
})
