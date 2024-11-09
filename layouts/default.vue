<template>
  <v-app>
    <DefaultHeader />
    <v-main class="d-flex align-center">
      <v-container>
        <slot />
      </v-container>
    </v-main>
    <DefaultFooter />
  </v-app>
</template>

<style lang="scss">
.v-application {
  // background: rgb(36, 31, 31);
  background: #1B263B;
}
</style>
