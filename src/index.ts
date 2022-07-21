import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './app.vue';
import router from './router/router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'ua',
});

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  i18n,
  render:
	  (h) => h(App),
});
