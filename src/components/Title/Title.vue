<template>
  <component
    class="title"
    :is="tag"
    :class="`title--${tag}`"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const tagValidator = ['h1', 'h2', 'h3', 'h4']

export default defineComponent({
  name: 'Title',
  props: {
    tag: {
      type: String,
      default: 'h1',
      validator: (prop: string) => tagValidator.includes(prop),
    },
  },
})
</script>

<style lang="sass">
.title
  margin: 0
</style>
