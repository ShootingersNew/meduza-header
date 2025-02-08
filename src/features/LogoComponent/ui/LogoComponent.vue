<template>
  <div class="logo">
    <IconComponent :width="137" :height="29" :name="EIconNames.Logo" />
    <div class="language text-default">
      <link-component
        :theme="ELinkTheme.Secondary"
        :is-active="selectedLanguage === 'ru'"
        @click="selectLanguage('ru')"
        >Ру</link-component
      ><span class="slash">/</span
      ><link-component
        :theme="ELinkTheme.Secondary"
        :is-active="selectedLanguage === 'eng'"
        @click="selectLanguage('eng')"
        >En</link-component
      >
    </div>
  </div>
</template>

<script lang="ts">
import { IconComponent, LinkComponent } from 'meduza-pet-ui-kit'
import { EIconNames, ELinkTheme } from 'meduza-pet-ui-kit/enums'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'logo-component',
  components: {
    IconComponent,
    LinkComponent,
  },
  setup(props, { emit }) {
    const selectLanguage = (lang: string) => {
      emit('localeChanged', { locale: lang })
    }
    const selectedLanguage = ref('ru')
    return {
      EIconNames,
      selectLanguage,
      selectedLanguage,
      ELinkTheme,
    }
  },
})
</script>

<style scoped lang="styl">

.logo
  display flex
  align-items flex-start
  gap 35px
  .language
    position relative
    bottom -1px
    font-size 18px
    line-height 31px
    display flex
    align-items center
    margin-left 10px
    .slash
      color #F0F0F0
</style>
