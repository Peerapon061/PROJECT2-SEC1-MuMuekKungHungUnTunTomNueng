<script setup>
import { getCategories } from '../composable/getCategories';
import {ref,onMounted, watchEffect} from 'vue'
import {myword} from '../class/myword.js'
import MaterialSymbolsEditDocumentOutline from '../components/icons/MaterialSymbolsEditDocumentOutline.vue'
import IconParkSolidBigX from '../components/icons/IconParkSolidBigX.vue'
import {pagination} from '../composable/pagination.js'
// แยกคอมโพเนน ของหน้าที่เปลี่ยนได้
onMounted(async ()=>{
  let categories = await getCategories()
  console.log(getCategories);
 let Vocabs = []
  categories.forEach((x)=>{
      x.vocabs.forEach((y)=>{
        Vocabs.push(new myword(y.word,y.meaning))
      })
      CategoryAll.value.push({id:x.id,CategoryName:x.CategoryName,vocabs:Vocabs})
      Vocabs = []
  })
})
const TemporaryName = ref()
const TemporaryGroupVocabs =ref([]) 
const CategoryAll = ref([])
const TemporaryVocab=ref({word:'',meaning:''})
const EditCategory = ref(false)
const CategoryCard = ref([])
let countId = 2
const EditCategoryfunc= () =>{
    EditCategory.value=!EditCategory.value
}


const addVocab = () => {
  //เชคว่าชื่อไม่ซ้ำ
    if(TemporaryGroupVocabs.value.every(x=>x.word !== TemporaryVocab.value.word) && TemporaryVocab.value.word.length>0 && TemporaryVocab.value.meaning.length>0 ){
    
    let TemporaryVocabtest = TemporaryVocab.value.meaning
    if(TemporaryVocab.value.meaning.includes(" ")){
   
        TemporaryVocabtest =TemporaryVocab.value.meaning.trim().replace(/\s/gi,",").split(",")  
        console.log(TemporaryVocabtest);
        console.log('----');
        console.log(typeof(TemporaryVocabtest));
    }


        TemporaryGroupVocabs.value.push(new myword(TemporaryVocab.value.word,TemporaryVocabtest ))
  
        console.log(TemporaryVocabtest);
        console.log(TemporaryGroupVocabs.value);
        
       
        TemporaryVocab.value={word:'',meaning:''}
    }
    else{
        alert('please enter Category name')
    }
}

// กด ปุ่ม close ตอน add vocab
const clear = () =>{
    TemporaryVocab.value={word:'',meaning:''}

}
const deleteVocab = (event) =>{
    console.log(event.target.id);
    console.log("Hello");
    console.log(TemporaryGroupVocabs.value);
    TemporaryGroupVocabs.value = TemporaryGroupVocabs.value.filter((Vocab)=>Vocab.word!==event.target.id)
}

let countPage = ref(1)
let TempObjTarget
const showPagination =(direction)=>{
 
  console.log('page num  wad:' + Math.ceil(TempObjTarget.vocabs.length/4));

  if(direction === 'right'){
    if(countPage.value < Math.ceil(TempObjTarget.vocabs.length/4)){
      countPage.value++
    }
   
  }
  else{
    if(countPage.value >1){
      countPage.value --
    }
  }
  
  TemporaryShow.value['vocabs']= pagination(TempObjTarget.vocabs,countPage.value)

}


const showCategory =(id)=>{
  
  console.log(id);
  TempObjTarget  = CategoryAll.value.find(x=>x.id == id)
  console.log(TempObjTarget.CategoryName);
  console.log(TempObjTarget.vocabs);
  TemporaryShow.value['categoryName'] = TempObjTarget.CategoryName
 TemporaryShow.value['vocabs'] = pagination(TempObjTarget.vocabs)

 

}



const page = ref({add:true, show:false})
const TemporaryShow = ref({})

