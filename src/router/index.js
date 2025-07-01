import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import Cart from "@/pages/Cart.vue"
export const routers = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/Online-shop/', name: 'home', component: HomePage},
    {path: '/Online-shop/cart',name: 'cart',component: Cart},
    {path: '/Online-shop/product/:id', name: 'productid', component: ()=> import('@/components/Products/ProductId.vue')},
  ]
})