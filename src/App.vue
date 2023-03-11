<script setup>
//import
import { ref, computed ,onBeforeMount} from "vue";
import { myword } from "./makeword.js/";
import iconmoon from "./components/icons/TypcnWeatherNight.vue";
import iconsun from "./components/icons/TypcnWeatherSunny.vue";
import iconBooks from "./components/icons/SimpleLineIconsBookOpen.vue";
import close from "./components/icons/GridiconsCross.vue";
import "tw-elements";
import { game } from "./game.js";
import basicdata from './data/basicdata.json'




onBeforeMount(()=>{

    

if(allword.value.length===0||categoryAll.value.length===0){
     basicdata.forEach(x=>{ 
    let arr = []
        x.vocabs.forEach(x=>{
        
          allword.value.push(new myword(x.word,x.meaning))
          arr.push(new myword(x.word,x.meaning))
        
        })
    categoryAll.value.push({nameNote:x.Categories,vocabs:arr})
    }
     )
}
  
})

///HOWTOUSE
var howtouse = ref(false);
function getimg(item) {
  return picture.value.replace("N", item);
}
let imageValue = ref(1);
let picture = ref("./pictureN.png");

const nextSlide = () => {
  if (imageValue.value >= 5) {
    imageValue.value = 1;
  } else {
    imageValue.value++;
  }
};

const previousSlide = () => {
  if (imageValue.value <= 1) {
    imageValue.value = 5;
  } else {
    imageValue.value--;
  }
};

const howtousefund = () => {
  if (howtouse.value == true) {
    hid.value = 1;
    howtouse.value = false;
  } else {
    hid.value = 0;
    howtouse.value = true;
    display(1);
  }
};
//////////////////////

//
///add word
var addcomplete = ref(false); //แอดสำเร็จ
var nocomplete = ref(false); //มีอยู่เเล้ว
var nocompletex = ref(false); //ยาวเกินไป
var notnull = ref(false); //กรอกศัพท์ไม่ครบ
var notnulls = ref(false);//มีช่องว่าง
let allword = ref([]);

