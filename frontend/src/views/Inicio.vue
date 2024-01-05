<template>
  <section class="">
    <Carrossel/>
  </section>
  <section class="flex justify-center">
    <Modulos/>
  </section>
  <section>
    <Parceiros/>
  </section>
</template>

<script setup>
import Parceiros from '@/components/Home/Parceiros.vue'
import Carrossel from '@/components/Home/Carrossel/Carrossel.vue'
import Modulos from '@/components/Home/Modulos.vue'
</script>
