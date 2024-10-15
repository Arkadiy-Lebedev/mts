<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { gsap } from 'gsap'
import BlockGame from '@/components/BlockGame.vue'
import level1Icon  from '@/components/icons/level1Icon.vue'
import iconQuestion  from '@/components/icons/questionIcon .vue'
import kionTextIcon  from '@/components/icons/kionTextIcon.vue'
import mtsTextIcon  from '@/components/icons/mtsTextIcon.vue'
import dartsTextIcon  from '@/components/icons/dartsTextIcon.vue'
import handleTextIcon  from '@/components/icons/handleTextIcon.vue'
import shareTextIcon from '@/components/icons/shareTextIcon.vue'
import reloadBtn from '@/components/icons/reloadBtn.vue'
import type { IBlock, IBrendListLevel1 } from '@/types/block'
import { useHelperStore } from '@/stores/helper'
import Logo from '@/components/icons/Logo.vue'
import { openModal } from 'jenesius-vue-modal'
import { useRouter } from 'vue-router'
import { useGameStore } from '@/stores/game'

const gameStore = useGameStore()
const router = useRouter()
const helperStore = useHelperStore()
import { checkIdsMatch } from'@/helpers/functions'

const gameRef = ref<HTMLElement | null>(null)

// Инициализируем матрицу 7x7 блоков

const matrix = ref<IBlock[]>(gameStore.gameLevel1)
const activeName = reactive<IBrendListLevel1>(gameStore.activeNameLevel1)


// Переменные для хранения состояния касания
const startBlockColor = ref<string>('')
const currentName = ref<string | undefined>(undefined)
const hoveredBlocks = ref<IBlock[]>([])
const lastBlocks = ref<IBlock>()

// const starttGame = () => {
//   matrix.value = startBlocks(level1)
// activeName.darts = false
//   activeName.handle = false
//   activeName.kion = false
//   activeName.mts = false
//   activeName.shape = false
//   activeName.volt = false
//   hoveredBlocks.value = []
// }
// starttGame()



// Найти блок по координатам касания
const findBlockByCoordinates = (x: number, y: number): IBlock | undefined => {
  const elements = document.elementsFromPoint(x, y)
  const blockElement = elements.find(el => el.classList.contains('block'))
  if (blockElement) {
    const id = blockElement.getAttribute('data-id')
    return gameStore.gameLevel1.find(block => block.id === id)
  }
  return undefined
}

// Обработка касания и перемещения
const handleTouchMove = (event: TouchEvent) => {
  const touch = event.touches[0]
  const block = findBlockByCoordinates(touch.clientX, touch.clientY)
  if (block && currentName.value) { // Разрешаем перемещение по любым блокам


    if (!hoveredBlocks.value.includes(block)) {
      let indexBlock = gameStore.gameLevel1.findIndex(el => el.id === block.id)
      let indexlastBlocks = gameStore.gameLevel1.findIndex(el => el.id === lastBlocks.value?.id)
      console.log(indexlastBlocks)
      console.log('ib', indexBlock)

      if ((!block.name || block.name == currentName.value) && !block.isActive && (indexBlock == indexlastBlocks + 7 || indexBlock == indexlastBlocks + 1 || indexBlock == indexlastBlocks - 7 
      || indexBlock == indexlastBlocks - 1)) {
       

        if (indexBlock == indexlastBlocks + 1 && lastBlocks.value) {
          lastBlocks.value.right = true
          lastBlocks.value.colorLine = startBlockColor.value
        }
        if (indexBlock == indexlastBlocks - 1 && lastBlocks.value) {
          lastBlocks.value.left = true
          lastBlocks.value.colorLine = startBlockColor.value
          
        }
        if (indexBlock == indexlastBlocks + 7 && lastBlocks.value) {
          lastBlocks.value.down = true
          lastBlocks.value.colorLine = startBlockColor.value
       
        }
        if (indexBlock == indexlastBlocks - 7 && lastBlocks.value) {
          lastBlocks.value.up = true
          lastBlocks.value.colorLine = startBlockColor.value
        }       

        block.isHover = true       
        hoveredBlocks.value.push(block)
        lastBlocks.value = block     

      }
    }
  }
}


