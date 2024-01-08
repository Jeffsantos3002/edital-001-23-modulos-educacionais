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
import { defineProps, ref, watchEffect } from 'vue'

const props = defineProps(['rating', 'estilo'])
const localRating = ref('')
const novaString = ref('')

watchEffect(() => {
  localRating.value = props.rating || 0
  novaString.value = localRating.value !== undefined ? localRating.value.toString().replace('.', ',') : ''
})
</script>

<style>
.v-btn--icon.v-btn--density-default{
  height: 100%;
  width: 16px !important;
}
.v-rating__item label{
  margin-right:5px;

}
</style>
