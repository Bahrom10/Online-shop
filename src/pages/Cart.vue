<template>
  <div class="cart">
    <h2 class="cart__title">
      Items in cart:

      {{ cartItems.length }}
      <!-- {{ elements.length || "0. There is nothing. Go buy something" }} -->
    </h2>

    <div class="cart__items">
        <div class="cart__item-titles">
            <h2 class="cart__item-title">Product Name</h2>
            <router-link :to="`/product/${ cartItem.id }`" class="cart__item-title" v-for="(cartItem,) in cartItems" :key="cartItem.id">{{ cartItem.title }}</router-link>
        </div>
        <div class="cart__item-prices">
            <h2 class="cart__item-price">Price</h2>
            <p class="cart__item-price" v-for="(cartItem) in cartItems" :key="cartItem.id">{{ cartItem.price }} $</p>
        </div>
        <div class="cart__item-amount">
            <h2 class="cart__item-amount">Amount</h2>
            <p class="cart__item-amount" v-for="(cartItem) in cartItems" :key="cartItem.id">{{ cartItem.amount }}</p>
        </div>
        <div class="cart__item-total">
            <h2 class="cart__cart-total">Total</h2>
            <p class="cart__cart-total" v-for="(cartItem) in cartItems" :key="cartItem.id" :cart-item="cartItem">{{ cartItem.price * cartItem.amount }}</p>
        </div>
        <div class="cart__item-buttons">
            <h2 class="productid__cart-title">-/+</h2>
            <CartItem v-for="(cartItem,index) in cartItems" :key="cartItem.id" :cart-item="cartItem" :index="index"/>
        </div>
    </div>

    <h2 class="cart__title">Total sum: {{ sum() }}</h2>
  </div>
</template>

<script setup>
import CartItem from "./CartItem.vue"
import { computed } from "vue"
import { useCartStore } from "../store/cart";

const cart = useCartStore()

const cartItems = computed(() => cart.items)

const sum = () => {
    let totalsum = 0
    console.log(cartItems.value)
    cartItems.value.forEach(element => {
        totalsum += element.price * element.amount 
    })

    return totalsum.toFixed(2)
}



</script>

<style lang="scss" scoped>

</style>