const handleMouseMove = (event: MouseEvent) => {
  const block = findBlockByCoordinates(event.clientX, event.clientY);
  if (block && currentName.value) { // Разрешаем перемещение по любым блокам
    if (!hoveredBlocks.value.includes(block)) {
      let indexBlock = gameStore.gameLevel1.findIndex(el => el.id === block.id);
      let indexlastBlocks = gameStore.gameLevel1.findIndex(el => el.id === lastBlocks.value?.id);
      console.log(indexlastBlocks);
      console.log('ib', indexBlock);
      if ((!block.name || block.name == currentName.value) && !block.isActive && (indexBlock == indexlastBlocks + 7 || indexBlock == indexlastBlocks + 1 || indexBlock == indexlastBlocks - 7 
      || indexBlock == indexlastBlocks - 1)) {
        if (indexBlock == indexlastBlocks + 1 && lastBlocks.value) {
          lastBlocks.value.right = true;
          lastBlocks.value.colorLine = startBlockColor.value;
        }
        if (indexBlock == indexlastBlocks - 1 && lastBlocks.value) {
          lastBlocks.value.left = true;
          lastBlocks.value.colorLine = startBlockColor.value;
        }
        if (indexBlock == indexlastBlocks + 7 && lastBlocks.value) {
          lastBlocks.value.down = true;
          lastBlocks.value.colorLine = startBlockColor.value;
        }
        if (indexBlock == indexlastBlocks - 7 && lastBlocks.value) {
          lastBlocks.value.up = true;
          lastBlocks.value.colorLine = startBlockColor.value;
        }
        block.isHover = true;
        hoveredBlocks.value.push(block);
        lastBlocks.value = block;
      }
    }
  }
};

// Обработка начала касания
const handleTouchStart = (event: TouchEvent) => {
  const touch = event.touches[0]
  const block = findBlockByCoordinates(touch.clientX, touch.clientY)
  if (block && block.name && !block.mainSuccess) {
    startBlockColor.value = block.color
    currentName.value = block.name // Запоминаем имя, если касание началось с блока с name
    hoveredBlocks.value.push(block) // Добавляем этот блок в список выделенных
    block.isHover = true // Помечаем его как hovered
    lastBlocks.value = block
  
  }
}


const handleMouseDown = (event: MouseEvent) => {
  const block = findBlockByCoordinates(event.clientX, event.clientY);
  console.log(block)
  if (block && block.name && !block.mainSuccess) {
    startBlockColor.value = block.color;
    currentName.value = block.name; // Запоминаем имя, если клик начался с блока с name
    hoveredBlocks.value.push(block); // Добавляем этот блок в список выделенных
    block.isHover = true; // Помечаем его как hovered
    lastBlocks.value = block;
  }
};



// Обработка завершения касания
const handleTouchEnd = (event: TouchEvent) => {
  const touch = event.changedTouches[0]
  const lastBlock = findBlockByCoordinates(touch.clientX, touch.clientY)

  let indexlastBlocks = gameStore.gameLevel1.findIndex(el => el.id === lastBlocks.value?.id)

  // Если касание завершилось на блоке с таким же name, как у стартового блока
  console.log(gameStore.gameLevel1[indexlastBlocks-1])
  if (lastBlock == lastBlocks.value && lastBlock && lastBlock.name === currentName.value && (gameStore.gameLevel1[indexlastBlocks-1]?.right || gameStore.gameLevel1[indexlastBlocks+1]?.left || 
    gameStore.gameLevel1[indexlastBlocks + 7]?.up || gameStore.gameLevel1[indexlastBlocks-7]?.down)) {
    // Делаем все выделенные блоки активными
  
    hoveredBlocks.value.forEach((block, i) => {
      block.isActive = true
      block.isHover = false // Очищаем hover
      // block.color = lastBlock.color
      if (block.name == currentName.value) {
        block.mainSuccess = true
      }
      if (i > 0) {
     

      if (hoveredBlocks.value[i-1].left && block.down) {
        block.position = 'left_down'
      }
           if (hoveredBlocks.value[i-1].left && block.up) {
        block.position = 'left_up'
      }
        if (hoveredBlocks.value[i - 1].right && block.down) {
          block.position = 'right_down'
        }
        if (hoveredBlocks.value[i - 1].right && block.up) {
          block.position = 'right_up'
        }

        if (hoveredBlocks.value[i - 1].up && block.left) {
          block.position = 'up_left'
        }
        if (hoveredBlocks.value[i - 1].up && block.right) {
          block.position = 'up_right'
        }

        if (hoveredBlocks.value[i - 1].down && block.left) {
          block.position = 'down_left'
        }
        if (hoveredBlocks.value[i - 1].down && block.right) {
          block.position = 'down_right'
        }

        if (hoveredBlocks.value[i - 1].left && block.left ) {
          block.position = 'gorizontal'
        }

         if (hoveredBlocks.value[i - 1].right && block.right ) {
          block.position = 'gorizontal'
         }

        if (hoveredBlocks.value[i - 1].up && block.up) {
          block.position = 'vertical'
        }

        if (hoveredBlocks.value[i - 1].down && block.down) {
          block.position = 'vertical'
        }
        // if (hoveredBlocks.value[i - 1].down && block.right) {
        //   block.position = 'down_right'
        // }        
      }

    })
   
    if (lastBlock && lastBlock.succesCombo) {

      // выводит список координат
          //  console.log(hoveredBlocks.value.map(item => ({id: item.id}))) 

      if(checkIdsMatch(hoveredBlocks.value, lastBlock.succesCombo)) {
        // @ts-ignore
        gameStore.activeNameLevel1[lastBlock.name] = true
       console.log(activeName)
      }
      

      //проверка все ли блоки активны значит задание пройдено
      if(gameStore.gameLevel1.every(item => item.isActive === true)){
          console.log('УСПЕХХХ',888)
          helperStore.isInstructions= false          
          openModal('modalLevel1')
      }

    }
   

  } else {
    // Если блок не совпадает по name, сбрасываем hover
    hoveredBlocks.value.forEach(block => {
      block.isHover = false
      block.down = false
      block.right = false
      block.left = false
      block.up = false

    })
  }

  // Очищаем состояние
  hoveredBlocks.value = []
  currentName.value = undefined
}





