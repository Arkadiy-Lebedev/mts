<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { gsap } from 'gsap'
import BlockGame from '@/components/BlockGame.vue'
import level3Icon  from '@/components/icons/level3Icon.vue'
import heartTextIcon  from '@/components/icons/heartTextIcon.vue'
import pixelTextIcon  from '@/components/icons/pixelTextIcon.vue'
import lTextIcon  from '@/components/icons/lTextIcon.vue'
import goardTextIcon  from '@/components/icons/goardTextIcon.vue'
import bolTextIcon  from '@/components/icons/bolTextIcon.vue'
import sunTextIcon  from '@/components/icons/sunTextIcon.vue'
import iconQuestion  from '@/components/icons/questionIcon .vue'
import { openModal } from 'jenesius-vue-modal'
import type { IBlock, IBrendListLevel3 } from '@/types/block'
import { level3 } from '@/data/brends'
import { useRouter } from 'vue-router'
import reloadBtn from '@/components/icons/reloadBtn.vue'
import { checkIdsMatch, startBlocks, defaultActiveNameLevel3 } from '@/helpers/functions'
import Logo from '@/components/icons/Logo.vue'

const router = useRouter()
const gameRef = ref<HTMLElement | null>(null)

// Инициализируем матрицу 7x7 блоков
const matrix = ref<IBlock[]>(startBlocks(level3))

const activeName = reactive<IBrendListLevel3>(defaultActiveNameLevel3)

// Переменные для хранения состояния касания
const startBlockColor = ref<string>('')
const currentName = ref<string | undefined>(undefined)
const hoveredBlocks = ref<IBlock[]>([])
const lastBlocks = ref<IBlock>()

const starttGame = () => {
  matrix.value = startBlocks(level3)
  activeName.bol= false,
  activeName.gourd= false,
  activeName.heart= false,
  activeName.l= false,
  activeName.pixel= false,
  activeName.sun= false,
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
          openModal('modalFinal')
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
    <!-- <img class="logo" src="../assets/logo.svg" alt=""> -->
    <Logo class="logo"></Logo>
    <div ref="gameRef" class="game">
      <reloadBtn @click="starttGame" class="reload_btn"></reloadBtn>
      <heartTextIcon v-if="activeName.heart" class="heart"></heartTextIcon>
      <pixelTextIcon v-if="activeName.pixel" class="pixel"></pixelTextIcon>
      <lTextIcon v-if="activeName.l" class="l"></lTextIcon>
      <goardTextIcon v-if="activeName.gourd" class="gourd"></goardTextIcon>
      <bolTextIcon v-if="activeName.bol" class="bol"></bolTextIcon>
      <sunTextIcon v-if="activeName.sun" class="sun"></sunTextIcon>
      <BlockGame v-for="block in matrix" :key="block.id" :data-id="block.id" :elem="block">
      </BlockGame>
    </div>
    <div class="level-box">
      <level3Icon></level3Icon>
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
.sun{
    position: absolute;
    top: calc(var(--app-width)* 27.7 / 100);
    left: calc(var(--app-width)* 36.3 / 100);
    width: 39.8%;
    height: 64%;
    z-index: 200;
}


.bol{
    position: absolute;
    top: calc(var(--app-width)* 52.1 / 100);
    left: calc(var(--app-width)* 1.4 / 100);
    width: 16.2%;
    height: 35.7%;
    z-index: 200;
}

.gourd{
    position: absolute;
    top: calc(var(--app-width)* 48.1 / 100);
    left: calc(var(--app-width)* 51.4 / 100);
    width: 12.2%;
    height: 11.7%;
    z-index: 200;
}

.l{
    position: absolute;
    top: calc(var(--app-width)* 34.5 / 100);
    left: calc(var(--app-width)* 23.8 / 100);
    width: 11.2%;
    height: 42.4%;
    z-index: 200;
}

.heart{
  position: absolute;
  top: calc(var(--app-width)* 3.1 / 100);
    left: calc(var(--app-width)* 3.4 / 100);
    width: 92.2%;
    height: 93.4%;
    z-index: 200;
}

.pixel{
  position: absolute;
  top: calc(var(--app-width)* 15.5 / 100);
    left: calc(var(--app-width)* 14.6 / 100);
    width: 56.2%;
    height: 11.4%;
    z-index: 200;
}

.level-box{
  display: flex;
  justify-content: space-between;
  margin-top: calc(var(--app-height)* 17.4 / 100);
}

.logo {
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
