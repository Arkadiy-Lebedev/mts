<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'

const mRef = ref<HTMLElement | null>(null)
const TRef = ref<HTMLElement | null>(null)
const CRef = ref<HTMLElement | null>(null)
// onMounted(() => {
//   if (!mRef.value) {
//     return
//   }
//   const t1 = gsap.timeline({ repeat: -1, delay: 10 })
//   t1.to(mRef.value, {
//     duration: 0.5,
//     yPercent: 270,
//     ease: "power1.inOut",
//   })
//   t1.to(mRef.value, {
//     duration: 0.5,
//     xPercent: 180,
//     ease: "power1.inOut",
//   }
//   )
//   t1.to(mRef.value, {
//     duration: 0.5,
//     yPercent: 0,
//     ease: "power1.inOut",
//   })
//   t1.to(mRef.value, {
//     duration: 0.5,
//     xPercent: 0,
//     ease: "power1.inOut",
//   })
//   t1.to(mRef.value, {
//     duration: 15,
//     xPercent: 0,
//     ease: "power1.inOut",
//   })


//   const t2 = gsap.timeline({ repeat: -1, delay: 10 })
//   t2.to(TRef.value, {
//     duration: 0.5,
//     xPercent: -220,
//     ease: "power1.inOut",
//   }
//   )
//   t2.to(TRef.value, {
//     duration: 0.5,
//     yPercent: 270,
//     ease: "power1.inOut",
//   })
//   t2.to(TRef.value, {
//     duration: 0.5,
//     xPercent: 0,
//     ease: "power1.inOut",
//   })
 
//   t2.to(TRef.value, {
//     duration: 0.5,
//     yPercent: 0,
//     ease: "power1.inOut",
//   })
//   t2.to(TRef.value, {
//     duration: 15,
//     yPercent: 0,
//     ease: "power1.inOut",
//   })


//   const t3 = gsap.timeline({ repeat: -1, delay: 10 })
//   t3.to(CRef.value, {
//     duration: 0.5,
//     yPercent: -270,
//     ease: "power1.inOut",
//   })

//   t3.to(CRef.value, {
//     duration: 0.5,
//     xPercent: -200,
//     ease: "power1.inOut",
//   })

//   t3.to(CRef.value, {
//     duration: 0.5,
//     yPercent: 0,
//     ease: "power1.inOut",
//   })

//   t3.to(CRef.value, {
//     duration: 0.5,
//     xPercent: 0,
//     ease: "power1.inOut",
//   })
//   t3.to(CRef.value, {
//     duration: 15,
//     xPercent: 0,
//     ease: "power1.inOut",
//   })


 
 


// })

</script>

<template>
  <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_361_1486)">
      <path d="M72 0H0V72H72V0Z" fill="#FF0032" />
      <path ref="mRef"
        d="M21.907 5.53809L16.6146 16.5252L11.324 5.53809H5.5437V22.1526H9.59448V10.2625L14.7685 20.3066H18.4607L23.6366 10.2625V22.1526H27.6873V5.53809H21.907Z"
        fill="white" />
      <path ref="TRef"
        d="M47.9685 5.53809V8.84607H55.2035L55.1871 22.149H59.2378L59.2561 8.84607H66.4928V5.53809H47.9685Z"
        fill="white" />
      <path ref="CRef"
        d="M62.4311 60.9221C62.3292 61.5847 62.0634 62.1291 61.6374 62.5387C61.235 62.9265 60.6888 63.2014 60.0134 63.3562C59.3453 63.5109 58.3676 63.5983 57.3317 63.5983C56.2958 63.5983 55.3072 63.4599 54.5062 63.185C53.7288 62.9192 53.1134 62.455 52.6765 61.805C52.2377 61.1515 52.0156 60.2084 52.0156 58.9995V57.3009C52.0156 56.0921 52.2377 55.149 52.6765 54.4954C53.1116 53.8473 53.727 53.3831 54.5044 53.1154C55.3054 52.8424 56.2557 52.7022 57.3299 52.7022C58.404 52.7022 59.3434 52.7914 60.0116 52.9443C60.6852 53.0991 61.2332 53.3758 61.6355 53.7617C62.0616 54.1732 62.3274 54.7175 62.4293 55.3802H66.4819C66.3709 54.0093 65.903 52.8405 65.0928 51.9066C64.3518 51.0527 63.3269 50.4283 62.0488 50.0478C60.8072 49.6782 59.1759 49.4834 57.3299 49.4834C55.3892 49.4834 53.7033 49.7619 52.3215 50.3136C50.9178 50.8725 49.8291 51.8046 49.0827 53.0845C48.3672 54.3116 47.9922 55.9501 47.9685 57.9563V58.142V58.3405C47.994 60.3486 48.369 61.9853 49.0827 63.2123C49.8291 64.4922 50.9178 65.4243 52.3215 65.9832C53.7033 66.5331 55.3892 66.8134 57.3299 66.8134C59.2706 66.8134 60.8072 66.6186 62.0488 66.2491C63.3269 65.8686 64.3518 65.2441 65.0928 64.3902C65.903 63.4563 66.3709 62.2875 66.4819 60.9166H62.4275L62.4311 60.9221Z"
        fill="white" />
    </g>
    <defs>
      <clipPath id="clip0_361_1486">
        <rect width="72" height="72" fill="white" />
      </clipPath>
    </defs>
  </svg>


</template>

<style scoped>

</style>
