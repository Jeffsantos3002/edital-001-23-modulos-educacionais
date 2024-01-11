<template>
 <div class="w-full flex flex-col items-center justify-center px-5">
    <div class="max-w-[1150px] flex flex-col">
     <Breadcrumb/>
     <Title tamanho="text-3xl font-semibold" cor="text-redAva" texto="Transparência" class="my-7 w-full"/>
     <section>
      <Card>
        <div class="flex flex-col px-2 md:px-10 justify-center">
          <Title tamanho="text-2xl font-bold text-center" cor="text-redAva" texto="Dados Gerais" class="my-6 w-full"/>
          <div class="flex flex-wrap justify-center space-y-4">
            <div class="min-h-20 flex flex-col space-y-4 items-center justify-center mt-4 mt-1.5 mx-4">
              <div class="flex flex-row space-x-2 justify-center items-center">
                <img src="@/assets/alunos-icon.svg" alt="alunos-icon" class="h-4 w-6">
                <p class="text-base font-bold text-center">Total de usuários registrados</p>
              </div>
              <p class="text-3xl text-redAva font-semibold">{{numberReal(548941)}}</p>
            </div>
            <div class="h-20 flex flex-col space-y-4 items-center justify-center mt-1.5 mx-4">
              <div class="flex flex-inline space-x-2">
                <img src="@/assets/inscricoes.svg" alt="inscricoes-icon">
                <p class="text-base font-bold">Inscrições realizadas</p>
              </div>
              <p class="text-3xl text-redAva font-semibold">{{numberReal(548941)}}</p>
            </div>
            <div class="h-20 flex flex-col space-y-4 items-center justify-center mt-1.5 mx-4">
              <div class="flex flex-inline space-x-2">
                <img src="@/assets/cursos.svg" alt="cursos-icon">
                <p class="text-base font-bold">Cursos ativos</p>
              </div>
              <p class="text-3xl text-redAva font-semibold">{{numberReal(548941)}}</p>
            </div>
            <div class="h-20 flex flex-col space-y-4 items-center justify-center mt-1.5 mx-4">
              <div class="flex flex-inline space-x-2">
                <img src="@/assets/certificado.svg" alt="certificado-icon">
                <p class="text-base font-bold">Direito à Certificação</p>
              </div>
              <p class="text-3xl text-redAva font-semibold">{{numberReal(548941)}}</p>
            </div>
            <div class="h-20 flex flex-col space-y-4 items-center justify-center mt-1.5 mx-4">
              <div class="flex flex-inline space-x-2">
                <img src="@/assets/certificado.svg" alt="certificado-icon">
                <p class="text-base font-bold">Direito à Certificação</p>
              </div>
              <p class="text-3xl text-redAva font-semibold">{{numberReal(548941)}}</p>
            </div>
            <div class="h-20 flex flex-col space-y-4 items-center justify-center mt-1.5 mx-4">
              <div class="flex flex-inline space-x-2">
                <img src="@/assets/certificado.svg" alt="certificado-icon">
                <p class="text-base font-bold">Direito à Certificação</p>
              </div>
              <p class="text-3xl text-redAva font-semibold">{{numberReal(548941)}}</p>
            </div>
          </div>
        </div>
      </Card>
      <div class="h-full">
        <GraficoMap/>
      </div>
     </section>
    </div>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
import GraficoMap from '@/components/GraficoMap.vue'
import Card from '@/components/Home/Card.vue'
import Title from '@/components/Title.vue'

const numberReal = (numero) => { return parseFloat(numero).toLocaleString('pt-BR') } // trata numeros do db para pt-BR com ponto flutuante

</script>
