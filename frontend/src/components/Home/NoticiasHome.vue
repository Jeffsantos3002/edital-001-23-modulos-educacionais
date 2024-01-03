<template>
  <div class="p-24 flex flex-col-reverse md:flex-row items-center">
    <div class="bg-greenFanese rounded-2xl w-72 md:w-56 h-80 p-2.5 mt-16 md:mt-0">
      <h3 class="text-white h-10 text-center">EVENTOS</h3>
      <div>
        <div class="py-1.5" style="border-bottom: 1px solid white;">
          <p class="text-white">terça-feira, 21-11-2023</p>
          <p class="text-white">Evento Lorem Ipsum</p>
        </div>
      </div>
      <div>
        <div class="py-1.5" style="border-bottom: 1px solid white;">
          <p class="text-white">terça-feira, 21-11-2023</p>
          <p class="text-white">Evento Lorem Ipsum</p>
        </div>
      </div>
      <div>
        <div class="py-1.5" style="border-bottom: 1px solid white;">
          <p class="text-white">terça-feira, 21-11-2023</p>
          <p class="text-white">Evento Lorem Ipsum</p>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col items-center">
      <div class="w-9/12">
        <h1 class="text-2xl font-bold text-roxo">Ultimas Noticias</h1>
        <div class="flex flex-col md:flex-row space-y-0">
          <a href="#" class=" md:w-3/6 md:mr-1.5 mb-1.5 md:mb-0 relative">
            <img class="h-full opacity-90" src="@/assets/Noticias/img-1.jpg" alt="noticia1">
            <span class="absolute hidden md:flex bottom-8 left-8 font-extrabold text-xl text-white">Lorem ipsum dolor Lorem ipsum dolor sit amet...</span>
            <span class="z-1 absolute md:hidden bottom-1 left-1 font-extrabold text-md text-white">Lorem ipsum...</span>
          </a>
          <div class="md:w-3/6">
            <div class="flex flex-col md:flex-row md:space-x-1.5 md:mb-1.5">
              <a href="#" class="md:w-1/2 relative mb-1.5 md:mb-0">
                <img class="opacity-70" src="@/assets/Noticias/img-2.jpg" alt="noticia2">
                <span class="z-1 absolute hidden lg:flex bottom-1 left-1 font-extrabold text-md text-white">Lorem ipsum dolor Lorem ipsum dolor sit amet...</span>
                <span class="z-1 absolute lg:hidden bottom-1 left-1 font-extrabold text-md text-white">Lorem ipsum...</span>
              </a>
              <a href="#" class="md:w-1/2 hover:4/6 relative">
                <img class="opacity-70" src="@/assets/Noticias/img-3.jpg" alt="noticia3">
                <span class="z-1 absolute hidden lg:flex bottom-1 left-1 font-extrabold text-md text-white">Lorem ipsum dolor Lorem ipsum dolor sit amet...</span>
                <span class="z-1 absolute lg:hidden bottom-1 left-1 font-extrabold text-md text-white">Lorem ipsum...</span>
              </a>
            </div>
            <a href="#" class="relative mt-1.5 md:mt-0">
              <img class="opacity-90" src="@/assets/Noticias/img-4.jpg" alt="noticia4">
              <span class="z-1 absolute hidden md:flex bottom-2 left-2 font-extrabold text-md text-white">Lorem ipsum dolor Lorem ipsum dolor sit amet...</span>
              <span class="z-1 absolute md:hidden bottom-2 left-2 font-extrabold text-md text-white">Lorem ipsum...</span>

            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NoticiasHome'
}
</script>
