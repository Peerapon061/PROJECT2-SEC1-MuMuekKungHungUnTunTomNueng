<script setup>
import buttonletter from "./components/button.vue";
import { ref,computed } from "vue ";
const props = defineProps({ wordques: { type: String, default: " " },status:{type:Number,default:0} });
let wordsplit=computed(()=>{
  return props.wordques.split("")
})

function logx() {
  console.log(props.status);
  console.log(test);
}
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
const test=computed((status)=>{
return status
})


</script>

<template>
  <div class="flex">
    <buttonletter lettterkey="Q" @down="$emit('press', 'Q');pressx('Q');" :statusdis="status_q" :correct="correct('q')"/>
    <buttonletter lettterkey="W" @down="$emit('press', 'W');pressx('W');" :statusdis="status_w" :correct="correct('w')"/>
    <buttonletter lettterkey="E" @down="$emit('press', 'E');pressx('E');" :statusdis="status_e" :correct="correct('e')"/>
    <buttonletter lettterkey="R" @down="$emit('press', 'R');pressx('R');" :statusdis="status_r" :correct="correct('r')"/>
    <buttonletter lettterkey="T" @down="$emit('press', 'T');pressx('T');" :statusdis="status_t" :correct="correct('t')"/>
    <buttonletter lettterkey="Y" @down="$emit('press', 'Y');pressx('Y');" :statusdis="status_y" :correct="correct('y')"/>
    <buttonletter lettterkey="U" @down="$emit('press', 'U');pressx('U');" :statusdis="status_u" :correct="correct('u')"/>
    <buttonletter lettterkey="I" @down="$emit('press', 'I');pressx('I');" :statusdis="status_i" :correct="correct('i')"/>
    <buttonletter lettterkey="O" @down="$emit('press', 'O');pressx('O');" :statusdis="status_o" :correct="correct('o')"/>
    <buttonletter lettterkey="P" @down="$emit('press', 'P');pressx('P');" :statusdis="status_p" :correct="correct('p')"/>
  </div>
  <div class="flex ml-8 mt-3">
    <buttonletter lettterkey="A" @down="$emit('press', 'A');pressx('A');" :statusdis="status_a" :correct="correct('a')"/>
    <buttonletter lettterkey="S" @down="$emit('press', 'S');pressx('S');" :statusdis="status_s" :correct="correct('s')"/>
    <buttonletter lettterkey="D" @down="$emit('press', 'D');pressx('D');" :statusdis="status_d" :correct="correct('d')"/>
    <buttonletter lettterkey="F" @down="$emit('press', 'F');pressx('F');" :statusdis="status_f" :correct="correct('f')"/>
    <buttonletter lettterkey="G" @down="$emit('press', 'G');pressx('G');" :statusdis="status_g" :correct="correct('g')"/>
    <buttonletter lettterkey="H" @down="$emit('press', 'H');pressx('H');" :statusdis="status_h" :correct="correct('h')"/>
    <buttonletter lettterkey="J" @down="$emit('press', 'J');pressx('J');" :statusdis="status_j" :correct="correct('j')"/>
    <buttonletter lettterkey="K" @down="$emit('press', 'K');pressx('K');" :statusdis="status_k" :correct="correct('k')"/>
    <buttonletter lettterkey="L" @down="$emit('press', 'L');pressx('L');" :statusdis="status_l" :correct="correct('l')"/>
  </div>
  <div class="flex ml-32 mt-3">
    <buttonletter lettterkey="Z" @down="$emit('press', 'Z');pressx('Z');" :statusdis="status_z" :correct="correct('z')"/>
    <buttonletter lettterkey="X" @down="$emit('press', 'X');pressx('X');" :statusdis="status_x" :correct="correct('x')"/>
    <buttonletter lettterkey="C" @down="$emit('press', 'C');pressx('C');" :statusdis="status_c" :correct="correct('c')"/>
    <buttonletter lettterkey="V" @down="$emit('press', 'V');pressx('V');" :statusdis="status_v" :correct="correct('v')"/>
    <buttonletter lettterkey="B" @down="$emit('press', 'B');pressx('B');" :statusdis="status_b" :correct="correct('b')"/>
    <buttonletter lettterkey="N" @down="$emit('press', 'N');pressx('N');" :statusdis="status_n" :correct="correct('n')"/>
    <buttonletter lettterkey="M" @down="$emit('press', 'M');pressx('M');" :statusdis="status_m" :correct="correct('m')"/>
  </div>
  <button @click="logx()"> dasdasdasd</button>
</template>

<style scoped></style>
