<template>
  <div ref="triggerDiv"></div>
</template>

<script>
export default {
  name: "IntersectionObserver",
  data() {
    return {
      observer: null,
      option: {
        root: null,
        threshold: 1
      }
    }
  },
  methods: {
    handleIntersect: function (target) {
      if (target.isIntersecting) {
        this.$emit(`intersection-observed`)
      }
    }
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      this.handleIntersect(entries[0])
    }, this.option)
    this.observer.observe(this.$refs.triggerDiv)
  }
}
</script>

<style scoped>

</style>