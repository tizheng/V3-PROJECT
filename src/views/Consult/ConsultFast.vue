<script setup lang="ts">
import { doctorStore } from '@/stores'

const store = doctorStore()
</script>

<template>
  <div class="consult-fast-page">
    <NavBar
      :left-text="''"
      :right-text="'问诊记录'"
      :left-arrow="true"
      :title="'极速问诊'"
      class="title"
    />

    <div class="fast-logo">
      <img
        src="https://cp.itheima.net/assets/consult-fast.d1432ec9.png"
        class="img"
      />
      <p class="text"><span>20s</span> 快速匹配专业医生</p>
    </div>
    <div class="fast-type">
      <div class="fast-type">
        <router-link
          to="/consult/dep"
          @click="store.setIllnessType(1)"
          class="item"
        >
          <div class="info">
            <p>三甲图文问诊</p>
            <p>三甲主治及以上级别医生</p>
          </div>
          <van-icon name="arrow"></van-icon>
        </router-link>
        <router-link
          to="/consult/dep"
          class="item"
          @click="store.setIllnessType(0)"
        >
          <div class="info">
            <p>普通图文问诊</p>
            <p>二甲主治及以上级别医生</p>
          </div>
          <van-icon name="arrow"></van-icon>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  color: #323232;

  ::v-deep .van-nav-bar__title {
    font-weight: 400 !important;
  }
}
.fast-logo {
  padding: 30px 0;
  text-align: center;
  box-sizing: border-box;
  .img {
    width: 240px;
  }
  .text {
    font-size: 16px;
    margin-top: 10px;
    > span {
      color: var(--cp-primary);
    }
  }
}
.fast-type {
  padding: 15px;
  .item {
    display: flex;
    padding: 16px;
    border-radius: 4px;
    align-items: center;
    margin-bottom: 16px;
    border: 0.5px solid var(--cp-line);
  }
  .pic {
    width: 40px;
    height: 40px;
  }
  .info {
    margin-left: 12px;
    flex: 1;
    > p:first-child {
      font-size: 16px;
      color: var(--cp-text1);
      margin-bottom: 4px;
    }
    > p:last-child {
      font-size: 13px;
      color: var(--cp-tag);
    }
  }
  .van-icon {
    color: var(--cp-tip);
  }
}
</style>
