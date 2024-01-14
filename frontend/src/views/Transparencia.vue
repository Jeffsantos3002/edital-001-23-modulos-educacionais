<template>
 <div class="w-full flex flex-col items-center justify-center px-5">
    <div class="w-full max-w-[1150px] flex flex-col">
     <Breadcrumb/>
     <Title tamanho="text-3xl font-semibold text-center" cor="text-redAva" texto="Transparência" class="my-7 w-full"/>
     <section class="space-y-8 px-10">
      <Card elevation="1">
        <div class="flex flex-col px-2 md:px-10 justify-center mb-11">
          <Title tamanho="text-2xl font-bold text-center" cor="text-redAva" texto="Dados Gerais" class="my-8 w-full"/>
          <div class="flex flex-wrap justify-center space-y-4">
            <div class="min-h-20 flex flex-col space-y-4 items-center justify-center mt-4 mt-1.5 mx-4">
              <div class="flex flex-row space-x-2 justify-center items-center">
                <img src="@/assets/alunos-icon.svg" alt="alunos-icon" class="h-4 w-6">
                <p class="text-base font-bold text-center">Total de usuários registrados</p>
              </div>
              <p class="text-3xl text-redAva font-semibold">{{numberReal(usuarioRegi)}}</p>
            </div>
            <div class="min-h-20 flex flex-col space-y-4 items-center justify-center mt-1.5 mx-4">
              <div class="flex flex-inline space-x-2">
                <img src="@/assets/inscricoes.svg" alt="inscricoes-icon">
                <p class="text-base font-bold">Inscrições realizadas</p>
              </div>
              <p class="text-3xl text-redAva font-semibold">{{numberReal(inscricoesRealizadas)}}</p>
            </div>
            <div class="min-h-20 flex flex-col space-y-4 items-center justify-center mt-1.5 mx-4">
              <div class="flex flex-inline space-x-2">
                <img src="@/assets/cursos.svg" alt="cursos-icon">
                <p class="text-base font-bold">Cursos ativos</p>
              </div>
              <p class="text-3xl text-redAva font-semibold">{{numberReal(cursosAtivos)}}</p>
            </div>
            <div class="min-h-20 flex flex-col space-y-4 items-center justify-center mt-1.5 mx-4">
              <div class="flex flex-inline space-x-2">
                <img src="@/assets/certificado.svg" alt="certificado-icon">
                <p class="text-base font-bold">Direito à Certificação</p>
              </div>
              <p class="text-3xl text-redAva font-semibold">{{numberReal(direitoCertificacao)}}</p>
            </div>
            <div class="min-h-20 flex flex-col space-y-4 items-center justify-center mt-1.5 mx-4">
              <div class="flex flex-inline space-x-2">
                <img src="@/assets/investAluno.svg" alt="investimentoAluno-icon">
                <p class="text-base font-bold">Investimento médio por curso</p>
              </div>
              <p class="text-3xl text-redAva font-semibold">{{investimentoMedioCurso}}</p>
            </div>
            <div class="min-h-20 flex flex-col space-y-4 items-center justify-center mt-1.5 mx-4">
              <div class="flex flex-inline space-x-2">
                <img src="@/assets/invest.svg" alt="invest-icon">
                <p class="text-base font-bold">Investimento médio por aluno</p>
              </div>
              <p class="text-3xl text-redAva font-semibold">{{investimentoMedioAluno}}</p>
            </div>
          </div>
        </div>
      </Card>
      <div class="h-full">
        <Graficos :estados="estados" :usuariosCurso="usuariosCursos"/>
      </div>
     </section>
    </div>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
import Graficos from '@/components/Graficos.vue'
import Card from '@/components/Home/Card.vue'
import Title from '@/components/Title.vue'
import axios from 'axios'
import { ref, onMounted } from 'vue'

// const estados = ref([])
const transparencia = ref([])
const usuarioRegi = ref()
const inscricoesRealizadas = ref()
const cursosAtivos = ref()
const direitoCertificacao = ref()
const investimentoMedioCurso = ref()
const investimentoMedioAluno = ref()
const estados = ref([['Estado', 'População']])
const usuariosCursos = ref([['Task', 'Hours per Day']])

async function carregarDados () {
  try {
    const apiUrl = 'http://127.0.0.1:3004/transparecia' // adicona a categoria na requisição depois de ter clicado em um dos texto
    const response = await axios.get(apiUrl)
    if (response.data) {
      transparencia.value = response.data
      transparencia.value.usuarios_por_estado.forEach(estado => {
        const temp = ['BR-' + estado.estados, estado.usuarios_totais]
        estados.value.push(temp)
      })
      transparencia.value.usuarios_por_curso.forEach(usuario => {
        const temp = [usuario.curso, usuario.usuarios]
        usuariosCursos.value.push(temp)
      })
      usuarioRegi.value = transparencia.value.dados_gerais.usuarios_registrados
      inscricoesRealizadas.value = transparencia.value.dados_gerais.incricoes_realizadas
      cursosAtivos.value = transparencia.value.dados_gerais.cursos_ativos
      direitoCertificacao.value = transparencia.value.dados_gerais.direito_certificacao
      investimentoMedioCurso.value = transparencia.value.dados_gerais.investimento_medio_curso
      investimentoMedioAluno.value = transparencia.value.dados_gerais.investimento_medio_aluno
    }
  } catch (error) {
    console.error('Erro ao carregar cursos:', error)
  }
}
onMounted(carregarDados)

const numberReal = (numero) => { return parseFloat(numero).toLocaleString('pt-BR') } // trata numeros do db para pt-BR com ponto flutuante

</script>
