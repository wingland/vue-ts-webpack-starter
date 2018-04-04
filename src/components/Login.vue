<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button>Back</v-ons-back-button>
      </div>
      <div class="center">Login</div>
    </v-ons-toolbar>
    <v-ons-list>
      <v-ons-list-item>
        <div class="center">
          <v-ons-input placeholder="Username" float
            v-model="user.name">
          </v-ons-input>
        </div>
      </v-ons-list-item>
      <v-ons-list-item>
        <div class="center">
          <v-ons-input placeholder="Password" float
            v-model="user.password">
          </v-ons-input>
        </div>
      </v-ons-list-item>
    </v-ons-list>

    <section style="text-align: center;margin:10px">
        <v-ons-button modifier="large" @click="onLogin" >Login</v-ons-button>
        <p><a href="#" style="margin-top:5px" @click.prevent="onPressSignUp()"> New user to the App? </a></p>
    </section>
  </v-ons-page>
</template>

<script lang="ts">
export { Login as default } from './Login';

</script>

<style lang="scss">
</style>
