<template>
  <div class="pl-2 flex flex-wrap md:flex-row w-full">
    <div class="mb-8 cursor-pointer pb-2 pr-8 min-h-12"
      @click="mudarCategoria(props.categoria, props.filtro)">
      <div :class="{'filter': selectedTab === props.filtro}">
        <Title tamanho="text-xl" cor="text-black" texto="Covid 19" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue' // recebe a tamanho e cor houver do elemento pai para contruir título

const props = defineProps(['categoria', 'filtro', 'texto'])
const categoria = ref(props.categoria) // faz requisição de modulos do db inicial, depois fica dinâmico
const selectedTab = ref(props.filtro) // aciona o sublinhado assim que a página carrega

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
