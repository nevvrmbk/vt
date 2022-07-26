<script lang="ts">
import { Vue, Options } from "vue-class-component";

@Options({
  methods: {
    toggleMobileMenu() {
      this.hidden = !this.hidden;
    },
  },
  data() {
    return {
      hidden: true,
    };
  },
})
export default class HeaderComponent extends Vue {}
</script>

<template>
  <!-- <section>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </section> -->
  <nav class="bg-gray-100 mb-4">
    <div class="mx-auto container">
      <div class="flex justify-around">
        <div class="flex">
          <!-- Logo -->
          <div class="flex space-x-2 items-center mr-2 py-2">
            <svg
              class="w-10 h-10 text-blue-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Logo</span>
          </div>

          <!-- Primary Nav -->
          <div class="hidden md:flex items-center space-x-3 py-3 px-2">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/contact">Contact</router-link>
          </div>
        </div>

        <!-- Secondary Nav -->
        <div class="hidden md:flex items-center space-x-4">
          <a href="#">Login</a>
          <a
            href="#"
            class="p-2 shadow rounded bg-blue-700 text-black hover:text-blue-700 hover:bg-black transition duration-200"
            >Signup</a
          >
        </div>

        <!-- Mobile Menu Button -->
        <div
          class="md:hidden flex items-center"
          v-on:click="toggleMobileMenu()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-bind:hidden="hidden">
        <router-link
          to="/"
          class="block py-2 px-4 text-sm hover:bg-gray-800 hover:text-white"
          >Home</router-link
        >
        <router-link
          to="/about"
          class="block py-2 px-4 text-sm hover:bg-gray-800 hover:text-white"
          >About</router-link
        >
        <router-link
          to="/contact"
          class="block py-2 px-4 text-sm hover:bg-gray-800 hover:text-white"
          >Contact</router-link
        >
      </div>
    </div>
  </nav>
</template>
