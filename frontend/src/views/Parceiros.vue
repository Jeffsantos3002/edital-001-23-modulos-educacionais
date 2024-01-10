<template>
  <div class="w-full flex flex-col items-center justify-center">
    <div class="max-w-[1150px] flex flex-col">
      <Breadcrumb/>
      <Title tamanho="text-3xl" cor="text-redAva" texto="Nossos parceiros" class="my-7 w-full"/>
      <div>
        <p class="italic w-full">{{ paginatedItems.length }} de {{ items.length }} resultados</p>
      </div>
      <section class="flex flex-col justify-center items-center">
        <div v-if="items" class="flex flex-wrap justify-center mb-20">
          <div class="flex flex-col w-[350px] max-h-80 my-7 sm:mr-8 " v-for="(parceiro, index) in paginatedItems" :key="index">
            <div class="h-[215px] w-full flex justify-center items-center">
              <img v-lazy="parceiro.capa"  :alt="parceiro.titulo" class="max-h-52 object-cover pb-4" loading="lazy"/>
            </div>
            <Title tamanho="text-2xl" cor="text-[#2F2E41] text-center border-solid border-t-2 border-redAva leading-6 pt-6" :texto="parceiro.titulo"/>
          </div>
        </div>
        <v-pagination
          v-if="totalPages > 1"
          v-model="currentPage"
          :length="totalPages"
          :total-visible="5"
          :on-next="proximo"
          >
          <template v-slot:next>
            <span @click="next">Próximo ></span>
          </template>
        </v-pagination>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

import Breadcrumb from '@/components/Breadcrumb.vue'
import Title from '@/components/Title.vue'
import axios from 'axios'

const items = ref([])
const itemsPerPage = ref(6) // Número de itens por página
const currentPage = ref(1) // Página atual

const next = () => {
  const current = currentPage.value
  const pages = Math.ceil(items.value.length / itemsPerPage.value)
  currentPage.value = current < pages ? current + 1 : current
}

async function carregarParceiros () {
  try {
    const apiUrl = 'http://127.0.0.1:3004/parceiros'
    const response = await axios.get(apiUrl)
    if (response.data) {
      items.value = response.data
      console.log('items: ' + items.value)
      console.log('response: ' + response.data)
    }
  } catch (error) {
    console.error('Erro ao carregar cursos:', error)
  }
}
// const limitText = (text, limite) => {
//   if (text.length >= limite) {
//     const textlimited = text.slice(0, limite) + '...' // trata tamanho do do texto
//     return textlimited
//   } else {
//     return text
//   }
// }
// lógica de paginação para o componente do vuetify
const paginatedItems = computed(() => {
  const startIndex = ((currentPage.value - 1) * itemsPerPage.value) > totalPages.value ? (currentPage.value - 1) * itemsPerPage.value : 0
  const endIndex = startIndex + itemsPerPage.value
  console.log('startIndex:', startIndex, 'endIndex:', endIndex)
  return items.value.slice(startIndex, endIndex)
})

const totalPages = computed(() => {
  if (items.value.length === 0) {
    return 1
  }
  return Math.ceil(items.value.length / itemsPerPage.value)
})

onMounted(carregarParceiros)

</script>

<style>
.v-pagination__item{
  margin: 0px !important;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>
