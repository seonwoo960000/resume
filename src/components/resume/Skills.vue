<template>
  <div ref="ref_skills" class="center">
    <div>
      <div class="title-style"
           data-aos="fade-down">
        USED SKILLS
      </div>
      <intersection-observer @intersection-observed="scroll" />
      <div class="center">
        <v-row class="row-style">
          <v-col sm="6" md="4"
                 style="text-align: center"
                 v-for="({icon, name, details}, idx) in svgs"
                 :key="idx">
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs"
                        v-on="on"
                        data-aos="flip-up"
                        data-aos-offset="120"
                        :data-aos-delay="100*(idx+1)"
                        class="icon-style">
                  {{ icon }}
                </v-icon>
              </template>
              <div class="tooltip-text-style">
                <div class="name-style">{{ name }}</div>
                <ul>
                  <li v-for="(detail, idx_detail) in details" :key="idx_detail">
                    {{ detail }}
                  </li>
                </ul>
              </div>
            </v-tooltip>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>

import IntersectionObserver from "@/components/utils/IntersectionObserver";

export default {
  name: "Skills",
  components: {
    'intersection-observer': IntersectionObserver
  },
  data: () => ({
    svgs: [
      {name: 'java', icon: '$vuetify.icons.values.java', details: ['java 8', 'Object Oriented Programming', 'Functional Programming', 'Design Patterns']},
      {name: 'spring', icon: '$vuetify.icons.values.spring', details: ['spring boot', 'spring web', 'spring batch', 'spring gateway', 'spring cloud']},
      {name: 'javascript', icon: '$vuetify.icons.values.javascript', details: ['ES6', 'Vue', 'Vuetify', 'Axios']},
      {name: 'mysql', icon: '$vuetify.icons.values.mysql', details: ['Query optimization', 'Detecting bottleneck']},
      {name: 'kafka', icon: '$vuetify.icons.values.kafka', details: ['Kafka with Spring']},
      {name: 'elastic search', icon: '$vuetify.icons.values.elasticSearch', details: ['Monitoring with ELK stack and Zipkin']}
    ],
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
        top: this.$refs.ref_skills.getBoundingClientRect().top + window.scrollY
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

.icon-style {
  margin: 5%;
  padding: 1rem;
  border: solid grey 4px;
  border-radius: 4px;
}

.row-style {
  padding: 0 64px;
}

.tooltip-text-style {
  padding: 0.2rem;
}

.name-style {
  text-transform: uppercase;
  text-align: center;
  size: 2rem;
}

</style>