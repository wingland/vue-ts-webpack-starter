<template>
  <v-ons-page>
      <v-ons-toolbar>
        <div class="center">{{title}}</div>
      </v-ons-toolbar>
      <p style="text-align: center">
        <v-ons-button @click="onBtnClicked">
          Say Hello
        </v-ons-button>
      </p>
    </v-ons-page>

</template>

<script lang="ts">
export { Home as default } from './Home';
</script>

<style lang="scss">
</style>
