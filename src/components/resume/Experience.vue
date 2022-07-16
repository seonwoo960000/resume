<template>
  <div ref="ref_experience" class="center">
    <div>
      <v-row ref="title_experience" class="experience-title-style">
        <div data-aos="fade-down">EXPERIENCE</div>
      </v-row>
      <intersection-observer @intersection-observed="scroll"/>
      <v-row class="row-style">
        <v-col cols="4"
               class="title-box-style">
          <div data-aos="fade-right">
            <div class="title-style">{{ $t("message.experience.second.title") }}</div>
            <div class="title-style">{{ $t("message.experience.second.title-2") }}</div>
            <div class="subtitle-style">{{ $t("message.experience.second.subtitle") }}</div>
          </div>
        </v-col>
        <v-col cols="8"
               data-aos="fade-left"
               class="description-text-style description-style">
          {{ $t("message.experience.second.description") }}
        </v-col>
      </v-row>
      <v-row class="row-style last-row-style">
        <v-col cols="4"
               class="title-box-style">
          <div data-aos="fade-right">
            <div class="title-style">{{ $t("message.experience.first.title") }}</div>
            <div class="subtitle-style">{{ $t("message.experience.first.subtitle") }}</div>
          </div>
        </v-col>
        <v-col cols="8"
               data-aos="fade-left"
               class="description-text-style description-style">
          {{ $t("message.experience.first.description") }}
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import IntersectionObserver from "@/components/utils/IntersectionObserver";

export default {
  name: "Experience",
  components: {
    'intersection-observer': IntersectionObserver
  },
  data: () => ({
    scrolled: false
  }),
  methods: {
    scroll() {
      if (this.scrolled) return
      this.scrolled = true
      window.scrollTo({
        behavior: 'smooth',
        top: this.$refs.ref_experience.getBoundingClientRect().top + window.scrollY
      })
    }
  }
}
</script>

<style scoped>

.row-style {
  padding: 20px;
  border-top: dotted;
}

.last-row-style {
  border-bottom: dotted;
}

.experience-title-style {
  display: flex;
  justify-content: center;
  padding: 30px;
  font-size: 40px;
  text-align: center;
}

.title-box-style {
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title-style {
  font-size: 30px;
  text-align: center;
}

.subtitle-style {
  margin-top: 20px;
  font-size: 20px;
  text-align: center;
}

.description-style {
  padding: 60px 20px;
  word-break: keep-all;
}

</style>