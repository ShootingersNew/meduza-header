<template>
  <div class="nav-bar">
    <LinkComponent
      v-for="link in NavBarLinks"
      :is-active="link.title === 'NavBar.home'"
      :key="link.title"
      :theme="ELinkTheme.Secondary"
      @click="goTo('auth')"
    >
      {{ t(link.title) }}
    </LinkComponent>
  </div>
</template>

<script lang="ts">
import { LinkComponent } from 'meduza-pet-ui-kit'
import { ELinkTheme } from 'meduza-pet-ui-kit/enums'
import { defineComponent } from 'vue'
import { NavBarLinks } from '../model'
import { useI18n } from 'vue-i18n'
import { useCustomRoute } from 'host/useCustomRoute'
import NavigationService from 'host/NavigationService'

export default defineComponent({
  name: 'logo-component',
  components: {
    LinkComponent,
  },
  setup() {
    const { t } = useI18n()
    const { route } = useCustomRoute()
    const goTo = (name: string) => {
      NavigationService.navigate({ name })
    }
    return {
      NavBarLinks,
      ELinkTheme,
      route,
      t,
      goTo,
    }
  },
})
</script>

<style scoped lang="styl">

.nav-bar
  display flex
  align-items flex-end
  gap 35px
  font-size 18px
  line-height 31px
</style>
