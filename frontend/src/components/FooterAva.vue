<template>
  <div class="h-full mt-32">
    <div class="bg-redAva flex flex-col justify-center items-center h-56 space-y-8 md:space-y-11 py-20">
      <h2 class="text-white text-2xl">Realização</h2>
      <div class="flex flex-col md:flex-row md:space-x-20">
        <img src="@/assets/footer/logo_lais.svg" class="h-16 md:h-20 w-60"/>
        <img src="@/assets/footer/logo_ufrn.svg" class="h-16 md:h-20 w-56"/>
      </div>
    </div>
    <div class="bg-footer-black h-full md:h-80 flex justify-center">
      <div class="flex flex-col md:flex-row md:space-x-48 lg:space-x-56 py-8 md:py-16 space-y-8 md:space-y-0">
        <div class="space-y-2.5 flex flex-col items-center">
          <img src="@/assets/footer/logo_lais.svg" alt="logo-lais" title="logo-lais" class="h-9 w-32">
          <div>
            <p class="text-white text-base font-normal">Laboratório de Inovação </p>
            <p class="text-white text-base font-normal">Tecnológica em Saúde. </p>
          </div>
        </div>
        <div class="flex flex-row space-x-10 md:space-x-48 lg:space-x-56">
          <div class="pl-2 md:space-y-3.5">
            <h1 class="text-[26px] text-white">Links úteis</h1>
            <div class="flex flex-col">
              <router-link to="/" class="text-lg font-thin text-white">Inicio</router-link>
              <router-link to="/sobre" class="text-lg font-normal text-white">Sobre nós</router-link>
              <router-link to="/cursos" class="text-lg font-normal text-white"> Cursos</router-link>
              <router-link to="/parceiros" class="text-lg font-normal text-white">Parceiros</router-link>
              <router-link to="/transparencia" class="text-lg font-normal text-white">Transparência</router-link>
              <router-link to="/contato" class="text-lg font-normal text-white">Contato</router-link>
            </div>
          </div>
          <div>
            <h1 class="text-[26px] text-white">Redes sociais</h1>
            <div class="flex flex-row space-x-2 sm:space-x-12">
              <img src="@/assets/footer/facebook_icon.svg" alt="facebook-icon" title="facebook">
              <img src="@/assets/footer/twitter_icon.svg" alt="twitter-icon" title="twitter">
              <img src="@/assets/footer/instagram_icon.svg" alt="instagram-icon" title="instagram">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-footer-gray h-20 flex items-center justify-center">
      <p class="text-lg font-thin text-white text-center">2022 © LAIS (HUOL). Todos os direitos reservados</p>
    </div>
  </div>
</template>

<script setup>

</script>
