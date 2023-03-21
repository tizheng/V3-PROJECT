<script setup lang="ts">
import { onMounted } from 'vue'
import { ref } from 'vue'
import { hosDepartments } from '@/api/hosDepartment'
import type { Child, Department } from '@/types/hospitalDepartment'
const active = ref(0)
//初始化医院科室数据
const hospitalList = ref<Department[]>([])
const inithospitalDepartment = async () => {
  const res = await hosDepartments()
  hospitalList.value = res.data
}
const handleChange = (val: string) => {
  console.log(val)
}
onMounted(() => {
  inithospitalDepartment()
})
</script>

<template>
  <div class="consult-dep-page">
    <NavBar
      :left-text="''"
      :right-text="''"
      :left-arrow="true"
      :title="'选择科室'"
      class="title"
    />
    <div class="wrapper">
      <van-sidebar v-model="active" @change="handleChange">
        <van-sidebar-item
          :title="item.name"
          v-for="item in hospitalList"
          :key="item.id"
        />
      </van-sidebar>
      <div class="sub-dep">
        <router-link to="/consult/illness">科室一</router-link>
        <router-link to="/consult/illness">科室二</router-link>
        <router-link to="/consult/illness">科室三</router-link>
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
.van-sidebar {
  width: 114px;
  &-item {
    padding: 14px;
    color: var(--cp-tag);
    &--select {
      color: var(--cp-main);
      font-weight: normal;
      &::before {
        display: none;
      }
    }
  }
}
.consult-dep-page {
  .wrapper {
    display: flex;
    height: 100vh;
    overflow-y: auto; /* 视口高度内显示滚动条 */
    .sub-dep {
      flex: 1;
      height: 100%;
      overflow-y: auto;
      > a {
        display: block;
        padding: 14px 30px;
        color: var(--cp-dark);
      }
    }
  }
}
::v-deep .van-sidebar__content {
  overflow-y: auto;
}
</style>
