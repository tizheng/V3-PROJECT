<template>
  <div class="knowledge-card van-hairline--bottom">
    <div class="head">
      <van-image
        round
        class="avatar"
        src="https://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/consult/deafaultAvatar.jpg"
      ></van-image>
      <div class="info">
        <p class="name">{{ items.creatorName }}</p>
        <p class="dep van-ellipsis">{{ items.creatorHospatalName }}</p>
      </div>
      <van-button class="btn" size="small" round>{{
        items.likeFlag ? '已关注' : '+ 关注'
      }}</van-button>
    </div>
    <div class="body">
      <div class="title">{{ items.title }}</div>
      <div class="content van-multi-ellipsis--l2">
        {{ delHtml(items.content) }}
      </div>
      <div class="picture">
        <van-image
          v-for="item in items.coverUrl"
          :key="item"
          width="123"
          height="123"
          :src="item"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { articleDateRow } from '@/types/consult'
defineProps<{
  items: articleDateRow
}>()

const delHtml = (content: string) => {
  return content.replace(/<[^>]+>/g, '')
}
</script>

<style lang="scss" scoped>
.knowledge-card {
  padding: 21px 5px 0 16px;
  .head {
    display: flex;
    align-items: center;
    .avatar {
      width: 38px;
      height: 38px;
      margin-right: 10px;
    }
    .info {
      width: 200px;
      padding-right: 10px;
      .name {
        color: var(--cp-text2);
      }
      .dep {
        color: var(--cp-tip);
        font-size: 12px;
      }
    }
    .btn {
      padding: 0 12px;
      border-color: var(--cp-primary);
      color: var(--cp-primary);
      height: 28px;
      width: 72px;
    }
  }
  .body {
    .title {
      font-size: 4.26667vw;
      margin-top: 2.13333vw;
      font-weight: 400;
    }
    .content {
      margin-top: 1.86667vw;
      line-height: 2;
      color: #6f6f6f;
    }
    .picture {
      margin-top: 5px;
      .van-image {
        margin-right: 13px;
        &:last-child {
          margin-right: 0;
        }
        :deep(.van-image__img) {
          border-radius: 10px;
          background-size: contain;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
