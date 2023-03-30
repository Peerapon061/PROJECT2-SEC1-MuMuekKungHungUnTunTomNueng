<script setup>
const props = defineProps({
  cataName: {type:String},
  wrongcount: { type: Number, default: 0 },
});
</script>
 
<template>
<div>
            <h1 class ="flex justify-center font-RampartOne text-3xl ">{{ props.cataName}}</h1>        
            <p class ="flex justify-center">Alive : <span class="ml-3  font-extrabold text-cyan-700">{{ 6-props.wrongcount }}</span></p>
</div>
</template>
 
<style scoped>

</style>