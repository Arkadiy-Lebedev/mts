<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { gsap } from 'gsap'
import BlockGame from '@/components/BlockGame.vue'
import level2Icon  from '@/components/icons/level2Icon.vue'
import iconQuestion  from '@/components/icons/questionIcon .vue'
import goatTextIcon  from '@/components/icons/goatTextIcon.vue'
import peopleTextIcon  from '@/components/icons/peopleTextIcon.vue'
import bookTextIcon  from '@/components/icons/bookTextIcon.vue'
import { openModal } from 'jenesius-vue-modal'
import { useRouter } from 'vue-router'
import type { IBlock, IBrendListLevel2 } from '@/types/block'
import { level2 } from '@/data/brends'
import reloadBtn from '@/components/icons/reloadBtn.vue'

import { checkIdsMatch, startBlocks, defaultActiveNameLevel2 } from '@/helpers/functions'
const router = useRouter()
const gameRef = ref<HTMLElement | null>(null)

// Инициализируем матрицу 7x7 блоков
const matrix = ref<IBlock[]>(startBlocks(level2))

const activeName = reactive<IBrendListLevel2>(defaultActiveNameLevel2)

// Переменные для хранения состояния касания
const startBlockColor = ref<string>('')
const currentName = ref<string | undefined>(undefined)
const hoveredBlocks = ref<IBlock[]>([])
const lastBlocks = ref<IBlock>()

const starttGame = () => {
  matrix.value = startBlocks(level2)
  activeName.arrow = false
  activeName.book = false
  activeName.cube = false
  activeName.goat = false
  activeName.people = false
  activeName.prize = false
  hoveredBlocks.value = []
}
starttGame()

// Найти блок по координатам касания
const findBlockByCoordinates = (x: number, y: number): IBlock | undefined => {
  const elements = document.elementsFromPoint(x, y)
  const blockElement = elements.find(el => el.classList.contains('block'))
  if (blockElement) {
    const id = blockElement.getAttribute('data-id')
    return matrix.value.find(block => block.id === id)
  }
  return undefined
}

// Обработка касания и перемещения
const handleTouchMove = (event: TouchEvent) => {
  const touch = event.touches[0]
  const block = findBlockByCoordinates(touch.clientX, touch.clientY)
  if (block && currentName.value) { // Разрешаем перемещение по любым блокам


    if (!hoveredBlocks.value.includes(block)) {
      let indexBlock = matrix.value.findIndex(el => el.id === block.id)
      let indexlastBlocks = matrix.value.findIndex(el => el.id === lastBlocks.value?.id)
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
      let indexBlock = matrix.value.findIndex(el => el.id === block.id);
      let indexlastBlocks = matrix.value.findIndex(el => el.id === lastBlocks.value?.id);
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

  let indexlastBlocks = matrix.value.findIndex(el => el.id === lastBlocks.value?.id)

  // Если касание завершилось на блоке с таким же name, как у стартового блока
  console.log(matrix.value[indexlastBlocks-1])
  if (lastBlock == lastBlocks.value && lastBlock && lastBlock.name === currentName.value &&  (matrix.value[indexlastBlocks-1]?.right || matrix.value[indexlastBlocks+1]?.left || 
  matrix.value[indexlastBlocks+7]?.up || matrix.value[indexlastBlocks-7]?.down)) {
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
      if(matrix.value.every(item => item.isActive === true)){
          console.log('УСПЕХХХ',888)
          openModal('modalLevel2')
      }


    })
   
    if (lastBlock && lastBlock.succesCombo) {

      // выводит список координат
           console.log(hoveredBlocks.value.map(item => ({id: item.id}))) 

      if(checkIdsMatch(hoveredBlocks.value, lastBlock.succesCombo)) {
        // @ts-ignore
         activeName[lastBlock.name] = true
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






const handleMouseUp  = (event: MouseEvent) => {
  const lastBlock = findBlockByCoordinates(event.clientX, event.clientY);
  let indexlastBlocks = matrix.value.findIndex(el => el.id === lastBlocks.value?.id);

  // Если клик завершился на блоке с таким же name, как у стартового блока
  console.log(matrix.value[indexlastBlocks-1]);
  if (lastBlock == lastBlocks.value && lastBlock && lastBlock.name === currentName.value &&  (matrix.value[indexlastBlocks-1]?.right || matrix.value[indexlastBlocks+1]?.left || 
  matrix.value[indexlastBlocks+7]?.up || matrix.value[indexlastBlocks-7]?.down)) {
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
      if (matrix.value.every(item => item.isActive === true)) {
        console.log('УСПЕХХХ', 888)
        openModal('modalFinal')
      }
    })
   
    if (lastBlock && lastBlock.succesCombo) {

      // выводит список координат
          //  console.log(hoveredBlocks.value.map(item => ({id: item.id}))) 

      if(checkIdsMatch(hoveredBlocks.value, lastBlock.succesCombo)) {
        // @ts-ignore
         activeName[lastBlock.name] = true
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
  gsap.from(gameRef.value?.children, { duration: 1, 
    y: -30, 
    autoAlpha: 0.0, 
    ease: 'power4.out', 
    delay: 0.2, 
    
    stagger: 0.05
  })

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
</script>


<template>
  <div class="wrapper">
    <img class="logo" src="../assets/logo.svg" alt="">

    <div ref="gameRef" class="game">
      <reloadBtn @click="starttGame" class="reload_btn"></reloadBtn>
      <goatTextIcon v-if="activeName.goat" class="goat"></goatTextIcon>
      <peopleTextIcon v-if="activeName.people" class="people"></peopleTextIcon>
      <bookTextIcon v-if="activeName.book" class="book"></bookTextIcon>

      <BlockGame v-for="block in matrix" :key="block.id" :data-id="block.id" :elem="block">
      </BlockGame>
    </div>
    <div class="level-box">
      <level2Icon></level2Icon>
      <iconQuestion @click="router.push({ name: 'Instruction' })"></iconQuestion>
    </div>

  </div>
</template>

<style>
.reload_btn {
  position: absolute;
  bottom: calc(var(--app-width)* -23.6 / 100);
  left: calc(var(--app-width)* 24 / 100);
  width: 42%;
  height: 25.9%;
  z-index: 200;
}
.book{
  position: absolute;
  top: calc(var(--app-width)* 77.1 / 100);
    left: calc(var(--app-width)* 10.4 / 100);
    width: 32.2%;
    height: 6.4%;
    z-index: 200;
}


.people{
  position: absolute;
  top: calc(var(--app-width)* 40.3 / 100);
    left: calc(var(--app-width)* 11.4 / 100);
    width: 84%;
    height: 50%;
    z-index: 200;
}

.goat{
  position: absolute;
  top: calc(var(--app-width)* 3.6 / 100);
    left: calc(var(--app-width)* -8.6 / 100);
    width: 105%;
    height: 68%;
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
width: calc(var(--app-height) * 10.8 / 100);
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
