<template>
  <div>
    <div @click="mit">CLICK ME</div>
  </div>
</template>

<script lang="ts">
import 'meduza-pet-ui-kit/styles'
import 'meduza-pet-ui-kit/variables'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const mit = () => {
      console.log(window.eventBus)
      if (!window.eventBus) return
      console.log('cringe')
      const emitter = window.eventBus
      emitter.emit('localeChanged', { locale: 'mit' })
      console.log('emit')
    }
    return {
      mit,
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
