<script setup>
import { RouterLink } from 'vue-router';
</script>
 
<template>

    <div class="w-full  h-full bg-gradient-to-b from-amber-900  to-black ">
  <div class="flex flex-col m-auto relative top-10  border-4 border-zinc-800 drop-shadow-lg   w-4/5 h-4/5 bg-boradWood bg-cover"> 
    <div class="w-full h-1/6 flex  pr-6  justify-end"> 
      <label class="swap text-white ">
  
  <!-- this hidden checkbox controls the state -->
  <input type="checkbox" />
  
  <!-- volume on icon -->
  <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"/></svg>
  
  <!-- volume off icon -->
  <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z"/></svg>
  
</label>
    </div>
    <div class="w-full h-2/6  flex justify-center text-8xl relative   text-white drop-shadow-2xl   font-bold font-RampartOne ">
      <h1 class=" drop-shadow-xl ">
        <span class="bg-black/50 rounded-lg px-2 ">H</span>ang Man  
      </h1> 
     </div>
      <RouterLink to="/playgame" class="w-full h-2/6 relative text-3xl font-LilitaOne space-y-10 flex flex-col    p-5">
      <button class="btn btn-active w-2/6 h-2/5 mx-auto   border-4 text-3xl bg-yellow-400 text-black font-bold"> START </button>
      </RouterLink>
      <RouterLink to="/categories" class="w-full h-2/6 relative text-3xl font-LilitaOne space-y-10 flex flex-col    p-5">
      <button class="btn btn-active w-2/6 h-2/5 mx-auto   border-4 text-3xl bg-yellow-400 text-black font-bold"> Manage </button>
      </RouterLink>
      <RouterLink to="/howtoplay" class="w-full h-2/6 relative text-3xl font-LilitaOne space-y-10 flex flex-col    p-5">
      <button class="btn btn-active w-2/6 h-2/5 mx-auto   border-4 text-3xl bg-yellow-400 text-black font-bold"> HOW TO PLAY </button>
       </RouterLink>
  </div>

    <div class="w-full h-1/5 bg-WoodFloor"><div class="w-full h-full bg-gradient-to-b from-black  to-black/50"></div> </div>
</div>

</template>
 
<style scoped>

</style>