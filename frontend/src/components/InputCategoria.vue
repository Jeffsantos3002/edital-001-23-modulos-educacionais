<template>
  <v-select
    label="Módulos"
    :items="items"
    item-title="titulo"
    density="compact"
    color="#F6303F"
    elevation="0"
  >
    <template v-slot:item="{item }">
      <v-list-item v-bind="item"  @click="upCategoria(item.raw.categoria)">
        <v-list-item-content>
          <v-list-item-title></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-select>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps(['initialCategoriaOptions'])
const emit = defineEmits(['categoria'])

const items = ref(props.initialCategoriaOptions)
const upCategoria = (categoria) => {
  emit('categoria', categoria)
  console.log(categoria)
}
// Emitindo evento quando a categoria muda

</script>

<style>
.filter {
  border-bottom: solid 2px #707070;
  padding-bottom: 11px;
}
</style>
