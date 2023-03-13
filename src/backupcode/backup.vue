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