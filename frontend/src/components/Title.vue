<template>
  <!-- Passa as props na tag se existir -->
  <h1 :class="{ [props.tamanho]: true, [props.cor]: true, 'font-semibold': true }">{{ props.texto }}</h1>
</template>

<script setup>
import { defineProps } from 'vue' // recebe a tamanho e cor houver do elemento pai para contruir título

const props = defineProps(['tamanho', 'cor', 'texto'])
</script>
