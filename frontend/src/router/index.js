import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Sobre from '../views/Sobre.vue'
import Contatos from '@/views/Contato.vue'
import Cursos from '@/views/Cursos.vue'
import Transparencia from '@/views/Transparencia.vue'
import DetalheModulo from '@/views/DetalheModulo.vue'
import Parceiros from '@/views/Parceiros.vue'
import Modulos from '@/views/Modulos.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: Sobre
  },
  {
    path: '/cursos',
    name: 'cursos',
    component: Cursos
  },
  {
    path: '/contato',
    name: 'contato',
    component: Contatos
  },
  {
    path: '/transparencia',
    name: 'transparencia',
    component: Transparencia
  },
  {
    path: '/detalhe/:id/:titulo',
    name: 'moduloDetalhes',
    component: DetalheModulo
  },
  {
    path: '/parceiros',
    name: 'parceiros',
    component: Parceiros
  },
  {
    path: '/modulos',
    name: 'modulos',
    component: Modulos
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
