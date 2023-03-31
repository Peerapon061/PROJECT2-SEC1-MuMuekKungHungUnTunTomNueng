<script setup>
            import {computed} from 'vue'
            import '../../../assets/style.css'
            import { playsound } from '../../../composable/sound';
            const props = defineProps({
              status: { type:String,  default: ''} ,
                 word:{type:String, default :''} ,
                 endgame:{type:Number,default:1} }) 
                 const finalMessage = computed(()=>{    
                        if(props.status ==='win') return 'YON WIN!'
                        if(props.status ==='lost') return 'NICE TRY'
                        else 
                        { return ''}
                 })
const emit=defineEmits(['next','reset','menu'])
</script> 

<template>
<div    v-if="(finalMessage && props.endgame==0)||(finalMessage=='NICE TRY' && props.endgame==1)" class="popup-container flex justify-center font-Comfortaa" id="popup-container" >
    <div class ="popup  text-5xl">
        <h3 :class="status === 'win' ? 'text-green-600' : 'text-red-700 ' " class="text-center mb-4">{{ finalMessage}}</h3>
        <h2>ANSWER IS <span class="text-cyan-200  ">{{ word.toLocaleUpperCase() }}</span></h2>       
       <div class="grid  items-center">
        <button  @click=" $emit('reset')" :class="status=='win'?'hidden':''">Play agian </button>
        <button  @click="$emit('menu')" :class="status=='win'?'hidden':''">Choose Category</button>
        <button  @click="$emit('next')" :class="status=='win'?'':'hidden'" class="grid items-center">Next Question </button>
      </div>
        
    </div>

</div>
<div v-if="finalMessage=='YON WIN!' && props.endgame==1" >
  <div class ="popup-container2   bg-gradient-to-r  from-yellow-600 to-yellow-500 " id="popup-container">
    <div class="grid justify-center items-center">
      <h1 class="text-8xl mt-52 text-yellow-300 waviy">Game Clear</h1>
      <button class="rounded-2xl hover:cursor-pointer transition duration-150  active:scale-90 bg-white text-orange-400 py-3 px-3 mt-6" @click="$emit('menu')">Choose Category</button>
    </div>
    
    
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

.popup-container2 {
  
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

.waviy {
  animation: waviy 1s infinite;
  animation-delay: calc(.1s * var(--i));
  
}
@keyframes waviy {
  0%,40%,100% {
    transform: translateY(0)
  }
  20% {
    transform: translateY(-20px)
  }
}





</style>