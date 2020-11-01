<template>
  <div class="progress-bar">
    <span
      data-progression
      class="progress-bar__progression"
      :style="{ width: `${progression}%`}"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProgressBar',
  props: {
    progression: {
      default: 0,
      type: Number,
      validator: (prop: number) => prop >= 0 && prop <= 100,
    },
  },
})
</script>

<style lang="sass">
.progress-bar
  height: 10px
  background-color: $background

  &__progression
    height: 100%
    display: block
    background-color: $primary
</style>
