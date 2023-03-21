<template>
  <div class="radio">
    <a
      class="item"
      href="javascript:;"
      v-for="item in options"
      :class="{ active: modelValue === item.value }"
      :key="item.value"
      @click="toggleActive(item.value)"
    >
      {{ item.label }}
    </a>
  </div>
</template>
<script setup lang="ts">
// import { ref } from 'vue'
// const options = ref([
//   {
//     name: '男',
//     value: 0
//   },
//   {
//     name: '女',
//     value: 1
//   }
// ])
defineProps<{
  options: {
    label: string
    value: string | number
  }[]
  modelValue?: string | number
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()
const toggleActive = (value: number | string) => {
  emit('update:modelValue', value)
}
</script>

<style lang="scss" scoped>
.radio {
  a {
    display: inline-block;
    width: 35px;
    height: 32px;
    margin: 0 10px 10px 0;
    padding: 0 15px;
    color: #3c3e42;
    font-size: 15px;
    text-align: center;
    line-height: 32px;

    background-color: var(--cp-bg);
  }
}

.active {
  border: 1px solid var(--cp-bg);
  border-color: var(--cp-primary) !important;
  background-color: var(--cp-plain) !important;
}
</style>
