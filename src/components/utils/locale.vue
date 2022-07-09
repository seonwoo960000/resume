<template>
  <div>
    <v-menu right >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            icon
            fab
            fixed
            right
            color="white"
            class="button-style"
            v-bind="attrs"
            v-on="on"
        >
          <v-icon>mdi-web</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
            v-for="(desc, locale, i) in langs"
            :key="i"
            @click="changeLocale(locale)">
          <v-list-item-title>{{ desc }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: 'locale',
  data() {
    return {
      langs: {
        'en': 'English',
        'ko': 'Korean'
      }
    }
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale
    }
  }
}
</script>

<style scoped>

.button-style {
  margin: 4px;
  background: rgba(196, 196, 196, 0.1);
  backdrop-filter: blur(4px);
}
</style>