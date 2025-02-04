<template>
  <div class="header">
    <logo-component></logo-component>
    <div class="header__nav">CRINGE CRINGE KEK LOL</div>
    <div class="header__user">user</div>
  </div>
</template>

<script lang="ts">
import LogoComponent from '@/features/LogoComponent/ui/LogoComponent.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderComponent',
  components: {
    LogoComponent,
  },
  onMounted() {
    console.log('Header component mounted')
  },
})
</script>

<style scoped lang="styl">
.header
  display flex
  justify-content space-between
  align-items center
  padding 16px 94px 21px 50px
</style>
