<template>
  <van-nav-bar
    :title="title"
    :left-text="leftText"
    :left-arrow="isleftarrow"
    :right-text="rightText"
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
    <template #right v-if="slot">
      <slot></slot>
    </template>
  </van-nav-bar>
</template>
<script setup lang="ts">
const {
  title,
  leftText = '返回',
  isleftarrow,
  rightText,
  slot
} = defineProps<{
  title?: string
  leftText: string
  rightText?: string
  isleftarrow?: Boolean
  slot?: string
}>()
const emit = defineEmits<{
  (e: 'onClickRight'): void
  (e: 'onClickLeft'): void
}>()
const onClickLeft = () => {
  emit('onClickLeft')
}
const onClickRight = () => {
  emit('onClickRight')
}
</script>

<style></style>
