<script lang="ts">
import emailjs from '@emailjs/browser'

export default {
  name: 'QuoteForm',
  data() {
    return {
      name: '',
      email: '',
      phone: ''
    }
  },
  methods: {
    sendEmail() {
      try {
        emailjs.sendForm(
          'service_wu6mj7b',
          'template_hxo8y4h',
          this.$refs.form as HTMLFormElement,
          '6occcHkFY0IHAKc14',
          // @ts-ignore
          {
            name: this.name,
            email: this.email,
            phone: this.phone
          }
        )
      } catch (err) {
        if (err instanceof ReferenceError) {
          alert('JSON Error: ' + err.message)
        } else {
          throw err // rethrow
        }
      }
      ;(this.$refs.form as HTMLFormElement).reset()
    }
  }
}
</script>

<template>
  <h1 class="text-center text-5xl font-bold pt-5 font-amatic">Terrarium Order Form</h1>
  <form ref="form" @submit.prevent="sendEmail">
    <div class="mx-64 px-10 py-5 mt-10 bg-white">
      <p>
        <label class="text-2xl font-bold font-sans">Your Name:</label>
        <br />
        <span>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            class="border-2 border-[#d2d2d2] w-full text-black rounded-md pl-4"
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
            class="border-2 border-[#d2d2d2] w-full text-black rounded-md pl-4"
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
            class="border-2 border-[#d2d2d2] w-full text-black rounded-md pl-4"
          />
        </span>
      </p>
      <button
        @submit.prevent="sendEmail"
        class="border-2 border-[#d2d2d2] w-full text-black rounded-md pl-4 mt-8 text-4xl font-amatic font-bold transition-colors duration-300 ease-in-out hover:bg-black hover:text-white"
      >
        START MY JOURNEY
      </button>
    </div>
  </form>
</template>

<style scoped></style>
