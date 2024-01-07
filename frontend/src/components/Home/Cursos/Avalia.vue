<template>
  <div class="text-center flex flex-row items-center">
    <v-rating
      v-model="localRating"
      :readonly="true"
      half-increments
      :color="'#F6303F'"
      class="pr-2.5"
    ></v-rating>
    <pre><p :class="props.estilo">{{ novaString }}</p></pre>
  </div>
</template>

<script setup>
import { defineProps, ref, watch } from 'vue'

const props = defineProps(['rating', 'estilo'])
const localRating = ref('')
const novaString = ref('')

watch(() => props.rating, (newValue) => {
  localRating.value = newValue || 0
  novaString.value = localRating.value !== undefined ? localRating.value.toString().replace('.', ',') : ''
})
</script>

<style>
.v-btn--icon.v-btn--density-default{
  height: 100%;
}
</style>
