<script setup lang="ts">
import ButtonMts from '@/UI/ButtonMts.vue'
import { useRouter } from 'vue-router'
import { closeModal } from 'jenesius-vue-modal'
const router = useRouter()



const next = () => {

    closeModal()    
    router.push({ name: 'Instruction' })
}

</script>

<template>
    <div class="modal-wrapper">
        <p class="sub__title-modal">
            Если перешли в игру из Telegram, лучше открыть ссылку в браузере - это даёт + 1000 к твоей удаче.
        </p>
        <ButtonMts @click="next" class="btn" text="ХОРОШО">
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
    padding-right: calc(var(--app-height)* 3.9 / 100);
    padding-left: calc(var(--app-height)* 3.9 / 100);
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