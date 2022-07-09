<template>
  <div class="center">
    <v-row>
      <v-col :cols="$vuetify.breakpoint.mdAndUp ? 6 : 12"
             data-aos="fade-right">
        <div class="title-style">
          {{ $t("message.introduction.title") }}
        </div>
        <div class="subtitle-style">
<!--          <span class="dot-style">.</span>-->
          {{ $t("message.introduction.subtitle") }}
          <span class="dot-style">.</span>
        </div>
      </v-col>
      <v-col :cols="$vuetify.breakpoint.mdAndUp ? 6 : 12"
             class="description-style description-text-style vertical-center"
             :class="$vuetify.breakpoint.mdAndDown ? 'text-center' : ''"
             data-aos="fade-left">
        <div>{{ $t("message.introduction.description") }}</div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Introduction"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Candal&display=swap');

.title-style {
  font-size: 80px;
  text-align: center;
}

.subtitle-style {
  margin-top: 20px;
  font-size: 20px;
  text-align: center;
}

.description-style {
  padding: 60px;
}

</style>