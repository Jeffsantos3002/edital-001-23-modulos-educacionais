<template>
  <div>
    <div id="chart_div" style="width: 900px; height: 500px;"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const drawMarkersMap = () => {
  const data = google.value.visualization.arrayToDataTable([
    ['City', 'Population', 'Area'],
    ['Rome', 2761477, 1285.31]
    // ... rest of your data
  ])

  const options = {
    region: 'IT',
    displayMode: 'markers',
    colorAxis: { colors: ['green', 'blue'] }
  }

  const chart = new google.value.visualization.GeoChart(document.getElementById('chart_div'))
  chart.draw(data, options)
}

const google = ref(null)

onMounted(() => {
  // Carrega o script da API do Google Charts de forma assíncrona
  const script = document.createElement('script')
  script.src = 'https://www.gstatic.com/charts/loader.js'
  script.async = true
  script.onload = () => {
    google.value = window.google // Atribui a variável global google
    google.value.charts.load('current', {
      packages: ['geochart'],
      mapsApiKey: 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
    })
    google.value.charts.setOnLoadCallback(drawMarkersMap)
  }

  document.head.appendChild(script)
})
</script>
