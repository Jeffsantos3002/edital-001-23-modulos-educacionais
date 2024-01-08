<template>
  <div >
    <div class="mx-2 flex flex-wrap max-w-[1200px] items-center justify-center">
      <div class="flex flex-col sm:w-[350px] my-7 sm:mr-8" v-for="(modulo, index) in paginatedItems" :key="index">
        <img :src="modulo.capa" class="h-52 w-full object-cover rounded-card" loading="lazy"/>
        <Title tamanho="text-xl" cor="text-black" :texto="limitText(modulo.titulo, 45 )"/>
        <p class="text-xs text-redAva text-[#F6303F] flex font-semibold h-9 items-center">{{ modulo.parceiros }}</p>
        <div class="flex flex-wrap">
          <div class="flex flex-row space-x-5">
            <div class="flex flex-row items-center space-x-2">
              <img src="../assets/alunos-icon.svg" alt="alunos-icon" title="alunos">
              <p class="text-base">{{numberReal(10562)}}</p>
            </div>
            <div class="flex flex-row items-center space-x-2 pr-5">
              <img src="../assets/hora-icon.svg" alt="hora-icon" title="hora">
              <p class="text-base">4h</p>
            </div>
          </div>
          <Avalia :rating="modulo.avaliacao" estilo="text-base"/>
        </div>
        <div>
          <p class="text-sm sm:h-24">{{ limitText(modulo.resumo, 193) }} </p>
          <div class="w-full flex justify-end">
            <a href="#" class="text-lg text-gray font-semibold">Ver curso</a>
          </div>
        </div>
      </div>
    </div>
    <v-pagination
      v-if="totalPages > 1"
      v-model="currentPage"
      :length="totalPages"
      @input="updatePagination"
    ></v-pagination>
    </div>
    <div>{{ item }}</div>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue'

import Avalia from '@/components/Home/Cursos/Avalia.vue'
import Title from '../components/Title.vue'

const props = defineProps(['categoria'])
const items = ref(props.categoria) // Utiliza props passada pelo componente pai para carregar o items
const itemsPerPage = ref(6) // Número de itens por página
const currentPage = ref(1) // Página atual

const numberReal = (numero) => { return parseFloat(numero).toLocaleString('pt-BR') } // trata numeros do db para pt-BR com ponto flutuante
const limitText = (text, limite) => {
  if (text.length >= limite) {
    const textlimited = text.slice(0, limite) + '...' // trata tamanho do do texto
    return textlimited
  } else {
    return text
  }
}

const paginatedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage.value
  const endIndex = startIndex + itemsPerPage.value
  return items.value.slice(startIndex, endIndex)
})

const totalPages = computed(() => Math.ceil(items.value.length / itemsPerPage.value))

const updatePagination = () => {
  // Pode implementar lógica adicional ao mudar a página, como recarregar dados da API
}

</script>
