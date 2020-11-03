<template>
  <div class="index">
    <img
      class="index__logo"
      alt="logo of library"
      src="@/assets/images/logo.png"
    >

    <!-- Title -->
    <div class="index__component">
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
      <SvgIcon
        icon="placeholder"
        style="width: 1.5rem; height: 1.5rem;"
      />
    </div>

    <!-- Bond -->
    <div class="index__component">
      <div class="index__title">
        Bond
      </div>
      <Bond
        type="primary"
        to="https://google.com"
        style="margin-right: 10px;"
      >
        Bond
      </Bond>
      <Bond
        reversed
        type="secondary"
        icon="placeholder"
        style="margin-right: 10px;"
        :to="{ name: 'svgIcon' }"
      >
        Bond
      </Bond>
    </div>

    <!-- ProgressBar -->
    <div class="index__component">
      <div class="index__title">
        ProgressBar
      </div>
      <ProgressBar :progression="35" />
    </div>

    <!-- Button -->
    <div class="index__component">
      <div class="index__title">
        Button
      </div>
      <Button
        size="small"
        type="primary"
        style="margin-right: 10px;"
      >
        Button
      </Button>
      <Button
        reversed
        outlined
        size="medium"
        type="secondary"
        icon="placeholder"
        style="margin-right: 10px;"
        @click="handleEvent"
      >
        Button
      </Button>
      <Button
        disabled
        size="large"
        type="secondary"
        style="margin-right: 10px;"
      >
        Button
      </Button>
    </div>

    <!-- Picture -->
    <div class="index__component">
      <div class="index__title">
        Picture
      </div>
      <Picture
        src="desert.jpg"
        style="width: 80%;"
        placeholder="placeholder.png"
      />
      <Picture
        src="mountain.jpg"
        style="width: 80%;"
        placeholder="placeholder.png"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Bond from '@/components/Bond/Bond.vue'
import Title from '@/components/Title/Title.vue'
import Button from '@/components/Button/Button.vue'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
import Picture from '@/components/Picture/Picture.vue'
import ProgressBar from '@/components/ProgressBar/ProgressBar.vue'

export default defineComponent({
  name: 'Index',
  components: {
    Bond,
    Title,
    Button,
    SvgIcon,
    Picture,
    ProgressBar,
  },
  setup() {
    function handleEvent(event: Event) {
      console.info('in handleEvent', event)
    }

    return {
      handleEvent,
    }
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
  background-color: white

  &__logo
    left: 50%
    width: 60px
    height: 60px
    position: relative
    margin-bottom: 20px
    transform: translateX(-50%)

  &__component
    padding: 0 20px
    margin-bottom: 40px

  &__title
    font-size: 20px
    margin-bottom: 20px
    padding-bottom: 10px
    border-bottom: 1px solid $tertiary
</style>
