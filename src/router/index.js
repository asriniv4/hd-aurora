import { createRouter, createWebHistory, isNavigationFailure } from "vue-router";
import OrdersList from "../components/OrdersList";

const routes = [
  {
    path: '/aurora',
    name: 'OrdersList',
    component: OrdersList
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.afterEach((to, from, failure) => {
  if (isNavigationFailure(failure)) {
    console.log('failed navigation', failure);
  }
});

export default router;
