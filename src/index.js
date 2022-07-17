import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'ua',
  messages: {
    en: {}
  }
})

new Vue({
	el: "#app",
	router,
	store,
	vuetify,
	i18n,
	render: 
	  (h) => h(App)
});