const findword = (word) => {
  return allword.value.filter((x) => x.word === word);
};
const makewords = (word, meaning) => {
  if (
    word === undefined ||
    word === null ||
    word.trim().length === 0 ||
    meaning === undefined ||
    meaning === null ||
    meaning.trim().length === 0 
  ) {
    resetInput();
    notnull.value = 1;
    setTimeout(() => {
      notnull.value = 0;
    }, 2550);
  } else if (word.includes(" ") || meaning.includes(" ")) {
    resetInput();
    notnulls.value = 1;
    setTimeout(() => {
      notnulls.value = 0;
    }, 2550);
  } else if (word.length > 70 || meaning.length > 70) {
    resetInput();
    nocompletex.value = 1;
    setTimeout(() => {
      nocompletex.value = 0;
    }, 2550);
  } else {
    resetInput();
      let check = findword(word);
      if (check.length == 0) {
        let x = new myword(word.trim(), meaning.trim());
        allword.value.push(x);
        addcomplete.value = 1;
        setTimeout(() => {
          addcomplete.value = 0;
        }, 2550);
      } else {
        nocomplete.value = 1;
        setTimeout(() => {
          nocomplete.value = 0;
        }, 2550);
      }
  }
};
////////theme//////////////
var darks = ref(1);
const themes = () => {
  if (darks.value === 0) {
    darks.value = 1;
  } else {
    darks.value = 0;
  }
};
///////////////
//hiden nevigatorbar
var hid = ref(1);
const hidnev = () => {
  if (hid.value === 0) {
    hid.value = 1;
  } else {
    hid.value = 0;
  }
};
/////content
var add = ref(false);
var show = ref(false);
var gamepage = ref(false);
var category = ref(false);
var contents = ref(false);
const display = (disp) => {
  if (disp === 1) {
    add.value = true;
    show.value = false;
    gamepage.value = false;
    category.value = false;
  }
  if (disp === 2) {
    add.value = false;
    show.value = true;
    gamepage.value = false;
    category.value = false;
  }
  if (disp === 3) {
    add.value = false;
    show.value = false;
    addcareall();
    gamepage.value = true;
    category.value = false;
  }
  if (disp === 4) {
    add.value = false;
    show.value = false;
    gamepage.value = false;
    category.value = true;
  }
};
const showcontent = () => {
  contents.value = !contents.value;
  display(1);
};
//////game////////
var cantstart = ref(false); // หน้า alert ไม่สามารถเริ่มเกมได้
var result = ref(false); //ผลคะเเนนใน modal
var modalgame = ref(false); // หน้า modal เล่นเกม 
var nextbt = ref(true); // หน้า ปุ่มถัดไป 
var showbt = ref(false); // หน้ากดเพื่อเเสดงผลลัพท์
var anserlong = ref(false); //เเสดง คำตอบยาว
var question = ref([]); // list ของคำถาม
var answercheck = [];
var questionshow = [];
var useranswer = [];
var noword = ref(0); // จำนวนคำศัพท์
var totalscore = ref(0); // คะแนนทั้งหมด
var currentquestion = ref(); //คำถามปัจจุบัน
var currentquestionnum = ref(1); // ข้อของคำถามปัจจุบัน
let score = ref(0); // คะแนน
const startgame = (xs) => {
  if (xs === undefined) {
    cantstart.value = 1;
    setTimeout(() => {
      cantstart.value = 0;
    }, 2550);
  } else {
    ans.value = "";
    result.value = false;
    nextbt.value = true;
    showbt.value = false;
    noword.value = 0;
    currentquestionnum.value = 1;
    cantstart.value = 0;
    modalgame.value = true;
    console.log(xs);
    let newgame = new game(datas[xs]);
    question.value = newgame.createdgame();
    totalscore.value = newgame.score;
    answercheck = [];
    questionshow = [];
    useranswer = [];
    question.value.forEach((x) => {
      answercheck.push(datas[xs][x].meaning);
      questionshow.push(datas[xs][x].word);
    });
    currentquestion.value = questionshow[noword.value];
  }
};
const word = ref("");
const meaning = ref("");
let datas = {};
let list = ref([]);
const addcareall = () => {
  list.value = [];
  datas.value = {};
  categoryAll.value.forEach((x) => {
    list.value.push(x.nameNote);
    datas[x.nameNote] = x.vocabs;
    console.log(x.vocabs);
  });
};
const resetInput = () => {
  word.value = "";
  meaning.value = "";
};
const checkscore = () => {
  let totalscorex = 0;
  for (let i = 0; i < answercheck.length; i++) {
    if (answercheck[i] === useranswer[i]) {
      totalscorex++;
    }
  }
  return totalscorex;
};
const showresault = () => {
  score.value = checkscore();
  showbt.value = false;
  result.value = true;
};
const ans = ref();
const nextword = (xsss = null) => {
  if (xsss.length < 85) {
    if (currentquestionnum.value === questionshow.length) {
      anserlong.value = false;
      currentquestion.value = questionshow[noword.value];
      useranswer.push(xsss);
      nextbt.value = false;
      showbt.value = true;
      console.log(useranswer);
      console.log(answercheck);
    } else {
      ans.value = "";
      anserlong.value = false;
      useranswer.push(xsss);
      noword.value++;
      currentquestionnum.value++;
      currentquestion.value = questionshow[noword.value];
    }
  } else {
    anserlong.value = true;
    ans.value = "";
  }
};
////category
var listnocomplete = ref(false);
var addlistcomplete = ref(false);
var updatecomplete = ref(false);
const categoryAll = ref([]);

const showModal = ref({ window: false, AddCata: false, vocab: false });
let ListVocab = ref([]);
const DeleteIcon = ref(false);
const DeleteIconShow = () => {
  DeleteIcon.value = !DeleteIcon.value;
};
const Deletefunction = (event) => {
  categoryAll.value = categoryAll.value.filter(
    (category) => category.nameNote !== event.target.id
  );
};
let nameNote = "";
const checkedActivities = computed(() => {
  return allword.value.filter((wordSelected) => wordSelected.selected).length;
});
const toggleModal = (id) => {
  showModal.value["window"] = !showModal.value["window"];
  showModal.value[id] = !showModal.value[id];
};
const categorySelected = ref("");
const NameNoteTyping = ref();
const CheckAlready = () => {
  nameNote = categorySelected.value;
  categorySelected.value = "";
};

