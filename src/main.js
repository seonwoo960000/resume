import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import i18n from "@/plugins/i18n";
import Aos from "aos/src/js/aos";
import store from './store'

Vue.config.productionTip = false
Aos.init({
  delay: 200,
  duration: 1200,
  debounceDelay: 50,
  throttleDelay: 99,
  once: true,
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding window should trigger the animation
})

new Vue({
  vuetify,
  render: h => h(App),
  store,
  i18n
}).$mount('#app')

