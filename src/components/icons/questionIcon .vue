<script setup lang="ts">

</script>

<template>
<svg class="icon-question" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.5" y="1.5" width="51" height="51" rx="25.5" fill="#FF0032"/>
<rect x="1.5" y="1.5" width="51" height="51" rx="25.5" stroke="#FF0032" stroke-width="3"/>
<path d="M33.0491 21.1779V20.4776C33.0491 18.5518 31.2361 17.7115 27.2266 17.7115C23.4612 17.7115 21.2647 18.5868 20.9509 21.2129H16C16.3138 15.9958 20.4279 14 27.2615 14C34.3043 14 38 16.0308 38 20.5826C38 27.8305 28.5864 25.2045 28.5864 30.5266V31.1919H24.2631V30.4916C24.2631 22.9636 33.0491 24.8543 33.0491 21.1779ZM23.6704 36.514C23.6704 34.7633 24.6466 33.993 26.4945 33.993C28.3772 33.993 29.3534 34.7633 29.3534 36.514C29.3534 38.2297 28.3772 39 26.4945 39C24.6466 39 23.6704 38.2297 23.6704 36.514Z" fill="white"/>
</svg>


</template>

<style scoped>
.icon-question{
    width: calc(var(--app-width)* 14.4 / 100);
  cursor: pointer;
transition: all 0.3s ease;  
}


@media (min-width: 768px) {
    .icon-question:hover rect {
        fill: #d8032e;
        stroke:#d8032e;
    }


}
</style>