<template>
  <v-carousel
    show-arrows
    hide-delimiter-background
    height="760px"
  >
    <template v-slot:prev="{ props }">
      <v-btn
        icon
        variant="text"
        :class="{ 'v-btn--plain': true }"
        class="w-71 h-71 hidden sm:flex"
        @click="props.onClick"
      >
        <v-icon aria-label="Seta para a Esquerda" role="img" aria-hidden="false">
          <img src="../../../assets/slide/Arrow-left.svg" alt="Ícone de seta para a esquerda" class="img-button w-71 max-w-24">
        </v-icon>
      </v-btn>
    </template>
    <template v-slot:next="{ props }">
      <v-btn
        icon
        variant="text"
        :class="{ 'v-btn--plain': true }"
        class="w-71 h-71  hidden sm:flex"
        @click="props.onClick"
      >
        <v-icon aria-label="Seta para a Esquerda" role="img" aria-hidden="false">
          <img src="../../../assets/slide/Arrow-right.svg" alt="Ícone de seta para a esquerda" class="img-button w-71 max-w-24">
        </v-icon>
      </v-btn>
    </template>
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="'#522D2D'"
        height="100%"
      >
        <div class="d-flex fill-height justify-center align-center">
          <!-- <div class="text-h2">
            {{ slide }} Slide
          </div> -->
          <Slide :imagemPath="slide.imagem" :content="slide.content"/>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import Slide from './Slide.vue'

const slides = [
  { imagem: 'slid1.png', alt: 'Descrição do Slide 1', content: ['avasusSlide.svg', 'Line.svg', 'textSlid.svg'] },
  { imagem: 'slid2.png', alt: 'Descrição do Slide 2', content: '' },
  { imagem: 'slid3.jpeg', alt: 'Descrição do Slide 3', content: '' }
  // ... outros slides
]
</script>

<style>
.img-button{
  max-width: none;
}
v-carousel__controls {
  position: absolute;
  bottom: 10px;
  width: 17%;
  display: flex;
  justify-content: center;
}

.v-carousel__controls .v-btn--icon {
  width: 16px !important;
  height: 17px !important;
  margin: 0 4px;
  background-color: #cccccc3b; /* Cor dos indicadores inativos */
  border: solid 1px white;
  color: transparent;
}
.v-carousel__controls .v-btn.v-btn--active  {
  background-color: white !important;
  width: 53px !important;
  height: 15px !important;
  border-radius: 5px !important;
}
.v-window__controls{
 padding: 0px 56px 0px 56px !important;
}

</style>
