<template>
  <div class="center" ref="ref_title">
    <div>
      <div class="projects-title-style"
           data-aos="fade-down">
        WORKS
      </div>
      <intersection-observer @intersection-observed="scroll" />
    </div>
  </div>
</template>

<script>
import IntersectionObserver from "@/components/utils/IntersectionObserver";

export default {
  name: "Works",
  components: {
    'intersection-observer': IntersectionObserver
  },
  data: () => ({
    scrolled: false
  }),
  methods: {
    scroll() {
      if (this.scrolled) {
        return
      }
      this.scrolled = true
      window.scrollTo({
        behavior: 'smooth',
        top: this.$refs.ref_title.getBoundingClientRect().top + window.scrollY
      })
    }
  }
}
</script>

<style scoped>
.projects-title-style {
  text-align: center;
  padding: 30px;
  font-size: 40px;
  text-align: center;
}
</style>