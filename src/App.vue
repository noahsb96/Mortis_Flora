<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-[#EBEEDD]">
    <div class="w-screen">
      <div class="pl-10 pr-10 font-bold text-2xl pt-2">
        <RouterLink
          to="/contact"
          class="py-2 px-4 float-right mr-64 hover:bg-black hover:text-white rounded-full"
          >Contact</RouterLink
        >
        <RouterLink
          to="/about"
          class="py-2 px-4 mr-6 float-right hover:bg-black hover:text-white rounded-full"
          >About</RouterLink
        >
      </div>
    </div>
    <div class="flex flex-wrap flex-row justify-between align-middle w-screen">
      <RouterLink to="/" class="lg:w-2/12">
        <img src="./logos/IMG_1932.png" class="w-64 ml-40" />
      </RouterLink>
      <RouterLink
        to="/quote"
        class="float-right mr-72 mt-auto mb-auto border-2 border-[#5D612E] px-4 py-3 bg-[#5D612E] rounded-full font-bold text-[#EBEEDD] text-2xl hover:bg-black hover:text-white hover:border-black"
        >Quote Order Form</RouterLink
      >
    </div>
    <div class="pb-6">
      <nav
        class="border-b-2 border-[#5D612E] flex items-center justify-center space-x-28 font-bold text-5xl lg:text-4xl"
      >
        <RouterLink to="/" class="py-2 px-4 text-black hover:bg-black hover:text-white rounded-full"
          >Home</RouterLink
        >
        <RouterLink
          to="/pictures"
          class="py-2 px-4 text-black hover:bg-black hover:text-white rounded-full"
          >Pictures</RouterLink
        >
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped></style>
