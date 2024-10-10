<script setup lang="ts">
import type { IBlock } from '@/types/block'

import message from '@/assets/images/level1/message.svg'
import kion from '@/assets/images/level1/kion.svg'
import handle from '@/assets/images/level1/handle.svg'
import darts from '@/assets/images/level1/darts.svg'
import volt from '@/assets/images/level1/volt.svg'
import shape from '@/assets/images/level1/shape.svg'

defineProps<{
    elem: IBlock,
    
   
}>()

const brandImgs = {
    message,
    kion,
    handle,
    darts,
    volt,
    shape

}
</script>

<template>
   
    <div class="block"
        :style="{ backgroundColor: elem.isHover ? '#ddd' : elem.color}">
 <img class="block-img" :src="elem.background ? brandImgs[elem?.background] : '' ">




        <svg v-if="(elem.position === 'gorizontal') && !elem.name" class="gorizont" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_4007_161" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="51" height="51">
<rect width="51" height="51" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_4007_161)">
<path d="M0 26L51 26" :style="{ stroke: elem.colorLine }" stroke-width="20" stroke-linejoin="round"/>
<path d="M0 25L51 25" :style="{ stroke: elem.colorLine }" stroke-width="20" stroke-linejoin="round"/>
</g>
</svg>


        <svg v-if="(elem.position === 'vertical') && !elem.name" class="vertical" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_4007_161" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="51" height="51">
<rect width="51" height="51" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_4007_161)">
<path d="M0 26L51 26" :style="{ stroke: elem.colorLine }" stroke-width="20" stroke-linejoin="round"/>
<path d="M0 25L51 25" :style="{ stroke: elem.colorLine }" stroke-width="20" stroke-linejoin="round"/>
</g>
</svg>




        <svg v-if="(elem.position === 'left_down' || elem.position === 'up_right') && !elem.name" class="corner" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_4007_160" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="51" height="51">
<rect y="51" width="51" height="51" transform="rotate(-90 0 51)" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_4007_160)">
<path d="M51 25H26V51H35.1463" :style="{ stroke: elem.colorLine }" stroke-width="20" stroke-linejoin="round"/>
<path d="M51 26H25V51H34.5122"  :style="{ stroke: elem.colorLine }" stroke-width="20" stroke-linejoin="round"/>
</g>
</svg>


        <svg v-if="(elem.position === 'right_down') && !elem.name" class="corner right_down" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_4007_160" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="51" height="51">
<rect y="51" width="51" height="51" transform="rotate(-90 0 51)" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_4007_160)">
<path d="M51 25H26V51H35.1463"  :style="{ stroke: elem.colorLine }" stroke-width="20" stroke-linejoin="round"/>
<path d="M51 26H25V51H34.5122"  :style="{ stroke: elem.colorLine }" stroke-width="20" stroke-linejoin="round"/>
</g>
</svg>



        <svg v-if="(elem.position === 'up_left') && !elem.name" class="corner right_down" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_4007_160" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="51" height="51">
<rect y="51" width="51" height="51" transform="rotate(-90 0 51)" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_4007_160)">
<path d="M51 25H26V51H35.1463"  :style="{ stroke: elem.colorLine }" stroke-width="20" stroke-linejoin="round"/>
<path d="M51 26H25V51H34.5122"  :style="{ stroke: elem.colorLine }" stroke-width="20" stroke-linejoin="round"/>
</g>
</svg>
  


        <svg v-if="(elem.position === 'right_up' || elem.position === 'down_left') && !elem.name"
            class="right_up corner" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_4007_160" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="51" height="51">
<rect y="51" width="51" height="51" transform="rotate(-90 0 51)" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_4007_160)">
<path d="M51 25H26V51H35.1463"  :style="{ stroke: elem.colorLine }" stroke-width="20" stroke-linejoin="round"/>
<path d="M51 26H25V51H34.5122"  :style="{ stroke: elem.colorLine }" stroke-width="20" stroke-linejoin="round"/>
</g>
</svg>


        <svg v-if="(elem.position === 'down_right') && !elem.name" class="left_up corner" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_4007_160" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="51" height="51">
<rect y="51" width="51" height="51" transform="rotate(-90 0 51)" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_4007_160)">
<path d="M51 25H26V51H35.1463"  :style="{ stroke: elem.colorLine }" stroke-width="20" stroke-linejoin="round"/>
<path d="M51 26H25V51H34.5122"  :style="{ stroke: elem.colorLine }" stroke-width="20" stroke-linejoin="round"/>
</g>
</svg>



        <svg v-if="(elem.position === 'left_up' ) && !elem.name" class="left_up corner" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_4007_160" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="51" height="51">
<rect y="51" width="51" height="51" transform="rotate(-90 0 51)" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_4007_160)">
<path d="M51 25H26V51H35.1463"  :style="{ stroke: elem.colorLine }" stroke-width="20" stroke-linejoin="round"/>
<path d="M51 26H25V51H34.5122"  :style="{ stroke: elem.colorLine }" stroke-width="20" stroke-linejoin="round"/>
</g>
</svg>



<!-- <svg v-if="(elem.position === 'left_up' ) && !elem.name" class="left_up corner" viewBox="0 0 49 49" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_2009_151" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" class="path">
                <rect width="49" height="49" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_2009_151)">
                <path d="M-47 117.427H-23.5546V71.6013H22.9811V24H48.5579" :style="{ stroke: elem.colorLine }"
                    stroke-width="20" stroke-linejoin="round" />
            </g>
        </svg> -->

    </div>
</template>

<style>
.path{
  width: calc(var(--app-height)* 7.7 / 100);  
}
.corner {
    position: absolute;
top: calc(var(--app-height)* -0.5 / 100);
    left: calc(var(--app-height)* -0.5 / 100);
    width: calc(var(--app-width)* 13.7 / 100);
    transform: rotate(0deg);
 

}

.right_down{
    transform: rotate(90deg);

}

.right_up {
    transform: rotate(180deg);

}

.left_up {
    transform: rotate(-90deg);

}

.down_left {
    transform: rotate(90deg);

}


.gorizont{
position: absolute;
    top: calc(var(--app-height)* -0.5 / 100);
    left: calc(var(--app-height)* -0.5 / 100);
    width: calc(var(--app-width)* 13.7 / 100);
z-index: 20;
}

.vertical {
    position: absolute;
top: calc(var(--app-height)* -0.5 / 100);
    left: calc(var(--app-height)* -0.5 / 100);
    width: calc(var(--app-width)* 13.7 / 100);
    transform: rotate(90deg);
    z-index: 20;

}

.block {
    position: relative;
    transition: background-color 0.3s, border-color 0.3s;
    cursor: pointer;
    border-radius: 8px;
    background-repeat: no-repeat;
    background-size: 70%;
    background-position: center;
    background-color:rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    aspect-ratio: 1 / 1;
    
}
</style>
