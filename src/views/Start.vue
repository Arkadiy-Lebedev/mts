<script setup lang="ts">
import { useRouter } from 'vue-router'
import { gsap } from 'gsap'
import shera from '../assets/images/start/shera.png'
import mts from '../assets/images/start/mts.png'
import live from '../assets/images/start/live.svg'
import s from '../assets/images/start/s.svg'
import pazzle from '../assets/images/start/pazzle.svg'
import kion from '../assets/images/start/kion.svg'
import ButtonMts from '../UI/ButtonMts.vue'
import { onMounted, ref } from 'vue'

const router = useRouter()

const sheraRef = ref<HTMLElement | null>(null)
const mtsRef = ref<HTMLElement | null>(null)
const pazzleRef = ref<HTMLElement | null>(null)
const liveRef = ref<HTMLElement | null>(null)
const kionRef = ref<HTMLElement | null>(null)
const sRef = ref<HTMLElement | null>(null)

onMounted(() => {
    if (!sheraRef.value) {
        return
    }

gsap.from(sheraRef.value, { duration: 0.5, y: 20, autoAlpha:0.3, ease: 'power2.inOut' })
    gsap.from(mtsRef.value, { duration: 1, y: -30, autoAlpha: 0.0, ease: 'power2.inOut', delay: 0.3, translateX: 50 })
    gsap.from(pazzleRef.value, { duration: 1, x: 50, autoAlpha:0.0, ease: 'power2.inOut', delay:0.7}) 
    gsap.from(liveRef.value, { duration: 0.8, scale: 0, autoAlpha: 0.0, ease: 'power2.inOut', delay: 0.9, rotation: '+=180' }) 
    gsap.from(kionRef.value, { duration: 0.8, scale: 0, y: 50, autoAlpha: 0.0, ease: 'power2.inOut', delay: 1.2, rotation: '+=180' }) 
    gsap.from(sRef.value, { duration: 1.5, scale: 0, y: -150, autoAlpha: 0.0, ease: 'power2.inOut', delay: 1.3, }) 

  const  t1 = gsap.timeline({ repeat: -1, delay: 1.5 })
    t1.to(mtsRef.value, {
        duration: 1,
        y: -20,
        ease: "power1.inOut",
    })
    t1.to(mtsRef.value, {
        y: 10,
        duration: 1,
        ease: "power1.inOut",
    }
    )
    t1.to(mtsRef.value, {
        y: -5,
        duration: 1,
        ease: "power1.inOut",
      
    }
    )
    t1.to(mtsRef.value, {
        y: 0,
        duration: 1.2,
        ease: "power1.inOut",

    }
    )
    t1.to(mtsRef.value, {
        y: 0,
        duration: 3,
        ease: "power1.inOut",

    }
    )
})

</script>

<template>
    <section class="start">
        <img :src="shera" ref="sheraRef" class="shera">
        <img :src="live" ref="liveRef" class="live">
        <img :src="s" ref="sRef" class="s">
        <img :src="pazzle" ref="pazzleRef" class="pazzle">
        <img :src="kion" ref="kionRef" class="kion">
        <img :src="mts" ref="mtsRef" class="start-mts">
        <div class="start-content">
            <p class="title">
                Решай головоломку
                и знакомься с плюсами работы в цифровой экосистеме МТС.
            </p>
            <p class="sub__title">
                Мы создаём технологии, которые делают жизнь комфортнее. Тебя ждут амбициозные задачи, разнообразие карьерных треков и возможность менять привычное к лучшему. Узнай больше о компании и преимуществах работы в МТС.
            </p>
            <ButtonMts @click="router.push({ name: 'Instruction' })" class="btn" text="ИГРАТЬ">
            </ButtonMts>

        </div>
    </section>
</template>

<style scoped>

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

.start-content{
    position: relative;
background-color: white;
padding: calc(var(--app-height)* 3 / 100);
border-radius: 24px;
    z-index: 15;
    margin-top: calc(var(--app-height)* 40.5 / 100);
}

.start-mts {
    position: absolute;
top: calc(var(--app-height)* 15 / 100);
    left: calc(var(--app-height)* 13.1 / 100);
    width: calc(var(--app-height)* 29.7 / 100);
    z-index: 8;
    }

.kion {
    position: absolute;
top: calc(var(--app-height)* 13.4 / 100);
    left: calc(var(--app-height)* 33.3 / 100);
        width: calc(var(--app-height)* 16.6 / 100);
        z-index: 2;
    }

.pazzle {
    position: absolute;
top: calc(var(--app-height)* 24 / 100);
    left: calc(var(--app-height)* 39.5 / 100);
    width: calc(var(--app-height)* 16.3 / 100);
    z-index: 9;
    }

.s {
    position: absolute;
    top: calc(var(--app-height)* -1 / 100);
        left: calc(var(--app-height)* 39.5 / 100);
        width: calc(var(--app-height)* 11.2 / 100);

}
.live {
    position: absolute;
    top: calc(var(--app-height)* 8 / 100);
        left: calc(var(--app-height)* 0 / 100);
        width: calc(var(--app-height)* 12.5 / 100);

}

.shera{
    position: absolute;
bottom: calc(var(--app-height)* 0 / 100);
    left: calc(var(--app-height)* 0 / 100);
    width: calc(var(--app-height)* 56.8 / 100);
z-index: 10;
}

.start{
    height: 100%;
    width: 100%;
    position: relative;
    padding-left: calc(var(--app-width) * 7.2 / 100);
    padding-right: calc(var(--app-width) * 7.2 / 100);
    background-color: #798EFB;
    background: url('../assets/images/start/bg.jpg') no-repeat;
    background-size: cover;
    padding-top: 1px;
}

</style>