const handleMouseUp  = (event: MouseEvent) => {
  const lastBlock = findBlockByCoordinates(event.clientX, event.clientY);
  let indexlastBlocks = gameStore.gameLevel1.findIndex(el => el.id === lastBlocks.value?.id);

  // Если клик завершился на блоке с таким же name, как у стартового блока
  console.log(gameStore.gameLevel1[indexlastBlocks-1]);
  if (lastBlock == lastBlocks.value && lastBlock && lastBlock.name === currentName.value &&  (gameStore.gameLevel1[indexlastBlocks-1]?.right || gameStore.gameLevel1[indexlastBlocks+1]?.left || 
  gameStore.gameLevel1[indexlastBlocks+7]?.up || gameStore.gameLevel1[indexlastBlocks-7]?.down)) {
    // Делаем все выделенные блоки активными
  
    hoveredBlocks.value.forEach((block, i) => {
      block.isActive = true
      block.isHover = false // Очищаем hover
      // block.color = lastBlock.color
      if (block.name == currentName.value) {
        block.mainSuccess = true
      }
      if (i > 0) {
     

      if (hoveredBlocks.value[i-1].left && block.down) {
        block.position = 'left_down'
      }
           if (hoveredBlocks.value[i-1].left && block.up) {
        block.position = 'left_up'
      }
        if (hoveredBlocks.value[i - 1].right && block.down) {
          block.position = 'right_down'
        }
        if (hoveredBlocks.value[i - 1].right && block.up) {
          block.position = 'right_up'
        }

        if (hoveredBlocks.value[i - 1].up && block.left) {
          block.position = 'up_left'
        }
        if (hoveredBlocks.value[i - 1].up && block.right) {
          block.position = 'up_right'
        }

        if (hoveredBlocks.value[i - 1].down && block.left) {
          block.position = 'down_left'
        }
        if (hoveredBlocks.value[i - 1].down && block.right) {
          block.position = 'down_right'
        }

        if (hoveredBlocks.value[i - 1].left && block.left ) {
          block.position = 'gorizontal'
        }

         if (hoveredBlocks.value[i - 1].right && block.right ) {
          block.position = 'gorizontal'
         }

        if (hoveredBlocks.value[i - 1].up && block.up) {
          block.position = 'vertical'
        }

        if (hoveredBlocks.value[i - 1].down && block.down) {
          block.position = 'vertical'
        }
        // if (hoveredBlocks.value[i - 1].down && block.right) {
        //   block.position = 'down_right'
        // }        
      }
      //проверка все ли блоки активны значит задание пройдено
      if (gameStore.gameLevel1.every(item => item.isActive === true)) {
        console.log('УСПЕХХХ', 888)
        helperStore.isInstructions= false
        openModal('modalFinal')
      }
    })
   
    if (lastBlock && lastBlock.succesCombo) {

      // выводит список координат
          //  console.log(hoveredBlocks.value.map(item => ({id: item.id}))) 

      if(checkIdsMatch(hoveredBlocks.value, lastBlock.succesCombo)) {
        // @ts-ignore
        gameStore.activeNameLevel1[lastBlock.name] = true
       console.log(activeName)
      }
      
    }
   

  } else {
    // Если блок не совпадает по name, сбрасываем hover
    hoveredBlocks.value.forEach(block => {
      block.isHover = false
      block.down = false
      block.right = false
      block.left = false
      block.up = false

    })
  }

  // Очищаем состояние
  hoveredBlocks.value = []
  currentName.value = undefined
}


