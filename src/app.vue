<template>
  <v-app>
    <nav>
      <v-app-bar color="deep-purple accent-4" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Todo</v-toolbar-title>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" absolute bottom temporary>
        <v-list>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-action-text>
              {{ link.text }}
            </v-list-item-action-text>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </nav>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <v-footer padless>
      <v-col class="text-center" cols="12" >
        {{ new Date().getFullYear() }} — <strong>Todo test task</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from "./components/navbar.vue";

export default {
  name: 'App',
  data() {
    return {
      drawer: false,
      links: [
        { text: 'Home', route: '/' },
        { text: 'About', route: '/about' },
      ],
    };
  },
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
