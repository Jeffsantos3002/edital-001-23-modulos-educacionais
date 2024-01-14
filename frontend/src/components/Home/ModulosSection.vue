<template>
    <div class="flex flex-col space-y-8 items-center justify-start px-10">
      <Title tamanho="text-3xl text-center" cor="text-redAva" texto="Módulos Educacionais"/>
      <div class="pl-2 flex flex-col md:flex-row md:space-x-8 w-full hidden md:flex">
        <div class="mb-8 cursor-pointer pb-2"
          :class="{'filter': selectedTab === 'populares'}"
          @click="mudarCategoria('&_page=1&_limit=3','populares')">
          <Title tamanho="text-xl" cor="text-black" texto="Mais populares"/>
        </div>
        <div class="mb-8 cursor-pointer pb-2"
          :class="{'filter': selectedTab === 'avaliados'}"
          @click="mudarCategoria('&_limit=3&_sort=avaliacao&_order=desc','avaliados')">
          <Title tamanho="text-xl" cor="text-black" texto="Mais bem avaliados"/>
        </div>
        <div class="mb-8 cursor-pointer pb-2"
          :class="{'filter': selectedTab === 'recentes'}"
          @click="mudarCategoria('&_limit=3&_sort=criado_em&_order=desc','recentes')">
          <Title tamanho="text-xl" cor="text-black" texto="Mais recentes"/>
        </div>
      </div>
      <div class="w-full flex md:hidden">
        <div class="w-44">
         <InputCategoria :initialCategoriaOptions="items" @categoria="atualizarCategoria"/>
        </div>
      </div>
      <div class="space-y-16 flex flex-col items-center px-2">
        <div class="space-y-8">
          <Card v-for="modulo in responsed" :key="modulo.id" class="w-full">
            <div class="w-full md:px-5 flex flex-col md:flex-row items-center md:space-x-5 md:py-5">
              <div class="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 space-x-5 ">
                <img v-lazy="modulo.capa" :alt="modulo.titulo" :title="modulo.titulo" class="w-96 md:w-32 md:h-32 md:rounded-card" loading="lazy">
                <div class="flex flex-col w-[274px] space-y-4">
                  <Title tamanho="text-xl" cor="text-black" :texto="modulo.titulo"/>
                  <p class="text-xs text-redAva text-[#F6303F] font-semibold">{{ modulo.parceiros }}</p>
                </div>
              </div>
              <div class="flex flex-col md:flex-row lg:items-center justify-center md:space-x-5 space-y-2 py-5">
                <div class="flex flex-col items-center md:flex-row">
                  <div class="pl-4 flex flex-wrap pr-5">
                    <div class="flex flex-row items-center space-x-2 pr-5">
                      <img src="../../assets/alunos-icon.svg" alt="alunos-icon" title="alunos" class="w-6 h-5">
                      <p class="text-base">{{ numberReal(modulo.matriculados) }}</p>
                    </div>
                    <div class="flex flex-row items-center space-x-2">
                      <img src="../../assets/hora-icon.svg" alt="hora-icon" title="hora" class="w-6 h-5">
                      <p class="text-base">{{modulo.duracao}}</p>
                    </div>
                  </div>
                  <Avalia :rating="modulo.avaliacao" estilo="text-base"/>
                </div>
                <buttonAva mensagem="Ver mais" @click="redirecionarParaDetalhes(modulo.id, modulo.titulo)"/>
              </div>
            </div>
          </Card>
        </div>
        <router-link to="/modulos"><buttonAva mensagem="Ver mais" class="w-80"/></router-link>
      </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import Card from './Card.vue'
import Avalia from '@/components/Home/Cursos/Avalia.vue'
import buttonAva from '@/components/buttonAva.vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import Title from '../Title.vue'
import InputCategoria from '../InputCategoria.vue'

const router = useRouter()
const responsed = ref('')
const numberReal = (numero) => { return parseFloat(numero).toLocaleString('pt-BR') } // trata numeros do db para pt-BR com ponto flutuante

/* Cabeçalho de filtros */
const categoria = ref('&_page=1&_limit=3') // faz requisição de modulos do db inicial, depois fica dinâmico
const selectedTab = ref('populares') // aciona o sublinhado assim que a página carrega
const selectTab = (tab) => { // lógica para subilinhar os filtros ao clicar
  selectedTab.value = tab
}
/* --------------------- */

/* Campo de seleção quando a tela ficar menor  */
const items = [
  { categoria: '&_page=1&_limit=3', titulo: 'Mais populares' },
  { categoria: '&_limit=3&_sort=avaliacao&_order=desc', titulo: 'Mais bem avaliados' },
  { categoria: '&_limit=3&_sort=criado_em&_order=desc', titulo: 'Mais Recentes' }
]
const atualizarCategoria = (event) => {
  categoria.value = event
  debugger
}
/* ------------------------------------------------ */

const redirecionarParaDetalhes = (moduloId, moduloTitulo) => {
  router.push({ name: 'moduloDetalhes', params: { id: moduloId, titulo: moduloTitulo } }) // redirenciona para single-page moduloDetalhes
}

async function carregarCursos () {
  try {
    const apiUrl = `http://127.0.0.1:3004/cursos?cateroriacateroria=Módulo de extensão${categoria.value}` // adicona a categoria na requisição depois de ter clicado em um dos texto
    const response = await axios.get(apiUrl)
    if (response.data) {
      responsed.value = response.data
    }
  } catch (error) {
    console.error('Erro ao carregar cursos:', error)
  }
}

onMounted(carregarCursos)
watchEffect(() => {
  carregarCursos()
})

const mudarCategoria = (novaCategoria, section) => {
  categoria.value = novaCategoria
  selectTab(section)
}
</script>

<style>
.filter {
  border-bottom: solid 2px #707070;
}
</style>
