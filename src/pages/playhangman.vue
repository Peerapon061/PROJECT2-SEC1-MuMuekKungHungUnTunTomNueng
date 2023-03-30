<script setup>
import {onMounted,ref,computed} from 'vue';
import { getCategories } from '../composable/getCategories';
import { RouterLink } from 'vue-router';
import game from '../components/HANGMANGAME/hangman.vue'
import { playsound,colletSound,worngSound } from '../composable/sound';
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
    searchKeyword.value=""
}
function opengame() {
    open.value=1
    changgame.value=true
}
let changgame=ref(false)
function changdone() {
    changgame.value=false
}
function getCategory(cateid) {
   let game=cataForGame.value.find((x)=>x.id==cateid)
   try{
    SelectedCata.value=game.vocabs
   }
   catch{
    console.log("wait");
   }
   
   setTimeout(() => {
  opengame()
}, 200);
playsound()
}
function randomquiz(){
  let x=Math.floor(Math.random() * (cataForGame.value.length - 1 + 1) + 1)
  getCategory(x)
  playsound()
  
}
const searchKeyword = ref("");
const filterSearch = computed(() => {
  return cataForGame.value.filter((listf) =>
    listf.CategoryName.toLowerCase().includes(searchKeyword.value.toLowerCase())
  );
});

</script>
 
<template>
<div class="w-screen  h-screen bg-gradient-to-b from-amber-900 to-black font-Comfortaa ">
  <div class="  m-auto relative top-10  border-4 border-amber-900 drop-shadow-lg   w-4/5 h-4/5    bg-gradient-to-r from-yellow-600 to-yellow-500  bg-cover"> 
    <div class="popup-container w-5/5 h-5/5 bg-gradient-to-r text-black font-extrabold from-yellow-600 to-yellow-500" v-show="open==1">
        <game  @ending="closegame()" :question="SelectedCata" :change="changgame" @chang="changdone()"/>
    </div> 
  <div class=" " v-show="!open==1">
    <h1 class="flex justify-center items-center mt-10  text-5xl font-RampartOne  bg-gradient-to-br from-yellow-200  to-amber-300 py-5 text-black font-extrabold"> Choose category </h1>
    <div class="flex justify-center mx-auto items-center w-3/5  h-12 mt-5 text-lg  font-extrabold  text-amber-900">--- Click on a category to play hangman ---</div>  
    <div class="flex justify-center items-center w-full h-12 mt-5 "><input type="text" placeholder=" Search.." class="rounded-xl h-10 w-full bg-gray-200 mx-64 pl-10" v-model.trim="searchKeyword"></div>  
<div class=" flex overflow-x-auto  w-auto items-center mt-4 pb-20">
  <button class=" w-60 h-60  mx-2 my-2 rounded-2xl text-3xl shadow-black/40  text-white flex btn btn-active   bg-yellow-700 font-bold" @click="randomquiz()">Random</button>
<div v-for="(cata,index) in filterSearch" class="">
<button class=" w-60 h-60  mx-2 my-2 rounded-2xl text-3xl shadow-black/40  text-black flex btn btn-active   bg-orange-200 font-bold" @click="getCategory(cata.id)">{{ cata.CategoryName }}</button>
<!-- w-60 h-60  mx-2 my-2    mt-20 flex btn btn-active  text-3xl bg-orange-400 font-bold -->
</div>
<div class="bg-white"></div>
</div>

    </div>
  </div>
    <div class="w-full h-1/5 bg-WoodFloor">
      <div class="w-full h-full bg-gradient-to-b from-black  to-black/50">
    <RouterLink @click="playsound" to="/" class=" mt-20 flex btn btn-active w-2/6 h-2/5 mx-auto   text-amber-800 hover:text-white hover:bg-slate-800  text-3xl bg-yellow-400 font-bold">BACK TO MAIN MENU </RouterLink>
    </div>
   </div>
</div>

</template>
 
<style scoped>
.popup-container {
  background-color: rgb(224, 171, 101);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
   /* display: flex;  */
  position: fixed;
  align-items: center;
  justify-content: center;
}
input.placeholder {
    text-align: center;
}
</style>