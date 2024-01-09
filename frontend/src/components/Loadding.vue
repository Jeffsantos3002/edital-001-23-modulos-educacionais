<template>
  <v-progress-circular
    :size="size"
    :width="width"
    :color="color"
    indeterminate
  ></v-progress-circular>
</template>

<script setup>
import { ref } from 'vue'

const size = ref(64) // Tamanho do spinner
const width = ref(8) // Largura do spinner
const color = ref('primary') // Cor do spinner
</script>
