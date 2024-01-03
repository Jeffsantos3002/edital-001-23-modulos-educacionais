<template>
  <div class="rounded-2xl">
    <div class="group relative flex flex-col items-center w-64 h-52 rounded-lg border-solid border-2 border-roxo">
      <div class=" flex flex-col mt-5 items-center justify-center group-hover:hidden">
        <h3 class="text-roxo font-bold mb-5">{{ titulo }}</h3>
        <img :src="icone" alt="icone-card" class="w-20">
      </div>
      <div class="px-5 bg-greenFanese flex flex-col h-full hidden items-center justify-center group-hover:flex animate__animated animate__fadeIn">
        <p class="text-sm text-white">{{ texto }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardHome',
  props: {
    titulo: {
      type: String,
      default: ''
    },
    texto: {
      type: String,
      default: ''
    },
    icone: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
/* animação dos cards */
.animate__animated.animate__fadeIn {
  --animate-duration: 2s;
}
</style>
