<!-- Layout do site -->
<template>
  <v-card class="elevation-0">
    <v-layout class="flex flex-col">
      <!-- navbar -->
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
          <v-list-item v-for="section in sections"
            :key="section.route"
            :to="section.route"
            class="text-black font-semibold p-2 flex flex-col"
          >
            {{section.name}}
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <!-- conteúdo da página -->
      <v-main class="flex justify-center">
        <router-view class=" z-10 realtive"/>
      </v-main>
      <FooterFanese/>
    </v-layout>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import sections from '../../data/pages'
import FooterFanese from '@/components/FooterFanese.vue'

const drawer = ref(null)

</script>

<style>
.v-app-bar.v-toolbar:not(.v-toolbar--flat){
  box-shadow:none !important;
}
</style>
