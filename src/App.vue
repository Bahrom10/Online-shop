<template>
  <div class="wrapper">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue"

localStorage.getItem("cart") ? "" : localStorage.setItem("cart", "[]")
</script>

<style lang="scss" scoped>

</style>