<template>
  <v-breadcrumbs :items="dynamicItems">
    <template v-slot:title="{ item }">
        {{ item.title.toUpperCase() }}
    </template>
  </v-breadcrumbs>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const dynamicItems = ref([])

const updateBreadcrumb = () => {
  const route = useRoute()
  const breadcrumbItems = []

  switch (route.name) {
    case 'moduloDetalhes':
      breadcrumbItems.push(
        { title: 'Inicio', disabled: false, href: '/' },
        { title: 'Cursos', disabled: false, href: '/cursos' },
        { title: 'Módulos', disabled: false, href: '/' },
        { title: route.params.titulo }
      )
      break
    case 'cursos':
      breadcrumbItems.push(
        { title: 'Inicio', disabled: false, href: '/' },
        { title: 'Cursos', disabled: true, href: '/cursos' }
      )
      break
    case 'parceiros':
      breadcrumbItems.push(
        { title: 'Inicio', disabled: false, href: '/' },
        { title: 'Parceiros', disabled: true, href: '/parceiros' }
      )
      break
    case 'modulos':
      breadcrumbItems.push(
        { title: 'Inicio', disabled: false, href: '/' },
        { title: 'modulos', disabled: true, href: '/modulos' }
      )
      break
    default:
      console.log('deu em nada')
  }
  // if (route.name === 'moduloDetalhes') {
  //   breadcrumbItems.push({
  //     title: route.params.titulo,
  //     disabled: true,
  //     href: '/inicio'
  //   })
  // } else {
  //   breadcrumbItems.push({
  //     title: 'alguma coisa',
  //     disabled: true,
  //     href: '/inicio'
  //   })
  // }

  dynamicItems.value = breadcrumbItems
}
onMounted(() => {
  const route = useRoute()
  console.log('Rota Atual:', route.name)

  updateBreadcrumb()
})

watchEffect(() => {
  const route = useRoute()
  console.log('Rota Atual:', route.name)
  updateBreadcrumb()
})

</script>

<style>
/* Estiliza componente padrão vuetify para quando estiver ativo e estiver desabilitado */
.v-breadcrumbs-item {
  opacity: 1 !important;
  color: #808080 !important;
  font-size: 16px;
  font-weight: 600;
}

/* Desativado */
.v-breadcrumbs-item--disabled {
  opacity: 1 !important;
  color: black !important;
}

</style>
