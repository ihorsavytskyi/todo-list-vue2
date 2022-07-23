import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import About from '../views/About.vue';
import NotFoundComponent from '../views/404.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '*',
    component: NotFoundComponent,
  },
];

export default new VueRouter({
  routes,
});
