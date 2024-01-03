<template>
  <div class="flex items-center md:justify-start justify-center w-full space-x-4">
    <div class="">
      <img src="@/assets/logo.svg" />
    </div>
    <div class="flex flex-row hidden md:flex space-x-9">
      <router-link to="/" class="text-gray text-xl font-semibold">Inicio</router-link>
      <router-link to="/sobre" class="text-xl font-semibold">Sobre nós</router-link>
      <router-link to="/cursos" class="text-xl font-semibold"> Cursos</router-link>
      <router-link to="/parceiros" class="text-xl font-semibold">Parceiros</router-link>
      <router-link to="/transparencia" class="text-xl font-semibold">Transparência</router-link>
      <router-link to="/contato" class="text-xl font-semibold">Contato</router-link>
    </div>
    <div class="w-353 h-10 flex items-center rounded-2xl border-2 border-solid border-opacity-20 border-gray py-2.5 px-5">
      <v-icon class="search-icon ">mdi-magnify</v-icon>

      <input
        type="search"
        v-model="search"
        class="form-control w-full placeholder-placeholderColor"
        placeholder="Busca por um assunto..."
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const search = ref('')
</script>
