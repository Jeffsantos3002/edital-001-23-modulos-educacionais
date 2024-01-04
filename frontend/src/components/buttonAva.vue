<template>
    <v-btn class="rounded-2xl text-xl normal-case text-white bg-gray px-5 xl:px-9">
      {{ mensagem }}
    </v-btn>
</template>

<script>
export default {
  props: {
    mensagem: String
  }
}
</script>
