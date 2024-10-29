<script setup lang="ts">
import { useRouter } from 'vue-router'
import { gsap } from 'gsap'
import { FTClient } from 'ft-client'
import CheckBoxGroup from '../UI/CheckBoxGroup.vue'
import ButtonMts from '../UI/ButtonMts.vue'
import InputEmail from '../UI/InputEmail.vue'
import { onMounted, ref } from 'vue'
import { useYandexMetrika } from 'yandex-metrika-vue3'

const yandexMetrika = useYandexMetrika()
const ftClients = new FTClient('https://games-admin.fut.ru/api/', 'createwithmts')
const check = ref(false)
const email = ref('')
const validate = ref(true)
const isSend = ref(false)

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

    const formData = {
        email: email.value
    }

    const newRecord = await ftClients.createRecord(formData)
    yandexMetrika.reachGoal('data')
    isSend.value = true

}

const block1Ref = ref<HTMLElement | null>(null)
const block2Ref = ref<HTMLElement | null>(null)

onMounted(() => {
    if (!block1Ref.value && !block2Ref.value) {
        return
    }
    gsap.from(block1Ref.value, { duration: 1, y: 30, autoAlpha: 0, ease: 'power2.inOut' })
    gsap.from(block2Ref.value, { duration: 1, y: 30, autoAlpha: 0, ease: 'power2.inOut', delay: 0.5 })
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
                    А ещё у тебя есть шанс выиграть классный мерч и промокоды на МТС Premium. Оставляй почту ниже, чтобы
                    принять участие в розыгрыше. Мы свяжемся с победителями 30 ноября. Удачи!
                </p>
                <div class="send_group" v-if="!isSend">
                    <CheckBoxGroup v-model="check" class="check"></CheckBoxGroup>
                    <div class="input-group">
                        <InputEmail class="--margin10" v-model="email" placeholder="example@post.ru"
                            :validate="validate">
                        </InputEmail>

                        <svg @click="sendData" :class="{ check_btn: check }" class="button-svg" viewBox="0 0 43 43"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="43" height="43" rx="10" fill="#FF0032" />
                            <path
                                d="M10.1776 22.7058L27.9738 22.7058L22.1371 28.6426L23.9281 30.4282L31.4203 22.8595C32.1955 22.0764 32.1913 20.8138 31.4109 20.0359L23.9228 12.5723L22.1318 14.3579L27.9738 20.1802L10.1776 20.1802L10.1776 22.7058Z"
                                fill="white" />
                        </svg>
                    </div>
                </div>
                <div class="succes" v-if="isSend">
                    <p class="succes__text">Данные отправлены <svg width="20" height="15" viewBox="0 0 20 15"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M19.189 3.93948C20.062 3.03827 20.062 1.57712 19.189 0.675907C18.3161 -0.225303 16.9008 -0.225303 16.0279 0.675907L7.54963 9.42874L4.65964 6.44514C3.7867 5.54393 2.37139 5.54393 1.49845 6.44514C0.625516 7.34635 0.625516 8.8075 1.49845 9.70871L5.96904 14.3241C6.84198 15.2253 8.25729 15.2253 9.13023 14.3241L19.189 3.93948Z"
                                fill="#FF0032" />
                        </svg>
                    </p>
                </div>
            </div>
            <!-- <div class="start-content block-two" ref="block2Ref">
                <p class="sub__title">
                    Если хочешь создавать инновационные продукты и менять привычное, переходи на карьерный сайт и
                    оставляй заявку на стажировку.
                </p>
                <a href="https://job.mts.ru/programs" target="_blank" class="" @click="yandexMetrika.reachGoal('site')">
                    <ButtonMts class="btn" text="К СТАЖИРОВКЕ">
                    </ButtonMts>
                </a>
            </div> -->
        </div>

    </section>
</template>

<style scoped>
.succes__text {
    font-size: clamp(12px, 2.7dvh, 19px);
    margin-top: calc(var(--app-height)* 7.2 / 100);
    margin-bottom: calc(var(--app-height)* 4.7 / 100);
    text-align: center;
}

.button-svg rect {
    fill: #BCC3D0;
    transition: fill 0.3s ease;
}

.check_btn rect {
    fill: #FF0032;

}

.button-svg {
    width: calc(var(--app-width)* 14.7 / 100);
    cursor: pointer;
}

.input-group {
    display: flex;
    align-items: center;
    gap: calc(var(--app-width)* 1.1 / 100);
    margin-top: calc(var(--app-height)* 2.4/ 100);
}

.check {
    margin-top: calc(var(--app-height)* 3/ 100);
}

.block-two {
    margin-top: calc(var(--app-height)* 2.4 / 100);
}

.btn {
    margin-top: calc(var(--app-height)* 3.6 / 100);
}


.title {

    font-weight: 500;
    font-size: clamp(12px, 2.4dvh, 18px);

}

.sub__title {
    margin-top: calc(var(--app-height)* 1.5 / 100);
    font-weight: 400;
    font-size: clamp(12px, 2.4dvh, 16px);
    text-wrap: balance;
}

.start-content {
    position: relative;
    background-color: white;
    padding: calc(var(--app-height)* 3 / 100);
    border-radius: 24px;
    z-index: 15;

}


.final {
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