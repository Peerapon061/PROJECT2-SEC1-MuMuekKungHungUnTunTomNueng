<script setup>
const props=defineProps({
    word:{type:String,default:''}
})
</script>
 
<template>
<div>
 <button class="rounded-2xl">{{ props.word }}</button>
</div>
</template>
 
<style scoped>
button {
  cursor: pointer;
  background-color: #fff;
  color: #2980b9;
  border: 0;
  margin-top: 20px;
  padding: 12px 20px;
  font-size: 16px;
}

button:active {
  transform: scale(0.98);
}

button:focus {
  outline: 0;
}
</style>