<template>
  <div class="layout-page">
    <router-view></router-view>
    <van-tabbar route v-model="active">
      <van-tabbar-item to="/home">
        首页
        <template #icon="props">
          <i
            :class="`${
              props.active
                ? 'iconfont icon-shouye'
                : 'iconfont icon-xiaoxizhongxin'
            }`"
          ></i>
        </template>
      </van-tabbar-item>

      <van-tabbar-item to="/article"
        >健康百科
        <template #icon="props">
          <i
            :class="`${
              props.active
                ? 'iconfont icon-xiaoxizhongxin'
                : 'iconfont icon-jiankangbaike'
            }`"
          ></i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/notify"
        >消息中心
        <template #icon="props">
          <i
            :class="`${
              props.active
                ? 'iconfont icon-xiaoxizhongxin'
                : 'iconfont icon-jiankangbaike'
            }`"
          ></i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/user"
        >我的
        <template #icon="props">
          <i
            :class="`${
              props.active
                ? 'iconfont icon-jiankangbaike'
                : 'iconfont icon-wode'
            }`"
          ></i>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const active = ref(0)
</script>
<style lang="scss" scoped>
.van-safe-area-bottom {
  display: flex;
  align-items: center;
  justify-content: space-around;
  .iconfont {
    font-size: 21px;
    ::v-deep .van-tabbar-item__text {
      font-size: 11px;
    }
  }
}
</style>
