<script setup>
const props = defineProps({
     letters: { type:Array,  required: true } , 
     correctLetters: {type:Array ,default :[] }} ) 
</script>
 
<template>
<div class ="flex space-x-5 mt-10">
    <div class="w-16 h-16 bg-white rounded-2xl  items-center flex justify-center text-5xl text-white " v-for="(word,index) in letters" :key="index" :class="correctLetters.includes(word) ? 'bg-orange-400':'bg-green-200'" >
    {{ correctLetters.includes(word) ? word :' ' }}
    </div>
  

</div>
</template>
 
<style scoped>

</style>