<template>
  <div class="home-page">
    <div class="home-page-head">
      <div class="head">
        <h1>YOUYI</h1>
      </div>
      <div class="search">
        <van-icon name="search" />
        <span>搜一搜：疾病/症状/医生/健康知识</span>
      </div>
    </div>
    <div class="home-page-nav">
      <van-row>
        <van-col span="8">
          <router-link to="/" class="nav">
            <svg class="icon head-portrait" aria-hidden="true">
              <use xlink:href="#icon-yisheng" />
            </svg>
            <p class="title">问医生</p>
            <p class="desc">按科室查问医生</p>
          </router-link>
        </van-col>
        <van-col span="8">
          <router-link
            to="/consult/fast"
            class="nav"
            style="text-align: center"
          >
            <svg class="icon head-portrait" aria-hidden="true">
              <use xlink:href="#icon-wenzhen" />
            </svg>
            <p class="title">极速问诊</p>
            <p
              class="desc"
              style="
                font-size: 2.93333vw;
                color: var(--cp-tag);
                margin-top: 0.53333vw;
              "
            >
              20s医生极速回复
            </p>
          </router-link>
        </van-col>
        <van-col span="8">
          <router-link to="/" class="nav">
            <svg class="icon head-portrait" aria-hidden="true">
              <use xlink:href="#icon-menzhen" />
            </svg>
            <p class="title">开药门诊</p>
            <p class="desc">线上买药更方便</p>
          </router-link>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="6">
          <router-link to="/" class="nav min">
            <svg class="icon head-portrait" aria-hidden="true">
              <use xlink:href="#icon-yaopindingdan" />
            </svg>
            <p class="title">药品订单</p>
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link to="/" class="nav min">
            <svg class="icon head-portrait" aria-hidden="true">
              <use xlink:href="#icon-jiankangdangan " />
            </svg>
            <p class="title">健康档案</p>
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link to="/" class="nav min">
            <svg class="icon head-portrait" aria-hidden="true">
              <use xlink:href="#icon-yishengchufang " />
            </svg>
            <p class="title">我的处方</p>
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link to="/" class="nav min">
            <svg class="icon head-portrait" aria-hidden="true">
              <use xlink:href="#icon-a-1-13 " />
            </svg>
            <p class="title">疾病查询</p>
          </router-link>
        </van-col>
      </van-row>
    </div>
    <div class="home-page-swipe">
      <van-swipe lazy-render>
        <van-swipe-item v-for="image in images" :key="image">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="home-page-follow">
      <van-tabs v-model:active="active" shrink sticky class="tabs">
        <van-tab title="关注">
          <FollowDoctor :followDoctore="followDoctore"></FollowDoctor>
          <KnowledgeList> </KnowledgeList>
        </van-tab>
        <van-tab title="推荐">2</van-tab>
        <van-tab title="减脂">3</van-tab>
        <van-tab title="饮食">4</van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import KnowledgeList from './compoents/KnowledgeList.vue'
import type { DoctorDataRow } from '@/types/doctor'
import { getPatientDetail } from '@/api/doctors'
import { onMounted } from 'vue'
import FollowDoctor from './compoents/FollowDoctor.vue'
import { useWindowSize } from '@vueuse/core'
const images = [
  'https://cp.itheima.net/assets/ad.c4ee3bf4.png',
  'https://cp.itheima.net/assets/ad.c4ee3bf4.png'
]
let active = ref(0)

const followDoctore = ref<DoctorDataRow[]>([])

const initFollowDoctore = async () => {
  const res = await getPatientDetail()
  followDoctore.value = res.data.rows
}
const { width } = useWindowSize()
onMounted(() => {
  initFollowDoctore()
})
</script>

<style lang="scss" scoped>
.home-page {
  .home-page-head {
    .head {
      height: 100px;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 90px;
        background: linear-gradient(180deg, rgba(62, 206, 197, 0.85), #26bcc6);
        border-bottom-left-radius: 150px 20px;
        border-bottom-right-radius: 150px 20px;
      }
      h1 {
        font-size: 4.8vw;
        color: #000;
        font-weight: 400;
        line-height: 1;
        padding: 5.33333vw 0 5.33333vw 5.33333vw;
        z-index: 9999;
      }
    }
    .search {
      position: absolute;
      top: 15vw;
      left: 50%;
      transform: translateX(-50%);
      height: 10.66667vw;
      width: 340px;
      border-radius: 5.33333vw;
      background-color: #fff;
      box-shadow: 0px 5.66667vw 4vw -1.33333vw rgb(239 245 252);
      display: flex;
      align-items: center;
      padding: 0 24px;
      box-sizing: border-box;
      font-size: 3.46667vw;
      color: var(--cp-dark);
      i {
        margin-right: 5px;
        font-size: 18px;
      }
      span {
        font-weight: 400;
      }
    }
  }
  .home-page-nav {
    padding: 10px 15px 0 15px;
    .van-col--8,
    .van-col--6 {
      .router-link-active {
        text-align: center;
        padding: 13px 0;
        .desc {
          font-size: 2.93333vw;
          color: var(--cp-tag);
          margin-top: 0.53333vw;
        }
      }
      display: flex;
      align-items: center;
      justify-content: center;
      .icon {
        font-size: 50px;
      }
    }
    .van-col--6 {
      .icon {
        font-size: 35px;
      }
    }
  }
  .home-page-swipe {
    padding: 2.66667vw 4vw;
    height: 26.66667vw;
    .van-swipe-item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .home-page-follow {
    background-color: var(--cp-bg);
    height: 66.66667vw;
    ::v-deep .van-tabs {
      ::v-deep .van-tabs__nav {
        padding: 0 0 15px 0;
      }
      .van-tabs__line {
        width: 20px;
        background-color: var(--cp-primary);
      }
      .van-tab {
        padding: 0 15px;
      }
    }
  }
  ::v-deep .van-swipe__indicator--active {
    background-color: #fff;
  }
}
</style>