//category 
//กดดูภายใน category
const  changPage=(event,value)=>{
  console.log(value);
  console.log(event.target.id);
     if(value==='show'){
      showCategory(event.target.id)
   
     }
     console.log(page.value['show']);
      console.log(page.value['add']);

     page.value['show']=!page.value['show']
      page.value['add']=!page.value['add']
      console.log(page.value['show']);
      console.log(page.value['add']);
}


const deleteCategory =async (event)=>{
  let id = event.target.id
  try {
    const res = await fetch(`http://localhost:5000/Categoties/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      CategoryAll.value = CategoryAll.value.filter((category) => {
        return category.id != event.target.id;
      });
    } else throw new error("Error, cannot delete data!");
  } catch (error) {
    console.log(error);
  }
}


const AddCategory =async (event)=>{
  countId ++ 
  let id = event.target.id
    if(TemporaryName.value && TemporaryGroupVocabs.value.length>0 && CategoryAll.value.every((x)=>x.CategoryName!==TemporaryName.value)){
      try {
    const res = await fetch(`http://localhost:5000/Categoties/${id}`, {
      method: "POST",
      headers: {
    "Content-Type": "application/json",
      },
      body: JSON.stringify({id:countId,CategoryName:TemporaryName.value,vocabs:TemporaryGroupVocabs.value})
    });
    if (res.ok) {
      CategoryAll.value.push({id:countId,CategoryName:TemporaryName.value,vocabs:TemporaryGroupVocabs.value})
      TemporaryGroupVocabs.value=[]
      TemporaryName.value =[]
      console.log(CategoryAll.value);
    } else throw new error("Error, cannot delete data!");
  } catch (error) {
    console.log(error);
  }
    }
    else {
      alert('Can not creat Category')
    }

  
}





</script>
 
<template>
<div class=" overflow-hidden w-full h-full  flex flex-col text-black bg-gradient-to-b from-amber-900  to-black  ">
    <div class="w-1/6 bg-white text-4xl">  Back </div>
    <div class=" w-full h-full  flex ">
    <div class="w-3/12 h-5/6 space-y-5  flex flex-col overflow-auto  pt-4  mx-auto  mt-10 border-4 rounded-lg border-amber-700 bg-amber-200 relative ">
        <div class="flex flex-col " v-for="Category in CategoryAll">
            <div class="card w-4/5 bg-amber-900 m-auto text-primary-content "  :class="EditCategory?'bg-black/70':'bg-amber-900'" >
              
     <div class="card-body"  >
        <h2 class="card-title">{{ Category.CategoryName }}</h2>
        
    <div class="card-actions justify-end ">
      <button :id=Category.id  ref="CategoryCard"  class="btn border-0 bg-amber-400 text-black" @click="(event)=>{changPage(event,'show')}" v-show="!EditCategory">View</button>
      <button :id=Category.id ref="CategoryCard" class="btn border-0 bg-amber-400 text-black" @click="EditCategoryfunc" v-show="!EditCategory">Edit</button>
      <button :id=Category.id ref="CategoryCard"  class="btn border-0 bg-amber-400 text-black" @click="EditCategoryfunc" v-show="EditCategory">Cancle</button>
      <button :id=Category.id ref="CategoryCard"  class="btn border-0 bg-amber-400 text-black" @click="deleteCategory" v-show="EditCategory">Delete</button>
    </div>
  </div>

        </div>
      
        </div>
    </div>
    <!-- หน้าสำหรับ add -->
    <div class="w-4/6 h-5/6 space-y-5  flex flex-col   pt-4  mx-auto  mt-10 border-4 rounded-lg border-amber-700 bg-amber-200 relative " >
      <div class="w-full h-full flex flex-col  " v-show="page.add" >
        <div class="flex w-full h-1/6 space-x-3 justify-center">    
            <label for="NameCategory">Name</label> 
            <input v-model="TemporaryName" type="text" placeholder="Type here" class="input  text-white input-bordered w-full max-w-xs" />
        </div>
        <div class="flex space-x-3 w-full  h-1/6 justify-center"> 
        <label for="NameCategory">Vocabs</label>
        <!-- ปุ่ม หน้า add -->
        <label for="my-modal" class="btn btn-info w-2/12  " >add vocab</label>
        <label  class="btn btn-info w-2/12  " @click="AddCategory">add Category</label>
         </div>
         <div class="flex flex-col m-auto w-11/12 h-3/6 bg-white"> 
                
            <div >

                <div class="overflow-x-auto ">
                <!-- ตาราง หน้า add vocab -->
  <table class="table w-full   text-white">
    <!-- head -->
    <thead>
      <tr>
        <th>No.</th>
        <th>Vocabs</th>
        <th colspan="3" >Meaning</th>
        <th>Edit</th>
      
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr v-for=" (Vocab,index) in TemporaryGroupVocabs" :key="Vocab.word">
        <th>{{ index+1 }}</th>
        <td >{{ Vocab.word }}</td>
       
        <td  colspan="3">{{ Vocab.meaning }}</td>
        <td ><span :id=Vocab.word @click="deleteVocab"> X </span></td>
      </tr>
    

    </tbody>
  </table>
