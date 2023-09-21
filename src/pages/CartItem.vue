<template>
  <div class="cart__item">
    <div class="productid__cart">
      <button
        class="productid__cart-button-m"
        :disabled="el?.amount == 0"
        @click="decrementAmount()"
      >
        -
      </button>
      <p class="productid__cart-number">{{ el?.amount }}</p>
      <button
        class="productid__cart-button-p"
        :disabled="el?.amount == el?.stock"
        @click="incrementAmount()"
      >
        +
      </button>
      <button class="productid__cart-d" @click="deleteItem">❌</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted,computed} from "vue";
import { useItemById } from "@/store/ItemById";
import { useCartStore } from "../store/cart";
import { Logger } from "sass";

const itemId = useItemById();

const cart = useCartStore()

const incrementAmount = () => {
    cart.increment(el.id)
}

const decrementAmount = () => {
    cart.decrement(el.id)
}

const deleteItem = () => {
    cart.delete(el.id)
}


onMounted(() => {
  itemId.getItemById(el.id);
});

let item = computed(() => {
  return itemId.item
});



const props = defineProps(['cartItem','index'])
const el = props.cartItem
</script>

<style lang="scss" scoped></style>
