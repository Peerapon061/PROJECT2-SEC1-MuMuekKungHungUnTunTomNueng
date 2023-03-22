<script setup>
            import {computed} from 'vue'
            import '../../assets/style.css'

            const props = defineProps({
              status: { type:String,  default: ''} ,
                 word:{type:String, default :''} } ) 



                 const finalMessage = computed(()=>{
                  
                        if(props.status ==='win') return 'YON WIN! '
                        if(props.status ==='lost') return 'NICE TRY'

                        else 
                        { return ''}

                 })
               


</script> 

<template>
<div    v-if="finalMessage" class="popup-container flex justify-center" id="popup-container">
    <div class ="popup  text-5xl">
        <h3 :class="status === 'win' ? 'text-green-600' : 'text-red-700 ' ">{{ finalMessage}}</h3>
        <h2>ANSWER IS <span class="text-cyan-200  ">{{ word.toLocaleUpperCase() }}</span></h2>
        
     
       
        <button  @click="$emit('reset')">Play agian </button>

    </div>

</div>

<!-- <button @click="finalMessage"  class="bg-blue-500
 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
></button> -->

</template>
 
<style scoped>


.popup-container {
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
   /* display: flex;  */
  
  align-items: center;
  justify-content: center;
}



.popup button {
  cursor: pointer;
  background-color: #fff;
  color: #2980b9;
  border: 0;
  margin-top: 20px;
  padding: 12px 20px;
  font-size: 16px;
}

.popup button:active {
  transform: scale(0.98);
}

.popup button:focus {
  outline: 0;
}
</style>