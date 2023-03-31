<script setup>
const props = defineProps({
     letters: { type:Array,  required: true } , 
     correctLetters: {type:Array ,default :[] }} ) 
</script>
 
<template>
<div class ="flex space-x-5 mt-5 mb-3  ">
    <div class="w-10 h-10  rounded-2xl  items-center flex justify-center text-2xl  text-white transition duration-300" v-for="(word,index) in letters" :key="index" :class="correctLetters.includes(word) ? 'bg-orange-400':'bg-green-200'" >
    {{ correctLetters.includes(word) ? word :' ' }}
    </div>
  

</div>
</template>
 
<style scoped>

</style>