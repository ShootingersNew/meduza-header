<template>
  <div class="nav-bar">
  </div>
</template>

<script lang="ts">
import { LinkComponent } from 'meduza-pet-ui-kit'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'logo-component',
  components: {
  },
  setup() {
    return {
      LinkComponent
    }
  },
})
</script>

<style scoped lang="styl">

.nav-bar
  display flex
  align-items flex-end
  gap 35px
</style>
