<script setup>
import buttonletter from "./components/button.vue";
import { ref,computed } from "vue ";
defineEmits(['press'])
const props = defineProps({ wordques: { type: String, default: " " },statuscode:{type:Number,default:1} });
let wordsplit=computed(()=>{
  return props.wordques.split("")
})


function pressx(letter) {
  switch (letter) {
    case "A":
      status_a.value = 1;
      break;
    case "B":
      status_b.value = 1;
      break;
    case "C":
      status_c.value = 1;
      break;
    case "D":
      status_d.value = 1;
      break;
    case "E":
      status_e.value = 1;
      break;
    case "F":
      status_f.value = 1;
      break;
    case "G":
      status_g.value = 1;
      break;
    case "H":
      status_h.value = 1;
      break;
    case "I":
      status_i.value = 1;
      break;
    case "J":
      status_j.value = 1;
      break;
    case "K":
      status_k.value = 1;
      break;
    case "L":
      status_l.value = 1;
      break;
    case "M":
      status_m.value = 1;
      break;
    case "N":
      status_n.value = 1;
      break;
    case "O":
      status_o.value = 1;
      break;
    case "P":
      status_p.value = 1;
      break;
    case "Q":
      status_q.value = 1;
      break;
    case "R":
      status_r.value = 1;
      break;
    case "S":
      status_s.value = 1;
      break;
    case "T":
      status_t.value = 1;
      break;
    case "U":
      status_u.value = 1;
      break;
    case "V":
      status_v.value = 1;
      break;
      case "W":
      status_w.value = 1;
      break;
    case "X":
      status_x.value = 1;
      break;
    case "Y":
      status_y.value = 1;
      break;
    case "Z":
      status_z.value = 1;
      break;
    default:
    // code block
  }
}
function correct(letter) {
  let x=wordsplit.value.find((o)=>o==letter)
  if(x===undefined){
    return 1
  }else{
    return 2
  }
}

///define
let status_a = ref(0);
let status_b = ref(0);
let status_c = ref(0);
let status_d = ref(0);
let status_e = ref(0);
let status_f = ref(0);
let status_g = ref(0);
let status_h = ref(0);
let status_i = ref(0);
let status_j = ref(0);
let status_k = ref(0);
let status_l = ref(0);
let status_m = ref(0);
let status_n = ref(0);
let status_o = ref(0);
let status_p = ref(0);
let status_q = ref(0);
let status_r = ref(0);
let status_s = ref(0);
let status_t = ref(0);
let status_u = ref(0);
let status_v = ref(0);
let status_w = ref(0);
let status_x = ref(0);
let status_y = ref(0);
let status_z = ref(0);
////
const statusbutton=computed(()=>{
 if(props.statuscode>=1){
  status_a.value=0
  status_b.value=0
  status_c.value=0
  status_d.value=0
  status_e.value=0
  status_f.value=0
  status_g.value=0
  status_h.value=0
  status_i.value=0
  status_j.value=0
  status_k.value=0
  status_l.value=0
  status_m.value=0
  status_n.value=0
  status_o.value=0
  status_p.value=0
  status_q.value=0
  status_r.value=0
  status_s.value=0
  status_t.value=0
  status_u.value=0
  status_v.value=0
  status_w.value=0
  status_x.value=0
  status_y.value=0
  status_z.value=0
 }
 
})



</script>

<template>
  <div class="flex">
    <h1 class="hidden">{{ statusbutton }}</h1>
    <buttonletter lettterkey="Q" @click="$emit('press', 'Q');pressx('Q');" :statusdis="status_q" :correct="correct('q')"/>
    <buttonletter lettterkey="W" @click="$emit('press', 'W');pressx('W');" :statusdis="status_w" :correct="correct('w')"/>
    <buttonletter lettterkey="E" @click="$emit('press', 'E');pressx('E');" :statusdis="status_e" :correct="correct('e')"/>
    <buttonletter lettterkey="R" @click="$emit('press', 'R');pressx('R');" :statusdis="status_r" :correct="correct('r')"/>
    <buttonletter lettterkey="T" @click="$emit('press', 'T');pressx('T');" :statusdis="status_t" :correct="correct('t')"/>
    <buttonletter lettterkey="Y" @click="$emit('press', 'Y');pressx('Y');" :statusdis="status_y" :correct="correct('y')"/>
    <buttonletter lettterkey="U" @click="$emit('press', 'U');pressx('U');" :statusdis="status_u" :correct="correct('u')"/>
    <buttonletter lettterkey="I" @click="$emit('press', 'I');pressx('I');" :statusdis="status_i" :correct="correct('i')"/>
    <buttonletter lettterkey="O" @click="$emit('press', 'O');pressx('O');" :statusdis="status_o" :correct="correct('o')"/>
    <buttonletter lettterkey="P" @click="$emit('press', 'P');pressx('P');" :statusdis="status_p" :correct="correct('p')"/>
  </div>
  <div class="flex ml-8 mt-3">
    <buttonletter lettterkey="A" @click="$emit('press', 'A');pressx('A');" :statusdis="status_a" :correct="correct('a')"/>
    <buttonletter lettterkey="S" @click="$emit('press', 'S');pressx('S');" :statusdis="status_s" :correct="correct('s')"/>
    <buttonletter lettterkey="D" @click="$emit('press', 'D');pressx('D');" :statusdis="status_d" :correct="correct('d')"/>
    <buttonletter lettterkey="F" @click="$emit('press', 'F');pressx('F');" :statusdis="status_f" :correct="correct('f')"/>
    <buttonletter lettterkey="G" @click="$emit('press', 'G');pressx('G');" :statusdis="status_g" :correct="correct('g')"/>
    <buttonletter lettterkey="H" @click="$emit('press', 'H');pressx('H');" :statusdis="status_h" :correct="correct('h')"/>
    <buttonletter lettterkey="J" @click="$emit('press', 'J');pressx('J');" :statusdis="status_j" :correct="correct('j')"/>
    <buttonletter lettterkey="K" @click="$emit('press', 'K');pressx('K');" :statusdis="status_k" :correct="correct('k')"/>
    <buttonletter lettterkey="L" @click="$emit('press', 'L');pressx('L');" :statusdis="status_l" :correct="correct('l')"/>
  </div>
  <div class="flex ml-32 mt-3">
    <buttonletter lettterkey="Z" @click="$emit('press', 'Z');pressx('Z');" :statusdis="status_z" :correct="correct('z')"/>
    <buttonletter lettterkey="X" @click="$emit('press', 'X');pressx('X');" :statusdis="status_x" :correct="correct('x')"/>
    <buttonletter lettterkey="C" @click="$emit('press', 'C');pressx('C');" :statusdis="status_c" :correct="correct('c')"/>
    <buttonletter lettterkey="V" @click="$emit('press', 'V');pressx('V');" :statusdis="status_v" :correct="correct('v')"/>
    <buttonletter lettterkey="B" @click="$emit('press', 'B');pressx('B');" :statusdis="status_b" :correct="correct('b')"/>
    <buttonletter lettterkey="N" @click="$emit('press', 'N');pressx('N');" :statusdis="status_n" :correct="correct('n')"/>
    <buttonletter lettterkey="M" @click="$emit('press', 'M');pressx('M');" :statusdis="status_m" :correct="correct('m')"/>

  </div>
</template>

<style scoped></style>
