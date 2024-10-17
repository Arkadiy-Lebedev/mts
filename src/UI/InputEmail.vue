<script setup lang="ts">
const modelValue = defineModel()

defineProps<{
  placeholder: string
  validate: boolean
}>()
</script>

<template>
  <input
    class="input-email"
    :class="{ error: !validate }"
    type="email"
    v-model="modelValue"
    :placeholder="placeholder"
  />
</template>

<style scoped>
.input-email {

  background: #F2F3F7;
  padding: calc(var(--app-width) * 3.2 / 100);
  padding-top: calc(var(--app-width)* 2.7 / 100);
padding-bottom: calc(var(--app-width)* 2.7 / 100);
  font-weight: normal;
  color: #626C77;
  font-size: clamp(14px, 2.6dvh, 19px);
  border-radius: 16px;
  width: 100%;
  border: 1px solid #BCC3D0
}

.input-email::placeholder {
  font-weight: normal;
  color: #626C77;
  font-size: clamp(14px, 2.6dvh, 19px);
  font-weight: 300;
}

.error {
  border: 1px solid rgb(253, 0, 0);
}
</style>
