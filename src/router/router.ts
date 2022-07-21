import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home.vue';
import About from '../views/about.vue';
import NotFoundComponent from '../views/404.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
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

const router = new VueRouter({
  routes,
});

export default router;
