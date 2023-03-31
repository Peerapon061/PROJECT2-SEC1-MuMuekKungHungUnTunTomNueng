<script setup>
defineEmits(['changPage','EditCategoryfunc','deleteCategory'])

const props = defineProps({
    Category:{
        type:Object
    },

    PageObject:{
        type:Object
    },
    index:{
        type:Number,
    },
    EditCategory:{
        type:Boolean
    },

    
    checknumber:{
        type:Number
    }

   

})






</script>
 
<template>
       <div class="card w-4/5 bg-zinc-700 border-2 border-amber-900 m-auto text-primary-content "  :class="EditCategory&&checknumber===index?'bg-black/70':'bg-amber-900'">
              
              <div class="card-body">
                 <h2 class="card-title">{{ props.Category.CategoryName }}</h2>
                 
               <div class="card-actions justify-end ">
                 <button    :id=props.Category.id  ref="CategoryCard"  class="btn border-0 bg-amber-400 text-black" @click="$emit('changPage',$event,'show',index)" v-show="!EditCategory" 
                 :disabled="props.PageObject.show&&props.index===props.checknumber"
                 >View</button>
                 <button :id= props.Category.id ref="CategoryCard" class="btn border-0 btn-error text-black" @click="$emit('EditCategoryfunc',props.index,$event)" v-show="!props.EditCategory">Delete</button>
                 <div class="card-actions justify-end " v-show="props.checknumber===props.index">
                   <button :id= props.Category.id ref="CategoryCard"  class="btn border-0 bg-amber-400 text-black" @click="$emit('EditCategoryfunc',$event)" v-show="props.EditCategory">Cancel</button>
                 <button :id= props.Category.id ref="CategoryCard"  class="btn border-0 bg-info text-black" @click=" $emit('deleteCategory',$event)" v-show="props.EditCategory">Confrim</button>
                </div>
             </div>
           </div>
         
                 </div>
</template>
 
<style scoped>

</style>