<template>
  <div class="productid">
    <img :src="item?.thumbnail" alt="" class="productid__img" />
    <div class="productid__left">
      <h2 class="productid__title">
        {{ item?.title }} , Brand: {{ item?.brand }}
      </h2>
      <p class="productid__category">
        Category: {{ item?.category }} | {{ item?.title }}'s rating: {{ item?.rating }} / 5<span></span>
      </p>
      <p class="productid__descr">{{ item?.description }}</p>
      <div class="productid__buy">
        <h3 class="productid__price">{{ item?.price }} $</h3>
        <p class="productid__stock">{{ item?.stock }} piece left</p>
        <div class="productid__cart">
            <!-- <button class="productid__cart-button-m" :disabled="item?.amount == 0" @click="itemId.decrement()">-</button> -->
            <button @click="addProductToCart()"  class="productid-add">Add to Cart</button>
            <!-- <button class="productid__cart-button-p" :disabled="item?.amount == item?.stock" @click="itemId.increment()">+</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, computed, ref } from "vue";
import { useProducts } from "@/store/store";
import { useItemById } from "@/store/ItemById";
import {useCartStore} from "@/store/cart";


const store = useProducts();
const itemId = useItemById();
const route = useRoute().params.id;
const cart = useCartStore()
const props = defineProps(['product'])


const item = computed(() => {
  return itemId.item
});
const addProductToCart = () => {
  cart.setCartItem(item.value)
}
const cartItems = computed(() => 
    cart.items.map(item => item.id)
)
//  const isAlreadyAdded = cartItems.includes(route)
let number = 0

onMounted(() => {
  store.getAllShop();
  itemId.getItemById(route);
  
  
});

const products = computed(() => store.allproducts);


// let amount = ref(0)



</script>

<style lang="scss" scoped></style>
