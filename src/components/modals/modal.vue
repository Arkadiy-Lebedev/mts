<script setup lang="ts">
import ButtonMts from '@/UI/ButtonMts.vue'
import { useRouter } from 'vue-router'
import { closeModal } from 'jenesius-vue-modal'
import { useHelperStore } from '@/stores/helper'
import { useYandexMetrika } from 'yandex-metrika-vue3'

const yandexMetrika = useYandexMetrika()
const helperStore = useHelperStore()
const router = useRouter()



const next = () => {
    if (!helperStore.isInstructions) {
        // helperStore.isInstructions = true
        yandexMetrika.reachGoal('level1')
          closeModal()
        router.push({ name: 'level1' })
    return
    }   
    closeModal()
     router.push({ name: helperStore.link})
}

</script>

<template>
    <div class="modal-wrapper">
        <p class="sub__title-modal">
            На некоторых линиях будут появляться факты о работе в МТС. Из них ты узнаешь, почему круто быть одним из
            нас.
        </p>
        <ButtonMts  @click="next" class="btn" text="ВПЕРЕД">
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
    font-weight: 400;
    font-size: clamp(12px, 2.4dvh, 16px);
    
}

.btn{
    margin-top: calc(var(--app-height)* 3.6 / 100);;
}
</style>