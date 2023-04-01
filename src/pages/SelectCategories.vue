<script setup>
import { getCategories } from '../composable/getCategories';
import {ref,onBeforeMount,computed} from 'vue'
import {myword} from '../class/myword.js'
import Card from '../components/Card.vue'
import tabpagination from '../components/tabpagination.vue';
import {playsound,worngSound,colletSound} from '../composable/sound.js'
import TableVocabInCategory from '../components/TableVocabInCategory.vue';

// แยกคอมโพเนน ของหน้าที่เปลี่ยนได้
onBeforeMount(async ()=>{
  let categories = await getCategories()
 let Vocabs = []
  categories.forEach((x)=>{
      x.vocabs.forEach((y)=>{
        Vocabs.push(new myword(y.word,y.meaning))
      })
      CategoryAll.value.push({id:x.id,CategoryName:x.CategoryName,vocabs:Vocabs})
      Vocabs = []
  })
  checkid()
})
const TemporaryName = ref("")
const TemporaryGroupVocabs =ref([]) 
const CategoryAll = ref([])
const TemporaryVocab=ref({word:'',meaning:''}) // สำหรับ ตอน add 
const EditCategory = ref(false) //
const alert = ref(false)
const alert_complete = ref(false)
const alert_error = ref(false)
const msg_error=ref("")
const msg_complete=ref("")
const job=ref("")
let countPage = ref(1) //หน้า ที่ Show pagination
let countId = ref() // id ตอนเพิ่ม categories

const checkid=()=>{
  countId.value=CategoryAll.value[CategoryAll.value.length-1].id
}
const closealert=()=>{
     alert.value=false
      alert_error.value=false
      msg_error.value=""
      job.value=""
}

//เช็คว่ากดของปุ่มไหน
let checknumber=ref()
const page = ref({add:true, show:false})
// const TemporaryShow = computed(()=>{
//return pagination(TempObjTarget,changPage)
// })
const idCategory =ref(1)
let TempObjTarget =computed(()=>{  
  return CategoryAll.value.find(x=>x.id == idCategory.value)
  }) //category ทั้งหมด


const EditCategoryfunc= (i) =>{
    checknumber.value=i
  
    if(typeof checknumber.value!="number"){ 
            checknumber.value=NaN
        }
    EditCategory.value=!EditCategory.value
    playsound()
  }
const addVocab = () => {
  //เชคว่าชื่อไม่ซ้ำ
  let vocabs = TemporaryVocab.value.word.split('')
    if(TemporaryGroupVocabs.value.some(x=>x.word === TemporaryVocab.value.word)  ){
      TemporaryVocab.value={word:'',meaning:''}
      ErrorModification('Cannot add duplicate word')
    }
      
    else if(TemporaryVocab.value.word.length<=0 || TemporaryVocab.value.meaning.length<=0){
      TemporaryVocab.value={word:'',meaning:''}
      ErrorModification('Please enter your word and meaning')
    }
    else if(!vocabs.every(x=> isNaN(x) )){
        

        TemporaryVocab.value={word:'',meaning:''}
        ErrorModification('Cannot add number in your word ')
      
      }
      else{
  
      TemporaryGroupVocabs.value.push(new myword(TemporaryVocab.value.word.toLocaleLowerCase().trim(),TemporaryVocab.value.meaning ))
      
  
        TemporaryVocab.value={word:'',meaning:''}
        colletSound()
      }
    }
    // else{
    //   if (!isNaN(TemporaryVocab.value.word)) {
    //     ErrorModification('Cannot add number')
    //   }
    //   else{
    //     ErrorModification('Cannot add duplicate vocab')
    //   }
    // }

// กด ปุ่ม close ตอน add vocab
const clear = () =>{
    TemporaryVocab.value={word:'',meaning:''}
    playsound()
}
//ลบ คำศัพท์ โดยการแก้ไข
const deleteVocab = (event) =>{
  
    TemporaryGroupVocabs.value = TemporaryGroupVocabs.value.filter((Vocab)=>Vocab.word!==event.target.id)
    colletSound()
}


const returnPage = (page) =>{
  // TemporaryShow.value['vocabs'] =pagination(TempObjTarget.vocabs,page)
  countPage.value = page
  }

const ErrorModification = (msg) =>{
         alert.value=true
        alert_error.value=true
        msg_error.value=msg
  
        worngSound()
}

