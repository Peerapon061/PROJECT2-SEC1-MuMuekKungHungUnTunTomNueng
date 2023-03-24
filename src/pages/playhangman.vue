<script setup>
import {onMounted,ref} from 'vue';
import { getCategories } from '../composable/getCategories';
import game from '../components/HANGMANGAME/hangman.vue'
const cataForGame=ref([])
const SelectedCata=ref([{word:"cat",meaning:"เเมว"},
    {word:"pooh",meaning:"ภู"},
    {word:"university",meaning:"มหาลัย"}])




onMounted(async()=>{
    cataForGame.value=await getCategories()
})
let open=ref(0)
function closegame() {
    open.value=0
}
function opengame() {
    open.value=1
    changgame.value=true
}
let changgame=ref(false)
function changdone() {
    changgame.value=false
}
</script>
 
<template>
<div class="w-full  h-full bg-gradient-to-b from-amber-900  to-black ">
  <div class="flex flex-col m-auto relative top-10  border-4 border-zinc-800 drop-shadow-lg   w-4/5 h-4/5 bg-orange-300 bg-cover"> 
    <div class="popup-container" v-show="open==1">
        <game  @ending="closegame()" :question="SelectedCata" :change="changgame" @chang="changdone()"/>
    </div> 
  <div class="flex justify-center items-center">
    <select v-model="SelectedCata" name="categories" id="categories">
        <option v-for="(cata,index) in cataForGame" :key='cata.id' class="text-black" :value="cata.vocabs">{{ cata.CategoryName }}</option>
    </select>
    <button @click="opengame()">PLAY</button> 
     </div> 
  </div>
    <div class="w-full h-1/5 bg-WoodFloor"><div class="w-full h-full bg-gradient-to-b from-black  to-black/50"></div> </div>
</div>

</template>
 
<style scoped>
.popup-container {
  background-color: rgb(177, 131, 71);
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
</style>