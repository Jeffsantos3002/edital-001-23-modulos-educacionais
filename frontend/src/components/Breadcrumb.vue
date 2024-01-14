<template>
  <!-- Quando estiver na rota moduloDetlhe a estilização é aplicada -->
  <v-breadcrumbs :items="dynamicItems" class="pt-8 flex flex-wrap" :class="{ 'breadcrumb-det-modulo': isDetalheModulo }" >
    <template v-slot:title="{ item }">
        {{item.title}}
    </template>
  </v-breadcrumbs>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const dynamicItems = ref([])
const rota = useRoute()
const isDetalheModulo = rota.name === 'moduloDetalhes' // retorna um boleano informando se está na rota

const updateBreadcrumb = () => {
  const route = useRoute()
  const breadcrumbItems = []
  const rota = route.name
  switch (rota) {
    case 'moduloDetalhes':
      breadcrumbItems.push(
        { title: 'Inicio', disabled: false, href: '/' },
        { title: 'Cursos', disabled: false, href: '/cursos' },
        { title: 'Módulos', disabled: false, href: '/modulos' },
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
        { title: 'Cursos', disabled: false, href: '/cursos' },
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

// const isDetalheModulo = route.name === 'moduloDetalhes'
onMounted(() => {
  updateBreadcrumb()
})

watchEffect(() => {
  updateBreadcrumb()
})

</script>

<style>
 /* a classe .breadcrumb-det-modulo é utilizada quando o breadcrumb se encontrar na rota moduloDetalhe*/
.breadcrumb-det-modulo .v-breadcrumbs-item {
  opacity: 1 !important;
  color: #E0E0E0!important;
  font-size: 16px;
  font-weight: 600;
}

.breadcrumb-det-modulo .v-breadcrumbs-divider {
  color:  #E0E0E0 !important;
}

.breadcrumb-det-modulo .v-breadcrumbs-item--disabled {
  opacity: 1 !important;
  color: white!important;
}
/* Estiliza componente padrão vuetify para quando estiver ativo e estiver desabilitado */
.v-breadcrumbs{
 padding: 0px !important;
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
