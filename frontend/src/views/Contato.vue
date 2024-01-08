<template>
  <div>
    <Breadcrumb/>
    <v-list>
      <!-- <v-list-item-group v-if="paginatedItems.length > 0">
        <v-list-item v-for="item in paginatedItems" :key="item.id">
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group> -->
      <div class="mx-2 flex flex-wrap max-w-[1200px] items-center justify-center" v-if="paginatedItems.length > 0">
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
    </v-list>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watchEffect } from 'vue'

import Avalia from '@/components/Home/Cursos/Avalia.vue'
import axios from 'axios'
import Title from '../components/Title.vue'
import Breadcrumb from '../components/Breadcrumb.vue'

const categoria = ref('Síflis e outras ist') // faz requisição de modulos do db inicial, depois fica dinâmico
const items = ref([]) // Sua lista completa de itens
const itemsPerPage = ref(6) // Número de itens por página
const currentPage = ref(1) // Página atual

const numberReal = (numero) => { return parseFloat(numero).toLocaleString('pt-BR') } // trata numeros do db para pt-BR com ponto flutuante
const limitText = (text, limite) => {
  if (text.length >= limite) {
    const textlimited = text.slice(0, limite) + '...'
    return textlimited
  } else {
    return text
  }
}

async function carregarCursos () {
  try {
    const apiUrl = `http://127.0.0.1:3004/cursos?cateroria=${categoria.value}` // adicona a categoria na requisição depois de ter clicado em um dos texto
    const response = await axios.get(apiUrl)
    console.log(apiUrl)
    if (response.data) {
      items.value = response.data
    }
  } catch (error) {
    console.error('Erro ao carregar cursos:', error)
  }
}

onMounted(carregarCursos)
watchEffect(() => {
  carregarCursos()
})

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
