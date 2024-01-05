<template>
    <div class="flex flex-col space-y-8 items-center justify-start">
      <h1 class="text-3xl text-redAva font-semibold">Módulos Educacionais</h1>
      <div class="pl-2 flex flex-row space-x-8 w-full">
        <div class="mb-8 cursor-pointer pb-2"
          :class="{'underline': selectedTab === 'populares'}"
          @click="selectTab('populares')">
          <h3 class="text-xl font-semibold">Mais populares</h3>
        </div>
        <div class="mb-8 cursor-pointer pb-2"
          :class="{'underline': selectedTab === 'populares'}"
          @click="selectTab('populares')">
          <h3 class="text-xl font-semibold">Mais bem avaliados</h3>
        </div>
        <div class="mb-8 cursor-pointer pb-2"
          :class="{'underline': selectedTab === 'populares'}"
          @click="selectTab('populares')">
          <h3 class="text-xl font-semibold">Mais populares</h3>
        </div>
      </div>
      <div>
        <Card>
          <div class="px-5 flex flex-wrap items-center space-x-5 py-5">
            <img src="https://avasus.ufrn.br/pluginfile.php/749325/course/thumbimage//imagem%20de%20capa.jpg" alt="" class="w-32 h-32 rounded-card">
            <div class="flex flex-col w-[274px]">
              <h3 class="text-xl font-semibold">Sífilis: Aspectos Clínicos e Diagnóstico Diferencial</h3>
              <p class="text-xs text-redAva">LAIS / EBSERH</p>
            </div>
            <div class="flex flex-row space-x-5 py-5">
              <div class="flex flex-row items-center space-x-2">
                <img src="../../assets/alunos-icon.svg" alt="alunos-icon" title="alunos">
                <p class="text-base">4586</p>
              </div>
              <Avalia rating="3.5"/>
              <buttonAva mensagem="Ver mais"/>
            </div>
          </div>
        </Card>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Card from './Card.vue'
import Avalia from '@/components/Home/Cursos/Avalia.vue'
import buttonAva from '@/components/buttonAva.vue'

const selectedTab = ref('')
const selectTab = (tab) => {
  selectedTab.value = tab
}
</script>

<style>
.underline {
  border: solid 2px black;
}
</style>
