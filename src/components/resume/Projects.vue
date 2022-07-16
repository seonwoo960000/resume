<template>
  <div ref="ref_projects" class="center projects-style">
    <div>
      <div ref="title_projects"
           class="projects-title-style"
           data-aos="fade-down">
        PERSONAL PROJECTS
      </div>
      <intersection-observer @intersection-observed="scroll"/>
      <onu-menu class="project-style"/>
      <not-to-do-list class="project-style" />
    </div>
  </div>
</template>

<script>
import OnuMenu from '@/components/resume/projects/OnuMenu.vue'
import NotToDoList from '@/components/resume/projects/NotToDoList.vue'
import IntersectionObserver from "@/components/utils/IntersectionObserver";

export default {
  name: "Projects",
  components: {
    'onu-menu': OnuMenu,
    'not-to-do-list': NotToDoList,
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
        top: this.$refs.ref_projects.getBoundingClientRect().top + window.scrollY
      })
    }
  }
}
</script>

<style scoped>
.projects-style {
  padding-bottom: 20px;
}

.project-style {
  padding: 20px;
  border-top: dotted;
}

.projects-title-style {
  display: flex;
  justify-content: center;
  padding: 30px;
  font-size: 40px;
  text-align: center;
}
</style>