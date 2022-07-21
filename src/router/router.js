import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/HomePage.vue';
import About from '../views/About.vue';
import NotFoundComponent from '../views/404.vue';

Vue.use(VueRouter);

const routes = [
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

const router = new VueRouter({
  routes,
});

export default router;
