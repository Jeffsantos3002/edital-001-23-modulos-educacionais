<template>
  <v-carousel
    height="756"
    width=""
    show-arrows
    hide-delimiter-background
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
        :color="colors[i]"
        height="100%"
      >
        <div class="d-flex fill-height justify-center align-center">
          <!-- <div class="text-h2">
            {{ slide }} Slide
          </div> -->
          <Slide/>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import Slide from './Slide.vue'

const colors = [
  'indigo',
  'warning',
  'pink darken-2',
  'red lighten-1',
  'deep-purple accent-4'
]

const slides = [
  'First',
  'Second',
  'Third',
  'Fourth',
  'Fifth'
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
  border-radius: 0px !important;
}
.v-window__controls{
 padding: 0px 56px 0px 56px !important;
}

</style>
