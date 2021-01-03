<template>
  <div
    :class="{ hidden: hidden, error: error }"
    :style="{ width: `${percent}%` }"/>
</template>

<script>
export default {
  data () {
    return {
      hidden: true,
      percent: 0,
      error: false
    }
  },
  methods: {
    start () {
      this.hidden = false
      this.error = false
      this.timer = setInterval(() => {
        this.percent++
      }, 100)
    },
    finish () {
      this.hidden = true
      this.percent = 100
      clearInterval(this.timer)
    },
    fail () {
      this.error = true
      this.percent = 100
    }
  }
}
</script>
