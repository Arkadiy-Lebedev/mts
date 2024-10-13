<script setup lang="ts">
import { useRouter } from 'vue-router'
import ButtonMts from '../UI/ButtonMts.vue'
import cheeseBlock from '../components/icons/cheeseBlock.vue'
import { openModal } from 'jenesius-vue-modal'


const router = useRouter()

</script>

<template>
    <section class="instructions">
        <cheeseBlock class="cheese-block"></cheeseBlock>

        <div class="instructions-content">         
            <p class="sub__title">
                Соединяй части экосистемы МТС так, чтобы линии не пересекались и между ними не оставалось пустого места.
            </p>
            <ButtonMts @click="openModal('modal')" class="btn" text="ПОНЯТНО">
            </ButtonMts>

        </div>
    </section>
</template>

<style scoped>

.cheese-block{
    margin-top: calc(var(--app-height)* 8.2 / 100);
    width: calc(var(--app-width)* 85.2 / 100);
height: calc(var(--app-width)* 85.2 / 100);
}

.btn{
    margin-top: calc(var(--app-height)* 3.6 / 100);
}


.title{
 
    font-weight: 500;
    font-size: clamp(12px, 2.7dvh, 18px);
  
}

.sub__title{
    margin-top: calc(var(--app-height)* 1.5 / 100);
    font-weight: 400;
    font-size: clamp(12px, 2.4dvh, 16px);
    text-wrap: balance;
}


.instructions-content{
    position: relative;
    background-color: white;
    padding: calc(var(--app-height)* 3 / 100);
    border-radius: 24px;
    z-index: 15;
    margin-top: calc(var(--app-height)* 8.6 / 100);
}


.instructions{
    height: 100%;
    width: 100%;
    position: relative;
    padding-left: calc(var(--app-width) * 7.2 / 100);
    padding-right: calc(var(--app-width) * 7.2 / 100);
    background-color: #798EFB;
    background: url('../assets/bg.jpg') no-repeat;
    background-size: cover;
    padding-top: 1px;
}

</style>