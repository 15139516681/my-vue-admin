<template>
  <el-container class="layout">
    <layoutHeader :class="{ 'header-scroll-shadow': isScroll }"></layoutHeader>
    <el-container class="layout-content">
      <layoutAside></layoutAside>
      <el-scrollbar class="scroll-box" @scroll="scroll">
        <el-main class="frame-view">
          <router-view></router-view>
        </el-main>
      </el-scrollbar>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import layoutAside from "./layout-aside.vue";
import layoutHeader from "./layout-header.vue";
const isScroll = ref(false);
const scroll = (scrolldata: any) => {
  if (scrolldata.scrollTop) {
    isScroll.value = true;
  } else {
    isScroll.value = false;
  }
};
</script>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  background-color: #f7f8fc;
  .layout-content {
    width: 1440px;
    margin: 0 auto;
    padding-top: 56px;
    background-color: #f7f8fc;
  }
  .scroll-box {
    height: calc(100vh - 56px);
    :deep(.el-scrollbar__bar) {
      top: 18px;
    }
  }
  .frame-view {
    background-color: #fff;
    border-radius: 4px;
    width: 1204px;
    margin-top: 16px;
    margin-right: 16px;
    min-height: calc(100vh - 88px);
  }
  .header-scroll-shadow {
    box-shadow: 0px 0 8px 0px #eeeeee;
  }
}
</style>
