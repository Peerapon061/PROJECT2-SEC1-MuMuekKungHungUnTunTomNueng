<script setup>
import "tw-elements";

import { RouterLink } from 'vue-router';
import {playsound} from '../composable/sound.js'






</script>
 
<template>
  
    <div class="w-full  h-full bg-gradient-to-b from-amber-900  to-black ">

  <div class="flex flex-col m-auto relative top-10  border-4 border-zinc-800 drop-shadow-lg   w-4/5 h-5/5 bg-white bg-cover"> 
    



    <div
  id="carouselExampleCaptions"
  class="relative"
  data-te-carousel-init
  data-te-carousel-slide>
  <div
    class="absolute right-0 bottom-0 left-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
    data-te-carousel-indicators>
    <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to="0"
      data-te-carousel-active
      class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-current="true"
      aria-label="Slide 1"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to="1"
      class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 2"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to="2"
      class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 3"></button>


      <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to="3"
      class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 4"></button>
  </div>
  <div
    class="  h-4/5 relative w-full overflow-hidden after:clear-both after:block after:content-['']">
    <div
      class="relative float-left -mr-[100%]  w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-active
      data-te-carousel-item
      style="backface-visibility : hidden: ">
      <img
        src="../img/howtoplay/1.png"
        class="block  "
        alt="..." />
        <div
        class="absolute inset-x-[15%] bottom-5  py-5 text-center text-white bg-black/25">
        <h5 class="text-3xl font-Comfortaa">STEP 1 : Add your words</h5>
        
      </div>
    </div>
    <div
      class="  relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item
      style="backface-visibility: hidden">
      <img
        src="../img/howtoplay/2.png"
        class="block  "
        alt="..." />
        <div
        class="absolute inset-x-[15%] bottom-5  py-5 text-center text-white bg-black/25">
        <h5 class="text-3xl font-Comfortaa">STEP 2 : Create your category</h5>
        
      </div>
    </div>
    <div
      class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item
      style="backface-visibility: hidden">
      <img
        src="../img/howtoplay/3.png"
        class="block w-full"


        alt="..." />
        <div
        class="absolute inset-x-[15%] bottom-5  py-5 text-center text-white bg-black/25">
        <h5 class="text-3xl font-Comfortaa">STEP 3 : Choose your category</h5>
        
      </div>

      
    </div>

    <div
      class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item
      style="backface-visibility: hidden">
      <img
        src="../img/howtoplay/4.png"
        class="block w-full"


        alt="..." />
      <div
        class="absolute inset-x-[15%] bottom-5  py-5 text-center text-white bg-black/25">
        <h5 class="text-3xl font-Comfortaa">STEP 4 : Play Hangman</h5>
        
      </div>

      
    </div>
    
  </div>
  <button
    class="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselExampleCaptions"
    data-te-slide="prev">
    <span class="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-10 w-10 bg-red-800">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </span>
    <span
      class=" red!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Previous</span
    >
  </button>
  <button
    class="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselExampleCaptions"
    data-te-slide="next">
    <span class="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-10 w-10 bg-red-800">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </span>
    <span
      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Next</span
    >
  </button>
</div>






</div>




    <div class="w-full h-1/5 bg-WoodFloor"><div class="w-full h-full bg-gradient-to-b from-black  to-black/30">





      <RouterLink to="/"  @click ="playsound"  class=" mt-20 flex btn btn-active w-2/6 h-2/5 mx-auto    text-amber-800 hover:text-white hover:bg-slate-800   bg-yellow-400 font-bold" >
<button   class="   text-3xl font-Comfortaa"> BACK TO MAIN MENU</button>

      </RouterLink>

    </div>
  



  
  </div>




</div>



</template>
 
<style scoped>

</style>