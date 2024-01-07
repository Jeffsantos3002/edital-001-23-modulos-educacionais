<template>
  <div class="d-flex fill-height justify-center align-center w-full relative">
    <div class="h-full w-full">
      <img :src="imagem" :alt="alt" class="h-full w-full object-cover opacity-65" >
      <div v-if="contents.length > 0" class="flex flex-col items-center justify-center space-y-6 absolute inset-0 px-10">
        <img v-for="(content, index) in contents" :src="content" :key="index">
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue' // recebe a imagem e content se houver do elemento pai para montar o slide

const props = defineProps(['imagemPath', 'alt', 'content'])
const imagem = require(`../../../assets/slide/${props.imagemPath}`)
const contents = Array.isArray(props.content) ? props.content.map(imagemPath => require(`../../../assets/slide/${imagemPath}`)) : [] // verifica se content está vazio
</script>
