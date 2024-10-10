<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { container } from 'jenesius-vue-modal'
import { config } from 'jenesius-vue-modal'
import modal from '@/components/modals/modal.vue'

config({
  backgroundClose: false,
  store: {
    modal: modal,
   
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
