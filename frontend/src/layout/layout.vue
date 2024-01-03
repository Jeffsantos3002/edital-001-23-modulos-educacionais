<!-- Layout do site -->
<template>
  <v-card class="elevation-0">
    <v-layout class="flex flex-col">
      <!-- navbar -->
        <HeaderAva/>
      <!-- conteúdo da página -->
      <v-main class="flex justify-center">
        <router-view class=" z-10 realtive"/>
      </v-main>
      <FooterFanese/>
    </v-layout>
  </v-card>
</template>

<script setup>
import HeaderAva from '@/components/Header/HeaderAva.vue'
import FooterFanese from '@/components/FooterFanese.vue'
</script>

<style>
.v-app-bar.v-toolbar:not(.v-toolbar--flat){
  box-shadow:none !important;
}
</style>
