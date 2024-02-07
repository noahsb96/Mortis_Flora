<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-[#EBEEDD]">
    <div class="w-screen font-amatic">
      <div class="pl-10 pr-10 font-bold text-3xl pt-2">
        <RouterLink
          to="/contact"
          class="py-2 px-4 float-right mr-64 rounded-full transition-colors duration-300 ease-in-out hover:bg-black hover:text-white"
          >Contact</RouterLink
        >
        <RouterLink
          to="/about"
          class="py-2 px-4 mr-6 float-right rounded-full transition-colors duration-300 ease-in-out hover:bg-black hover:text-white"
          >About</RouterLink
        >
      </div>
    </div>
    <div class="flex flex-wrap flex-row justify-between align-middle w-screen font-amatic">
      <RouterLink to="/" class="ml-40 lg:w-2/12">
        <img src="./logos/IMG_1932.png" class="w-64" />
      </RouterLink>
      <RouterLink
        to="/quote"
        class="float-right mr-72 mt-auto mb-auto border-2 border-[#5D612E] px-4 py-3 bg-[#5D612E] rounded-full font-bold text-[#EBEEDD] text-3xl transition-colors duration-300 ease-in-out hover:bg-black hover:text-white hover:border-black"
        >Quote Order Form</RouterLink
      >
    </div>
    <div class="pb-6 font-amatic">
      <nav
        class="border-b-2 border-[#5D612E] flex items-center justify-center space-x-28 font-bold text-5xl"
      >
        <RouterLink
          to="/"
          class="py-2 px-4 text-black rounded-full transition-colors duration-300 ease-in-out hover:bg-black hover:text-white"
          >Home</RouterLink
        >
        <RouterLink
          to="/pictures"
          class="py-2 px-4 text-black rounded-full transition-colors duration-300 ease-in-out hover:bg-black hover:text-white"
          >Pictures</RouterLink
        >
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped></style>
