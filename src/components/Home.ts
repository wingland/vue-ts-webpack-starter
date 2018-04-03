import * as _ from 'lodash';
import Vue from 'vue';
import Component from 'vue-class-component';
import { Login } from '../components/Login';
import { User } from '../meta/User';

@Component
export class Home extends Vue {
  private user: User = new User('John Smith', 'john.smith@email.com');

  private onPressPushLogin() {
    this.$router.push('/login');
    this.$store.commit('navigator/push', Login);
  }
}
