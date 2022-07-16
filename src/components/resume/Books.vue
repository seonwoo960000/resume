<template>
  <div ref="ref_books" class="center">
    <div>
      <div ref="title_book"
           class="title-style"
           data-aos="fade-down">
        BOOKS I've read or reading
      </div>
      <intersection-observer @intersection-observed="scroll"/>
      <div class="iframe-style"
           data-aos="zoom-in"
           data-aos-delay="100">
        <iframe src="https://drive.google.com/file/d/1aPPQMEB44_MGUINWtYHx7sUHqtlCulTT/preview"
                style="width: 100%; height: 480px"
                allow="autoplay" />
      </div>
    </div>
  </div>
</template>

<script>
import IntersectionObserver from "@/components/utils/IntersectionObserver";

export default {
  name: "Books",
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
        top: this.$refs.ref_books.getBoundingClientRect().top + window.scrollY
      })
    }
  }
}
</script>

<style scoped>

.title-style {
  display: flex;
  justify-content: center;
  padding: 30px;
  font-size: 40px;
  text-align: center;
}

.iframe-style {
  margin: 0 32px;
}

</style>