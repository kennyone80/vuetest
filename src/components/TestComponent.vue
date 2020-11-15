<template>
  <div>
    <div>
      Hello, World!
    </div>
    <div>
      <child testProp="some-value" />
    </div>
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  components: { Child }
}
</script>
