import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

new Vue({
	el: "#app",
	router,
	store,
	vuetify,
	render: 
	  (h) => h(App)
});
