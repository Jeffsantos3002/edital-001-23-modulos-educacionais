<template>
    <v-btn class="rounded-card text-xl normal-case text-white bg-gray px-5 xl:px-9">
      <p :class="props.class">{{ props.mensagem }}</p>
    </v-btn>
</template>

<script setup>
import { defineProps } from 'vue' // recebe a imagem e content se houver do elemento pai para montar o slide

const props = defineProps(['mensagem', 'class'])

</script>