//category 
//กดดูภายใน category
const  changPage=(event,value,i)=>{
     if(value==='show'){
      idCategory.value = event.target.id
      page.value['show']=true
        page.value['add']=false
      
     }
   
    
      // if (typeof i === undefined) 
      else{
        page.value['add']=true
        page.value['show']=false
        
      }

      checknumber.value=i

      playsound()
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
        
      } )
        alert.value=true
        alert_complete.value=true
        msg_complete.value="Delete"
        setTimeout(() => {
        alert.value=false
        alert_complete.value=false
        msg_complete.value=""
        }, "2000")
    } else throw new error("Error, cannot delete data!");
  } catch (error) {
    console.error(error);
  }
  EditCategoryfunc()
  if (page.value['show']) {
    changPage(event)

   
  }

  colletSound()
  
}


const AddCategory =async (event)=>{
  let id = event.target.id
  countId.value ++ 
    if(TemporaryName.value.length<15 && TemporaryGroupVocabs.value.length>1 && CategoryAll.value.every((x)=>x.CategoryName!==TemporaryName.value)){
      try {
    const res = await fetch(`http://localhost:5000/Categoties/${id}`, {
      method: "POST",
      headers: {
    "Content-Type": "application/json",
      },
      body: JSON.stringify({id:countId.value,CategoryName:TemporaryName.value,vocabs:TemporaryGroupVocabs.value})
    });
    if (res.ok) {
      CategoryAll.value.push({id:countId.value,CategoryName:TemporaryName.value,vocabs:TemporaryGroupVocabs.value})
      TemporaryGroupVocabs.value=[]
      TemporaryName.value =""
      alert.value=true
      alert_complete.value=true
      msg_complete.value="Create"
      setTimeout(() => {
      alert.value=false
      alert_complete.value=false
      msg_complete.value=""
      }, "2000")
      colletSound()
    } else {
      throw new error("Error, cannot delete data!");}
  } catch (error) {
      TemporaryName.value =""
      alert.value=true
      alert_error.value=true
      job.value="create"
      msg_error.value="Server Error"
      worngSound()
      
  }
    }
    else {
      TemporaryName.value =""
      alert.value=true
      alert_error.value=true
      job.value="create"
      msg_error.value="Your words must have at least 2 or this category name already exists"
      worngSound()
    }


  playsound()
  }
  //edit

const StatusEditcata=ref(false)
const newcategoryName=ref("")
const toggleEditNameCategory=()=>{
  newcategoryName.value = TempObjTarget.value?.CategoryName

  StatusEditcata.value = !StatusEditcata.value
}
const EditCategoryName=(option)=>{
  if(option==='edit'){
 
      if(newcategoryName.value.trim().length>0){
        TempObjTarget.value.CategoryName=newcategoryName.value
        modifyVocabInCategory(TempObjTarget.value)
        toggleEditNameCategory()
      }
      else{
        worngSound()
      }
  }
  else{
    toggleEditNameCategory()
    newcategoryName.value=""
  }
}

const modifyVocabInCategory =async(EditObj)=>{



try {
    const res = await fetch(
            `http://localhost:5000/Categoties/${EditObj.id}`,
            {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'                },
                body: JSON.stringify({
                  
                  CategoryName:EditObj.CategoryName,
                vocabs: EditObj.vocabs,               
                  })
            }
        )
        if (res.status === 200) {
          // TemporaryShow.value['vocabs'] = pagination(TempObjTarget.vocabs)
            // console.log('edit successfully')           
             const modifyCategory = await res.json() //หลังอัพเดทจะคืนค่า ผลลัพธ์มา
            //หา obj ที่ถูกแก้ จาก beck-end แล้วเปลี่ยนค่าของ ที่มีฝั่ง front
            CategoryAll.value = CategoryAll.value.map((Category) => {
                if (Category.id === modifyCategory.id) {
                  // Category.id = EditObj.id
                  Category.CategoryName = EditObj.CategoryName
                  Category.vocabs  = modifyCategory.vocabs
                  
                  return Category
                         }
                
                else{
                  return Category
                }
                
                        })
          
               } 
            else {
            throw new Error('cannot edit!')
        }
    } catch (error) {
        console.error(error)
    }
}


</script>
 
<template>
  <div class=" w-full h-full mt-0  flex flex-col text-black bg-gradient-to-b from-amber-900  to-black bg-cover font-Comfortaa ">

    <div class="flex w-full h-24 p-2   pl-10 bg-amber-900 justify-between ">
     <RouterLink  @click="playsound" to="/" class=" relative    btn btn-active  w-28 h-16  text-3xl bg-orange-400 border-1 font-bold"> <img  class="w-14 h-14 hover:w-16 hover:h-16  " src="../img/left-arrow.png" ></RouterLink> 
    </div>
