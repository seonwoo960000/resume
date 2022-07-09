<template>
  <div class="center projects-style">
    <div style="">
      <div class="projects-title-style" data-aos="fade-down">PERSONAL PROJECTS</div>
      <onu-menu class="project-style"/>
      <not-to-do-list class="project-style" />
    </div>
  </div>
</template>

<script>
import OnuMenu from '@/components/resume/projects/OnuMenu.vue'
import NotToDoList from '@/components/resume/projects/NotToDoList.vue'

export default {
  name: "Projects",
  components: {
    'onu-menu': OnuMenu,
    'not-to-do-list': NotToDoList
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