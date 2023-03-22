<script setup>
import {onMounted,ref} from 'vue';
import { getCategories } from '../composable/getCategories';

const cataForGame=ref([])
const SelectedCata=ref([])


console.log(SelectedCata)

onMounted(async()=>{
    cataForGame.value=await getCategories()
    console.log(cataForGame)
})
const showWord=()=>{
    console.log(SelectedCata.value);
}
</script>
 
<template>
<div>
    <select v-model="SelectedCata" name="categories" id="categories">
        <option v-for="(cata,index) in cataForGame" :key='cata.id' class="text-white" :value="cata.vocabs">{{ cata.CategoryName }}</option>
    </select>
    <button @click="showWord">show selected word</button>
    <!-- <v-select></v-select> -->
    <!-- <button @click="SelectCata(cata)">submit</button> -->
</div>
</template>
 
<style scoped>

</style>