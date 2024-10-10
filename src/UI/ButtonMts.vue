<script setup lang="ts">
defineProps<{
    text: string    
}>()
</script>

<template>
    <div class="btn">
        <p class="btn-text">{{ text }}</p>
    </div>
</template>

<style scoped>
.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    background-color: #FF0032;
    height: calc(var(--app-height)* 7.8 / 100);
}

.btn-text {
    color: white;
    font-weight: 500;
}
</style>