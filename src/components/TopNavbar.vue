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
              :key="lang.langId"
            >
              <v-list-item-title
                @click="changeLocale(lang.langId)"
              >
                {{ lang.title }}              
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
          :key="link.title"
          router
          :to="link.routeLink"
        >
          <v-list-item-action-text>
            {{ link.title }}
          </v-list-item-action-text>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import RouteItem from '../models/RouteItem';
import LangItem from '../models/LangItem';

export default Vue.extend({
  name: 'TopNavbar',
  data() {
    return {
      drawer: false,
      currentLangId: 'en',
      closeOnClick: true,
      links: [
        { title: 'Home', routeLink: '/' },
        { title: 'About', routeLink: '/about' },
      ] as Array<RouteItem>,
      langs: [
        { langId: 'en', title: 'EN' },
        { langId: 'ua', title: 'UA' },
      ] as Array<LangItem>,
    };
  },
  computed: {
    currentLang() {
      const langValue = this.langs.find((el) => el.langId === this.currentLangId);
      return langValue?.title;
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
