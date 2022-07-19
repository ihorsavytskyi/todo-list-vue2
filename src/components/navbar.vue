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
      <v-spacer />
      <!--<v-menu offset-y>
        <template
          v-slot:activator="{ on, attrs }"
        >
          <v-btn
            v-model="lang.name"
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            {{ currentLocale.name }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(lang, index) in langs"
            :key="index"
          >
            <v-list-item-title
              v-model="lang.name"
              @click="changeLang()"
            >
              {{ lang.name }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>-->
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
      langs: [
        { id: 'en', name: 'EN' },
        { id: 'ua', name: 'UA' },
      ],
      currentLocale: 'EN',
    };
  },
  methods: {
    /*changeLang(value) {
      console.log(value);
      this.currentLocale = value.name;
    },*/
  },
};
</script>

<style>

</style>
