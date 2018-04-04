import VueRouter, { RouteConfig } from 'vue-router';
import Login from './components/Login.vue';
import SignUp from './components/SignUp.vue';
import Welcome from './components/Welcome.vue';

const routes: RouteConfig[] = [
  { path: '/', redirect: '/welcome'},
  { path: '/welcome', component: Welcome, name: 'Welcome',
  children: [
    { path: 'login', component: Login, name: 'Login' },
    { path: 'signup', component: SignUp, name: 'SignUp' }
  ]
}];
export const router: VueRouter = new VueRouter({
  mode: 'history',
  routes
});
