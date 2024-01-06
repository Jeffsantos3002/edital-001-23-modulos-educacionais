<template>
  <section class="mb-32 px-10 flex flex-col items-center justify-center space-y-7">
    <h1 class="text-3xl text-redAva font-semibold">Parceiros</h1>
    <Card>
      <div class="px-8 flex flex-wrap md:flex-row justify-center space-x-2 md:space-x-8 ">
        <div class="w-60 flex flex-col items-center py-7">
          <h2 class="font-semibold text-2xl ">Governo do RN</h2>
          <p class="text-lg text-center text-gray font-semibold">Governo do Estado do Rio Grande do Norte.</p>
        </div>
        <div class="w-60 flex flex-col items-center py-7">
          <h2 class="font-semibold text-2xl">SESAP</h2>
          <p class="text-lg text-center text-gray font-semibold">Secretaria de Saúde Pública do Estado do Rio Grande do Norte.</p>
        </div>
        <div class="w-60 flex flex-col items-center py-7">
          <h2 class="font-semibold text-2xl">UFRN</h2>
          <p class="text-lg text-center text-gray font-semibold">Universidade Federal do Rio Grande do Norte.</p>
        </div>
        <div class="w-60 flex flex-col items-center py-7">
          <h2 class="font-semibold text-2xl">HUOL</h2>
          <p class="text-lg text-center text-gray font-semibold">Hospital Onofre Lopes: Hospital Universitário da UFRN (Universidade Federal do Rio Grande do Norte). </p>
        </div>
      </div>
    </Card>
  </section>
</template>

<script setup>
import Card from '@/components/Home/Card.vue'
</script>
