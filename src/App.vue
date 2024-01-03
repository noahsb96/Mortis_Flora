<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div>
      <nav class="bg-[#D4903B]">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/quote">Quote</RouterLink>
        <RouterLink to="/pictures">Pictures</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/">Contact</RouterLink>
      </nav>
      <HelloWorld />
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
