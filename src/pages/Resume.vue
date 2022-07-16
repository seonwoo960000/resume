<template>
  <div>
    <locale />
    <introduction class="dark-background-color full-height" />
    <experience class="light-background-color full-height" />
    <works class="dark-background-color full-height"/>
    <projects class="light-background-color full-height"/>
    <skills class="dark-background-color full-height"/>
    <books class="light-background-color full-height"/>
  </div>
</template>

<script>
import Locale from "@/components/utils/locale";
import Introduction from "@/components/resume/Introduction";
import Experience from "@/components/resume/Experience";
import Projects from "@/components/resume/Projects";
import Skills from "@/components/resume/Skills";
import Books from "@/components/resume/Books";
import Works from "@/components/resume/Works";

export default {
  name: "Resume",
  components: {
    'locale': Locale,
    'introduction': Introduction,
    'experience': Experience,
    'works': Works,
    'projects': Projects,
    'skills': Skills,
    'books': Books
  }
}
</script>

<style>

.full-height {
  min-height: 100vh;
}

.partial-height {
  min-height: 90vh;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.horizontal-center {
  display: flex;
  justify-content: center;
}

.vertical-center {
  display: flex;
  align-items: center;
}

.dark-background-color {
  background-color: #000000;
}

.light-background-color {
  background-color: #1D1F20;
}

</style>