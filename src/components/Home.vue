<template>
  <v-ons-page>
      <v-ons-toolbar>
        <div class="center">Welcome</div>
      </v-ons-toolbar>
      <section style="text-align: center;margin:0px 10px">
        <h3>Welcome to App</h3>
        <v-ons-button modifier="large" @click="onPressPushLogin">
          Login
        </v-ons-button>
      </section>
    </v-ons-page>

</template>

<script lang="ts">
export { Home as default } from './Home';
</script>

<style lang="scss">
</style>
