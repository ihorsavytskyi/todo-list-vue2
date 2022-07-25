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
      <div>        
        <v-menu
          top
          :close-on-click="closeOnClick"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"              
            >              
            {{ currentLang }}
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="lang in langs"
              :key="lang.id"
            >
              <v-list-item-title
                @click="changeLocale(lang.id)"
              >
                {{ lang.name }}              
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>      
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

<script lang="ts">
import { stringify } from 'json5';
import Vue from 'vue';

export default Vue.extend({
  name: 'TopNavbar',
  data() {
    return {
      drawer: false,
      currentLangId: 'en',
      closeOnClick: true,
      links: [
        { text: 'Home', route: '/' },
        { text: 'About', route: '/about' },
      ],
      langs: [
        { id: 'en', name: 'EN' },
        { id: 'ua', name: 'UA' },
      ],
    };
  },
  computed: {
    currentLang() {
      const langValue = this.langs.find((el) => el.id === this.currentLangId);
      return langValue?.name;
    },
  },
  methods: {
    changeLocale(value: string): void {      
      this.currentLangId = value;
      this.$root.$i18n.locale = value;
    }
  },
});
</script>

<style>

</style>
