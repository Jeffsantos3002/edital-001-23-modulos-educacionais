import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Sobre from '../views/Sobre.vue'
import Contatos from '@/views/Contato.vue'
import Cursos from '@/views/Cursos.vue'
import Transparencia from '@/views/Transparencia.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