const ListVocabByCategory = (nameNote_) => {    
  toggleModal("vocab");
  ListVocab.value = categoryAll.value
    .filter((category) => category.nameNote === nameNote_)
    .map((x) => x.vocabs)
    .flat();
};
const AddToCatagories = () => {
  toggleModal("AddCata");
  if (
    nameNote === "" ||
    allword.value.every((word) => word.selected === false) || nameNote.length>12 
  ) {
    listnocomplete.value = 1;
    setTimeout(() => {
      listnocomplete.value = 0;
    }, 2550);
    nameNote = "";
  } else if (categoryAll.value.some((x) => x.nameNote === nameNote)) {
    let obj = categoryAll.value.find((x) => x.nameNote === nameNote);
    obj.vocabs = allword.value.filter((y) => y.selected);
    nameNote = "";
    updatecomplete.value = 1;
    setTimeout(() => {
      updatecomplete.value = 0;
    }, 2550);
  } else {
    categoryAll.value.push({
      nameNote: nameNote,
      vocabs: allword.value.filter((wordSelected) => wordSelected.selected),
    });
    nameNote = "";
    addlistcomplete.value = 1;
    setTimeout(() => {
      addlistcomplete.value = 0;
    }, 2550);
    
  }
};
const searchKeyword = ref("");
const filterSearch = computed(() => {
  console.log(allword.value);
  return allword.value.filter((listf) =>
    listf.word.toLowerCase().includes(searchKeyword.value.toLowerCase() )
  );
});
</script>


