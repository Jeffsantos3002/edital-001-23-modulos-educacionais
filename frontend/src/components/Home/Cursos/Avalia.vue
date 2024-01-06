<template>
  <div class="text-center flex flex-row items-center">
    <v-rating
      v-model="localRating"
      :readonly="true"
      half-increments
      :color="'#F6303F'"
    ></v-rating>
    <pre><p :class="props.estilo">{{ novaString }}</p></pre>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue' // recebe a imagem e content se houver do elemento pai para montar o slide

const props = defineProps(['rating', 'estilo'])
const localRating = ref(props.rating)
const novaString = ref(localRating.value.toString().replace('.', ','))

</script>
