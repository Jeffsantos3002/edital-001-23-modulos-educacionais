<!-- Layout do site -->
<template>
  <v-card class="">
    <v-layout class="flex flex-col">
      <!-- navbar -->
        <HeaderAva/>
      <!-- conteúdo da página -->
      <v-main class="flex justify-center flex-col">
        <router-view/>
      </v-main>
      <FooterAva/>
    </v-layout>
  </v-card>
</template>

<script setup>
import HeaderAva from '@/components/Header/HeaderAva.vue'
import FooterAva from '@/components/FooterAva.vue'
</script>

<style>

</style>
