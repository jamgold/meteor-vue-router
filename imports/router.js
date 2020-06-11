import Vue from 'vue'
// import { MeteorData } from 'vue-meteor-tracker';
import VueRouter from 'vue-router';

const Home = async () => import('./Home.vue');
const About = async () => import('./About.vue');
const NotFound = async () => import('./NotFound.vue');

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
