<template>
  <div>
    <div class="knowledge-list">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <knowledge-card
          v-for="items in articlesList"
          :key="items.id"
          :items="items"
        ></knowledge-card>
      </van-list>
    </div>
  </div>
</template>
<script setup lang="ts">
import KnowledgeCard from './KnowledgeCard.vue'
import { getArticle } from '@/api/articles'
import type { articleDateRow } from '@/types/consult'
import { ref, onMounted } from 'vue'
const articlesList = ref<articleDateRow[]>([])
const current = ref(1)
const pageSize = ref(2)
const total = ref()
const initArticles = async () => {
  const res = await getArticle('like', current.value, pageSize.value)
  articlesList.value = res.data.rows
  total.value = res.data.pageTotal
}
const loading = ref(false)
const finished = ref(false)
const onLoad = async () => {
  const res = await getArticle('like', current.value, pageSize.value)
  articlesList.value.push(...res.data.rows)
  if (articlesList.value.length >= total.value) {
    finished.value = true
  } else {
    current.value++
  }
  // 加载状态结束
  loading.value = false
}
onMounted(() => {
  initArticles()
})
</script>
<style lang="scss" scoped></style>
