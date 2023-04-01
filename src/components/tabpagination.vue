<script setup>
import {ref} from "vue"

let countPageRef = ref(1)
const emits=defineEmits(['returnPage'])
const props = defineProps({
    countPage : {
        type : [Number,undefined]
    },

    TempObjTargetLength :{
        type: Object
    }
    
})
const showPagination =(direction)=>{

 if(direction === 'right'){
  

   if(countPageRef.value < Math.ceil(props.TempObjTargetLength.vocabs.length/4)){
     countPageRef.value++

   }
 }
 else{
   if(countPageRef.value >1){
     countPageRef.value --
   }
   
 }


 emits('returnPage',countPageRef.value)

}
</script>
 
<template>
      <div class="btn-group mx-auto">
  <button class="btn" @click="showPagination('left')">«</button>
  <button class="btn"> {{ countPageRef  }}</button>
  <button class="btn" @click="showPagination('right')">»</button>
      </div>
</template>
 
<style scoped>

</style>