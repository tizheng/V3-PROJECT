<template>
  <div class="follow-doctor">
    <div className="head">
      <p>推荐关注</p>
      <a href="javascript:;"> 查看更多<i class="van-icon van-icon-arrow" /></a>
    </div>
    <div class="body">
      <van-swipe :loop="false" :width="156">
        <van-swipe-item
          class="item"
          v-for="item in followDoctore"
          :key="item.id"
        >
          <van-image round :src="item.avatar" />
          <p class="name">{{ item.name }}</p>
          <p class="van-ellipsis">{{ item.hospitalName }}</p>
          <p>{{ item.positionalTitles }}</p>
          <van-button
            round
            size="small"
            type="primary"
            @click="follow(item)"
            :loading="loading"
            >{{ item.likeFlag ? '已关注' : '+ 关注' }}
          </van-button>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { DoctorDataRow } from '@/types/doctor'
import { useFollow } from '@/composable/index'
defineProps<{
  followDoctore: DoctorDataRow[]
}>()
const { loading, follow } = useFollow()
</script>

<style lang="scss" scoped>
.follow-doctor {
  background-color: var(--cp-bg);
  height: 250px;
  .head {
    display: flex;
    justify-content: space-between;
    height: 45px;
    align-items: center;
    padding: 0 15px;
    font-size: 13px;
    > a {
      color: var(--cp-tip);
    }
  }
  .body {
    width: 100%;
    overflow: hidden;
    .item {
      // display: flex;
      // flex-direction: column;
      // align-items: center;
      padding: 17px;
      text-align: center;
      box-sizing: border-box;
      justify-content: center;
      width: 36vw;
      height: 50.66667vw;
      background: #fff;
      border-radius: 5.33333vw;
      margin-left: 17px;
      :deep(.van-image__img) {
        width: 58px;
        height: 58px;
        // vertical-align: top;
        border-radius: 50%;
        margin: 0 auto 8px;
      }
      > p {
        margin-bottom: 0;
        font-size: 11px;
        color: var(--cp-tip);
        &.name {
          font-size: 13px;
          color: var(--cp-text1);
          margin-bottom: 5px;
        }
      }
      > .van-button {
        padding: 0 12px;
        height: 28px;
        margin-top: 8px;
        width: 72px;
      }
    }
  }
}
</style>
