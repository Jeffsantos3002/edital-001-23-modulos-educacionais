<template>
    <div class="flex flex-col space-y-8 items-center justify-start">
      <Title tamanho="text-3xl" cor="text-redAva" texto="Módulos Educacionais"/>
      <div class="pl-2 flex flex-col md:flex-row md:space-x-8 w-full">
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
      <div class="space-y-16 flex flex-col items-center px-2">
        <div class="space-y-8">
          <Card v-for="modulo in responsed" :key="modulo.id">
            <div class="px-5 flex flex-col md:flex-row items-center md:space-x-5 py-5">
              <div class="flex flex-col md:flex-row items-center justify-center space-x-5 ">
                <img :src="modulo.capa" :alt="modulo.titulo" :title="modulo.titulo" class="w-32 h-32 rounded-card" loading="lazy">
                <div class="flex flex-col w-[274px] space-y-4">
                  <Title tamanho="text-xl" cor="text-black" :texto="modulo.titulo"/>
                  <p class="text-xs text-redAva text-[#F6303F] font-semibold">{{ modulo.parceiros }}</p>
                </div>
              </div>
              <div class="flex flex-col sm:flex-row sm:items-end lg:items-center justify-center space-x-5 py-5">
                <div class="flex flex-col md:flex-row space-x-5">
                  <div class="pl-4 flex flex-row space-x-5">
                    <div class="flex flex-row items-center space-x-2">
                      <img src="../../assets/alunos-icon.svg" alt="alunos-icon" title="alunos">
                      <p class="text-base">{{ numberReal(modulo.matriculados) }}</p>
                    </div>
                    <div class="flex flex-row items-center space-x-2">
                      <img src="../../assets/hora-icon.svg" alt="hora-icon" title="hora">
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

const router = useRouter()
const responsed = ref('')
const categoria = ref('&_page=1&_limit=3') // faz requisição de modulos do db inicial, depois fica dinâmico
const selectedTab = ref('populares') // aciona o sublinhado assim que a página carrega

const numberReal = (numero) => { return parseFloat(numero).toLocaleString('pt-BR') } // trata numeros do db para pt-BR com ponto flutuante

const selectTab = (tab) => { // lógica para subilinhar os filtros ao clicar
  selectedTab.value = tab
}

const redirecionarParaDetalhes = (moduloId, moduloTitulo) => {
  router.push({ name: 'moduloDetalhes', params: { id: moduloId, titulo: moduloTitulo } }) // redirenciona para single-page moduloDetalhes
}

async function carregarCursos () {
  try {
    const apiUrl = `http://127.0.0.1:3004/cursos?cateroriacateroria=Módulo de extensão${categoria.value}` // adicona a categoria na requisição depois de ter clicado em um dos texto
    const response = await axios.get(apiUrl)
    console.log(apiUrl)
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
