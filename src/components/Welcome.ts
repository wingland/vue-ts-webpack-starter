import * as _ from 'lodash';
import Vue from 'vue';
import Component from 'vue-class-component';
import { User } from '../meta/User';

@Component
export class Welcome extends Vue {
  private user: User = new User('John Smith', 'john.smith@email.com');

  private onPressLogin() {
    this.$store.commit('navigator/pushRoute', { name: 'Login'});
  }

  private onPressSignUp() {
    this.$store.commit('navigator/pushRoute', { name: 'SignUp'});
  }

}
