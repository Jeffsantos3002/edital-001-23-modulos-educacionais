<!-- GraficoMap.vue -->
<template>
  <div class="flex flex-col lg:flex-row items-center lg:items-start justify-center space-y-10 lg:space-y-0">
    <Card class="lg:w-1/2 max-w-[519px] w-full lg:px-20 px-2 lg:mr-8 flex flex-col items-center justify-center pt-6" elevation="1">
      <Title tamanho="text-2xl font-semibold text-center" cor="text-[#F6303F]" texto="Usuários por curso" class="w-full"/>
      <GChart :data="usuariosCurso" :options="pieChartOptions" :type="pieChartType" class="w-96 h-96"/>
      <div v-if="usuariosCurso && usuariosCurso[1]" class="mb-8">
        <div class="flex flex-inline">
          <span class="cursos w-5 h-5 bg-[#FFFFFF] inline-block rounded-full pr-4 mr-2"></span>
          <p class="text-base font-bold">{{ usuariosCurso[1][0] }} {{ numberReal(usuariosCurso[1][1])  }}</p>
        </div>
        <div class="flex flex-inline">
          <span class="cursos w-5 h-5 bg-[#D2202C] inline-block pr-4 mr-2"></span>
          <p class="text-base font-bold">{{ usuariosCurso[2][0] }} {{ numberReal(usuariosCurso[2][1]) }}</p>
        </div>
        <div class="flex flex-inline">
          <span class="cursos w-5 h-5 bg-[#707070] inline-block pr-4 mr-2"></span>
          <p class="text-base font-bold">{{ usuariosCurso[3][0] }} {{ numberReal(usuariosCurso[3][1]) }}</p>
        </div>
        <div class="flex flex-inline">
          <span class="cursos w-5 h-5 bg-[#2F2E41] inline-block pr-4 mr-2"></span>
          <p class="text-base font-bold">{{ usuariosCurso[4][0] }} {{ numberReal(usuariosCurso[4][1]) }}</p>
        </div>
      </div>
    </Card>
    <Card class="lg:w-1/2 lg:px-20 px-2 pt-6 max-w-[519px] w-full min-h-[568px] flex flex-col items-center" elevation="1">
      <Title tamanho="text-2xl font-semibold text-center" cor="text-[#F6303F]" texto="Usuários por Estado" class="w-full mb-20"/>
      <GChart :data="chartData" :options="chartOptions" :type="type" :settings="{ packages: ['geochart'] }" class="w-full h-full"/>
    </Card>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import { GChart } from 'vue-google-charts'
import Card from './Home/Card.vue'
import Title from './Title.vue'

const props = defineProps(['estados', 'usuariosCurso'])
const chartData = ref(props.estados)
const usuariosCurso = ref(props.usuariosCurso)
const numberReal = (numero) => { return parseFloat(numero).toLocaleString('pt-BR') } // trata numeros do db para pt-BR com ponto flutuante

/* Gráfico de pizza */
const chartOptions = {
  region: 'BR',
  resolution: 'provinces',
  colorAxis: {
    colors: ['#D2202C', '#2F2E41', '#707070', '#FFFFFF']
  },
  displayMode: 'auto',
  legend: 'none',
  backgroundColor: 'transparent'
}

const type = 'GeoChart'

/* Gráfico de Pizza */
const pieChartOptions = {
  slices: {
    0: { color: '#FFFFFF' },
    1: { color: '#D2202C' },
    2: { color: '#707070' },
    3: { color: '#2F2E41' }
  },
  pieSliceText: 'none',
  legend: 'none',
  backgroundColor: 'transparent'

}

const pieChartType = 'PieChart'

</script>

<style>
.cursos{
  border-radius: 100%;
}
</style>