</div>

            </div>

 <!-- Modal แอดคำศัพท์ -->
<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box flex flex-col space-y-2 border-4 text-black  border-amber-800 bg-amber-200">
    <h3 class="font-bold text-lg">Your vocab </h3>
    <div class="flex w-full h-1/6 space-x-3 justify-center">   
            <label for="NameCategory">Vocab</label> 
            <input type="text" v-model="TemporaryVocab.word" placeholder="Type here" class="input text-white  input-bordered w-full max-w-xs" />
        </div>
        <div class="flex w-full h-1/6 space-x-3 justify-center">   
            <label for="NameCategory">Meaning</label> 
            <input type="text"  v-model="TemporaryVocab.meaning"  placeholder="Type here" class="input text-white  input-bordered w-full max-w-xs" />
        </div>
    <div class="modal-action flex">
      <label for="my-modal" class="btn" @click="clear">Close</label>
      <label for="my-modal" class="btn" @click="addVocab">Add</label>
    </div>
  </div>
</div>
         </div>
        </div> 
        <div class="w-full  h-full flex flex-col overflow-auto space-y-5  " v-show="page.show" >
          <div class="bg-amber-100 w-3/5 h-14 mx-auto text-5xl font-LilitaOne  text-zinc-900 rounded-2xl text-center "> {{ TemporaryShow.categoryName }}</div>
                  <div class="w-full  h-4/6 overflow-auto ">
          <table class="table table-zebra w-11/12  mx-auto  text-white ">
            <!-- head -->
            <thead class="">
              <tr>
                <th>No.</th>
                <th>Vocabs</th>
                <th colspan="3" >Meaning</th>
                <th  class="text-center">Edit</th>
              
              </tr>
            </thead>
            <tbody >
              <!-- row 1 -->
              <tr v-for=" (vocab,index) in  TemporaryShow.vocabs" :key="vocab.word" >
                <th>{{ index+1 }}</th>
                <td >{{ vocab.word }}</td>
              
                <td colspan="3">{{ vocab.meaning }}</td>
                <td class="flex space-x-5 justify-center ">
                  <div >  </div>
                  <MaterialSymbolsEditDocumentOutline class="w-9 h-10 text-yellow-100"/>
                  <IconParkSolidBigX class="w-9 h-10 text-red-600"/>
                </td>
              
                </tr>
             

            </tbody>
          </table>
        </div>
        <div class="btn-group mx-auto">
  <button class="btn" @click="showPagination('left')">«</button>
  <button class="btn">{{ countPage }}</button>
  <button class="btn" @click="showPagination('right')">»</button>
</div>
        </div>
    </div>
</div>
</div>
</template>
 
<style scoped>

</style>