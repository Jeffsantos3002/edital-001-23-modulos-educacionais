<template>
  <div class="flex flex-col items-center relative overflow-hidden pb-12 px-2.5 md:px-10">
    <img :src="modulo.capa" alt="capa-page" title="capa do módulo" class="absolute inset-0 w-full h-full object-cover object-top filter brightness-50 border-0" style="image-rendering: pixelated;" >
    <div class="z-10 space-y-16" v-if="modulo.titulo">
      <Breadcrumb/>
      <div class="space-y-8">
        <Title tamanho="text-4xl" cor="text-white" :texto="modulo.titulo"/>
        <Title tamanho="text-2xl" cor="text-white" :texto="modulo.parceiros"/>
      </div>
    </div>
  </div>
  <div class="flex flex-col justify-center items-center py-12 px-2.5 md:px-10 space-y-10">
    <Title tamanho="text-4xl text-center" cor="text-redAva" texto="Informações Gerais do Curso"/>
    <div class="flex flex-wrap justify-center">
      <div class="flex flex-row space-x-2 items-center pr-7">
        <img src="../assets/hora-icon.svg" alt="duração" title="quantidade de horas" class="w-8 h-6">
        <p class="font-bold text-base">{{ modulo.duracao }}</p>
      </div>
      <div class="flex flex-row space-x-2 items-center pr-7">
        <img src="../assets/calendario-icon.svg" alt="duração" title="quantidade de horas" class="w-8 h-6">
        <p class="font-bold text-base">Desde {{ modulo.criado_em }}</p>
      </div>
      <div class="flex flex-row space-x-2 items-center pr-7 md:py-0 py-5">
        <img src="../assets/alunos-icon.svg" alt="duração" title="quantidade de horas" class="w-8 h-6">
        <p class="font-bold text-base">{{ numberReal(modulo.matriculados) }} alunos matriculados</p>
      </div>
      <div class="flex flex-wrap space-x-1 items-center justify-center">
        <Avalia :rating="modulo.avaliacao" estilo="font-bold text-base font-montserrat"/>
        <p class="font-bold font-montserrat text-base">({{numberReal(modulo.numero_avaliacoes) }} avaliações)</p>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center mx-10 space-y-8">
      <div class="space-y-8">
        <Title tamanho="text-2xl text-center" cor="text-redAva" texto="Sobre o curso"/>
        <p class="font-normal text-justify">{{ modulo.sobre }}</p>
      </div>
      <div class="space-y-10 w-full flex flex-col justify-center items-center">
        <Title tamanho="text-2xl" cor="text-redAva" texto="Objetivos"/>
        <div class="space-y-10 w-full">
          <div v-if="modulo.objetivo_geral" class="space-y-3">
            <Title tamanho="text-base" cor="text-black" texto="Objetivo Geral"/>
            <p>{{ modulo.objetivo_geral }}</p>
          </div>
          <div v-if="modulo.objetivo_especifico" class="space-y-3">
            <Title tamanho="text-base" cor="text-black" texto="Objetivos Especificos"/>
            <ul>
              <li v-for="(especifico, index) in especificoFilt" :key="index" class="list-disc list-inside">{{ especifico }}</li>
            </ul>
          </div>
        </div>
      <div v-if="modulo.recursos_educacionais" class="flex flex-col items-center justify-center space-y-10">
        <Title tamanho="text-2xl text-justify" cor="text-redAva" texto="Recursos educacionais"/>
        <p>{{ modulo.recursos_educacionais }}</p>
        <p>Serão utilizados textos no formato de PDF, vídeos, ilustrações, infográficos, dentre outros recursos.</p>
      </div>
      <div class="flex flex-col items-center justify-center pt-16 space-y-12">
        <Title tamanho="text-2xl text-justify" cor="text-redAva" texto="Creditos"/>
        <div class="flex flex-wrap items-center justify-center">
          <div v-for="(imagem, index) in modulo.creditos" :key="index" class="pr-9">
            <img v-lazy="imagem.capa" :alt="imagem.titulo" :title="imagem.titulo" class="w-72" loading="lazy">
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Title from '@/components/Title.vue'
import Avalia from '@/components/Home/Cursos/Avalia.vue'

import axios from 'axios'
import Breadcrumb from '@/components/Breadcrumb.vue'

const modulo = ref('')
const objEspecifico = ref([])
const especificoFilt = ref([])
const numberReal = (numero) => { return parseFloat(numero).toLocaleString('pt-BR') } // trata numeros do db para pt-BR com ponto flutuante

onMounted(async () => {
  const route = useRoute()
  const moduleId = route.params.id
  const apiUrl = `http://127.0.0.1:3004/cursos/${moduleId}` // faz a requisição com base no id passado nos paramentros da rota
  const response = await axios.get(apiUrl)
  modulo.value = response.data
  objEspecifico.value = response.data.objetivo_especifico ? response.data.objetivo_especifico.split('-') : '' // formata texto removendo '-'
  especificoFilt.value = objEspecifico.value ? objEspecifico.value.filter(obj => obj !== '') : ''
})

</script>
