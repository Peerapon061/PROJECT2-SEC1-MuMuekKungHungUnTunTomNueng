<script setup>
const props = defineProps({
  wrongcount: { type: Number, default: 0 },
  name: { type: String, default: "Hangman" }
});
</script>
 
<template>
<div>
            <h1 class ="flex justify-center font-RampartOne text-3xl ">{{ props.name }}</h1>        
            <p class ="flex justify-center">Alive : <span class="ml-3  font-extrabold text-cyan-700">{{ 6-props.wrongcount }}</span></p>
</div>
</template>
 
<style scoped>

</style>