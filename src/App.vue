<template>
  <HeaderComponent @locale-changed="changeLocaleHandler" />
</template>

<script lang="ts">
import 'meduza-pet-ui-kit/styles'
import 'meduza-pet-ui-kit/variables'
import { defineComponent } from 'vue'
import HeaderComponent from './widgets/Header/ui/HeaderComponent.vue'
import I18nService from 'host/I18nService'
import en from './shared/config/i18n/en'
import ru from './shared/config/i18n/ru'

export default defineComponent({
  name: 'App',
  components: {
    HeaderComponent,
  },
  setup() {
    I18nService.addLocales({
      en,
      ru,
    })
    const changeLocaleHandler = (lang: { locale: string }) => {
      I18nService.changeLocale(lang.locale)
    }
    return {
      changeLocaleHandler,
    }
  },
})
</script>
<style>
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
