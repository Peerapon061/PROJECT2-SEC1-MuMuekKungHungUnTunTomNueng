<script setup>

        const props = defineProps({
     wrongcount: { type:Number,  default: 0 } } ) 

                    const countDie =(num)=>{
                                return props.wrongcount >= num

                    }
       
</script>
 
<template>
<svg height="250" width="200" class="figure-container">
        <!-- Rod -->
        <line x1="60" y1="20" x2="140" y2="20" />
        <line x1="60" y1="20" x2="140" y2="20" />
        <line x1="140" y1="20" x2="140" y2="50" />
        <line x1="60" y1="20" x2="60" y2="230" />
        <line x1="20" y1="230" x2="100" y2="230" />

        <!-- Head -->
        <circle v-if= "countDie(1)" cx="140" cy="70" r="20" class="figure-part" />
        
        <!-- Body -->
        <line   v-if= "countDie(2)" x1="140" y1="90" x2="140" y2="150" class="figure-part" />
        <!-- Arms -->
        <line  v-if= "countDie(3)" x1="140" y1="120" x2="120" y2="100" class="figure-part" />
        <line v-if= "countDie(4)" x1="140" y1="120" x2="160" y2="100" class="figure-part" />
        <!-- Legs -->
        <line v-if= "countDie(5)"  x1="140" y1="150" x2="120" y2="180" class="figure-part" />
        <line  v-if= "countDie(6)"  x1="140" y1="150" x2="160" y2="180" class="figure-part" />
      </svg>
</template>
 
<style scoped>

.figure-container {
  fill: transparent;
  stroke: #f81515;
  stroke-width: 4px;
  stroke-linecap: round;
  
}

.figure-part {
    stroke: white
}

</style>