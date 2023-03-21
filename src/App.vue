<script setup>
import { computed, ref } from 'vue';
import '../src/assets/style.css';
import Header from "./components/Header.vue";
import Figure from "./components/Figure.vue";
import Word from "./components/Word.vue";
import Pop from "./components/Popup.vue";
import keyboard from "./components/KEYBOARD/keyboard.vue"
const allWord = [
    "cat",
    "pooh",
    "university"
];
const clickKd =(event)=>{
           const letter = event.toLowerCase()
         guessedLetters.value.push(letter);
         
         
}
const randomWord = () => allWord[Math.floor(Math.random() * allWord.length)];
const word = ref(randomWord());
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
    wrongLetters.value =[]
    word.value = randomWord();
    resetkb.value++
}
let resetkb=ref(0)

</script>

<template>
    <div>
        <Header />
        <Figure :wrongcount="wrongLetters.length" />
        <Word :letters="letters" :correct-letters="correctLetters" />
        
    </div>
    <div>
    <keyboard @press="clickKd" :wordques="word" :statuscode="resetkb"  />
    <Pop :status="status " :word="word" @reset ="reset" />
    </div>
</template>

<style scoped>

input:focus::placeholder {
  color: transparent;
}
</style>
