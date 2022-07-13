import Vue from 'vue';
import App from './app.vue';
import router from './router';
import VueI18n from 'vue-i18n';

const i18n = new VueI18n({
  locale: 'en',
});

new Vue({
	el: "#app",
	i18n,
	router,
	render: 
	  (h) => h(App)
});

Vue.use(VueI18n)