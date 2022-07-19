<template>
  <nav>
    <v-app-bar
      color="deep-purple accent-4"
      dark
    >
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title>Todo</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-action-text>
            {{ link.text }}
          </v-list-item-action-text>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: 'TopNavbar',
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

<style>

</style>
