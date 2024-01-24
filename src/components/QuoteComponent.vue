<script lang="ts">
import emailjs from '@emailjs/browser'

export default {
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          'service_wu6mj7b',
          'template_hxo8y4h',
          this.$refs.form as HTMLFormElement,
          'wdqa23HmG2helkMuFGDY0'
        )
        .then(
          (result: { text: any }) => {
            console.log('SUCCESS!', result.text)
          },
          (error: { text: any }) => {
            console.log('FAILED...', error.text)
          }
        )
    }
  }
}
</script>

<template>
  <h1 class="text-center text-5xl font-bold pt-5">Terrarium Order Form</h1>
  <form ref="form" @submit.prevent="sendEmail">
    <div class="mx-64 px-10 py-5 mt-10 bg-white">
      <p>
        <label class="text-2xl font-bold">Your Name:</label>
        <br />
        <span>
          <input
            type="text"
            name="name"
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
            name="email"
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
            name="phone"
            placeholder="Your Phone Number"
            class="border-2 border-[#d2d2d2] w-full text-black rounded-md pl-4 font-bold"
          />
        </span>
      </p>
      <p class="pt-5">
        <label class="text-2xl font-bold">Your Phone Number:</label>
        <br />
        <span>
          <button @submit.prevent="sendEmail">Send</button>
        </span>
      </p>
    </div>
  </form>
</template>

<style scoped></style>
