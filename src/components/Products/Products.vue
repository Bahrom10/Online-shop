<template>
    <div class="product">
        <div class="product__sorts">
            <button class="product__sort-exp" @click=" store.getSort('exp')">С дорогих до дешевых</button>
            <button class="product__sort-cheap" @click=" store.getSort('cheap')">С дешевых до дорогих</button>
        </div>

        <div class="product__items">
            <ProductsItem v-for="product in products" :product="product" :key="product.id"/>
        </div>
        <div class="pagination">
            <button class="pagination__button" @click="changePage(currentPage - 1)" :disabled="currentPage == 1">back</button>
            <h2 class="pagination__span">Страница {{ currentPage }} / {{ totalPages }}</h2>
            <button class="pagination__button" @click="changePage(currentPage + 1)" :disabled="currentPage == totalPages">next</button>
        </div>
    </div>
</template>

<script setup>
import ProductsItem from "@/components/Products/ProductsItem.vue";
import { onMounted,computed,ref } from 'vue';
import { useProducts } from '@/store/store';

const store = useProducts()

onMounted(() => {
    store.getShop()
    store.getAllShop()
})

let products = computed(() => store.products)


const currentPage = ref(1);
const totalPages = ref(9);

const changePage = async (newPage) => {
  currentPage.value = newPage
  await store.getShop(newPage)
}



</script>

<style lang="scss" scoped>

</style>