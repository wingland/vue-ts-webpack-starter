
import 'onsenui/css/onsen-css-components.css';
import 'onsenui/css/onsenui.css';
import Vue from 'vue';
// @ts-ignore
import VueOnsenUI from 'vue-onsenui';
import VueRouter from 'vue-router';
import App from './App.vue';
import { router } from './routes';

Vue.use(VueRouter);
Vue.use(VueOnsenUI);

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
