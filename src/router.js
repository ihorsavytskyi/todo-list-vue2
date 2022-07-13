import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/home.vue';
import About from './components/about.vue';
import NotFoundComponent from './components/404.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
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
  ],
});

export default router;