<template>
<!-- mainnnnnn -->
  <div v-show="!contents">
    <div class="relative flex items-center justify-center h-screen overflow-hidden">
      <div class="relative z-30 bg-black bg-opacity-30">
        <div class="text-white text-center h-screen w-screen flex flex-col justify-center items-center">
          <h1 class="font-extrabold md:text-8xl sm:text-6xl font-mali drop-shadow-2xl">
            <span class="">Remwords </span>
          </h1>
          <button @click="showcontent()"
            class="font-mali px-4 py-2 w-1/12 sm:w-24 rounded-md hover:-translate-y-1 hover:scale-110 ease-in-out delay-150 duration-300 mt-9 bg-white font-bold text-white bg-opacity-30 hover:bg-blue-900 drop-shadow-2xl shadow-sm">
            START
          </button>
          <!-- transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 -->
        </div>
      </div>
      <video autoplay loop muted class="absolute z-10 w-auto min-w-full min-h-full max-w-none">
        <source src="./video/vbg.mp4" type="video/mp4" loop autoplay />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
  <!-- theme -->
  <div :class="darks === 0 ? 'dark' : ''" class="font-mali" v-show="contents">
    <!-- nav -->
    <div v-show="howtouse"
      class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 w-full h-full">
      <div class="max-w-2xl p-6 w-full h-[33rem] bg-white shadow-xl rounded-2xl">
        <div class="flex justify-end items-end w-full"><button class="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full" @click="howtousefund()">x</button></div>
        <div class="items-center justify-between text-center w-full">
          <h3 class="text-3xl text-center w-full mb-3 -mt-6 text-orange-500">
            HOW TO USE
          </h3>
          <p>
            STEP : <span class="text-emerald-500">{{ imageValue }}</span>
          </p>
        </div>
        <img :src="getimg(imageValue)" alt="" class="rounded-2xl" />
        <div class="flex w-full items-center justify-center mt-5">
          <button class="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded" @click="previousSlide()">
            BACK
          </button>
          <div class="ml-10">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="nextSlide()">
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="h-screen dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-600 dark:bg-gradient-to-r bg-gradient-to-l from-indigo-100 via-gray-200 to-gray-50">
      <div>
        <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
          <div class="flex flex-wrap items-center justify-between mx-auto">
            <a href="#" class="flex items-center" @click="showcontent()">
              <img src="./IMG/LOGO.png" class="h-10 mr-3 sm:h-14" alt=" Logo" />
              <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Remwords</span>
            </a>
            <div class="md:hidden flex">
              <label class="swap swap-rotate">
                <!-- this hidden checkbox controls the state -->
                <input type="checkbox" @click="hidnev()" />

                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"
                  class="swap-on fill-current">
                  <path :fill="darks === 1 ? 'currentColor' : '#ffffff'"
                    d="M21 18h-9v-2h9v2Zm0-5H3v-2h18v2Zm0-5H3V6h18v2Z"></path>
                </svg>

                <close class="swap-off fill-current"></close>
              </label>
            </div>
            <div class="w-full md:block md:w-auto" :class="hid === 0 ? 'hidden' : ''">
              <ul
                class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer"
                  @click="display(1)" :class="
                    add === 1
                      ? 'sm:dark:bg-slate-50 sm:rounded-lg  sm:bg-indigo-100'
                      : ''
                  ">
                  เพิ่มคำศัพท์
                </li>
                <li
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer"
                  @click="display(2)" :class="
                    show === 1
                      ? 'sm:dark:bg-slate-50 sm:rounded-lg sm:bg-indigo-100'
                      : ''
                  ">
                  แสดงคำศัพท์
                </li>
                <li
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer"
                  @click="display(4)" :class="
                    category === 1
                      ? 'sm:dark:bg-slate-50 sm:rounded-lg sm:bg-indigo-100'
                      : ''
                  ">
                  หมวดหมู่
                </li>
                <li
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer"
                  @click="display(3)" :class="
                    game === 1
                      ? 'sm:dark:bg-slate-50 sm:rounded-lg sm:bg-indigo-100'
                      : ''
                  ">
                  ทายคำศัพท์
                </li>
                <li>
                  <label class="swap swap-rotate">
                    <!-- this hidden checkbox controls the state -->
                    <input type="checkbox" @click="themes()" />
                    <!-- sun icon -->
                    <iconsun class="swap-off fill-current"></iconsun>
                    <!-- moon icon -->
                    <iconmoon class="swap-on fill-current"></iconmoon>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <!-- add -->
      </div>
      <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
        v-show="addlistcomplete">
        <div class="flex">
          <div class="py-1">
            <svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
            </svg>
          </div>
          <div>
            <p class="font-bold">สร้างรายการคำศัพท์สำเร็จ</p>
          </div>
        </div>
      </div>
      <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
        v-show="updatecomplete">
        <div class="flex">
          <div class="py-1">
            <svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
            </svg>
          </div>
          <div>
            <p class="font-bold">อัพเดตรายการคำศัพท์สำเร็จ</p>
          </div>
        </div>
      </div>
      <div class="bg-red-300 border-t-4 border-red-500 rounded-b text-red-800 px-4 py-3 shadow-md"
        v-show="listnocomplete">
        <div class="flex">
          <div class="py-1">
            <svg class="fill-current h-6 w-6 text-red-700 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
            </svg>
          </div>
          <div>
            <p class="font-bold">สร้างรายการคำศัพท์ไม่สำเร็จ</p>
            <p class="text-sm">พบข้อผิดพลาดที่ชื่อคำศัพท์หรือรายการคำศัพท์</p>
          </div>
        </div>
      </div>
      <div class="bg-red-300 border-t-4 border-red-500 rounded-b text-red-800 px-4 py-3 shadow-md" v-show="notnulls">
        <div class="flex">
          <div class="py-1">
            <svg class="fill-current h-6 w-6 text-red-700 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
            </svg>
          </div>
          <div>
            <p class="font-bold">สร้างคำศัพท์ไม่สำเร็จ</p>
            <p class="text-sm">เนื่องจากมีการเว้นช่องว่างในคำศัพท์หรือคำแปล</p>
          </div>
        </div>
      </div>
      <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
        v-show="addcomplete">
        <div class="flex">
          <div class="py-1">
            <svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
            </svg>
          </div>
          <div>
            <p class="font-bold">เพิ่มคำศัพท์สำเร็จ</p>
          </div>
        </div>
      </div>
      <div class="bg-red-300 border-t-4 border-red-500 rounded-b text-red-800 px-4 py-3 shadow-md" v-show="nocomplete">
        <div class="flex">
          <div class="py-1">
            <svg class="fill-current h-6 w-6 text-red-700 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
            </svg>
          </div>
          <div>
            <p class="font-bold">เพิ่มคำศัพท์ไม่สำเร็จ</p>
            <p class="text-sm">เนื่องจากมีคำศัพท์นี้อยู่เเล้ว</p>
          </div>
        </div>
      </div>
      <div class="bg-red-300 border-t-4 border-red-500 rounded-b text-red-800 px-4 py-3 shadow-md" v-show="nocompletex">
        <div class="flex">
          <div class="py-1">
            <svg class="fill-current h-6 w-6 text-red-700 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
            </svg>
          </div>
          <div>
            <p class="font-bold">เพิ่มคำศัพท์ไม่สำเร็จ</p>
            <p class="text-sm">คำศัพท์/ความหมายมีความยาวมากเกินไป</p>
          </div>
        </div>
      </div>
      <div class="bg-yellow-100 border-t-4 border-yellow-300 rounded-b text-red-800 px-4 py-3 shadow-md" v-show="notnull">
        <div class="flex">
          <div class="py-1">
            <svg class="fill-current h-6 w-6 text-yellow-600 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
            </svg>
          </div>
          <div>
            <p class="font-bold">กรุณากรอกข้อมูลให้ครบ</p>
          </div>
        </div>
      </div>
      <!-- add -->
      <div class="flex justify-center mt-16" v-show="add">
        <div>
          <label class="dark:text-white">คำศัพท์</label>
          <input type="text" class="border-b-2 ml-2 dark:bg-gray-600 dark:text-gray-100 rounded-2xl pl-3 py-3"
            v-model="word" placeholder=" word...." />
          <br />
          <br />
          <label class="dark:text-white">คำแปล</label>
          <input type="text" class="border-b-2 ml-2 dark:bg-gray-600 dark:text-gray-100 rounded-2xl pl-3 py-3"
            v-model="meaning" placeholder=" meaning..." />
          <br />
          <button
            class="text-white bg-emerald-500 hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-300 dark:hover:bg-blue-500 focus:outline-none dark:focus:ring-blue-800 mt-10 ml-10"
            @click="makewords(word, meaning)">
            บันทึกคำศัพท์
          </button>
        </div>
      </div>
      <!--show -->
      <div v-show="show" :class="hid==1?'sm:hidden':''">
        <input v-model.trim="searchKeyword"
          class="w-full p-1 outline-none rounded-lg border border-gray-200 bg-gray-200 dark:bg-gray-600" type="text"
          placeholder="Type your keyword here..." />
        <div class="overflow-y-auto h-[37rem] md:h-[38rem]">
          <table class="center ml-auto mr-auto table-auto w-full">
            <tr class="bg-gray-50 border-b-2 border-gray-400 dark:bg-gray-900 sticky top-0">
              <th class="text-gray-700 dark:text-gray-400">#No.</th>
              <th class="text-gray-700 dark:text-gray-400">Word</th>
              <th class="text-gray-700 dark:text-gray-400">Meaning</th>
            </tr>
            <tr v-for="(wordlist, index) in filterSearch" :key="index" :class="
              index % 2 === 0
                ? 'bg-gradient-to-r from-indigo-100 via-gray-200 to-gray-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-600 dark:bg-gradient-to-r '
                : 'bg-gradient-to-l from-indigo-100 via-gray-200 to-gray-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-600 dark:bg-gradient-to-l'
            " class="overflow-auto">
              <td class="text-gray-700 dark:text-gray-400 text-center p-3 border-red-700">
                {{ index + 1 }}
              </td>
              <td class="text-gray-700 dark:text-gray-400 text-center p-3">
                {{ wordlist.word }}
              </td>
              <td class="text-gray-700 dark:text-gray-400 text-center p-3">
                {{ wordlist.meaning }}
              </td>
            </tr>
          </table>
        </div>
      </div>
      <!-- game -->
      <div class="" v-show="gamepage">
        <div class="bg-red-300 border-t-4 border-red-500 rounded-b text-red-800 px-4 py-3 shadow-md" v-show="cantstart">
          <div class="flex">
            <div class="py-1">
              <svg class="fill-current h-6 w-6 text-yellow-600 mr-4" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <path
                  d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p class="font-bold">ไม่สามารถเริ่มเกมส์ได้</p>
              <p class="text-sm">กรุณาเลือกชุดคำศัพท์ที่ต้องการเล่น</p>
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-10">
          <label class="mr-1 pt-1 dark:text-white">กรุณาเลือกชุดคำศัพท์ที่ต้องการเล่น :</label>
          <select
            class="dark:bg-gray-300 placeholder:text-blue-300 placeholder:italic placeholder:uppercase w-44 px-5 py-2 rounded-2xl outline-none"
            v-model="lists">
            <option disabled selected>ชุดคำศัพท์</option>
            <option v-for="item in list">{{ item }}</option>
          </select>
        </div>
        <div class="flex justify-center">
          <button
            class="text-white bg-emerald-500 hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-300 dark:hover:bg-blue-500 focus:outline-none dark:focus:ring-blue-800 mt-10 ml-10"
            @click="startgame(lists)">
            เริ่มเกม
          </button>
        </div>
        <div v-show="modalgame" class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
          <div class="max-w-2xl p-6 w-96 bg-white shadow-xl">
            <div class="flex items-center justify-between border-b-2 pb-3">
              <h3 class="text-xl" v-show="nextbt">
                Question<span class="ml-4 mr-4" v-text="currentquestionnum"></span>
                in<span v-text="totalscore" class="ml-4"></span>
              </h3>
              <h3 class="text-xl" v-show="result">
                ผลคะเเนน <span v-text="score" :class="[score==0? 'text-red-600':'',score==totalscore?'text-emerald-500':'']" ></span> / <span v-text="totalscore" class="text-emerald-500"></span>
              </h3>
              <h3 class="text-xl" v-show="showbt">ผลลัพท์ของคุณพร้อมแล้ว</h3>
              <button class="rounded-2xl px-2 bg-red-600 text-white" @click="modalgame = false">
                quit
              </button>
            </div>
            <div class="mt-4 mb-10" v-show="nextbt">
              <h3 class="text-blue-800 text-4xl flex justify-center">
                <span v-text="currentquestion"></span>
              </h3>
              <p class="mt-5 flex justify-center">เเปลว่า</p>
              <input type="text" placeholder="ระบุคำตอบ..." class="border-2 mt-5 rounded-2xl ml-16 pl-4" v-model="ans"
                ref="ansss" />
              <p class="text-red-400 flex justify-center items-center mt-4" v-show="anserlong">
                คำตอบขอบคุณยาวเกินไป
              </p>
            </div>
            <div class="mt-4 mb-10" v-show="result">
              <div class="h-64 overflow-y-auto w-full">
                <table class="center ml-auto mr-auto table-auto w-full">
                  <tr class="sticky top-0 bg-orange-400 text-white">
                    <th class="text-center">#No.</th>
                    <th class="text-center">Word</th>
                    <th class="text-center">Answer</th>
                  </tr>
                  <tr v-for="(word, index) in questionshow" class="">
                    <td class="text-center p-3 border-red-700">
                      {{ index + 1 }}
                    </td>
                    <td class="text-center p-3">
                      {{ word }}
                    </td>
                    <td class="text-center p-3" :class="
                      useranswer[index] === answercheck[index]
                        ? 'text-emerald-500'
                        : 'text-red-400'
                    ">
                      {{ useranswer[index] }}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <button class="px-6 py-2 ml-28 my-16 text-blue-100 bg-teal-600 rounded" @click="showresault()"
              v-show="showbt">
              ดูผลลัพท์
            </button>
            <button class="px-6 py-2 ml-64 text-blue-100 bg-teal-600 rounded" @click="nextword(ans)" v-show="nextbt">
              Next
            </button>
          </div>
        </div>
      </div>
      <!-- category md-->
      <div v-show="category" class="md:h-4/5">
        <div>
          <div v-if="showModal.window"
            class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
            <div class="relative w-auto my-6 mx-auto max-w-6xl">
              <!--content-->
              <!-- คอนเท้นList -->
              <div v-if="showModal.vocab"
                class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-auto">
                <!--header-->
                <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 class="text-xl font-semibold">vocabularies</h3>
                  <button
                    class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    v-on:click="toggleModal('AddCata')">
                    <span
                      class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <!-- body -->

                <div id="vocab" class="relative flex-auto h-80 overflow-y-auto w-80">
                  <table class="center ml-auto mr-auto table-auto w-full">
                    <tr class="top-0 sticky bg-emerald-100">
                      <th class="text-emerald-400">#No.</th>
                      <th class="text-emerald-400">Word</th>
                      <th class="text-emerald-400">Meaning</th>
                    </tr>
                    <tr v-for="(vocab, index) in ListVocab" class="  ">
                      <td class="text-center">{{ index + 1 }}</td>
                      <td class="text-center">{{ vocab.word }}</td>
                      <td class="text-center">{{ vocab.meaning }}</td>
                    </tr>
                  </table>
                </div>
                <!-- footer -->
                <div class="flex items-center justify-end space-x-4 p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button" v-on:click="toggleModal('vocab')">
                    Close
                  </button>
                </div>
                <!--  -->
              </div>
              <!-- Add cata -->
              <div v-if="showModal.AddCata"
                class="border-0 rounded-lg shadow-lg relative md:flex md:flex-col w-full bg-white outline-none focus:outline-none sm:w-auto">
                <!--header-->
                <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 class="text-3xl font-semibold">List Vocabulary</h3>
                  <button
                    class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    v-on:click="toggleModal('AddCata')">
                    <span
                      class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <!--body-->
                <div id="AddCata" class="relative p-6 flex-auto h-96">
                  <div class="w-full md:flex space-x-2 sm:grid sm:grid-cols-1">
                    <label for="NameNote"> ชื่อรายการคำศัพท์ที่ต้องการเพิ่ม/เเก้ไข </label>
                    <input class="border-2 rounded-lg border-slate-100" type="text" ref="NameNoteTyping" id="NameNote"
                      v-model.trim="nameNote" />
                    <span> รายการคำศัพท์ทั้งหมด : </span>
                    <!-- <select v-show="categoryAll.length===0">  <option disabled value="">category</option> </select> -->
                    <select class="border-2 rounded-lg border-slate-100" v-model="categorySelected"
                      @change="CheckAlready">
                      <option disabled value="">แสดงรายการ</option>
                      <option :value="category.nameNote" v-for="(category, index) in categoryAll" :key="index">
                        {{ category.nameNote }}
                      </option>
                    </select>
                  </div>
                  <div class="overflow-y-auto h-72 mt-2 sm:h-56">
                    <div class="bg-slate-200 p-3 m-3 rounded-lg" v-for="word in allword" :key="word.word">
                      <input type="checkbox" id="word.word" value="word" v-model="word.selected" />
                      <label for="reading">{{ word.word }} = {{ word.meaning }}</label>
                      <br />
                    </div>
                  </div>
                  <div class="md:mt-2">
                    selectWord : {{ checkedActivities }}
                  </div>
                </div>
                <!-- Modal view vocab -->
                <!--footer-->
                <div class="flex items-center justify-end space-x-4 p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button" v-on:click="toggleModal('AddCata')">
                    Close
                  </button>
                  <button v-if="showModal.AddCata"
                    class="text-blue-900 bg-transparent border border-solid border-sky-600 hover:bg-sky-600 hover:text-white active:bg-sky-500 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button" @click="AddToCatagories()">
                    Create New Note
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div v-if="showModal.window" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
        <div class="flex w-full md:h-full space-x-3 sm:h-auto">
          <div
            class="flex flex-col w-1/5 max-h-full py-32 space-y-10 relative top-10 bg-slate-200 dark:bg-slate-800 sm:hidden">
            <button @click="toggleModal('AddCata')" :class="showModal['AddCata'] ? 'bg-slate-600' : 'bg-lime-600/80'"
              class="w-4/5 mx-auto text-white hover:bg-slate-300 hover:text-gray-600 font-bold py-2 px-4 rounded">
              เพิ่มชุดคำศัพท์
            </button>
            <button :class="
              !DeleteIcon || categoryAll.length === 0
                ? ' bg-red-600/80 dark:bg-red-900'
                : 'bg-slate-600'
            " @click="DeleteIconShow"
              class="w-4/5 mx-auto text-white hover:bg-slate-300 hover:text-gray-600 font-bold py-2 px-4 rounded">
              จัดการชุดคำศัพท์
            </button>
          </div>
          <div class="flex flex-col relative h-full top-10 m-auto w-4/5 bg-white/30 font-bold sm:w-full sm:h-[29.5rem] " :class="hid==1?'sm:hidden':''">
            <!-- เพิ่ม เอาคำศัพท์ เก็บเข้า object  -->
            <!-- ทำ modal  -->
            <!-- obj[ชื่อสมุด]=obj สมุด ประกอบด้วย Name , vocab -->
            <!-- class="flex flex-col justify-between items-center text-2xl w-72 h-44  m-2 bg-gradient-to-r from-gray-400  to-gray-200 hover:drop-shadow-2xl transition duration-300 pb-4 rounded-xl bg-[url('../IMG/bright.jpg')] bg-center dark:bg-center dark:bg-top dark:bg-[url('../IMG/dark.jpg')]" -->
            <div  class="md:flex flex-wrap mt-20 m-auto w-4/5 justify-center h-4/5 overflow-y-auto sm:h-full overflow-x-hidden" > 
            <div v-for="element in categoryAll" :key="category.nameNote" >
              <div
                  class="mb-auto flex flex-col justify-between items-center text-2xl w-72 h-44 m-2 hover:drop-shadow-2xl transition duration-300 pb-4 rounded-xl bg-[url('../IMG/bright.jpg')] bg-center dark:bg-center dark:bg-top dark:bg-[url('../IMG/dark.jpg')]">
                  <div :id="element.nameNote" :class="DeleteIcon ? 'visible' : 'invisible'"
                    class="w-full flex justify-end">
                    <span @click="Deletefunction($event)" :id="element.nameNote"
                      class="bg-transparent text-red-900 h-8 w-9 text-4xl block outline-none focus:outline-none cursor-pointer">
                      ×
                    </span>
                  </div>
                  <div>{{ element.nameNote }}</div>
                  <button @click="ListVocabByCategory(element.nameNote)"
                    class="w-4/5 flex space-x-3 justify-center text-lg bg-transparent border border-gray-700 text-black mx-auto hover:bg-slate-600 hover:text-white py-2 px-4 rounded-lg">
                    แสดงคำศัพท์
                    <iconBooks class="ml-2 mt-2" />
                  </button>
                </div>
            </div>
          </div>      
