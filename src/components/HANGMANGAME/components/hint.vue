<script setup>
const props = defineProps({
     hint: { type:String,  default:"" } , 
     wrongcount:{type:Number , default:0}
})
</script>
 
<template>
     <div class="flex justify-center items-center ">
          <p>Hint : <span v-if="props.wrongcount>=4">{{ props.hint }}</span> <span v-else class="text-red-800 text-sm"> When you have less than half of lives left, a hint will appear.</span ></p>
</div>
</template>
 
<style scoped>

</style>