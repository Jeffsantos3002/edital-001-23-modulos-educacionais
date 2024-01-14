<template>
  <div class="w-full flex flex-col items-center justify-center px-5">
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
            <Title tamanho="text-2xl" cor="text-[#2F2E41] text-center border-solid border-t-2 border-redAva leading-6 pt-6" :texto="limitText(parceiro.titulo, 58)"/>
          </div>
        </div>
        <v-pagination
          v-if="totalPages > 1"
          v-model="currentPage"
          :length="totalPages"
          :total-visible="5"
          :prev-icon="null"
          :on-next="next"
          size="40px"
          class="custom-pagination"
          start="1"
          >
          <template v-slot:next>
            <v-btn @click="next" class=" text-none flex items-center h-full font-semibold px-3 bg-[#FAFAFA]" elevation="0">Próximo ></v-btn>
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

/* ----------  lógica de paginação para o componente do vuetify ---------- */
const items = ref([])
const itemsPerPage = ref(6) // Número de itens por página
const currentPage = ref(1) // Página atual

const next = () => {
  const current = currentPage.value
  const pages = Math.ceil(items.value.length / itemsPerPage.value)
  currentPage.value = current < pages ? current + 1 : current
}

const paginatedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage.value
  const endIndex = startIndex + itemsPerPage.value
  return items.value.slice(startIndex, endIndex)
})

const totalPages = computed(() => {
  if (items.value.length === 0) {
    return 1
  }
  return Math.ceil(items.value.length / itemsPerPage.value)
})

/* ------------------------------------------------------------------------ */

async function carregarParceiros () {
  try {
    const apiUrl = 'http://127.0.0.1:3004/parceiros'
    const response = await axios.get(apiUrl)
    if (response.data) {
      items.value = response.data
    }
  } catch (error) {
    console.error('Erro ao carregar cursos:', error)
  }
}
const limitText = (text, limite) => {
  if (text.length >= limite) {
    const textlimited = text.slice(0, limite) + '...' // trata tamanho do do texto
    return textlimited
  } else {
    return text
  }
}
onMounted(carregarParceiros)

</script>

<style>
.v-pagination__item, .v-pagination__first, .v-pagination__prev, .v-pagination__next, .v-pagination__last{
  margin: 0px !important;
  color: black;
}
.v-pagination__prev{
  display: none;
}
/* Arredondar as laterais do componente de paginação */
.v-pagination__list {
  border-radius: 10px !important;
  overflow: hidden;
  background-color: #FAFAFA;
  border: solid 1px #D9D9D9;
}

/* Estilo para os itens ativos da paginação */
.custom-pagination .v-pagination__item--is-active button {
  color: white !important; /* Texto em branco */
  background-color: #F6303F !important; /* Fundo vermelho */
}
.v-pagination__item{
  border-right: solid 1px #D9D9D9 !important;
}
.v-pagination .v-btn {
border-radius: 0px !important;
}
.v-pagination .v-pagination__item .v-btn span {
  /* Seu estilo personalizado aqui */
  font-size: 16px;
  font-weight: 600;
}
</style>
