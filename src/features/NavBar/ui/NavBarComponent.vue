<template>
  <div class="nav-bar">
    <LinkComponent
      v-for="link in NavBarLinks"
      :is-active="link.title === 'NavBar.home'"
      :key="link.title"
      :theme="ELinkTheme.Secondary"
      to="#"
    >
      {{ t(link.title) }}
    </LinkComponent>
  </div>
</template>

<script lang="ts">
import { LinkComponent } from 'meduza-pet-ui-kit'
import { ELinkTheme } from 'meduza-pet-ui-kit/enums'
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import en from '../i18n/en'
import ru from '../i18n/ru'
import { NavBarLinks } from '../model'
export default defineComponent({
  name: 'logo-component',
  components: {
    LinkComponent,
  },
  setup() {
    const { t } = useI18n({
      useScope: 'global',
      messages: {
        en,
        ru,
      },
    })
    return {
      NavBarLinks,
      ELinkTheme,
      t,
    }
  },
})
</script>

<style scoped lang="styl">

.nav-bar
  display flex
  align-items flex-end
  gap 28px
  font-size 18px
  line-height 31px
</style>
