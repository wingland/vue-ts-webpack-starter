
import 'onsenui/css/onsen-css-components.css';
import 'onsenui/css/onsenui.css';
import Vue from 'vue';
// import VueCookie from 'vue-cookie';
// @ts-ignore
import VueOnsenUI from 'vue-onsenui';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './App.vue';
import { router } from './routes';
import { store } from './store/store';

Vue.use(VueRouter);
Vue.use(VueOnsenUI);
// Vue.use(VueCookie);

Vue.use(Vuex);

const app = new Vue({
  el: '#app',
  store: new Vuex.Store(store),
  router,
  render: h => h(App),
});
