<template>
  <div class="w-full flex flex-row items-center px-5">
    <div class="flex items-center justify-between w-full space-x-4">
      <div class="w-64 flex justify-center">
        <img :src="logoSrc" />
      </div>
      <div class="flex flex-row hidden md:flex">
        <router-link
          v-for="page in pages"
          :key="page.route"
          :to="page.route"
          class="text-black font-semibold p-2 flex flex-row"
        >
          {{ page.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import pages from '../../data/pages'
const logoSrc = require('@/assets/logo_fanese.png')
</script>
