<template>
  <button
    data-button
    class="button"
    :class="[
      `button--${type}`,
      `button--${size}`,
      outlined ? 'button--outlined' : '',
      reversed ? 'button--reversed' : '',
    ]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <SvgIcon
      class="button__icon"
      :icon="icon"
      v-if="icon"
    />
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { sizesValidator, typesValidator } from '@/scripts/validators'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'

export default defineComponent({
  name: 'Button',
  emits: ['click'],
  props: {
    icon: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    outlined: { type: Boolean, default: false },
    reversed: { type: Boolean, default: false },
    size: {
      type: String,
      default: 'medium',
      validator: (prop: string) => sizesValidator(prop),
    },
    type: {
      type: String,
      default: 'primary',
      validator: (prop: string) => typesValidator(prop),
    },
  },
  components: {
    SvgIcon,
  },
})
</script>

<style lang="sass">
$button-color: white
$button-color-disabled: #555
$button-bkgrd-disabled: #BBB
$button-size-small: .8rem
$button-size-medium: 1rem
$button-size-large: 1.2rem
$button-icon-margin-small: 5px
$button-icon-margin-medium: 5px
$button-icon-margin-large: 15px

.button
  $self: &
  border: none
  cursor: pointer
  background: none
  display: inline-flex
  align-items: center

  &:disabled
    cursor: not-allowed
    color: $button-color-disabled
    border: 1px solid $button-bkgrd-disabled
    background-color: $button-bkgrd-disabled

  &:hover:enabled
    filter: brightness(1.5)

  /* size */
  &--small
    padding: 6px 12px
    font-size: $button-size-small

    #{ $self }__icon
      width: $button-size-small
      height: $button-size-small
      margin-right: $button-icon-margin-small

  &--medium
    padding: 10px 18px
    font-size: $button-size-medium

    #{ $self }__icon
      width: $button-size-medium
      height: $button-size-medium
      margin-right: $button-icon-margin-medium

  &--large
    padding: 14px 20px
    font-size: $button-size-large

    #{ $self }__icon
      width: $button-size-large
      height: $button-size-large
      margin-right: $button-icon-margin-large

  /* type */
  &--primary
    color: $button-color
    border: 1px solid $primary
    background-color: $primary

    #{ $self }__icon
      fill: $button-color

  &--secondary
    color: $button-color
    border: 1px solid $secondary
    background-color: $secondary

    #{ $self }__icon
      fill: $button-color

  &--tertiary
    color: $button-color
    border: 1px solid $tertiary
    background-color: $tertiary

    #{ $self }__icon
      fill: $button-color

  /* outlined */
  &--outlined

    &#{ $self }--primary
      color: $primary
      border: 1px solid $primary
      background-color: $button-color

      #{ $self }__icon
        fill: $secondary

    &#{ $self }--secondary
      color: $secondary
      border: 1px solid $secondary
      background-color: $button-color

      #{ $self }__icon
        fill: $secondary

    &#{ $self }--tertiary
      color: $tertiary
      border: 1px solid $tertiary
      background-color: $button-color

      #{ $self }__icon
        fill: $tertiary

  /* reversed */
  &--reversed
    flex-direction: row-reverse

    &#{ $self }--small

      #{ $self }__icon
        margin-right: 0
        margin-left: $button-icon-margin-small

    &#{ $self }--medium

      #{ $self }__icon
        margin-right: 0
        margin-left: $button-icon-margin-medium

    &#{ $self }--large

      #{ $self }__icon
        margin-right: 0
        margin-left: $button-icon-margin-large
</style>
