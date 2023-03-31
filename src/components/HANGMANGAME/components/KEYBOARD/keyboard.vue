<script setup>
import buttonletter from "./components/button.vue";
import { playsound,worngSound,clickButton} from "../../../../composable/sound.js";
import { ref, computed } from "vue";
defineEmits(['press'])
const keybordValue = ref([{ key: 'A', disable: 0, styleColor: 0 }, { key: 'B', disable: 0, styleColor: 0 }, { key: 'C', disable: 0, styleColor: 0 },
{ key: 'D', disable: 0, styleColor: 0 }, { key: 'E', disable: 0, styleColor: 0 }, { key: 'F', disable: 0, styleColor: 0 },
{ key: 'G', disable: 0, styleColor: 0 }, { key: 'H', disable: 0, styleColor: 0 },
{ key: 'I', disable: 0, styleColor: 0 }, { key: 'J', disable: 0, styleColor: 0 }, { key: 'K', disable: 0, styleColor: 0 },
{ key: 'L', disable: 0, styleColor: 0 }, { key: 'M', disable: 0, styleColor: 0 }, { key: 'N', disable: 0, styleColor: 0 },
{ key: 'O', disable: 0, styleColor: 0 }, { key: 'P', disable: 0, styleColor: 0 }, { key: 'Q', disable: 0, styleColor: 0 },
{ key: 'R', disable: 0, styleColor: 0 }, { key: 'S', disable: 0, styleColor: 0 }, { key: 'T', disable: 0, styleColor: 0 },
{ key: 'U', disable: 0, styleColor: 0 }, { key: 'V', disable: 0, styleColor: 0 }, { key: 'W', disable: 0, styleColor: 0 },
{ key: 'X', disable: 0, styleColor: 0 }, { key: 'Y', disable: 0, styleColor: 0 }, { key: 'Z', disable: 0, styleColor: 0 }
])
const props = defineProps({ wordques: { type: String, default: " " }, statuscode: { type: Number, default: 1 } });
let wordsplit = computed(() => {
  return props.wordques.split("")
})
/// #
function pressx(letter) {
  keybordValue.value.find((x) => x.key === letter).disable = 1
}
function correct(letter) {
  let x = wordsplit.value.find((o) => o.toLocaleUpperCase() == letter)
  if (x === undefined) {
    keybordValue.value.find((x) => x.key === letter).styleColor = 1
  
  } else {
    keybordValue.value.find((x) => x.key === letter).styleColor = 2
    
  }
  return keybordValue.value.find((x) => x.key === letter).styleColor
}
///define
////
const statusbutton = computed(() => {
  if (props.statuscode >= 1) {
    keybordValue.value.forEach((x) => {
      x.disable = 0
    })
  }

})
const ROW1=['Q','W','E','R','T','Y','U','I','O','P']
const ROW2=['A','S','D','F','G','H','J','K','L']
const ROW3=['Z','X','C','V','B','N','M']
</script>

<template>
  <div class="">
  <div class="grid justify-center items-center mt-2 ">
    <div class="flex">
    <h1 class="hidden">{{ statusbutton }}</h1>
    <div v-for=" item in ROW1">
         <buttonletter :lettterkey="item" @click="$emit('press',item);pressx(item); clickButton() " :statusdis="keybordValue.find((x)=>x.key===item).disable" :correct="correct(item)"/>
    </div>
  </div>
  <div class="flex ml-8 mt-3">
    <div v-for=" item in ROW2">
         <buttonletter :lettterkey="item" @click="$emit('press',item);pressx(item); clickButton() " :statusdis="keybordValue.find((x)=>x.key===item).disable" :correct="correct(item)"/>
    </div>
  </div>
  <div class="flex ml-32 mt-3">
    <div v-for=" item in ROW3">
         <buttonletter :lettterkey="item" @click="$emit('press',item);pressx(item); clickButton()" :statusdis="keybordValue.find((x)=>x.key===item).disable" :correct="correct(item)"/>
    </div>
  </div>
  </div>
</div>
</template>

<style scoped></style>
