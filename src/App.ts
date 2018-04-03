import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export class App extends Vue {
  private get pageStack(): any[] {
    return this.$store.state.navigator.stack;
  }
  private goBack() {
    // Go to the parent route component
    // this.$router.push({ name: this.$route.matched[this.$route.matched.length - 2].name });

    this.$router.go(-1); // Could work but might be misleading in some situations
    this.$store.commit('navigator/pop');
  }

  private created() {
    this.$store.commit('navigator/push', this.$route.matched[this.$route.matched.length - 1].components.default);
    // this.$router.beforeEach((to, from, next) => {
    //   if (to.matched.length > 0) {
    //     this.pageStack.push(to.matched[to.matched.length - 1].components.default);
    //   }
    //   next();
    // });
  }
}
