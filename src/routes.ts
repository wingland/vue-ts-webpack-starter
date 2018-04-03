import VueRouter, { RouteConfig } from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';

const routes: RouteConfig[] = [
  { path: '/', redirect: '/home'},
  { path: '/home', component: Home, name: 'Home' },
  { path: '/login', component: Login, name: 'Login' }];
export const router: VueRouter = new VueRouter({
  mode: 'history',
  routes
});
