<template>
    <v-app-bar
      class="w-full flex justify-between flex-row items-center space-x-8"
      color="bg-white"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-xs-flex d-md-none"></v-app-bar-nav-icon>
        <Navbar/>
      </v-app-bar>
      <!-- sidebar -->
      <v-navigation-drawer v-model="drawer" color="bg-white" temporary>
        <v-list nav>
          <v-list-item><router-link to="/" class="text-gray text-xl font-semibold">Inicio</router-link></v-list-item>
          <v-list-item to="/sobre" class="text-xl font-semibold">Sobre nós</v-list-item>
          <v-list-item to="/cursos" class="text-xl font-semibold"> Cursos</v-list-item>
          <v-list-item to="/parceiros" class="text-xl font-semibold">Parceiros</v-list-item>
          <v-list-item to="/transparencia" class="text-xl font-semibold">Transparência</v-list-item>
          <v-list-item to="/contato" class="text-xl font-semibold">Contato</v-list-item>
            </v-list>
      </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from './Navbar.vue'

const drawer = ref(null)
</script>
