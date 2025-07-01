<template>
    <div class="product__item">   
        <div class="product__item-img-left">
            <img v-lazy="product.thumbnail" alt="" class="product__item-img">
            <h2 class="product__item-left-title">{{ product.title }}</h2>
            <p>{{ product.price }}$</p>
            <p>{{ product.stock }} Piece Left</p>

        </div>
        <div class="product__item-right">
            <router-Link :to="`/Online-shop/product/${product.id}`" class="product__item-button">Buy</router-Link>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['product'])

</script>

<style lang="scss" scoped>
h2{
    color: black;
}
</style>