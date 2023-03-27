<script setup>
import { RouterLink } from 'vue-router';
</script>
 
<template>

    <div class="w-full  h-full bg-gradient-to-b from-amber-900  to-black ">
  <div class="flex flex-col m-auto relative top-10  border-4 border-zinc-800 drop-shadow-lg   w-4/5 h-4/5 bg-boradWood bg-cover"> 
    <div class="w-full h-1/6 flex  pr-6  justify-end"> 
      

    </div>
    <div class="w-full h-2/6  flex justify-center text-8xl relative   text-white drop-shadow-2xl   font-bold font-RampartOne ">
      <h1 class=" drop-shadow-xl ">
        <span class="bg-black/50 rounded-lg px-2 ">H</span>ang Man  
      </h1> 
     </div>
     <div class=" mb-5">
      <RouterLink to="/playgame" class="  relative text-3xl font-LilitaOne space-y-10 flex flex-col     p-5   btn btn-active w-2/6 h-1/4 mx-auto   border-4  bg-yellow-400 text-black font-bold cursor-pointer mb-2">Play      </RouterLink>
      <RouterLink to="/categories" class="  relative text-3xl font-LilitaOne space-y-10 flex flex-col     p-5   btn btn-active w-2/6 h-1/4 mx-auto   border-4  bg-yellow-400 text-black font-bold cursor-pointer mb-2">Edit Category     </RouterLink>
      <RouterLink to="/howtoplay" class="  relative text-3xl font-LilitaOne space-y-10 flex flex-col     p-5   btn btn-active w-2/6 h-1/4 mx-auto   border-4  bg-yellow-400 text-black font-bold cursor-pointer">How to play     </RouterLink>
    </div>
    </div>

    <div class="w-full h-1/5 bg-WoodFloor"><div class="w-full h-full bg-gradient-to-b from-black  to-black/50"></div> </div>
    <!-- sadadasdasd -->
    
    <!-- afsrfasf -->
</div>

</template>
 
<style scoped>

</style>