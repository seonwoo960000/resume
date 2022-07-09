import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import Java from "@/components/resume/skills/svgs/JavaIconSvg";
import Javascript from "@/components/resume/skills/svgs/JavascriptSvg";
import Kafka from "@/components/resume/skills/svgs/KafkaSvg";
import MySql from "@/components/resume/skills/svgs/MySqlSvg";
import Spring from "@/components/resume/skills/svgs/SpringSvg";
import VueSvg from "@/components/resume/skills/svgs/VueIconSvg";
import ElasticSearch from "@/components/resume/skills/svgs/ElasticSearchSvg";

const vuetify = new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#0EBEEE',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },
  icons: {
    values: {
      java: {
        component: Java
      },
      javascript: {
        component: Javascript
      },
      kafka: {
        component: Kafka
      },
      mysql: {
        component: MySql
      },
      spring: {
        component: Spring
      },
      vue: {
        component: VueSvg
      },
      elasticSearch: {
        component: ElasticSearch
      }
    }
  }
})

Vue.use(Vuetify);

export default vuetify
