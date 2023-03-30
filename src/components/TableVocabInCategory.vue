<script setup>
import { ref , onMounted,onUpdated,onBeforeUnmount,computed} from 'vue'
import { pagination } from '../composable/pagination'
import { playsound,worngSound,colletSound } from '../composable/sound.js';

//ยังไงก็ต้องเอา pagination มาวนในนี้ให้ได้ 
//แก้ ให้แก้ไขชื่อ catagory ได้
// const EditObjectShowPage = ref([]) ;
let EditAllObject =computed(()=>{
  if(props.ObjectCategoryClicked!==undefined){
  return  props.ObjectCategoryClicked
  }
  
})
// let previousNameCategory 
const EditObjectShowPage = computed(()=>{
  if(props.ObjectCategoryClicked!==undefined){
    
          return pagination(EditAllObject.value.vocabs,props.countPages)
  }

})
const emits = defineEmits(["editvocab","deletevocab"])
const props = defineProps({
    // TemporaryVocabShow :{
    //     type : Object ,
    //     required : true ,
    // } ,
    countPages : {
      type:Number,
      required:true 
    } ,
    
    ObjectCategoryClicked: {
      type: Object
    }
    
}) 


// onUpdated(()=>{
//   EditObjectShowPage.value = props.TemporaryVocabShow
//   if(props.ObjectCategoryClicked.CategoryName!== previousNameCategory){
//     console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
//     console.log(props.countPages);
 
//     console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
//     console.log(typeof(props.TemporaryVocabShow));
//     console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
//     console.log(props.TemporaryVocabShow);
//     console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
//     console.log(props.ObjectCategoryClicked);
//     console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")

//     EditAllObject=props.ObjectCategoryClicked
 
//     previousNameCategory = props.ObjectCategoryClicked.CategoryName

//   console.log( props.ObjectCategoryClicked.vocabs);
//   console.log(EditAllObject);
// }

// })

const EditVocabfunction = (event) =>{
  playsound()
  let editObjVocabStatus = EditObjectShowPage.value.find(x=>x.id == event.target.id)
  console.log(EditObjectShowPage.value);
  editObjVocabStatus.status = !editObjVocabStatus.status
console.log( editObjVocabStatus.value.status);
}
const confrimfunction = (event)=>{
  playsound()
console.log(event.target.id);
console.log(EditObjectShowPage.value);

  let editObjVocab = EditObjectShowPage.value.find(x=>x.id == event.target.id) 
  console.log(editObjVocab);
  // issue : Edit ครั้งที่ 2 ไม่ไป (
  console.log(EditAllObject);
  EditAllObject.value.vocabs = EditAllObject.value.vocabs.map((vocab) => {
                if (vocab.id == editObjVocab.id) {
                  vocab.word = editObjVocab.word       
                  vocab.meaning = editObjVocab.meaning    
                   
                 return vocab
                 
                         }
                  else{
                    return vocab
                  }
                         
                        })
  
  editObjVocab.status =   ! editObjVocab.status
  
  console.log(editObjVocab.status)

  emits('editvocab',EditAllObject.value)
  
}


const DeleteVocabfunction = (event) =>

{ 
  
  
  console.log(typeof(event.target.id));
  console.log(event.target.id);
  if(EditAllObject.value.vocabs.length>2){
    EditAllObject.value.vocabs  = EditAllObject.value.vocabs.filter(x=>x.id != event.target.id)
    emits('editvocab',EditAllObject.value)
    colletSound()
  }
  else{
    alert("Words in category must have at least 2")
  }

}


</script>
 
<template>
<div class="font-Comfortaa">
<table class="table table-zebra w-11/12   mx-auto text-lg dark:text-white ">
            <!-- head -->
            <thead >
              <tr>
                <th>No.</th>
                <th>Vocabs</th>
                <th colspan="1/3" >Hint</th>
                <th  class="text-center">Edit</th>
              
              </tr>
            </thead>
            <tbody  >
             
              <!-- row 1 -->
              <tr  v-for=" (vocab,index) in  EditObjectShowPage" :key="index"  >
             
                <th> {{    (((props.countPages-1)*4)+index)+1 }}  </th> 
                <td ><input  v-if="vocab.status" type="text" v-model="vocab.word">  <span v-else > {{ vocab.word }}   </span> </td>
              
                <td colspan="1/3"> 
                  <input v-if="vocab.status" type="text" v-model="vocab.meaning">    
                  <span v-else > {{ vocab.meaning }}  </span> 
                </td>
                <td class="flex space-x-5 justify-center" colspan="1/3">
                  <div >  </div>
                     <!-- <MaterialSymbolsEditDocumentOutline :id=vocab.id v-if="!vocab.status" :disabled="vocab.status==false?true:false" class="w-12 h-12 text-white hover:drop-shadow-lg hover:text-stone-500" @click="EditVocabfunction($event,index)" />
                     <FluentEmojiHighContrastCheckMarkButton   :id=vocab.id v-if="vocab.status"  class="w-12 h-12 text-white hover:text-stone-500" @click="confrimfunction($event,index)" />
                     <span v-if="vocab.status" :id=vocab.id @click="DeleteVocabfunction($event,index)"   class="text-3xl text-red-500 font-bold hover:text-amber-400" >X</span> -->
                     
                     <button  class="btn btn-error" :id=vocab.id v-if="!vocab.status"  @click="EditVocabfunction">Edit</button>
                     <button  class="btn btn-error" :id=vocab.id v-if="vocab.status" @click="confrimfunction">OK</button> 
                     <button class="btn btn-error" v-if="vocab.status" :id=vocab.id  @click="DeleteVocabfunction">Delete</button>
                </td>
              
                </tr>
             

            </tbody>
          </table>  
</div>
</template>
 
<style scoped>
</style>
