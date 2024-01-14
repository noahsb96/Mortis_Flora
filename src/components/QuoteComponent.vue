<script setup lang="ts"></script>

<template>
  <h1 class="text-center text-5xl font-bold pt-5">Terrarium Order Form</h1>
  <div class="mx-64 px-10 py-5 mt-10 bg-white mb-10">
    <p>
      <label class="text-2xl font-bold">Your Name:</label>
      <br />
      <span>
        <input
          type="text"
          placeholder="Your Name"
          class="border-2 border-[#d2d2d2] w-full text-black rounded-md pl-4 font-bold"
        />
      </span>
    </p>
    <p class="pt-5">
      <label class="text-2xl font-bold">Your Email Address:</label>
      <br />
      <span>
        <input
          type="email"
          placeholder="Your Email Address"
          class="border-2 border-[#d2d2d2] w-full text-black rounded-md pl-4 font-bold"
        />
      </span>
    </p>
    <p class="pt-5">
      <label class="text-2xl font-bold">Your Phone Number:</label>
      <br />
      <span>
        <input
          type="text"
          placeholder="Your Phone Number"
          class="border-2 border-[#d2d2d2] w-full text-black rounded-md pl-4 font-bold"
        />
      </span>
    </p>
    <p class="pt-5">
      <label class="text-2xl font-bold">Enclosure Type:</label>
      <br />
      <span>
        <select class="border-2 border-[#d2d2d2] w-full text-black rounded-md pl-4 font-bold">
          <option value="Glass Dome">Glass Dome</option>
          <option value="Glass Cube">Glass Cube</option>
        </select>
      </span>
    </p>
  </div>
</template>

<style scoped></style>
