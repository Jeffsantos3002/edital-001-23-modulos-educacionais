<template>
  <div class="flex flex-col justify-center">
    <Breadcrumb/>
    <Title tamanho="text-3xl" cor="text-redAva" texto="Módulos Educacionais"/>
    <div class="">
      <div class="pl-2 flex flex-wrap md:flex-row w-full">
        <div class="mb-8 cursor-pointer pb-2 pr-8 min-h-12"
          @click="mudarCategoria('&_page=1&_limit=3','covid')">
          <div :class="{'filter': selectedTab === 'covid'}">
            <Title tamanho="text-xl" cor="" texto="Covid 19" :class="{'textFilter': selectedTab === 'covid'}"/>
          </div>
        </div>
        <div class="mb-8 cursor-pointer pb-2 pr-8 min-h-12"
          @click="mudarCategoria('&_limit=3&_sort=avaliacao&_order=desc','sifilis')">
          <div :class="{'filter': selectedTab === 'sifilis'}">
            <Title tamanho="text-xl" cor="" texto="Sífilis e outras Ist’s" :class="{'textFilter': selectedTab === 'sifilis'}"/>
          </div>
        </div>
        <div class="mb-8 cursor-pointer pb-2 pr-8 min-h-12"
          @click="mudarCategoria('&_limit=3&_sort=criado_em&_order=desc','perceptoria')">
          <div :class="{'filter': selectedTab === 'perceptoria'}">
            <Title tamanho="text-xl" cor="" texto="Preceptoria" :class="{'textFilter': selectedTab === 'perceptoria'}"/>
          </div>
        </div>
        <div class="mb-8 cursor-pointer pb-2 pr-8 min-h-12"
          @click="mudarCategoria('&_page=1&_limit=3','doencas')">
          <div :class="{'filter': selectedTab === 'doencas'}">
            <Title tamanho="text-xl" cor="" texto="Doenças raras" :class="{'textFilter': selectedTab === 'doencas'}"/>
          </div>
        </div>
        <div class="mb-8 cursor-pointer pb-2 pr-8 min-h-12"
          @click="mudarCategoria('&_limit=3&_sort=avaliacao&_order=desc','palestras')">
          <div :class="{'filter': selectedTab === 'palestras'}">
            <Title tamanho="text-xl" cor="" texto="Web Palestras" :class="{'textFilter': selectedTab === 'palestras'}"/>
          </div>
        </div>
        <div class="mb-8 cursor-pointer pb-2 pr-8 min-h-12"
          @click="mudarCategoria('&_limit=3&_sort=criado_em&_order=desc','prisional')">
          <div :class="{'filter': selectedTab === 'prisional'}">
            <Title tamanho="text-xl" cor="" texto="Sistemas prisional" :class="{'textFilter': selectedTab === 'prisional'}"/>
          </div>
        </div>
        <div class="mb-8 cursor-pointer pb-2 pr-8 min-h-12"
          @click="mudarCategoria('&_limit=3&_sort=criado_em&_order=desc','opas')">
          <div :class="{'filter': selectedTab === 'opas'}">
            <Title tamanho="text-xl" cor="" texto="OPAS" :class="{'textFilter': selectedTab === 'opas'}"/>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div class="flex flex-col h-[430px] w-[350px]">
            <img src="../assets/slide/slid2.png" class="h-52 w-full object-cover rounded-card" loading="lazy"/>
            <Title tamanho="text-xl" cor="text-black" texto="Covid 19"/>
            <p class="text-xs text-redAva text-[#F6303F] font-semibold">UFRN / LOREM / COISA</p>
            <div class="flex flex-col md:flex-row md:space-x-5">
              <div class="pl-4 flex flex-row space-x-5">
                <div class="flex flex-row items-center space-x-2">
                  <img src="../assets/alunos-icon.svg" alt="alunos-icon" title="alunos">
                  <p class="text-base">10</p>
                </div>
                <div class="flex flex-row items-center space-x-2">
                  <img src="../assets/hora-icon.svg" alt="hora-icon" title="hora">
                  <p class="text-base">4h</p>
                </div>
              </div>
              <Avalia rating="4.5" estilo="text-base"/>
            </div>
            <div>
              <p>
                O módulo Sífilis: Vigilância Epidemiológica tem como objetivo promover uma atualização
                dos profissionais de saúde acerca dos conceitos essenciais nessa área de conhecimento, com foco na
                sífilis...
              </p>
              <div class="w-full flex justify-end">
                <a href="#" class="text-lg text-gray font-semibold">Ver curso</a>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Title from '@/components/Title.vue'
import Avalia from '@/components/Home/Cursos/Avalia.vue'

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
.textFilter{
  color: #707070 !important;
}

</style>
