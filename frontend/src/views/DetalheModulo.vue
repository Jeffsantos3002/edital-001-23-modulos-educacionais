// ModuloDetalhes.vue
<template>
  <div>
    <h1>{{ modulo.titulo }}</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import axios from 'axios'

const modulo = ref('')

onMounted(async () => {
  const route = useRoute()
  const moduleId = route.params.id
  const apiUrl = `http://192.168.1.95:3004/cursos/${moduleId}`
  const response = await axios.get(apiUrl)
  modulo.value = response.data
})
</script>
