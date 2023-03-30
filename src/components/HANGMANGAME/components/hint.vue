<script setup>
const props = defineProps({
     hint: { type:String,  default:"" } , 
     wrongcount:{type:Number , default:0}
})
</script>
 
<template>
     <div class="flex justify-center items-center ">
          <p>Hint : <span v-if="props.wrongcount>=4">{{ props.hint }}</span></p>
</div>
</template>
 
<style scoped>

</style>