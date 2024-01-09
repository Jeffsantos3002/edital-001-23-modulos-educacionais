<template>
  <div class="flex flex-col justify-center">
    <Breadcrumb/>
    <Title tamanho="text-3xl" cor="text-redAva" texto="Módulos Educacionais"/>
    <div class="">
      <div class="pl-2 flex flex-wrap md:flex-row w-full">
        <div class="mb-8 cursor-pointer pb-2 pr-8 min-h-12"
          @click="mudarCategoria('Covid%2019','covid')">
          <div :class="{'filter': selectedTab === 'covid'}">
            <Title tamanho="text-xl" cor="" texto="Covid 19" :class="{'textFilter': selectedTab === 'covid'}"/>
          </div>
        </div>
        <div class="mb-8 cursor-pointer pb-2 pr-8 min-h-12"
          @click="mudarCategoria('Síflis e outras ist','sifilis')">
          <div :class="{'filter': selectedTab === 'sifilis'}">
            <Title tamanho="text-xl" cor="" texto="Sífilis e outras Ist’s" :class="{'textFilter': selectedTab === 'sifilis'}"/>
          </div>
        </div>
        <div class="mb-8 cursor-pointer pb-2 pr-8 min-h-12"
          @click="mudarCategoria('Preceptoria','perceptoria')">
          <div :class="{'filter': selectedTab === 'perceptoria'}">
            <Title tamanho="text-xl" cor="" texto="Preceptoria" :class="{'textFilter': selectedTab === 'perceptoria'}"/>
          </div>
        </div>
        <div class="mb-8 cursor-pointer pb-2 pr-8 min-h-12"
          @click="mudarCategoria('Doenças raras','doencas')">
          <div :class="{'filter': selectedTab === 'doencas'}">
            <Title tamanho="text-xl" cor="" texto="Doenças raras" :class="{'textFilter': selectedTab === 'doencas'}"/>
          </div>
        </div>
        <div class="mb-8 cursor-pointer pb-2 pr-8 min-h-12"
          @click="mudarCategoria('WebPalestras','palestras')">
          <div :class="{'filter': selectedTab === 'palestras'}">
            <Title tamanho="text-xl" cor="" texto="Web Palestras" :class="{'textFilter': selectedTab === 'palestras'}"/>
          </div>
        </div>
        <div class="mb-8 cursor-pointer pb-2 pr-8 min-h-12"
          @click="mudarCategoria('Sistema%20prisional','prisional')">
          <div :class="{'filter': selectedTab === 'prisional'}">
            <Title tamanho="text-xl" cor="" texto="Sistemas prisional" :class="{'textFilter': selectedTab === 'prisional'}"/>
          </div>
        </div>
        <div class="mb-8 cursor-pointer pb-2 pr-8 min-h-12"
          @click="mudarCategoria('OPAS','opas')">
          <div :class="{'filter': selectedTab === 'opas'}">
            <Title tamanho="text-xl" cor="" texto="OPAS" :class="{'textFilter': selectedTab === 'opas'}"/>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full justify-center items-center">
        <Loading/>
        <div class="mx-2 flex flex-wrap min-h-[1106px] max-w-[1200px] items-center justify-center">
          <div class="flex flex-col sm:w-[350px] my-7 sm:mr-8" v-for="(modulo, index) in paginatedItems" :key="index">
            <img v-lazy="modulo.capa"  alt="Descrição da imagem" class="h-52 w-full object-cover rounded-card" loading="lazy"
            />
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
        ></v-pagination>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect, onMounted, computed } from 'vue'
import axios from 'axios'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Title from '@/components/Title.vue'
import Avalia from '@/components/Home/Cursos/Avalia.vue'
import Loading from '@/components/Loadding.vue'

const categoria = ref('Covid%2019') // faz requisição de modulos do db inicial, depois fica dinâmico
const selectedTab = ref('covid') // aciona o sublinhado assim que a página carrega
const items = ref([])
const itemsPerPage = ref(6) // Número de itens por página
const currentPage = ref(1) // Página atual
const numberReal = (numero) => { return parseFloat(numero).toLocaleString('pt-BR') } // trata numeros do db para pt-BR com ponto flutuante

const selectTab = (tab) => { // lógica para subilinhar os filtros ao clicar
  selectedTab.value = tab
}

const mudarCategoria = (novaCategoria, section) => {
  categoria.value = novaCategoria
  console.log('categoria: ' + categoria.value)
  selectTab(section)
}

async function carregarCursos () {
  try {
    const apiUrl = `http://127.0.0.1:3004/cursos?cateroria=${categoria.value}` // adicona a categoria na requisição depois de ter clicado em um dos texto
    const response = await axios.get(apiUrl)
    console.log('--85' + apiUrl)
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

const paginatedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage.value
  const endIndex = startIndex + itemsPerPage.value
  return items.value.slice(startIndex, endIndex)
})

const totalPages = computed(() => Math.ceil(items.value.length / itemsPerPage.value))

watchEffect(() => {
  carregarCursos()
  console.log('watch')
})

onMounted(carregarCursos)

</script>

<style>
.filter {
  border-bottom: solid 2px #707070;
  padding-bottom: 11px;
}
.textFilter{
  color: #707070 !important;
}

</style>
