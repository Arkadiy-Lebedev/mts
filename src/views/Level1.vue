<script setup lang="ts">
import BlockGame from '@/components/BlockGame.vue'
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import type { IBlock } from '@/types/block'


import { level1 } from '@/data/brends'

// Инициализируем матрицу 7x7 блоков
const matrix = ref<IBlock[]>([])
for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 7; j++) {
    matrix.value.push({
      id: `${i}-${j}`,
      color: 'rgba(255,255,255,0.5)',
      isActive: false,
      isHover: false,
      mainSuccess: false,
      left: false,
      right: false,
      up: false,
      down: false,
      colorLine: '',
      position: ''
    })
  }
}

const brends = ref<IBlock[]>(level1)

const activeName = reactive<{mts:boolean}>({
  mts: false
})

brends.value.forEach(block => {
  let index = matrix.value.findIndex(el => el.id === block.id)
  

  if (index !== -1) {
    matrix.value.splice(index, 1, block)
  }



})


// Переменные для хранения состояния касания
const startBlockColor = ref<string>('')
const currentName = ref<string | undefined>(undefined)
const hoveredBlocks = ref<IBlock[]>([])
const lastBlocks = ref<IBlock>()


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

      if ((!block.name || block.name == currentName.value) && !block.isActive && (indexBlock == indexlastBlocks + 7 || indexBlock == indexlastBlocks + 1 || indexBlock == indexlastBlocks - 7 || indexBlock == indexlastBlocks - 1)) {
       

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

// Обработка завершения касания
const handleTouchEnd = (event: TouchEvent) => {
  const touch = event.changedTouches[0]
  const lastBlock = findBlockByCoordinates(touch.clientX, touch.clientY)

  // Если касание завершилось на блоке с таким же name, как у стартового блока
  if (lastBlock && lastBlock.name === currentName.value) {
    // Делаем все выделенные блоки активными
    
    hoveredBlocks.value.forEach((block, i) => {
      block.isActive = true
      block.isHover = false // Очищаем hover
      // block.color = lastBlock.color
      if (block.name == currentName.value) {
        block.mainSuccess = true
      }
      if (i > 0) {

      // if (hoveredBlocks.value[1].left || hoveredBlocks.value[1].right ) {
      //   hoveredBlocks.value[1].position = 'gorizontal'
        
      // }

      // if (hoveredBlocks.value[1].up || hoveredBlocks.value[1].down) {
      //   hoveredBlocks.value[1].position = 'vertical'
      // }

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
   
    if (lastBlock) {
      // @ts-ignore
       activeName[lastBlock.name] = true
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
  window.addEventListener('touchstart', handleTouchStart)
  window.addEventListener('touchmove', handleTouchMove)
  window.addEventListener('touchend', handleTouchEnd)
})

// При размонтировании убираем слушатели
onBeforeUnmount(() => {
  window.removeEventListener('touchstart', handleTouchStart)
  window.removeEventListener('touchmove', handleTouchMove)
  window.removeEventListener('touchend', handleTouchEnd)
})
</script>


<template>
  <div class="wrapper">


    <div class="game">
      <BlockGame v-for="block in matrix" :key="block.id" :data-id="block.id" :elem="block">
      </BlockGame>
    </div>
  </div>

</template>

<style>
.wrapper {
  height: 100%;
  width: 100%;
  position: relative;
  padding: calc(var(--app-height) * 4.2 / 100);
  background-color:#798EFB;
  
}

.play-block {
  position: absolute !important;
  top: 8.4dvh;
  left: 13.2dvh;
  z-index: 10;
  width: 21.4dvh;
}



.game {
  display: grid;
  grid-template-columns: repeat(7, calc(var(--app-height) * 6.5 / 100));
  grid-template-rows: repeat(7, calc(var(--app-height) * 6.5 / 100));
  gap: calc(var(--app-height) * 0.35 / 100);
}

.block {
  position: relative;
  width: calc(var(--app-height) * 6.5 / 100);
  height: calc(var(--app-height) * 6.5 / 100);

  transition: background-color 0.3s, border-color 0.3s;
  cursor: pointer;
  border-radius: 8px;
}
</style>
