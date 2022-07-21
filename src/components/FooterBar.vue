<template>
  <v-footer padless>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Todo test task</strong>
    </v-col>
  </v-footer>
</template>

<script>

export default ({
  name: 'FooterBar',
});
</script>

<style scoped>

</style>