<!-- asdad -->
  
  <div class=" w-full h-full  flex relative  justify-center items-center ">

    <div class="w-3/12 h-5/6 mb-20 space-y-5  flex flex-col overflow-auto  pt-4  mx-auto   border-4 rounded-lg border-amber-900 bg-gradient-to-r from-red-50000 via-yellow-600 to-yellow-500 relative ">
        <div class="flex flex-col " v-for="(Category,index) in CategoryAll" :key="Category.id">
        <Card 
        :PageObject="page"
        :Category = "Category"
        :index = "index"
        :EditCategory="EditCategory"
        :checknumber="checknumber"
        @changPage="changPage"
        @EditCategoryfunc="EditCategoryfunc"
        @deleteCategory="deleteCategory"
        
        />
      
        </div>
    </div>
    <!-- หน้าสำหรับ add -->
    <div class=" w-4/6 h-5/6 space-y-5 mb-20 flex flex-col p-4  pt-4  mx-auto   border-4 rounded-lg border-amber-900 bg-gradient-to-r from-red-50000 via-yellow-600 to-yellow-500 relative " >
      
      <div class="w-full h-full flex flex-col  " v-show="page.add && !alert" >
        <div class="flex w-3/5 rounded-2xl bg-amber-200/10 font-extrabold mx-auto  justify-center mb-5 ">
        <h1 class="text-4xl flex items-center justify-center mb-3 font-RampartOne ">Create Your Category </h1>
      </div>
        <div class="flex w-full h-20 space-x-3 justify-center">  
          <div class="grid h-12">
        <h1 class="text-xl">Category Name : </h1> 
        <label class="text-sm">Between 2-15 characters</label> 
      </div>  
            <input v-model.trim="TemporaryName" type="text" placeholder="Type here" class="input  dark:text-white input-bordered w-full max-w-xs" />
        </div>
        <div class="w-full flex justify-center text-xl font-bold text-rose-800  h-12 "><span v-show="TemporaryGroupVocabs.length<2">-- Please enter more than 2 words. --</span></div>
        <div class="flex space-x-3 w-full  h-24 justify-center"> 
        <!-- ปุ่ม หน้า add -->


        <button  class="btn bg-orange-500 text-black border-amber-400 hover:bg-orange-200 hover:border-amber-100 w-2/12  " @click="AddCategory" :disabled="TemporaryName.trim().length<2 ||TemporaryName.trim().length>15 " >add Category</button>
          <label for="my-modal" class="btn bg-lime-600 text-black w-2/12  border-lime-500 hover:bg-lime-200 hover:border-amber-100" >add vocabulary</label> 
         </div>
         

         <div class="flex flex-col m-auto w-11/12 h-[20rem] rounded-lg overflow-auto bg-slate-400"> 
            <div >

<div class="overflow-y-auto h-[20rem] ">
                <!-- ตาราง หน้า add vocab -->
  <table class="table w-full    dark:text-white h-9">
    <!-- head -->
    <thead class="sticky top-0 dark:bg-black dark:text-white">
      <tr>
        <th class="text-xl">No.</th>
        <th class="text-xl">Vocabulary</th>
        <th colspan="3" class="text-xl">Hint</th>
        <th class="text-xl">Edit</th>
      
      </tr>
    </thead>
    <tbody class="bg-black">
      <!-- row 1 -->
      <tr v-for=" (Vocab,index) in TemporaryGroupVocabs" :key="Vocab.word" >
        <td>{{ index+1 }}</td>
        <td  >{{ Vocab.word }}</td>
       
        <td  colspan="3" >
          <div class="inline-block">
            {{ Vocab.meaning}}
          </div>
        </td>
        <td><span :id=Vocab.word @click="deleteVocab " class="text-3xl text-red-700 font-extrabold"> X </span></td>
      </tr>
    

    </tbody>
  </table>
</div>

            </div>

 <!-- Modal แอดคำศัพท์ -->
