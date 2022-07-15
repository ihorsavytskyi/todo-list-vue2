<template>
  <v-app>
    <!--<v-app-bar color="blue" elevation app>
      <v-toolbar-title>Todo test task</v-toolbar-title>
    </v-app-bar>
    <NavbarEl/>-->
    <v-container>
      <router-view/>
    </v-container>
    <!--<v-footer padless>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Todo test task</strong>
    </v-col>
  </v-footer>
    <footerVue/>-->
  </v-app>
</template>

<script>
/*import NavbarEl from './components/navbar.vue';
import footerVue from './components/footer.vue';*/

export default {
  name: 'App',
  /*components: {
    NavbarEl,
    footerVue,
  },*/
};
</script>

<style>
</style>
<script>
export default {

};
</script>

<style lang="less" scoped>
.h1 {
  color: blue;
  .span {
    color: red;
  }
}
</style>
