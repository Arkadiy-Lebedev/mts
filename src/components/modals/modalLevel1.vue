<script setup lang="ts">
import ButtonMts from '@/UI/ButtonMts.vue'
import { useRouter } from 'vue-router'
import { closeModal } from 'jenesius-vue-modal'
const router = useRouter()

const next = () => {
    closeModal()
    router.push({ name: 'level2' })
}

</script>

<template>
    <div class="modal-wrapper">
        <p class="title-modal">
            Создавать метавселенную МТС Verse, прокачивать сервис МТС Музыка или улучшать онлайн-кинотеатр KION?
        </p>
        <p class="sub__title-modal">
            В нашей экосистеме более 250 продуктов. Ты можешь выбирать проекты по душе и решать интересные задачи, которые развивают тебя, компанию и мир. Мы даём свободу творчества, приветствуем новые идеи и ценим вклад каждого.
        </p>
        <ButtonMts  @click="next" class="btn" text="УРОВЕНЬ #2">
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