<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box flex flex-col space-y-2 border-4 text-black font-extrabold  border-amber-800 bg-amber-200">
    <h3 class="font-bold text-2xl">Your Vocabulary </h3>
    <div class="flex w-full h-1/6 space-x-3 justify-center">   
            <label for="NameCategory ">Vocabulary</label> 
            <input type="text" v-model.trim="TemporaryVocab.word" placeholder="Type here" class="input text-white  input-bordered w-full max-w-xs bg-slate-600" />
        </div>
        <div class="flex w-full h-1/6 space-x-3 justify-center">   
            <label for="NameCategory">Hint</label> 
            <input type="text"  v-model.trim="TemporaryVocab.meaning"  placeholder="Type here" class="input text-white  input-bordered w-full max-w-xs bg-slate-600" />
        </div>
    <div class="modal-action flex">
      <label  for="my-modal" class="btn border-amber-100 bg-amber-500 text-white hover:bg-black" @click="clear" >Close</label>
      <label for="my-modal" class="btn border-amber-100 bg-amber-500 text-white hover:bg-black" @click="addVocab">Add</label>
    </div>
  </div>
</div>
         </div>
        </div> 
        <div class="w-full  h-full flex flex-col overflow-auto space-y-5  " v-show="page.show && !alert"  >
        
          <!-- ส่วนแก้ไขชื่อ Category-->
         
          
          <!-- -->
          <div class="flex w-full "> 
            
            <button @click="changPage" 
            class="w-35 flex  h-20 py-4   space-x-3 bg-lime-500 left-11 relative border-4 border-black/20    hover:bg-lime-700 text-white font-bold px-4  rounded-2xl"
            >  <span class="text-white pt-2" > Add Category  </span> 
            <span class="text-5xl  ">+</span>
            </button>
            <div class="flex justify-center space-x-9 pt-5 bg-amber-100 w-3/5 h-20  mx-20 text-5xl  text-zinc-900 rounded-2xl text-center ">    
            <span v-show="!StatusEditcata" >
            {{TempObjTarget?.CategoryName}}
           </span>
          
           <input type="text"  v-model.trim="newcategoryName" v-show="StatusEditcata" placeholder="Type here" class=" text-center text-white text-xl w-4/5 input input-bordered  max-w-xs">
           
           <img v-show="!StatusEditcata" @click="toggleEditNameCategory"  src="../img/edit.png" class="relative  my-2 p w-10 h-10 hover:w-12 hover:h-12 ">
           <div class="flex space-x-3" v-show="StatusEditcata"> 
            <img v-show="StatusEditcata" @click="EditCategoryName('edit')" src="../img/check-box-with-check-sign.png" class=" my-2 w-10 h-10">
            <img v-show="StatusEditcata" @click="EditCategoryName('cancle')" src="../img/remove.png" class="my-1 w-12 h-12">
          </div>
          </div>
          </div>
    
                  <div class="w-full  h-4/6 overflow-auto ">
          <TableVocabInCategory  :countPages="countPage" :ObjectCategoryClicked="TempObjTarget" @editvocab="modifyVocabInCategory" @error="ErrorModification" />
        </div>
    
        <tabpagination :countPages="countPage" :TempObjTargetLength="TempObjTarget"  @returnPage="returnPage" />
        </div>


        <div class="popup-container w-full h-full flex items-center justify-center" v-show="alert && alert_complete">
          <div class="grid items-center justify-center ">  
            <div class="w-full h-full  flex items-center justify-center"> 
            <img src="../img/check-mark.png" class="  h-40 w-auto "/>
           </div>      
            <h1 class="text-center text-3xl text-slate-50">{{msg_complete}} category complete</h1>
          </div>
        </div>
        <div class="popup-container2 w-full h-full flex items-center justify-center" v-show="alert && alert_error">
          <div class="grid items-center justify-center ">  
            <div class="w-full h-full  flex items-center justify-center"> 
            <img src="../img/error.png" class="  h-40 w-auto "/>
           </div>      
            <h1 class="text-center text-3xl text-slate-50">Can't {{ job }} catagory</h1>
            <h2 class="text-center text-2xl text-slate-50">Probrem : {{msg_error}}</h2>
            <button class="btn btn-accent mt-4" @click="closealert()">OKAY</button>
          </div>
        </div>
    </div>
</div>


</div>
</template>
 
<style scoped>
.popup-container {
  background-color: rgba(124, 223, 86, 0.4);
  backdrop-filter: blur(10px);
  align-items: center;
  justify-content: center;
}
.popup-container2 {
  background-color: rgba(223, 86, 86, 0.4);
  backdrop-filter: blur(10px);
  align-items: center;
  justify-content: center;
}
</style>