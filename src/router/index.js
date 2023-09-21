import { createWebHistory, createRouter } from "vue-router";


import HomePage from "@/pages/HomePage.vue";
import Cart from "@/pages/Cart.vue"
export const routers = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'home', component: HomePage},
    {path: '/cart',name: 'cart',component: Cart},

    {path: '/product/:id', name: 'productid', component: ()=> import('@/components/Products/ProductId.vue')},
    // {path: '/tv/:id', name: 'tvid', component: ()=> import('@/pages/TvsId.vue')},
  ]
})