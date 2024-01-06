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
  const breadcrumbItems = [
    {
      title: 'Inicio',
      disabled: false,
      href: '/'
    },
    {
      title: 'Cursos',
      disabled: false,
      href: '/cursos'
    },
    {
      title: 'Módulos',
      disabled: false,
      href: '/cursos/modulos'
    }
  ]

  if (route.name === 'moduloDetalhes') {
    breadcrumbItems.push({
      title: route.params.titulo,
      disabled: true,
      href: '/cursos/modulos/'
    })
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
.v-breadcrumbs-item--disabled{
  color: #808080 !important;
  font-size: 16px;
  font-weight: 600;}
.v-breadcrumbs-item{
  opacity: 1;
}
</style>
