import { createRouter, createWebHistory } from "vue-router";
import OrdersList from "../components/OrdersList";

const routes = [
  {
    path: '/',
    name: 'OrdersList',
    component: OrdersList
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
