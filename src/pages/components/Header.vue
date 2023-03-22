<script setup>
const props = defineProps({
  wrongcount: { type: Number, default: 0 },
});
console.log(props.wrongcount);
</script>
 
<template>
<div>
            <h1 class ="flex justify-center">HANGMAN</h1>        
            <p class ="flex justify-center">Alive : {{ 6-props.wrongcount }}</p>
</div>
</template>
 
<style scoped>

</style>