<template>
  <component
    data-bond
    class="bond"
    :to="!isExternal ? to : undefined"
    :is="isExternal ? 'a' : 'router-link'"
    :target="isExternal ? '_blank' : '_self'"
    :href="isExternal ? to : routeVue.path"
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
import router from '@/router'
import { computed, defineComponent } from 'vue'
import { typesValidator } from '@/scripts/validators'
import { RouteLocation, _RouteLocationBase } from 'vue-router'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'

export default defineComponent({
  name: 'Bond',
  props: {
    icon: { type: String, default: '' },
    reversed: { type: Boolean, default: false },
    to: {
      required: true,
      type: [Object, String],
      validator: (prop: string|_RouteLocationBase) => {
        if (typeof prop === 'string') return true
        if (typeof prop === 'object') return Object.keys(prop).some((key) => key === 'name')
        return false
      },
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
  setup(props: { to: _RouteLocationBase|string|unknown}) {
    /**
     * @desc Bond redirection
     * string if external link (ex. https://www.google.com/)
     * object if internal link (ex. { name: 'index', ... }
    */

    const isExternal = computed<boolean>(() => typeof props.to === 'string')

    const routeVue = computed<RouteLocation|null>(() => {
      if (typeof props.to === 'object') return router.resolve({ name: (props.to as _RouteLocationBase).name as string|symbol|undefined })
      return null
    })

    return {
      routeVue,
      isExternal,
    }
  },
})
</script>

<style lang="sass">
.bond
  $self: &
  cursor: pointer
  flex-direction: row
  display: inline-flex
  text-decoration: none
  align-items: baseline

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
