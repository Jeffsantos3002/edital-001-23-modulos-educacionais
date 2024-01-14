<template>
  <div class="flex items-center h-24 w-full space-x-4 justify-between py-7 2xl:px-32 pl-6 pr-5">
    <div class="flex space-x-4 lg:space-x-0 items-center">
      <img src="@/assets/logo.svg" class=" mr-5 2xl:mr-20" />
      <div class="flex flex-row lg:flex hidden 2xl:space-x-9 space-x-4">
        <router-link to="/" class="text-gray text-xl font-semibold">Inicio</router-link>
        <router-link to="/sobre" class="text-xl font-semibold">Sobre nós</router-link>
        <router-link to="/cursos" class="text-xl font-semibold"> Cursos</router-link>
        <router-link to="/parceiros" class="text-xl font-semibold">Parceiros</router-link>
        <router-link to="/transparencia" class="text-xl font-semibold">Transparência</router-link>
        <router-link to="/contato" class="text-xl font-semibold">Contato</router-link>
      </div>
    </div>
    <div class="flex flex-row space-x-4 items-center justify-end">
      <v-card
        class="mx-auto pa-2 d-flex align-center justify-center"
        elevation="0"
        max-width="353"
        height="40"
        rounded="lg"
      >
        <v-text-field
          class="mx-auto"
          dense
          placeholder="Busca por um assunto..."
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          rounded
          solo-inverted
          size="x-large"
          style="height: 40px; text-align: center;"
        ></v-text-field>
      </v-card>

      <div class="space-x-4 flex justify-end hidden xl:flex">
        <v-btn class="rounded-card text-xl normal-case border border-solid border-gray-950 px-5">
          Entrar
        </v-btn>
        <buttonAva mensagem="Cadastrar"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import buttonAva from '../buttonAva.vue'

</script>

<style>
.v-input__control .v-field__field {
  height: 40px !important;
  min-height: none !important;
}
.v-field__input{
  padding: 0px !important;
  min-height: 0 !important;
}
.v-field__field {
  display: flex !important;
  align-items: center !important;
}
</style>
