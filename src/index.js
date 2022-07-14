import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

new Vue({
	el: "#app",
	router: router,
	store: store,
	vuetify: vuetify,
	render: 
	  (h) => h(App)
});
