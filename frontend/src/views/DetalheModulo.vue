<template>
  <div class="flex flex-col items-center relative bg-gray-single overflow-hidden pb-12">
    <img :src="modulo.capa" class="absolute inset-0 w-full h-full object-cover object-top opacity-65" style="image-rendering: pixelated;">
    <div class="z-10 space-y-16">
      <Breadcrumb/>
      <div class="space-y-8">
        <Title tamanho="text-4xl" cor="text-white" :texto="modulo.titulo"/>
        <Title tamanho="text-2xl" cor="text-white" :texto="modulo.parceiros"/>
      </div>
    </div>
  </div>
  <div class="flex flex-col justify-center items-center py-12 space-y-10">
    <Title tamanho="text-4xl" cor="text-redAva" texto="Informações Gerais do Curso"/>
    <div class="space-x-7 flex flex-wrap justify-center">
      <div class="flex flex-row space-x-2 items-center">
        <img src="../assets/hora-icon.svg" alt="duração" title="quantidade de horas">
        <p class="font-bold text-base">{{ modulo.duracao }}</p>
      </div>
      <div class="flex flex-row space-x-2 items-center">
        <img src="../assets/calendario-icon.svg" alt="duração" title="quantidade de horas">
        <p class="font-bold text-base">Desde {{ modulo.criado_em }}</p>
      </div>
      <div class="flex flex-row space-x-2 items-center">
        <img src="../assets/alunos-icon.svg" alt="duração" title="quantidade de horas">
        <p class="font-bold text-base">{{ modulo.matriculados }} alunos matriculados</p>
      </div>
      <div class="flex flex-wrap space-x-1 items-center justify-center">
        <Avalia :rating="modulo.avaliacao" estilo="font-bold text-base font-montserrat"/>
        <p class="font-bold font-montserrat text-base">({{ parseFloat(modulo.numero_avaliacoes).toLocaleString('pt-BR') }} avaliações)</p>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center mx-10">
      <div>
        <Title tamanho="text-2xl" cor="text-redAva" texto="Sobre o curso"/>
        <p class="font-normal">{{ modulo.sobre }}</p>
      </div>
      <div>
        <Title tamanho="text-2xl" cor="text-redAva" texto="Objetivos"/>
        <div>
          <div v-if="modulo.objetivo_geral">
            <Title tamanho="text-base" cor="text-black" texto="Objetivo Geral"/>
            <p>{{ modulo.objetivo_geral }}</p>
          </div>
          <div v-if="modulo.objetivo_especifico">
            <Title tamanho="text-base" cor="text-black" texto="Objetivos Especificos"/>
            <ul>
              <li v-for="(especifico, index) in especificoFilt" :key="index" class="list-disc">{{ especifico }}</li>
            </ul>
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
onMounted(async () => {
  const route = useRoute()
  const moduleId = route.params.id
  const apiUrl = `http://127.0.0.1:3004/cursos/${moduleId}`
  const response = await axios.get(apiUrl)
  modulo.value = response.data
  objEspecifico.value = response.data.objetivo_especifico.split('-')
  especificoFilt.value = objEspecifico.value.filter(obj => obj !== '')
})
</script>

<style>
.v-breadcrumbs-item {
  opacity: 1 !important;
  color: #E0E0E0!important;
  font-size: 16px;
  font-weight: 600;
}
.v-breadcrumbs-divider{
  color:  #E0E0E0 !important;
}
.v-breadcrumbs-item--disabled  {
  opacity: 1 !important;
  color: white!important;
}

</style>