<!--             
            <draggable :list="categoryAll" :disabled="!DeleteIcon"
              class="md:mt-20 m-auto w-4/5 justify-center h-4/5 overflow-y-auto flex flex-wrap sm:h-full overflow-x-hidden"
              ghost-class="ghost" @start="dragging = true" @end="dragging = false">
              <template #item="{ element }">
                <div
                  class="flex flex-col justify-between items-center text-2xl w-72 h-44 m-2 hover:drop-shadow-2xl transition duration-300 pb-4 rounded-xl bg-[url('../IMG/bright.jpg')] bg-center dark:bg-center dark:bg-top dark:bg-[url('../IMG/dark.jpg')]">
                  <div :id="element.nameNote" :class="DeleteIcon ? 'visible' : 'invisible'"
                    class="w-full flex justify-end">
                    <span @click="Deletefunction($event)" :id="element.nameNote"
                      class="bg-transparent text-red-900 h-8 w-9 text-4xl block outline-none focus:outline-none cursor-pointer">
                      ×
                    </span>
                  </div>
                  <div>{{ element.nameNote }}</div>
                  <button @click="ListVocabByCategory(element.nameNote)"
                    class="w-4/5 flex space-x-3 justify-center text-lg bg-transparent border border-gray-700 text-black mx-auto hover:bg-slate-600 hover:text-white py-2 px-4 rounded-lg">
                    แสดงคำศัพท์
                    <iconBooks class="ml-2 mt-2" />
                  </button>
                </div>
              </template>
            </draggable> -->
          </div>
        </div>
        <div v-show="category" class="md:hidden" :class="[darks === 0 ? 'dark' : '',hid==1?'hidden':'']" >
      <div class=" flex bottom-0 absolute w-full">
        <button @click="toggleModal('AddCata')" :class="showModal['AddCata'] ? 'bg-slate-600' : 'bg-lime-600/80'"
          class="w-4/5 mx-auto text-white hover:bg-slate-300 hover:text-gray-600 font-bold py-2 px-4 rounded">
          เพิ่มชุดคำศัพท์
        </button>
        <button :class="
          !DeleteIcon || categoryAll.length === 0
            ? ' bg-red-600/80 dark:bg-red-900'
            : 'bg-slate-600'
        " @click="DeleteIconShow"
          class="w-4/5 mx-auto text-white hover:bg-slate-300 hover:text-gray-600 font-bold py-2 px-4 rounded">
          ลบชุดคำศัพท์
        </button>
      </div>
    </div>
      </div>
      <!-- category sm -->
      <!-- ห้ามยุ่ง -->
    </div>
    <!-- theme  -->
    <footer class="footer footer-center bg-base-200 text-base-content dark:bg-slate-700 dark:text-white"
      :class="[darks === 0 ? 'dark' : '',category==true?'hidden':'']" >
      <div class="ml-8 flex">
        <a class="link link-hover" @click="howtousefund()">วิธีการใช้งาน</a>
        <a href="https://forms.office.com/r/G2V9hgVbkf" target="_blank" class="link link-hover">รายงานข้อผิดพลาด</a>
      </div>
    </footer>
  </div>
</template>
<style scoped>
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
