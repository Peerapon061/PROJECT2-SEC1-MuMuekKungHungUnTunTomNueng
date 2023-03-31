<script setup>

const props = defineProps({
     wrongLetters : { type: Array,  default: [] } 
    } )

</script>
 
<template>
<div class="wrong-letter-container ">
    <div class="wrong-letters">
            <p v-show="wrongLetters.length > 0 "> Wrong </p>
            <span v-for="(letter,i) in wrongLetters" :key ="letter">
            
                {{ letter }}
                 {{ i === wrongLetters.length-1  ?  " "  : ',' }}
                
                </span>
                
    </div>

</div>
</template>
 
<style scoped>

</style>