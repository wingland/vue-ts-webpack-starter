<template>
  <v-ons-page>
      <v-ons-toolbar>
        <div class="center">My App</div>
      </v-ons-toolbar>
      <section style="text-align: center;margin:0px 10px">
        <h3>Welcome to App</h3>
        <v-ons-button style="margin-bottom:10px" modifier="large" @click="onPressLogin">
          Login
        </v-ons-button>
        <v-ons-button modifier="outline large" @click="onPressSignUp">
          Sign Up
        </v-ons-button>
      </section>
    </v-ons-page>

</template>

<script lang="ts">
export { Welcome as default } from './Welcome';
</script>

<style lang="scss">
</style>
