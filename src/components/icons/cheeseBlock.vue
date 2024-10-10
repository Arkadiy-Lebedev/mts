<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
gsap.registerPlugin(MotionPathPlugin)
const fingerRef = ref<HTMLElement | null>(null)

onMounted(() => {
    if (!fingerRef.value) {
        return
    }


    
  
    gsap.to(fingerRef.value,
            {                
                motionPath: {
                    path: "#path",
                    align: "#path",
                    alignOrigin: [0.5, 0],
                    
                    start: 1,
                    end: 0
                },
                duration: 3.75,
                delay: 1.2,
                ease: "none",                
                
            }
    )
        


})

</script>

<template>


    <svg class="cheese-block" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="61" height="61" rx="12" fill="white" fill-opacity="0.5" />
        <rect x="64.5596" width="61" height="61" rx="12" fill="white" fill-opacity="0.5" />
        <rect x="258.238" width="61" height="61" rx="12" fill="white" fill-opacity="0.5" />
        <rect y="64.5596" width="61" height="61" rx="12" fill="white" fill-opacity="0.5" />
        <rect x="64.5596" y="64.5596" width="61" height="61" rx="12" fill="white" fill-opacity="0.5" />
        <rect x="129.119" y="64.5596" width="61" height="61" rx="12" fill="white" fill-opacity="0.5" />
        <rect x="194" y="65" width="61" height="61" rx="12" fill="white" fill-opacity="0.5" />
        <rect x="258.238" y="64.5596" width="61" height="61" rx="12" fill="white" fill-opacity="0.5" />
        <rect y="129.119" width="61" height="61" rx="12" fill="white" fill-opacity="0.5" />
        <rect x="64.5596" y="129.119" width="61" height="61" rx="12" fill="white" fill-opacity="0.5" />
        <rect x="193.679" y="129.119" width="61" height="61" rx="12" fill="white" fill-opacity="0.5" />
        <rect x="258.238" y="129.119" width="61" height="61" rx="12" fill="white" fill-opacity="0.5" />
        <rect y="193.679" width="61" height="61" rx="12" fill="white" fill-opacity="0.5" />
        <rect x="129.119" y="193.679" width="61" height="61" rx="12" fill="white" fill-opacity="0.5" />
        <rect x="258.238" y="193.679" width="61" height="61" rx="12" fill="white" fill-opacity="0.5" />
        <rect y="258.238" width="61" height="61" rx="12" fill="white" fill-opacity="0.5" />
        <rect x="129.119" y="258.238" width="61" height="61" rx="12" fill="white" fill-opacity="0.5" />
        <rect x="193.679" y="258.238" width="61" height="61" rx="12" fill="white" fill-opacity="0.5" />
        <rect x="258.238" y="258.238" width="61" height="61" rx="12" fill="white" fill-opacity="0.5" />
        <rect x="129.119" width="61" height="61" rx="12" fill="#505060" />
        <rect x="193.679" width="61" height="61" rx="12" fill="#FF0032" />
        <rect x="129.119" y="129.119" width="61" height="61" rx="12" fill="#FF0032" />
        <rect x="64.5596" y="193.679" width="61" height="61" rx="12" fill="#5663F1" />
        <rect x="193.679" y="193.679" width="61" height="61" rx="12" fill="#5663F1" />
        <rect x="64.5596" y="258.238" width="61" height="61" rx="12" fill="#505060" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M116.277 215.716C115.579 214.809 114.282 213.402 113.097 212.248C111.911 211.094 110.466 209.832 109.533 209.153C106.309 206.809 102.801 208.419 100.177 210.607C98.9045 211.665 97.0333 213.312 95.2361 214.971C93.4389 213.318 91.5615 211.671 90.2893 210.607C87.6584 208.419 84.1505 206.809 80.9267 209.153C80.0003 209.832 78.549 211.094 77.3633 212.248C76.1837 213.402 74.8806 214.809 74.1889 215.716C71.7742 218.854 73.4293 222.268 75.6773 224.823C77.3324 226.704 95.2308 242 95.2308 242C95.2308 242 113.127 226.704 114.783 224.823C117.031 222.268 118.686 218.854 116.277 215.716Z"
            fill="white" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M91.6344 218.462L99.5221 225.04L102.102 223.023H105.692V226.093H103.083L99.4639 228.923L91.8529 222.576L88.4789 226.093H84.7693V223.023H87.2592L91.6344 218.462Z"
            fill="#5663F1" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M245.277 215.716C244.579 214.809 243.282 213.402 242.097 212.248C240.911 211.094 239.466 209.832 238.533 209.153C235.309 206.809 231.801 208.419 229.177 210.607C227.905 211.665 226.033 213.312 224.236 214.971C222.439 213.318 220.561 211.671 219.289 210.607C216.658 208.419 213.15 206.809 209.927 209.153C209 209.832 207.549 211.094 206.363 212.248C205.184 213.402 203.881 214.809 203.189 215.716C200.774 218.854 202.429 222.268 204.677 224.823C206.332 226.704 224.231 242 224.231 242C224.231 242 242.127 226.704 243.783 224.823C246.031 222.268 247.686 218.854 245.277 215.716Z"
            fill="white" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M220.634 218.462L228.522 225.04L231.102 223.023H234.692V226.093H232.083L228.464 228.923L220.853 222.576L217.479 226.093H213.769V223.023H216.259L220.634 218.462Z"
            fill="#5663F1" />
        <path d="M147.958 174H172.518L175 160H162.722L160.241 174L155.278 146H143L147.958 174Z" fill="white" />
        <path d="M212.958 45H237.518L240 31H227.722L225.241 45L220.278 17H208L212.958 45Z" fill="white" />
        <path
            d="M157.423 29.8869C157.423 29.2232 157.756 28.3778 158.299 27.8531C158.846 27.3242 159.603 27.0276 160.365 27.0436C161.111 27.063 161.82 27.3702 162.343 27.9005C162.867 28.4308 163.171 29.2232 163.171 29.8869"
            fill="white" />
        <path
            d="M163.177 29.8841C163.177 29.2232 163.485 28.4114 164.023 27.8794C164.561 27.3475 165.29 27.0469 166.051 27.043C166.813 27.043 167.544 27.3423 168.083 27.8751C168.622 28.4079 168.925 29.2232 168.925 29.8841"
            fill="white" />
        <path
            d="M168.946 29.8835V20.1741C168.95 19.4133 169.255 18.6847 169.795 18.1467C170.335 17.6087 171.066 17.3047 171.83 17.3008C172.595 17.3008 173.329 17.6035 173.87 18.1424C174.411 18.6812 174.715 19.4121 174.715 20.1741L174.715 34.1398C174.716 36.0364 174.352 37.9157 173.642 39.6759L172.902 41.5262C172.193 43.2865 172.071 45.1656 172.072 47.0622"
            fill="white" />
        <path
            d="M152.911 47.0625C152.914 46.1512 152.913 45.2483 152.563 44.4064C152.213 43.5645 151.699 42.8002 151.05 42.1582L143.891 35.0275C143.607 34.7458 143.381 34.4105 143.228 34.0411C143.075 33.6718 142.998 33.2758 143 32.8762C143.003 32.0661 143.323 31.2891 143.891 30.7099C144.173 30.421 144.509 30.1914 144.882 30.0346C145.254 29.8777 145.654 29.7969 146.058 29.7969C146.462 29.7969 146.863 29.8777 147.235 30.0346C147.607 30.1914 147.944 30.421 148.225 30.7099L151.654 34.1399V16.8734C151.654 16.1113 151.958 15.3804 152.499 14.8416C153.039 14.3027 153.773 14 154.538 14C155.302 14.004 156.033 14.3079 156.573 14.846C157.114 15.384 157.419 16.1125 157.423 16.8734V29.8837"
            fill="white" />
        <rect x="152.911" y="29.8838" width="19.1609" height="17.1788" fill="white" />
        <path
            d="M91.4227 286.887C91.4227 286.223 91.7557 285.378 92.2986 284.853C92.8458 284.324 93.6028 284.028 94.3647 284.044C95.1106 284.063 95.8199 284.37 96.3433 284.901C96.8667 285.431 97.171 286.223 97.171 286.887"
            fill="white" />
        <path
            d="M97.1767 286.884C97.1767 286.223 97.4848 285.411 98.0229 284.879C98.5611 284.347 99.2898 284.047 100.051 284.043C100.813 284.043 101.544 284.342 102.083 284.875C102.622 285.408 102.925 286.223 102.925 286.884"
            fill="white" />
        <path
            d="M102.946 286.884V277.174C102.95 276.413 103.255 275.685 103.795 275.147C104.335 274.609 105.066 274.305 105.83 274.301C106.595 274.301 107.329 274.604 107.87 275.142C108.411 275.681 108.715 276.412 108.715 277.174L108.715 291.14C108.716 293.036 108.352 294.916 107.642 296.676L106.902 298.526C106.193 300.286 106.071 302.166 106.072 304.062"
            fill="white" />
        <path
            d="M86.9108 304.062C86.9142 303.151 86.9133 302.248 86.5633 301.406C86.2133 300.564 85.6987 299.8 85.0496 299.158L77.8911 292.027C77.6066 291.746 77.3813 291.41 77.2283 291.041C77.0753 290.672 76.9977 290.276 77.0001 289.876C77.0029 289.066 77.3225 288.289 77.8911 287.71C78.1726 287.421 78.5095 287.191 78.8818 287.035C79.254 286.878 79.6541 286.797 80.0583 286.797C80.4624 286.797 80.8625 286.878 81.2348 287.035C81.607 287.191 81.9439 287.421 82.2254 287.71L85.6536 291.14V273.873C85.6536 273.111 85.9576 272.38 86.4985 271.842C87.0395 271.303 87.7732 271 88.5382 271C89.302 271.004 90.0334 271.308 90.5735 271.846C91.1136 272.384 91.4187 273.113 91.4227 273.873V286.884"
            fill="white" />
        <rect x="86.9109" y="286.884" width="19.1609" height="17.1788" fill="white" />

        <path id="path" d="M133 160.5H96V98H291.5V32H254" stroke="#FF0032" stroke-width="20" stroke-linecap="round"
            stroke-linejoin="round" />
        <g class="finger" ref="fingerRef" filter="url(#filter0_d_2009_475)">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M95.8391 33.5556V50.6H111.02C113.893 50.6098 116.692 51.9116 118.738 53.9661C120.783 56.0206 121.957 58.8099 122.007 61.7357L122.061 69.7363C122.061 76.475 118.873 81.2354 114.195 86.0001H89.2836L83.7955 80.512L83.7496 80.5579L68.9161 65.7244C66.1348 62.9431 66.5983 58.7712 68.9161 56.4534C71.2338 54.1357 75.4057 53.6722 78.187 56.4534L82.728 60.9944V33.5556C82.728 29.6222 86.0058 27 89.2835 27C92.5613 27 95.8391 29.6222 95.8391 33.5556Z"
                fill="white" />
            <!-- <animateMotion path="M133 160.5H96V98H291.5V32H254" dur="5s" keyPoints="1;0" keyTimes="0;1" begin=".1s" >
            </animateMotion> -->
        </g>
        <defs>
            <filter id="filter0_d_2009_475" x="47" y="7" width="95.0615" height="99" filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2009_475" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2009_475" result="shape" />
            </filter>
        </defs>
    </svg>



</template>

<style scoped>
.cheese-block {
margin-top: calc(var(--app-height)* 8.2 / 100);
    width: calc(var(--app-width)* 85.2 / 100);
    height: calc(var(--app-width)* 85.2 / 100);
}

#path{
    stroke-dasharray: 553.36767578125;
    /* stroke-dashoffset: -553.36767578125; */
    stroke:red;
    animation: pp 5s linear reverse;

}

@keyframes pp{
    from{
        stroke-dashoffset: 0;
    }
    to{
        stroke-dashoffset: -553.36767578125;
    }
}

/* .finger{

    animation: move 4s linear ;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;

}

@keyframes move {
    0% {
        transform: translateX(0);
    }

    25%{
      transform: translateX(67%);  
    }

    43% {
        transform: translateX(67%) translateY(20%);
    }

    88% {
    transform: translateX(0%) translateY(20%);
    }
    95% {
        transform: translateX(0%) translateY(40%);
    }

    100% {
        transform: translateX(17%) translateY(40%);
    }
} */

</style>
