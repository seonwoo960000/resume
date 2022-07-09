<template>
  <v-row>
    <v-col :cols="$vuetify.breakpoint.mdAndUp ? 4 : 12"
           data-aos="fade-right">
      <div class="title-style">NOT TO DO LIST</div>
      <v-img
          :src="require('@/assets/images/not-to-do-list.png')"
          class="img-style"
          contain
      />
    </v-col>
    <v-col :cols="$vuetify.breakpoint.mdAndUp ? 8 : 12"
           data-aos="fade-left"
           class="description-style description-text-style">
      <div>
        <div class="subtitle-style">{{ $t("message.projects.notToDoList.title") }}</div>
        <div>
          <div class="function-title-style">{{ $t("message.projects.notToDoList.functions.title") }}</div>
          <ul>
            <li v-for="idx in 5"
                :key="idx"
                data-aos="fade-left"
                :data-aos-delay=100*idx>
              {{ $t(`message.projects.notToDoList.functions.f${idx}`) }}
            </li>
          </ul>

          <div class="function-title-style">{{ $t("message.projects.notToDoList.skills.title") }}</div>
          <ul>
            <li v-for="idx in 2"
                :key="idx"
                data-aos="fade-left"
                :data-aos-delay=100*idx>
              {{ $t(`message.projects.notToDoList.skills.s${idx}`) }}
            </li>
          </ul>

          <div class="function-title-style">
            <a href="https://seonwoo960000.github.io/not-to-do-list/">Links</a>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "NotToDoList"
}
</script>

<style scoped>

.img-style {
  max-width: min(400px, 80%);
  margin: auto;
}

.title-style {
  font-size: 30px;
  margin: 20px;
  text-align: center;
}

.subtitle-style {
  font-size: 20px;
}

.description-style {
  display: flex;
  padding: 20px 40px;
  align-items: center;
  height: 100%;
}

.function-title-style {
  margin: 20px 0 10px 0;
}

</style>