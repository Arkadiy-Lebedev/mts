<script setup lang="ts">
import ButtonMts from '@/UI/ButtonMts.vue'
import { useRouter } from 'vue-router'
import { closeModal } from 'jenesius-vue-modal'
const router = useRouter()
import { useYandexMetrika } from 'yandex-metrika-vue3'

const yandexMetrika = useYandexMetrika()
const next = () => {
    yandexMetrika.reachGoal('level3')
    closeModal()
    router.push({ name: 'level3' })
}

</script>

<template>
    <div class="modal-wrapper">
        <p class="title-modal">
            Общаться с лидерами  индустрии, постоянно развиваться и быть самим собой — всё это возможно в МТС.
        </p>
        <p class="sub__title-modal">
            Мы создаём созидательную среду для увлечённых команд, чтобы каждый мог реализовать свой потенциал. Позитивная атмосфера, сильное экспертное сообщество и отзывчивые коллеги помогают добиваться карьерных высот и получать удовольствие от работы.
        </p>
        <ButtonMts  @click="next" class="btn" text="УРОВЕНЬ #3">
        </ButtonMts>
    </div>

</template>

<style scoped>

.modal-wrapper {
    position: relative;
    background-color: white;
    padding: calc(var(--app-height)* 3 / 100);
    border-radius: 24px;
    width: 85%;
    padding-right: calc(var(--app-height)* 4 / 100);
    padding-left: calc(var(--app-height)* 4 / 100);  
}

.sub__title-modal{
    margin-top: calc(var(--app-height)* 1.6 / 100);
    font-weight: 400;
    font-size: clamp(12px, 2.4dvh, 16px);
    
}

.title-modal{   
    font-weight: 500;
    font-size: clamp(12px, 2.4dvh, 18px);
}

.btn{
    margin-top: calc(var(--app-height)* 3.6 / 100);;
}
</style>