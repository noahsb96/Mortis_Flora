<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Home from './components/Home.vue'
</script>

<template>
  <header class="bg-[#EBEEDD]">
    <div class="w-screen">
      <div class="pl-10 pr-10 font-bold text-2xl pt-2">
        <RouterLink to="/contact" class="float-right mr-64">Contact</RouterLink>
        <RouterLink to="/about" class="mr-6 float-right">About</RouterLink>
    </div>
    </div>
    <div class="flex flex-wrap flex-row justify-between align-middle w-screen">
      <img src="./logos/IMG_1932.png" class="w-64 ml-40" />
      <RouterLink
        to="/quote"
        class="float-right mr-72 mt-auto mb-auto border-2 border-[#5D612E] px-4 py-3 bg-[#5D612E] rounded-full font-bold text-[#EBEEDD] text-2xl"
        >Quote Order Form</RouterLink
      >
    </div>
    <div class="pb-6">
      <nav
        class="border-b-2 border-[#5D612E] flex items-center justify-center space-x-8 font-bold text-2xl"
      >
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/pictures">Pictures</RouterLink>
      </nav>
    </div>
  </header>
  <body>
    <Home />
  </body>
  <RouterView />
</template>

<style scoped></style>
