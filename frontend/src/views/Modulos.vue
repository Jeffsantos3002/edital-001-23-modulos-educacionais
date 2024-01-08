<template>
  <div class="flex flex-col justify-center">
    <Breadcrumb/>
    <Title tamanho="text-3xl" cor="text-redAva" texto="Módulos Educacionais"/>
    <div class="">
      <ModuloTypes categoria="&_page=1&_limit=3','covid" filtro="covid" texto="Covid 19"/>
      <div class="pl-2 flex flex-wrap md:flex-row w-full">
        <div class="mb-8 cursor-pointer pb-2 pr-8 min-h-12"
          @click="mudarCategoria('&_page=1&_limit=3','covid')">
          <div :class="{'filter': selectedTab === 'covid'}">
            <Title tamanho="text-xl" cor="text-black" texto="Covid 19" />
          </div>
        </div>
        <div class="mb-8 cursor-pointer pb-2 pr-8 min-h-12"
          @click="mudarCategoria('&_limit=3&_sort=avaliacao&_order=desc','sifilis')">
          <div :class="{'filter': selectedTab === 'sifilis'}">
            <Title tamanho="text-xl" cor="text-black" texto="Sífilis e outras Ist’s"/>
          </div>
        </div>
        <div class="mb-8 cursor-pointer pb-2 pr-8 min-h-12"
          @click="mudarCategoria('&_limit=3&_sort=criado_em&_order=desc','perceptoria')">
          <div :class="{'filter': selectedTab === 'perceptoria'}">
            <Title tamanho="text-xl" cor="text-black" texto="Preceptoria"/>
          </div>
        </div>
        <div class="mb-8 cursor-pointer pb-2 pr-8 min-h-12"
          @click="mudarCategoria('&_page=1&_limit=3','doencas')">
          <div :class="{'filter': selectedTab === 'doencas'}">
            <Title tamanho="text-xl" cor="text-black" texto="Doenças raras"/>
          </div>
        </div>
        <div class="mb-8 cursor-pointer pb-2 pr-8 min-h-12"
          @click="mudarCategoria('&_limit=3&_sort=avaliacao&_order=desc','palestras')">
          <div :class="{'filter': selectedTab === 'palestras'}">
            <Title tamanho="text-xl" cor="text-black" texto="Web Palestras"/>
          </div>
        </div>
        <div class="mb-8 cursor-pointer pb-2 pr-8 min-h-12"
          @click="mudarCategoria('&_limit=3&_sort=criado_em&_order=desc','prisional')">
          <div :class="{'filter': selectedTab === 'prisional'}">
            <Title tamanho="text-xl" cor="text-black" texto="Sistemas prisional"/>
          </div>
        </div>
        <div class="mb-8 cursor-pointer pb-2 pr-8 min-h-12"
          @click="mudarCategoria('&_limit=3&_sort=criado_em&_order=desc','opas')">
          <div :class="{'filter': selectedTab === 'opas'}">
            <Title tamanho="text-xl" cor="text-black" texto="OPAS"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Title from '@/components/Title.vue'
import ModuloTypes from '@/components/ModuloTypes.vue'

const categoria = ref('&_page=1&_limit=3') // faz requisição de modulos do db inicial, depois fica dinâmico
const selectedTab = ref('populares') // aciona o sublinhado assim que a página carrega

const selectTab = (tab) => { // lógica para subilinhar os filtros ao clicar
  selectedTab.value = tab
}

const mudarCategoria = (novaCategoria, section) => {
  categoria.value = novaCategoria
  selectTab(section)
}

</script>

<style>
.filter {
  border-bottom: solid 2px #707070;
  padding-bottom: 11px;
}
</style>
