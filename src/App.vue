<template>
  <router-view />
</template>
<script setup lang="ts"></script>
<style lang="scss">
#nprogress .bar {
  background: var(--cp-primary) !important; //自定义颜色
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
