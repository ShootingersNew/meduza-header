<template>
  <div>
    <div @click="mit">CLICK ME</div>
    <HeaderComponent />
    <TestComponent />
  </div>
</template>

<script lang="ts">
import 'meduza-pet-ui-kit/styles'
import 'meduza-pet-ui-kit/variables'
import { defineComponent } from 'vue'
import TestComponent from './TestComponent.vue'
import HeaderComponent from './widgets/Header/ui/HeaderComponent.vue'
export default defineComponent({
  name: 'App',
  components: {
    HeaderComponent,
    TestComponent,
  },
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
