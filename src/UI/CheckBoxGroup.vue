<script setup lang="ts">
const modelValue = defineModel()
</script>

<template>
  <div class="wrapper__check">
    <input
      v-model="modelValue"
      class="check"
      type="checkbox"
      id="first_solution"
      name="solution"
      checked
      required
    />
    <label class="label-check" for="first_solution">
      Я согласен(а) на
      <a target="_blank" class="label-check link" href="https://doc.fut.ru/personal_data_policy.pdf"
        >обработку персональных данных FutureToday <span class="black">и</span> МТС</a
      >
      и получение информационных сообщений, а также с
      <a target="_blank" class="label-check link" href="https://doc.fut.ru/personal_data_policy.pdf"
        >правилами проведения акции.</a
      ></label
    >
  </div>
</template>

<style scoped>

.black{
  color: var(--color-text);
}
.link {
color:#0070E5
}

.check {
  flex-shrink: 0;
}

input[type='checkbox'] {
  appearance: none;
  background: transparent;
  border: 1px solid #FF0032;
  height: 20px;
  width: 20px;
  border-radius: 4px;
  vertical-align: text-bottom;
  position: relative;
}

input[type='checkbox'] {
  border-radius: 4px;
}

input[type='checkbox']::before {
  content: '';
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  top: 0;
  background-repeat: no-repeat;
  background-position: center center;
}

input[type='checkbox']:checked::before {
  /* transform: rotate(50deg) translateY(-20%) translateX(-10%); */
  background-image: url('../assets/images/final/check.svg');
}

input[type='checkbox']:checked {

  background: #FF0032;

}

.wrapper__check {
  display: flex;
  gap: 7px;
  justify-content: flex-start;
}

.label-check {
    font-size: clamp(8px, 1.35vh, 11px);
  line-height: clamp(11px, 2vh, 15px);
}
</style>
