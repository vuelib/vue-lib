<template>
  <svg
    data-svg
    class="svg-icon"
    aria-hidden="true"
    :class="`svg-icon--${type}`"
  >
    <use
      data-use
      class="svg-icon__content"
      :xlink:href="`#icon-${icon}`"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { typesValidator } from '@/scripts/validators'

export default defineComponent({
  name: 'SvgIcon',
  props: {
    icon: { type: String, required: true },
    type: {
      type: String,
      default: 'primary',
      validator: (prop: string) => typesValidator(prop),
    },
  },
})
</script>

<style lang="sass">
.svg-icon
  width: 100%
  height: 100%

  &--primary
    fill: $primary

  &--secondary
    fill: $secondary

  &--tertiary
    fill: $tertiary
</style>
