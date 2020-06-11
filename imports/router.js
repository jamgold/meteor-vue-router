import Vue from 'vue'
// import { MeteorData } from 'vue-meteor-tracker';
import VueRouter from 'vue-router';

import Home from './Home.vue';
import About from './About.vue';
// const NotFound = async () => {import x from './NotFound.vue';return x}
import NotFound from './NotFound.vue';

export const routes = [
  { path: '/', name: 'home', component: Home, menuItem: 'Home' },
  { path: '/about', name: 'about', component: About, menuItem: 'About'},
  { path: '*', name: 'not-found', component: NotFound },
];

Vue.use(VueRouter);

export default router = new VueRouter({
  mode: 'history',
  routes,
});
