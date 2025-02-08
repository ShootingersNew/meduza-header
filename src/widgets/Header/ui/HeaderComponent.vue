<template>
  <div class="header">
    <logo-component @locale-changed="(lang) => $emit('locale-changed', lang)"></logo-component>
    <nav-bar-component></nav-bar-component>
    <user-nav-component></user-nav-component>
  </div>
</template>

<script lang="ts">
import LogoComponent from '@/features/LogoComponent/ui/LogoComponent.vue'
import NavBarComponent from '@/features/NavBar/ui/NavBarComponent.vue'
import UserNavComponent from '@/features/UserNav/ui/UserNavComponent.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HeaderComponent',
  components: {
    LogoComponent,
    NavBarComponent,
    UserNavComponent,
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
