
import 'onsenui/css/onsen-css-components.css';
import 'onsenui/css/onsenui.css';
import Vue from 'vue';
// @ts-ignore
import VueOnsenUI from 'vue-onsenui';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './App.vue';
import { router } from './routes';
// import { store } from './store/store';

Vue.use(VueRouter);
Vue.use(VueOnsenUI);

Vue.use(Vuex);

const app = new Vue({
  el: '#app',
  store: new Vuex.Store({
    modules: {
      navigator: {
        namespaced: true,
        state: {
          stack: [],
          options: {}
        },
        mutations: {
          push(state, page) {
            state.stack.push(page);
          },
          pop(state) {
            if (state.stack.length > 1) {
              state.stack.pop();
            }
          },
          replace(state, page) {
            state.stack.pop();
            state.stack.push(page);
          },
          reset(state, page) {
            state.stack = [page || state.stack[0]];
          },
          options(state, newOptions = {}) {
            state.options = newOptions;
          }
        }
      }
    }
  }),
  router,
  render: h => h(App),
});
