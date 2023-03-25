<script setup>
import { computed, initCustomFormatter, ref } from 'vue';
import {game} from '../../composable/game.js'
import '../../assets/style.css';
import Header from "./components/Header.vue";
import Figure from "./components/Figure.vue";
import Word from "./components/Word.vue";
import Pop from "./components/Popup.vue";
import keyboard from "./components/KEYBOARD/keyboard.vue"
import hint from "./components/hint.vue"
import bt from '../../components/button.vue'
const props = defineProps({
     question: { type:Array,  default:[]} ,
     change: { type:Boolean,  default:false} 
}) 
let count=ref(0)
const allWord =  ref(props.question)
const clickKd =(event)=>{
           const letter = event.toLowerCase()
         guessedLetters.value.push(letter);        
}
const emits = defineEmits(["ending","chang"])
let mygame=ref(new game(allWord.value))
let mygamelist=ref(mygame.value.createdgame())
const word = ref(allWord.value[mygamelist.value[0]].word);
 const getmean = computed(() =>
 allWord.value.find((x)=>x.word===word.value).meaning
);
//  const meanings = ref(getMeaning());
const guessedLetters = ref([]);
const letters = computed(() => word.value.split(""));

const wrongLetters = computed(() =>
    guessedLetters.value
        .filter((l) => !letters.value.includes(l))
        .reduce((x, y) => (x.includes(y) ? x : [...x, y]), [])
);
const correctLetters = computed(() =>
    guessedLetters.value.filter((l) => letters.value.includes(l))
);
const status = computed(()=>
{
    if(wrongLetters.value.length === 6) {
    return 'lost'

    }

    if(letters.value.every(l => correctLetters.value.includes(l)))
    return 'win'
    else return ''
})
const reset = () => {
    guessedLetters.value =[]
    count.value=0
    mygamelist.value=mygame.value.createdgame()
    word.value = allWord.value[mygamelist.value[0]].word
    resetkb.value++
    endgame.value=0
}
const next = () => {
    if(count.value<mygamelist.value.length-2){
        guessedLetters.value =[]
    word.value = allWord.value[mygamelist.value[++count.value]].word
    resetkb.value++
    }else if(count.value<mygamelist.value.length-1){
    guessedLetters.value =[]
    word.value = allWord.value[mygamelist.value[++count.value]].word
    resetkb.value++
    endgame.value++
    }
}
let resetkb=ref(0)
let endgame=ref(0)

const closegame=()=>{
    emits('ending')
    reset()
}
const initGame=()=>{
   if(props.change==true) {
    let kk=props.question
    allWord.value=kk
    mygame.value=new game(allWord.value)
    mygamelist.value=mygame.value.createdgame()
    reset()
    emits('chang')
   }
}

</script>

<template>
    <p class="hidden">{{ initGame() }}</p>
    <button @click="closegame()" class="text-blue-300 border-2 bg-white rounded-lg  px-1 py-1 my-2 mx-2">Close</button>
    <div class="-mt-11">
        <Header  class="mb-3" :wrongcount="wrongLetters.length"/>
        <div ><hint :hint="getmean" :wrongcount="wrongLetters.length"/></div>
        <div class="grid justify-center items-center">
        <Figure :wrongcount="wrongLetters.length"/>
        </div>
        <div class="flex justify-center items-center" :class="[status=='win'?'hidden':'',status=='lost'?'hidden':'']">
        <Word :letters="letters" :correct-letters="correctLetters"  />
        </div>
        <div :class="[status=='win'?'hidden':'',status=='lost'?'hidden':'']">
        <keyboard  @press="clickKd($event)" :wordques="word" :statuscode="resetkb"  />      
    </div>               
    <Pop :status="status " :word="word" @reset ="reset()" @next="next()" :endgame="endgame" @menu="closegame()"/>
    </div>
    
    
    
</template>

<style scoped>

</style>
