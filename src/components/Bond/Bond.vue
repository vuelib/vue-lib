<template>
  <component
    data-bond
    class="bond"
    :href="to"
    :to="!isExternal ? to : undefined"
    :is="isExternal ? 'a' : 'router-link'"
    :target="isExternal ? '_blank' : '_self'"
    :class="[
      type ? `bond--${type}` : '',
      { 'bond--reversed': reversed },
    ]"
  >
    <SvgIcon
      class="bond__icon"
      :icon="icon"
      v-if="icon"
    />
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { typesValidator } from '@/scripts/validators'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'

export default defineComponent({
  name: 'Bond',
  props: {
    icon: { type: String, default: '' },
    reversed: { type: Boolean, default: false },
    to: { type: [Object, String], required: true },
    type: {
      type: String,
      default: 'primary',
      validator: (prop: string) => typesValidator(prop),
    },
  },
  components: {
    SvgIcon,
  },
  setup(props) {
    /**
     * @desc Bond redirection
     * string if external link (ex. https://www.google.com/)
     * object if internal link (ex. { name: index, path: '/' }
    */
    const isExternal = computed<boolean>(() => typeof props.to === 'string')

    return {
      isExternal,
    }
  },
})
</script>

<style lang="sass">
.bond
  $self: &
  align-items: center
  flex-direction: row
  display: inline-flex
  text-decoration: none

  &:hover
    filter: brightness(1.5)
    text-decoration: underline

  &__icon
    width: 1rem
    height: 1rem
    margin-right: 5px

  &--reversed
    flex-direction: row-reverse

    #{ $self }__icon
      margin-right: 0
      margin-left: 5px

  &--primary
    color: $primary

    #{ $self }__icon
      fill: $primary

  &--secondary
    color: $secondary

    #{ $self }__icon
      fill: $secondary

  &--tertiary
    color: $tertiary

    #{ $self }__icon
      fill: $tertiary
</style>
