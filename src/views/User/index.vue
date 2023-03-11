<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getUser } from '@/api/user'
import type { userData } from '@/types/user'
import { useUserStore } from '@/stores'
import router from '@/router'
import { showConfirmDialog } from 'vant'
const tools = [
  { label: '我的问诊', path: '/user/consult', icon: 'iconfont icon-QQ' },
  { label: '我的处方', path: '/', icon: 'iconfont icon-QQ' },
  { label: '家庭档案', path: '/user/patient', icon: 'iconfont icon-QQ' },
  { label: '地址管理', path: '/user/address', icon: 'iconfont icon-QQ' },
  { label: '我的评价', path: '/', icon: 'iconfont icon-QQ' },
  { label: '官方客服', path: '/', icon: 'iconfont icon-QQ' },
  { label: '设置', path: '/', icon: 'iconfont icon-QQ' }
]
const user = ref<userData>()
const store = useUserStore()
const initUser = async () => {
  const res = await getUser()
  user.value = res.data
}

const loginOut = () => {
  showConfirmDialog({
    title: '退出登录',
    message: '是否确认退出登录'
  })
    .then(() => {
      store.delUser()
      router.push('/login')
      //防止刷新不退出的情况
      router.go(0)
    })
    .catch(() => {
      // on cancel
    })
}
onMounted(() => {
  initUser()
})
</script>

<template>
  <div class="user-page">
    <div class="user-page-head">
      <div class="top">
        <div class="avator">
          <img :src="user?.avatar" />
        </div>
        <div class="info">
          <h4>{{ user?.account }}</h4>
          <p>编辑</p>
        </div>
      </div>
      <div class="content">
        <van-row justify="center">
          <van-col span="6">
            <p>{{ user?.collectionNumber }}</p>
            <p>收藏</p>
          </van-col>
          <van-col span="6">
            <p>{{ user?.likeNumber }}</p>
            <p>关注</p>
          </van-col>
          <van-col span="6">
            <p>{{ user?.score }}</p>
            <p>积分</p>
          </van-col>
          <van-col span="6">
            <p>{{ user?.couponNumber }}</p>
            <p>优惠券</p>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="user-page-content">
      <div class="user-page-order">
        <div class="head">
          <h3>药品订单</h3>
          <router-link to="/order"
            >全部订单 <van-icon name="arrow"
          /></router-link>
        </div>
        <div class="content">
          <van-row>
            <van-col span="6">
              <van-badge :content="user?.orderInfo.shippedNumber || ''">
                <i class="iconfont icon-daifukuan1" style="color: #fdb136"></i>
              </van-badge>
              <p>待付款</p>
            </van-col>
            <van-col span="6">
              <van-badge :content="user?.orderInfo.shippedNumber || ''">
                <i class="iconfont icon-daifahuo1" style="color: #597bf3"></i>
              </van-badge>
              <p>待发货</p>
            </van-col>
            <van-col span="6">
              <van-badge :content="user?.orderInfo.shippedNumber || ''">
                <i class="iconfont icon-daishouhuo1" style="color: #fd4d4d"></i>
              </van-badge>
              <p>待收货</p>
            </van-col>
            <van-col span="6">
              <van-badge :content="user?.orderInfo.shippedNumber || ''">
                <i class="iconfont icon-yiwancheng" style="color: #58dbc5"></i>
              </van-badge>
              <p>已完成</p>
            </van-col>
          </van-row>
        </div>
      </div>
      <div class="user-page-tools">
        <h3>快捷工具</h3>
        <van-cell-group>
          <template v-for="item in tools" :key="item.label">
            <van-cell
              :title="item.label"
              :path="item.path"
              is-link
              style="font-size: 13px"
            >
              <template #icon>
                <i :class="item.icon" style="margin-right: 0px"></i>
              </template>
            </van-cell>
          </template>
        </van-cell-group>
      </div>
    </div>
    <div class="user-page-loginOut">
      <div @click="loginOut">退出登录</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.user-page {
  height: 800px;
  background-color: #f6f7f9;
  .user-page-head {
    height: 200px;
    background: linear-gradient(
      180deg,
      rgba(44, 181, 165, 0.46),
      rgba(44, 181, 165, 0)
    );
    // margin: 0 -15px;
    padding: 0 15px;
    .top {
      display: flex;
      padding-top: 50px;
      align-items: center;
      .avator img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
      }
      .info {
        flex: 1;
        margin-left: 10px;
        h4 {
          margin-top: 10px;
          margin-bottom: 10px;
        }
      }
    }
    .content {
      .van-row {
        margin: 0 -15px;
        padding-top: 15px;
        p {
          text-align: center;
          &:first-child {
            font-size: 18px;
            font-weight: 500;
          }
          &:last-child {
            color: var(--cp-dark);
            font-size: 12px;
            padding-top: 4px;
          }
        }
      }
    }
  }
  .user-page-content {
    padding: 0 15px;
    background-color: #f6f7f9;
    box-sizing: border-box;
    .user-page-order {
      background-color: #fff;
      border-radius: 8px;
      margin-bottom: 15px;
      padding-bottom: 15px;
      .head {
        display: flex;
        justify-content: space-between;
        line-height: 50px;
        padding: 0 15px;
        > a {
          color: var(--cp-tip);
        }
      }
      .content {
        .van-col {
          text-align: center;
          .iconfont {
            font-size: 30px;
          }
          p {
            font-size: 12px;
            padding-top: 4px;
          }
        }
      }
    }
    .user-page-tools {
      background-color: #fff;
      border-radius: 8px;
      padding: 0 15px;
      h3 {
        padding-top: 10px;
        padding-bottom: 10px;
      }
      .van-hairline--top-bottom:after {
        border-width: 0;
      }
      .van-cell {
        &:after {
          left: var(--cp-text3);
        }
        .iconfont {
          padding-right: 10px;
        }
        .van-cell__title {
          font-size: 5px;
          span {
            font-size: 5px;
          }
        }
        padding: 10px 0;
      }
    }
  }
  .user-page-loginOut {
    text-align: center;
    font-size: 13px;
    color: red;
    margin-top: 20px;
  }
}
</style>
<style></style>
