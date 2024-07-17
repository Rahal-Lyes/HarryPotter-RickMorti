import { createRouter, createWebHistory } from "vue-router";

import BreakingBad from "../components/BreakingBadCard.vue";
const routes = [
  {
    path: "/",
    name: "breakingBad",
    component: BreakingBad,
  },
  {
    path: "/rickmorti",
    name: "rickmorti",
    component: () => import("../components/RickMortiCars.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
