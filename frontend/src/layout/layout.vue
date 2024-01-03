<!-- Layout do site -->
<template>
  <v-card class="">
    <v-layout class="flex flex-col">
      <!-- navbar -->
        <HeaderAva/>
      <!-- conteúdo da página -->
      <v-main class="flex justify-center">
        <router-view/>
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

</style>
