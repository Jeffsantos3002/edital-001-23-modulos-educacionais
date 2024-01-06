<template>
  <div class="flex flex-col space-y-28">
    <section class="">
      <Carrossel/>
    </section>
    <section class="flex justify-center px-4">
      <Modulos/>
    </section>
    <section>
      <Parceiros/>
    </section>
  </div>
</template>

<script setup>
import Parceiros from '@/components/Home/Parceiros.vue'
import Carrossel from '@/components/Home/Carrossel/Carrossel.vue'
import Modulos from '@/components/Home/ModulosSection.vue'
</script>
