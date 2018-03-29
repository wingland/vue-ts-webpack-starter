import VueRouter, { RouteConfig } from 'vue-router';
import Home from './components/Home.vue';

const routes: RouteConfig[] = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home }
];
export const router: VueRouter = new VueRouter({
  mode: 'history',
  routes
});
