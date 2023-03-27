<script setup>
import {onMounted,ref,computed} from 'vue';
import { getCategories } from '../composable/getCategories';
import { RouterLink } from 'vue-router';
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
   SelectedCata.value=game.vocabs
   setTimeout(() => {
  opengame()
}, 600);
}
const searchKeyword = ref("");
const filterSearch = computed(() => {
  return cataForGame.value.filter((listf) =>
    listf.CategoryName.toLowerCase().includes(searchKeyword.value.toLowerCase())
  );
});

</script>
 
<template>
<div class="w-screen  h-screen bg-gradient-to-b from-amber-900  to-black font-Comfortaa ">
  <div class="  m-auto relative top-10  border-4 border-zinc-800 drop-shadow-lg   w-4/5 h-4/5 bg-orange-300 bg-cover"> 
    <div class="popup-container w-5/5 h-5/5" v-show="open==1">
        <game  @ending="closegame()" :question="SelectedCata" :change="changgame" @chang="changdone()"/>
    </div> 
  <div class=" " v-show="!open==1">
    <h1 class="flex justify-center items-center mt-10  text-5xl">Choose category </h1>
    <div class="flex justify-center items-center w-full h-12 mt-5 bg-white">Choose category for play Hangman</div>  
    <div class="flex justify-center items-center w-full h-12 mt-5 "><input type="text" placeholder=" Search.." class="rounded-xl h-10 w-full bg-gradient-to-r from-slate-500 to-yellow-100 mx-64 pl-10" v-model.trim="searchKeyword"></div>  
<div class=" flex overflow-x-auto  w-auto items-center mt-4 pb-20">
<div v-for="(cata,index) in filterSearch" class="">
<button class=" w-60 h-60  mx-2 my-2 rounded-2xl hover:cursor-pointer   active:scale-90 bg-gradient-to-r from-yellow-100 via-green-200 to-green-300 text-3xl  transition duration-300 cursor-pointer shadow-xl shadow-black" @click="getCategory(cata.id)">{{ cata.CategoryName }}</button>
</div>
<div class="bg-white"></div>
</div>

    </div>
  </div>
    <div class="w-full h-1/5 bg-WoodFloor"><div class="w-full h-full bg-gradient-to-b from-black  to-black/50">
    <RouterLink to="/" class=" mt-20 flex btn btn-active w-2/6 h-2/5 mx-auto   text-3xl bg-orange-400 font-bold">BACK TO MAIN MENU </RouterLink>
    </div> </div>
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