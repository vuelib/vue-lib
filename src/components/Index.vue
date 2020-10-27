<template>
  <div class="index">
    <div class="index__component">
      <!-- Title -->
      <div class="index__title">
        Title
      </div>
      <Title>
        Title
      </Title>
    </div>
    <!-- SvgIcon -->
    <div class="index__component">
      <div class="index__title">
        SvgIcon
      </div>
      <SvgIcon icon="placeholder" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Title from '@/components/Title/Title.vue'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'

export default defineComponent({
  name: 'Index',
  components: {
    Title,
    SvgIcon,
  },
})
</script>

<style lang="sass">
.index
  width: 90%
  margin: 0 auto
  padding: 20px 0
  max-width: 1440px
  min-height: 100vh
  position: relative
  background-color: white

  &__component
    padding: 0 20px
    margin-bottom: 40px

  &__title
    font-size: 20px
    margin-bottom: 20px
    padding-bottom: 10px
    border-bottom: 1px solid $tertiary
</style>
