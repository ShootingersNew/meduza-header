<template>
  <div class="user-nav">
    <IconComponent
      class="user-nav__icon"
      :width="9"
      :height="6"
      :name="EIconNames.Arrow"
    ></IconComponent>
    <div class="user-nav__profile">
      <img class="user-nav__avatar" :src="avatarUrl" alt="profile" />
      <span class="user-nav__name">John Doe</span>
    </div>
  </div>
</template>

<script lang="ts">
import { IconComponent } from 'meduza-pet-ui-kit'
import { EIconNames } from 'meduza-pet-ui-kit/enums'
import { defineComponent } from 'vue'
import avatarUrl from './avatar.jpg' // путь до картинки внутри src/assets

export default defineComponent({
  name: 'logo-component',
  components: {
    IconComponent,
  },
  setup() {
    return {
      EIconNames,
      avatarUrl,
    }
  },
})
</script>

<style scoped lang="styl">

.user-nav
  display flex
  align-items flex-end
  gap 35px
  font-size 18px
  gap 15px
  height 31px
  &__icon
    position relative
    bottom 10px
    cursor pointer
  &__profile
    display flex
    align-items flex-start
    gap 14px
  &__avatar
    width 23px
    height 23px
    position relative
    bottom -5px
  &__name
    line-height 31px
</style>
