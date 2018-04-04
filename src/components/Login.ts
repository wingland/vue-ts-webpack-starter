import Vue from 'vue';
import Component from 'vue-class-component';

interface LoginUser {
  username: string;
  password: string;
}
@Component({

})
export class Login extends Vue {
  private title: string = 'Login Works!';
  private user: LoginUser = {
    username: '',
    password: ''
  };

  private onPressSignUp() {
    this.$store.commit('navigator/pushRoute', { name: 'SignUp'});
  }

  private onLogin() {
    // TODO:cookie saving and
  }
}
