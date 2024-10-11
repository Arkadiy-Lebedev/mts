<script setup lang="ts">
import { useRouter } from 'vue-router'
import { gsap } from 'gsap'

import CheckBoxGroup from '../UI/CheckBoxGroup.vue'
import ButtonMts from '../UI/ButtonMts.vue'
import InputEmail from '../UI/InputEmail.vue'
import { onMounted, ref } from 'vue'

const router = useRouter()

const check = ref(false)
const email = ref('')
const validate = ref(true)
    

    const sendData = async () => {
  if (!check.value) return

  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu

  if (!EMAIL_REGEXP.test(email.value)) {
    validate.value = false
    return
  } else {
    validate.value = true
  }

}

const block1Ref = ref<HTMLElement | null>(null)
const block2Ref = ref<HTMLElement | null>(null)

onMounted(() => {
    if (!block1Ref.value && !block2Ref.value) {
        return
    }

gsap.from(block1Ref.value, { duration: 1, y: 30, autoAlpha:0, ease: 'power2.inOut' })
gsap.from(block2Ref.value, { duration: 1, y: 30, autoAlpha:0, ease: 'power2.inOut', delay: 0.5 })

 
})


</script>

<template>
    <section class="final">
      <div class="wrqpper">
        <div class="start-content" ref="block1Ref">
            <p class="title">
                Теперь ты знаешь, как МТС поддерживает и развивает своих сотрудников!   
            </p>
            <p class="sub__title">
                А ещё у тебя есть шанс выиграть классный мерч и промокоды на МТС Premium. Оставляй почту ниже, чтобы принять участие в розыгрыше. Мы свяжемся с победителями 25 ноября. Удачи!
            </p>
            <CheckBoxGroup v-model="check" class="check"></CheckBoxGroup>
            <div class="input-group">
                 <InputEmail   class="--margin10"
                v-model="email"
                placeholder="example@post.ru"
                :validate="validate"></InputEmail>
          
                    <svg class="button-svg" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="43" height="43" rx="10" fill="#BCC3D0" fill-opacity="0.5"/>
<path d="M10.1776 22.7058L27.9738 22.7058L22.1371 28.6426L23.9281 30.4282L31.4203 22.8595C32.1955 22.0764 32.1913 20.8138 31.4109 20.0359L23.9228 12.5723L22.1318 14.3579L27.9738 20.1802L10.1776 20.1802L10.1776 22.7058Z" fill="#8D969F"/>
</svg>

       
            </div>
           
        </div>
        <div class="start-content block-two" ref="block2Ref">
      
            <p class="sub__title">
                Если хочешь создавать инновационные продукты и менять привычное, переходи на карьерный сайт и оставляй заявку на стажировку.
            </p>
            <ButtonMts @click="router.push({ name: 'Instruction' })" class="btn" text="К СТАЖИРОВКЕ">
            </ButtonMts>

        </div>
      </div>
        
    </section>
</template>

<style scoped>

.button-svg{
    width: calc(var(--app-width)* 14.7 / 100);
}

.input-group{
    display: flex;
    align-items: center;
    gap: calc(var(--app-width)* 1.1 / 100);
    margin-top: calc(var(--app-height)* 2.4/ 100);
}

.check{
    margin-top: calc(var(--app-height)* 3/ 100);
}

.block-two{
     margin-top: calc(var(--app-height)* 2.4 / 100);
}

.btn{
    margin-top: calc(var(--app-height)* 3.6 / 100);
}


.title{
 
    font-weight: 500;
    font-size: clamp(12px, 2.4dvh, 18px);
  
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

}


.final{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    position: relative;
    padding-left: calc(var(--app-width) * 7.2 / 100);
    padding-right: calc(var(--app-width) * 7.2 / 100);
    background-color: #798EFB;
    background: url('../assets/images/final/bg.jpg') no-repeat;
    background-size: cover;
    padding-top: 1px;
}

</style>