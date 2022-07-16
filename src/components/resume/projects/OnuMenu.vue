<template>
  <v-row>
    <v-col :cols="$vuetify.breakpoint.mdAndUp ? 4 : 12"
           class="vertical-center horizontal-center"
           data-aos-anchor-placement="top-center"
           data-aos="fade-right">
      <div>
        <div class="title-style">ONU MENU</div>
        <v-img
            :src="require('@/assets/images/onu-logo.png')"
            max-height="100"
            contain
        />
      </div>
    </v-col>
    <v-col :cols="$vuetify.breakpoint.mdAndUp ? 8 : 12"
           class="description-style description-text-style"
           data-aos="fade-left">
      <div>
        <div>
          <div class="subtitle-style">{{ $t("message.projects.onuMenu.title") }}</div>
          <div>
            <div class="function-title-style">{{ $t("message.projects.onuMenu.functions.title") }}</div>
            <ul>
              <li v-for="idx in 5"
                  :key="idx"
                  data-aos="fade-left"
                  :data-aos-delay="100*idx"
              >
                {{ $t(`message.projects.onuMenu.functions.f${idx}`) }}
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div class="function-title-style">{{ $t("message.projects.onuMenu.skills.title") }}</div>
          <ul>
            <li v-for="idx in 2"
                :key="idx"
                data-aos="fade-left"
                :data-aos-delay=100*idx>
              {{ $t(`message.projects.onuMenu.skills.s${idx}`) }}
            </li>
          </ul>
        </div>

        <div class="function-title-style">
          <div><a href="https://onu-menu.web.app/">{{ $t("message.projects.onuMenu.links.l1") }}</a></div>
          <div><a href="https://onu-menu-internal.web.app/">{{ $t("message.projects.onuMenu.links.l2") }}</a></div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "OnuMenu"
}
</script>

<style scoped>

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