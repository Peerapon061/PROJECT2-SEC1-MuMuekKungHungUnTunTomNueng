<script setup>
const props = defineProps({ lettterkey: {type:String,  default: ''}, statusdis: {type:Number,  default: 0},correct:{type:Number,default:0}});
</script>

<template>
  <div>
    <button
      class="rounded-2xl shadow-sm shadow-black bg-gray-300 text-xl px-3 py-3 hover:cursor-pointer transition duration-300 h-11 w-14  mx-3 active:scale-90 disabled:cursor-default disabled:scale-90"
    :disabled="props.statusdis==0? false:true"  
    :class="[props.correct==1? 'disabled:bg-red-500':'',props.correct==2?'disabled:bg-green-500':'']"
    >
      {{ props.lettterkey }}
    </button>
  </div>
</template>

<style scoped></style>
