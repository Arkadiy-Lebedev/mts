<script setup lang="ts">
import ButtonMts from '@/UI/ButtonMts.vue'
import { useRouter } from 'vue-router'
import { closeModal } from 'jenesius-vue-modal'
const router = useRouter()
import { useYandexMetrika } from 'yandex-metrika-vue3'

const yandexMetrika = useYandexMetrika()

const next = () => {
    yandexMetrika.reachGoal('final')
    closeModal()
    router.push({ name: 'final' })
}

</script>

<template>
    <div class="modal-wrapper">
        <p class="title-modal">
            Нам в МТС важен баланс во всём. Мы заботимся об отдыхе, здоровье, хобби и делаем так, чтобы всем было хорошо на работе и в жизни.
        </p>
        <p class="sub__title-modal">
            Ты можешь выбрать комфортные условия труда, участвовать в творческих проектах и спортивных мероприятиях, заниматься волонтёрством и пользоваться скидками от партнёров экосистемы. А если понадобится помощь, у нас есть программа поддержки сотрудников, ДМС, врачи и психологи в офисах.
        </p>
        <ButtonMts  @click="next" class="btn" text="ФИНАЛ">
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
    font-size: clamp(12px, 2.7dvh, 18px);
}

.btn{
    margin-top: calc(var(--app-height)* 3.6 / 100);;
}
</style>