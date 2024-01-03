<template>
  <div class="flex items-center h-24 w-full space-x-4 justify-between py-7 2xl:px-32 pl-12 pr-5">
    <div class="flex space-x-4 lg:space-x-0 items-center">
      <img src="@/assets/logo.svg" class="mr-12 2xl:mr-20" />
      <div class="flex flex-row lg:flex hidden 2xl:space-x-9 space-x-4">
        <router-link to="/" class="text-gray text-xl font-semibold">Inicio</router-link>
        <router-link to="/sobre" class="text-xl font-semibold">Sobre nós</router-link>
        <router-link to="/cursos" class="text-xl font-semibold"> Cursos</router-link>
        <router-link to="/parceiros" class="text-xl font-semibold">Parceiros</router-link>
        <router-link to="/transparencia" class="text-xl font-semibold">Transparência</router-link>
        <router-link to="/contato" class="text-xl font-semibold">Contato</router-link>
      </div>
    </div>
    <div class="flex flex-row h-full space-x-4 justify-end">
      <div class="w-64 2xl:w-353 h-10 flex space-x-2.5 items-center rounded-2xl border-2 border-solid border-opacity-20 border-gray py-2.5 px-5">
        <v-icon class="search-icon ">mdi-magnify</v-icon>
        <input
          type="search"
          v-model="search"
          class="form-control w-full placeholder-placeholderColor focus:outline-none"
          placeholder="Busca por um assunto..."
        />
      </div>
      <div class="space-x-4 flex justify-end hidden xl:flex">
        <v-btn class="rounded-2xl h-full text-xl normal-case border border-solid border-gray-950 py-2 px-5">
          Entrar
        </v-btn>
        <v-btn class="rounded-2xl h-full text-xl normal-case text-white bg-gray py-2 px-5 xl:px-9">
          Cadastrar
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const search = ref('')
</script>
