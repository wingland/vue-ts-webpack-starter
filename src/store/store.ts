import { StoreOptions } from 'vuex';
import { router } from './../routes';

export const store: StoreOptions<any> = {
  modules: {
    navigator: {
      namespaced: true,
      state: {
        stack: [],
        routes: [],
        options: {}
      },
      mutations: {
        push(state, page) {
          if (page instanceof Array) {
            state.stack = [...state.stack, ...page];
          } else {
            state.stack.push(page);
          }
        },
        pushRoute(state, location) {
          router.push(location, (to: any) => {
            if (to.matched.length > 0) {
               state.stack.push(to.matched[to.matched.length - 1].components.default);
            }
          });
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
};
