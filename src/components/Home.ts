import * as _ from 'lodash';
import Vue from 'vue';
import Component from 'vue-class-component';
import { OnsVue } from '../common/ons/OnsVue';
import { User } from '../meta/User';

@Component
export class Home extends OnsVue {
  private user: User = new User('John Smith', 'john.smith@email.com');

  private title: string =  _.join(['Hello', 'webpack'], ' ');

  private onBtnClicked() {
    this.$ons.notification.alert(`Hello, ${this.user.email}!`);
  }
}
