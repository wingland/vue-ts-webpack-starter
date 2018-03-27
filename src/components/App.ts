import * as _ from 'lodash';
import Vue from 'vue';
import Component from 'vue-class-component';
import { User } from '../meta/User';

@Component
export class App extends Vue {
  private user: User = new User('John Smith', 'john.smith@email.com');

  private title: string =  _.join(['Hello', 'webpack'], ' ');

}
