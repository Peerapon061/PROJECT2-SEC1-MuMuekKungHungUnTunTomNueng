import { createRouter, createWebHistory } from "vue-router";
import startGame from "../pages/startGame.vue";
import SelectCategories from "../pages/SelectCategories.vue";
import play from "../pages/playhangman.vue";
import howtoplay from "../pages/howtoplay.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "MainMenu",
      component: startGame,
    },
    {
      path: "/categories",
      name: "categories",
      component: SelectCategories,
    },
    {
      path: "/playgame",
      name: "playgame",
      component: play,
    },

    {
      path: "/howtoplay",
      name: "howtoplay",
      component: howtoplay,
    },
  ],
});
export default router;