// При монтировании добавляем слушатели событий
onMounted(() => {
  if(!gameRef.value){
    return
  }
  
  if (!helperStore.isInstructions ) {
      gsap.from(gameRef.value?.children, { duration: 1, 
    y: -30, 
    autoAlpha: 0.0, 
    ease: 'power4.out', 
    delay: 0.2, 
    
    stagger: 0.05
  })
  }

  helperStore.isInstructions = false

  window.addEventListener('touchstart', handleTouchStart)
  window.addEventListener('touchmove', handleTouchMove)
  window.addEventListener('touchend', handleTouchEnd)

window.addEventListener('mousedown', handleMouseDown)
window.addEventListener("mousemove", handleMouseMove)
window.addEventListener("mouseup", handleMouseUp)

})

// При размонтировании убираем слушатели
onBeforeUnmount(() => {
  window.removeEventListener('touchstart', handleTouchStart)
  window.removeEventListener('touchmove', handleTouchMove)
  window.removeEventListener('touchend', handleTouchEnd)

  
window.addEventListener('mousedown', handleMouseDown)
window.addEventListener("mousemove", handleMouseMove)
window.addEventListener("mouseup", handleMouseUp)
})

const restart = () => {
  gameStore.restartLevel1()
  hoveredBlocks.value = []
}

const goInstruction = () => {
helperStore.link = 'level1'
helperStore.isInstructions = true
router.push({ name: 'Instruction'})
}
</script>


<template>
  <div class="wrapper">
    <!-- <img class="logo" src="../assets/logo.svg" alt=""> -->
    <Logo class="logo"></Logo>

    <div ref="gameRef" class="game">
      <reloadBtn @click="restart" class="reload_btn"></reloadBtn>
      <kionTextIcon v-if="activeName.kion" class="kion"></kionTextIcon>
      <mtsTextIcon v-if="activeName.mts" class="mts"></mtsTextIcon>
      <dartsTextIcon v-if="activeName.darts" class="darts"></dartsTextIcon>
      <handleTextIcon v-if="activeName.handle" class="handle"></handleTextIcon>
      <shareTextIcon v-if="activeName.shape" class="shape"></shareTextIcon>

      <BlockGame v-for="block in gameStore.gameLevel1" :key="block.id" :data-id="block.id" :elem="block">
      </BlockGame>
    </div>
    <div class="level-box">
      <level1Icon></level1Icon>
      <iconQuestion @click="goInstruction"></iconQuestion>
    </div>

  </div>
</template>

<style scoped>
.reload_btn{
  position: absolute;
    bottom: calc(var(--app-width)* -23.6 / 100);
      left: calc(var(--app-width)* 24 / 100);
      width: 42%;
      height: 25.9%;
    z-index: 200; 
}

.shape{
  position: absolute;
  top: calc(var(--app-width)* 52.4 / 100);
    left: calc(var(--app-width)* 48.3 / 100);
    width: 40.8%;
    height: 25.6%;
    z-index: 200;
}

.handle{
  position: absolute;
  top: calc(var(--app-width)* 35.1 / 100);
    left: calc(var(--app-width)* 2.3 / 100);
    width: 79.8%;
    height: 55.6%;
    z-index: 200;
}

.darts{
  position: absolute;
  top: calc(var(--app-width)* 27.5 / 100);
    left: calc(var(--app-width)* 26.4 / 100);
    width: 57.8%;
    height: 20.6%;
    z-index: 200;
}

.kion{
  position: absolute;
  top: calc(var(--app-width)* 3.6 / 100);
    left: calc(var(--app-width)* 3.4 / 100);
    width: 93%;
    height: 40%;
    z-index: 200;
}

.mts{
  position: absolute;
  top: calc(var(--app-width)* 15.4 / 100);
    left: calc(var(--app-width)* 23.4 / 100);
    width: 44.9%;
    height: 6.5%;
    z-index: 200;
}
.level-box{
  display: flex;
  justify-content: space-between;
  margin-top: calc(var(--app-height)* 17.4 / 100);
}

.logo{
  position: absolute;
  top: 0;
  right: 0;
  z-index: 200;
width: calc(var(--app-width) * 19.2 / 100);
height: calc(var(--app-width) * 19.2 / 100);
}

.wrapper {
  height: 100%;
  width: 100%;
  position: relative;
  padding-left: calc(var(--app-width) * 7.2 / 100);
  padding-right: calc(var(--app-width) * 7.2 / 100);
  background-color:#798EFB;
  background: url('../assets/bg.jpg') no-repeat;
  background-size: cover;
  padding-top: 1px;
}

.play-block {
  position: absolute !important;
  top: 8.4dvh;
  left: 13.2dvh;
  z-index: 10;
  width: 21.4dvh;
}



.game {
  position: relative;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7,1fr);
  gap: calc(var(--app-height) * 0.35 / 100);
  margin-top: calc(var(--app-height)* 21.7 / 100);
}

.block {
  position: relative;
  transition: background-color 0.3s, border-color 0.3s;
  cursor: pointer;
  border-radius: 8px;

}
</style>
