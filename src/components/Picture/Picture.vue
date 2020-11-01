<template>
  <div
    class="picture"
    v-lazy-load="!!placeholder"
  >
    <img
      data-placeholder
      class="picture__placeholder"
      :src="/^http/.test(placeholder) ? placeholder : require(`@/assets/images/${placeholder}`)"
      v-if="placeholder"
    >
    <img
      data-image
      class="picture__image"
      :alt="alt"
      :data-url="/^http/.test(src) ? src : require(`@/assets/images/${src}`)"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { DirectiveElement } from '@/scripts/contracts/interfaces'

export default defineComponent({
  name: 'Picture',
  directives: {
    'lazy-load': {
      mounted(el: DirectiveElement, binding) {

        const image = el.querySelector('.picture__image') as HTMLImageElement

        if (!image) {
          console.error('[v-lazy-load] provided component doesn\'t contain element with class \'image\'')
          return false
        }

        if (typeof binding.value !== 'boolean') {
          console.error('[v-lazy-load] provided value is not a boolean')
          return false
        }

        if (Object.keys(binding.modifiers).length) console.warn('[v-lazy-load] no modifiers allowed')

        function loadImage() {
          if (image) {
            el.eventFn = () => el.classList.add('picture--loaded')
            image.addEventListener('load', el.eventFn)

            el.eventError = () => console.error('[v-lazy-load] error eventlistener')
            image.addEventListener('error', el.eventError)

            image.src = image.dataset.url as string
          }
        }

        function handleIntersect(
          entries: IntersectionObserverEntry[],
          observer: IntersectionObserver,
        ) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadImage()
              observer.unobserve(el)
            }
          })
        }

        function createObserver() {
          const options = { root: null, threshold: 0 }
          const observer = new IntersectionObserver(handleIntersect, options)
          observer.observe(el)
        }

        if (window.IntersectionObserver && binding.value) return createObserver()
        return loadImage()
      },
      unmounted(el: DirectiveElement) {
        const image = el.querySelector('.picture__image') as HTMLImageElement

        if (image) {
          image.removeEventListener('load', el.eventFn as EventListener)
          image.removeEventListener('error', el.eventError as EventListener)
        }
      },
    },
  },
  props: {
    alt: { type: String, default: '' },
    src: { type: String, required: true },
    placeholder: { type: String, default: '' },
  },
})
</script>

<style lang="sass">
.picture
  $self: &
  width: 100%
  height: auto
  position: relative

  &__placeholder, &__image
    width: 100%
    object-fit: cover

  &__placeholder
    top: 0
    left: 0
    z-index: 0
    position: absolute

  &__image
    z-index: 1
    opacity: 0
    position: relative

  &--loaded

    #{ $self }__image
      opacity: 1
      transition: opacity .2s linear
</style>
