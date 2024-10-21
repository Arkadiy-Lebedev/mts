<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { container } from 'jenesius-vue-modal'
import { config } from 'jenesius-vue-modal'
import modal from '@/components/modals/modal.vue'
import modalLevel1 from '@/components/modals/modalLevel1.vue'
import modalLevel2 from '@/components/modals/modalLevel2.vue'
import modalFinal from '@/components/modals/modalFinal.vue'
import modalInfo from '@/components/modals/modalInfo.vue'

config({
  backgroundClose: false,
  store: {
    modal: modal,
    modalLevel1: modalLevel1,
    modalLevel2: modalLevel2,
    modalFinal: modalFinal,
    modalInfo: modalInfo,
  }

})

</script>

<template>
  <main>
    <RouterView />
    <container></container>
  </main>

</template>

<style scoped>

</style>
