<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        height="10"
    >
    </v-app-bar>

    <v-main class="main-style">
      <resume class="font"/>
    </v-main>
  </v-app>
</template>

<script>
import Resume from "@/pages/Resume";

export default {
  name: 'App',
  components: {
    'resume': Resume
  }
};
</script>

<style>
.dot-style {
  color: #0EBEEE;
}

.description-text-style {
  font-family: 'Roboto', sans-serif;
  word-break: keep-all;
  font-weight: 500;
  line-height: 200%;
  font-size: 16px;
}

.main-style {
  background-color: #1D1F20;
}

.font {
  font-family: 'Candal', sans-serif !important;
}
</style>