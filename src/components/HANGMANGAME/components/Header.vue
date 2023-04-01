

<script setup>
const props = defineProps({
  wrongcount: { type: Number, default: 0 },
  name: { type: String, default: "Hangman" },
  CountWord:{type:Number },
  AllWordNo:{type:Number}
  
  
});
</script>
 
<template>
<div>
            <h1 class ="flex justify-center font-RampartOne text-3xl ">{{ props.name }} <span class="absolute right-2">{{props.CountWord}}/{{ props.AllWordNo }}</span></h1>        
            <p class ="flex justify-center text-xl mt-4 " > Your Remaining lives : <span class="ml-3  font-extrabold text-cyan-700">{{ 6-props.wrongcount }}</span></p>
</div>
</template>
 
<style scoped>



</style>