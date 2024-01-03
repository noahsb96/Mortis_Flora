<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Home from './components/Home.vue'
</script>

<template>
  <header class="bg-[#EBEEDD]">
    <img src="./logos/IMG_1932.png" class="w-64" />
    <div class="pb-6">
      <nav class="border-b-2 border-black flex items-center justify-center space-x-8">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/quote">Quote</RouterLink>
        <RouterLink to="/pictures">Pictures</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>
  <body>
    <Home />
  </body>
  <RouterView />
</template>

<style scoped></style>
