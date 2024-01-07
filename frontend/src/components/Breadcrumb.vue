<template>
  <v-breadcrumbs :items="dynamicItems" class="w-full pt-8 flex flex-wrap">
    <template v-slot:title="{ item }">
        {{ item.title }}
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
        { title: 'Modulos', disabled: true, href: '/modulos' }
      )
      break
    case 'sobre':
      breadcrumbItems.push(
        { title: 'Inicio', disabled: false, href: '/' },
        { title: 'Sobre', disabled: true, href: '/sobre' }
      )
      break
    case 'transparencia':
      breadcrumbItems.push(
        { title: 'Inicio', disabled: false, href: '/' },
        { title: 'Transparência', disabled: true, href: '/transparencia' }
      )
      break
    case 'contato':
      breadcrumbItems.push(
        { title: 'Inicio', disabled: false, href: '/' },
        { title: 'Contato', disabled: true, href: '/contato' }
      )
      break
    default:
      break
  }
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
.v-breadcrumbs{
  padding-top: 30px ;
}
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
