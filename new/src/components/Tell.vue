<script setup>
                const props = defineProps({
                 show: { type:Boolean,  default: false} } ) 
</script>
 
<template>
<div  class ="tell-container" :class="show ? 'show' : ''">
    <p>Ready ??????????</p>

</div>
</template>
 
<style scoped>

</style>