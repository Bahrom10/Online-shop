<template>
    <nav class="nav">
        <router-link to="/Online-shop/" class="nav__home"><img src="../assets/images/home.png" alt=""></router-link>
        <router-link to="/Online-shop/cart" class="nav__cart"><img src="../assets/images/cart.png" alt=""> <p class="nav__cart-length" v-if="cart.items.length">{{ cart.items.length }}</p></router-link>

    </nav>
</template>

<script setup>
import {  useCartStore  } from "@/store/cart.js"
import { onMounted } from "vue";

const cart = useCartStore()


onMounted(() => {
    cart.getCartItems()
})

</script>

<style lang="scss" scoped> 
</style>