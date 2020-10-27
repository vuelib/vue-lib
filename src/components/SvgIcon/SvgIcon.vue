<template>
  <svg
    class="svg-icon"
    aria-hidden="true"
    :class="`svg-icon--${type}`"
  >
    <use
      class="svg-icon__content"
      :xlink:href="`#icon-${icon}`"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const typeValidator = ['primary']

export default defineComponent({
  name: 'SvgIcon',
  props: {
    icon: { type: String, required: true },
    type: {
      type: String,
      default: 'primary',
      validator: (prop: string) => typeValidator.includes(prop),
    },
  },
})
</script>

<style lang="sass">
.svg-icon
  fill: black
  width: 1.5rem
  height: 1.5rem
  overflow: hidden
</style>
