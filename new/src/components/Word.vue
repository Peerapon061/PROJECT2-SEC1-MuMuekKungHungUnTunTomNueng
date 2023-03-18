<script setup>
const props = defineProps({
     letters: { type:Array,  required: true } , 
     correctLetters: {type:Array ,default :[] }} ) 
</script>
 
<template>
<div class ="word">
    <span class="letter" v-for="(word,index) in letters" :key="index" >
    
    {{ correctLetters.includes(word) ? word :'' }}
    
    </span>
  

</div>
</template>
 
<style scoped>

</style>