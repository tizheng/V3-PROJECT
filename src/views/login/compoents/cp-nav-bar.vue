<template>
  <div>
    <van-nav-bar
      left-text=""
      :title="title"
      :right-text="rightText"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>
<script setup lang="ts">
import router from '@/router'
const onClickLeft = () => {
  history.state?.back ? router.back() : router.push('/')
}
const { title, rightText } = defineProps<{
  title?: string
  rightText: string
}>()
const emit = defineEmits<{
  (e: 'onClickRight'): void
}>()
const onClickRight = () => {
  emit('onClickRight')
}
</script>

<style lang="scss" scoped>
:v-deep(.van-nav-bar__arrow) {
  color: #000;
}
:deep(.van-nav-bar__text) {
  font-weight: 700;
}
</style>
