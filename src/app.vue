<template>
  <v-app>
    <!--<v-app-bar color="blue" elevation app>
      <v-toolbar-title>Todo test task</v-toolbar-title>
    </v-app-bar>
    <navbarVueComponent/>-->
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
import Vue from 'vue';
import vuetify from './plugins/vuetify';
/*import navbarVueComponent from './components/navbar.vue';
import footerVue from './components/footer.vue';*/

Vue.use(vuetify);

export default {
  name: 'App',
  /*components: {
    navbarVueComponent,
    footerVue,
  },*/
  computed: {
    getTodoList() {
      return this.store.getters.getTodoList;
    },
  },
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
